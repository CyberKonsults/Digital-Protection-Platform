// components/AdminDashboard/AddCourseForm.tsx
'use client';
import { useState } from 'react';

export default function AddCourseForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Course "${title}" created successfully!`);
    setTitle('');
    setDescription('');
    setLevel('Beginner');
  };

  return (
    <section className="bg-gray-900 text-white p-6 rounded shadow mb-8">
      <h2 className="text-xl font-semibold mb-4">➕ Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Level</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white text-sm"
        >
          Create Course
        </button>
        {message && <p className="text-green-400 text-sm mt-2">{message}</p>}
      </form>
    </section>
  );
}
