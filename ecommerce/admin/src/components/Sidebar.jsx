
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FiBarChart2,
  FiShoppingBag,
  FiMessageSquare,
  FiCalendar,
  FiMail,
  FiTrello,
  FiUser,
  FiSettings,
  FiMoon,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// Dashboard menu items
const dashboardItems = [
  {
    name: "Analytics",
    icon: FiBarChart2,
    path: "/admin/analytics",
  },
  {
    name: "eCommerce",
    icon: FiShoppingBag,
    path: "/admin/ecommerce",
  },
];

// Apps menu items
const appItems = [
  {
    name: "Category",
    icon: FiMessageSquare,
    path: "/admin/categories",
  },
  {
    name: "Product",
    icon: FiCalendar,
    path: "/admin/products",
  },
  {
    name: "Email",
    icon: FiMail,
    path: "/admin/email",
  },
  {
    name: "Kanban",
    icon: FiTrello,
    path: "/admin/kanban",
  },
  {
    name: "User Profile",
    icon: FiUser,
    path: "/admin/profile",
  },
];

function Sidebar() {
  // Sidebar collapse state
  const [collapsed, setCollapsed] = useState(false);

  // Get current URL
  const location = useLocation();

  // Check active route
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`relative flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ${collapsed ? "w-[90px]" : "w-[290px]"
        }`}
    >
      {/* Logo Section */}
      <div className="flex h-[105px] shrink-0 items-center gap-3 border-b border-gray-200 px-6">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
          <FiMoon size={25} />
        </div>

        {!collapsed && (
          <h1 className="text-[27px] font-bold text-black">
            NiceDash
          </h1>
        )}
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        className="absolute -right-3 top-[120px] z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-100"
      >
        {collapsed ? (
          <FiChevronRight size={17} />
        ) : (
          <FiChevronLeft size={17} />
        )}
      </button>

      {/* Navigation Section */}
      <div className="flex-1 sidebar-scroll overflow-y-auto  px-4 py-6">

        {/* Dashboard Menu */}
        <div className="mb-7">

          {!collapsed && (
            <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Dashboards
            </h2>
          )}

          <nav className="space-y-2">

            {dashboardItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.name : ""}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-200 ${active
                      ? "bg-[#155e52] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Icon
                    size={23}
                    className={`shrink-0 ${active
                        ? "text-[#8acb66]"
                        : "text-gray-500"
                      }`}
                  />

                  {!collapsed && (
                    <span className="text-[16px] font-medium">
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}

          </nav>
        </div>

        {/* Divider */}
        <div className="mb-6 border-t border-gray-200" />

        {/* Apps Menu */}
        <div>

          {!collapsed && (
            <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Apps
            </h2>
          )}

          <nav className="space-y-2">

            {appItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.name : ""}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3.5 transition-all duration-200 ${active
                      ? "bg-[#155e52] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Icon
                    size={23}
                    className={`shrink-0 ${active
                        ? "text-[#8acb66]"
                        : "text-gray-500"
                      }`}
                  />

                  {!collapsed && (
                    <span className="text-[16px] font-medium">
                      {item.name}
                    </span>
                  )}
                </Link>
              );
            })}

          </nav>
        </div>

      </div>


    </aside>
  );
}

export default Sidebar;
