// projects/react/18/src/pages/main-layout/index.tsx

import { Outlet } from 'react-router';

export const MainLayout = () => {
  return (
    <div>
      <Inset />
    </div>
  );
};

const Inset = () => {
  return (
    <div data-semantic="INSET">
      <Outlet />
    </div>
  );
};
