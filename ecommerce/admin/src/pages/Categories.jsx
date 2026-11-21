
import { useState } from "react";
import {
  FiPlus,
  FiMoreVertical,
} from "react-icons/fi";

import Action from "../components/Action";
import PageHeader from "../components/PageHeader";
import api from "../api/axiosInstance";
import { useEffect } from "react";

function Categories() {

  const [categories, setCategories] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  async function fetchCategories() {
    try {
      const response = await api.get("category");
      setCategories(response.data.categories);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [])





  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <PageHeader title="Category List" />

      <div className="w-full rounded-2xl border border-gray-200 bg-white">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              All Categories
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage your categories
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-[#155e52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10483f]"
          >
            <FiPlus size={18} />
            Add Category
          </button>

        </div>

        {/* Category Table */}
        <div className="overflow-x-auto p-1">

          <table className="w-full min-w-[900px] text-left">

            {/* Table Header */}
            <thead>
              <tr className="border-b border-gray-200 text-sm text-gray-700">

                <th className="px-6 py-5 font-medium">
                  Category Name
                </th>

                <th className="px-4 py-5 font-medium">
                  Date
                </th>

                <th className="px-4 py-5 font-medium">
                  Status
                </th>

                <th className="px-4 py-5 text-center font-medium">
                  Action
                </th>

              </tr>
            </thead>

            {/* Table Body */}
            <tbody>

              {categories.length > 0 ? (
                categories.map((category) => (

                  <tr
                    key={category._id}
                    className="border-b border-gray-200 transition hover:bg-gray-50"
                  >

                    {/* Category */}
                    <td className="px-4 py-3">

                      <div className="flex items-center gap-4">

                        <img
                          src={category.image}
                          alt={category.name}
                          className="h-14 w-14 rounded-full object-cover"
                        />

                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">
                            {category.name}
                          </h3>
                        </div>

                      </div>

                    </td>

                    {/* Date */}
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {category.createdAt}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${category.status === "Active"
                          ? "bg-green-50 text-green-500"
                          : "bg-red-50 text-red-500"
                          }`}
                      >
                        {category.status ? "Active" : "Inactive"}
                      </span>

                    </td>

                    {/* Action */}
                    <td className="relative px-4 py-3 text-center">

                      <button
                        type="button"
                        onClick={() =>
                          setActiveMenu(
                            activeMenu === category._id
                              ? null
                              : category._id
                          )
                        }
                        className="rounded-lg p-2 transition hover:bg-gray-100"
                      >
                        <FiMoreVertical size={22} />
                      </button>

                      {activeMenu === category._id && (
                        <Action
                          onView={() => {
                            console.log("View:", category);
                            setActiveMenu(null);
                          }}
                          onEdit={() => {
                            console.log("Edit:", category);
                            setActiveMenu(null);
                          }}
                          onDelete={() => handleDelete(category._id)}
                        />
                      )}

                    </td>

                  </tr>

                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-10 text-center text-sm text-gray-500"
                  >
                    No categories available
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Categories;
