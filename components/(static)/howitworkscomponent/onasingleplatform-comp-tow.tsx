import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  alt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, alt }) => (
  <div
    className="relative flex items-center justify-center rounded-2xl overflow-hidden 
               group transition-all duration-500"
  >
    {/* Gradient Overlay on Hover */}
    <div
      className="absolute inset-0 bg-gradient-to-br from-[#00A7F5]/0 to-[#D99BFF]/0 
                 opacity-0 group-hover:opacity-100 group-hover:from-[#00A7F5]/40 
                 group-hover:to-[#D99BFF]/40 transition-all duration-500 rounded-2xl mt-2 h-52"
    ></div>

    {/* Image */}
    <img
      src={imageSrc}
      alt={alt}
      className="w-full h-full object-cover md:object-contain rounded-2xl 
                 transform transition-transform duration-500 group-hover:scale-105"
    />
  </div>
);

const features = [
  { imageSrc: "/assets/Component 6.png", alt: "Discover Hotspots" },
  { imageSrc: "/assets/Component 8.png", alt: "Share Moments" },
  { imageSrc: "/assets/Component 7.png", alt: "Authentic Reviews" },
  { imageSrc: "/assets/Component 45 (1).png", alt: "Connect friends" },
  { imageSrc: "/assets/Component 50.png", alt: "Live updates" },
  { imageSrc: "/assets/Component 51.png", alt: "Earn Rewards" },
  { imageSrc: "/assets/Component 52.png", alt: "Instant notifications" },
  { imageSrc: "/assets/Component 53.png", alt: "No more FOMO" },
];

export default function Onasingleplatform() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center py-20 px-6 sm:px-10 font-[Poppins]">
      {/* Header */}
      <div className="max-w-4xl text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase mb-4 tracking-wide">
          <span className="bg-gradient-to-r from-[#00A7F5] to-[#D99BFF] bg-clip-text text-transparent">
            On A Single Platform
          </span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Endless features that serve your going out needs!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="aspect-[4/3] flex" // Keeps nice proportions
          >
            <FeatureCard imageSrc={feature.imageSrc} alt={feature.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
