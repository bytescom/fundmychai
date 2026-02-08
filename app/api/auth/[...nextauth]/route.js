import mongoose from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/app/models/userSchema";
import connectDB from "@/app/db/connectDb";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],

  pages: {
    signIn: '/auth/login',
    signUp: '/auth/signup',
  },

  callbacks: {
    async signIn({ user, account }) {

      console.log("➡️ signIn callback triggered", {
        email: user.email,
        provider: account.provider,
      });

      if (account.provider === "github") {
        try {
          console.log("🔌 Connecting to MongoDB...");
          await connectDB();
          console.log("✅ MongoDB connected");

          const currUser = await User.findOne({ email: user.email });
          console.log("🔍 User lookup result:", currUser ? "Found" : "Not found");

          if (!currUser) {
            const fallbackName = user.name || " ";
            const username = user.email.split("@")[0].toLowerCase();
            const newUser = new User({
              name: fallbackName,
              email: user.email,
              username: username,
            });

            await newUser.save();
            console.log("✅ New user saved:", newUser);
          }

        } catch (error) {
          console.error("❌ signIn error:", error.message);
          return false;
        }
      }

      return true;
    },
    

    async session({ session }) {
      console.log("➡️ session callback triggered for", session.user.email);

      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          session.user.username = dbUser.username;
          // You can optionally attach `dbUser._id`, `profile_img`, etc. here
          console.log("✅ Session enriched with DB user data");
        } else {
          console.log("⚠️ No user found in DB for session");
        }

      } catch (error) {
        console.error("❌ session error:", error.message);
      }

      return session;
    }
  }

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// export { authOptions as GET, authOptions as POST }