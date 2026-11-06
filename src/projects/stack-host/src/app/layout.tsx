import type { Metadata } from 'next';
import { ParentRouteSync } from '@/shared/components/parent-route-sync';
import { Sidebar } from '@/shared/components/sidebar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Macrofrontend Host',
  description: 'Next.js shell hosting React and Vue applications',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="dark min-h-svh bg-background text-foreground antialiased">
        <ParentRouteSync />
        <div className="flex min-h-svh">
          <Sidebar />
          <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
