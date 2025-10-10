"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { delay, duration: 0.5 } });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
      {children}
    </motion.div>
  );
}
