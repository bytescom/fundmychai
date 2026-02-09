import mongoose, { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_User: { type: String },
    message: { type: String },
    amount: { type: Number, required: true },
    tierType: { type: String, default: 'Cutting Chai' },
    order_Id: { type: String, required: true },
    signature: { type: String },
    done: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.models?.Payment || model("Payment", PaymentSchema);