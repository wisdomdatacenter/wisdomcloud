import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Wisdom Cloud – Hosting nhanh, an toàn, minh bạch giá",
  description:
    "Hosting NVMe, SSL miễn phí, uptime 99.9%. Bảng giá minh bạch, hỗ trợ 24/7. Triển khai website nhanh chóng cùng Wisdom Cloud.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="bg-app text-app antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
