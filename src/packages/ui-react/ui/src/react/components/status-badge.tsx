import type { ReactNode } from 'react';
import { cn } from 'cn';

type StatusBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function StatusBadge({ children, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card/70 px-3.5 py-2 text-[0.6875rem] font-semibold tracking-[0.12em] text-muted-foreground uppercase backdrop-blur',
        className
      )}
    >
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {children}
    </span>
  );
}
