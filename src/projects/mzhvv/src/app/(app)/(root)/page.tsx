import { ArrowUpRight } from 'lucide-react';
import { cn } from 'cn';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';

export default function RootPage() {
  return (
    <main className="space-y-2 p-2">
      <section className="space-x-2 p-2">
        <a
          href="https://github.com/mzhvv/experience"
          title="github repository"
          aria-label="github repository"
          target="_blanc"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'link', size: 'lg' }),
            'gap-0.5 px-0 font-mono text-base'
          )}
        >
          experience
          <ArrowUpRight className="inline-block" />
        </a>
        <span className="text-secondary">by</span>
        <a
          href="https://github.com/mzhvv"
          title="github profile"
          aria-label="github profile"
          target="_blanc"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'link', size: 'lg' }),
            'gap-0.5 px-0 font-mono text-base text-secondary decoration-secondary'
          )}
        >
          mzhvv
          <ArrowUpRight className="inline-block" />
        </a>
      </section>

      {/* <section className="p-2">
        <span className="font-mono">...</span>
      </section> */}
    </main>
  );
}
