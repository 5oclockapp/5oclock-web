import React from "react";

export default function Vendors() {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center py-16 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12 lg:gap-20">
        {/* LEFT SIDE — Text Section */}
        <div className="relative z-10 text-left flex flex-col items-center lg:items-start">
          {/* Tagline Box */}
          <div className="inline-flex items-center gap-3 px-5 py-3 border border-gray-600 rounded-xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[0_0_15px_rgba(20,220,200,0.2)] mb-6">
            <img
              src="/assets/Vector.png"
              alt="Icon"
              className="w-6 h-6 object-contain"
            />
            <h2 className="font-montserrat font-semibold text-[16px] sm:text-[18px] text-white">
              Vendor Signup
            </h2>
          </div>

          <h1 className="text-[48px] font-bold font-Poppins tracking-tight mb-4 text-center lg:text-left">
            <span className="text-white">Get Your Business On The </span>
            <br />
            <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
              5 O'Clock App
            </span>
          </h1>

          <p className="font-Poppins text-[20px] leading-snug text-center lg:text-left text-gray-300">
            All in one, measurable solutions. Endless use-cases that make it
            highly flexible, adaptable, and scalable for everyone in the
            community.
          </p>

          {/* Stats Section */}
          <div className="flex flex-col items-center lg:items-start mt-5">
            <div className="flex items-center space-x-4">
              <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent font-Poppins font-bold text-[48px]">
                500+
              </span>
              <img src="/assets/Line 110.png" alt="divider" className="h-8" />
              <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent font-Poppins font-bold text-[48px]">
                98%
              </span>
            </div>

            <div className="flex items-center space-x-10 mt-2">
              <h2 className="font-Poppins text-[18px] text-gray-300">
                Active Users
              </h2>
              <h2 className="font-Poppins text-[18px] text-gray-300">
                Active Users
              </h2>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
                bg-gradient-to-r from-[#1394f9] to-[#de9bfd] text-white
                hover:bg-none hover:bg-[#0b0b0b] hover:border-[#1394f9]
                transition-all duration-300 shadow-md font-Poppins font-bold text-[18px]"
            >
              Join The Platform Now
              <img
                src="/assets/Vector (1).png"
                alt="Arrow"
                className="w-[24px] h-[24px]"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — Phone Image */}
        <div className="flex justify-center lg:justify-center mr-10 mt-10 ">
          <img
            src="/assets/Group 78.png"
            alt="Phone"
            className="w-64 sm:w-72 md:w-80 lg:w-120  h-auto"
          />
        </div>
      </div>
    </section>
  );
}
