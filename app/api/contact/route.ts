import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: 'portfolio@mail.dennisheyer.dev',
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `Neue Nachricht von ${name}`,
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>E-Mail:</b> ${email}</p>
      <p><b>Nachricht:</b><br/>${message}</p>
    `
  });

  return NextResponse.json({ success: true });
}