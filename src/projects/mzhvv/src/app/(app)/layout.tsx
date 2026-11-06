import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@workspace/shadcn-ui/components/sidebar';
import { AppSidebar } from './app-sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-svh">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
          <SidebarTrigger />
          <span className="text-sm font-medium text-muted-foreground">mzhvv / personal</span>
        </header>
        <div className="min-w-0 flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
