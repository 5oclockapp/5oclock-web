
import React from 'react';
import { ArrowTrendingUpIcon, UserGroupIcon, SparklesIcon, ShieldCheckIcon, ComputerDesktopIcon, PresentationChartLineIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:border-teal-400/50 hover:bg-gray-800/60">
    <div className="mb-4 text-teal-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Why Choose 5 O'Clock App?</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            We provide the tools you need to succeed in a competitive market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ArrowTrendingUpIcon className="h-10 w-10" />}
            title="Increase Your Revenue"
            description="Turn quiet hours into profitable ones. Our platform helps you monetize tables that would otherwise remain empty."
          />
          <FeatureCard
            icon={<UserGroupIcon className="h-10 w-10" />}
            title="Fill Your Empty Tables"
            description="Attract a steady stream of customers during off-peak hours, ensuring your venue is always buzzing with activity."
          />
          <FeatureCard
            icon={<SparklesIcon className="h-10 w-10" />}
            title="Attract New Customers"
            description="Reach a new audience of locals and visitors, turning first-time visitors into loyal, repeat customers."
          />
          <FeatureCard
            icon={<ShieldCheckIcon className="h-10 w-10" />}
            title="No Upfront Costs"
            description="We believe in partnership. Our success is tied to yours, with a commission-based model that means you only pay for results."
          />
          <FeatureCard
            icon={<ComputerDesktopIcon className="h-10 w-10" />}
            title="Easy to Use"
            description="Our vendor dashboard is designed for simplicity. Set up deals, manage bookings, and view analytics with ease."
          />
          <FeatureCard
            icon={<PresentationChartLineIcon className="h-10 w-10" />}
            title="Detailed Analytics"
            description="Make data-driven decisions. Understand customer behavior, peak times, and popular deals to optimize your strategy."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
