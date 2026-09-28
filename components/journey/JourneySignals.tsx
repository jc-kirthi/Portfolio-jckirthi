/**
 * components/journey/JourneySignals.tsx
 *
 * Compact editorial signal strip for Journey.
 */

import type { JourneySignal } from "@/lib/journey";

interface JourneySignalsProps {
  signals: JourneySignal[];
}

export function JourneySignals({ signals }: JourneySignalsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)]">
      {signals.map((signal, index) => (
        <div
          key={signal.index}
          className={
            index > 0
              ? "p-5 sm:p-6 border-t-2 lg:border-t-0 lg:border-l-2 border-[var(--color-border-subtle)] flex flex-col gap-1"
              : "p-5 sm:p-6 flex flex-col gap-1"
          }
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
            {signal.index} / {signal.label}
          </span>
          <span className="font-display text-2xl sm:text-3xl font-black text-[var(--color-plum)] mt-1 uppercase leading-none">
            {signal.value}
          </span>
          <span className="text-[11px] text-[var(--color-muted)] font-mono mt-0.5">
            {signal.note}
          </span>
        </div>
      ))}
    </div>
  );
}
