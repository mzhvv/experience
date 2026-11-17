import { createBrowserRouter } from 'react-router';
import type { RouteObject } from 'react-router';
import App from '../pages/App';

const routes = [{ path: '/', element: <App /> }] satisfies RouteObject[];

export const router = createBrowserRouter(routes);
