// packages/react-router-dom-kit/src/route-object/route-object.ts

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

export type ObviousRouteObjectConfig = RootRouteObject;

/**
 * Явно формируем объекта маршрута указывая relativePath и absolutePath
 */
export function obviousCreateRouteObject(node: ObviousRouteObjectConfig): RouteObject {
  const { relativePath, absolutePath, children, ...rest } = node;
  const { absolutePath: _absolutePath, ...validRest } = { absolutePath, ...rest };

  return {
    path: relativePath,
    ...validRest,
    children: children ? Object.values(children).map(obviousCreateRouteObject) : undefined,
  };
}

// #region example

const exampleRouteObjects = obviousCreateRouteObject({
  relativePath: 'ui',
  absolutePath: 'ui',
  // element: и т.д.
  children: {
    components: {
      relativePath: 'components',
      absolutePath: 'ui/components',
      // element: и т.д.
    },
    blocks: {
      relativePath: 'blocks',
      absolutePath: 'ui/blocks',
      // element: и т.д.
    },
  },
});

// #endregion
// #region reference

const referenceRouteObjects = {
  relativePath: 'ui',
  absolutePath: 'ui',
  // element: и т.д.
  children: {
    components: {
      relativePath: 'components',
      absolutePath: 'ui/components',
      // element: и т.д.
    },
    blocks: {
      relativePath: 'blocks',
      absolutePath: 'ui/blocks',
      // element: и т.д.
    },
  },
};

// #endregion
