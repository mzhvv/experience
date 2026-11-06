import type { ReactNode } from 'react';
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
