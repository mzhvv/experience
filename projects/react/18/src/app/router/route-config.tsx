// projects/react/18/src/app/router/route-config.ts

import type { RouteObject } from 'react-router';

import { NotFoundPage, createNotFoundRoute } from '@packages/react-router-dom-kit';

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
