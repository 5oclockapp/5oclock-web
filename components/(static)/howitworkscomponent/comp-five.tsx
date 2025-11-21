"use client";

import React from "react";
import Image from "next/image";

export default function CompFive() {
  return (
    <div className="w-full bg-black">
      <section className="scroll-blur max-w-7xl mx-auto flex items-center justify-center py-16 px-6 sm:py-20 font-['Inter']">
        {/* Outer wrapper for hover gradient border */}
        <div className="relative group rounded-3xl p-[2px] w-full max-w-6xl transition-all duration-500 bg-transparent  ">
          {/* Inner content box */}
          <div className="bg-[#1E1E1E]/80 rounded-3xl py-16 px-6 sm:px-12 text-center transition-all duration-500">
            {/* Heading */}
            <h2 className="text-[28px] sm:text-[38px] md:text-[48px] font-bold text-white leading-tight mb-6">
              <span className="block text-white">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
                Your Night Out?
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover exclusive venues, earn rewards, and make every night out
              unforgettable — only with{" "}
              <span className="font-semibold text-white">5 O'Clock.</span>
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 mb-8">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/us/app/apple-store/id123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/assets/5a902db97f96951c82922874 1.png"
                  alt="App Store"
                  width={160}
                  height={55}
                  className="object-contain w-[130px] sm:w-[160px]"
                />
              </a>

              {/* Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.example.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src="/assets/5a902dbf7f96951c82922875 1.png"
                  alt="Google Play"
                  width={160}
                  height={55}
                  className="object-contain w-[130px] sm:w-[160px]"
                />
              </a>
            </div>

            {/* Footer info points */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
                <p>Exclusive experiences</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
                <p>Rewarding nights</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
                <p>Join the community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
