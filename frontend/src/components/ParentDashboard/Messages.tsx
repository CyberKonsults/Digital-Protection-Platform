// components/ParentDashboard/Messages.tsx
'use client';

const mockMessages = [
  { id: 1, type: 'alert', text: 'Makayla has a new quiz due tomorrow.', timestamp: '2025-05-10 15:24' },
  { id: 2, type: 'info', text: 'New course "Cyber Awareness for Teens" has been added.', timestamp: '2025-05-09 09:10' },
];

export default function Messages() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Messages / Alerts</h2>
      <ul className="space-y-3">
        {mockMessages.map(msg => (
          <li
            key={msg.id}
            className={`border-l-4 pl-4 py-2 bg-gray-800 text-white ${
              msg.type === 'alert' ? 'border-red-500' : 'border-blue-400'
            }`}
          >
            <p className="text-sm">{msg.text}</p>
            <p className="text-xs text-gray-400">{msg.timestamp}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
