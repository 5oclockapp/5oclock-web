"use client";
import React from "react";
import Image from "next/image";

export default function Introducing() {
  return (
    <section className="bg-black min-h-screen flex items-center py-16 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* LEFT SIDE — Text Section */}
        <div className="relative z-10 text-left">
          {/* Tagline Box */}
          <div className="inline-flex items-center gap-3 px-5 py-3 border border-gray-600 rounded-xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[0_0_15px_rgba(20,220,200,0.2)] mb-6">
            <img
              src="/assets/Vector.png"
              alt="Icon"
              className="w-6 h-6 object-contain"
            />
            <h2 className="font-montserrat font-semibold text-[16px] sm:text-[18px] text-white ">
              Introducing the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1394f9] to-[#de9bfd]">
                5'oClock App
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-left text-gray-300 font-poppins font-normal text-[20px] leading-relaxed tracking-[0]">
            Yes, it’s that easy. Our location-based technology picks up when you
            are <br /> at or near a location within our network and you can earn
            rewards just <br /> for being there. Additional rewards can be
            earned through leaving reviews, uploading live photos, and
            interacting with other users. Why not earn money <br /> for things
            you already do? Let us put some money back into your pocket.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 mt-10">
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
          </div>
        </div>

        {/* RIGHT SIDE — Phone Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/phone.png"
            alt="Phone"
            className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
