/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import {
  IconBook,
  IconDashboard,
  IconLogout,
  IconSearch,
  IconShoppingBag,
  IconShoppingCart,
  IconUserEdit,
} from "@tabler/icons-react";

const NavbarHome = () => {
  const [auth, setAuth] = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div class="px-4">
          <div class="flex items-center justify-between">
            <div class="flex shrink-0">
              <Link aria-current="page" class="flex items-center" to="/">
                <IconBook size={24} className="mr-2" />
                <div className="text-sm">Bookly</div>
              </Link>
            </div>
            <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                About us
              </a>
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Contact
              </a>
              <a
                class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Help & support
              </a>
            </div>
            {!auth?.user ? (
              <div class="flex items-center justify-end gap-3">
                <Link
                  class="hidden items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                  to="/register"
                >
                  Sign up
                </Link>
                <Link
                  class="inline-flex items-center justify-center rounded-full bg-yellow-300 px-5 py-2 text-sm font-semibold text-black
                   shadow-sm transition-all duration-150 hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  to="/login"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="relative flex items-center gap-4 justify-end">
                {/* Avatar */}
                <Link
                  class="flex items-center hover:text-blue-800 "
                  to="/allproducts"
                >
                  <IconSearch className="h-6 w-6 text-gray-500" />
                </Link>
                <Link class="flex items-center hover:text-blue-800 " to="/cart">
                  <IconShoppingBag className="h-6 w-6 text-gray-500" />

                  <span href="/cart" class="flex absolute -mt-5 ml-4">
                    {cart?.length > 0 && (
                      <div class="absolute -top-1 -right-3 w-4 h-4 bg-gray-800 rounded-full text-white text-center text-xs">
                        {cart?.length}
                      </div>
                    )}
                  </span>
                </Link>
                <div className="relative group">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  />

                  {isOpen && (
                    <div className="relative">
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                        <ul className="py-2">
                          <li className="px-4 py-2 hover:bg-yellow-100 flex items-center gap-2 cursor-pointer">
                            <IconDashboard className="w-5 h-5 text-yellow-600" />
                            <NavLink
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                              className="dropdown-item text-gray-700"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li className="px-4 py-2 hover:bg-yellow-100 flex items-center gap-2 cursor-pointer">
                            <IconShoppingCart className="w-5 h-5 text-yellow-600" />
                            <NavLink
                              to="/dashboard/user/orders"
                              className="dropdown-item text-gray-700"
                            >
                              My Orders
                            </NavLink>
                          </li>
                          <li className="px-4 py-2 hover:bg-yellow-100 flex items-center gap-2 cursor-pointer">
                            <IconUserEdit className="w-5 h-5 text-yellow-600" />
                            <NavLink
                              to="/dashboard/user/profile"
                              className="dropdown-item text-gray-700"
                            >
                              Edit Profile
                            </NavLink>
                          </li>
                          <li className="px-4 py-2 hover:bg-yellow-100 flex items-center gap-2 cursor-pointer">
                            <IconLogout className="w-5 h-5 text-yellow-600" />
                            <NavLink
                              onClick={handleLogout}
                              to="/login"
                              className="dropdown-item text-gray-700"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarHome;
