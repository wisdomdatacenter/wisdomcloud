"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const seen = typeof window !== "undefined" ? sessionStorage.getItem("intro-done") : "1";
    if (seen) return;
    setOpen(true);
    const t = setTimeout(() => { setOut(true); setTimeout(() => { setOpen(false); sessionStorage.setItem("intro-done", "1"); }, 500); }, 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: out ? 0 : 1 }} className="fixed inset-0 z-[120] grid place-items-center bg-brand-bg">
          <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-primary/18 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-brand-primary2/18 blur-3xl" />
          <motion.div initial={{ scale: .85, opacity: 0 }} animate={{ scale: out ? 1.05 : 1, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 12 }} className="flex flex-col items-center">
            <div className="rounded-3xl bg-white/4 p-6 backdrop-blur-md ring-1 ring-white/10 shadow-glow">
              <Image src="/wisdomcloud-logo.png" alt="Wisdom Cloud" width={160} height={160} className="animate-pulseSoft"/>
            </div>
            <div className="mt-5 text-2xl font-bold tracking-wide text-black neon-text">WISDOM CLOUD</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
