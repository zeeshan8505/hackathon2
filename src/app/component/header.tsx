// 'use client'; should be placed at the top
'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Topheader from "./topheader";

const Header = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <Topheader />
      <header className="bg-gray-100 border-b py-4 px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <Image src="/Logo Icon.png" alt="Logo" width={50} height={50} />
          <span className="ml-2">Comforty</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-600 z-40">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-500">
            Shop
          </Link>
          <Link href="/product" className="hover:text-blue-500">
            Product
          </Link>
          <Link href="/pages" className="hover:text-blue-500">
            Pages
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            About
          </Link>
        </nav>

        {/* Mobile Navigation - Hamburger Menu */}
        <button
          className="md:hidden flex flex-col space-y-1 items-center"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="block w-6 h-1 bg-gray-600"></span>
          <span className="block w-6 h-1 bg-gray-600"></span>
          <span className="block w-6 h-1 bg-gray-600"></span>
        </button>

        {/* Mobile Menu - Will Show When isMenuOpen is True */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-gray-100 py-4 flex flex-col items-center text-gray-600 space-y-4">
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link href="/shop" className="hover:text-blue-500">
              Shop
            </Link>
            <Link href="/product" className="hover:text-blue-500">
              Product
            </Link>
            <Link href="/pages" className="hover:text-blue-500">
              Pages
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </nav>
        )}

        {/* Contact and Cart Section */}
        <div className="flex items-center space-x-6">
          <span className="text-blue-500 font-medium hidden sm:block">
            <Link href="/contact">
            Contact: (808) 555-0111
            </Link>
          </span>
          <button
            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-indigo-700 text-gray-600 hover:text-white rounded-md transition duration-200"
            aria-label="View cart"
          ><Link href="/cart">
            <FaShoppingCart />
            <span className="text-sm md:text-base font-medium">Cart</span>
            </Link>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
