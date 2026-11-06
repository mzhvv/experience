import Link from 'next/link';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';

const RootSidebar = () => {
  return (
    <aside className="space-y-2 border-r p-2">
      <div className="p-2">
        <Link href={'/'} className={buttonVariants({ variant: 'secondary', size: 'icon-lg' })}>
          m
        </Link>
      </div>
      <div>
        <ul className="space-y-2 p-2">
          {[{ href: '/stack', title: 's' }].map((l) => {
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={buttonVariants({ variant: 'default', size: 'icon-lg' })}
                >
                  {l.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh">
      <RootSidebar />
      {children}
    </div>
  );
}
