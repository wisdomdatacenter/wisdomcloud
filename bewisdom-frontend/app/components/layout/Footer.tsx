import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} bewisdom. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
