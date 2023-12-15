import { NextResponse } from "next/server";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request) {
    const session = request?.nextauth?.token;

    if (request.nextUrl.pathname === "/") return NextResponse.next();
    if (!session && request.nextUrl.pathname !== "/admin") {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }

    if (session && request.nextUrl.pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/banner", request.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/admin/:path*", "/api/auth/signin/:path*"],
};
