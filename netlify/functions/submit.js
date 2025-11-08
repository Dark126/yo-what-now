// netlify/functions/submit.js
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    // Extract fields for BOTH forms
    const {
      formType,     // "inquiry" or "order"
      name,
      email,
      phone,
      message,
      notes,
      product,      // <-- only for order
      packaging,    // <-- only for order
    } = body;

    // ✅ Basic validation (same rules still apply)
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    // ✅ Web App endpoint from Google Apps Script
    const scriptURL = process.env.SHEETS_WEBHOOK;

    const res = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType,
        name,
        email,
        phone,
        message,
        notes,
        product,
        packaging,
      }),
    });

    const result = await res.json().catch(() => ({}));

    if (!res.ok || result?.success === false) {
      throw new Error(result?.error || "Google Script error");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
};



