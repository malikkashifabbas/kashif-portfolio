// ─────────────────────────────────────────────────────────────────────────────
// POST /api/contact
//
// Receives a contact form submission and dispatches a styled email to the
// portfolio owner via Resend (https://resend.com).
//
// Setup (one-time):
//   1. Sign up at https://resend.com (free — 3,000 emails/month)
//   2. Create an API key in the Resend dashboard
//   3. Add to .env.local at the project root:
//        RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
//        CONTACT_TO_EMAIL=malikkashifabbas28@gmail.com
//        # Optional: a custom verified domain (otherwise uses onboarding@resend.dev)
//        CONTACT_FROM_EMAIL=portfolio@yourdomain.com
//   4. Restart your dev server
//
// Security features:
//   - Honeypot field ("website") catches dumb bots
//   - Strict server-side validation (length + email regex)
//   - Rate-limiting hook is documented below (not enabled by default)
//   - No PII echoed back to client beyond what they submitted
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ─── Config ────────────────────────────────────────────────────────────────
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "malikkashifabbas28@gmail.com";

// ─── Helpers ───────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Branded email template — keeps your portfolio aesthetic in your inbox
function buildEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0; padding:0; background:#f7f8fa; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fa; padding:32px 16px;">
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" width="600" style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 6px 24px rgba(15,23,42,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg,#f59e0b,#d97706); padding:24px 32px;">
                <div style="font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.85);">
                  Portfolio Contact
                </div>
                <div style="font-size:22px; font-weight:800; color:#ffffff; margin-top:4px;">
                  New message from ${escapeHtml(name)}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <div style="font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#94a3b8; font-weight:600;">
                  From
                </div>
                <div style="font-size:16px; color:#0a1530; margin-top:4px;">
                  <strong>${escapeHtml(name)}</strong>
                </div>
                <div style="font-size:14px; color:#475569; margin-top:2px;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#f59e0b; text-decoration:none;">${escapeHtml(email)}</a>
                </div>

                <hr style="border:none; border-top:1px solid #e2e8f0; margin:24px 0;" />

                <div style="font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:#94a3b8; font-weight:600;">
                  Message
                </div>
                <div style="font-size:15px; color:#0a1530; line-height:1.6; margin-top:8px; white-space:pre-wrap;">
                  ${escapeHtml(message)}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 24px;">
                <a href="mailto:${escapeHtml(email)}?subject=Re:%20Your%20message" style="display:inline-block; background:#f59e0b; color:#ffffff; padding:10px 18px; border-radius:10px; text-decoration:none; font-size:14px; font-weight:600;">
                  Reply to ${escapeHtml(name)} →
                </a>
              </td>
            </tr>
            <tr>
              <td style="background:#f7f8fa; padding:16px 32px; border-top:1px solid #e2e8f0;">
                <div style="font-size:11px; color:#94a3b8;">
                  Sent automatically from your portfolio contact form.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// ─── Route handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1) Parse body safely
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const botCheck = Boolean(body.botCheck); // hidden checkbox honeypot
  const elapsedMs = Number(body.elapsedMs ?? 0); // how long the form was open

  // 2a) Checkbox honeypot — silent reject. Bots tick hidden checkboxes, humans don't.
  if (botCheck) {
    console.warn("[contact] honeypot tripped — silent drop");
    return NextResponse.json({ ok: true }); // pretend success
  }

  // 2b) Timing check — bots typically submit instantly. Anything under 1.5s is suspicious.
  if (elapsedMs > 0 && elapsedMs < 1500) {
    console.warn(`[contact] timing check failed (${elapsedMs}ms) — silent drop`);
    return NextResponse.json({ ok: true }); // pretend success
  }

  // 3) Validation
  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid name (2–100 characters)." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please write a message between 10 and 5,000 characters.",
      },
      { status: 400 }
    );
  }

  // 4) Make sure server is configured
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY is not set. See app/api/contact/route.ts for setup."
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email service is not configured yet. Please contact me directly at " +
          TO_EMAIL,
      },
      { status: 503 }
    );
  }

  // 5) Send via Resend
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email, // hitting "Reply" in your inbox writes back to the sender
      subject: `📬 Portfolio contact from ${name}`,
      html: buildEmailHtml({ name, email, message }),
    });

    if (error) {
      console.error("[contact] Resend API error:", error);
      return NextResponse.json(
        { ok: false, error: "Couldn't send your message. Please try again." },
        { status: 502 }
      );
    }

    console.log(`[contact] ✓ email queued via Resend (id=${data?.id})`);
    console.log(`         from: ${name} <${email}>`);
    console.log(`         to:   ${TO_EMAIL}`);
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// ─── Optional: simple rate-limiting (add later if you start getting spam) ──
// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";
// const ratelimit = new Ratelimit({
//   redis: Redis.fromEnv(),
//   limiter: Ratelimit.slidingWindow(3, "1 h"),  // 3 messages/hour per IP
// });
// const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
// const { success } = await ratelimit.limit(ip);
// if (!success) return NextResponse.json({ error: "Too many requests" }, { status: 429 });
