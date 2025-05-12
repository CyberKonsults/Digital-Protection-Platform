// app/dashboard/page.tsx
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

import { SessionProvider as Provider } from "next-auth/react";

// Extend the Session type to include the 'role' property
declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // Add the role property
    };
  }
}
import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import ParentLayout from '../../components/layouts/ParentLayout';
import ParentDashboard from '../../components/ParentDashboard';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;

  const role = session?.user?.role;

  if (!['admin', 'parent'].includes(role ?? '')) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-gray-400">You don’t have permission to view this page.</p>
          <a href="/" className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded">Go Home</a>
        </div>
      </main>
    );

    return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Parent/Admin Dashboard</h1>
      {/* Dashboard content goes here */}
    </main>
    );

    return (
    <ProtectedRoute allowedRoles={['admin', 'parent']}>
      <main className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        {/* Protected content */}
      </main>
    </ProtectedRoute>
    );

    return (
    <ParentLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {/* Dashboard content */}
    </ParentLayout>
    );

    return (
    <ParentLayout>
      <ParentDashboard />
    </ParentLayout>
    );

  }
}
