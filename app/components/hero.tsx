


"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/vendors-header-img-red-min.jpg"
        alt="Social dining background"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.8)", // lighter background
        }}
        // className="-z 10"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-gray-950/30 -z-10" />

      {/* Content */}
    <div className="relative container mx-auto px-6 text-center text-white z-10 flex justify-center items-end min-h-[60vh]">
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 translate-y-16">
    {/* Left heading */}
    <motion.h1
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#1394f9] to-[#de9bfd] bg-clip-text text-transparent"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      5’O Clock App
    </motion.h1>

    {/* Line between texts */}
    <motion.div
      className="h-1 w-32 md:w-64 bg-gradient-to-r from-[#1394f9] to-[#de9bfd] rounded-full"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    ></motion.div>

    {/* Right heading */}
    <motion.h1
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#de9bfd] to-[#1394f9] bg-clip-text text-transparent"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
    >
      For Users
    </motion.h1>
  </div>
</div>

    </section>
  );
};

export default Hero;
