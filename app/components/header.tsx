"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "./icons";
import Link from "next/link";
import { label } from "framer-motion/client";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/", label: "For Users" },

    { href: "/forvendors", label: "For Vendors" },
  ];
  // {href: "/features", label "features"} ,// comming soon,
  // {href: "/how it work", label "how it wok"} ,// comming soon,
  // {href: "/Blog", label "blog"} ,// comming soon,
  // {href: "/contact us" , lable : " contact us"} ,// coming soon,
  {
    /*  for user and vendors come inside how it works as a drop down*/
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md  "
          : "bg-transparent backdrop-blur-0 border-none"
      }`}
    >
      <div className="flex justify-between items-center px-6 lg:px-20 py-4 mr-10">
        {/*  Logo */}
        <div className="flex items-center">
          <img
            src="/assets/Mask group.png"
            alt="5 O'Clock Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-100 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/*  Desktop Button */}
        <div className="hidden lg:flex items-center">
          <button className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-[#1394f9] to-[#de9bfd] transition-all duration-300 shadow-md">
            Download App
          </button>
        </div>

        {/*  Mobile Menu Toggle */}
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

      {/*  Mobile Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-2 px-5 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#1394f9] to-[#de9bfd] hover:from-white hover:to-white hover:text-black transition-all duration-300 shadow-md">
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
