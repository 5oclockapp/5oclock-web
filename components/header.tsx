"use client";

import React, { useState, useEffect, useRef } from "react";
// Assuming Bars3Icon and XMarkIcon are correctly imported from './icons'
import { Bars3Icon, XMarkIcon } from "./icons";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

// Define the structure for dropdown items
const dropdownLinks = [
  { href: "/how-it-works/users", label: "For Users" },
  { href: "/how-it-works/vendors", label: "For Vendors" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/features", label: "Feature" },
    // "How It Works" will be handled separately as a button/trigger for the dropdown
    { href: "/blog", label: "Blog" },
    { href: "/contactus", label: "Contact Us" },
  ];

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "text-gray-100 font-semibold hover:text-white transition-colors duration-300 whitespace-nowrap";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-black/40 backdrop-blur-sm border-none" // Adjusted initial background to match the dark, slightly transparent look of the screenshot
      }`}
    >
      <div className="flex justify-between items-center px-6 lg:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center">
          {/* Assuming your logo path is correct and renders the '5'O Clock' text shown */}
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

          {/* How It Works Dropdown (Desktop) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`${linkClass} flex items-center focus:outline-none`}
            >
              How It Works
              {/* Assuming you have a ChevronDown icon or import one */}
              {/* <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-40 rounded-lg bg-white/10 backdrop-blur-lg border border-gray-700 shadow-xl overflow-hidden">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-gray-200 hover:bg-white/20 transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center">
          <button className="px-6 py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-[#5a3aee] to-[#de9bfd] hover:shadow-lg transition-all duration-300">
            Download App
          </button>
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
              // Use Bars3Icon (Hamburger)
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm">
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

            {/* How It Works Dropdown for Mobile */}
            <div className="border-t border-gray-700 pt-4 flex flex-col gap-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-300 font-medium hover:text-white transition-colors duration-300 flex justify-between items-center w-full"
              >
                How It Works
                {/* <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} /> */}
              </button>
              {isDropdownOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Download App Button */}
            <button
              className="mt-4 px-5 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-[#5a3aee] to-[#de9bfd] transition-all duration-300 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
