
import React from 'react';
import { CalendarDaysIcon, MegaphoneIcon, ChartBarSquareIcon } from './icons';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description, stepNumber }) => (
  <div className="relative bg-gray-900 p-8 rounded-xl border border-gray-800 transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-gray-950/50">
     <div className="absolute top-4 left-4 h-12 w-12 bg-gray-800 text-teal-400 flex items-center justify-center rounded-lg font-bold text-2xl">
      {stepNumber}
    </div>
    <div className="mb-6 text-teal-400">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">How it Works?</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Getting started is simple. Follow these three easy steps to boost your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard
            stepNumber={1}
            icon={<CalendarDaysIcon className="h-12 w-12" />}
            title="Set Up Your Deals"
            description="Easily create and manage exclusive, time-based deals in our intuitive vendor dashboard. You control the discount, timing, and availability."
          />
          <StepCard
            stepNumber={2}
            icon={<MegaphoneIcon className="h-12 w-12" />}
            title="Get Noticed by Locals"
            description="Your deals are instantly pushed to thousands of users in your area who are actively looking for a place to eat or drink."
          />
          <StepCard
            stepNumber={3}
            icon={<ChartBarSquareIcon className="h-12 w-12" />}
            title="Track Your Performance"
            description="Access powerful analytics to see how many customers you've gained, track your revenue growth, and optimize your future deals."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
