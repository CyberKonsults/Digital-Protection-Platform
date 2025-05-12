// components/AdminDashboard/AdminAnalytics.tsx
'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';

const courseStats = [
  { title: 'Cyber Hygiene 101', completed: 22 },
  { title: 'Digital Privacy Basics', completed: 30 },
  { title: 'Social Engineering 101', completed: 15 },
];

export default function AdminAnalytics() {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">📊 Course Completion Analytics</h2>
      <div className="bg-gray-900 p-4 rounded shadow">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={courseStats} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="title" stroke="#ccc" />
            <YAxis stroke="#ccc" allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#38bdf8" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
