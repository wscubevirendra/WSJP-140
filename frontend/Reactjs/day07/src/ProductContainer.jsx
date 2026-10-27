import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import SkeletonCard from './SkeletonCard'

export default function ProductContainer() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchProducts() {
        setLoading(true)
        axios.get("https://dummyjson.com/products").then(
            (response) => {
                setProducts(response.data.products)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        ).finally(
            () => {
                setLoading(false)
            }
        )
    }

    useEffect(
        () => {
            fetchProducts()
        },
        []
    )


    // if (loading) {
    //     return <div className="flex min-h-screen items-center justify-center">
    //         <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
    //     </div>
    // }




    return (
        <div className='w-full'>
            <div className='max-w-7xl p-4 mx-auto '>
                <h2 className='my-4 font-bold text-4xl'>Product List</h2>
                <div className="grid grid-cols-4 gap-4">



                    {
                        loading ?
                            [1, 2, 2, 2, 2, 2, 2, 2].map(() => {
                                return <SkeletonCard />
                            })
                            :
                            products.length == 0
                                ?
                                <></>

                                :
                                products.map((data, index) => {
                                    return <ProductCard key={data.id} price={data.price} thumbnail={data.thumbnail} title={data.title} rating={data.rating} />
                                })

                    }
                </div>
            </div>
        </div>
    )
}
