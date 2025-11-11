"use client";

import React from "react";
import Link from "next/link";
import Contactcompone from "@/components/(static)/contactform/contactcompone";
import ContactForm from "@/components/(static)/contactform/contactform";
import Compfour from "@/components/(static)/howitworkscomponent/compfour";
import Animations from "@/components/animation";
import GotsQuestions from "@/components/(static)/howitworkscomponent/gotsquestions";
import CompFive from "@/components/(static)/howitworkscomponent/comp-five";
// import ContactForm from "@/components/(static)/contactform/contactform";
export default function ContactUsPage() {
  return (
    <>
      <Contactcompone />

      <ContactForm />
      <Compfour />

      <Animations />

      <GotsQuestions />

      <CompFive />
    </>
  );
}
