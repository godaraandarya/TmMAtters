// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   const particleVariants = {
//     animate: {
//       y: [0, -10, 0],
//       opacity: [0.3, 0.8, 0.3],
//       transition: {
//         repeat: Infinity,
//         duration: 3,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 text-black overflow-hidden">
//       {/* Background Particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           variants={particleVariants}
//           animate="animate"
//           className="absolute w-2 h-2 bg-yellow-400 rounded-full top-1/4 left-1/5"
//         />
//         <motion.div
//           variants={particleVariants}
//           animate="animate"
//           className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/3 right-1/4"
//           style={{ animationDelay: '0.5s' }}
//         />
//         <motion.div
//           variants={particleVariants}
//           animate="animate"
//           className="absolute w-2 h-2 bg-yellow-400 rounded-full bottom-1/4 left-1/3"
//           style={{ animationDelay: '1s' }}
//         />
//       </div>

//       {/* Hero Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//         {/* Traffic Graphic */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 0.2 }}
//           transition={{ duration: 1.5, delay: 0.5 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <svg className="w-3/4 h-3/4 text-yellow-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 200 200">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M50 50h100m0 0v100m-100-100v100m100-100H50" />
//             <circle cx="100" cy="100" r="20" />
//           </svg>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
//         >
//           <span className="block">Transforming</span>
//           <span className="text-yellow-400">Traffic Flow</span>
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light"
//         >
//           Innovative solutions for smarter, safer, and sustainable urban mobility.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.button 
//           whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(250, 204, 21, 0.5)' }}
//           whileTap={{ scale: 0.95 }}
//           animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2 } }}
//           className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 shadow-md"
//         >
//           Discover Solutions
//         </motion.button>

//         {/* Scroll Indicator */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="mt-12"
//         >
//           <svg className="w-10 h-10 mx-auto animate-bounce text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// import React, { useState } from "react";

// const Hero = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="bg-black bg-[url('/C:\Users\harsh\Desktop\TMmatters\src\assets\beautyful-traffic-seoul-night-cityscape-south-korea-with-motion-blur.jpg')] bg-cover bg-center">
//       <header className="py-4 sm:py-6">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             <div className="shrink-0">
//               <a href="#" title="" className="flex">
//                 <img
//                   className="w-auto h-9"
//                   src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
//                   alt="Logo"
//                 />
//               </a>
//             </div>

//             <div className="flex md:hidden">
//               <button
//                 type="button"
//                 className="text-white"
//                 onClick={() => setExpanded(!expanded)}
//                 aria-expanded={expanded}
//               >
//                 {!expanded ? (
//                   <svg
//                     className="w-7 h-7"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="w-7 h-7"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
//               <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Solutions</a>
//               <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Sensors</a>
//               <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Analytics</a>
//               <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Support</a>
//             </nav>
//           </div>

//           {expanded && (
//             <nav>
//               <div className="flex flex-col pt-8 pb-4 space-y-6">
//                 <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Solutions</a>
//                 <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Sensors</a>
//                 <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Analytics</a>
//                 <a href="#" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">Support</a>
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>

//       <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//           <div className="relative">
//             <div className="lg:w-2/3">
//               <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
//                 Smart Traffic, Safer Cities
//               </p>
//               <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
//                   Real-Time Traffic
//                 </span>{" "}
//                 Management System
//               </h1>
//               <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
//                 Optimize traffic flow, reduce congestion, and enhance public safety with our smart city traffic solutions.
//               </p>

//               <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
//                 <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
//                 <a
//                   href="#"
//                   className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
//                 >
//                   Explore Our Solutions
//                 </a>
//               </div>

//               <div>
//                 <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
//                   <svg
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     strokeWidth="1.5"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17"
//                       stroke="url(#a)"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <defs>
//                       <linearGradient
//                         id="a"
//                         x1="3"
//                         y1="7"
//                         x2="22.2956"
//                         y2="12.0274"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop offset="0%" stopColor="#06b6d4" />
//                         <stop offset="100%" stopColor="#8b5cf6" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                   <span className="ml-2 text-base font-normal text-white">
//                     1.2M+ vehicles tracked this month
//                   </span>
//                 </div>
//               </div>
//             </div>

            
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import bgImage from '../assets/beautyful.jpg'; // Correct relative path

// const HeroSection = () => {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           opacity: 1,
//           zIndex: 0
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black/60 z-0 backdrop-blur-sm"></div>

//       {/* Hero Content */}
//       <section className="relative py-12 sm:pb-16 lg:pb-20 xl:pb-24 z-10">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//           <motion.div
//             className="lg:w-2/3 bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <motion.p
//               className="text-sm font-semibold tracking-widest text-yellow-400 uppercase"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               Smart Traffic, Safer Cities
//             </motion.p>

//             <motion.h1
//               className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//             >
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
//                 Real-Time Traffic
//               </span>{' '}
//               Management
//             </motion.h1>

//             <motion.p
//               className="max-w-lg mt-4 text-lg sm:text-xl text-gray-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               Optimize traffic flow, reduce congestion, and enhance safety with our cutting-edge smart city solutions.
//             </motion.p>

//             <motion.div
//               className="mt-8 sm:mt-12"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1 }}
//             >
//               <a
//                 href="#"
//                 className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
//               >
//                 Explore Our Solutions
//                 <svg
//                   className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                 </svg>
//               </a>
//             </motion.div>

//             <motion.div
//               className="inline-flex items-center pt-6 mt-8 border-t border-gray-700"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.2 }}
//             >
//               <svg
//                 className="w-6 h-6"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 strokeWidth="1.5"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17"
//                   stroke="url(#statsGradient)"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <defs>
//                   <linearGradient id="statsGradient" x1="3" y1="7" x2="22.2956" y2="12.0274">
//                     <stop offset="0%" stopColor="#FBBF24" />
//                     <stop offset="100%" stopColor="#F97316" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <span className="ml-2 text-base font-medium text-white">
//                 1.2M+ vehicles tracked this month
//               </span>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;





import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import bgImage from '../assets/beautyful.jpg';

const HeroSection = () => {
  // Call-to-action button feedback
  const [ctaActive, setCtaActive] = useState(false);

  // Scroll-down arrow animation
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: [0, 10, 0],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <header className="relative w-full min-h-screen pt-6 bg-black text-white overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <section className="relative py-12 sm:pb-16 lg:pb-20 xl:pb-24 z-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="lg:w-2/3 bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <motion.p
              className="text-sm font-semibold tracking-widest text-yellow-400 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Smart Traffic, Safer Cities
            </motion.p>

            <motion.h1
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-lg">
                Real-Time Traffic
              </span>{' '}
              Management
            </motion.h1>

            <motion.p
              className="max-w-lg mt-4 text-lg sm:text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Optimize flow, reduce congestion, and enhance safety with our cutting-edge smart city solutions.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                onClick={() => {
                  setCtaActive(true);
                  setTimeout(() => setCtaActive(false), 800);
                }}
                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                aria-label="Explore Our Solutions"
                whileHover={{ 
                  boxShadow: "0 0 15px 5px rgba(251, 191, 36, 0.4)",
                }}
                animate={{
                  background: ctaActive 
                    ? "linear-gradient(to right, #F59E0B, #EA580C)" 
                    : "linear-gradient(to right, #FBBF24, #F97316)"
                }}
              >
                {ctaActive ? (
                  <svg className="animate-spin mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#FBBF24" strokeWidth="4" />
                    <path className="opacity-75" fill="#F97316" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  <>
                    Explore Our Solutions
                    <motion.svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      animate={{ x: ctaActive ? 5 : 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center"
        animate={controls}
        aria-hidden="true"
      >
        <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
        <span className="text-xs text-yellow-400 mt-1">Scroll Down</span>
      </motion.div>
    </header>
  );
};

export default HeroSection;


// import React, { useState, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const HeroSection = () => {
//   const [ctaActive, setCtaActive] = useState(false);
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       y: [0, 10, 0],
//       transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
//     });
//   }, [controls]);

//   return (
//     <header className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center">
//       {/* Animated Yellow Accent Bar */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-2 bg-yellow-400"
//         initial={{ x: '-100%' }}
//         animate={{ x: '100%' }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "loop",
//           duration: 2,
//           ease: "linear"
//         }}
//         aria-hidden="true"
//       />

//       {/* Blurred Yellow Circle Accent */}
//       <div
//         className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400 rounded-full opacity-20 blur-3xl pointer-events-none"
//         aria-hidden="true"
//       />

//       {/* Hero Content */}
//       <section className="relative z-10 w-full">
//         <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-4xl text-center">
//           <motion.p
//             className="text-lg font-semibold tracking-widest text-yellow-400 uppercase mb-4"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//           >
//             Smart Traffic, Safer Cities
//           </motion.p>

//           <motion.h1
//             className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <span className="text-yellow-400 drop-shadow-lg">
//               Real-Time Traffic
//             </span>{" "}
//             <span className="text-white">Management</span>
//           </motion.h1>

//           <motion.p
//             className="max-w-xl mx-auto text-lg sm:text-xl text-white/80 mb-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.7 }}
//           >
//             Optimize flow, reduce congestion, and enhance safety with our cutting-edge smart city solutions.
//           </motion.p>

//           {/* Call to Action Button */}
//           <motion.div
//             className="flex justify-center"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1, duration: 0.5 }}
//           >
//             <motion.button
//               onClick={() => {
//                 setCtaActive(true);
//                 setTimeout(() => setCtaActive(false), 800);
//               }}
//               className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-yellow-400 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition-all duration-300"
//               aria-label="Explore Our Solutions"
//               whileHover={{
//                 scale: 1.08,
//                 boxShadow: "0 0 40px 10px #FFD600",
//                 backgroundColor: "#fff200"
//               }}
//               whileTap={{ scale: 0.96 }}
//               animate={{
//                 background: ctaActive ? "#fff200" : "#FFD600"
//               }}
//             >
//               {ctaActive ? (
//                 <svg className="animate-spin mr-2 w-6 h-6" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#FFD600" strokeWidth="4" />
//                   <path className="opacity-75" fill="#FFD600" d="M4 12a8 8 0 018-8v8z" />
//                 </svg>
//               ) : (
//                 <>
//                   Explore Our Solutions
//                   <motion.svg
//                     className="ml-3 w-6 h-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     initial={{ x: 0 }}
//                     animate={{ x: ctaActive ? 8 : 0 }}
//                     whileHover={{ x: 8 }}
//                     transition={{ type: "spring", stiffness: 400 }}
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                   </motion.svg>
//                 </>
//               )}
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Scroll Down Indicator */}
//       <motion.div
//         className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center"
//         animate={controls}
//         aria-hidden="true"
//       >
//         <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//         </svg>
//         <span className="text-xs text-yellow-400 mt-1">Scroll Down</span>
//       </motion.div>
//     </header>
//   );
// };

// export default HeroSection;
