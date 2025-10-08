"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class" // hoặc "data-theme" nếu bạn muốn
      defaultTheme="light"
      enableSystem={false} // tránh bị OS “đè” dark
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
}
