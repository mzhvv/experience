import { createBrowserRouter } from 'react-router';
import type { RouteObject } from 'react-router';
import MainLayout from '@pages/app/layout';
import RootLayout from '@pages/app/root/layout';
import RootPage from '@pages/app/root/page';
import TodoPage from '@pages/app/todo/page';

const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            path: '/',
            element: <RootPage />,
          },
        ],
      },
      {
        path: 'todo',
        element: <TodoPage />,
      },
    ],
  },
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
