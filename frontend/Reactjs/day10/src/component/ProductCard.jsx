
import React, { useContext } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { storeContext } from "../context/Context";

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(storeContext);
    return (
        <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition">

            {/* Product Image */}
            <Link to={`/product-details/${product.id}`}>

                <div className="bg-gray-100 h-64 p-5">
                    <img
                        src={product?.thumbnail}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>
            </Link>


            {/* Product Details */}
            <div className="p-5">

                <span className="text-sm text-blue-600 font-medium">
                    {product.category}
                </span>

                <h2 className="text-xl font-bold text-gray-900 mt-2">
                    {product.name}
                </h2>
                {/* Price */}
                <div className="flex items-center justify-between mt-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                        ${product.price}
                    </h3>

                    <button onClick={() => {
                        addToCart({
                            id:product.id,
                            title:product.title,
                            thumbnail:product.thumbnail,
                            price:product.price,
                            category:product.category,
                            qty:1
                        })
                    }} className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                        <FaShoppingCart />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;
