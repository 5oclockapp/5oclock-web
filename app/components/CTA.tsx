
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="relative text-center bg-gray-800/50 rounded-lg p-10 md:p-16 border border-teal-500/20 overflow-hidden">
             <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500/10 rounded-full filter blur-3xl"></div>
             <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-teal-500/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join 5 O'clock App today and start turning your empty tables into a thriving business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-500/30 transform hover:scale-105"
              >
                Sign Up for Free
              </a>
              <a
                href="#"
                className="w-full sm:w-auto bg-transparent border-2 border-teal-400 text-teal-400 font-bold py-3 px-8 rounded-lg hover:bg-teal-400/10 transition-all duration-300 transform hover:scale-105"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
