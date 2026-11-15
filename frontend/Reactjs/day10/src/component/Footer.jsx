
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-blue-500">
            ShopEase.
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Your one-stop destination for premium products.
            Discover quality, style and convenience with us.
          </p>

          <div className="flex gap-5 mt-6 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-6">Categories</h3>
          <ul className="space-y-4 text-gray-400">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Accessories</li>
            <li>Home & Living</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li>Email: support@shopease.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: Jaipur, India</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 border-t border-gray-700 mt-14 pt-8 text-center text-gray-400">
        <p>© 2026 ShopEase. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;