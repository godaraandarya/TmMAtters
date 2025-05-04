// import React from 'react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: "Traffic Management",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="7" y="2" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
//         <circle cx="12" cy="7" r="2" fill="currentColor" />
//         <circle cx="12" cy="12" r="2" fill="currentColor" />
//         <circle cx="12" cy="17" r="2" fill="currentColor" />
//       </svg>
//     ),
//     description:
//       "Comprehensive solutions for safe and efficient traffic flow, including planning, control, and smart systems integration.",
//   },
//   {
//     title: "Training",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="3" y="6" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
//         <path d="M12 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="12" cy="18" r="1" fill="currentColor" />
//       </svg>
//     ),
//     description:
//       "Certified training programs for traffic controllers, engineers, and safety personnel, delivered by industry experts.",
//   },
//   {
//     title: "Events & Consultancy",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
//         <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="17" cy="17" r="1.5" fill="currentColor" />
//       </svg>
//     ),
//     description:
//       "Expert consultancy for traffic events, road closures, and public safety, plus event management for roadworks and marathons.",
//   },
//   {
//     title: "Engineering",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
//         <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     description:
//       "Innovative engineering solutions for traffic infrastructure, including road design, signal systems, and safety upgrades.",
//   },
//   {
//     title: "Construction",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
//         <path d="M7 13V7a5 5 0 0110 0v6" stroke="currentColor" strokeWidth="2" />
//       </svg>
//     ),
//     description:
//       "End-to-end construction services for roads, highways, and traffic facilities, delivered with quality and efficiency.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.15 * i, duration: 0.7, type: "spring" },
//   }),
// };

// const ServicesSection = () => (
//   <section className="relative w-full py-20 bg-black text-white overflow-hidden" id="services">
//     {/* Decorative blurred yellow circle */}
//     <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl pointer-events-none" />
//     <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-2xl pointer-events-none" />

//     <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//       <motion.h2
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-4"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//       >
//         <span className="text-yellow-400">Our Services</span>
//       </motion.h2>
//       <motion.p
//         className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2, duration: 0.7 }}
//       >
//         We deliver comprehensive solutions for every aspect of modern traffic management, from planning and training to engineering, consultancy, and construction.
//       </motion.p>
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, i) => (
//           <motion.div
//             key={service.title}
//             className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-yellow-400/20 transition-shadow duration-300 group"
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={cardVariants}
//             whileHover={{
//               scale: 1.04,
//               boxShadow: "0 8px 32px 0 #FFD60033",
//               borderColor: "#FFD600",
//             }}
//           >
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-white transition-colors duration-200">
//               {service.title}
//             </h3>
//             <p className="text-white/80 text-base">{service.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesSection;


// import React from 'react';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     title: "Traffic Management",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="7" y="2" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
//         <circle cx="12" cy="7" r="2" fill="currentColor" />
//         <circle cx="12" cy="12" r="2" fill="currentColor" />
//         <circle cx="12" cy="17" r="2" fill="currentColor" />
//       </svg>
//     ),
//     description:
//       "Comprehensive solutions for safe and efficient traffic flow, including planning, control, and smart systems integration.",
//   },
//   {
//     title: "Training",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="3" y="6" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
//         <path d="M12 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="12" cy="18" r="1" fill="currentColor" />
//       </svg>
//     ),
//     description:
//       "Certified training programs for traffic controllers, engineers, and safety personnel, delivered by industry experts.",
//   },
//   {
//     title: "Events & Consultancy",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
//         <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="17" cy="17" r="1.5" fill="currentColor" />
//       </svg>
//     ),
//     description:
//       "Expert consultancy for traffic events, road closures, and public safety, plus event management for roadworks and marathons.",
//   },
//   {
//     title: "Engineering",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
//         <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     description:
//       "Innovative engineering solutions for traffic infrastructure, including road design, signal systems, and safety upgrades.",
//   },
//   {
//     title: "Construction",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
//         <path d="M7 13V7a5 5 0 0110 0v6" stroke="currentColor" strokeWidth="2" />
//       </svg>
//     ),
//     description:
//       "End-to-end construction services for roads, highways, and traffic facilities, delivered with quality and efficiency.",
//   },
//   {
//     title: "Smart Technology",
//     icon: (
//       <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
//         <path d="M9 9h6v6H9z" fill="currentColor" />
//         <circle cx="12" cy="12" r="1.5" fill="black" />
//       </svg>
//     ),
//     description:
//       "Integration of IoT, AI, and smart sensors for real-time monitoring, analytics, and adaptive traffic management.",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.13 * i, duration: 0.6, type: "spring" },
//   }),
// };

// const ServicesSection = () => (
//   <section className="relative w-full py-20 bg-black text-white overflow-hidden" id="services">
//     {/* Decorative blurred yellow and white circles */}
//     <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl pointer-events-none" />
//     <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-2xl pointer-events-none" />
//     <div className="absolute top-1/4 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none" />

//     {/* Animated chevron/road pattern */}
//     <svg
//       className="absolute bottom-0 left-0 w-full h-16 z-0"
//       viewBox="0 0 1440 80"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       style={{ pointerEvents: "none" }}
//     >
//       <rect width="1440" height="80" fill="black" />
//       <g>
//         {[...Array(18)].map((_, i) => (
//           <rect
//             key={i}
//             x={i * 80 + 20}
//             y="35"
//             width="40"
//             height="10"
//             rx="5"
//             fill="#FFD600"
//             opacity="0.7"
//           />
//         ))}
//       </g>
//     </svg>

//     <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//       {/* Animated underline for section title */}
//       <motion.h2
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-2 relative inline-block"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//       >
//         <span className="relative text-yellow-400">
//           Our Services
//           <motion.span
//             className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-1 w-24 bg-yellow-400 rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
//             style={{ transformOrigin: "center" }}
//           />
//         </span>
//       </motion.h2>
//       <motion.p
//         className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto"
//         initial={{ opacity: 0, y: -10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.2, duration: 0.7 }}
//       >
//         We deliver comprehensive solutions for every aspect of modern traffic management, from planning and training to engineering, consultancy, and construction.
//       </motion.p>
//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {services.map((service, i) => (
//           <motion.div
//             key={service.title}
//             className="relative bg-white/5 border border-dashed border-yellow-400/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-yellow-400/30 transition-shadow duration-300 group overflow-hidden"
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={cardVariants}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 8px 32px 0 #FFD60066",
//               borderColor: "#FFD600",
//             }}
//           >
//             {/* Traffic cone accent on hover */}
//             <motion.div
//               className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               initial={{ y: -10, opacity: 0 }}
//               whileHover={{ y: 0, opacity: 1 }}
//             >
//               <svg className="w-8 h-8" viewBox="0 0 24 24">
//                 <polygon points="12,2 19,20 5,20" fill="#FFD600" />
//                 <rect x="8" y="16" width="8" height="2" fill="white" />
//                 <rect x="9" y="12" width="6" height="2" fill="white" />
//               </svg>
//             </motion.div>
//             <div className="mb-4">{service.icon}</div>
//             <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-white transition-colors duration-200">
//               {service.title}
//             </h3>
//             <p className="text-white/80 text-base">{service.description}</p>
//             {/* Glowing animated border effect */}
//             <motion.div
//               className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-70"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.7 }}
//               transition={{
//                 duration: 0.5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut"
//               }}
//               style={{
//                 boxShadow: "0 0 24px 8px #FFD60077"
//               }}
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default ServicesSection;

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Traffic Management",
    icon: (
      <motion.svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <rect x="7" y="2" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="7" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="17" r="2" fill="currentColor" />
      </motion.svg>
    ),
    description:
      "Comprehensive solutions for safe and efficient traffic flow, including planning, control, and smart systems integration.",
  },
  {
    title: "Training",
    icon: (
      <motion.svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <rect x="3" y="6" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </motion.svg>
    ),
    description:
      "Certified training programs for traffic controllers, engineers, and safety personnel, delivered by industry experts.",
  },
  {
    title: "Events & Consultancy",
    icon: (
      <motion.svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="17" r="1.5" fill="currentColor" />
      </motion.svg>
    ),
    description:
      "Expert consultancy for traffic events, road closures, and public safety, plus event management for roadworks and marathons.",
  },
  {
    title: "Engineering",
    icon: (
      <motion.svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      >
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>
    ),
    description:
      "Innovative engineering solutions for traffic infrastructure, including road design, signal systems, and safety upgrades.",
  },
  {
    title: "Construction",
    icon: (
      <motion.svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ y: 0 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2.8 }}
      >
        <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 13V7a5 5 0 0110 0v6" stroke="currentColor" strokeWidth="2" />
      </motion.svg>
    ),
    description:
      "End-to-end construction services for roads, highways, and traffic facilities, delivered with quality and efficiency.",
  },
  {
    title: "Smart Technology",
    icon: (
      <motion.svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 1.7 }}
      >
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h6v6H9z" fill="currentColor" />
        <circle cx="12" cy="12" r="1.5" fill="black" />
      </motion.svg>
    ),
    description:
      "Integration of IoT, AI, and smart sensors for real-time monitoring, analytics, and adaptive traffic management.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.13 * i, duration: 0.6, type: "spring" },
  }),
};

const ServicesSection = () => (
  <section className="relative w-full py-24 bg-black text-white overflow-hidden" id="services">
    {/* Parallax blurred circles */}
    <motion.div
      className="absolute -top-32 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-yellow-400 opacity-15 rounded-full blur-3xl pointer-events-none"
      initial={{ scale: 1, y: 0 }}
      whileInView={{ scale: 1.08, y: 20 }}
      transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-2xl pointer-events-none"
      initial={{ scale: 1 }}
      whileInView={{ scale: 1.1 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    />

    {/* Animated SVG road background */}
    <svg
      className="absolute bottom-0 left-0 w-full h-28 z-0"
      viewBox="0 0 1440 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none" }}
    >
      <rect width="1440" height="112" fill="black" />
      {/* Lane markings */}
      <g>
        {[...Array(18)].map((_, i) => (
          <rect
            key={i}
            x={i * 80 + 20}
            y="50"
            width="40"
            height="8"
            rx="4"
            fill="#FFD600"
            opacity="0.8"
          />
        ))}
      </g>
      {/* Car icons */}
      <g>
        <rect x="200" y="80" width="28" height="16" rx="6" fill="#FFD600" opacity="0.7" />
        <rect x="900" y="70" width="28" height="16" rx="6" fill="#FFD600" opacity="0.7" />
      </g>
    </svg>

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section title with animated chevron underline */}
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold text-center mb-2 relative inline-block"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="relative text-yellow-400">
          Our Services
          <motion.span
            className="absolute left-1/2 -bottom-4 -translate-x-1/2 flex items-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            style={{ transformOrigin: "center" }}
          >
            <svg className="w-16 h-6" viewBox="0 0 64 24" fill="none">
              <path d="M0 12h56" stroke="#FFD600" strokeWidth="4" strokeLinecap="round" />
              <polygon points="56,4 64,12 56,20" fill="#FFD600" />
            </svg>
          </motion.span>
        </span>
      </motion.h2>
      <motion.p
        className="text-lg text-white/80 text-center mb-14 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        We deliver comprehensive solutions for every aspect of modern traffic management, from planning and training to engineering, consultancy, construction, and smart technology.
      </motion.p>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="relative bg-white/10 backdrop-blur-md border border-yellow-400/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl transition-shadow duration-300 group overflow-hidden"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{
              scale: 1.055,
              boxShadow: "0 8px 32px 0 #FFD60088, 0 2px 8px #0003",
              borderColor: "#FFD600",
            }}
          >
            {/* Animated traffic cone accent on hover */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: -10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
            >
              <svg className="w-9 h-9" viewBox="0 0 24 24">
                <polygon points="12,2 19,20 5,20" fill="#FFD600" />
                <rect x="8" y="16" width="8" height="2" fill="white" />
                <rect x="9" y="12" width="6" height="2" fill="white" />
              </svg>
            </motion.div>
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-white transition-colors duration-200">
              {service.title}
            </h3>
            <p className="text-white/80 text-base">{service.description}</p>
            {/* Animated glowing border */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              style={{
                boxShadow: "0 0 32px 8px #FFD60077"
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
