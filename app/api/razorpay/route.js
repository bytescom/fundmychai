import { NextResponse } from "next/server";
import crypto from "crypto";
import connectDB from "@/app/db/connectDb";
import Payment from "@/app/models/PaymentSchema";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();

    // Find the payment in DB
    const payment = await Payment.findOne({ order_Id: body.razorpay_order_id });
    if (!payment) {
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
    }

    // Use the environment variable for Razorpay secret
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json({ success: false, message: "Razorpay secret not configured" }, { status: 500 });
    }

    // Verify payment signature
    // Generate signature: order_id|payment_id with HMAC SHA256
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.razorpay_order_id + "|" + body.razorpay_payment_id)
      .digest("hex");

    const isValid = generatedSignature === body.razorpay_signature;

    if (isValid) {
      // Update the payment status
      const updatedPayment = await Payment.findOneAndUpdate(
        { order_Id: body.razorpay_order_id },
        { 
          done: true, 
          signature: body.razorpay_signature,
          updated_at: new Date()
        },
        { new: true }
      );
      
      return NextResponse.json({ 
        success: true, 
        message: "Payment verified successfully",
        payment: updatedPayment
      });
    } else {
      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
    }

  } catch (err) {
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
};
