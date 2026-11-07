import Link from 'next/link';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';
import { EXPERIENCE_APPS } from '@workspace/experience-routes';
import { ParentRouteSync } from '@/shared/components/parent-route-sync';

const RootSidebar = () => {
  return (
    <header className="space-y-2 border-r p-2 font-mono">
      <div className="p-2">
        <h1>
          <Link href={'/'} className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}>
            e
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="space-y-2 p-2">
          {EXPERIENCE_APPS.map(({ pathname, shortLabel }) => {
            return (
              <li key={pathname}>
                <Link
                  href={pathname}
                  className={buttonVariants({ variant: 'secondary', size: 'icon-lg' })}
                >
                  {shortLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh w-full">
      <RootSidebar />
      {children}
      <ParentRouteSync />
    </div>
  );
}
