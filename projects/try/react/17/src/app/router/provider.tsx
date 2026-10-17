// projects/react/17/src/app/router/provider.tsx

import { RouterProvider } from 'react-router-dom';
import { router } from './router';

export const Router = () => <RouterProvider router={router} />;
