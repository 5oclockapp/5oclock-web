"use client";
import React from "react";
import Aboutcompone from "@/components/(static)/aboutcomp/aboutcompone";
import Introducing from "@/components/introducing";
import Trustedbyourpatner from "@/components/trustedbyourpatner";
import Animations from "@/components/animation";
import Readytostartforhome from "@/components/readytostartforhome";
import GotsQuestions from "@/components/(static)/howitworkscomponent/gotsquestions";
export default function AboutPage() {
  return (
    <>
      <Aboutcompone />
      <Introducing />

      <Trustedbyourpatner />
      <Animations />
      <GotsQuestions />

      <Readytostartforhome />
    </>
  );
}
