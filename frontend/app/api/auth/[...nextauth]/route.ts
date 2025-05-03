import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
