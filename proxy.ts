import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  // Protect portal routes — require any authenticated user
  if (pathname.startsWith("/portal")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect admin routes — require ADMIN role
  if (pathname.startsWith("/admin")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if ((session.user as { role: string })?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/portal", req.url));
    }
  }

  // Redirect authenticated users away from login page
  if (pathname === "/login" && session) {
    const role = (session.user as { role: string })?.role;
    if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
    return NextResponse.redirect(new URL("/portal", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/portal/:path*", "/admin/:path*", "/login"],
};
