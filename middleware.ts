import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { RESTORE_APPLET } from "./constants";

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const isLoggedIn = true;
    if (isLoggedIn && url.pathname === "/app") {
        url.pathname = `/app/${RESTORE_APPLET}`;
        return NextResponse.redirect(url);
    }
}
