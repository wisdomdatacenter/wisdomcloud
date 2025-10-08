import Container from "./Container";

const features = [
  {
    title: "Tối ưu App Router",
    desc: "Tách route theo (auth), (dashboard) rõ ràng.",
  },
  {
    title: "Tailwind Utility-first",
    desc: "Xây UI nhanh với class tiện, responsive sẵn.",
  },
  {
    title: "Hiệu năng tốt",
    desc: "Image, font, caching theo best practice Next.js.",
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">Tính năng nổi bật</h2>
          <p className="mt-3 text-gray-600">
            Các block sẵn dùng giúp bạn mở rộng dự án nhanh chóng.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
