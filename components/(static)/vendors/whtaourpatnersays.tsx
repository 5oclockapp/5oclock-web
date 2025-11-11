"use client";

import React from "react";
import Image from "next/image";

// Example data (using public images)
const testimonials = [
  {
    image: "/assets/Component 36 (1).png",
  },
  {
    image: "/assets/Component 37 (1).png",
  },
  {
    image: "/assets/Component 38 (1).png",
  },
];

export default function WhatOurPartnersSay() {
  return (
    <section className="bg-black py-16 sm:py-24 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-12 leading-tight">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
            Partners
          </span>{" "}
          Say
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.05] transition duration-300"
            >
              <Image
                src={testimonial.image}
                alt={`testimonial-${index}`}
                width={360}
                height={360}
                className="object-contain w-[300px] sm:w-[340px] md:w-[360px] h-auto rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
