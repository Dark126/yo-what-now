// ✅ Netlify Function - Handles BOTH Contact + Order Forms
exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const body = JSON.parse(event.body || "{}");

    const { formType, name, email, phone, message, notes, product, packaging, spiceTypes } = body;

    // ✅ Basic validation (required fields)
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    // ✅ Send to Google Apps Script Webhook
    const scriptURL = process.env.VITE_SHEETS_ENDPOINT; // ✅ SAME ENV VAR as before

    const payload = {
      formType,
      name,
      email,
      phone,
      message,
      notes,
      product,
      packaging,
      spiceTypes,
    };

    const res = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json().catch(() => ({}));

    if (!result.ok) {
      throw new Error(result.error || "Apps Script failed");
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




