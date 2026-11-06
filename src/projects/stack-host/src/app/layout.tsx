import type { Metadata } from 'next';
import { ParentRouteSync } from '@/shared/components/parent-route-sync';
import { AppSidebar } from '@/shared/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@workspace/shadcn-ui/components/sidebar';
import './current.css';

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
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="min-h-svh">
            <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
              <SidebarTrigger />
              <span className="text-sm font-medium text-muted-foreground">Stack / dashboard</span>
            </header>
            <div className="min-w-0 flex-1">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
