import Link from 'next/link';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';

const RootSidebar = () => {
  return (
    <header className="space-y-2 border-r p-2 font-mono">
      <div className="p-2">
        <h1>
          <Link href={'/'} className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}>
            m
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="space-y-2 p-2">
          {[{ href: '/experience', title: 'e' }].map((l) => {
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={buttonVariants({ variant: 'secondary', size: 'icon-lg' })}
                >
                  {l.title}
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
