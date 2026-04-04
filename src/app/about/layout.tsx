import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Sri Varahi | Trusted Gold Buyers",
  description:
    "Learn about Sri Varahi's commitment to transparency, technology, and customer-first service in Andhra Pradesh.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
