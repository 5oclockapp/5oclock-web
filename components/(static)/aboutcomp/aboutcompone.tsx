import React from "react";

export default function Aboutcompone() {
  return (
    <section className="bg-black/90 text-white min-h-[70vh] flex items-center justify-center py-10 px-6 sm:px-10 md:px-20 font-['Inter']">
      {/* Content Container */}
      <div className="max-w-5xl text-center flex flex-col items-center justify-center space-y-5">
        {/* Title Line 1 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-1">
          About 5'O Clock
        </h1>

        {/* Title Line 2 - Gradient Text */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#00A7F5] to-[#D99BFF] bg-clip-text text-transparent">
            Going Out Companion
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4 px-2">
          Whether you’re a{" "}
          <strong className="font-semibold text-white">foodie</strong>,{" "}
          <strong className="font-semibold text-white">social butterfly</strong>
          , <strong className="font-semibold text-white">nomad</strong>, or just
          someone who needs guidance on where to eat &amp; drink – we’ve got you
          covered!
        </p>

        {/* Secondary Text */}
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
          <strong className="font-semibold text-white">No more FOMO</strong>{" "}
          wondering which spots are busy. Earn cash rewards at your favorite
          locations just for leaving reviews and connecting with friends.
        </p>
      </div>
    </section>
  );
}
