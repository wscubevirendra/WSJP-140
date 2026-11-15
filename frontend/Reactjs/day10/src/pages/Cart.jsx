
import React, { useContext } from "react";
import {
    FiShoppingBag,
    FiTrash2,
    FiPlus,
    FiMinus,
    FiArrowLeft,
    FiTag,
    FiArrowRight
} from "react-icons/fi";
import { storeContext } from "../context/Context";

export default function Cart() {
    const { cart, increaseQty, decreaseQty, clearCart, total, removeItem } = useContext(storeContext)

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-black text-white p-3 rounded-xl">
                        <FiShoppingBag size={24} />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Shopping Cart
                        </h1>
                        <p className="text-gray-500 text-sm">
                            {cart.length} products in your cart
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cart Products */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm border p-5 sm:p-7">

                            <div className="flex justify-between items-center border-b pb-5 mb-5">
                                <h2 className="text-lg font-bold">
                                    Cart Items ({cart.length})
                                </h2>

                                <button onClick={clearCart} className="text-sm text-red-500">
                                    Clear Cart
                                </button>
                            </div>

                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row gap-5 py-5 border-b last:border-0"
                                >
                                    {/* Image */}
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full sm:w-32 h-36 object-cover rounded-xl bg-gray-100"
                                    />

                                    {/* Details */}
                                    <div className="flex-1">

                                        <div className="flex justify-between gap-3">
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">
                                                    {item.category}
                                                </p>

                                                <h3 className="font-semibold text-gray-900 mt-1">
                                                    {item.title}
                                                </h3>

                                                <p className="text-lg font-bold mt-2">
                                                    ₹{item.price}
                                                </p>
                                            </div>

                                            <button onClick={() => removeItem(item.qty)} className="text-gray-400 hover:text-red-500 h-fit">
                                                <FiTrash2 size={19} />
                                            </button>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex items-center justify-between mt-5">
                                            <div className="flex items-center border rounded-lg">
                                                <button disabled={item.qty < 2} onClick={() => decreaseQty(item.id)} className="p-2  disabled:hidden hover:bg-gray-100">
                                                    <FiMinus size={15} />
                                                </button>

                                                <span className="px-4 font-medium">
                                                    {item.qty}
                                                </span>

                                                <button onClick={() => increaseQty(item.id)} className="p-2 hover:bg-gray-100">
                                                    <FiPlus size={15} />
                                                </button>
                                            </div>

                                            <p className="font-bold text-gray-900">
                                                ₹{item.price * item.qty}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* Continue Shopping */}
                        <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 mt-6">
                            <FiArrowLeft />
                            Continue Shopping
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-white border rounded-2xl shadow-sm p-6">

                            <h2 className="text-xl font-bold mb-6">
                                Order Summary
                            </h2>

                            {/* Coupon */}
                            <div className="flex gap-2 mb-6">
                                <div className="flex items-center gap-2 flex-1 border rounded-lg px-3">
                                    <FiTag className="text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Promo code"
                                        className="w-full py-3 outline-none text-sm"
                                    />
                                </div>

                                <button className="bg-gray-900 text-white px-4 rounded-lg text-sm">
                                    Apply
                                </button>
                            </div>

                            {/* Price Details */}
                            <div className="space-y-4 border-b pb-6">

                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>Subtotal</span>
                                    <span>${total}</span>
                                </div>

                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>

                                <div className="flex justify-between text-gray-500 text-sm">
                                    <span>Discount</span>
                                    <span>$0</span>
                                </div>

                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center py-6">
                                <span className="font-bold text-lg">Total</span>

                                <span className="font-bold text-2xl">
                                    ${total}
                                </span>
                            </div>

                            <button className="w-full bg-black text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-gray-800 transition">
                                Proceed to Checkout
                                <FiArrowRight />
                            </button>

                            <p className="text-center text-xs text-gray-400 mt-4">
                                Secure checkout · Safe payment
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
