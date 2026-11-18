
import { useState } from "react";

import {
  FiPlus,
  FiMoreVertical,
} from "react-icons/fi";
import Action from "./Action";

const productsData = [
  {
    id: 1,
    name: "Cute Soft Teddybear",
    category: "Toys",
    date: "Fri, Jan 11 2025",
    status: "Out Of Stock",
    price: 285,
    image: "https://placehold.co/100x100/fbbf24/333?text=Toy",
  },
  {
    id: 2,
    name: "MacBook Air Pro",
    category: "Electronics",
    date: "Thu, Jan 16 2025",
    status: "Stock",
    price: 650,
    image: "https://placehold.co/100x100/d1d5db/333?text=Mac",
  },
  {
    id: 3,
    name: "Gaming Console",
    category: "Electronics",
    date: "Wed, Feb 9 2025",
    status: "Stock",
    price: 25,
    image: "https://placehold.co/100x100/374151/fff?text=Game",
  },
  {
    id: 4,
    name: "Boat Headphone",
    category: "Electronics",
    date: "Wed, Feb 16 2025",
    status: "Out Of Stock",
    price: 50,
    image: "https://placehold.co/100x100/cbd5e1/333?text=Boat",
  },
  {
    id: 5,
    name: "Toy Dino for Fun",
    category: "Toys",
    date: "Wed, Feb 20 2025",
    status: "Stock",
    price: 210,
    image: "https://placehold.co/100x100/5eead4/333?text=Dino",
  },
];

function Listing() {
  const [products, setProducts] = useState(productsData);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            All Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Manage your products
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-[#155e52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10483f]"
        >
          <FiPlus size={18} />
          Add Product
        </button>

      </div>

      {/* Product Table */}
      <div className="overflow-x-auto p-1">

        <table className="w-full min-w-[900px] text-left">

          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200 text-sm text-gray-700">

              <th className="px-6 py-5 font-medium">
                Product Name
              </th>

              <th className="px-4 py-5 font-medium">
                Date
              </th>

              <th className="px-4 py-5 font-medium">
                Status
              </th>

              <th className="px-4 py-5 font-medium">
                Price
              </th>

              <th className="px-4 py-5 text-center font-medium">
                Action
              </th>

            </tr>
          </thead>

          {/* Table Body */}
          <tbody>

            {products.length > 0 ? (
              products.map((product) => (

                <tr
                  key={product.id}
                  className="border-b border-gray-200 transition hover:bg-gray-50"
                >

                  {/* Product */}
                  <td className="px-4 py-3">

                    <div className="flex items-center gap-4">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-gray-800">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {product.category}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Date */}
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {product.date}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        product.status === "Stock"
                          ? "bg-green-50 text-green-500"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {product.status}
                    </span>

                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 text-sm text-gray-800">
                    ${product.price}
                  </td>

                  {/* Action */}
                  <td className="relative px-4 py-3 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === product.id
                            ? null
                            : product.id
                        )
                      }
                      className="rounded-lg p-2 transition hover:bg-gray-100"
                    >
                      <FiMoreVertical size={22} />
                    </button>

                    {activeMenu === product.id && (
                      <Action
                        onView={() => {
                          console.log("View:", product);
                          setActiveMenu(null);
                        }}
                        onEdit={() => {
                          console.log("Edit:", product);
                          setActiveMenu(null);
                        }}
                        onDelete={() => handleDelete(product.id)}
                      />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-10 text-center text-sm text-gray-500"
                >
                  No products available
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Listing;
