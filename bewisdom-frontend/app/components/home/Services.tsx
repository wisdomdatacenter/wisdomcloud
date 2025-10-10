// app/components/home/Services.tsx
import Image from "next/image";
import { IMG } from "@/app/lib/constants";

const list = [
  { img: IMG.services.wp,     title: "WordPress Hosting", desc: "Tối ưu cho WP, auto cache & bảo mật." },
  { img: IMG.services.shared, title: "Shared Hosting",    desc: "Giải pháp kinh tế cho website nhỏ." },
  { img: IMG.services.vps,    title: "VPS Hosting",      desc: "Tài nguyên riêng, toàn quyền quản trị." },
  { img: IMG.services.linux,  title: "Linux Hosting",    desc: "Ổn định, bảo mật, hiệu năng cao." },
];

export default function Services() {
  return (
    <section className="bg-brand-bg py-20 text-brand-text">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s) => (
            <div key={s.title} className="animated-border rounded-xl2 bg-brand-surface/80 p-5 hover:shadow-glow transition">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 280px, 50vw"
                />
              </div>
              <div className="mt-4 font-semibold text-white">{s.title}</div>
              <p className="mt-1 text-sm text-brand-sub">{s.desc}</p>
              <button className="mt-4 w-full rounded-md bg-gradient-to-tr from-brand-primary to-brand-primary2 py-2 font-medium text-gray-900">
                Tìm hiểu thêm
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
