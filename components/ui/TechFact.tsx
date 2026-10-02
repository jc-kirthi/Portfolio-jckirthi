"use client";

import { useState } from "react";
import { techFacts } from "@/data/techFacts";

export function TechFact() {
  const [factIndex, setFactIndex] = useState(0);
  const fact = techFacts[factIndex];

  const showNextFact = () => {
    setFactIndex((current) => (current + 1) % techFacts.length);
  };

  return (
    <aside className="mt-8 border-2 border-[var(--color-border)] border-l-4 border-l-[var(--color-secondary)] bg-[var(--color-card)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)] sm:p-5" aria-labelledby="tech-fact-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p id="tech-fact-title" className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-plum)]">
          {"// Random tech fact"}
        </p>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
          {factIndex + 1} / {String(techFacts.length).padStart(2, "0")}
        </span>
      </div>
      <div className="mt-3 min-h-20" aria-live="polite" aria-atomic="true">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent-warm)]">
          {fact.topic}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-[var(--color-foreground)] sm:text-base">
          {fact.fact}
        </p>
      </div>
      <button
        type="button"
        onClick={showNextFact}
        className="mt-3 inline-flex min-h-11 items-center gap-2 border border-[var(--color-border)] px-3 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--color-foreground)] motion-reduce:transition-none"
        aria-label="Show another technology fact"
      >
        Another fact <span aria-hidden="true">↻</span>
      </button>
    </aside>
  );
}
