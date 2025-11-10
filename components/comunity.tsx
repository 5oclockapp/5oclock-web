import React from "react";

export default function Commninity() {
  return (
    <section className="bg-black py-20 px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden text-white font-[Poppins]">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-[48px] leading-[100%] text-center">
          What Our 
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
            Community 
          </span>{" "}
          says
        </h1>

        <p className="font-normal text-[24px] leading-[100%] tracking-[0%] mt-4 max-w-3xl mx-auto">
          Join thousands of happy users who are earning while exploring.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src="/assets/Component 36.png"
          alt="one"
          className="w-full md:w-1/4 object-contain"
        />
        <img
          src="/assets/Component 37.png"
          alt="tow"
          className="w-full md:w-1/4 object-contain"
        />
        <img
          src="/assets/Component 38.png"
          alt="three"
          className="w-full md:w-1/4 object-contain"
        />
      </div>
    </section>
  );
}
