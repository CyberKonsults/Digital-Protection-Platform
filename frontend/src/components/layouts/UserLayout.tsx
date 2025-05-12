// components/layouts/UserLayout.tsx
'use client';
import { ReactNode } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import Sidebar from '../Sidebar';
import Header from '../Header';

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <ProtectedRoute allowedRoles={['user']}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className="text-2xl font-bold mb-4">User Dashboard</div>
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
