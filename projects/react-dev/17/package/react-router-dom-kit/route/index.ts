// package/react-router-dom-kit/route/index.ts

import type { RouteObject } from 'react-router-dom';

type /*NotIndexAtTopLevel*/ CreateRouteProps = Omit<RouteObject, 'index' | 'children'> & {
  children?: RouteObject[];
};
/**
 * Защищает от случайных `index` на верхнем уровне
 */
function /*createNotIndexRouteAtTopLevel*/ createRoute(
  props: CreateRouteProps[]
): CreateRouteProps[] {
  return props;
}

/**
 * Соответствует официальному API `react-router-dom` — `RouteObject`
 */
function createRouteConfig(props: RouteObject[]): RouteObject[] {
  return props;
}

// export type { CreateRouteProps };
export { createRoute, createRouteConfig };
