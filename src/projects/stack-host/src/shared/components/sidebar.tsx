'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const applications = [
  { href: '/', label: 'Обзор', icon: '⌂' },
  { href: '/react/stub', label: 'React / stub', icon: 'R' },
  { href: '/react/stub2', label: 'React / stub2', icon: 'R' },
  { href: '/vue', label: 'Vue', icon: 'V' },
  { href: '/angular', label: 'Angular', icon: 'A' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-svh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-4 py-5 text-sidebar-foreground max-sm:w-[4.5rem] max-sm:px-2">
      <Link
        className="flex items-center gap-3 rounded-lg px-2 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        href="/"
        title="Macrofrontend — обзор"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
          M
        </span>
        <span className="min-w-0 max-sm:hidden">
          <strong className="block truncate text-sm font-medium">Macrofrontend</strong>
          <small className="mt-1 block text-xs text-muted-foreground">Application host</small>
        </span>
      </Link>

      <div className="mb-2 mt-8 px-3 text-xs font-medium text-muted-foreground max-sm:hidden">
        ПРИЛОЖЕНИЯ
      </div>
      <nav aria-label="Приложения" className="flex flex-col gap-1">
        {applications.map((application) => {
          const isActive =
            pathname === application.href ||
            (application.href.startsWith('/react/') && pathname.startsWith(`${application.href}/`));

          return (
            <Link
              aria-current={isActive ? 'page' : undefined}
              className={`group relative flex min-h-9 items-center gap-3 rounded-md px-3 text-sm transition-colors max-sm:justify-center max-sm:px-0 ${
                isActive
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
              href={application.href}
              key={application.href}
              title={application.label}
            >
              <span
                className={`grid size-6 shrink-0 place-items-center rounded text-xs font-medium ${
                  isActive
                    ? 'bg-background text-foreground'
                    : 'bg-muted text-muted-foreground group-hover:text-foreground'
                }`}
              >
                {application.icon}
              </span>
              <span className="truncate max-sm:hidden">{application.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center gap-2 border-t border-sidebar-border px-3 pt-4 text-xs text-muted-foreground max-sm:justify-center max-sm:px-0">
        <span className="size-2 rounded-full bg-emerald-500" />
        <span className="max-sm:hidden">Host запущен</span>
      </div>
    </aside>
  );
}
