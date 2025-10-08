import type { Metadata } from "next";
import Providers from "./components/auths/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bewisdom Cloud",
  description: "Frontend for Bewisdom IAM System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark light" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
