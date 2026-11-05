import Link from 'next/link';
import { buttonVariants } from '@workspace/shadcn-ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-svh overflow-hidden">
      <aside className="h-full shrink-0 border-r p-2">
        <div className="p-2">
          <Link href={'/'} className={buttonVariants({ variant: 'secondary', size: 'icon-lg' })}>
            m
          </Link>
        </div>
      </aside>
      <main className="h-full min-w-0 flex-1">{children}</main>
    </div>
  );
}
