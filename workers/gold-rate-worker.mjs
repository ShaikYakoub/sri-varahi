const ALLOWED_ORIGIN = "https://valuegold.in";
const ALLOWED_METHODS = "GET, POST";

function buildCorsHeaders(origin) {
  if (origin !== ALLOWED_ORIGIN) {
    return null;
  }

  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": ALLOWED_METHODS,
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

function jsonResponse(body, status, corsHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...corsHeaders,
    },
  });
}

export default {
  async fetch(request) {
    const origin = request.headers.get("Origin") || "";
    const corsHeaders = buildCorsHeaders(origin);

    if (!corsHeaders) {
      return jsonResponse({ error: "Forbidden origin" }, 403, {});
    }

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== "GET" && request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, corsHeaders);
    }

    const data = { goldRate: 1234 };
    return jsonResponse(data, 200, corsHeaders);
  },
};