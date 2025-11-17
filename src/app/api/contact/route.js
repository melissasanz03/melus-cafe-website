import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields: name, email, message" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO;
    const fromEmail = process.env.CONTACT_FROM || toEmail;
    const businessName = process.env.BUSINESS_NAME || "Our team";

    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
          { ok: false, error: "RESEND_API_KEY is not set" },
          { status: 500 }
        );
      }

    if (!toEmail) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_TO is not set" },
        { status: 500 }
      );
    }

    // 1) Email to YOU (owner)
    await resend.emails.send({
      from: `${businessName} <${fromEmail}>`,
      to: [toEmail, "melissa.sanchez@meluscafe.com"],
      reply_to: email,
      subject: `📩 New inquiry from ${name}`,
      text: `New message from your website contact form:

            Name: ${name}
            Email: ${email}

            Message:
            ${message}
            `,
    });

    // 2) Auto-reply to the CUSTOMER
    await resend.emails.send({
      from: `${businessName} <${fromEmail}>`,
      to: email,
      subject: `Thanks for reaching out to ${businessName}!`,
      text: `Hi ${name},

            Thank you for contacting ${businessName}! ☕

            We’ve received your message and will get back to you as soon as we can.


            Warm regards,
            ${businessName}
            `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error sending email" },
      { status: 500 }
    );
  }
}
