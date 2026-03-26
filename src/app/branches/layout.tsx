import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branch Locator - Sree Varahi Gold | 3 Locations in Andhra Pradesh",
  description:
    "Find Sree Varahi Gold branches in Andhra Pradesh: Badvel, Markapur, and Narasaraopet. XRF testing and instant payment at every location.",
};

export default function BranchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
