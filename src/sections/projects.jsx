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


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Selwyn Marathon",
//     slug: "selwyn-marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Rugby Event 2022",
//     slug: "rugby-event-2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description: "Traffic management for the 2022 Rugby Event in Christchurch.",
//     image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Cherry Blossom Festival",
//     slug: "cherry-blossom-festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description: "Making the Cherry Blossom Festival safe and accessible for all.",
//     image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
//   },
// ];

// export default function ProjectsSection() {
//   return (
//     <section className="relative w-full py-24 overflow-hidden" id="projects">
//       {/* Diagonal split background */}
//       <div className="absolute inset-0 -z-10 pointer-events-none">
//         <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
//           <polygon points="0,0 1440,0 1440,400 0,600" fill="#FFD600" opacity="0.07" />
//           <rect width="1440" height="600" fill="#000" />
//         </svg>
//       </div>

//       {/* Section Heading */}
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center gap-2 mb-2">
//             <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <rect x="9" y="2" width="6" height="20" rx="3" fill="#FFD600" />
//               <rect x="2" y="9" width="20" height="6" rx="3" fill="#FFD600" />
//             </svg>
//             <h2 className="text-4xl font-extrabold text-yellow-400 tracking-tight">
//               Our Projects
//             </h2>
//           </div>
//           <motion.div
//             className="h-1 w-24 bg-yellow-400 rounded-full"
//             initial={{ scaleX: 0 }}
//             whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, type: "spring" }}
//             style={{ transformOrigin: "center" }}
//           />
//           <p className="mt-6 text-lg text-white/80 text-center max-w-2xl">
//             See how we keep New Zealand's major events moving safely and efficiently.
//           </p>
//         </div>
//       </div>

//       {/* Masonry-like staggered cards on desktop, horizontal scroll on mobile */}
//       <div className="relative z-10 px-4">
//         <div className="flex flex-col md:grid md:grid-cols-3 gap-y-16 md:gap-x-8 max-w-6xl mx-auto">
//           {projects.map((project, i) => (
//             <motion.div
//               key={project.slug}
//               className={`group relative mb-8 md:mb-0`}
//               initial={{ y: 40, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 + i * 0.13, duration: 0.7, type: "spring" }}
//             >
//               <Link
//                 to={`/projects/${project.slug}`}
//                 className="block rounded-3xl shadow-2xl overflow-hidden hover:shadow-yellow-400/40 transition-shadow duration-300"
//                 tabIndex={0}
//               >
//                 <div className="relative group h-80">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* Animated badge */}
//                   <motion.span
//                     className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold shadow-lg text-sm uppercase tracking-wider"
//                     initial={{ y: -20, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.3 + i * 0.15, duration: 0.6, type: "spring" }}
//                   >
//                     {project.location}
//                   </motion.span>
//                   {/* Overlay on hover */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
//                   {/* View Project Button */}
//                   <motion.span
//                     className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-lg text-base opacity-0 group-hover:opacity-100 transition-all duration-300"
//                     initial={{ y: 20 }}
//                     whileHover={{ y: 0 }}
//                   >
//                     View Project →
//                   </motion.span>
//                 </div>
//                 <div className="px-7 py-6 bg-black/80">
//                   <h3 className="text-2xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                   <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                   <p className="text-white/80 text-base line-clamp-3">{project.description}</p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import React from "react";

// const projects = [
//   {
//     title: "Selwyn Marathon",
//     slug: "selwyn-marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Rugby Event 2022",
//     slug: "rugby-event-2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description: "Traffic management for the 2022 Rugby Event in Christchurch.",
//     image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Cherry Blossom Festival",
//     slug: "cherry-blossom-festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description: "Making the Cherry Blossom Festival safe and accessible for all.",
//     image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
//   },
// ];

// function SkyBackground({ children }) {
//   return (
//     <div className="sky-background" style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
//       {/* Animated stars */}
//       {[...Array(18)].map((_, i) => (
//         <div
//           key={i}
//           className="star"
//           style={{
//             left: `${Math.random() * 100}%`,
//             width: `${1 + Math.random() * 2}px`,
//             height: `${1 + Math.random() * 2}px`,
//             animationDuration: `${4 + Math.random() * 4}s`,
//             animationDelay: `${Math.random() * 5}s`,
//             opacity: 0.7 + Math.random() * 0.3,
//           }}
//         />
//       ))}
//       {children}
//       {/* CSS for sky and stars */}
//       <style>{`
//         .sky-background {
//           background: linear-gradient(to bottom, #00111a 0%, #003366 50%, #66ccff 100%);
//         }
//         @keyframes starFall {
//           0% {
//             transform: translateY(-40px) translateX(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100vh) translateX(60px);
//             opacity: 0;
//           }
//         }
//         .star {
//           position: absolute;
//           top: -10px;
//           border-radius: 50%;
//           background: white;
//           animation-name: starFall;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//           z-index: 1;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function ProjectsSection() {
//   return (
//     <SkyBackground>
//       <section className="relative w-full py-24 text-white overflow-hidden" id="projects" style={{zIndex: 2}}>
//         {/* Timeline vertical line */}
//         <div className="hidden md:block absolute left-1/2 top-24 bottom-24 w-2 bg-yellow-400/60 rounded-full -translate-x-1/2 z-0" />

//         {/* Section Heading */}
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-2 mb-2">
//               <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <circle cx="12" cy="12" r="10" stroke="#FFD600" strokeWidth="3" fill="none"/>
//                 <rect x="9" y="6" width="6" height="12" rx="3" fill="#FFD600" />
//               </svg>
//               <h2 className="text-4xl font-extrabold text-yellow-400 tracking-tight">
//                 Event Projects Timeline
//               </h2>
//             </div>
//             <div className="h-1 w-24 bg-yellow-400 rounded-full" />
//             <p className="mt-6 text-lg text-white/80">
//               Our journey managing New Zealand's most important events, one milestone at a time.
//             </p>
//           </div>
//         </div>

//         {/* Timeline cards */}
//         <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-16">
//           {projects.map((project, i) => (
//             <div key={project.slug} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
//               {/* Connector dot and line */}
//               <div className="hidden md:flex flex-col items-center z-10">
//                 <div className="w-8 h-8 rounded-full bg-yellow-400 border-4 border-white shadow-lg flex items-center justify-center">
//                   <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <rect x="9" y="2" width="6" height="20" rx="3" fill="#FFD600" />
//                   </svg>
//                 </div>
//                 {i < projects.length - 1 && (
//                   <div className="flex-1 w-2 bg-yellow-400/60 rounded-full my-2" style={{ minHeight: 60 }} />
//                 )}
//               </div>
//               {/* Card */}
//               <motion.div
//                 className="relative bg-black/80 border border-yellow-400/30 rounded-3xl shadow-2xl overflow-hidden w-full md:w-2/3 group"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 + i * 0.13, duration: 0.7, type: "spring" }}
//               >
//                 <Link to={`/projects/${project.slug}`} className="block group">
//                   <div className="relative h-56 w-full overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
//                     {/* Badge */}
//                     <span className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold shadow-lg text-xs uppercase tracking-wider">
//                       {project.location}
//                     </span>
//                     {/* View Project Button */}
//                     <motion.span
//                       className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-lg text-base opacity-0 group-hover:opacity-100 transition-all duration-300"
//                       initial={{ y: 20 }}
//                       whileHover={{ y: 0 }}
//                     >
//                       View Project →
//                     </motion.span>
//                   </div>
//                   <div className="px-7 py-6">
//                     <h3 className="text-2xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                     <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                     <p className="text-white/80 text-base line-clamp-3">{project.description}</p>
//                   </div>
//                 </Link>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </SkyBackground>
//   );
// }



// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import React from "react";

// const projects = [
//   {
//     title: "Selwyn Marathon",
//     slug: "selwyn-marathon",
//     location: "New Zealand",
//     subtitle: "Selwyn Marathon, Lincoln Events Centre",
//     description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons.",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Rugby Event 2022",
//     slug: "rugby-event-2022",
//     location: "Christchurch",
//     subtitle: "Rugby Event 2022, Christchurch",
//     description: "Traffic management for the 2022 Rugby Event in Christchurch.",
//     image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     title: "Cherry Blossom Festival",
//     slug: "cherry-blossom-festival",
//     location: "Matangi",
//     subtitle: "Cherry Blossom Festival, Matangi",
//     description: "Making the Cherry Blossom Festival safe and accessible for all.",
//     image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
//   },
// ];

// const timelineIcons = [
//   // Traffic light
//   <svg key="light" className="w-7 h-7" viewBox="0 0 24 24" fill="none">
//     <rect x="8" y="4" width="8" height="16" rx="4" fill="#222" stroke="#FFD600" strokeWidth="2" />
//     <circle cx="12" cy="8" r="1.5" fill="#FF4D4D" />
//     <circle cx="12" cy="12" r="1.5" fill="#FFD600" />
//     <circle cx="12" cy="16" r="1.5" fill="#4DFF4D" />
//   </svg>,
//   // Traffic cone
//   <svg key="cone" className="w-7 h-7" viewBox="0 0 24 24" fill="none">
//     <polygon points="12,2 19,20 5,20" fill="#FFD600" stroke="#222" strokeWidth="1" />
//     <rect x="8" y="16" width="8" height="2" fill="#fff" />
//     <rect x="9" y="12" width="6" height="2" fill="#fff" />
//   </svg>,
//   // Barricade
//   <svg key="barricade" className="w-7 h-7" viewBox="0 0 24 24" fill="none">
//     <rect x="4" y="10" width="16" height="4" rx="2" fill="#FFD600" stroke="#222" strokeWidth="1.5" />
//     <rect x="6" y="14" width="2" height="4" fill="#FFD600" />
//     <rect x="16" y="14" width="2" height="4" fill="#FFD600" />
//     <rect x="8" y="10" width="2" height="4" fill="#222" opacity="0.3"/>
//     <rect x="14" y="10" width="2" height="4" fill="#222" opacity="0.3"/>
//   </svg>,
// ];

// function SkyBackground({ children }) {
//   return (
//     <div className="sky-background" style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
//       {/* Animated stars */}
//       {[...Array(18)].map((_, i) => (
//         <div
//           key={i}
//           className="star"
//           style={{
//             left: `${Math.random() * 100}%`,
//             width: `${1 + Math.random() * 2}px`,
//             height: `${1 + Math.random() * 2}px`,
//             animationDuration: `${4 + Math.random() * 4}s`,
//             animationDelay: `${Math.random() * 5}s`,
//             opacity: 0.7 + Math.random() * 0.3,
//           }}
//         />
//       ))}
//       {/* Animated road chevrons */}
//       <svg
//         className="absolute bottom-0 left-0 w-full h-24 z-0"
//         viewBox="0 0 1440 96"
//         fill="none"
//         style={{ pointerEvents: "none" }}
//       >
//         <rect width="1440" height="96" fill="#222" />
//         {/* Lane markings */}
//         {[...Array(20)].map((_, i) => (
//           <rect
//             key={i}
//             x={i * 72 + 20}
//             y="44"
//             width="32"
//             height="8"
//             rx="4"
//             fill="#FFD600"
//             opacity="0.8"
//           />
//         ))}
//         {/* Animated chevron (car effect) */}
//         <motion.polygon
//           points="100,70 110,86 90,86"
//           fill="#FFD600"
//           initial={{ x: 0 }}
//           animate={{ x: [0, 1300, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//         />
//       </svg>
//       {children}
//       {/* CSS for sky and stars */}
//       <style>{`
//         .sky-background {
//           background: linear-gradient(to bottom, #00111a 0%, #003366 50%, #66ccff 100%);
//         }
//         @keyframes starFall {
//           0% {
//             transform: translateY(-40px) translateX(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(100vh) translateX(60px);
//             opacity: 0;
//           }
//         }
//         .star {
//           position: absolute;
//           top: -10px;
//           border-radius: 50%;
//           background: white;
//           animation-name: starFall;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//           z-index: 1;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default function ProjectsSection() {
//   return (
//     <SkyBackground>
//       <section className="relative w-full py-24 text-white overflow-hidden" id="projects" style={{zIndex: 2}}>
//         {/* Timeline vertical line */}
//         <div className="hidden md:block absolute left-1/2 top-24 bottom-36 w-2 bg-yellow-400/60 rounded-full -translate-x-1/2 z-0" />

//         {/* Section Heading */}
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-2 mb-2">
//               {/* Traffic light icon */}
//               <svg className="w-10 h-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <rect x="8" y="4" width="8" height="16" rx="4" fill="#222" stroke="#FFD600" strokeWidth="2" />
//                 <circle cx="12" cy="8" r="1.5" fill="#FF4D4D" />
//                 <circle cx="12" cy="12" r="1.5" fill="#FFD600" />
//                 <circle cx="12" cy="16" r="1.5" fill="#4DFF4D" />
//               </svg>
//               <h2 className="text-4xl font-extrabold text-yellow-400 tracking-tight">
//                 Traffic Event Projects
//               </h2>
//             </div>
//             <div className="h-1 w-24 bg-yellow-400 rounded-full" />
//             <p className="mt-6 text-lg text-white/80">
//               Our journey managing New Zealand's most important events, one milestone at a time.
//             </p>
//           </div>
//         </div>

//         {/* Timeline cards */}
//         <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-16">
//           {projects.map((project, i) => (
//             <div key={project.slug} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
//               {/* Connector dot and line */}
//               <div className="hidden md:flex flex-col items-center z-10">
//                 <div className="w-12 h-12 rounded-full bg-yellow-400 border-4 border-white shadow-lg flex items-center justify-center">
//                   {timelineIcons[i % timelineIcons.length]}
//                 </div>
//                 {i < projects.length - 1 && (
//                   <div className="flex-1 w-2 bg-yellow-400/60 rounded-full my-2" style={{ minHeight: 60 }} />
//                 )}
//               </div>
//               {/* Card */}
//               <motion.div
//                 className="relative bg-black/80 border border-yellow-400/30 rounded-3xl shadow-2xl overflow-hidden w-full md:w-2/3 group"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 + i * 0.13, duration: 0.7, type: "spring" }}
//               >
//                 <Link to={`/projects/${project.slug}`} className="block group">
//                   <div className="relative h-56 w-full overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
//                     {/* Badge */}
//                     <span className="absolute top-5 left-5 bg-yellow-400 text-black px-4 py-1.5 rounded-full font-bold shadow-lg text-xs uppercase tracking-wider">
//                       {project.location}
//                     </span>
//                     {/* View Project Button */}
//                     <motion.span
//                       className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold shadow-lg text-base opacity-0 group-hover:opacity-100 transition-all duration-300"
//                       initial={{ y: 20 }}
//                       whileHover={{ y: 0 }}
//                     >
//                       View Project →
//                     </motion.span>
//                   </div>
//                   <div className="px-7 py-6">
//                     <h3 className="text-2xl font-bold text-yellow-400 mb-1">{project.title}</h3>
//                     <div className="text-sm text-white/60 mb-2">{project.subtitle}</div>
//                     <p className="text-white/80 text-base line-clamp-3">{project.description}</p>
//                   </div>
//                 </Link>
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </SkyBackground>
//   );
// }








import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Selwyn Marathon",
    slug: "selwyn-marathon",
    location: "New Zealand",
    subtitle: "Selwyn Marathon, Lincoln Events Centre",
    description: "Ensuring smooth traffic flow for 5,000+ participants at one of New Zealand's premier marathons. Our team managed road closures, detours, and safety protocols to create a seamless experience for runners and spectators alike.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Participants", value: "5,000+" },
      { label: "Road Closures", value: "12 km" },
      { label: "Duration", value: "8 hours" }
    ]
  },
  {
    title: "Rugby Championship",
    slug: "rugby-event-2022",
    location: "Christchurch",
    subtitle: "International Rugby Championship 2022",
    description: "Managed traffic for 25,000+ fans at Christchurch Stadium. Implemented dynamic traffic routing, parking management, and pedestrian flow systems to handle peak arrival/departure times efficiently.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Attendees", value: "25,000+" },
      { label: "Traffic Officers", value: "45" },
      { label: "Parking Spaces", value: "8,000" }
    ]
  },
  {
    title: "Cherry Blossom Festival",
    slug: "cherry-blossom-festival",
    location: "Matangi",
    subtitle: "Annual Cherry Blossom Festival",
    description: "Coordinated traffic for this popular seasonal event attracting 15,000+ visitors. Designed one-way systems, shuttle services, and accessible parking to accommodate the rural location's limited infrastructure.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Visitors", value: "15,000+" },
      { label: "Shuttle Buses", value: "12" },
      { label: "Event Days", value: "3" }
    ]
  },
  {
    title: "City Cycle Challenge",
    slug: "city-cycle-challenge",
    location: "Auckland",
    subtitle: "Urban Cycling Festival 2023",
    description: "Implemented temporary bike lanes and traffic diversions for this city-wide cycling event. Coordinated with local businesses and residents to minimize disruption while ensuring participant safety.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Cyclists", value: "3,200" },
      { label: "Route Length", value: "42 km" },
      { label: "Intersections", value: "38" }
    ]
  }
];

const trafficIcons = [
  // Traffic cone
  <svg key="cone" viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 19,20 5,20" fill="#FFD600" stroke="#222" strokeWidth="1" />
    <rect x="8" y="16" width="8" height="2" fill="#fff" />
    <rect x="9" y="12" width="6" height="2" fill="#fff" />
  </svg>,
  // Traffic light
  <svg key="light" viewBox="0 0 24 24" fill="none">
    <rect x="8" y="4" width="8" height="16" rx="4" fill="#222" stroke="#FFD600" strokeWidth="2" />
    <circle cx="12" cy="8" r="1.5" fill="#FF4D4D" />
    <circle cx="12" cy="12" r="1.5" fill="#FFD600" />
    <circle cx="12" cy="16" r="1.5" fill="#4DFF4D" />
  </svg>,
  // Road sign
  <svg key="sign" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFD600" stroke="#222" strokeWidth="1.5" />
    <path d="M12 9V15M12 15L9 12M12 15L15 12" stroke="#222" strokeWidth="2" />
  </svg>,
  // Barricade
  <svg key="barricade" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="10" width="16" height="4" rx="2" fill="#FFD600" stroke="#222" strokeWidth="1.5" />
    <rect x="6" y="14" width="2" height="4" fill="#FFD600" />
    <rect x="16" y="14" width="2" height="4" fill="#FFD600" />
    <rect x="8" y="10" width="2" height="4" fill="#222" opacity="0.3"/>
    <rect x="14" y="10" width="2" height="4" fill="#222" opacity="0.3"/>
  </svg>
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [viewMode, setViewMode] = useState("timeline"); // 'timeline' or 'grid'

  // Animated car for the highway
  const CarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="12" width="16" height="6" rx="2" fill="#FFD600" />
      <rect x="6" y="8" width="12" height="4" fill="#FFD600" />
      <circle cx="8" cy="18" r="2" fill="#222" />
      <circle cx="16" cy="18" r="2" fill="#222" />
    </svg>
  );

  return (
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden" id="projects">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Moving headlights effect */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/5 via-transparent to-yellow-400/5"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Road markings pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-[length:120px_40px] bg-repeat-x"
          style={{ 
            backgroundImage: 'linear-gradient(90deg, transparent 60px, #FFD600 60px, #FFD600 90px, transparent 90px)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
            <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V20M20 12H4"/>
            </svg>
            <span className="text-sm font-medium text-yellow-400">Event Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Traffic Management Projects
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our successful event traffic management solutions across New Zealand's most prestigious gatherings.
          </p>
          
          {/* View toggle buttons */}
          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => setViewMode("timeline")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === "timeline" ? "bg-yellow-400 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4V20M4 4H20M4 12H20M4 20H20"/>
                </svg>
                Timeline View
              </span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${viewMode === "grid" ? "bg-yellow-400 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H20M4 12H20M4 18H20"/>
                </svg>
                Grid View
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Projects Display */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewMode === "timeline" ? (
          <div className="relative">
            {/* Highway Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-400/30 -translate-x-1/2">
              {/* Animated car moving along the timeline */}
              <motion.div
                className="absolute -left-3 -top-4 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <CarIcon />
              </motion.div>
            </div>

            {/* Project Cards */}
            <div className="space-y-24 md:space-y-32">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Connector dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 mx-4 bg-gray-800 border-2 border-yellow-400 rounded-full shadow-lg z-10">
                    <div className="w-8 h-8">
                      {trafficIcons[index % trafficIcons.length]}
                    </div>
                  </div>

                  {/* Project Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-yellow-400/20 transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                            {project.location}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <p className="text-sm text-yellow-400">{project.subtitle}</p>
                          </div>
                          <button 
                            onClick={() => setActiveProject(index)}
                            className="p-2 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                            aria-label="View details"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"/>
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" clipRule="evenodd"/>
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" clipRule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                        
                        {/* Stats */}
                        <div className="flex gap-3">
                          {project.stats.map((stat, i) => (
                            <div key={i} className="flex-1 bg-gray-800/50 rounded-lg p-2 text-center border border-gray-700">
                              <div className="text-yellow-400 font-bold text-lg">{stat.value}</div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <Link
                          to={`/projects/${project.slug}`}
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-colors text-sm"
                        >
                          View Case Study
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl -z-10 group-hover:bg-yellow-400/20 transition-colors" />
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                        {project.location}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="text-xs text-yellow-400">{project.subtitle}</p>
                      </div>
                      <button 
                        onClick={() => setActiveProject(index)}
                        className="p-1.5 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                        aria-label="View details"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"/>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" clipRule="evenodd"/>
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" clipRule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                    
                    {/* Stats mini view */}
                    <div className="mt-auto pt-4 border-t border-gray-700/50">
                      <div className="flex gap-2 justify-between">
                        {project.stats.slice(0, 2).map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-yellow-400 font-bold text-sm">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/projects/${project.slug}`}
                      className="mt-4 inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-colors text-xs w-full"
                    >
                      View Details
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                onClick={() => setActiveProject(null)}
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6L18 18"/>
                </svg>
              </button>
              
              <div className="relative h-64 overflow-hidden">
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white">{projects[activeProject].title}</h2>
                  <p className="text-yellow-400">{projects[activeProject].subtitle}</p>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Project Overview</h3>
                  <p className="text-gray-300">{projects[activeProject].description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {projects[activeProject].stats.map((stat, i) => (
                      <div key={i} className="bg-gray-700/50 rounded-lg p-3 text-center border border-gray-600">
                        <div className="text-yellow-400 font-bold text-xl mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Our Approach</h3>
                  <p className="text-gray-300">
                    For the {projects[activeProject].title}, our team implemented a comprehensive traffic management plan that included:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
                      </svg>
                      <span>Customized traffic routing and signage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
                      </svg>
                      <span>Coordinated road closures and detours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
                      </svg>
                      <span>24/7 monitoring and rapid response teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
                      </svg>
                      <span>Emergency vehicle access planning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to={`/projects/${projects[activeProject].slug}`}
                    className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-colors flex items-center gap-2"
                  >
                    View Full Case Study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
                    </svg>
                  </Link>
                  <button className="px-6 py-3 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition-colors">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}