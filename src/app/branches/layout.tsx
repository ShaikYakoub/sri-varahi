import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branch Locator - Value Gold | 19+ Locations in AP & Telangana",
  description:
    "Find Value Gold branches near you across Hyderabad, Vijayawada, Visakhapatnam, and more. XRF testing and instant payment at every location.",
};

export default function BranchesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
