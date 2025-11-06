import React from "react";

export default function Introducing() {
    return (
        <div className="flex justify-between items-center min-h-screen bg-black p-8">
            {/* LEFT SIDE — Text Section */}
            <div className="container mx-auto px-6 relative z-10 max-w-2xl mr-100 mb-50">
                <div
                    className=" 
          bg-black 
     "
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-[0_0_15px_rgba(20,220,200,0.2)] mb-5">
                        <img
                            src="/assets/Vector.png"
                            alt="Icon"
                            className="w-6 h-6 object-contain"
                        />
                        <h2 className="font-montserrat font-semibold text-[18px] leading-[100%] tracking-normal text-white align-middle">
                            Introducing the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1394f9] to-[#de9bfd]">
                                5'oClock App
                            </span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-left">
                        Yes, it’s that easy.
                        Our location based technology picks up  when <br /> you are at or near a location within our network
                        and you can earn   <br />rewards just for being there.
                        Additional rewards can be earned <br /> through leaving reviews, uploading live photos,
                        and interacting  with other users.
                        Why not earn money for things you already do? <br />
                        Let us put some money back into your pocket.
                    </p>



                </div>
    <div className="flex gap-4 mt-10">
  {/* iOS Button (starts with gradient) */}
  <button
    className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
    bg-gradient-to-r from-[#1394f9] to-[#de9bfd] text-white
    hover:bg-none hover:bg-[#0b0b0b] hover:border-[#1394f9]
    transition-all duration-300 shadow-md"
    style={{
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '100%',
      letterSpacing: '0',
      verticalAlign: 'middle',
    }}
  >
    <img
      src="/assets/mingcute_apple-line.png"
      alt="Apple Icon"
      className="w-7 h-7"
    />
    Download on iOS
  </button>

  {/* Android Button (starts plain, gradient on hover) */}
  <button
    className="flex items-center gap-3 px-5 py-3 rounded-lg border border-[#1394f9]
    bg-[#0b0b0b] text-white
    hover:bg-gradient-to-r hover:from-[#1394f9] hover:to-[#de9bfd] hover:border-transparent hover:text-white
    transition-all duration-300 shadow-md"
    style={{
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '100%',
      letterSpacing: '0',
      verticalAlign: 'middle',
    }}
  >
    <img
      src="/assets/material-symbols_download.png"
      alt="Android Icon"
      className="w-7 h-7"
    />
    Get on Android
  </button>
</div>



            </div>

            {/* RIGHT SIDE — Phone Image */}
            <div className="flex justify-end items-center mr-20">

                <img
                    src="/assets/phone.png"
                    alt="Phone"
                    className="w-80 h-auto"
                />
            </div>
        </div>
    );
}
