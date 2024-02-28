import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MainPage } from './MainPage';

export const router = createBrowserRouter([
  {
    path: '/*',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="main" replace />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
    ],
  },
]);
