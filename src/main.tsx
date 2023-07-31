import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

// import { SWRConfig } from 'swr';
import { RouterProvider } from './routers';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <SWRConfig value={{ provider: () => new Map() }}> */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    {/* </SWRConfig> */}
  </React.StrictMode>
);
