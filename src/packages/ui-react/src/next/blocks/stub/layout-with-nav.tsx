import Link from 'next/link';
import { cn } from '@workspace/shadcn-ui/lib/utils';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';

type NavigationItem = {
  href: string;
  label: string;
  shortLabel: string;
};

export const LayoutWithNav = ({
  hdrObj,
  navArr,
  children,
}: {
  hdrObj: NavigationItem;
  navArr: NavigationItem[];
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-svh w-full">
      <header className="border-r font-mono">
        <nav className="space-y-1.5 p-1.5 *:p-1.5">
          <div>
            {(() => {
              const { href, label } = hdrObj;
              return (
                <Link href={href} className="text-xs">
                  {label}
                </Link>
              );
            })()}
          </div>
          <ul className="space-y-2">
            {navArr.map(({ href, label }) => {
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
