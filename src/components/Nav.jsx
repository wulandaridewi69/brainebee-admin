"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import LogoHead from "@/../public/assets/logo-header.png";
import Avatar from "@/../public/assets/avatar.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Image src={LogoHead} alt="Logo" className="w-auto"/>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link href="/products/create" className="hover:text-indigo-600">
            Create Product
          </Link>
          <Link href="/contact-us" className="hover:text-indigo-600">
            Contact Us
          </Link>
        </div>

        {/* Navbar mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-xl font-bold">✕</span>
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Menu view on mobile*/}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4 space-y-2 text-gray-700 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Create
            </Link>
            <Link href="/academic" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>

          </div>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;
