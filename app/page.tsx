import React from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import HowItWorks from "./components/HowltWork";
import Features from "./components/features";

import Footer from "./components/footer";
import ContactForm from "./components/contactform";
import { isPrimaryPointer } from "framer-motion";
const App: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />

        <ContactForm />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
