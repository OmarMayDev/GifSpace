import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/SignUp")) {
    const cookie = request.cookies.has("userId");
    if (cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/SignIn")) {
    const cookie = request.cookies.has("userId");
    if (cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/Account")) {
    const cookie = request.cookies.has("userId");
    if (!cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/MyGifs")) {
    const cookie = request.cookies.has("userId");
    if (!cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/CommunityGifs")) {
    const cookie = request.cookies.has("userId");
    if (!cookie) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/SignUp", "/SignIn", "/Account", "/MyGifs", "/CommunityGifs"],
};
