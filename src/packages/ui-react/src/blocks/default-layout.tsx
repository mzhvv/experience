import { buttonVariants } from '@workspace/shadcn-ui/components/button';
import { cn } from 'cn';
import Link from 'next/link';

type NavigationItem = {
  href: string;
  label: string;
  shortLabel: string;
};

const DefaultHeader = ({
  hObj,
  navAry,
  className,
}: {
  hObj: NavigationItem;
  navAry: NavigationItem[];
  className?: string;
}) => {
  return (
    <header className={cn('border-r font-mono', className)}>
      <nav className="space-y-1.5 p-1.5 *:p-1.5">
        <div>
          {(() => {
            const { href, label } = hObj;
            return (
              <Link href={href} className="text-xs">
                {label}
              </Link>
            );
          })()}
        </div>
        <ul className="space-y-2">
          {navAry.map(({ href, label }) => {
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
  );
};

export const DefaultLayout = ({
  hObj,
  navAry,
  children,
}: {
  hObj: NavigationItem;
  navAry: NavigationItem[];
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-svh w-full">
      <DefaultHeader className="shrink-0" {...{ hObj, navAry }} />
      {children}
    </div>
  );
};
