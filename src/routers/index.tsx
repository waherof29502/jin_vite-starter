import { createBrowserRouter, RouterProvider as Routers } from 'react-router-dom';

import ErrorPage from '../features/subject/pages/ErrorPage';
import List from '../features/subject/pages/List';
import Profile from '../features/subject/pages/Profile';
const router = createBrowserRouter([
  {
    path: '/',
    element: <List />,
    children: [
      {
        path: '/:id/profile',
        element: <Profile />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

export const RouterProvider = () => {
  return <Routers router={router} />;
};
