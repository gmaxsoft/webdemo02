import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const pathname = request.nextUrl.pathname;

  // Pomijaj API, _next, statyczne pliki z kropką
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.')
  ) {
    return response;
  }

  // Cache dla stron HTML (SSG/SSR)
  if (pathname.endsWith('/') || pathname === '') {
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
  }

  // Dla API routes (opcjonalnie)
  if (pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
  }

  return response;
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)'],
};