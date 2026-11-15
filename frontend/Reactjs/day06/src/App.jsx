import React, { useContext } from 'react'
import RecipeSection from './RecipeSection'
import { store } from './content/context'

export default function App() {
  const { count } = useContext(store)
  const cartData = [
    {
      id: 1,
      name: "a"
    },
    {
      id: 2,
      name: "b"
    }, {
      id: 3,
      name: "c"
    }
  ]

  localStorage.setItem("cart", JSON.stringify(cartData))
  const lsdata=localStorage.getItem("cart")
  console.log(JSON.parse(lsdata))


  return (
    <>
      <RecipeSection />
    </>
  )
}



