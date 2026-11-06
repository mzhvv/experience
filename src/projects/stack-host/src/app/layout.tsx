import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ParentRouteSync } from '@/shared/components/parent-route-sync';
import { AppSidebar } from '@/shared/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@workspace/shadcn-ui/components/sidebar';
import { cn } from '@workspace/shadcn-ui/lib/utils';
import './current.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const fontMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Stack — приложения и технологии',
  description: 'Единая оболочка для независимых React, Vue и Angular приложений.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'workspace-shell min-h-svh bg-background font-sans text-foreground antialiased',
          geist.variable,
          fontMono.variable
        )}
      >
        <ParentRouteSync />
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="workspace-background min-h-svh">
            <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-3 border-b border-white/[0.07] bg-[#090b10]/75 px-4 backdrop-blur-xl sm:px-6">
              <SidebarTrigger className="-ml-1 size-9 rounded-full text-neutral-400 hover:bg-white/[0.07] hover:text-white" />
              <div className="flex min-w-0 items-center gap-2 text-sm">
                <span className="font-semibold tracking-tight text-neutral-100">Stack</span>
                <span className="text-neutral-700">/</span>
                <span className="truncate text-neutral-500">workspace</span>
              </div>
              <div className="ml-auto hidden items-center gap-2 text-xs text-neutral-500 sm:flex">
                <span className="size-1.5 rounded-full bg-emerald-400" />4 приложения
              </div>
            </header>
            <div className="min-w-0 flex-1">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
