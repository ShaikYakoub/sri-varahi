// Example for a Next.js API route compatible with Cloudflare Pages and edge runtime
// Place this in src/app/api/gold-rate/route.ts if you want to expose gold rate via API

export const runtime = "edge"; // Ensures compatibility with Cloudflare Pages

export async function GET() {
  // ...fetch or compute your data here...
  const data = { goldRate: 1234 };
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control":
        process.env.NODE_ENV === "production"
          ? "public, max-age=31536000, immutable"
          : "no-store",
    },
  });
}
