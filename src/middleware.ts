import { NextResponse, NextRequest } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { PUBLIC_ROUTES, LOGIN, ROOT } from "@/lib/routes";

const publicPaths = ["/login", "/register", "/"];
const { auth } = NextAuth(authConfig);

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session?.user;
  console.log(isAuthenticated);

  const isPublicRoute =
    PUBLIC_ROUTES.find((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === ROOT;

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|register).*)']
};