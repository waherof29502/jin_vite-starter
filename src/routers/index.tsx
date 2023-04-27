import { createBrowserRouter, RouterProvider as RP } from 'react-router-dom';

import ErrorPage from '../features/subject/ErrorPage';
import List from '../features/subject/List';
import Profile from '../features/subject/Profile';
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
  return <RP router={router} />;
};
