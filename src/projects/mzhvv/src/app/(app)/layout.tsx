import Link from 'next/link';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';

const RootSidebar = () => {
  return (
    <header className="space-y-2 border-r p-2">
      <div className="p-2">
        <h1>
          <Link href={'/'} className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}>
            <span className="font-mono">m</span>
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="space-y-2 p-2">
          {[{ href: '/stack', title: 's' }].map((l) => {
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={buttonVariants({ variant: 'secondary', size: 'icon-lg' })}
                >
                  <span className="font-mono">{l.title}</span>
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
    </div>
  );
}
