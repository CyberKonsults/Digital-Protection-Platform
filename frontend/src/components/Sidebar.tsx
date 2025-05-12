// components/Sidebar.tsx
'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (status === 'loading' || !session || !session.user) return null;

  const role = session.user?.role ?? '';

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '/courses', label: 'My Courses', roles: ['user', 'parent', 'admin'] },
    { href: '/dashboard', label: 'Dashboard', roles: ['parent', 'admin'] },
    { href: '/admin', label: 'Admin Panel', roles: ['admin'] }
  ];

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden flex items-center gap-2 bg-gray-800 text-white px-4 py-2 m-2 rounded"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <aside
        className={`fixed md:relative z-50 w-64 bg-gray-800 text-white p-4 space-y-4 h-full transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Navigation</h2>
          {session.user?.name && (
            <div className="text-sm text-gray-300">
              Signed in as <span className="font-semibold">{session.user.name}</span>
            </div>
          )}
        </div>
        <ul className="space-y-2">
          {navItems
            .filter(item => item.roles.includes(role))
            .map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-2 py-1 rounded ${
                    pathname === item.href ? 'bg-gray-700 font-semibold' : 'hover:underline'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
        <div className="pt-4 border-t border-gray-700">
          <button
            onClick={() => signOut()}
            className="text-sm text-red-400 hover:underline"
          >
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
