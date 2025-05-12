// components/AdminDashboard.jsx

'use client';
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const sessionData = useSession();
  const session = sessionData?.data;
  const userRole = session?.user?.role || 'user';

  const isAdmin = userRole === 'admin';

  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    if (!isAdmin) return;
    fetch("/api/certificate-logs")
      .then(res => res.json())
      .then(data => {
        setLogs(data);
        setFilteredLogs(data);
      })
      .catch(() => {
        setLogs([]);
        setFilteredLogs([]);
      })
      .finally(() => setLoading(false));
  }, [isAdmin]);

  useEffect(() => {
    if (!isAdmin) return;
    let results = logs;
    if (search) {
      results = results.filter(log =>
        log.email.toLowerCase().includes(search.toLowerCase()) ||
        log.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (startDate) {
      results = results.filter(log => new Date(log.downloaded_at) >= new Date(startDate));
    }
    if (endDate) {
      results = results.filter(log => new Date(log.downloaded_at) <= new Date(endDate));
    }
    setFilteredLogs(results);
    setCurrentPage(1);
  }, [logs, search, startDate, endDate, isAdmin]);

  const paginatedLogs = filteredLogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredLogs.length / pageSize);

  const downloadCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Downloaded At'],
      ...filteredLogs.map(log => [
        log.name,
        log.email,
        new Date(log.downloaded_at).toLocaleString()
      ])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'certificate_logs.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAdmin) {
    return <p className="text-sm text-red-500">Access denied. Admins only.</p>;
  }

  if (loading) return <p className='text-sm text-gray-400'>Loading logs...</p>;

  return (
    <div>
      {/* Course Upload Section - Admin Only */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Admin: Upload New Course</h2>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await axios.post("/api/upload-course", {
                title: "Sample Course",
                description: "Uploaded by Admin",
              });
              alert("Course uploaded.");
            } catch (err) {
              alert("Upload failed");
            }
          }}
          className="bg-gray-800 p-4 rounded-lg space-y-2"
        >
          <input type="text" placeholder="Course Title" className="w-full px-2 py-1 rounded bg-gray-700 text-white" />
          <textarea placeholder="Description" className="w-full px-2 py-1 rounded bg-gray-700 text-white"></textarea>
          <button type="submit" className="bg-green-600 px-4 py-2 rounded text-white">Upload</button>
        </form>
      </div>

      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Search by name/email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-1 rounded bg-gray-700 text-white placeholder-gray-400 text-sm"
          />
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="px-2 py-1 rounded bg-gray-700 text-white text-sm"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="px-2 py-1 rounded bg-gray-700 text-white text-sm"
          />
        </div>
        <button onClick={downloadCSV} className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Export CSV</button>
      </div>
      <table className="w-full text-sm text-left text-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-600">Name</th>
            <th className="px-4 py-2 border-b border-gray-600">Email</th>
            <th className="px-4 py-2 border-b border-gray-600">Downloaded At</th>
          </tr>
        </thead>
        <tbody>
          {paginatedLogs.map((log, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border-b border-gray-700">{log.name}</td>
              <td className="px-4 py-2 border-b border-gray-700">{log.email}</td>
              <td className="px-4 py-2 border-b border-gray-700">{new Date(log.downloaded_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center gap-2 text-sm">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
