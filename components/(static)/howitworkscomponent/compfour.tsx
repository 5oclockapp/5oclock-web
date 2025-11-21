"use client";

import React, { useEffect } from "react";
import { useState } from "react";

// Type for stat props
interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

//  Animated number hook
const useCountUp = (target: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 16; // roughly 60 FPS
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

// Reusable card component for the stats
const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  //  Extract numeric part and suffix (like "+" or "%")
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(numericPart, 1200); // adjust speed (ms)

  return (
    <div className="bg-[#14141d] p-6 rounded-2xl shadow-xl flex flex-col items-start transition-all duration-300 hover:scale-[1.02]">
      {/* Icon with Themed Gradient Background */}
      <div
        className="p-3 rounded-xl mb-4"
        style={{
          background: "linear-gradient(180deg, #B175FF 0%, #4AAFFF 100%)",
          boxShadow: "0 4px 15px rgba(177, 117, 255, 0.35)",
        }}
      >
        <span className="text-white">{icon}</span>
      </div>

      {/*  Animated Value */}
      <h3 className="text-3xl font-extrabold mb-1 text-white">
        {count.toLocaleString()}
        {suffix}
      </h3>

      {/* Label */}
      <p className="text-gray-400 text-base">{label}</p>
    </div>
  );
};

// Data for key metrics
const stats = [
  {
    value: "500+",
    label: "Partner Venues",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    value: "50000+",
    label: "Active Users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: "100000+",
    label: "Rewards Redeemed",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    value: "95%",
    label: "User Satisfaction",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

export default function Compfour() {
  return (
    <section className="  bg-black text-white min-h-[70vh] flex flex-col items-center justify-center p-8 sm:p-12 md:p-20 font-[Poppins]">
      {/* Header Content */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
          Trusted by Thousands
        </h1>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
            Growing Every Day
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Join our thriving community of reward enthusiasts
        </p>
      </div>

      {/* Responsive Stats Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
