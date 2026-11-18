import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import DashBoard from './pages/DashBoard'
import Analytics from './pages/Analytics'
import Products from './pages/Products'


export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <DashBoard />
        },
        {
          path: "/admin/analytics",
          element: <Analytics />
        },
        {
          path:"/admin/products",
          element:<Products/>
        }
        
      ]
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}
