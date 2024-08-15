import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Badge } from "antd";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [cart] = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent shadow-md fixed top-0 left-0 w-full flex items-center justify-between p-4 z-50">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} className="h-8" alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center space-x-8 rtl:space-x-reverse">
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-800 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 "
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-lg md:hidden`}
          id="navbar-menu"
        >
          <div className="flex flex-col font-semibold text-gray-800 p-4 mt-4 border border-gray-200 rounded-lg">
            <Link to="/" className="block py-2 px-3 hover:bg-gray-100 rounded">
              Home
            </Link>
            <Link
              to="/products"
              className="block py-2 px-3 hover:bg-gray-100 rounded"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="block py-2 px-3 rounded hover:bg-gray-100"
            >
              Cart
            </Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-auto">
          <div className="flex space-x-8 rtl:space-x-reverse">
            <Link
              to="/"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-gray-100"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-gray-100"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="block py-2 px-3 text-gray-800 font-semibold rounded hover:bg-gray-100"
            >
              Cart
              <Badge count={cart?.length} showZero className="bottom-2"></Badge>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
