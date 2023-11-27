import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";


import { router } from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@smastrom/react-rating/style.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='max-w-screen-xl mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
