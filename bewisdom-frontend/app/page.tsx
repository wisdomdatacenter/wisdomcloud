import Intro from "./components/home/Intro";
import CursorGlow from "./components/home/CursorGlow";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Brands from "./components/home/Brands";
import Features from "./components/home/Features";
import Pricing from "./components/home/Pricing";
import FAQ from "./components/home/FAQ";
import CTA from "./components/home/CTA";
import Footer from "./components/home/Footer";

export default function HomePage() {
  return (
    <>
      <Intro />
      <CursorGlow />
      <Navbar />
      <main className="bg-brand-bg">
        <Hero />
        <Brands />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
