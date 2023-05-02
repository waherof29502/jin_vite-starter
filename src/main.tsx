import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr';

import { RouterProvider } from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: () => new Map() }}>
      <RouterProvider />
      <ToastContainer />
    </SWRConfig>
  </React.StrictMode>
);
