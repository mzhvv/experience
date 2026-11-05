import Link from 'next/link';
import { buttonVariants } from '@workspace/shadcn-ui';

export default function RootPage() {
  return (
    <main className="p-2">
      <div className="p-2">
        <Link href="/stack" className={buttonVariants({ size: 'lg' })}>
          stack
        </Link>
      </div>
    </main>
  );
}
