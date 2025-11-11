"use client";

import React from "react";
import VendorComponentone from "@/components/(static)/vendors/vendorcompone";
import VendorComponenttwo from "@/components/(static)/vendors/vendorscomptwo";
import Vendorscompthree from "@/components/(static)/vendors/vendorscompthree";
import WhatOurPartnersSay from "@/components/(static)/vendors/whtaourpatnersays";
import Readytopartner from "@/components/(static)/vendors/readytopartner";
export default function HowItWorksVendorsPage() {
  return (
    <>
      <VendorComponentone />
      <VendorComponenttwo />
      <Vendorscompthree />
      <WhatOurPartnersSay />

      <Readytopartner />
    </>
  );
}
