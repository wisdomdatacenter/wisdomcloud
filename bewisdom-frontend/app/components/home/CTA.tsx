export default function CTA() {
  return (
    <section aria-label="Kêu gọi hành động" className="section py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="card p-8 text-center">
          <h2>Sẵn sàng bắt đầu?</h2>
          <p className="mt-2 text-sub">Tạo tài khoản miễn phí, triển khai website trong vài phút.</p>
          <a
            href="/register"
            className="mt-6 inline-block rounded-md bg-gradient-to-tr from-brand-primary to-brand-primary2 px-6 py-3 font-semibold text-slate-900 hover:brightness-95"
          >
            Tạo tài khoản
          </a>
        </div>
      </div>
    </section>
  );
}
