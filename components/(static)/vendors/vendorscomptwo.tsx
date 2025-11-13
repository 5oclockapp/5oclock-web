import React from "react";

// Data structure for the vendor benefits
const vendorBenefits = [
  {
    title: "Gain Exposure to New Customers",
    description:
      "Reach new audiences before your competitors through our targeted platform.",
    icon: (
      // Upload Icon with Gradient
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14.899v1.5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.5" />
        <path d="M15 9l-3-3-3 3" />
        <path d="M12 18V6" />
      </svg>
    ),
  },
  {
    title: "Instant Reviews",
    description:
      "Generate authentic reviews from customers within 24 hours of their visit.",
    icon: (
      // Star/Review Icon with Gradient
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.32 6.91.99-5 4.88 1.18 6.88L12 18.04l-6.18 3.26 1.18-6.88-5-4.88 6.91-.99L12 2z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Visibility",
    description:
      "Appear live to customers through our dynamic 'For You' page feed.",
    icon: (
      // Flash/Lightning Icon with Gradient
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2l-3 7h5l-3 7 3-7H8l3-7z" />
        <path d="M18 13.5l-4.5 4.5 4.5 4.5" />
      </svg>
    ),
  },
  {
    title: "Track Measurable ROI",
    description:
      "Access detailed analytics and data through our comprehensive vendor portal.",
    icon: (
      // Analytics/Graph Icon with Gradient
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12h-6l-3 9-3-9H3" />
        <path d="M22 20H2" />
      </svg>
    ),
  },
  {
    title: "Effortless Integration",
    description:
      "Seamlessly integrate into your daily operations with minimal setup required.",
    icon: (
      // Rocket/Launch Icon with Gradient
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 10.5c-1.5 1-2.5 2-2.5 4s1 3 2.5 4h14c1.5-1 2.5-2 2.5-4s-1-3-2.5-4z" />
        <path d="M12 21v-3" />
        <path d="M12 3v3" />
        <path d="M19 12h-3" />
        <path d="M8 12H5" />
      </svg>
    ),
  },
  {
    title: "Boost Repeat Customers",
    description:
      "Encourage customers to return more often with reviews, offers, and personalized visibility.",
    icon: (
      // Tag/Offer Icon with Gradient
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 1.5l4 4-1.88 1.88-4-4L17.5 1.5z" />
        <path d="M13 8l-8 8-1.5-1.5 8-8 1.5 1.5z" />
        <path d="M15.5 11l-3-3 1.5-1.5 3 3-1.5 1.5z" />
        <path d="M7 17l-3 3-1.5-1.5 3-3 1.5 1.5z" />
        <circle cx="9" cy="9" r="2" />
      </svg>
    ),
  },
];

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-[#14141d] p-6 rounded-2xl shadow-xl flex flex-col items-start h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-[#4AAFFF] border border-transparent">
    {/* Icon with Gradient Background */}
    <div
      className="p-3 rounded-xl mb-4"
      style={{
        background: "linear-gradient(45deg, #B175FF, #4AAFFF)", // Gradient matching the header
        boxShadow: "0 4px 15px rgba(74, 175, 255, 0.4)",
      }}
    >
      {icon}
    </div>

    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-base">{description}</p>
  </div>
);

export default function VendorsComptwo() {
  return (
    <section className="bg-black text-white min-h-[70vh] flex flex-col items-center justify-center p-8 sm:p-12 md:p-20 font-inter">
      {/* Header Content */}
      <div className="max-w-4xl text-center mb-16">
        {/* Title Line - Gradient Text */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
            Why Partner With 5 O&apos;Clock
          </span>
        </h1>

        {/* Subtitle/Description */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Grow your business faster with more customers, higher visibility, and
          reliable earnings — powered by 5 O&apos;Clock.
        </p>
      </div>

      {/* Responsive Feature Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendorBenefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
