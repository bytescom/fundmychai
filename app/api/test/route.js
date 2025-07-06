import connectDB from "@/app/db/connectDb";
import User from "@/app/models/userSchema";

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json({ users });
}