import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 },
    );
  }

  try {
    await resend.emails.send({
      from: "maike.dev <onboarding@resend.dev>",
      to: "maikecanal@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Try again later." },
      { status: 500 },
    );
  }
}
