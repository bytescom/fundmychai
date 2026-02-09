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

      if (account.provider === "github") {
        try {
          await connectDB();

          const currUser = await User.findOne({ email: user.email });

          if (!currUser) {
            const fallbackName = user.name || " ";
            const username = user.email.split("@")[0].toLowerCase();
            const newUser = new User({
              name: fallbackName,
              email: user.email,
              username: username,
            });

            await newUser.save();
          }

        } catch (error) {
          return false;
        }
      }

      return true;
    },
    

    async session({ session }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });

        if (dbUser) {
          session.user.username = dbUser.username;
          session.user.name = dbUser.name;
          session.user.profile_img = dbUser.profile_img;
        }

      } catch (error) {
        // silently fail
      }

      return session;
    }
  }

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// export { authOptions as GET, authOptions as POST }