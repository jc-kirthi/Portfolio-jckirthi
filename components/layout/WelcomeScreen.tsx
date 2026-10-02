"use client";

import { useEffect, useState } from "react";

export function WelcomeScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    try {
      if (window.sessionStorage.getItem("portfolio-welcome-seen")) return;
    } catch {
      // Continue without persistence if browser storage is unavailable.
    }

    const frame = window.requestAnimationFrame(() => {
      try {
        window.sessionStorage.setItem("portfolio-welcome-seen", "true");
      } catch {
        // The intro can still run when browser storage is unavailable.
      }
      setVisible(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  return (
    <div className="welcome-screen" role="status" aria-label="Welcome to Kirthi's portfolio">
      <div className="welcome-content">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-warm)]">Hi.</p>
        <p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">Welcome to</p>
        <h2 className="mt-2 font-display text-5xl font-black uppercase leading-[0.92] text-[var(--color-plum)] sm:text-7xl">
          Kirthi&apos;s<br />Portfolio
        </h2>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)] sm:text-xs">AI / ML · Web · Data · Building</p>
        <div className="welcome-progress mt-8" aria-hidden="true" />
      </div>
    </div>
  );
}