// ---

import { ReactNode } from 'react';
import { cn } from 'cn';

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
};

export function PageHeader({ eyebrow, title, description, action, className }: PageHeaderProps) {
  return (
    <header
      className={cn('flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between', className)}
    >
      <div className="min-w-0">
        <div className="mb-4 flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          <span className="h-px w-6 bg-current opacity-50" />
          {eyebrow}
        </div>
        <h1 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}

// ---

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

// ---

type WorkspacePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  src: string;
};

export function WorkspacePage({ eyebrow, title, description, badge, src }: WorkspacePageProps) {
  return (
    <div className="relative isolate mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1440px] flex-col gap-8 px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
      <div className="workspace-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-80" />
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={
          <span className="inline-flex rounded-full border border-white/[0.09] bg-white/[0.04] px-3.5 py-2 font-mono text-[0.6875rem] tracking-[0.08em] text-neutral-400 uppercase">
            {badge}
          </span>
        }
      />
      <MicrofrontendFrame src={src} title={title} />
    </div>
  );
}
