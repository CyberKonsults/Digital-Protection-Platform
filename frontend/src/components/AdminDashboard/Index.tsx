// components/AdminDashboard/index.tsx
'use client';

import AddCourseForm from './AddCourseForm';
import ExportAdminData from './ExportAdminData';

const users = [
  { id: 1, name: 'Michael Taiwo', role: 'user', status: 'active' },
  { id: 2, name: 'Makayla Taiwo', role: 'user', status: 'active' },
  { id: 3, name: 'Josh Obi', role: 'user', status: 'inactive' },
];

const courses = [
  { id: 1, title: 'Cyber Hygiene 101', enrolled: 25 },
  { id: 2, title: 'Digital Privacy Basics', enrolled: 32 },
];

const certs = [
  { user: 'Michael Taiwo', course: 'Cyber Hygiene 101', issued: '2025-04-10' },
  { user: 'Makayla Taiwo', course: 'Digital Privacy Basics', issued: '2025-04-21' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <AddCourseForm />
      <ExportAdminData />

      <section>
        <h2 className="text-2xl font-bold mb-4">📊 Platform Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 text-white p-4 rounded">Users: {users.length}</div>
          <div className="bg-gray-800 text-white p-4 rounded">Courses: {courses.length}</div>
          <div className="bg-gray-800 text-white p-4 rounded">Certificates: {certs.length}</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">🧑‍💻 Manage Users</h2>
        <table className="w-full text-sm text-left text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t border-gray-600">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-600 text-xs px-3 py-1 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">📚 Course Management</h2>
        <ul className="space-y-2">
          {courses.map(course => (
            <li key={course.id} className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between">
                <span>{course.title}</span>
                <span className="text-sm text-gray-400">{course.enrolled} enrolled</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">🎓 Certificate Issuance</h2>
        <table className="w-full text-sm text-left text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Issued</th>
            </tr>
          </thead>
          <tbody>
            {certs.map((c, idx) => (
              <tr key={idx} className="border-t border-gray-600">
                <td className="px-4 py-2">{c.user}</td>
                <td className="px-4 py-2">{c.course}</td>
                <td className="px-4 py-2">{c.issued}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
