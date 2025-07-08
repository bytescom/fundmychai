import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    username: { type: String, unique: true },
    key_Id: { type: String },
    key_Secret: { type: String },
    bio: { type: String },
    profile_img: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.models?.User || model("User", UserSchema);