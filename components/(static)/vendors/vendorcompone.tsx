"use client";

import React from "react";

export default function VendorComponentone() {
  // Use your uploaded image
  const dashboardImage = "/assets/Rectangle.png"; //  make sure Rectangle.png is in /public or adjust path accordingly

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6 py-20 font-inter overflow-hidden mt-5">
      <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Side: Text Section */}
        <div className=" lg:w-1/2 flex flex-col text-center lg:text-left mb-16 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Grow Your Business
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
            With
            <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent ml-3">
              5 O'Clock
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
            Running a food & beverage business is tough. Let 5 O’Clock help you
            engage and retain customers — so you can focus on what you do best.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button
              className="px-8 py-3 rounded-xl text-lg font-semibold text-white transition duration-300 transform hover:scale-[1.05] shadow-lg"
              style={{ background: "linear-gradient(90deg, #B175FF, #4AAFFF)" }}
            >
              Become a Partner
            </button>
            <button className="px-8 py-3 rounded-xl text-lg font-semibold text-white border-2 border-gray-700 bg-transparent hover:border-[#4AAFFF] hover:bg-gray-800 transition duration-300 transform hover:scale-[1.05]">
              Schedule a Demo
            </button>
          </div>
        </div>

        {/* Right Side: Your Uploaded Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative w-full">
          <img
            src={dashboardImage}
            alt="5 O'Clock Vendor Dashboard"
            className="w-full max-w-[700px] rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
