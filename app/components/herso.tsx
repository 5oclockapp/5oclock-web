

"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden font-[Montserrat]">
      {/*  Background Image or Video */}
      <video
        src="/assets/vid-final.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90 -z-10"
      />

      {/*  Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/*  Content */}
      <div className="relative container mx-auto px-6 text-center text-white z-10 flex flex-col justify-center items-center min-h-[80vh] font-extrabold">
        {/* Heading */}
        <motion.h1
          className="text-8xl md:text-8xl font-extra-bold mb-9 leading-[100%]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          If yelp & BeReal
        </motion.h1>

        <motion.span
          className="text-7xl md:text-7xl font-bold bg-gradient-to-r from-[#1394f9] to-[#de9bfd] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Had a Baby
        </motion.span>

        {/* Description */}
        <motion.div
          className="text-center mt-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Discover local hotspots in real-time, read authentic reviews,</p>
          <p>and earn rewards just for going out.</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >

            
      <div className="flex gap-4">
  {/* iOS Button (starts with gradient) */}
  <button
    className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
    bg-gradient-to-r from-[#1394f9] to-[#de9bfd] text-white
    hover:bg-none hover:bg-[#0b0b0b] hover:border-[#1394f9]
    transition-all duration-300 shadow-md"
    style={{
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '100%',
      letterSpacing: '0',
      verticalAlign: 'middle',
    }}
  >
    <img
      src="/assets/mingcute_apple-line.png"
      alt="Apple Icon"
      className="w-7 h-7"
    />
    Download on iOS
  </button>

  {/* Android Button (starts plain, gradient on hover) */}
  <button
    className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
    bg-[#0b0b0b] text-white
    hover:bg-gradient-to-r hover:from-[#1394f9] hover:to-[#de9bfd] hover:border-transparent hover:text-white
    transition-all duration-300 shadow-md"
    style={{
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '100%',
      letterSpacing: '0',
      verticalAlign: 'middle',
    }}
  >
    <img
      src="/assets/material-symbols_download.png"
      alt="Android Icon"
      className="w-7 h-7"
    />
    Get on Android
  </button>
</div>


        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-4 mt-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <img src="/assets/Ellipse 1.png" alt="Dot" className="w-4 h-4" />
          <p>Live on iOS and Android</p>
        </motion.div>
      </div>
    </section>
  );
}
