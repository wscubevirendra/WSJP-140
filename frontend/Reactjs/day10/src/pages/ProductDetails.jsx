import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loading from '../component/Loading';
import {
  FaStar,
  FaShoppingCart,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";
import useFetch from '../hooks/useFetch';

export default function ProductDetails() {
  const { id } = useParams();
  const { loading, error, data: product } = useFetch(`https://dummyjson.com/products/${id}`)


  if (loading) {
    return <Loading />
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">

      <div className="grid grid-cols-2 gap-16">

        {/* Left: Product Images */}
        <div>
          <div className="bg-gray-100 rounded-2xl p-8">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-[450px] object-contain"
            />
          </div>

          <div className="flex gap-4 mt-5">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="w-28 h-28 bg-gray-100 rounded-xl p-3"
              >
                <img
                  src={image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Information */}
        <div>

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-2">
            Brand: <span className="font-semibold text-gray-800">
              {product.brand}
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex text-yellow-400">
              <FaStar />
            </div>

            <span className="font-semibold">{product.rating}</span>

            <span className="text-gray-400">
              ({product.reviews.length} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mt-7">


            <span className="text-xl text-gray-400 line-through">
              ${product.price}
            </span>

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-lg font-semibold">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-7">
            {product.description}
          </p>

          {/* Stock */}
          <div className="flex items-center gap-2 mt-6">
            <FaCheckCircle className="text-green-600" />

            <span className="text-green-600 font-semibold">
              {product.availabilityStatus}
            </span>

            <span className="text-gray-500">
              ({product.stock} available)
            </span>
          </div>

          {/* Tags */}
          <div className="flex gap-3 mt-6">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button className="border border-gray-300 p-4 rounded-xl hover:bg-gray-100">
              <FaHeart className="text-xl text-gray-700" />
            </button>

          </div>

          {/* Additional Information */}
          <div className="border-t border-gray-200 mt-8 pt-6 space-y-5">

            <div className="flex items-center gap-4">
              <FaTruck className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Shipping Information</h3>
                <p className="text-gray-500 text-sm">
                  {product.shippingInformation}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold">Warranty</h3>
                <p className="text-gray-500 text-sm">
                  {product.warrantyInformation}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-20">

        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Product Specifications
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">SKU</p>
            <h3 className="font-semibold mt-2">{product.sku}</h3>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">Weight</p>
            <h3 className="font-semibold mt-2">{product.weight} g</h3>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">Dimensions</p>
            <h3 className="font-semibold mt-2">
              {product.dimensions.width} ×
              {" "}{product.dimensions.height} ×
              {" "}{product.dimensions.depth}
            </h3>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">Minimum Order</p>
            <h3 className="font-semibold mt-2">
              {product.minimumOrderQuantity} Units
            </h3>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">Return Policy</p>
            <h3 className="font-semibold mt-2">{product.returnPolicy}</h3>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <p className="text-gray-500 text-sm">Availability</p>
            <h3 className="font-semibold mt-2">
              {product.availabilityStatus}
            </h3>
          </div>

        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-xl"
            >

              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900">
                  {review.reviewerName}
                </h3>

                <div className="flex items-center gap-1 text-yellow-400">
                  <FaStar />
                  <span className="text-gray-700">
                    {review.rating}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mt-4 leading-6">
                {review.comment}
              </p>

              <p className="text-gray-400 text-sm mt-5">
                {new Date(review.date).toLocaleDateString()}
              </p>

            </div>
          ))}

        </div>
      </div>

    </section>
  )
}
