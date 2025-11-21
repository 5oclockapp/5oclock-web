import React from "react";

export default function Trustedbyourpatner() {
  return (
    <div className="w-full bg-black">
      <section className=" scroll-blur max-w-7xl mx-auto py-20 px-6 md:px-10 flex items-center justify-center">
        <div className="max-w-2xl text-center ">
          {/* Heading */}
          <h1 className="text-[36px] md:text-[48px] font-bold font-Poppins tracking-tight mb-4 leading-tight">
            <span className="font-Poppins">Trusted By</span>
            <br />
            <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
              Our Partners
            </span>
          </h1>

          {/* Paragraph */}
          <p className="font-Poppins text-[16px] md:text-[20px] leading-snug text-gray-300 px-2">
            Collaborating with industry leaders to bring you the best
            experiences and opportunities across the community.
          </p>
        </div>
      </section>
    </div>
  );
}
