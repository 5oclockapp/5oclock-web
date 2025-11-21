"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "./icons";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/users", label: "For Users" },
    { href: "/vendors", label: "For Vendors" },
    { href: "/contactus", label: "Contact Us" },
  ];

  const linkClass =
    "text-gray-100 font-semibold hover:text-white transition-colors duration-300 whitespace-nowrap";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-700 ease-in-out border-none">
      <div className="flex justify-between items-center px-6 lg:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/assets/Mask group.png"
              alt="5 O'Clock Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/download"
            className="px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#5a3aee] to-[#de9bfd] hover:shadow-lg transition-all duration-300"
          >
            Download App
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-white transition"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 font-medium hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Download App Button */}
            <Link
              href="/download"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 px-5 py-3 text-center text-white font-semibold rounded-xl bg-gradient-to-r from-[#5a3aee] to-[#de9bfd] transition-all duration-300 shadow-md"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
