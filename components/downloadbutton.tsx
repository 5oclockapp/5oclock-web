"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Readytostartforhome from "./readytostartforhome";

export default function DownloadButton() {
  const router = useRouter();

  return (
    <div className="fixed top-6 right-8 z-50 cursor-pointer">
      <div
        onClick={() => router.push("/home/readytostarthome")}
        className="hover:scale-105 transition-transform duration-300"
      >
        <Readytostartforhome />
      </div>
    </div>
  );
}
