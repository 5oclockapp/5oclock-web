
// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import { ChevronLeftIcon, ChevronRightIcon, Sparkles } from "lucide-react";
// import { Input } from "./ui/input";
// import { textarea } from "framer-motion/client";
// import { Textarea } from "./ui/textarea";
// // import { Toast } from "./ui/toast";
// import { Button } from "./ui/button";

// //  Testimonial Data
// const testimonialsData = [
//   {
//     quote:
//       "5 O'Clock App has been a game-changer for our weeknight traffic. We've seen a 30% increase in customers during what used to be our slowest hours. The platform is incredibly easy to use.",
//     name: "Maria Rodriguez",
//     title: "Owner, The Golden Spoon",
//     image: "https://picsum.photos/id/1027/100/100",
//   },
//   {
//     quote:
//       "We were skeptical at first, but the results speak for themselves. We're reaching a whole new demographic of diners who have now become regulars. I can't recommend it enough.",
//     name: "Johnathan Chen",
//     title: "Manager, The Crafty Brew",
//     image: "https://picsum.photos/id/1005/100/100",
//   },
//   {
//     quote:
//       "The analytics dashboard is fantastic. It gives us clear insights into our performance and helps us tailor our deals effectively. It's an essential tool for any modern restaurant.",
//     name: "Samantha Miller",
//     title: "Marketing Director, The Seaside Grill",
//     image: "https://picsum.photos/id/1011/100/100",
//   },
// ];

// const Testimonials: React.FC = () => {
//   // --- Testimonial carousel state ---
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
//   }, []);

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextTestimonial();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [nextTestimonial]);

//   const { quote, name, title, image } = testimonialsData[currentIndex];

//   // --- Waitlist form state ---
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for joining the waitlist!");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       city: "",
//       message: "",
//     });
//   };

//   return (
//     <section id="waitlist" className="py-24 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* --- Testimonial Section --- */}
//         <div className="max-w-3xl mx-auto mb-20 text-center">
//           <div className="relative">


//             <div className="flex justify-center items-center gap-6 mt-8">
//               <button
//                 onClick={prevTestimonial}
//                 className="p-2 rounded-full bg-primary/10 hover:bg-primary/20"
//               >
//                 <ChevronLeftIcon className="w-5 h-5 text-primary" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="p-2 rounded-full bg-primary/10 hover:bg-primary/20"
//               >
//                 <ChevronRightIcon className="w-5 h-5 text-primary" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* --- Waitlist Form Section --- */}
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-12 space-y-2">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
//               <Sparkles className="h-4 w-4 text-primary" />

//             </div>
//             <h2 className="text-4xl md:text-5xl font-bold text-white ">
//               Join The <span className="bg-gradient-to-r from-[#1394f9] to-[#de9bfd]">Waitlist</span>
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Be among the first to experience the future of social dining. Get
//               special offers and exclusive perks.
//             </p>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6 glass-card p-8 rounded-2xl animate-scale-in"
//           >
//             <div className="space-y-4">
//               {/* Full Name */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="name"
//                   className="text-sm font-medium text-foreground/80"
//                 >
//                   Full Name *
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                 />
//               </div>

//               {/* Email */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="email"
//                   className="text-sm font-medium text-foreground/80"
//                 >
//                   Email Address *
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                 />
//               </div>

//               {/* Phone */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="phone"
//                   className="text-sm font-medium text-foreground/80"
//                 >
//                   Phone Number
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+1 (555) 000-0000"
//                 />
//               </div>

//               {/* City */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="city"
//                   className="text-sm font-medium text-foreground/80"
//                 >
//                   Your City (Optional)
//                 </label>
//                 <Input
//                   id="city"
//                   name="city"
//                   type="text"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="New York, Los Angeles, etc."
//                 />
//               </div>

//               {/* Message */}
//               <div className="space-y-2">
//                 <label
//                   htmlFor="message"
//                   className="text-sm font-medium text-foreground/80"
//                 >
//                   Message or Questions (Optional)
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us what you're most excited about..."
//                   rows={4}
//                 />
//               </div>
//             </div>

//             <Button type="submit" variant="hero" size="lg" className="w-full,  px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-[#1394f9] to-[#de9bfd] hover:from-white hover:to-white hover:text-black text-gray-800 border border-gray-300 transition-all duration-300 shadow-md ml-60">
//               Submit
//             </Button>

//             <p className="text-xs text-center text-muted-foreground text-white">
//               Email: info@5oclockapp.com
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;





