// netlify/functions/submit.js
// Uses Node 18+ global fetch (no imports required)

export const handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const body = JSON.parse(event.body || "{}");
    const scriptUrl = process.env.SHEETS_WEBHOOK;

    if (!scriptUrl) {
      return {
        statusCode: 500,
        body: JSON.stringify({ ok: false, error: "Missing SHEETS_WEBHOOK env var" }),
      };
    }

    // Forward to Google Apps Script
    await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Proxy failed:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: String(err) }),
    };
  }
};

