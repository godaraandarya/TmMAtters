// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Project data
// const projects = [
//   {
//     title: "Selwyn Marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons. Our team managed road closures, detours, and safety, allowing the community and runners to enjoy a seamless event.",
//     image: "/images/selwyn-marathon.jpg", // Replace with your image path
//     link: "/projects/selwyn-marathon"
//   },
//   {
//     title: "Rugby Event 2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description: "Precision and passion combined: traffic management for the 2022 Rugby Event in Christchurch. We ensured seamless access and safety for fans and participants, minimizing disruptions and maximizing event success.",
//     image: "/images/rugby-event.jpg", // Replace with your image path
//     link: "/projects/rugby-event-2022"
//   },
//   {
//     title: "Cherry Blossom Festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description: "Enchanting journeys for all: our traffic management expertise made the Cherry Blossom Festival safe and accessible, letting attendees focus on the festivities while we handled the roads.",
//     image: "/images/cherry-blossom.jpg", // Replace with your image path
//     link: "/projects/cherry-blossom-festival"
//   }
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.15 * i, duration: 0.7, type: "spring" },
//   }),
// };

// const ProjectsSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full py-24 bg-black text-white overflow-hidden" id="projects">
//       {/* Decorative blurred yellow circle */}
//       <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-yellow-400 opacity-15 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-2xl pointer-events-none" />

//       {/* Animated lane markings at the bottom */}
//       <svg
//         className="absolute bottom-0 left-0 w-full h-20 z-0"
//         viewBox="0 0 1440 80"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ pointerEvents: "none" }}
//       >
//         <rect width="1440" height="80" fill="black" />
//         <g>
//           {[...Array(18)].map((_, i) => (
//             <rect
//               key={i}
//               x={i * 80 + 20}
//               y="35"
//               width="40"
//               height="10"
//               rx="5"
//               fill="#FFD600"
//               opacity="0.7"
//             />
//           ))}
//         </g>
//       </svg>

//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-3xl sm:text-4xl font-extrabold text-center mb-2 relative inline-block"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="relative text-yellow-400">
//             Our Projects
//             <motion.span
//               className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-1 w-24 bg-yellow-400 rounded-full"
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
//               style={{ transformOrigin: "center" }}
//             />
//           </span>
//         </motion.h2>
//         <motion.p
//           className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//         >
//           Discover how our traffic management expertise brings safety, efficiency, and seamless experiences to New Zealand’s most celebrated events.
//         </motion.p>
//         <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               className="relative group bg-white/10 border border-yellow-400/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/30 transition-shadow duration-300 cursor-pointer flex flex-col"
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.045,
//                 boxShadow: "0 8px 32px 0 #FFD60088, 0 2px 8px #0003",
//                 borderColor: "#FFD600",
//               }}
//               onClick={() => navigate(project.link)}
//               tabIndex={0}
//               role="button"
//               aria-label={`View details for ${project.title}`}
//             >
//               {/* Project image (optional, can use SVG or placeholder) */}
//               <div className="h-44 w-full bg-black flex items-center justify-center overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Traffic cone accent */}
//                 <motion.div
//                   className="absolute top-4 left-4"
//                   initial={{ y: -10, opacity: 0 }}
//                   whileHover={{ y: 0, opacity: 1 }}
//                 >
//                   <svg className="w-8 h-8" viewBox="0 0 24 24">
//                     <polygon points="12,2 19,20 5,20" fill="#FFD600" />
//                     <rect x="8" y="16" width="8" height="2" fill="white" />
//                     <rect x="9" y="12" width="6" height="2" fill="white" />
//                   </svg>
//                 </motion.div>
//               </div>
//               <div className="flex-1 flex flex-col p-6">
//                 <h3 className="text-xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                 <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                 <p className="text-white/90 text-base mb-4 flex-1">{project.description}</p>
//                 <span className="inline-block mt-auto text-yellow-400 font-semibold group-hover:underline">
//                   View Project &rarr;
//                 </span>
//               </div>
//               {/* Animated glowing border */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-70"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.7 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   ease: "easeInOut"
//                 }}
//                 style={{
//                   boxShadow: "0 0 32px 8px #FFD60077"
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const projects = [
//   {
//     title: "Selwyn Marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons. Our team managed road closures, detours, and safety, allowing the community and runners to enjoy a seamless event.",
//     image: "/images/selwyn-marathon.jpg",
//   },
//   {
//     title: "Rugby Event 2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description: "Precision and passion combined: traffic management for the 2022 Rugby Event in Christchurch. We ensured seamless access and safety for fans and participants, minimizing disruptions and maximizing event success.",
//     image: "/images/rugby-event.jpg",
//   },
//   {
//     title: "Cherry Blossom Festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description: "Enchanting journeys for all: our traffic management expertise made the Cherry Blossom Festival safe and accessible, letting attendees focus on the festivities while we handled the roads.",
//     image: "/images/cherry-blossom.jpg",
//   }
// ];

// const ProjectsSection = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="relative w-full py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden" id="projects">
//       {/* Section Heading */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
//         <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight">
//           <span className="relative text-yellow-400">
//             Featured Projects
//             <span className="block h-2 w-20 bg-yellow-400 rounded-full mx-auto mt-2" />
//           </span>
//         </h2>
//         <p className="text-lg text-white/80 text-center max-w-2xl mx-auto">
//           See how we keep New Zealand's major events moving safely and efficiently.
//         </p>
//       </div>

//       {/* Timeline/Route Line */}
//       <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 w-3/4 h-2 bg-yellow-400/30 rounded-full z-0" style={{marginTop: '-1.5rem'}} />

//       {/* Projects Carousel */}
//       <div className="relative z-10">
//         <div className="flex gap-10 overflow-x-auto px-4 py-4 md:justify-center scrollbar-thin scrollbar-thumb-yellow-400/40">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               className="group relative min-w-[320px] max-w-xs bg-black/80 border border-yellow-400/30 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-yellow-400/30 transition-shadow duration-300"
//               whileHover={{ scale: 1.04 }}
//               onClick={() => setSelected(project)}
//             >
//               <div className="relative h-56 w-full overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
//                 />
//                 {/* Yellow overlay on hover */}
//                 <motion.div
//                   className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 />
//                 {/* Traffic flag icon */}
//                 <motion.div
//                   className="absolute top-3 left-3"
//                   initial={{ y: -10, opacity: 0 }}
//                   whileHover={{ y: 0, opacity: 1 }}
//                 >
//                   <svg className="w-8 h-8" viewBox="0 0 24 24">
//                     <rect x="5" y="4" width="2" height="16" fill="#FFD600" />
//                     <rect x="7" y="6" width="9" height="6" fill="#FFD600" />
//                   </svg>
//                 </motion.div>
//               </div>
//               <div className="p-6 flex flex-col h-44">
//                 <h3 className="text-2xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                 <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                 <p className="text-white/80 text-base mb-4 line-clamp-3">{project.description}</p>
//                 <motion.button
//                   className="mt-auto px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300 transition"
//                   whileHover={{ scale: 1.07 }}
//                   tabIndex={-1}
//                 >
//                   View Details
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Project Details */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               className="bg-black rounded-2xl max-w-lg w-full p-8 relative text-white shadow-2xl border-2 border-yellow-400"
//               initial={{ scale: 0.9, y: 40 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 40 }}
//               onClick={e => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-4 right-4 text-yellow-400 hover:text-white text-2xl font-bold"
//                 onClick={() => setSelected(null)}
//                 aria-label="Close"
//               >
//                 &times;
//               </button>
//               <img
//                 src={selected.image}
//                 alt={selected.title}
//                 className="w-full h-56 object-cover rounded-xl mb-4"
//               />
//               <h3 className="text-2xl font-bold text-yellow-400 mb-1">{selected.title}</h3>
//               <div className="text-sm text-white/60 mb-2">{selected.subtitle}</div>
//               <p className="text-white/90 text-base mb-2">{selected.description}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsSection;




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const projects = [
//   {
//     title: "Selwyn Marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description:
//       "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons. Our team managed road closures, detours, and safety, allowing the community and runners to enjoy a seamless event.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Rugby Event 2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description:
//       "Precision and passion combined: traffic management for the 2022 Rugby Event in Christchurch. We ensured seamless access and safety for fans and participants, minimizing disruptions and maximizing event success.",
//     image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Cherry Blossom Festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description:
//       "Enchanting journeys for all: our traffic management expertise made the Cherry Blossom Festival safe and accessible, letting attendees focus on the festivities while we handled the roads.",
//     image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
//   },
// ];

// const ProjectsSection = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section className="relative w-full py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden" id="projects">
//       {/* Section Heading */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
//         <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight">
//           <span className="relative text-yellow-400">
//             Featured Projects
//             <span className="block h-2 w-20 bg-yellow-400 rounded-full mx-auto mt-2" />
//           </span>
//         </h2>
//         <p className="text-lg text-white/80 text-center max-w-2xl mx-auto">
//           See how we keep New Zealand's major events moving safely and efficiently.
//         </p>
//       </div>

//       {/* Projects Carousel */}
//       <div className="relative z-10">
//         <div className="flex gap-10 overflow-x-auto px-4 py-4 md:justify-center scrollbar-thin scrollbar-thumb-yellow-400/40">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               className="group relative min-w-[320px] max-w-xs bg-black/80 border border-yellow-400/30 rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-yellow-400/30 transition-shadow duration-300"
//               whileHover={{ scale: 1.04 }}
//               onClick={() => setSelected(project)}
//             >
//               <div className="relative h-56 w-full overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
//                 />
//                 {/* Yellow overlay on hover */}
//                 <motion.div
//                   className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 />
//                 {/* Traffic flag icon */}
//                 <motion.div
//                   className="absolute top-3 left-3"
//                   initial={{ y: -10, opacity: 0 }}
//                   whileHover={{ y: 0, opacity: 1 }}
//                 >
//                   <svg className="w-8 h-8" viewBox="0 0 24 24">
//                     <rect x="5" y="4" width="2" height="16" fill="#FFD600" />
//                     <rect x="7" y="6" width="9" height="6" fill="#FFD600" />
//                   </svg>
//                 </motion.div>
//               </div>
//               <div className="p-6 flex flex-col h-44">
//                 <h3 className="text-2xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                 <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                 <p className="text-white/80 text-base mb-4 line-clamp-3">{project.description}</p>
//                 <motion.button
//                   className="mt-auto px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full shadow hover:bg-yellow-300 transition"
//                   whileHover={{ scale: 1.07 }}
//                   tabIndex={-1}
//                 >
//                   View Details
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Project Details */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               className="bg-black rounded-2xl max-w-lg w-full p-8 relative text-white shadow-2xl border-2 border-yellow-400"
//               initial={{ scale: 0.9, y: 40 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 40 }}
//               onClick={e => e.stopPropagation()}
//             >
//               <button
//                 className="absolute top-4 right-4 text-yellow-400 hover:text-white text-2xl font-bold"
//                 onClick={() => setSelected(null)}
//                 aria-label="Close"
//               >
//                 &times;
//               </button>
//               <img
//                 src={selected.image}
//                 alt={selected.title}
//                 className="w-full h-56 object-cover rounded-xl mb-4"
//               />
//               <h3 className="text-2xl font-bold text-yellow-400 mb-1">{selected.title}</h3>
//               <div className="text-sm text-white/60 mb-2">{selected.subtitle}</div>
//               <p className="text-white/90 text-base mb-2">{selected.description}</p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsSection;






// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Project data
// const projects = [
//   {
//     title: "Selwyn Marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons. Our team managed road closures, detours, and safety, allowing the community and runners to enjoy a seamless event.",
//     image: "/images/selwyn-marathon.jpg", // Replace with your image path
//     link: "/projects/selwyn-marathon"
//   },
//   {
//     title: "Rugby Event 2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description: "Precision and passion combined: traffic management for the 2022 Rugby Event in Christchurch. We ensured seamless access and safety for fans and participants, minimizing disruptions and maximizing event success.",
//     image: "/images/rugby-event.jpg", // Replace with your image path
//     link: "/projects/rugby-event-2022"
//   },
//   {
//     title: "Cherry Blossom Festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description: "Enchanting journeys for all: our traffic management expertise made the Cherry Blossom Festival safe and accessible, letting attendees focus on the festivities while we handled the roads.",
//     image: "/images/cherry-blossom.jpg", // Replace with your image path
//     link: "/projects/cherry-blossom-festival"
//   }
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: 0.15 * i, duration: 0.7, type: "spring" },
//   }),
// };

// const ProjectsSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="relative w-full py-24 bg-black text-white overflow-hidden" id="projects">
//       {/* Decorative blurred yellow circle */}
//       <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-yellow-400 opacity-15 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-2xl pointer-events-none" />

//       {/* Animated lane markings at the bottom */}
//       <svg
//         className="absolute bottom-0 left-0 w-full h-20 z-0"
//         viewBox="0 0 1440 80"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         style={{ pointerEvents: "none" }}
//       >
//         <rect width="1440" height="80" fill="black" />
//         <g>
//           {[...Array(18)].map((_, i) => (
//             <rect
//               key={i}
//               x={i * 80 + 20}
//               y="35"
//               width="40"
//               height="10"
//               rx="5"
//               fill="#FFD600"
//               opacity="0.7"
//             />
//           ))}
//         </g>
//       </svg>

//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-3xl sm:text-4xl font-extrabold text-center mb-2 relative inline-block"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="relative text-yellow-400">
//             Our Projects
//             <motion.span
//               className="absolute left-1/2 -bottom-2 -translate-x-1/2 h-1 w-24 bg-yellow-400 rounded-full"
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
//               style={{ transformOrigin: "center" }}
//             />
//           </span>
//         </motion.h2>
//         <motion.p
//           className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//         >
//           Discover how our traffic management expertise brings safety, efficiency, and seamless experiences to New Zealand’s most celebrated events.
//         </motion.p>
//         <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.title}
//               className="relative group bg-white/10 border border-yellow-400/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/30 transition-shadow duration-300 cursor-pointer flex flex-col"
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.045,
//                 boxShadow: "0 8px 32px 0 #FFD60088, 0 2px 8px #0003",
//                 borderColor: "#FFD600",
//               }}
//               onClick={() => navigate(project.link)}
//               tabIndex={0}
//               role="button"
//               aria-label={`View details for ${project.title}`}
//             >
//               {/* Project image (optional, can use SVG or placeholder) */}
//               <div className="h-44 w-full bg-black flex items-center justify-center overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                 />
//                 {/* Traffic cone accent */}
//                 <motion.div
//                   className="absolute top-4 left-4"
//                   initial={{ y: -10, opacity: 0 }}
//                   whileHover={{ y: 0, opacity: 1 }}
//                 >
//                   <svg className="w-8 h-8" viewBox="0 0 24 24">
//                     <polygon points="12,2 19,20 5,20" fill="#FFD600" />
//                     <rect x="8" y="16" width="8" height="2" fill="white" />
//                     <rect x="9" y="12" width="6" height="2" fill="white" />
//                   </svg>
//                 </motion.div>
//               </div>
//               <div className="flex-1 flex flex-col p-6">
//                 <h3 className="text-xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                 <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                 <p className="text-white/90 text-base mb-4 flex-1">{project.description}</p>
//                 <span className="inline-block mt-auto text-yellow-400 font-semibold group-hover:underline">
//                   View Project &rarr;
//                 </span>
//               </div>
//               {/* Animated glowing border */}
//               <motion.div
//                 className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-70"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.7 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   ease: "easeInOut"
//                 }}
//                 style={{
//                   boxShadow: "0 0 32px 8px #FFD60077"
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Selwyn Marathon",
    slug: "selwyn-marathon",
    location: "New Zealand",
    subtitle: "Selwyn Marathon, Lincoln Events Centre",
    description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Rugby Event 2022",
    slug: "rugby-event-2022",
    location: "Christchurch",
    subtitle: "Rugby Event 2022, Christchurch",
    description: "Traffic management for the 2022 Rugby Event in Christchurch.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cherry Blossom Festival",
    slug: "cherry-blossom-festival",
    location: "Matangi",
    subtitle: "Cherry Blossom Festival, Matangi",
    description: "Making the Cherry Blossom Festival safe and accessible for all.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden" id="projects">
      {/* Diagonal split background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <polygon points="0,0 1440,0 1440,400 0,600" fill="#FFD600" opacity="0.07" />
          <rect width="1440" height="600" fill="#000" />
        </svg>
      </div>

      {/* Section Heading */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="9" y="2" width="6" height="20" rx="3" fill="#FFD600" />
              <rect x="2" y="9" width="20" height="6" rx="3" fill="#FFD600" />
            </svg>
            <h2 className="text-4xl font-extrabold text-yellow-400 tracking-tight">
              Our Projects
            </h2>
          </div>
          <motion.div
            className="h-1 w-24 bg-yellow-400 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformOrigin: "center" }}
          />
          <p className="mt-6 text-lg text-white/80 text-center max-w-2xl">
            See how we keep New Zealand's major events moving safely and efficiently.
          </p>
        </div>
      </div>

      {/* Masonry-like staggered cards on desktop, horizontal scroll on mobile */}
      <div className="relative z-10 px-4">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-y-16 md:gap-x-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              className={`group relative mb-8 md:mb-0`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.13, duration: 0.7, type: "spring" }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="block rounded-3xl shadow-2xl overflow-hidden hover:shadow-yellow-400/40 transition-shadow duration-300"
                tabIndex={0}
              >
                <div className="relative group h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Animated badge */}
                  <motion.span
                    className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold shadow-lg text-sm uppercase tracking-wider"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6, type: "spring" }}
                  >
                    {project.location}
                  </motion.span>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  {/* View Project Button */}
                  <motion.span
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-lg text-base opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    View Project →
                  </motion.span>
                </div>
                <div className="px-7 py-6 bg-black/80">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-1">{project.title}</h3>
                  <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
                  <p className="text-white/80 text-base line-clamp-3">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
