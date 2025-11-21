import React from "react";

export default function HowItWorksComOne() {
  return (
    <div className="w-full bg-black/90">
      <section className="max-w-7xl mx-auto scroll-blur text-white min-h-[65vh] flex items-center justify-center py-10 px-6 sm:px-10 md:px-20 font-inter">
        {/* Container for Centered Content */}
        <div className="max-w-4xl text-center space-y-5">
          {/* Title Line 1 */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Your Ultimate
          </h1>

          {/* Title Line 2 - Gradient Text */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#00A7F5] to-[#D99BFF] bg-clip-text text-transparent">
              Going Out Companion
            </span>
          </h2>

          {/* Main Description Paragraph */}
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you’re a{" "}
            <strong className="font-semibold text-white">foodie</strong>,{" "}
            <strong className="font-semibold text-white">
              social butterfly
            </strong>
            , <strong className="font-semibold text-white">nomad</strong> or
            just someone who needs guidance on where to eat &amp; drink – we’ve
            got you covered!
          </p>

          {/* Secondary Benefit Paragraph */}
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <strong className="font-semibold text-white">No more FOMO</strong>{" "}
            wondering which spots are busy. Earn cash rewards at your favorite
            locations just for leaving reviews and connecting with friends.
          </p>
        </div>
      </section>
    </div>
  );
}
