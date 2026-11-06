type MicrofrontendFrameProps = {
  src: string;
  title: string;
};

export function MicrofrontendFrame({ src, title }: MicrofrontendFrameProps) {
  return (
    <section className="flex min-h-[65vh] flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1017] shadow-[0_24px_80px_rgb(0_0_0/0.28)]">
      <div className="flex h-12 shrink-0 items-center border-b border-white/[0.07] px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-rose-400/70" />
          <span className="size-2 rounded-full bg-amber-300/70" />
          <span className="size-2 rounded-full bg-emerald-400/70" />
        </div>
        <span className="ml-4 truncate font-mono text-[0.625rem] text-neutral-500">{title}</span>
        <span className="ml-auto flex items-center gap-2 pl-4 font-mono text-[0.625rem] tracking-[0.12em] text-emerald-400/80 uppercase">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>
      <iframe
        className="min-h-[60vh] w-full flex-1 border-0 bg-white"
        src={src}
        title={title}
        allow="fullscreen"
      />
    </section>
  );
}
