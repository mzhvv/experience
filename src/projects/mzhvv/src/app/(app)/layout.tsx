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
      <SidebarInset className="workspace-background min-h-svh">
        <SidebarTrigger className="fixed top-4 left-4 z-20 size-9 rounded-full border border-white/[0.08] bg-[#0d1017]/80 text-neutral-400 backdrop-blur hover:bg-white/[0.08] hover:text-white md:hidden" />
        <div className="min-w-0 flex-1">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
