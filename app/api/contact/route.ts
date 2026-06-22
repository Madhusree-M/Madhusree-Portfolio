import nodemailer from "nodemailer";

const recipientEmail = "mmadhusreemayilsamy@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = (await request.json()) as ContactPayload;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return Response.json(
        { error: "Email sending is not configured yet." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: subject?.trim() || `New portfolio message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject?.trim() || "No subject"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject?.trim() || "No subject")}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
