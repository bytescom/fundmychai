import { NextResponse } from "next/server";
import crypto from "crypto";
import connectDB from "@/app/db/connectDb";
import Payment from "@/app/models/PaymentSchema";

export const POST = async (req) => {
  await connectDB();

  try {
    const body = await req.json();
    
    console.log("🔍 Razorpay callback received:", {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
      has_signature: !!body.razorpay_signature
    });

    // Find the payment in DB
    const payment = await Payment.findOne({ order_Id: body.razorpay_order_id });
    if (!payment) {
      console.log("❌ Order not found:", body.razorpay_order_id);
      return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
    }

    // Use the environment variable for Razorpay secret
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.log("❌ Razorpay secret not configured");
      return NextResponse.json({ success: false, message: "Razorpay secret not configured" }, { status: 500 });
    }

    // Verify payment signature
    // Generate signature: order_id|payment_id with HMAC SHA256
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(body.razorpay_order_id + "|" + body.razorpay_payment_id)
      .digest("hex");

    const isValid = generatedSignature === body.razorpay_signature;

    console.log("🔐 Signature verification:", isValid ? "✅ Valid" : "❌ Invalid");

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
      
      console.log("✅ Payment verified and updated:", updatedPayment.order_Id);
      
      return NextResponse.json({ 
        success: true, 
        message: "Payment verified successfully",
        payment: updatedPayment
      });
    } else {
      console.log("❌ Payment verification failed - signature mismatch");
      return NextResponse.json({ success: false, message: "Payment verification failed" }, { status: 400 });
    }

  } catch (err) {
    console.error("❌ Razorpay verification error:", err);
    return NextResponse.json({ success: false, message: "Internal Server Error", error: err.message }, { status: 500 });
  }
};
