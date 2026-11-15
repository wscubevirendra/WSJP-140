import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Layout from './pages/Layout'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/product-details/:id",
          element: <ProductDetails />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    },


  ])
  return (
    <RouterProvider router={routers} />
  )
}
