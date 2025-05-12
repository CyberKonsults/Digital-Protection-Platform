// components/ParentDashboard/index.tsx
'use client';
import FamilyAccounts from './FamilyAccounts';
import CourseProgress from './CourseProgress';
import QuizPerformance from './QuizPerformance';
import Certificates from './Certificates';
import Messages from './Messages';

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      <FamilyAccounts />
      <CourseProgress />
      <QuizPerformance />
      <Certificates />
      <Messages />
      

      <section>
        <h2 className="text-xl font-semibold mb-2">🧠 Quiz Performance</h2>
        <p className="text-gray-400 text-sm">Review scores and engagement trends.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🏆 Certificates</h2>
        <p className="text-gray-400 text-sm">View and download digital certificates of completion.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">💬 Messages / Alerts</h2>
        <p className="text-gray-400 text-sm">Stay updated on notifications and platform news.</p>
      </section>
    </div>
  );
}
