import React from "react";
import Hero from "@/components/herso";
import Introducing from "@/components/introducing";
import Earnmoney from "@/components/earnmoney";
// import Header from "./components/header";

import Header from "@/components/header";
// import Hero from "./components/hero";
// import HowItWorks from "./components/how-it-works/users/HowltWork";

// import Features from "./components/features";
import Features from "@/components/features";

// import Footer from "./components/footer";
import Footer from "@/components/footer";
// import ContactForm from "./components/contactform";
import Trustedbyourpatner from "@/components/trustedbyourpatner";
import Animations from "@/components/animation";
import Latestsight from "@/components/latestInsight";
import Readytostart from "@/components/readytostart";
import ContactForm from "@/components/(static)/contactform/contactform";
import { isPrimaryPointer } from "framer-motion";
const App: React.FC = () => {
  return (
    <div className="bg-gray-950 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Introducing />
        <Earnmoney />
        <Features />
        <Trustedbyourpatner />
        <Animations />
        <Latestsight />
        <Readytostart />
        <ContactForm />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
