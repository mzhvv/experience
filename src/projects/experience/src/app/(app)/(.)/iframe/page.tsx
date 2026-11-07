import Link from 'next/link';
import { cn } from '@workspace/shadcn-ui/lib/utils';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';
import { IFRAME, IFRAME_PAGE } from '@/shared/constants/navigation';

export default function IframePage() {
  return (
    <main className="space-y-1.5 p-1.5 font-mono *:p-1.5">
      <section>
        <h1>
          {(() => {
            const { href, label } = IFRAME;
            return (
              <Link href={href} className="text-xs">
                {label}
              </Link>
            );
          })()}
        </h1>
      </section>
      <section>
        <nav>
          <ul className="flex items-center gap-1.5">
            {IFRAME_PAGE.map(({ href, label }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(buttonVariants({ variant: 'secondary', size: 'xs' }))}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </main>
  );
}
