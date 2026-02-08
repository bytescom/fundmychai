import connectDB from "@/app/db/connectDb";
import User from "@/app/models/userSchema";

export async function GET() {
  try {
    await connectDB();

    const count = await User.countDocuments();

    return Response.json({
      success: true,
      message: "MongoDB connected & readable ✅",
      totalUsers: count,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "DB read failed ❌",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
