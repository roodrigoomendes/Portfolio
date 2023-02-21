import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import Reset from './Reset';
import { router } from './Routes';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Reset/>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
