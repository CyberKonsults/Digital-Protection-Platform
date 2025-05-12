// components/ParentDashboard/CourseProgress.tsx
'use client';

const mockCourses = [
  { child: 'Michael Taiwo', course: 'Digital Privacy Basics', progress: 80 },
  { child: 'Makayla Taiwo', course: 'Social Engineering 101', progress: 45 },
  { child: 'Josh Obi', course: 'Cybersecurity Fundamentals', progress: 100 },
];

export default function CourseProgress() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
      <table className="w-full text-sm text-left text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2">Child</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {mockCourses.map((entry, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="px-4 py-2">{entry.child}</td>
              <td className="px-4 py-2">{entry.course}</td>
              <td className="px-4 py-2">
                <div className="w-full bg-gray-700 rounded h-3">
                  <div
                    className="bg-blue-500 h-3 rounded"
                    style={{ width: `${entry.progress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-300 ml-2">{entry.progress}%</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
