import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Gold - Value Gold | Best Gold Rates & Instant Payment",
  description:
    "Sell your gold at Value Gold with live market-linked rates, transparent XRF purity testing, and instant bank transfer.",
};

export default function SellGoldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
