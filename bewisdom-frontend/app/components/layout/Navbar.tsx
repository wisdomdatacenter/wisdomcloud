"use client";

import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/(dashboard)", label: "Dashboard" },
  { href: "/login", label: "Đăng nhập" },
  { href: "/register", label: "Đăng ký" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur md:bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            be<span className="text-blue-600">wisdom</span>
          </Link>

          <button
            className="inline-flex items-center rounded-md p-2 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>

          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-medium transition ${
                  pathname === n.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {open && (
          <nav className="mb-4 grid gap-2 md:hidden">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-md px-2 py-2 text-sm ${
                  pathname === n.href ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
