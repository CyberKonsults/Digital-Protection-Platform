// components/UserDashboard/XPStats.tsx
'use client';

export default function XPStats() {
  const xp = 320;
  const level = 3;
  const streak = 4;
  const nextLevelXP = 500;
  const progress = Math.min((xp / nextLevelXP) * 100, 100);

  return (
    <section className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">Level {level}</h2>
          <p className="text-sm text-gray-400">XP: {xp} / {nextLevelXP}</p>
          <div className="w-full bg-gray-700 rounded h-2 mt-1">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded shadow">
          <span className="text-2xl">🔥</span>
          <div>
            <p className="text-sm font-medium text-white">Daily Streak</p>
            <p className="text-sm text-yellow-400">{streak} days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
