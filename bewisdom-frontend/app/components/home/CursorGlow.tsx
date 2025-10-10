"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-10 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/12 blur-3xl"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
