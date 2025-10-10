"use client";
import { useState } from "react";

const QA = [
  { q: "Tôi có thể chuyển hosting từ nơi khác?", a: "Có. Chúng tôi hỗ trợ di chuyển miễn phí cho hầu hết nền tảng." },
  { q: "Có hoàn tiền không?", a: "Có. Hoàn tiền trong 30 ngày với gói Shared." },
  { q: "Có cung cấp email doanh nghiệp?", a: "Có. Email theo tên miền, chống spam, kèm chữ ký." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2>Câu hỏi thường gặp</h2>
          <p className="mt-2 text-sub">Những thắc mắc phổ biến khi bắt đầu với Wisdom Cloud.</p>
        </header>

        <div className="mt-8 space-y-3">
          {QA.map((item, i) => (
            <div key={i} className="card p-4">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-sub">{open === i ? "×" : "+"}</span>
              </button>
              {open === i && <p className="mt-3 text-sub">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
