import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Card() {
  const [products, setproducts] = useState([])

  async function fetchAPI() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setproducts(response.data.products)

    } catch (error) {
      console.log(error)

    }
  }



  useEffect(
    () => {
      fetchAPI()
    },
    []
  )


  return (
    <div>Card</div>
  )
}
