"use client";

import React from "react";

export default function Readytopartner() {
  return (
    <section className="bg-black py-20 flex justify-center items-center font-['Inter'] px-4">
      {/* Highlighted Box */}
      <div className="max-w-5xl w-full sm:w-[1120px] rounded-3xl p-8 sm:p-12 text-center bg-[#1E1E1E]/60 backdrop-blur-md shadow-xl">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-white mb-4 leading-tight">
          <span className="block text-white">Ready to</span>
          <span className="block bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
            Partner With Us?
          </span>
        </h2>

        {/* Subtext */}
        <p className=" sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-Poppins">
          Join hands with us to grow your business faster and reach more
          customers. Explore our partnership opportunities and take the next
          step towards success.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10">
          {/* Become a Partner */}
          <button
            className="text-white font-semibold text-[16px] sm:text-[18px]
                       rounded-[10px] w-[180px] sm:w-[200px] h-[46px] sm:h-[50px]
                       transition duration-300 transform hover:scale-[1.05] shadow-lg"
            style={{
              background: "linear-gradient(90deg, #B175FF 0%, #4AAFFF 100%)",
            }}
          >
            Become a Partner
          </button>

          {/* Schedule a Demo */}
          <button
            className="text-white font-semibold text-[16px] sm:text-[18px]
                       border-2 border-gray-700 bg-transparent hover:border-[#4AAFFF]
                       hover:bg-gray-800 rounded-[10px] w-[180px] sm:w-[200px] h-[46px] sm:h-[50px]
                       transition duration-300 transform hover:scale-[1.05]"
          >
            Schedule a Demo
          </button>
        </div>

        {/* Footer Info Points */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
            <p>Free partnership registration</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
            <p>No hidden costs</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
            <p>Grow with us instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
