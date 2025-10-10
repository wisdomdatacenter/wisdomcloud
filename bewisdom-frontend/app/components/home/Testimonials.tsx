"use client";

const DATA = [
  { name: "Minh An", role: "Founder, Fudo", text: "Tốc độ ổn định, hỗ trợ rất nhanh. Chuyển data trong ngày.", avatar: "/avatar-1.png" },
  { name: "Lan Phương", role: "CTO, Cielo", text: "CI/CD gọn, deploy Next.js mượt. Giá hợp lý.", avatar: "/avatar-2.png" },
];

export default function Testimonials() {
  return (
    <section className="section py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2>Khách hàng nói gì?</h2>
          <p className="mt-2 text-sub">Đội ngũ hỗ trợ 24/7 luôn sẵn sàng đồng hành.</p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {DATA.map((t, i) => (
            <figure key={i} className="card p-6">
              <blockquote className="text-app">“{t.text}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sub text-sm">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
