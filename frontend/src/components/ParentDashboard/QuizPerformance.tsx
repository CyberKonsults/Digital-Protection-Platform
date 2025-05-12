// components/ParentDashboard/QuizPerformance.tsx
'use client';

const mockScores = [
  { child: 'Michael Taiwo', quiz: 'Phishing Awareness', score: 85 },
  { child: 'Makayla Taiwo', quiz: 'Password Safety', score: 92 },
  { child: 'Josh Obi', quiz: 'Cyber Ethics', score: 76 },
];

export default function QuizPerformance() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Quiz Performance</h2>
      <table className="w-full text-sm text-left text-white">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2">Child</th>
            <th className="px-4 py-2">Quiz</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {mockScores.map((item, idx) => (
            <tr key={idx} className="border-t border-gray-700">
              <td className="px-4 py-2">{item.child}</td>
              <td className="px-4 py-2">{item.quiz}</td>
              <td className="px-4 py-2">
                <span
                  className={`font-bold ${
                    item.score >= 90 ? 'text-green-400' : item.score >= 80 ? 'text-yellow-300' : 'text-red-400'
                  }`}
                >
                  {item.score}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
