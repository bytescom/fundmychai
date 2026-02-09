"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/PaymentSchema"
import PageView from "@/app/models/PageViewSchema"
import User from "@/app/models/userSchema"
import connectDB from "@/app/db/connectDb"

// fetch user (all profile fields)
export const fetchUser = async (username) => {
    await connectDB();
    const user = await User.findOne({ username });
    if (!user) return null;
    return JSON.parse(JSON.stringify(user));
};

// Fetch user by email (for dashboard / session-based pages)
export const fetchUserByEmail = async (email) => {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) return null;
    return JSON.parse(JSON.stringify(user));
};

// Update user settings
export const updateUser = async (email, data) => {
    await connectDB();

    const updateFields = {
        name: data.displayName,
        username: data.username,
        bio: data.bio,
        about: data.aboutMe,
        location: data.location,
        socialLinks: {
            twitter: data.twitter,
            github: data.github,
            linkedin: data.linkedin,
            website: data.website,
        },
        updated_at: new Date(),
    };

    if (data.profileImage) updateFields.profile_img = data.profileImage;
    if (data.coverImage) updateFields.cover_img = data.coverImage;

    const updated = await User.findOneAndUpdate(
        { email },
        updateFields,
        { new: true }
    );
    if (!updated) return null;
    return JSON.parse(JSON.stringify(updated));
};

export const initiate = async (amount, to_User, name, message, tierType) => {
    await connectDB();

    var instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    })


    let options = {
        amount: Number.parseInt(amount) * 100, // Convert to paise (1 rupee = 100 paise)
        currency: "INR",
        receipt: "receipt#1",
    }

    let x = await instance.orders.create(options)

    // create a Payment object which shows a pending payment in the database
    await Payment.create({
        order_Id: x.id, 
        amount: amount,
        name: name,
        to_User: to_User,
        message: message,
        tierType: tierType,
    })

    return x;
};

// Track a page view for a creator's profile
export const trackPageView = async (username) => {
    await connectDB();
    await PageView.create({ username });
};

// Fetch earnings stats for a given timeframe
export const fetchEarningsStats = async (username, days = 30) => {
    await connectDB();

    const now = new Date();
    const periodStart = new Date(now - days * 24 * 60 * 60 * 1000);
    const priorStart = new Date(now - days * 2 * 24 * 60 * 60 * 1000);

    const [allTimeEarnings, periodEarnings, priorEarnings] = await Promise.all([
        Payment.aggregate([
            { $match: { to_User: username, done: true } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]),
        Payment.aggregate([
            { $match: { to_User: username, done: true, created_at: { $gte: periodStart } } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]),
        Payment.aggregate([
            { $match: { to_User: username, done: true, created_at: { $gte: priorStart, $lt: periodStart } } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]),
    ]);

    const totalEarnings = allTimeEarnings[0]?.total || 0;
    const currentEarnings = periodEarnings[0]?.total || 0;
    const prevEarnings = priorEarnings[0]?.total || 0;
    const earningsChange = prevEarnings > 0
        ? (((currentEarnings - prevEarnings) / prevEarnings) * 100).toFixed(1)
        : currentEarnings > 0 ? 100 : 0;

    return {
        allTime: totalEarnings,
        current: currentEarnings,
        change: parseFloat(earningsChange),
    };
};

// Fetch page view stats for a given timeframe
export const fetchPageViewStats = async (username, days = 30) => {
    await connectDB();

    const now = new Date();
    const periodStart = new Date(now - days * 24 * 60 * 60 * 1000);
    const priorStart = new Date(now - days * 2 * 24 * 60 * 60 * 1000);

    const [viewsCurrent, viewsPrior] = await Promise.all([
        PageView.countDocuments({ username, created_at: { $gte: periodStart } }),
        PageView.countDocuments({ username, created_at: { $gte: priorStart, $lt: periodStart } }),
    ]);

    const viewsChange = viewsPrior > 0
        ? (((viewsCurrent - viewsPrior) / viewsPrior) * 100).toFixed(1)
        : viewsCurrent > 0 ? 100 : 0;

    return {
        current: viewsCurrent,
        change: parseFloat(viewsChange),
    };
};

// Fetch recent supporters for the dashboard
export const fetchRecentSupporters = async (username, limit = 5) => {
    await connectDB();
    const supporters = await Payment.find({ to_User: username, done: true })
        .sort({ created_at: -1 })
        .limit(limit)
        .lean();
    return JSON.parse(JSON.stringify(supporters));
};