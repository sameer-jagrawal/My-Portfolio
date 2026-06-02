import { sendContactEmail } from "../src/lib/email.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const result = await sendContactEmail(req.body || {});
    return res.status(result.status).json({ message: result.message });
  } catch (error) {
    return res.status(500).json({
      message: error.message.includes("GMAIL_APP_PASSWORD")
        ? "Email is not configured yet."
        : "Could not send message right now.",
    });
  }
}
