// projects/react/18/src/pages/main-layout/index.tsx

import { Link, Outlet } from 'react-router';

import { Button } from '@packages/ui/components/ui/button';

export const MainLayout = () => {
  return (
    <div id="main-layout" className="flex h-svh">
      <Sidebar />
      <Inset />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div id="main-sidebar" className="flex shrink-0">
      <div className="flex">
        <div className="p-1 w-14">
          <div className="p-1">
            <Button asChild size="icon-lg">
              <Link to={'/'}>R18</Link>
            </Button>
          </div>
        </div>
        <div className="w-px bg-border/50" />
      </div>

      <div className="flex">
        <div className="p-1 w-48">
          <div className="p-1">
            <div className="h-10 flex items-center">Навигация</div>
          </div>
        </div>
        <div className="w-px bg-border/50" />
      </div>
    </div>
  );
};

const Inset = () => {
  return (
    <div id="main-inset" className="grow">
      <Outlet />
    </div>
  );
};
