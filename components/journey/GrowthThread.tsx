/**
 * components/journey/GrowthThread.tsx
 *
 * Non-linear growth progression built from available data categories.
 */

import type { GrowthStage } from "@/lib/journey";

interface GrowthThreadProps {
  stages: GrowthStage[];
}

export function GrowthThread({ stages }: GrowthThreadProps) {
  return (
    <div className="dark-surface border-2 border-[var(--color-border)] bg-[var(--color-plum)] text-[#f6f1e8] shadow-[4px_4px_0px_0px_var(--color-border)]">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {stages.map((stage, index) => (
          <div
            key={stage.label}
            className={
              index > 0
                ? "p-6 border-t-2 md:border-t-0 md:border-l-2 border-[#f6f1e8]/20"
                : "p-6"
            }
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent-cool)]">
                0{index + 1}
              </span>
              {index < stages.length - 1 && (
                <span className="hidden md:inline font-mono text-xs text-[var(--color-secondary)]">
                  -&gt;
                </span>
              )}
            </div>

            <h3 className="font-display text-2xl font-black uppercase leading-none">
              {stage.label}
            </h3>
            <p className="text-xs text-[#f6f1e8]/75 leading-relaxed mt-3">
              {stage.description}
            </p>
            <span className="font-mono text-[11px] uppercase text-[var(--color-secondary)] mt-5 block">
              {stage.count} {stage.count === 1 ? "record" : "records"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
