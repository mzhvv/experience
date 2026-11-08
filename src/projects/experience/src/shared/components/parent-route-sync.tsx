'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  isExperiencePathname,
  type ExperienceNavigateMessage,
  type HostNavigateMessage,
} from '@w/shared/constants/routes';

export function ParentRouteSync() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (window.parent === window) {
      return;
    }

    const message: ExperienceNavigateMessage = {
      type: 'experience:navigate',
      pathname,
    };
    window.parent.postMessage(message, '*');
  }, [pathname]);

  useEffect(() => {
    if (window.parent === window) {
      return;
    }

    function handleMessage(event: MessageEvent<HostNavigateMessage>) {
      if (event.source !== window.parent) {
        return;
      }

      const message = event.data;
      if (message?.type !== 'mzhvv:navigate' || !isExperiencePathname(message.pathname)) {
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
