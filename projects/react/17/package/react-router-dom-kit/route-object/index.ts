// package/react-router-dom-kit/route-object/index.ts

import type { RouteObject } from 'react-router-dom';
import type { RouteObjectConfig } from './types';

export function toRouteObjects(node: RouteObjectConfig): RouteObject {
  const { relativePath, absolutePath, children, ...rest } = node;

  const deleteFields = { absolutePath };

  return {
    path: relativePath,
    ...rest,
    children: children ? Object.values(children).map(toRouteObjects) : undefined,
  };
}
