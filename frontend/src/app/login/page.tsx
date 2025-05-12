'use client';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 items-center mt-10">
      <h1 className="text-xl font-bold">Login to Digital Protection</h1>
      <button
        onClick={() => signIn('email')}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Sign in with Email
      </button>
    </div>
  );
}
