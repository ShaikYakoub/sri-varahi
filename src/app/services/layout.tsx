import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Services - Value Gold | Sell & Release Gold",
  description:
    "Explore Value Gold services including selling gold, releasing pledged gold, and live valuation support with transparent pricing.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
