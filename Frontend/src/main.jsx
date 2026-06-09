import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx'

import AddStudent from './pages/AddStudent';
import Students from './pages/Students';
import EditStudent from './pages/EditStudent';

const router = createHashRouter([
  {
    path: "/",
    element: <AddStudent />
  },

  {
    path: "/students",
    element: <Students />
  },

  {
    path: "/edit/:id",
    element: <EditStudent />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
