
// netlify/functions/submit.js
import fetch from "node-fetch";

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const body = JSON.parse(event.body || "{}");
    const scriptUrl = process.env.SHEETS_WEBHOOK; // Google Apps Script Web App URL

    console.log("Incoming form data:", body);

    // ✅ Send request to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json().catch(() => ({}));
    console.log("Google Script Response:", result);

    if (!response.ok || result?.ok === false) {
      throw new Error(result?.error || "Google Script failed");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Proxy failed:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
};

