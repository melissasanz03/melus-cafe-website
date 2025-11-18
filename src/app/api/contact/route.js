import { NextResponse } from "next/server";

// Temporary stub: no Resend, just responds OK so the form doesn't break
export async function POST(req) {
  const body = await req.json().catch(() => null);

  // Optional: log to server console (visible in Vercel logs)
  console.log("Contact form received (stubbed):", body);

  return NextResponse.json(
    {
      ok: false,
      message:
        "Contact form received, but email service is temporarily disabled.",
    },
    { status: 200 }
  );
}

// Optional GET for health check
export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Contact API stub is active (no emails sent)." },
    { status: 200 }
  );
}
