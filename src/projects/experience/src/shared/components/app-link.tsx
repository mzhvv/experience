'use client';

import { useEffect, useState, type MouseEvent, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { toHostPathname } from '@w/shared/constants/routes';

function getEmbeddingHost(): string | null {
  if (typeof window === 'undefined' || window.parent === window) {
    return null;
  }

  try {
    return document.referrer ? new URL(document.referrer).origin : null;
  } catch {
    return null;
  }
}

type AppLinkProps = {
  pathname: string;
  className?: string;
  children: ReactNode;
};

/**
 * Ссылка на маршрут experience. Внутри iframe (встроен в mzhvv) href ведёт на
 * host (http://localhost:3000/experience/...), чтобы открытие в новой вкладке
 * проходило через оболочку; обычный клик делает клиентскую навигацию внутри
 * iframe. Без iframe ведёт себя как обычная ссылка на свой origin.
 */
export function AppLink({ pathname, className, children }: AppLinkProps) {
  const router = useRouter();
  const [host, setHost] = useState<string | null>(null);

  useEffect(() => {
    setHost(getEmbeddingHost());
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    router.push(pathname);
  };

  const href = host ? `${host}${toHostPathname(pathname)}` : pathname;

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
