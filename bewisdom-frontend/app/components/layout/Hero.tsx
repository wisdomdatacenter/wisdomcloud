import Link from "next/link";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Xây Home nhanh, gọn, chuẩn <span className="text-blue-600">bewisdom</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Khởi tạo dự án App Router, style bằng Tailwind, sẵn điều hướng đến Login/Signup & Dashboard.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-5 py-3 text-white shadow-sm transition hover:bg-blue-700"
              >
                Bắt đầu miễn phí
              </Link>
              <Link
                href="/login"
                className="rounded-xl border px-5 py-3 text-gray-900 transition hover:bg-gray-50"
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_50%_-10%,#93c5fd33,transparent)]" />
    </section>
  );
}
