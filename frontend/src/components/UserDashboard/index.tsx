// components/UserDashboard/index.tsx
'use client';

import XPStats from './XPStats';
import Badges from './Badges';

const mockModules = [
  { title: 'Cyber Hygiene 101', status: 'In Progress', progress: 60 },
  { title: 'Digital Privacy Basics', status: 'Completed', progress: 100 },
  { title: 'Intro to Social Engineering', status: 'Not Started', progress: 0 },
];

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome back!</h1>

      <XPStats />
      <Badges />

      <section>
        <h2 className="text-xl font-semibold mb-3">Your Learning Modules</h2>
        <ul className="space-y-4">
          {mockModules.map((mod, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-white">{mod.title}</span>
                <span className="text-sm text-gray-400">{mod.status}</span>
              </div>
              <div className="w-full bg-gray-700 rounded h-2">
                <div
                  className="bg-green-500 h-2 rounded"
                  style={{ width: `${mod.progress}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
