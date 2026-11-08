import { cn } from 'cn';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@w/shadcn-ui/components/button';
import Link from 'next/link';

export const AppsTerminl = async () => {
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
    <div>
      <div className="text-secondary">---</div>
      /experience <span className="text-green-700"> - ready!</span>
      <div className="ms-4">
        <div className="flex items-center">
          <ArrowRight size={12} />
          <span className="ml-4">current:</span>
          <Link
            className={cn(buttonVariants({ variant: 'link', size: 'xs' }), 'h-4 p-0')}
            href={'/experience'}
          >
            http://localhost:3000/experience
          </Link>
        </div>
        <div className="flex items-center">
          <ArrowRight size={12} />
          <span className="ml-4">host:</span>
          <Link
            className={cn(buttonVariants({ variant: 'link', size: 'xs' }), 'h-4 p-0')}
            href={'/experience'}
          >
            http://localhost:3001
          </Link>
        </div>
      </div>
    </div>
  );
};
