import nodemailer from "nodemailer";

const DEFAULT_TO_EMAIL = "sameerjagrawal2@gmail.com";

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateContact({ name, email, message }) {
  const safeName = clean(name);
  const safeEmail = clean(email).toLowerCase();
  const safeMessage = clean(message);

  if (!safeName || safeName.length < 2) {
    return { error: "Please enter your name." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
    return { error: "Please enter a valid email address." };
  }

  if (safeMessage.length < 10) {
    return { error: "Please write a slightly longer message." };
  }

  return {
    data: {
      name: safeName.slice(0, 120),
      email: safeEmail.slice(0, 160),
      message: safeMessage.slice(0, 3000),
    },
  };
}

function createTransport() {
  const user = process.env.GMAIL_USER || DEFAULT_TO_EMAIL;
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!pass) {
    throw new Error("Missing GMAIL_APP_PASSWORD environment variable.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendContactEmail(payload) {
  const result = validateContact(payload);
  if (result.error) {
    return { ok: false, status: 400, message: result.error };
  }

  const { name, email, message } = result.data;
  const htmlName = escapeHtml(name);
  const htmlEmail = escapeHtml(email);
  const htmlMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const fromEmail = process.env.GMAIL_USER || DEFAULT_TO_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
  const transporter = createTransport();

  await transporter.sendMail({
    from: `"Portfolio Contact" <${fromEmail}>`,
    to: toEmail,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#12051d">
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${htmlName}</p>
        <p><strong>Email:</strong> ${htmlEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${htmlMessage}</p>
      </div>
    `,
  });

  await transporter.sendMail({
    from: `"Sameer Jagrawal" <${fromEmail}>`,
    to: email,
    subject: "Thanks for contacting Sameer Jagrawal",
    text: `Hi ${name},\n\nThanks for reaching out through my portfolio. I received your message and will reply soon.\n\nBest,\nSameer Jagrawal`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#12051d">
        <h2>Thanks for reaching out</h2>
        <p>Hi ${htmlName},</p>
        <p>I received your message and will reply soon.</p>
        <p>Best,<br />Sameer Jagrawal</p>
      </div>
    `,
  });

  return { ok: true, status: 200, message: "Message sent successfully." };
}
