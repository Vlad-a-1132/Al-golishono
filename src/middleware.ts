import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorized(message = "Unauthorized") {
  return new NextResponse(message, {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Restricted"' },
  });
}

export function middleware(request: NextRequest) {
  const user = process.env.PRICES_TEST_USER;
  const pass = process.env.PRICES_TEST_PASS;

  if (!user || !pass) {
    return unauthorized(
      "Страница закрыта: задайте PRICES_TEST_USER и PRICES_TEST_PASS в .env.local и перезапустите dev-сервер."
    );
  }

  const auth = request.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) {
    return unauthorized();
  }

  let decoded = "";
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return unauthorized();
  }

  const colon = decoded.indexOf(":");
  const login = colon >= 0 ? decoded.slice(0, colon) : decoded;
  const password = colon >= 0 ? decoded.slice(colon + 1) : "";

  if (login !== user || password !== pass) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/prices", "/prices/:path*", "/api/prices/:path*"],
};
