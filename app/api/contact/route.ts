import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-Memory Rate Limiting
const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return false;
  }

  if (entry.count >= 3) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen, bitte später versuchen." },
      { status: 429 }
    );
  }

  const { name, email, message, turnstileToken } = await req.json();

  // Turnstile verifizieren
  const verify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
      }),
    }
  );

  const { success } = await verify.json();
  if (!success) {
    return NextResponse.json({ error: "Bot erkannt" }, { status: 403 });
  }

  await resend.emails.send({
    from: 'portfolio@mail.dennisheyer.dev',
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `[Portfolio] Neue Nachricht von ${name}`,
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>E-Mail:</b> ${email}</p>
      <p><b>Nachricht:</b><br/>${message}</p>
    `
  });

  return NextResponse.json({ success: true });
}