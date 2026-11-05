'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

type HostNavigationMessage = {
  type: 'mzhvv:navigate';
  pathname: string;
};

type StackHostMessage = {
  type: 'stack-host:navigate';
  pathname: string;
};

function isHostPathname(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    (value === '/' ||
      value === '/react/stub' ||
      value === '/react/stub2' ||
      value === '/vue' ||
      value === '/angular')
  );
}

export function ParentRouteSync() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (window.parent === window) {
      return;
    }

    const message: StackHostMessage = {
      type: 'stack-host:navigate',
      pathname:
        pathname === '/stack-host'
          ? '/'
          : pathname.startsWith('/stack-host/')
            ? pathname.slice('/stack-host'.length)
            : pathname,
    };
    window.parent.postMessage(message, '*');
  }, [pathname]);

  useEffect(() => {
    if (window.parent === window) {
      return;
    }

    function handleMessage(event: MessageEvent<HostNavigationMessage>) {
      if (event.source !== window.parent) {
        return;
      }

      const message = event.data;
      if (message?.type !== 'mzhvv:navigate' || !isHostPathname(message.pathname)) {
        return;
      }

      if (pathname !== message.pathname) {
        router.replace(message.pathname);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [pathname, router]);

  return null;
}
