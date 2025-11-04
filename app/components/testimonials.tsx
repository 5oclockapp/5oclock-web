"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const testimonialsData = [
  {
    quote:
      "5 O'Clock App has been a game-changer for our weeknight traffic. We've seen a 30% increase in customers during what used to be our slowest hours. The platform is incredibly easy to use.",
    name: 'Maria Rodriguez',
    title: 'Owner, The Golden Spoon',
    image: 'https://picsum.photos/id/1027/100/100',
  },
  {
    quote:
      "We were skeptical at first, but the results speak for themselves. We're reaching a whole new demographic of diners who have now become regulars. I can't recommend it enough.",
    name: 'Johnathan Chen',
    title: 'Manager, The Crafty Brew',
    image: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote:
      'The analytics dashboard is fantastic. It gives us clear insights into our performance and helps us tailor our deals effectively. It\'s an essential tool for any modern restaurant.',
    name: 'Samantha Miller',
    title: 'Marketing Director, The Seaside Grill',
    image: 'https://picsum.photos/id/1011/100/100',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const { quote, name, title, image } = testimonialsData[currentIndex];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">What Our Partners Say</h2>
        </div>

        <div className="relative max-w-3xl mx-auto bg-gray-900 rounded-xl border border-gray-800 p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <p className="text-lg md:text-xl italic text-gray-300 mb-8">"{quote}"</p>
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mr-4 border-2 border-teal-400"
              />
              <div>
                <h4 className="text-xl font-bold text-white">{name}</h4>
                <p className="text-teal-400">{title}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-teal-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-teal-500 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-teal-400 scale-125' : 'bg-gray-700 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
