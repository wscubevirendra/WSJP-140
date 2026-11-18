
import { useState } from "react";

import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMail,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Header = ({ setIsCollapsed }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4">

      <div className="flex items-center justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-5">

          {/* Sidebar Toggle */}
          <button
            onClick={() => setIsCollapsed((prev) => !prev)}
            className="text-gray-600 hover:text-teal-700 text-xl"
          >
            <FiMenu size={24} />
          </button>

          {/* Search Bar */}
          <div className="relative w-80">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-teal-600"
            />
          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Messages */}
          <button className="relative text-gray-600 hover:text-teal-700">
            <FiMail size={22} />

            <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 text-white text-[10px] rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-teal-700">
            <FiBell size={22} />

            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              5
            </span>
          </button>

          {/* Profile */}
          <div className="relative">

            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3"
            >

              <img
                src="https://i.pravatar.cc/100?img=12"
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div className="text-left hidden sm:block">
                <h3 className="text-sm font-semibold text-gray-800">
                  Virendra
                </h3>

                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>

              <FiChevronDown className="text-gray-500" />

            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-14 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">

                <div className="px-4 py-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-800">
                    Virendra
                  </h3>
                  <p className="text-xs text-gray-500">
                    admin@example.com
                  </p>
                </div>

                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
                  <FiUser size={18} />
                  My Profile
                </button>

                <button className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-600 hover:bg-gray-50">
                  <FiSettings size={18} />
                  Account Settings
                </button>

                <div className="border-t border-gray-100 mt-1 pt-1">
                  <button className="flex items-center gap-3 w-full px-4 py-3 text-sm text-red-500 hover:bg-red-50">
                    <FiLogOut size={18} />
                    Logout
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;
