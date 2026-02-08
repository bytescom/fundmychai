"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/PaymentSchema"
import connectDB from "@/app/db/connectDb"

export const initiate = async (amount, to_User, name, message) => {
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
    })

    return x;
};