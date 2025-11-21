"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import ScrollRevealMotion from "@/components/ScrollRevealMotion";
import ScrollRevealMotion from "./ui/ScrollRevealMotion";
export default function Hero() {
  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden font-[Montserrat]"
    >
      {/* Background Video */}
      <video
        src="/assets/vid-final.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* Content */}
      <div className="relative container mx-auto px-6 sm:px-8 md:px-10 text-center text-white z-10 flex flex-col justify-center items-center min-h-[80vh] font-extrabold">
        {/* Heading */}
        <motion.h1
          className="text-center font-poppins font-bold text-[42px] sm:text-[56px] md:text-[72px] leading-[110%] text-gray-100 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          If Yelp & BeReal
        </motion.h1>

        {/* Subheading */}
        <motion.span
          className="font-poppins font-bold text-[42px] sm:text-[56px] md:text-[72px] leading-[110%] bg-gradient-to-r from-[#1394f9] to-[#de9bfd] bg-clip-text text-transparent text-center block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Had a Baby
        </motion.span>

        {/* Description */}
        <motion.div
          className="text-center mt-6 text-[18px] sm:text-[20px] md:text-[24px] text-gray-200 font-[300] leading-snug font-[Poppins] max-w-xl sm:max-w-2xl mx-auto px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Discover local hotspots in real-time, read authentic reviews,</p>
          <p className="mt-2 sm:mt-4">and earn rewards just for going out.</p>
        </motion.div>

        {/* Store Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/us/app/apple-store/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/assets/5a902db97f96951c82922874 1.png"
              alt="App Store"
              width={140}
              height={45}
              className="object-contain w-[120px] sm:w-[140px] md:w-[160px]"
            />
          </a>

          {/* Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.example.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover:scale-105"
          >
            <Image
              src="/assets/5a902dbf7f96951c82922875 1.png"
              alt="Google Play"
              width={140}
              height={45}
              className="object-contain w-[120px] sm:w-[140px] md:w-[160px]"
            />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-300 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Image
            src="/assets/Ellipse 1.png"
            alt="Dot"
            width={10}
            height={10}
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 object-contain"
          />
          <p>Live on iOS and Android</p>
        </motion.div>
      </div>
    </motion.section>
  );
}
