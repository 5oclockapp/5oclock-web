import React from "react";

export default function HowItWorksComOne() {
  return (
    <section className="bg-black/90 text-white min-h-[500px] flex items-center justify-center p-8 sm:p-12 md:p-20 font-inter">
      {/* Container for Centered Content */}
      <div className="max-w-4xl text-center mt-50">
        {/* Title Line 1 */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
          Your Ultimate
        </h1>

        {/* Title Line 2 - Gradient Text */}
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-[#00A7F5] to-[#D99BFF] bg-clip-text text-transparent">
            Going Out Companion
          </span>
        </h2>

        {/* Main Description Paragraph */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Whether you’re a{" "}
          <strong className="font-semibold text-white">foodie</strong>,{" "}
          <strong className="font-semibold text-white">social butterfly</strong>
          , <strong className="font-semibold text-white">nomad</strong> or just
          someone who needs guidance on where to eat &amp; drink – we’ve got you
          covered!
        </p>

        {/* Secondary Benefit Paragraph */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          <strong className="font-semibold text-white">No more FOMO</strong>{" "}
          wondering which spots are busy. Earn cash rewards at your favorite
          locations just for leaving reviews and connecting with friends.
        </p>
      </div>
    </section>
  );
}
