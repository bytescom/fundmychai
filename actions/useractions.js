"use server"

import Razorpay from "razorpay"
import Payment from "@/app/models/PaymentSchema"
import User from "@/app/models/userSchema"
import connectDB from "@/app/db/connectDb"

export const initiate = async (amount, to_user, PaymentForm) => {
    await connectDB();
    var instance = new Razorpay({
        key_id: process.env.RASORPAY_KEY_ID, 
        key_secret:RASORPAY_KEY_SECERT,
    })


    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
        receipt: "receipt#1",
    }

    let x = await instance.orders.create(options)

    // create a Payment object which shows a pending payment in the database
    await Payment.create({
        order_id: x.id, 
        amount: amount,
        name: PaymentForm.name,
        to_user: to_user,
        message: PaymentForm.message,
    })

    return x;

};