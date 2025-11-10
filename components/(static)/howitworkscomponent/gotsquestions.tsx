import React, { useState } from "react";

// The FAQ data
const faqItems = [
  {
    id: 1,
    question: "How does 5 O' Clock Work?",
    answer:
      "Simply download the app, browse participating venues near you, check in when you arrive, and start earning rewards automatically. It's that easy!",
  },
  {
    id: 2,
    question: "Is 5 O' Clock free to use?",
    answer:
      "Yes, 5 O' Clock is completely free for all users. We earn revenue through partnerships with venues, allowing you to enjoy all the features and rewards at no cost.",
  },
  {
    id: 3,
    question: "How do I redeem my rewards?",
    answer:
      "You can redeem your earned cash rewards directly into your bank account or use them for exclusive discounts and gift cards available within the app's rewards center.",
  },
  {
    id: 4,
    question: "Can I use 5 O' Clock globally?",
    answer:
      "Currently, 5 O' Clock is expanding rapidly! We are active in major cities across the US and UK, with plans to launch in Europe and Asia next year. Check our app for the latest locations!",
  },
];

// Plus Icon (for closed state)
const PlusIcon = (props) => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// Minus Icon (for open state)
const MinusIcon = (props) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// Individual FAQ item component
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 mb-4 
        ${
          isOpen
            ? "border-[#4AAFFF] bg-[#161616] shadow-2xl shadow-[#4AAFFF]/30" // Open state
            : "border-gray-800 bg-[#1e1e1e] hover:border-[#B175FF]" // Closed state
        }`}
    >
      {/* Question Header */}
      <button
        className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-white focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="transition-transform duration-300">
          {isOpen ? (
            <MinusIcon className="w-6 h-6 text-[#4AAFFF]" />
          ) : (
            <PlusIcon className="w-6 h-6 text-[#B175FF]" />
          )}
        </span>
      </button>

      {/* Answer Content */}
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ transitionProperty: "max-height" }}
      >
        <p className="p-5 pt-0 text-gray-300 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

export default function GotsQuestions() {
  const [openItemId, setOpenItemId] = useState(faqItems[0].id);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="bg-black text-white min-h-[70vh] flex flex-col items-center justify-center p-8 sm:p-12 md:p-20 font-inter">
      {/* Header Content */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
          Got Questions?
        </h1>

        {/* Gradient headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] bg-clip-text text-transparent">
            We've Got Answers
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Everything you need to know about 5 O' Clock
        </p>
      </div>

      {/* Accordion / FAQ List */}
      <div className="w-full max-w-3xl mx-auto">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onClick={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
