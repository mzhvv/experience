// src/app/router/config.tsx

import { Navigate } from 'react-router-dom';

import { toRouteObjects } from '@package/react-router-dom-kit/route-object';
import type { RouteObjectConfig } from '@package/react-router-dom-kit/route-object/types';
import { createRoute, createRouteConfig } from '@package/react-router-dom-kit/route';

import { MainLayout } from '@/pages/main-layout';
import { NotFoundPage } from '@/pages/not-found';
import { HomePage } from '@/pages/home';
import { UiPage } from '@/pages/ui';
import { UiComponentsPage } from '@/pages/ui-components';

// #region routeObject

export const uiRouteObject = {
  relativePath: 'ui',
  absolutePath: 'ui',
  element: <UiPage />,
  children: {
    components: {
      relativePath: 'components',
      absolutePath: 'ui/components',
      element: <UiComponentsPage />,
    },
    blocks: {
      relativePath: 'blocks',
      absolutePath: 'ui/blocks',
      element: <UiComponentsPage />,
    },
  },
} as const satisfies RouteObjectConfig;

const uiRoute2 = toRouteObjects(uiRouteObject);

// #endregion routeObject

// #region route

const uiRoute = createRoute([
  {
    path: 'ui',
    element: <UiPage />,
    children: [
      {
        path: 'components',
        element: <UiComponentsPage />,
      },
      {
        path: 'blocks',
        element: <UiComponentsPage />,
      },
    ],
  },
]);

const route = createRoute([]);

const systemRoute = createRoute([
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]);

// #endregion
// #region routeConfig

export const routeConfig = createRouteConfig([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
      },
      ...systemRoute,
      ...route,
    ],
  },
]);

// #endregion
