import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, unique: true },
    bio: { type: String, default: "" },
    about: {type: String, default: ""},
    location: {type: String},
    profile_img: { type: String },
    cover_img: { type: String },
    socialLinks: {
        twitter: String,
        github: String,
        linkedin: String,
        website: String
    },
    provider: { type: String },
    created_at: { type: Date, default: Date.now, immutable: true },
    updated_at: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
    this.updated_at = new Date();
    next();
});

UserSchema.pre("findOneAndUpdate", function (next) {
    this.set({ updated_at: new Date() });
    next();
});

export default mongoose.models?.User || model("User", UserSchema);

