import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bewisdom",
  description: "Next.js + Tailwind starter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
