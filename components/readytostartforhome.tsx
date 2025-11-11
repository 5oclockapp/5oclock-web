"use client";

import Image from "next/image";
import React from "react";

export default function Readytostartforhome() {
  return (
    <section className="bg-black py-20 flex justify-center items-center font-['Inter'] px-4">
      {/* Highlighted Box */}
      <div className="max-w-5xl w-full sm:w-[1120px] rounded-3xl p-8 sm:p-12 text-center bg-[#1E1E1E]/60 backdrop-blur-md shadow-xl">
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold text-white mb-4 leading-tight">
          <span className="block text-white">Ready to Start</span>
          <span className="block bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
            Earning Rewards?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Download the 5 O'Clock app today and turn your nights out into
          rewards. Available now on iOS and Android.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10">
          {/* App Store */}
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

          {/* Play Store */}
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

        {/* Footer Info Points */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/90 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
            <p>Free to download</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
            <p>No subscription required</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#B175FF] rounded-full"></span>
            <p>Start earning immediately</p>
          </div>
        </div>
      </div>
    </section>
  );
}
