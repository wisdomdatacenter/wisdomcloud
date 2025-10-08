import Link from "next/link";
import Container from "./Container";

export default function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl bg-gray-900 px-8 py-12 text-center text-white">
          <h3 className="text-2xl font-semibold">Sẵn sàng nâng cấp dự án?</h3>
          <p className="mt-2 text-gray-300">
            Đăng ký tài khoản để truy cập dashboard và lưu dữ liệu.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/register" className="rounded-xl bg-white px-5 py-3 text-gray-900">
              Tạo tài khoản
            </Link>
            <Link href="/login" className="rounded-xl border border-white/30 px-5 py-3">
              Tôi đã có tài khoản
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
