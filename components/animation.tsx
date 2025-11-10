import React from "react";
// import "./animations.css"; // Make sure to include this CSS file

export default function Animations() {
  return (
    <section className="bg-black py-20 px-6 md:px-10 flex items-center justify-center overflow-hidden">
      <div className="running-track w-full relative overflow-hidden">
        <div className="runner-track">
          <img src="/assets/Group 76.png" alt="Runner" className="runner" />
          <img src="/assets/Group 76.png" alt="Runner" className="runner" />
        </div>
      </div>
    </section>
  );
}
