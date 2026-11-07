'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Blocks, House, Layers3, type LucideIcon } from 'lucide-react';
import { EXPERIENCE_APPS, EXPERIENCE_HOME_PATHNAME } from '@workspace/experience-routes';
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

const appIcons: Record<string, { icon: LucideIcon; iconClassName: string }> = {
  [EXPERIENCE_HOME_PATHNAME]: { icon: House, iconClassName: 'text-neutral-400' },
  '/react-19': { icon: Blocks, iconClassName: 'text-sky-400' },
  '/vue-3': { icon: Layers3, iconClassName: 'text-emerald-400' },
  '/angular-22': { icon: Layers3, iconClassName: 'text-rose-400' },
};

const applications = [
  { href: EXPERIENCE_HOME_PATHNAME, label: 'Обзор' },
  ...EXPERIENCE_APPS.map(({ pathname, label }) => ({ href: pathname, label })),
].map((app) => ({ ...app, ...appIcons[app.href]! }));

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
              tooltip="Stack — приложения"
              className="h-14 rounded-2xl hover:bg-white/[0.04]"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 text-sm font-semibold text-white shadow-lg shadow-indigo-950/30">
                S
              </span>
              <span className="flex min-w-0 flex-col gap-1 leading-none">
                <span className="truncate text-sm font-semibold tracking-tight text-neutral-100">
                  Stack
                </span>
                <span className="truncate text-xs text-neutral-500">Polyglot workspace</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-3">
          <SidebarGroupLabel className="px-3 text-[0.625rem] font-semibold tracking-[0.16em] text-neutral-500 uppercase">
            Приложения
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {applications.map(({ href, label, icon: Icon, iconClassName }) => {
              const isActive = pathname === href;

              return (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    isActive={isActive}
                    render={<Link href={href} />}
                    tooltip={label}
                    className="h-10 rounded-xl px-3 text-neutral-400 hover:bg-white/[0.055] hover:text-neutral-100 data-active:bg-white/[0.09] data-active:text-white"
                  >
                    <Icon className={iconClassName} />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              disabled
              className="h-10 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.045] px-3 text-xs text-emerald-300/80 disabled:opacity-100"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153/0.6)]" />
              <span>Host запущен</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
