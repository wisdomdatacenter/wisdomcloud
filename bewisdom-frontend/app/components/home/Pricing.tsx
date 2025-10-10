"use client";

const plans = [
  {
    name: "Starter",
    price: "49.000 đ",
    features: ["1 website", "10 GB NVMe", "Băng thông không giới hạn", "SSL miễn phí"],
    cta: "Chọn gói Starter",
  },
  {
    name: "Pro",
    price: "129.000 đ",
    tag: "Phổ biến nhất",
    features: ["5 website", "50 GB NVMe", "CDN miễn phí", "Sao lưu hằng ngày"],
    cta: "Chọn gói Pro",
  },
  {
    name: "Business",
    price: "299.000 đ",
    features: ["Không giới hạn", "200 GB NVMe", "Hỗ trợ ưu tiên", "Môi trường Staging"],
    cta: "Chọn gói Business",
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="section py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h2>Bảng giá minh bạch</h2>
          <p className="mt-2 text-sub">Đổi gói bất cứ lúc nào. Hoàn tiền 30 ngày cho Shared.</p>
        </header>

        <div className="mx-auto mt-8 flex w-full max-w-md justify-center gap-2">
          <button className="rounded-md border border-app bg-surface px-4 py-2 text-sm">Thanh toán theo tháng</button>
          <button className="rounded-md border border-app bg-surface px-4 py-2 text-sm">Thanh toán theo năm (-15%)</button>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <article key={i} className="card p-6">
              {p.tag && <div className="mb-3 text-xs font-semibold text-sub">{p.tag}</div>}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-3 text-3xl font-bold">{p.price} <span className="text-sub text-sm">/tháng</span></div>
              <ul className="mt-4 space-y-2 text-sm text-sub">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="mt-6 w-full rounded-md bg-gradient-to-tr from-brand-primary to-brand-primary2 py-2 font-medium text-slate-900 hover:brightness-95">
                {p.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
