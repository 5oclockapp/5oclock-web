


"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowTrendingUpIcon,
  UserGroupIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  PresentationChartLineIcon,
} from "./icons";

const Features: React.FC = () => {
  return (
    <section
      className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/features-bg-min.jpg')",
      }}
    >
      {/* Gradient + glow overlays */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15),transparent_70%)] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            On a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1394f9] to-[#de9bfd]">
              Single Platform
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Endless features that serve your going-out needs — all beautifully connected.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-[0.9] flex justify-center"
          >
            <div className="relative">
              <Image
                src="/assets/hom-features-info-final-min.png"
                width={800}
                height={800}
                alt="App Screenshot"
                className="rounded-2xl object-contain w-full max-w-[900px] border border-gray-800 shadow-[0_0_40px_rgba(0,255,200,0.15)]"
              />
              {/* subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#00f5d4]/20 to-[#7b2ff7]/10 blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Right side: Feature List with animated bg */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 relative p-8 rounded-3xl border border-gray-800 shadow-[0_0_40px_rgba(0,255,200,0.15)] 
            bg-[linear-gradient(135deg,#0f172a,#020617,#0f172a)] 
            overflow-hidden before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,rgba(45,212,191,0.2),rgba(123,47,247,0.15),rgba(45,212,191,0.2))] 
            before:animate-spin-slow before:blur-3xl before:opacity-50 before:-z-10"
          >
           <ul className="space-y-8 text-white text-lg">
  <li>
    <a
      href="#"
      className="flex items-center gap-3 transition hover:text-[#00f5d4] group"
    >
      <ArrowTrendingUpIcon className="w-6 h-6 text-[#00f5d4] group-hover:text-[#00f5d4]" />
      <span>1. Up to Date Info</span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-3 transition hover:text-[#7b2ff7] group"
    >
      <UserGroupIcon className="w-6 h-6 text-[#7b2ff7] group-hover:text-[#7b2ff7]" />
      <span>2. Crowd Sourced Reviews</span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-3 transition hover:text-[#00f5d4] group"
    >
      <SparklesIcon className="w-6 h-6 text-[#00f5d4] group-hover:text-[#00f5d4]" />
      <span>3. Rewards Program</span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-3 transition hover:text-[#7b2ff7] group"
    >
      <ShieldCheckIcon className="w-6 h-6 text-[#7b2ff7] group-hover:text-[#7b2ff7]" />
      <span>4. Find the Coolest Hotspots</span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex items-center gap-3 transition hover:text-[#00f5d4] group"
    >
      <ComputerDesktopIcon className="w-6 h-6 text-[#00f5d4] group-hover:text-[#00f5d4]" />
      <span>5. Post Live Updates</span>
    </a>
  </li>
</ul>


            <div className="flex justify-center mt-10">
              <button className="px-8 py-3 font-semibold text-white rounded-lg border border-teal-400 hover:bg-gradient-to-r hover:from-[#1394f9] hover:to-[#de9bfd] hover:text-black transition-all duration-300 shadow-md">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
