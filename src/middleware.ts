import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Rutas protegidas
  const protectedPaths = ["/contacts"];
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));

  // Rutas de autenticación
  const authPaths = ["/auth/login", "/auth/register"];
  const isAuthPath = authPaths.includes(pathname);

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isAuthPath && token) {
    return NextResponse.redirect(new URL("/contacts", request.url));
  }

  return NextResponse.next();
}