'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type Props = {
  allowedRoles: string[];
  children: ReactNode;
};

export default function ProtectedRoute({ allowedRoles, children }: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'loading') {
      const role = session?.user?.role ?? '';
      if (!allowedRoles.includes(role)) {
        router.replace('/unauthorized');
      }
    }
  }, [status, session, allowedRoles, router]);

  if (status === 'loading') return <p className="text-white p-8">Loading...</p>;

  return <>{children}</>;
}
