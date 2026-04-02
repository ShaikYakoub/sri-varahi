import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const OUTPUT_FILE = path.join(ROOT, "public", "sitemap.xml");
const BASE_URL = (process.env.SITE_URL || "https://valuegold.in").replace(
  /\/$/,
  "",
);

function isRouteGroup(name) {
  return name.startsWith("(") && name.endsWith(")");
}

function isDynamicSegment(name) {
  return name.startsWith("[") && name.endsWith("]");
}

function normalizeRoute(segments) {
  const route = `/${segments.filter(Boolean).join("/")}`;
  return route === "/" ? route : route.replace(/\/+$/, "");
}

function isPageFile(name) {
  return ["page.tsx", "page.ts", "page.jsx", "page.js", "page.mdx"].includes(
    name,
  );
}

async function collectRoutes(dir, routeSegments = [], routes = new Set()) {
  const entries = await readdir(dir, { withFileTypes: true });

  if (entries.some((entry) => entry.isFile() && isPageFile(entry.name))) {
    routes.add(normalizeRoute(routeSegments));
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    if (entry.name === "api" || entry.name.startsWith("@")) {
      continue;
    }

    if (isDynamicSegment(entry.name)) {
      continue;
    }

    const nextSegments = isRouteGroup(entry.name)
      ? routeSegments
      : [...routeSegments, entry.name];

    await collectRoutes(path.join(dir, entry.name), nextSegments, routes);
  }

  return routes;
}

function buildSitemapXml(routes) {
  const sorted = [...routes].sort((a, b) => a.localeCompare(b));
  const now = new Date().toISOString();
  const xmlEntries = sorted
    .map((route) => {
      const loc = `${BASE_URL}${route === "/" ? "/" : `${route}/`}`;
      const priority = route === "/" ? "1.0" : "0.8";
      const changeFreq = route === "/" ? "daily" : "weekly";

      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changeFreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries}\n</urlset>\n`;
}

async function main() {
  const routes = await collectRoutes(APP_DIR);
  const sitemap = buildSitemapXml(routes);
  await writeFile(OUTPUT_FILE, sitemap, "utf8");
  console.log(`Generated sitemap with ${routes.size} route(s) at ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap:", error);
  process.exitCode = 1;
});