import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    // Avoid multiple connections
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    
    const conn = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`); 
    
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}

export default connectDB;
