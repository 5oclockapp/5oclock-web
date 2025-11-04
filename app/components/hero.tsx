
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12"
      style={{ backgroundImage: `url(https://picsum.photos/1920/1080?grayscale&blur=2)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gray-950/80 backdrop-brightness-50"></div>
      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          Turn Your Empty Tables into a{' '}
          <span className="text-teal-400">Thriving Business</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Get more customers with last-minute deals and watch your business grow.
          Join the platform that connects you with hungry locals, instantly.
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
    </section>
  );
};

export default Hero;
