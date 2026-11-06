import './current.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { cn } from '@workspace/shadcn-ui/lib/utils';
import Providers from './providers';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
