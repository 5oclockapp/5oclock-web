import React from "react";

export default function App() {
  return <ContactSection />;
}

/**
 * "Get in Touch" section — compact height version
 */
function ContactSection() {
  return (
    <div className="min-h-[60vh] text-white flex items-center justify-center py-10 px-6 sm:px-10 md:px-16 font-[Inter] relative overflow-hidden bg-gradient-to-b from-black via-[#0a0014] to-[#040018]">
      {/* Soft gradient overlay glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(177,117,255,0.12),_transparent_60%),_radial-gradient(circle_at_bottom_left,_rgba(74,175,255,0.12),_transparent_60%)] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center text-center max-w-3xl z-10 space-y-3 sm:space-y-5">
        {/* Main Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight 
          bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent font-Poppins"
        >
          Get in Touch
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed opacity-90 px-2">
          Ready to revolutionize your nightlife experience? We're here to help
          you get started or answer any questions you might have.
        </p>

        {/* Optional Gradient Button */}
        {/* <button className="mt-6 px-6 sm:px-8 py-3 text-base font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] hover:scale-105 shadow-lg">
          Contact Us
        </button> */}
      </div>
    </div>
  );
}
