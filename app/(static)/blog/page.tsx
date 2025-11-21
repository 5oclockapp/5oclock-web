"use client";

import React from "react";

export default function BlogPage() {
  return (
    <div className="w-full bg-black">
      <section className=" scroll-blur max-w-7xl mx-auto py-20 px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden text-white font-[Poppins] mt-15 min-h-screen">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-[48px] leading-[100%] text-center">
            <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
              Latest
            </span>{" "}
            Insights
          </h1>

          <p className="font-normal text-[24px] leading-[100%] tracking-[0%] mt-4 max-w-3xl mx-auto">
            Stay updated with tips, trends, and stories from the 5 O'Clock
            community.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/assets/Component 31.png"
            alt="Blog"
            className="w-[397px] h-[476px] md:w-1/3 object-contain"
          />
          <img
            src="/assets/Component 32.png"
            alt="Earn"
            className="w-[397px] h-[476px] md:w-1/3 object-contain"
          />
          <img
            src="/assets/Component 33.png"
            alt="Image"
            className="w-[397px] h-[476px] md:w-1/3 object-contain"
          />
        </div>
      </section>
    </div>
  );
}
