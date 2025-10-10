"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Ảnh HTTPS trực tiếp (có thể đổi link Unsplash tùy ý)
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop";

export default function Hero() {
  // Parallax nhẹ cho ảnh nền phải
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 text-brand-text"
      aria-label="Giới thiệu dịch vụ hosting"
    >
      {/* Nền và ánh sáng */}
      <div className="absolute inset-0 -z-10 grid-columns bg-brand-bg" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-brand-primary2/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Khối trái: tiêu đề + thanh tìm kiếm */}
        <div className="flex flex-col justify-center py-24">
          <span className="inline-block rounded border border-brand-primary/30 bg-brand-bg/60 px-3 py-1 text-[11px] uppercase tracking-wider text-brand-primary">
            Cloud • NVMe • Hỗ trợ 24/7
          </span>

          <h1 className="neon-text mt-6 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
            Bắt đầu với <br />
            Tên miền của bạn
          </h1>

          <p className="mt-5 max-w-xl text-brand-sub">
            Máy chủ đám mây tốc độ cao, SSL miễn phí, cam kết uptime 99.9%. Xây
            dựng và mở rộng thật an tâm cùng <span className="text-brand-primary">Wisdom Cloud</span>.
          </p>

          {/* Ô tìm tên miền */}
          <form
            className="mt-8 rounded-xl2 border border-white/10 bg-brand-surface p-2 shadow-glow sm:flex sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="nhaptenmiencuaban.vn"
              aria-label="Nhập tên miền cần kiểm tra"
              className="w-full rounded-xl px-4 py-3 bg-transparent text-brand-text placeholder:text-brand-sub outline-none"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-gradient-to-tr from-brand-primary to-brand-primary2 px-6 py-3 font-semibold text-gray-900 transition hover:brightness-95 sm:mt-0 sm:w-auto"
            >
              Kiểm tra
            </button>
          </form>

          <p className="mt-3 text-sm text-brand-sub">
            .com <span className="font-semibold text-brand-text">229.000₫</span> • .vn{" "}
            650.000₫ • .net 199.000₫
          </p>
        </div>

        {/* Khối phải: ảnh minh họa + hiệu ứng động */}
        <div className="relative flex items-center justify-center py-20">
          {/* Khối ảnh chính (có parallax nhẹ) */}
          <div
            className="relative aspect-[4/3] w-full max-w-lg rounded-[2rem] border border-white/10 bg-gradient-to-b from-brand-surface to-brand-bg p-6 shadow-glow overflow-hidden"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <Image
              src={HERO_IMAGE}
              alt="Minh họa đám mây và máy chủ"
              width={900}
              height={700}
              className="rounded-2xl object-cover opacity-95"
              sizes="(min-width: 1024px) 600px, 100vw"
              priority
            />

            {/* Layer ánh sáng trên ảnh */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(18,214,197,.18),transparent_60%)]" />
          </div>

          {/* Các khối cube neon bay lơ lửng */}
          {[[-60, -40], [40, -20], [-10, 50]].map(([dx, dy], i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `calc(50% + ${dx}px)`,
                top: `calc(50% + ${dy}px)`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className="h-10 w-10 rotate-12 rounded-md bg-gradient-to-tr from-brand-primary to-brand-primary2 opacity-80 shadow-glow" />
            </div>
          ))}

          {/* Liên kết mạng xã hội */}
          <div className="absolute bottom-6 right-0 hidden gap-4 text-xs text-brand-primary md:flex">
            <a href="#" className="hover:text-white transition">FACEBOOK</a>
            <span className="text-brand-sub">|</span>
            <a href="#" className="hover:text-white transition">LINKEDIN</a>
            <span className="text-brand-sub">|</span>
            <a href="#" className="hover:text-white transition">X</a>
          </div>
        </div>
      </div>
    </section>
  );
}
