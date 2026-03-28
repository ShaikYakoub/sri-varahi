import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valuegold.in"),
  title:
    "Value Gold - Best Gold Buyers in Andhra Pradesh | Trusted & Transparent",
  description:
    "Sell your gold at the best rates with complete transparency. Modern technology, instant payment, XRF testing. 3 branches across Andhra Pradesh and more coming soon.",
  keywords:
    "gold buyers, sell gold, gold rate today, best gold buyers India, Value Gold, CapsGold",
  openGraph: {
    title: "Value Gold - Best Gold Buyers in Andhra Pradesh",
    description:
      "Modern, transparent, and trusted. Instant payment. XRF testing.",
    url: "https://valuegold.in",
    siteName: "Value Gold",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Gold - Best Gold Buyers in Andhra Pradesh",
    description:
      "Modern, transparent, and trusted. Instant payment. XRF testing.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth light ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/images/logo.avif" type="image/avif" />
      </head>
      <body className="antialiased font-sans">
        {/* Next.js 13+ does not execute <script> tags in layouts. Use <template> as a workaround for client-side theme init. */}
        <template
          data-theme-init
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const html = document.documentElement;
                  
                  if (theme === 'dark') {
                    html.classList.remove('light');
                    html.classList.add('dark');
                    html.style.colorScheme = 'dark';
                  } else {
                    html.classList.remove('dark');
                    html.classList.add('light');
                    html.style.colorScheme = 'light';
                    if (!theme) {
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {
                  console.error('Theme initialization error:', e);
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
