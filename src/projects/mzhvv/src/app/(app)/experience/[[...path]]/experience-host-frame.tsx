'use client';

import { useEffect, useRef } from 'react';
import {
  EXPERIENCE_HOME_PATHNAME,
  isExperiencePathname,
  type ExperienceNavigateMessage,
  type HostNavigateMessage,
} from '@workspace/experience-routes';

const EXPERIENCE_BASE_PATH = '/experience';

function getHostPathname(pathname: string) {
  const experiencePath = pathname.match(/^\/experience(?:\/(.*))?$/)?.[1];
  return experiencePath ? `/${experiencePath}` : EXPERIENCE_HOME_PATHNAME;
}

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

      const nextPathname =
        message.pathname === EXPERIENCE_HOME_PATHNAME
          ? EXPERIENCE_BASE_PATH
          : `${EXPERIENCE_BASE_PATH}${message.pathname}`;
      if (window.location.pathname !== nextPathname) {
        window.history.pushState(null, '', nextPathname);
      }
    }

    function handlePopState() {
      const message: HostNavigateMessage = {
        type: 'mzhvv:navigate',
        pathname: getHostPathname(window.location.pathname),
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
