// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trusted Online Loans – A smarter way to borrow",
  description:
    "Get cash fast, deposited right to your bank. Request loans from $200 to $5,000 with all credit scores considered.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-body">{children}</body>
    </html>
  );
}
