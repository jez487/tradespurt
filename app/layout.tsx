import"./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TradeSpurt",
  description: "AI-powered trading alerts and market insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
