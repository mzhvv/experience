import Link from 'next/link';
import type { NavEntry } from '@w/shared/types/routes';
import { cn } from '@w/shadcn-ui/lib/utils';
import { buttonVariants } from '@w/shadcn-ui/components/button';

type LayoutWithNavProps = {
  hdrObj: NavEntry;
  navArr: NavEntry[];
  children: React.ReactNode;
};
export const LayoutWithNav = ({ hdrObj, navArr, children }: LayoutWithNavProps) => {
  return (
    <div className="flex min-h-svh w-full">
      <header className="border-r font-mono">
        <nav className="space-y-1.5 p-1.5 *:p-1.5">
          <div>
            {(() => {
              const { pathname: href, label } = hdrObj;
              return (
                <Link href={href} className="text-xs">
                  {label}
                </Link>
              );
            })()}
          </div>
          <ul className="space-y-2">
            {navArr.map(({ pathname: href, label }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(buttonVariants({ variant: 'secondary', size: 'xs' }), 'w-full')}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
};
