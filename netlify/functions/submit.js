exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    const { formType, name, email, phone, notes, product, packaging } = body;

    if (!name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    // ✅ Send to Google Apps Script webhook URL
    const scriptURL = process.env.GOOGLE_SCRIPT_WEBHOOK;

    const res = await fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: formType,
        name,
        email,
        phone,
        notes,
        product,
        packaging,
      }),
    });

    const result = await res.json();

    if (!result.success) {
      throw new Error("Apps Script returned failure");
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


