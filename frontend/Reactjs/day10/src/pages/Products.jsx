import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'
import Loading from '../component/Loading';

export default function Products() {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  if (loading) {
    return <Loading />
  }

  if(error){
    return <h2>{error}</h2>
  }
  
  return (
    <div className='max-w-7xl mx-auto grid p-4 grid-cols-4 gap-4'>
      {
        data?.products?.map((product) => {
          return <ProductCard product={product} />

        })}
    </div>
  )
}
