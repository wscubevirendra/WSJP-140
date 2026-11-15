import React from 'react'
import Hero from '../component/Hero'
import useFetch from '../hooks/useFetch'
import ProductCard from '../component/ProductCard';

export default function Home() {
    const { loading, error, data } = useFetch("https://dummyjson.com/products/categories");
    const product_response = useFetch("https://dummyjson.com/products");
    const products = product_response.data.products?.slice(0, 4)

    return (
        <>
            <Hero />
            <div className='grid grid-cols-11 text-sm gap-4 max-w-7xl mx-auto p-2'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className='px-2 py-4 text-center shadow'>{item.name}</div>
                        )
                    })
                }

             

            </div>
               <div>
                    <h2>Top Product</h2>
                    <div className='grid grid-cols-4 gap-4'>
                        {
                            products?.map((product) => {
                                return <ProductCard product={product} />

                            })}

                    </div>

                </div>
        </>
    )
}
