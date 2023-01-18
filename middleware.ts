import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();
	const isLoggedIn = true;
	if ((isLoggedIn && url.pathname === "/") || url.pathname === "/app") {
		url.pathname = "/app/dashboard";
		return NextResponse.redirect(url);
	}
}
