


import React from 'react';

import Header from './components/header';
import Hero from './components/hero';
import HowItWorks from './components/HowltWork';
import Features from './components/features';

// import Testimonials from './components/testimonials';
// import CTA from './components/CTA';
import Footer from './components/footer';
import ContactForm from './components/contactform';
const App: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        {/* <Testimonials /> */}
        <ContactForm />
        
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
