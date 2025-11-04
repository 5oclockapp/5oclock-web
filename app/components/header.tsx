"use client";

import React, { useState } from 'react';
import { ClockIcon, Bars3Icon, XMarkIcon } from './icons';
import Image from 'next/image';
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'About' },
    { href: '#', label: 'For users' },
    { href: '#', label: 'For Vendors' },
    // { href: '#', label: 'FAQ' },
    // { href: '#', label: 'Blog' },
    // { href: '#', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
  <img 
    src="/assets/App Icon.png" 
    alt="5 O'Clock Logo" 
    className="h-10 w-auto"
  />
  <h5 >oclock</h5>
</a>


        <nav className="hidden lg:flex items-center gap-6 ml-200">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {/* <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Login
          </a> */}
          {/* <a
            href="#"
            className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/20"
          >
            Sign Up for Free
          </a> */}
         {/* <button className="px-6 py-2 font-semibold text-gray-800 rounded-lg bg-gradient-to-r from-white to-white hover:from-gray-100 hover:to-gray-100 border border-gray-300 transition-all duration-300">
  join the wishlist
</button> */}

<button className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-[#1394f9] to-[#de9bfd] hover:from-white hover:to-white hover:text-black text-gray-800 border border-gray-300 transition-all duration-300 shadow-md">
  Join the Wishlist
</button>



        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
            {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 absolute top-full left-0 right-0">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>{link.label}</NavLink>
            ))}
            <div className="border-t border-gray-700 pt-4 flex flex-col gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-center">
                Login
              </a>
              <a
                href="#"
                className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/20 text-center"
              >
                Sign Up for Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
