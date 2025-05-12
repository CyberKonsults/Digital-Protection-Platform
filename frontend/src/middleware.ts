// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.NEXTAUTH_SECRET!; // ensure this is set in your .env file

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isAdminPath = url.pathname.startsWith('/admin');

  const token = request.cookies.get('next-auth.session-token')?.value;

  if (!token) {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  try {
    const decoded = jwt.verify(token, SECRET) as { role?: string };

    if (isAdminPath && decoded.role !== 'admin') {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/dashboard') && !['admin', 'parent'].includes(decoded.role || '')) {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith('/courses') && !['admin', 'user', 'parent'].includes(decoded.role || '')) {
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

    return NextResponse.next();
  } catch (err) {
    console.error('JWT verification failed:', err);
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/admin', '/dashboard', '/courses'],
};
