// components/AdminDashboard/ExportAdminData.tsx
'use client';

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

function downloadCSV(data: object[], filename: string) {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(obj => Object.values(obj).join(',')).join('\n');
  const csv = [headers, rows].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export default function ExportAdminData() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">🧾 Export Data</h2>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => downloadCSV(users, 'users.csv')}
          className="bg-blue-600 px-4 py-2 rounded text-white text-sm hover:bg-blue-500"
        >
          Export Users
        </button>
        <button
          onClick={() => downloadCSV(courses, 'courses.csv')}
          className="bg-green-600 px-4 py-2 rounded text-white text-sm hover:bg-green-500"
        >
          Export Courses
        </button>
        <button
          onClick={() => downloadCSV(certs, 'certificates.csv')}
          className="bg-purple-600 px-4 py-2 rounded text-white text-sm hover:bg-purple-500"
        >
          Export Certificates
        </button>
      </div>
    </section>
  );
}
