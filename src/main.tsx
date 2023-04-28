import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import { RouterProvider } from './routers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: () => new Map() }}>
      <RouterProvider />
    </SWRConfig>
  </React.StrictMode>
);
