import { buttonVariants } from '@workspace/shadcn-ui/components/button';
import { EXPERIENCE_APPS } from '@workspace/experience-routes';
import { AppLink } from '@/shared/components/app-link';
import { ParentRouteSync } from '@/shared/components/parent-route-sync';

const RootSidebar = () => {
  return (
    <header className="space-y-2 border-r p-2 font-mono">
      <div className="p-2">
        <h1>
          <AppLink pathname={'/'} className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}>
            e
          </AppLink>
        </h1>
      </div>
      <nav>
        <ul className="space-y-2 p-2">
          {EXPERIENCE_APPS.map(({ pathname, shortLabel }) => {
            return (
              <li key={pathname}>
                <AppLink
                  pathname={pathname}
                  className={buttonVariants({ variant: 'secondary', size: 'icon-lg' })}
                >
                  {shortLabel}
                </AppLink>
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
