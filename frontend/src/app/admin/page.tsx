// app/admin/page.tsx
import React from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import ParentLayout from '../../components/layouts/ParentLayout';
import ParentDashboard from '../../components/ParentDashboard';
import AdminLayout from '../../components/layouts/AdminLayout';
import AdminDashboard from '../../components/AdminDashboard';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminDashboard />
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
}

