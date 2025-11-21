"use client";

import React, { useEffect, useState } from "react";

//  Reusable CountUp hook (same logic as before)
const useCountUp = (target: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 16; // ~60fps
    const step = (end - start) / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

// Single Stat Block Component
const StatBlock = ({
  value,
  description,
}: {
  value: string;
  description: string;
}) => {
  //  Extract number part and suffix (+, %, etc.)
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(numericPart, 1200); // speed control

  return (
    <div className="flex flex-col items-center text-center px-6 py-8 md:py-10 flex-1 border-gray-800">
      {/* Gradient number with animation */}
      <p className="text-5xl sm:text-6xl font-extrabold mb-2 bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
        {count.toLocaleString()}
        {suffix}
      </p>

      {/* Description */}
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};

// Data structure for the ROI statistics
const roiStats = [
  {
    value: "+32%",
    description: "Increase in repeat visits",
  },
  {
    value: "5000+",
    description: "Verified reviews generated monthly",
  },
  {
    value: "1200+",
    description: "Active partner venues",
  },
];

export default function VendorsCompThree() {
  return (
    <section className=" bg-black text-white flex flex-col items-center justify-center py-20 px-6 font-inter">
      {/* Header */}
      <div className="max-w-3xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
            Proven ROI for F&B Businesses
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          See real growth, higher orders, and measurable revenue impact —
          trusted by F&B businesses that scale with 5 O'Clock.
        </p>
      </div>

      {/* Stats Row */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center text-center border-t border-b border-gray-800 divide-y md:divide-y-0 md:divide-x divide-gray-800">
        {roiStats.map((stat, index) => (
          <StatBlock
            key={index}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
}
