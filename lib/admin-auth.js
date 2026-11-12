import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "portfolio_admin_session";
const SESSION_TTL = 60 * 60 * 12;

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must be set to a random value of at least 32 characters.");
  }
  return secret;
}

function sign(value) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

export function createAdminSession() {
  const payload = Buffer.from(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + SESSION_TTL })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifyAdminSession(token) {
  if (!token || typeof token !== "string") return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  try {
    const expected = Buffer.from(sign(payload));
    const received = Buffer.from(signature);
    if (expected.length !== received.length || !timingSafeEqual(expected, received)) return false;
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return Number.isInteger(data.exp) && data.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function isAdminRequest(request) {
  return verifyAdminSession(request.cookies.get(COOKIE_NAME)?.value);
}

export { COOKIE_NAME, SESSION_TTL };
