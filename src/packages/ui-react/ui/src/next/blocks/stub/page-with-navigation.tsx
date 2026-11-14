import Link from 'next/link';
import type { ProjectNav } from '@w/shared/types/routes';
import { buttonVariants } from '@w/shadcn-ui/components/button';

type PageWithNavProps = ProjectNav;
export const PageWithNav = ({ header, segments }: PageWithNavProps) => {
  return (
    <main className="space-y-1.5 p-1.5 font-mono *:p-1.5">
      <section>
        <h1>
          {(() => {
            const { pathname: href, label } = header;
            return (
              <Link href={href} className="text-xs">
                {label}
              </Link>
            );
          })()}
        </h1>
      </section>
      <section>
        <nav>
          <ul className="flex items-center gap-1.5">
            {segments.map(({ pathname: href, label }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={buttonVariants({ variant: 'secondary', size: 'xs' })}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </main>
  );
};
