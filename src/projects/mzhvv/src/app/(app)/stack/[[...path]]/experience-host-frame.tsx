'use client';

import { useEffect, useRef } from 'react';

type StackHostMessage = {
  type: 'stack-host:navigate';
  pathname: string;
};

type HostNavigationMessage = {
  type: 'mzhvv:navigate';
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

function getHostPathname(pathname: string) {
  const stackPath = pathname.match(/^\/stack(?:\/(.*))?$/)?.[1];
  return stackPath ? `/${stackPath}` : '/';
}

export function StackHostFrame({ src }: { src: string }) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const hostOrigin = new URL(src, window.location.href).origin;

    function handleMessage(event: MessageEvent<StackHostMessage>) {
      if (event.source !== frameRef.current?.contentWindow) {
        return;
      }

      const message = event.data;
      if (message?.type !== 'stack-host:navigate' || !isHostPathname(message.pathname)) {
        return;
      }

      const nextPathname = message.pathname === '/' ? '/stack' : `/stack${message.pathname}`;
      if (window.location.pathname !== nextPathname) {
        window.history.pushState(null, '', nextPathname);
      }
    }

    function handlePopState() {
      const message: HostNavigationMessage = {
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
      title="Stack application host"
    />
  );
}
