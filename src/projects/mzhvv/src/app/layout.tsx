import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './current.css';

import { cn } from '@workspace/shadcn-ui/lib/utils';
import Providers from './providers';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'mzhvv — проекты и эксперименты',
  description: 'Личный сайт mzhvv: проекты, технологии и интерактивные эксперименты.',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn('dark antialiased', fontMono.variable, 'font-sans', geist.variable)}
    >
      <body className="workspace-shell min-h-svh bg-background font-sans text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
