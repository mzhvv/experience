// src/pages/main-layout/index.tsx

import { Link, Outlet } from 'react-router-dom';
import { Info } from 'lucide-react';

import { Inset, Sidebar, SidebarColumn, Viewport } from '@package/ui/blocks/sidebar/sidebar';
import { Button } from '@package/ui/components/button/button';

export const MainLayout = () => {
  return (
    <Viewport dataId="main-layout">
      <Sidebar dataId="main-sidebar">
        <SidebarColumn dataId="main-sidebar-column">
          <MainHeader />
          <MainFooter />
        </SidebarColumn>
        <SidebarColumn dataId="main-sidebar-column">
          <AppsNavigation />
        </SidebarColumn>
      </Sidebar>
      <Inset dataId="main-viewport">
        <Outlet />
      </Inset>
    </Viewport>
  );
};

const MainHeader = () => {
  return (
    <header data-id="main-header">
      <h1>
        <Button asChild size="icon">
          <Link to={'/'}>RD</Link>
        </Button>
      </h1>
    </header>
  );
};

const MainFooter = () => {
  return (
    <footer data-id="main-footer">
      <Button asChild size="icon" variant="ghost">
        <Link to={'/'}>
          <Info />
        </Link>
      </Button>
    </footer>
  );
};

const AppsNavigation = () => {
  return <nav data-id="apps-navigation">apps-navigation</nav>;
};
