import type { Metadata } from 'next';
import { Sidebar } from '@/app/components/sidebar';
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
      <body>
        <div className="shell">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
