// components/Header.tsx
'use client';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const sessionResult = useSession();
  const session = sessionResult?.data;
  const status = sessionResult?.status;

  if (status === 'loading' || !session || !session.user) return null;

  const name = session.user.name ?? 'User';
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <header className="bg-gray-900 text-white flex items-center justify-between px-6 py-3 border-b border-gray-700">
      <div className="text-xl font-bold">Digital Protection</div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col text-right">
          <span className="text-sm font-medium">{name}</span>
          <button
            onClick={() => signOut()}
            className="text-xs text-red-400 hover:underline"
          >
            Sign out
          </button>
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold">
          {initials}
        </div>
      </div>
    </header>
  );
}
