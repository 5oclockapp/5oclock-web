"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden font-[Montserrat]">
      {/* Background Video */}
      <video
        src="/assets/vid-final.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90 "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 md:px-10 text-center text-white z-10 flex flex-col justify-center items-center min-h-[80vh] font-extrabold">
        {/* Heading */}
        <motion.h1
          className="text-center font-poppins font-bold text-[72px] leading-[100%] tracking-[0] text-gray-100 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          If Yelp & BeReal
        </motion.h1>

        {/* Subheading */}
        <motion.span
          className="font-poppins font-bold text-[72px] leading-[100%] tracking-[0] bg-gradient-to-r from-[#1394f9] to-[#de9bfd] bg-clip-text text-transparent text-center block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Had a Baby
        </motion.span>

        {/* Description */}
        <motion.div
          className="text-center mt-6 text-[24px] text-gray-200 font-[300] leading-[100%] tracking-[0] font-[Poppins] max-w-2xl mx-auto "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Discover local hotspots in real-time, read authentic </p>
          <p className="mt-5"> reviews,and earn rewards just for going out.</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center mt-8 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* iOS Button */}
          <button
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-lg border border-[#1394f9]
              bg-gradient-to-r from-[#1394f9] to-[#de9bfd] text-white Text → center aligned
              hover:bg-none hover:bg-[#0b0b0b] hover:border-[#1394f9]
              transition-all duration-300 shadow-md text-sm sm:text-base md:text-lg font-Poppins SemiBold (600) Size → 18px Line height → 100%"
          >
            <img
              src="/assets/mingcute_apple-line.png"
              alt="Apple Icon"
              className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7"
            />
            Download on iOS
          </button>

          {/* Android Button */}
          <button
            className="flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-lg border border-[#1394f9]
              bg-[#0b0b0b] text-white
              hover:bg-gradient-to-r hover:from-[#1394f9] hover:to-[#de9bfd] hover:border-transparent
              transition-all duration-300 shadow-md text-sm sm:text-base md:text-lg font-Poppins SemiBold (600) Size → 18px"
          >
            <img
              src="/assets/material-symbols_download.png"
              alt="Android Icon"
              className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7"
            />
            Get on Android
          </button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 text-sm sm:text-base md:text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <img
            src="/assets/Ellipse 1.png"
            alt="Dot"
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
          <p>Live on iOS and Android</p>
        </motion.div>
      </div>
    </section>
  );
}
