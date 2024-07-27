import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/server";
import { Adapter } from "next-auth/adapters";
import Google from "next-auth/providers/google";
import github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db) as Adapter,
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
