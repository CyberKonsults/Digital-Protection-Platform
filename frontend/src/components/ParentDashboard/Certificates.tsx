// components/ParentDashboard/Certificates.tsx
'use client';

const mockCertificates = [
  { child: 'Michael Taiwo', course: 'Intro to Cyber Hygiene', issued: '2025-04-15' },
  { child: 'Makayla Taiwo', course: 'Secure Internet Practices', issued: '2025-03-20' },
];

export default function Certificates() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>
      <table className="w-full text-sm text-left text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2">Child</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Issued</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockCertificates.map((cert, idx) => (
            <tr key={idx} className="border-t border-gray-700">
              <td className="px-4 py-2">{cert.child}</td>
              <td className="px-4 py-2">{cert.course}</td>
              <td className="px-4 py-2">{cert.issued}</td>
              <td className="px-4 py-2">
                <button className="text-xs text-blue-400 hover:underline">Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
