import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_NAME = "maike.dev weekly";

async function getOrCreateAudienceId(): Promise<string> {
  // Check if audience ID is set in env
  if (process.env.RESEND_AUDIENCE_ID) {
    return process.env.RESEND_AUDIENCE_ID;
  }

  // List existing audiences
  const { data: audiences } = await resend.audiences.list();

  if (audiences && audiences.data && audiences.data.length > 0) {
    return audiences.data[0].id;
  }

  // Create audience if none exists
  const { data: newAudience } = await resend.audiences.create({
    name: AUDIENCE_NAME,
  });

  if (!newAudience) {
    throw new Error("Failed to create audience");
  }

  return newAudience.id;
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Email inválido." },
      { status: 400 },
    );
  }

  try {
    const audienceId = await getOrCreateAudienceId();

    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Falha ao inscrever. Tente novamente." },
      { status: 500 },
    );
  }
}
