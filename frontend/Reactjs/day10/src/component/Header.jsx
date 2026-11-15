
import React, { useContext } from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { storeContext } from "../context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(storeContext);
  console.log(cart, "cart")
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">
          Shop<span className="text-gray-900">Ease.</span>
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-10">
          <a href="/" className="text-gray-700 font-medium hover:text-blue-600">Home</a>
          <a href="/products" className="text-gray-700 font-medium hover:text-blue-600">Products</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600">Categories</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-700">
          <FaSearch className="cursor-pointer hover:text-blue-600" />
          <FaUser className="cursor-pointer hover:text-blue-600" />
          <Link to="/cart">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="hover:text-blue-600" />
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart?.length}
              </span>
            </div>
          </Link>

        </div>

      </div>
    </header>
  );
};

export default Header;
