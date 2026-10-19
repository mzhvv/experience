// projects/react/17/packages/react-router-dom-kit/route-object/types.ts

import type { RouteObject } from 'react-router-dom';

interface Fields {
  relativePath: string;
  absolutePath: string;
}

export interface ChildrenRouteObject extends Omit<RouteObject, 'path' | 'children'>, Fields {
  children?: Record<string, ChildrenRouteObject>;
}
export interface RootRouteObject extends Omit<RouteObject, 'index' | 'path' | 'children'>, Fields {
  children?: Record<string, ChildrenRouteObject>;
}

export type RouteObjectConfig = RootRouteObject;
