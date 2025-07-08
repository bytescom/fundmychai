import mongoose, { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    order_id: { type: String, required: true },
    done: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.models?.Payment || model("Payment", PaymentSchema);