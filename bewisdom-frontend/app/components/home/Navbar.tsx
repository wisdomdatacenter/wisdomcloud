"use client";

import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount check để tránh lỗi SSR khi dùng next-themes
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      {/* ===== HEADER ===== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b border-white/10
          ${solid ? "bg-brand-bg/90 backdrop-blur" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/wisdomcloud-logo.png"
              alt="Wisdom Cloud"
              width={32}
              height={32}
              priority
            />
            <span className="text-sm font-semibold tracking-wide text-white">
              WISDOM <span className="text-brand-primary">CLOUD</span>
            </span>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#features"
              className="text-brand-sub hover:text-white transition"
            >
              Tính năng
            </a>
            <a
              href="#plans"
              className=" text-brand-sub hover:text-g dark:hover:text-white transition"
            >
              Bảng giá
            </a>
            <a
              href="#faq"
              className="text-brand-sub hover:text-white transition"
            >
              Hỏi đáp
            </a>

            {/* Nút mở tìm kiếm */}
            <button
              onClick={() => setOpenSearch(true)}
              className="rounded-md border border-white/10 bg-white/5 p-2 text-brand-text hover:text-white"
              aria-label="Tìm kiếm"
            >
              <Search size={18} />
            </button>

            {/* Nút chuyển sáng/tối */}
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Chuyển chế độ sáng / tối"
                className="rounded-md border border-white/10 bg-white/5 p-2 hover:shadow-glow transition"
              >
                {isDark ? (
                  <Sun size={16} className="text-yellow-300" />
                ) : (
                  <Moon size={16} className="text-gray-800" />
                )}
              </button>
            )}

            {/* Đăng nhập */}
            <Link
              href="/login"
              className="rounded-md bg-gradient-to-tr from-brand-primary to-brand-primary2 px-4 py-2 font-medium text-gray-900 transition hover:brightness-95"
            >
              Đăng nhập
            </Link>
          </nav>
        </div>
      </header>

      {/* ===== SEARCH OVERLAY ===== */}
      {openSearch && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-brand-bg p-5 shadow-glow">
            <div className="flex items-center gap-3">
              <Search size={18} className="text-brand-primary" />
              <input
                autoFocus
                placeholder="Tìm tên miền, tài liệu, giá..."
                className="w-full bg-transparent px-2 py-2 text-brand-text outline-none placeholder:text-brand-sub"
              />
              <button
                onClick={() => setOpenSearch(false)}
                className="rounded-md border border-white/10 px-3 py-1 text-sm text-brand-sub transition hover:bg-white/5 hover:text-white"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
