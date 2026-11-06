'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Blocks, House, Layers3 } from 'lucide-react';
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

const applications = [
  { href: '/', label: 'Обзор', icon: House },
  { href: '/react/stub', label: 'React / stub', icon: Blocks },
  { href: '/react/stub2', label: 'React / stub2', icon: Blocks },
  { href: '/vue', label: 'Vue', icon: Layers3 },
  { href: '/angular', label: 'Angular', icon: Layers3 },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href="/" />} size="lg" tooltip="Stack — приложения">
              <span className="grid size-8 shrink-0 place-items-center rounded-md bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">
                S
              </span>
              <span className="flex min-w-0 flex-col gap-0.5 leading-none">
                <span className="truncate font-semibold">Stack</span>
                <span className="truncate text-xs text-muted-foreground">
                  Приложения и технологии
                </span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Приложения</SidebarGroupLabel>
          <SidebarMenu>
            {applications.map(({ href, label, icon: Icon }) => {
              const isActive =
                pathname === href ||
                (href.startsWith('/react/') && pathname.startsWith(`${href}/`));

              return (
                <SidebarMenuItem key={href}>
                  <SidebarMenuButton
                    isActive={isActive}
                    render={<Link href={href} />}
                    tooltip={label}
                  >
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton disabled>
              <span className="size-2 rounded-full bg-emerald-500" />
              <span>Host запущен</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
