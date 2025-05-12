// components/layouts/ParentLayout.tsx
'use client';
import { ReactNode } from 'react';
import ProtectedRoute from '../ProtectedRoute';
import Sidebar from '../Sidebar';
import Header from '../Header';

interface ParentLayoutProps {
  children: ReactNode;
}

export default function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <ProtectedRoute allowedRoles={['parent']}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className="text-2xl font-bold mb-4">Parent Dashboard</div>
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
