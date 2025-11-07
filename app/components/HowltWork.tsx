


"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, MegaphoneIcon, ChartBarSquareIcon } from "./icons";

const HowItWorks: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        // backgroundImage: "url('/assets/photo-1619013334711-3e72ad987069.avif')",
      }}
    >
      {/* Decorative glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_60%)] pointer-events-none"></div>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Animated gradient container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative max-w-3xl sm:max-w-4xl mx-auto p-6 sm:p-8 md:p-10 
          rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(20,220,200,0.2)] 
          bg-[linear-gradient(135deg,#0f172a,#020617,#0f172a)] overflow-hidden
          before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,rgba(45,212,191,0.2),rgba(99,102,241,0.2),rgba(45,212,191,0.2))]
          before:animate-spin-slow before:blur-3xl before:opacity-50 before:-z-10"
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1394f9] to-[#de9bfd]">
              Works
            </span>
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Whether you’re a foodie social butterfly or just need help deciding
            where to go — we’ve got you covered! No more FOMO about which spots
            are buzzing.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-4 sm:mt-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Earn cash rewards for sharing your thoughts, leaving reviews, and
            connecting with friends — right at your favorite spots.
          </motion.p>

          {/* Example Icons Section (optional) */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex flex-col items-center text-center text-gray-300">
              <CalendarDaysIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 text-[#1394f9]" />
              <p className="text-sm sm:text-base md:text-lg font-medium">
                Plan Your Outings
              </p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-300">
              <MegaphoneIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 text-[#de9bfd]" />
              <p className="text-sm sm:text-base md:text-lg font-medium">
                Share & Discover
              </p>
            </div>
            <div className="flex flex-col items-center text-center text-gray-300">
              <ChartBarSquareIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 text-[#13e6c6]" />
              <p className="text-sm sm:text-base md:text-lg font-medium">
                Earn & Grow
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
