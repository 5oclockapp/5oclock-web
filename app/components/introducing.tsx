

import React from "react";

export default function Introducing() {
  return (
    <section className="bg-black min-h-screen flex items-center py-16 px-6 md:px-10">
      <div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20"
      >
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
<p className="text-Align-left text-gray-300 font-poppins font-normal text-[20px] leading-relaxed tracking-[0]">
  Yes, it’s that easy. Our location-based technology picks up when you are<br/> at or near a location within our network and you can earn rewards just <br/> for  
 being there Additional rewards can be earned through leaving reviews, uploading live photos, and interacting with other users  Why not earn money  <br />
  
 for things you already do? Let us put some money back into your pocket.
</p>





          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* iOS Button */}
            <button
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
                bg-gradient-to-r from-[#1394f9] to-[#de9bfd] text-white
                hover:bg-none hover:bg-[#0b0b0b] hover:border-[#1394f9]
                transition-all duration-300 shadow-md"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              <img
                src="/assets/mingcute_apple-line.png"
                alt="Apple Icon"
                className="w-6 h-6"
              />
              Download on iOS
            </button>

            {/* Android Button */}
            <button
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
                bg-[#0b0b0b] text-white
                hover:bg-gradient-to-r hover:from-[#1394f9] hover:to-[#de9bfd] hover:border-transparent
                transition-all duration-300 shadow-md"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              <img
                src="/assets/material-symbols_download.png"
                alt="Android Icon"
                className="w-6 h-6"
              />
              Get on Android
            </button>
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
