export default function Footer() {
  return (
    <footer className="mt-20 border-t border-app bg-app">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Wisdom Cloud</h3>
            <p className="mt-2 text-sub">Hosting đám mây cho website hiện đại.</p>
          </div>
          <div>
            <h3 className="font-semibold">Hosting</h3>
            <ul className="mt-3 space-y-2 text-sub text-sm">
              <li><a href="#plans">Shared Hosting</a></li>
              <li><a href="#plans">VPS</a></li>
              <li><a href="#plans">Dedicated</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Công ty</h3>
            <ul className="mt-3 space-y-2 text-sub text-sm">
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Hỗ trợ</h3>
            <ul className="mt-3 space-y-2 text-sub text-sm">
              <li><a href="#">Status</a></li>
              <li><a href="#">Knowledge Base</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-app" />
        <p className="text-sub text-sm">© {new Date().getFullYear()} Wisdom Cloud. All rights reserved.</p>
      </div>
    </footer>
  );
}
