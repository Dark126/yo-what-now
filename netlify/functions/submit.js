// ✅ Netlify Function - Handles BOTH Contact + Order Forms
exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const body = JSON.parse(event.body || "{}");
    const { formType, name, email, phone, message, notes, product, packaging, spiceTypes } = body;

    // ✅ Basic validation
    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    // ✅ Correct env var reference (backend)
    const scriptURL = process.env.SHEETS_WEBHOOK || process.env.VITE_SHEETS_ENDPOINT;

    if (!scriptURL) {
      throw new Error("Google Script webhook URL missing from environment variables");
    }

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
    console.error("🔥 Netlify Function Error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
};





