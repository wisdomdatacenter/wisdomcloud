"use client";
import Image from "next/image";
import { IMG } from "@/app/lib/constants";

const items = [
  { title: "Free SSL", desc: "Chứng chỉ SSL tự động cho mọi gói." },
  { title: "NVMe SSD", desc: "Đọc/ghi siêu nhanh cho ứng dụng của bạn." },
  { title: "1-Click Apps", desc: "WordPress, Laravel, Next.js & hơn thế nữa." },
  { title: "DDoS Protection", desc: "Lớp bảo vệ cấp doanh nghiệp." },
  { title: "Daily Backup", desc: "Sao lưu tự động hằng ngày." },
  { title: "Global CDN", desc: "Tối ưu TTFB nhờ mạng lưới edge." },
];

export default function Features() {
  return (
    <section id="features" className="section py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">TÍNH NĂNG</span>
          <h2 className="mt-2">Mọi thứ bạn cần để “go live”</h2>
          <p className="mt-2 text-sub">Tối ưu tốc độ, độ tin cậy và sự đơn giản.</p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="card p-6">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sub">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-app bg-surface p-4">
          <Image
            src={IMG.featured}
            alt="Hạ tầng máy chủ được tối ưu"
            width={1200}
            height={640}
            className="h-auto w-full rounded-xl object-cover"
            sizes="(min-width:1024px) 960px, 100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
