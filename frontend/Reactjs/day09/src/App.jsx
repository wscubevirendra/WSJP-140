import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Not_found from './pages/Not_found'
import Layout from './pages/Layout'
import Contact from './pages/Contact'

export default function App() {
  const routers = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/*",
            element: <Not_found />
          }
        ]
      },

    ]
  )
  return (
    <RouterProvider router={routers} />
  )
}
