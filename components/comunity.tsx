// // import React from "react";

// // export default function Commninity() {
// //   return (
// //     <section className="bg-black py-20 px-6 md:px-10 flex flex-col items-center justify-center overflow-hidden text-white font-[Poppins]">
// //       {/* Heading Section */}
// //       <div className="text-center mb-12">
// //         <h1 className="font-bold text-[48px] leading-[100%] text-center">
// //           What Our
// //           <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
// //             Community
// //           </span>{" "}
// //           says
// //         </h1>

// //         <p className="font-normal text-[24px] leading-[100%] tracking-[0%] mt-4 max-w-3xl mx-auto">
// //           Join thousands of happy users who are earning while exploring.
// //         </p>
// //       </div>

// //       {/* Image Section */}
// //       <div className="flex flex-col md:flex-row items-center justify-center gap-8">
// //         <img
// //           src="/assets/Component 36.png"
// //           alt="one"
// //           className="w-full md:w-1/4 object-contain"
// //         />
// //         <img
// //           src="/assets/Component 37.png"
// //           alt="tow"
// //           className="w-full md:w-1/4 object-contain"
// //         />
// //         <img
// //           src="/assets/Component 38.png"
// //           alt="three"
// //           className="w-full md:w-1/4 object-contain"
// //         />
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React from "react";
// import Image from "next/image";

// export default function Community() {
//   const testimonials = [
//     { image: "/assets/Component 36.png", alt: "one" },
//     { image: "/assets/Component 37.png", alt: "two" },
//     { image: "/assets/Component 38.png", alt: "three" },
//   ];

//   return (
//     <section className="bg-black py-16 sm:py-24 font-[Poppins] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Heading Section */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
//           What Our{" "}
//           <span className="bg-gradient-to-r from-[#B175FF] to-[#4AAFFF] text-transparent bg-clip-text">
//             Community
//           </span>{" "}
//           Says
//         </h2>

//         <p className="font-normal text-lg sm:text-xl mt-[-16px] mb-12 max-w-3xl mx-auto">
//           Join thousands of happy users who are earning while exploring.
//         </p>

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center max-w-5xl">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-[1.05] transition duration-300"
//             >
//               <Image
//                 src={item.image}
//                 alt={item.alt}
//                 width={360}
//                 height={360}
//                 className="object-contain w-[300px] sm:w-[340px] md:w-[360px] h-auto rounded-2xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
