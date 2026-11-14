'use client';

import { useEffect, useRef } from 'react';
import {
  fromHostPathname,
  isExperiencePathname,
  toHostPathname,
  type ExperienceNavigateMessage,
  type HostNavigateMessage,
} from '@w/shared/constants/routes-0';

export function ExperienceHostFrame({ src }: { src: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const hostOrigin = new URL(src, window.location.href).origin;

    function handleMessage(event: MessageEvent<ExperienceNavigateMessage>) {
      if (event.source !== frameRef.current?.contentWindow) {
        return;
      }

      const message = event.data;
      if (message?.type !== 'experience:navigate' || !isExperiencePathname(message.pathname)) {
        return;
      }

      const nextPathname = toHostPathname(message.pathname);
      if (window.location.pathname !== nextPathname) {
        window.history.pushState(null, '', nextPathname);
      }
    }

    function handlePopState() {
      const message: HostNavigateMessage = {
        type: 'mzhvv:navigate',
        pathname: fromHostPathname(window.location.pathname),
      };
      frameRef.current?.contentWindow?.postMessage(message, hostOrigin);
    }

    window.addEventListener('message', handleMessage);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [src]);

  return (
    <iframe
      ref={frameRef}
      allow="fullscreen"
      className="block h-svh w-full border-0 bg-background"
      src={src}
      title="Experience application host"
    />
  );
}
