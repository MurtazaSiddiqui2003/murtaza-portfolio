import { NextResponse } from "next/server";
import { createAdminSession, COOKIE_NAME, SESSION_TTL, verifyAdminSession } from "../../../../lib/admin-auth";

export const runtime = "nodejs";

function secureCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_TTL,
  };
}

export async function GET(request) {
  const authenticated = verifyAdminSession(request.cookies.get(COOKIE_NAME)?.value);
  return NextResponse.json({ authenticated });
}

export async function POST(request) {
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedPassword || !process.env.ADMIN_SESSION_SECRET) {
    return NextResponse.json({ error: "Admin access has not been configured yet. Add ADMIN_PASSWORD and ADMIN_SESSION_SECRET in Vercel." }, { status: 503 });
  }

  let body;
  try { body = await request.json(); } catch { body = {}; }
  const supplied = typeof body.password === "string" ? body.password : "";
  const suppliedBuffer = Buffer.from(supplied);
  const expectedBuffer = Buffer.from(expectedPassword);
  const { timingSafeEqual } = await import("node:crypto");
  const valid = suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);

  if (!valid) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const { createAdminSession } = await import("../../../../lib/admin-auth");
  const response = NextResponse.json({ authenticated: true });
  response.cookies.set(COOKIE_NAME, createAdminSession(), secureCookieOptions());
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ authenticated: false });
  response.cookies.set(COOKIE_NAME, "", { ...secureCookieOptions(), maxAge: 0 });
  return response;
}
