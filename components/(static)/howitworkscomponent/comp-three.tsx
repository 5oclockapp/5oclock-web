"use client";

import React, { useState, useEffect } from "react";

// SVG Arrow Icons
const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Step Data
const steps = [
  {
    stepNumber: 1,
    title: "Venue Visit",
    description:
      "Discover places that match your vibe before you book. Explore ambience, seating, lighting, and overall experience in person — so you can be confident you’re choosing the perfect venue for your plan.",
    image: "/assets/Group 87.png",
  },
  {
    stepNumber: 2,
    title: "Check In",
    description:
      "Mark your arrival in one tap. Once you check in, the venue gets notified instantly, allowing seamless service and faster assistance without waiting in queues.",
    image: "/assets/Empty Review 1.png",
  },
  {
    stepNumber: 3,
    title: "Check Out",
    description:
      "End your visit with one tap. Checking out lets the venue know you’ve left and helps keep your visit record accurate.",
    image: "/assets/Group 82 (1).png",
  },
  {
    stepNumber: 4,
    title: "Post Something",
    description:
      "Capture your moment and share it with others. Upload photos, write your thoughts, and help more users discover real experiences from real people.",
    image: "/assets/Empty 1.png",
  },
  {
    stepNumber: 5,
    title: "Get Rewards",
    description:
      "Enjoy the places you love and get rewarded for it. Every visit counts toward cashback and premium perks — so you can treat yourself more often without spending more.",
    image: "/assets/Group 88.png",
  },
];

export default function ComThree() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const totalSteps = steps.length;
  const currentStep = steps[currentStepIndex];

  // Infinite carousel manual controls
  const handleNext = () =>
    setCurrentStepIndex((prev) => (prev + 1) % totalSteps);
  const handlePrev = () =>
    setCurrentStepIndex((prev) => (prev - 1 + totalSteps) % totalSteps);

  // ✅ Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => (prev + 1) % totalSteps);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [totalSteps]);

  return (
    <section className="bg-black text-white flex flex-col items-center justify-center py-16 px-6 sm:px-10 font-[Poppins]">
      {/* Header */}
      <div className="max-w-4xl text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent font-Poppins font-bold text-[48px]">
            How It Works
          </span>
        </h1>
        <p className="font-Poppins text-[24px] leading-[100%] tracking[0]">
          Five simple steps to start earning rewards
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14">
        {/* Left: Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="w-[300px] sm:w-[350px] md:w-[380px] lg:w-[400px] xl:w-[420px]">
            <img
              src={currentStep.image}
              alt={`Step ${currentStep.stepNumber}`}
              className="w-full h-[420px] object-contain rounded-xl transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <p className="font-[Poppins] font-bold text-[24px] text-[#B175FF] text-left mb-2">
            Step {currentStep.stepNumber}
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 leading-snug transition-all duration-500 ease-in-out">
            {currentStep.title}
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 transition-all duration-500 ease-in-out">
            {currentStep.description}
          </p>

          {/* Navigation Controls */}
          <div className="flex justify-center lg:justify-start items-center space-x-5">
            <span className="text-gray-300 text-lg">
              <strong>{currentStep.stepNumber}</strong> / {totalSteps}
            </span>

            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-gray-700 text-white bg-gray-800 hover:bg-gradient-to-r hover:from-[#8a2be2] hover:to-[#4b0082] transition-all duration-300"
              aria-label="Previous Step"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-gray-700 text-white bg-gray-800 hover:bg-gradient-to-r hover:from-[#8a2be2] hover:to-[#4b0082] transition-all duration-300"
              aria-label="Next Step"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
