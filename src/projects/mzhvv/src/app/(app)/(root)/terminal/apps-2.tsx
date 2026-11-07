import { cn } from 'cn';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@workspace/shadcn-ui/components/button';
import Link from 'next/link';

export const AppsTerminl2 = async () => {
  const resStack = await fetch('http://localhost:3001', { cache: 'no-store' });

  const text = resStack.ok ? (
    <span>
      <Link className={buttonVariants({ variant: 'link', size: 'xs' })} href={'/experience'}>
        /experience
      </Link>
      <Link
        className={buttonVariants({ variant: 'link', size: 'xs' })}
        href={'http://localhost:3001'}
      >
        http://localhost:3001
      </Link>
    </span>
  ) : (
    `Ошибка: ${resStack.status}`
  );

  return (
    <div className="inline-flex items-center gap-2">
      <Link
        className={cn(buttonVariants({ variant: 'link', size: 'xs' }), 'h-4 p-0')}
        href={'/experience'}
      >
        /experience
      </Link>
      <span className="text-green-700">{'- ready! ->'}</span>

      <Link
        className={cn(buttonVariants({ variant: 'link', size: 'xs' }), 'h-4 p-0')}
        href={'/experience'}
      >
        http://localhost:3000/experience
      </Link>
    </div>
  );
};
