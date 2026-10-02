export function WelcomeScreen() {
  return (
    <div className="welcome-screen" aria-hidden="true">
      <div className="welcome-content">
        <p className="welcome-brand font-mono text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-accent-warm)] sm:text-base">KIRTHI.EXE</p>
        <div className="welcome-chat mx-auto mt-5 flex w-fit max-w-full flex-col border-2 border-[var(--color-border)] border-l-4 border-l-[var(--color-secondary)] bg-[var(--color-card)] px-5 py-4 text-left text-[var(--color-foreground)] shadow-[3px_3px_0px_0px_var(--color-border)]">
          <span className="welcome-chat-sender font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)] sm:text-xs">Kirthi.exe</span>
          <span className="welcome-chat-hey mt-2 font-display text-lg font-bold sm:text-xl">Hey 👋</span>
          <span className="welcome-chat-message mt-1 font-sans text-base leading-snug text-[var(--color-foreground)] sm:text-lg">Welcome to my portfolio.</span>
        </div>
        <div className="welcome-greeting mt-8">
          <p className="welcome-hi font-display font-black uppercase leading-[0.76] tracking-[-0.08em] text-[var(--color-plum)]">HI.</p>
          <h2 className="welcome-name mt-4 font-display text-3xl font-black uppercase leading-[0.95] tracking-tight text-[var(--color-foreground)] sm:text-5xl">
            I&apos;M KIRTHI.
          </h2>
        </div>
        <p className="welcome-descriptor mt-5 flex flex-wrap justify-center gap-x-2 gap-y-1 font-mono text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-plum)] sm:text-base" aria-label="AI / ML, Web, Data, Building">
          <span>AI / ML</span><span aria-hidden="true">·</span><span>Web</span><span aria-hidden="true">·</span><span>Data</span><span aria-hidden="true">·</span><span>Building</span>
        </p>
      </div>
    </div>
  );
}