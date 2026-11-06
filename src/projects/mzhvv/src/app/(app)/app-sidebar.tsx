'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, House, Layers3 } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@workspace/shadcn-ui/components/sidebar';

const navigation = [
  { href: '/', label: 'Обзор', icon: House, iconClassName: 'text-neutral-400' },
  { href: '/stack', label: 'Stack', icon: Layers3, iconClassName: 'text-indigo-400' },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-3 pb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/" />}
              size="lg"
              tooltip="mzhvv — личный сайт"
              className="h-14 rounded-2xl hover:bg-white/[0.04]"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30">
                M
              </span>
              <span className="flex min-w-0 flex-col gap-1 leading-none">
                <span className="truncate text-sm font-semibold tracking-tight text-neutral-100">
                  mzhvv
                </span>
                <span className="truncate text-xs text-neutral-500">Personal workspace</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="px-3 text-[0.625rem] font-semibold tracking-[0.16em] text-neutral-500 uppercase">
            Навигация
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {navigation.map(({ href, label, icon: Icon, iconClassName }) => (
              <SidebarMenuItem key={href}>
                <SidebarMenuButton
                  isActive={href === '/' ? pathname === '/' : pathname.startsWith('/stack')}
                  render={<Link href={href} />}
                  tooltip={label}
                  className="h-10 rounded-xl px-3 text-neutral-400 hover:bg-white/[0.055] hover:text-neutral-100 data-active:bg-white/[0.09] data-active:text-white"
                >
                  <Icon className={iconClassName} />
                  <span>{label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<a href="https://github.com/mzhvv" target="_blank" rel="noreferrer" />}
              tooltip="GitHub"
              className="h-10 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-neutral-400 hover:bg-white/[0.06] hover:text-neutral-100"
            >
              <ArrowUpRight className="text-indigo-400" />
              <span>GitHub</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
