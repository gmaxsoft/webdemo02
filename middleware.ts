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

  // Cache dla wszystkich stron HTML (SSG/SSR)
  // s-maxage: cache na CDN przez 1 godzinę (3600 sekund)
  // stale-while-revalidate: pozwól na serwowanie starej wersji podczas revalidacji przez 1 dzień
  // max-age: cache w przeglądarce przez 1 godzinę
  response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400, max-age=3600');

  // Dla API routes (opcjonalnie)
  if (pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');
  }

  return response;
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico).*)'],
};