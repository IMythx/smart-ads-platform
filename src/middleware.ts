import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const publicPaths = ["/", "/auth/login", "/auth/register"];
  const isPublic = publicPaths.some(
    (path) => pathname === path || pathname.startsWith("/api/"),
  );

  if (!isLoggedIn && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  if (isLoggedIn && pathname.startsWith("/auth/")) {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
