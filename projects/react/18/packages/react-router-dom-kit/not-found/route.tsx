// projects/react/18/packages/react-router-dom-kit/not-found/route.tsx

import type { RouteObject } from 'react-router';
import { Navigate } from 'react-router';

import { NotFoundPage } from './page';

function notFoundRouteObject(notFoundPage: JSX.Element) {
  const notFoundRoute = {
    path: '/404',
    element: notFoundPage,
  } as const satisfies RouteObject;
  return notFoundRoute;
}

const catchAllRouteObject = {
  path: '*',
  element: <Navigate to="/404" replace />,
} as const satisfies RouteObject;

/**
 * @example
 * ```tsx
 * const routeConfig = [
 *  ...createNotFoundPageRoute(),
 *  ...
 * ] as const satisfies RouteObject[];
 */
export function createNotFoundRoute({
  notFoundPage = <NotFoundPage />,
}: {
  notFoundPage?: JSX.Element;
} = {}) {
  const notFoundRoute = [
    notFoundRouteObject(notFoundPage),
    catchAllRouteObject,
  ] as const satisfies RouteObject[];

  return notFoundRoute;
}
