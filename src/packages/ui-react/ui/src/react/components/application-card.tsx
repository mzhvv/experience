import type { ReactNode } from 'react';
import { cn } from 'cn';

type ApplicationCardProps = {
  icon: ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
  footer?: ReactNode;
  className?: string;
  iconClassName?: string;
};

export function ApplicationCard({
  icon,
  eyebrow,
  title,
  description,
  action,
  footer,
  className,
  iconClassName,
}: ApplicationCardProps) {
  return (
    <article
      className={cn(
        'relative flex h-full min-h-64 flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/85 p-6 shadow-[0_1px_2px_rgb(0_0_0/0.03)] backdrop-blur transition duration-300 hover:border-foreground/15 hover:shadow-[0_20px_60px_rgb(0_0_0/0.08)] motion-safe:hover:-translate-y-1',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            'grid size-11 shrink-0 place-items-center rounded-2xl border border-border/60 bg-muted/60 text-foreground',
            iconClassName
          )}
        >
          {icon}
        </span>
        {action}
      </div>
      <div className="mt-auto pt-10">
        <p className="text-[0.625rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-[-0.025em]">{title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
        {footer ? <div className="mt-6">{footer}</div> : null}
      </div>
    </article>
  );
}
