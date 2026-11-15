
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Content */}
        <div className="w-1/2">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            New Collection 2026
          </span>

          <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-6">
            Discover Your
            <span className="text-blue-600"> Perfect Style</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Explore our latest collection of premium products.
            Find your favorite styles and upgrade your lifestyle
            with our exclusive collection.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-blue-700">
            Shop Now
            <FaArrowRight />
          </button>
        </div>

        {/* Image */}
        <div className="w-1/2 flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
            alt="Featured sneaker"
            className="w-[500px] h-[420px] object-cover rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;