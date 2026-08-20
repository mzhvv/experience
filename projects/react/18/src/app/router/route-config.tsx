// projects/react/18/src/app/router/route-config.tsx

import type { RouteObject } from 'react-router';

import { NotFoundPage, createNotFoundRoute } from '@packages/react-router-dom-kit';
import { HomePage } from '@/pages/home';
import { MainLayout } from '@/pages/main-layout';

export const routeConfig = [
  ...createNotFoundRoute(),

  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
] as const satisfies RouteObject[];
