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
    <aside className="sidebar">
      <Link className="brand" href="/">
        <span className="brand-mark">M</span>
        <span>
          <strong>Macrofrontend</strong>
          <small>Application host</small>
        </span>
      </Link>

      <div className="nav-heading">ПРИЛОЖЕНИЯ</div>
      <nav aria-label="Приложения">
        {applications.map((application) => {
          const isActive =
            pathname === application.href ||
            (application.href.startsWith('/react/') && pathname.startsWith(`${application.href}/`));

          return (
            <Link
              aria-current={isActive ? 'page' : undefined}
              className={`nav-link${isActive ? ' active' : ''}`}
              href={application.href}
              key={application.href}
            >
              <span className={`nav-icon ${application.label.toLowerCase()}`}>
                {application.icon}
              </span>
              {application.label}
              {isActive && <span className="nav-indicator" />}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot" />
        Host запущен
      </div>
    </aside>
  );
}
