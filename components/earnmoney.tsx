"use client";

import { useState, useEffect, useRef } from "react";

//  Use your image-based slides instead of Lucide icons
const slides = [
  {
    title: "Go Out",
    map: "/assets/Group 82.png",
    card: "/assets/Frame 427319779.png",
    text: "Visit any location in our network. Our app automatically detects when you arrive.",
  },
  {
    title: "Share Your Experience",
    map: "/assets/Group 83.png",
    card: "/assets/Frame 427319779 (1).png",
    text: "Leave reviews, upload live photos, and interact with the community.",
  },
  {
    title: "Earn Rewards",
    map: "/assets/Group 84.png",
    card: "/assets/Frame 427319779 (2).png",
    text: "Get paid for your contributions. Redeem rewards or cash out directly.",
  },
];

export default function AnimatedEarningSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const handleSelect = (index: number) => {
    setCurrent(index);
    setIsPaused(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => {
      setIsPaused(false);
      startAutoCycle();
    }, 10000);
  };

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // --- Transition Wrapper ---
  const SlideTransition = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    const isActive = index === current;
    const transitionClass = isActive
      ? "opacity-100 translate-y-0 scale-100 duration-700 ease-out"
      : "opacity-0 translate-y-4 scale-95 duration-700 ease-in pointer-events-none";

    return (
      <div
        key={index}
        className={`absolute inset-0 flex justify-center items-center ${transitionClass}`}
      >
        {children}
      </div>
    );
  };

  // --- Card Component (Right Side Tabs) ---
  const Card = ({
    title,
    text,
    index,
    img,
  }: {
    title: string;
    text: string;
    index: number;
    img: string;
  }) => {
    const isActive = index === current;
    const pulseShadow = isActive
      ? "shadow-purple-500/80 ring-2 ring-[#B175FF]"
      : "group-hover:shadow-[0_0_25px_#4AAFFF] group-hover:ring-2 group-hover:ring-[#4AAFFF]";

    return (
      <div
        onClick={() => handleSelect(index)}
        className={`relative w-[320px] sm:w-[480px] h-auto p-[2px] rounded-2xl cursor-pointer 
        transition-all duration-300 ease-in-out group 
        ${
          isActive
            ? "scale-[1.02] bg-gradient-to-r from-[#B175FF] to-[#4AAFFF]"
            : "scale-100 bg-gray-800"
        }`}
      >
        <div
          className={`w-full h-full bg-black rounded-[15px] p-6 text-white flex items-center justify-start text-left 
          transition-colors duration-300 ${pulseShadow}`}
        >
          {/*  Image on the left instead of icon */}
          <div className="flex items-center justify-center w-16 h-16 min-w-16 mr-4">
            <img
              src={img}
              alt={title}
              className="w-12 h-12 object-contain rounded-md"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://placehold.co/64x64/1C1C1C/FFFFFF?text=Image")
              }
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col">
            <h1
              className={`font-semibold text-xl mb-1 transition-colors duration-300 ${
                isActive ? "text-[#B175FF]" : "text-white"
              }`}
            >
              {title}
            </h1>
            <p className="text-sm leading-snug text-gray-400">{text}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 font-sans">
      <div className="max-w-4xl mb-16">
        <h1 className="text-6xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
            Go Out.
          </span>{" "}
          <span className="text-white">Earn Money.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light">
          Yes, it's that easy. Start earning rewards for things you{" "}
          <br className="hidden sm:inline" /> already do.
        </p>
        <div className="mt-6 flex justify-center items-center text-sm text-gray-500">
          {isPaused
            ? "Auto-cycle paused after selection."
            : "Auto-cycle: 5s interval"}
        </div>
      </div>

      {/* Layout: Map on left, cards on right */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl">
        {/* LEFT SIDE: Animated phone mockups */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative h-[500px] min-h-[500px] mb-16 lg:mb-0">
          {slides.map((slide, index) => (
            <SlideTransition key={index} index={index}>
              <img
                src={slide.map}
                alt={`${slide.title} Map Screen`}
                onError={(e) =>
                  (e.currentTarget.src = `https://placehold.co/320x500/1C1C1C/FFFFFF?text=${slide.title}`)
                }
                className="w-[480px] sm:w-[520px] h-auto object-contain z-10 rounded-[40px] transition-transform duration-500"
                style={{ transform: "rotate(-5deg) scale(1.05)" }}
              />
            </SlideTransition>
          ))}
        </div>

        {/* RIGHT SIDE: Cards */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-1/2 lg:pl-12">
          {slides.map((box, index) => (
            <Card
              key={index}
              title={box.title}
              text={box.text}
              index={index}
              img={box.card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
