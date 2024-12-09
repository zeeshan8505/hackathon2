import Topheader from "./topheader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
      <Topheader />
      <header className="bg-gray-100 border-b py-4 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 flex items-center">
          <Image src="Logo Icon.png" alt="Logo" width={50} height={50} className="w-8 h-8 mr-2" />
          Comforty
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-600">
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
        <div className="flex items-center space-x-6">
          <span className="text-blue-500 font-medium">
            Contact: (808) 555-0111
          </span>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-200 hover:bg-darkIndigo text-gray-600 hover:text-white rounded-md transition duration-200">
          <FaShoppingCart />
  <span className="text-sm md:text-base font-medium">Cart</span>
</button>
        </div>
      </header>
    </>
  );
};

export default Header;
