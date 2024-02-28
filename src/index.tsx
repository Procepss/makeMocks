import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/routes';

//Styles
import '@mantine/core/styles.css';
import './styles/document.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
