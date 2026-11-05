import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-svh overflow-hidden">
      <aside className="h-full w-50 shrink-0 border-r">
        <div className="p-2">
          <Link href={'/'} className={'rounded-2xl border p-2'}>
            mzhvv
          </Link>
        </div>
      </aside>
      <main className="h-full min-w-0 flex-1">{children}</main>
    </div>
  );
}
