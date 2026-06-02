import http from "node:http";
import { readFileSync } from "node:fs";
import { sendContactEmail } from "../src/lib/email.js";

const PORT = Number(process.env.CONTACT_API_PORT || 8787);

function loadLocalEnv() {
  try {
    const env = readFileSync(".env", "utf8");
    for (const line of env.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
      const [key, ...valueParts] = trimmed.split("=");
      if (!process.env[key]) {
        process.env[key] = valueParts.join("=").trim();
      }
    }
  } catch {
    // Local credentials are optional until the contact form is configured.
  }
}

loadLocalEnv();

function sendJson(req, res, status, data) {
  const origin = req.headers.origin || "http://localhost:5174";
  res.writeHead(status, {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 10000) {
        reject(new Error("Message is too large."));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid request body."));
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    return sendJson(req, res, 200, {});
  }

  if (req.method !== "POST" || req.url !== "/api/contact") {
    return sendJson(req, res, 404, { message: "Not found." });
  }

  try {
    const body = await readBody(req);
    const result = await sendContactEmail(body);
    return sendJson(req, res, result.status, { message: result.message });
  } catch (error) {
    return sendJson(req, res, 500, {
      message: error.message.includes("GMAIL_APP_PASSWORD")
        ? "Email is not configured yet."
        : "Could not send message right now.",
    });
  }
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log(`Contact API is already running on port ${PORT}. Use the existing server or stop that process first.`);
    return;
  }

  throw error;
});

server.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}/api/contact`);
  if (!process.env.GMAIL_APP_PASSWORD) {
    console.log("GMAIL_APP_PASSWORD is missing. Add it to .env before testing real email delivery.");
  }
});
