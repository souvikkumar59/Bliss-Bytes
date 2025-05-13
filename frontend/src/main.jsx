import React, { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import Adminview from './components/Adminview.jsx'
import { createRoot } from 'react-dom/client'




import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import Footer from './components/Footer.jsx'



const router = createBrowserRouter([
  {
    path: "/admin2003",
    element: <Adminview />,
  },

  {
    path: "/",
    element: 
    <>
    <App />
    <Footer />
    </>
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);