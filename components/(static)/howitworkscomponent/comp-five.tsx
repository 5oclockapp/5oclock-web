"use client";

import React from "react";
import Image from "next/image";

export default function CompFive() {
  return (
    <section className="flex items-center justify-center bg-black p-8 sm:p-12 md:p-20">
      <div className="rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/assets/Frame 427319772 (1).png" //  Image inside the /public folder
          alt="Ready to Transform Your Night Out?"
          width={1761}
          height={768}
          className="w-[1120px] h-[488px] object-cover"
          priority
        />
      </div>
    </section>
  );
}
