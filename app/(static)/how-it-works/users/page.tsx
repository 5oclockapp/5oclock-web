"use client";

import React from "react";
import HowItWorksComOne from "@/components/(static)/howitworkscomponent/howitworkcom-one";
import Onasingleplatform from "@/components/(static)/howitworkscomponent/onasingleplatform-comp-tow";
import ComThree from "@/components/(static)/howitworkscomponent/comp-three";
import Compfour from "@/components/(static)/howitworkscomponent/compfour";
import Trustedbyourpatner from "@/components/trustedbyourpatner";
import Animations from "@/components/animation";
import GotsQuestions from "@/components/(static)/howitworkscomponent/gotsquestions";
import CompFive from "@/components/(static)/howitworkscomponent/comp-five";
export default function HowItWorksUsersPage() {
  return (
    <>
      <HowItWorksComOne />
      <Onasingleplatform />
      <ComThree />
      <Compfour />
      <Trustedbyourpatner />
      <Animations />
      <GotsQuestions />

      <CompFive />
    </>
  );
}
