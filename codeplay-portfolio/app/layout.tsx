import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Play - Digital Experience Agency",
  description: "We build digital experiences - website, digital marketing, branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
