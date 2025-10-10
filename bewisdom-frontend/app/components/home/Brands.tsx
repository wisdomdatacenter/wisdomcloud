"use client";
import { IMG } from "@/app/lib/constants";

export default function Brands() {
  return (
    <section aria-label="Đối tác" className="section border-y border-app">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="sr-only">Đối tác</h2>
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {IMG.brands.map((src, i) => (
            <div key={i} className="flex items-center justify-center opacity-80 hover:opacity-100 transition">
              <img
                src={src}
                alt={`Logo đối tác ${i + 1}`}
                loading="lazy"
                className="h-8 max-w-[160px]"
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
