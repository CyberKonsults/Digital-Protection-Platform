// components/UserDashboard/Badges.tsx
'use client';

const earned = [
  { label: 'Quiz Champ', icon: '🏆', description: 'Scored 90%+ on 3 quizzes' },
  { label: 'Early Bird', icon: '🌅', description: 'Logged in before 8am for 5 days' },
];

const locked = [
  { label: 'Master Defender', icon: '🔒', description: 'Complete all modules' },
  { label: 'Cyber Streak', icon: '🔥', description: 'Use the platform 10 days in a row' },
];

export default function Badges() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Your Badges</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {earned.map((badge, idx) => (
          <div key={idx} className="bg-green-900 text-white p-4 rounded-lg shadow hover:scale-105 transition">
            <div className="text-3xl mb-2">{badge.icon}</div>
            <div className="text-sm font-bold">{badge.label}</div>
            <p className="text-xs text-gray-300 mt-1">{badge.description}</p>
          </div>
        ))}

        {locked.map((badge, idx) => (
          <div
            key={idx}
            className="bg-gray-800 text-gray-500 p-4 rounded-lg shadow opacity-60 hover:scale-105 transition"
          >
            <div className="text-3xl mb-2">{badge.icon}</div>
            <div className="text-sm font-bold">{badge.label}</div>
            <p className="text-xs text-gray-400 mt-1">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
