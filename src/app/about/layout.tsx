import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Value Gold | 120+ Years of Trust",
  description:
    "Discover the 120+ year journey of Value Gold and CapsGold, built on trust, transparency, and customer-first service.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
