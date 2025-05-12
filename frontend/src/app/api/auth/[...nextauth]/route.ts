import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';


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

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, role } = body;

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 });
  }

  const { error } = await supabase
    .from('users')
    .update({ name, role })
    .eq('email', email);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}