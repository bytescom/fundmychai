import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const PaymentSchema = new Schema({
    name: { type: String, required: true },
    to_user: { type: String, required: true },
    message: { type: String, required: true },
    amount: { type: String, required: true },
    order_id: { type: String, required: true },
    done: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);