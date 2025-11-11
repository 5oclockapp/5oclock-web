import React from "react";
import Hero from "@/components/herso";
import Introducing from "@/components/introducing";
import Earnmoney from "@/components/earnmoney";
import Onasingleplatform from "@/components/(static)/howitworkscomponent/onasingleplatform-comp-tow";
import Trustedbyourpatner from "@/components/trustedbyourpatner";
import Animations from "@/components/animation";
import Latestsight from "@/components/latestInsight";
import Readytostart from "@/components/readytostart";
import Readytostartforhome from "@/components/readytostartforhome";
export default function Homepage() {
  return (
    <>
      <Hero />
      <Introducing />
      <Earnmoney />

      <Onasingleplatform />

      <Trustedbyourpatner />

      <Animations />

      <Latestsight />

      <Readytostart />

      <Readytostartforhome />
    </>
  );
}
