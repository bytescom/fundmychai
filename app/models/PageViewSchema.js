import mongoose, { Schema, model } from "mongoose";

const PageViewSchema = new Schema({
    username: { type: String, required: true, index: true },
    created_at: { type: Date, default: Date.now },
});

// TTL index: auto-delete views older than 90 days to save space
PageViewSchema.index({ created_at: 1 }, { expireAfterSeconds: 90 * 24 * 60 * 60 });

export default mongoose.models?.PageView || model("PageView", PageViewSchema);
