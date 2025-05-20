// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import wo from '../assets/131500_wo.jpg'
// import { FaRoad} from "react-icons/fa";
// import { BsSignpost } from "react-icons/bs";
// import selwyn from "../assets/selwyn.webp"
// import arroundwinner from "../assets/aroundwinner.webp"
// import bridgetobridge from "../assets/bridgetobridge.webp"
// import AotearoaUltra from "../assets/AotearoaUltra.webp"
// import SouthIsland from "../assets/SouthIsland.webp"
// import CanterburyDuathlon from "../assets/CanterburyDuathlon.webp"
// const projects = [
//   {
//     title: "Selwyn Marathon",
//     slug: "selwyn-marathon",
//     location: "Lincoln, NZ",
//     subtitle: "Annual Marathon Event",
//     description: "The Selwyn Marathon will take place on Sunday, 2nd June 2024, during the King’s Birthday long weekend, starting and finishing at the Lincoln Events Centre. Participants can choose from a Full Marathon, Half Marathon, or 10km race on a flat, fast course through scenic Selwyn, including rural areas and a vineyard. While only longer distances go through Rossendale Wines, top 10km finishers get wine samples. The course is officially certified by World Athletics and AIMS",
//     image: selwyn,
//     stats: [
//       { label: "Participants", value: "5,200", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Road Closures", value: "42km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "85", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Coordinating with local businesses",
//       "Managing spectator crossings",
//       "Emergency vehicle access"
//     ]
//   },
//   {
//     title: "Cotswold School Triathlon",
//     slug: "cotswold-school-triathlon",
//     location: "New Zealand",
//     subtitle: "School Sports Event Traffic Management",
//     description: "Dominate traffic management at the Cotswold School Triathlon with comprehensive solutions for student safety and efficient event flow. Implemented specialized routes for young athletes and coordinated with school officials for seamless operations.",
//     image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Participants", value: "1,200", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Age Groups", value: "5-18", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Safety Staff", value: "45", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Managing young athlete safety",
//       "Parent spectator zones",
//       "Multiple transition areas"
//     ]
//   },
//   {
//     title: "Mawhera Quay New Year Party",
//     slug: "mawhera-quay-new-year",
//     location: "Mawhera Quay",
//     subtitle: "New Year Celebration Event",
//     description: "Celebrate the New Year in style at Mawhera Quay with comprehensive traffic and crowd management solutions. Designed safe pedestrian flows and vehicle management for the waterfront celebration with fireworks display.",
//     image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Attendees", value: "8,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Parking Managed", value: "2,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Event Duration", value: "6hr", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Alcohol management zones",
//       "Fireworks safety perimeter",
//       "Late-night transport coordination"
//     ]
//   },
//   {
//     title: "International Rugby",
//     slug: "rugby-event-2022",
//     location: "Christchurch",
//     subtitle: "Championship Finals 2022",
//     description: "Designed and executed traffic management for 35,000 spectators at Christchurch Stadium. Implemented phased arrival/departure systems, 8,000 parking spaces, and pedestrian flow optimization.",
//     image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Attendees", value: "35,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Parking Spaces", value: "8,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Shuttle Buses", value: "45", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Peak arrival/departure surges",
//       "Ride-share coordination",
//       "Disabled access"
//     ]
//   },
//   {
//     title: "Cherry Blossom Fest",
//     slug: "cherry-blossom-festival",
//     location: "Matangi Gardens",
//     subtitle: "Seasonal Cultural Event",
//     description: "Created traffic solutions for 18,000 daily visitors to rural location with limited infrastructure. Implemented one-way systems, satellite parking with shuttles, and pedestrian pathways.",
//     image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Daily Visitors", value: "18,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Shuttle Buses", value: "22", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Parking Spaces", value: "3,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Rural road limitations",
//       "Pedestrian/vehicle interaction",
//       "Weather contingencies"
//     ]
//   },
//   {
//     title: "Around Brunner",
//     slug: "around-brunner",
//     location: "Greymouth, NZ",
//     subtitle: "Iconic West Coast Cycling Challenge",
//     description: "Orchestrated traffic management for the Around Brunner cycling event, a globally recognized 130km circuit around Lake Brunner starting at Moana Hotel. Managed closures on State Highway 7 and rural roads, deploying cones and signage to ensure cyclist safety across scenic mountain and lake routes, attracting international riders to the West Coast’s wilderness.",
//     image: arroundwinner,
//     stats: [
//       { label: "Cyclists", value: "1,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Route Length", value: "130km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "50", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Navigating Taramakau Bridge crossings",
//       "Rural road cyclist safety",
//       "Emergency access on remote routes"
//     ]
//   },
//   {
//     title: "Bridge to Bridge",
//     slug: "bridge-to-bridge",
//     location: "Canterbury, NZ",
//     subtitle: "Premier Canterbury Trail Ultra",
//     description: "Managed traffic for the Bridge to Bridge Ultra Marathon, a 60km global trail event from Waimakariri Golf Club to Raven Quay, Kaiapoi, drawing international runners. Coordinated rolling closures on Brown Rock Road, Harrs Road, River Road, and Waimakariri River Park trails, with cone setups and barriers ensuring runner safety and spectator access under motorway bridges.",
//     image: bridgetobridge,
//     stats: [
//       { label: "Participants", value: "2,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Route Length", value: "60km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "60", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Urban-to-trail transitions",
//       "Motorway bridge safety",
//       "Spectator zone management"
//     ]
//   },
//   {
//     title: "Aotearoa Ultra Marathon",
//     slug: "aotearoa-ultra-marathon",
//     location: "Banks Peninsula, NZ",
//     subtitle: "World-Class Ultra Trail Adventure",
//     description: "Provided traffic management for the Aotearoa Ultra Marathon, a 101km trail event renowned globally, starting at Little River Domain and ending at Halswell Quarry. Managed closures on Western Valley Road, Summit Road, and Port Levy routes, with cone and barrier setups to support runners scaling Mt Herbert and navigating Akaroa and Lyttelton Harbours.",
//     image: AotearoaUltra,
//     stats: [
//       { label: "Participants", value: "1,800", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Elevation Gain", value: "4,055m", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "70", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Steep terrain road closures",
//       "Remote trail access points",
//       "Team changeover logistics"
//     ]
//   },
//   {
//     title: "South Island Ultra Marathon",
//     slug: "south-island-ultra-marathon",
//     location: "West Coast, NZ",
//     subtitle: "Scenic Multi-Distance Trail Run",
//     description: "Managed traffic for the South Island Ultra Marathon on 10 May 2025 along the West Coast Wilderness Trail, from Greymouth to Hokitika. Supported four events (100km, 54km, 24km, 6km) with road closures and cone setups across diverse terrain including lakes, rivers, swing bridges, and coastal paths, ensuring safety for solo and team runners.",
//     image: SouthIsland,
//     stats: [
//       { label: "Participants", value: "800+", icon: "🏃‍♂️" },
//       { label: "Distances", value: "4", icon: "🏁" },
//       { label: "Traffic Staff", value: "65", icon: "👮" }
//     ],
//     "challenges": [
//       "Multiple race start points",
//       "Trail and road intersections",
//       "Remote terrain logistics"
//     ]
//   },
//   {
//     title: "Canterbury Duathlon Series",
//     slug: "canterbury-duathlon",
//     location: "Rolleston, NZ",
//     subtitle: "Inclusive 3-Race Duathlon Series",
//     description: "Managed traffic flow for the 2025 Canterbury Duathlon Series at Brookside Park, Rolleston, hosting over 1,000 participants across three races on 25 May, 8 June, and 22 June. Implemented road closures and bike lane setups for short (2.5km run, 12km bike, 1.25km run) and long (5km run, 24km bike, 2.5km run) courses, ensuring safety for diverse athletes and family spectators.",
//     image: CanterburyDuathlon,
//     stats: [
//       { label: "Participants", "value": "1,000+", "icon": "🏃‍♂️" },
//       { "label": "Races", "value": "3", "icon": "🏁" },
//       { "label": "Traffic Staff", "value": "40", "icon": "👮" }
//     ],
//     "challenges": [
//       "Run/bike transition zones",
//       "Family spectator safety",
//       "Course safety for diverse participants"
//     ]
//   }
// ];

// const TrafficIcon = ({ type }) => {
//   const icons = {
//     cone: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <polygon points="12,2 19,20 5,20" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1" />
//         <rect x="8" y="16" width="8" height="2" fill="#fff" />
//         <rect x="9" y="12" width="6" height="2" fill="#fff" />
//       </svg>
//     ),
//     light: (
//       <motion.svg viewBox="0 0 24 24" fill="none">
//         <rect x="8" y="4" width="8" height="16" rx="4" fill="#1A1A1A" stroke="#FFD600" strokeWidth="2" />
//         <motion.circle cx="12" cy="8" r="1.5" fill="#FF4D4D" animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
//         <motion.circle cx="12" cy="12" r="1.5" fill="#FFD600" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
//         <motion.circle cx="12" cy="16" r="1.5" fill="#4DFF4D" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
//       </motion.svg>
//     ),
//     sign: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1.5" />
//         <path d="M12 9V15M12 15L9 12M12 15L15 12" stroke="#1A1A1A" strokeWidth="2" />
//       </svg>
//     ),
//     barricade: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect x="4" y="10" width="16" height="4" rx="2" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1.5" />
//         <rect x="6" y="14" width="2" height="4" fill="#FFD600" />
//         <rect x="16" y="14" width="2" height="4" fill="#FFD600" />
//         <rect x="8" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3"/>
//         <rect x="14" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3"/>
//       </svg>
//     )
//   };
  
//   return <motion.div className="w-6 h-6" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>{icons[type] || icons.cone}</motion.div>;
// };

// const CarIcon = () => {
//   return (
//     <motion.svg 
//       width="24" 
//       height="24" 
//       viewBox="0 0 24 24"
//       animate={{
//         x: [0, 4, 0],
//         transition: { duration: 1.5, repeat: Infinity }
//       }}
//     >
//       <rect x="4" y="12" width="16" height="6" rx="2" fill="#FFD600" />
//       <rect x="6" y="8" width="12" height="4" fill="#FFD600" />
//       <circle cx="8" cy="18" r="2" fill="#1A1A1A" />
//       <circle cx="16" cy="18" r="2" fill="#1A1A1A" />
//     </motion.svg>
//   );
// };

// const ProjectModal = ({ project, onClose }) => {
//   const [activeTab, setActiveTab] = useState('overview');
  
//   return (
//     <motion.div
//       className="relative max-w-5xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500 max-h-[90vh] flex flex-col"
//       initial={{ scale: 0.8, y: 50, opacity: 0 }}
//       animate={{ scale: 1, y: 0, opacity: 1 }}
//       exit={{ scale: 0.8, y: 50, opacity: 0 }}
//       transition={{ duration: 0.5, type: "spring" }}
//     >
//       <motion.div
//         className="absolute inset-0 border-2 border-amber-500 rounded-2xl opacity-0"
//         animate={{ opacity: [0, 0.8, 0] }}
//         transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//         style={{ boxShadow: "0 0 40px 10px rgba(255, 214, 0, 0.5)" }}
//       />
//       <button
//         className="absolute top-4 right-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
//         onClick={onClose}
//         aria-label="Close"
//       >
//         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6L18 18"/>
//         </svg>
//       </button>
      
//       <div className="relative h-72 overflow-hidden">
//         <motion.img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1 }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
//         <div className="absolute bottom-6 left-6 flex items-center gap-3">
//           <motion.h2
//             className="text-3xl font-bold text-white"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             {project.title}
//           </motion.h2>
//           <motion.div
//             className="flex items-center gap-2 px-3 py-1 bg-amber-500 text-black text-sm font-bold rounded-full"
//             initial={{ x: -20, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             <TrafficIcon type="sign" />
//             <span>{project.location}</span>
//           </motion.div>
//         </div>
//       </div>
      
//       <div className="p-6 overflow-y-auto flex-1">
//         <div className="flex border-b border-amber-500/30 mb-6">
//           {['overview', 'stats', 'solutions'].map((tab) => (
//             <motion.button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-amber-300'}`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </motion.button>
//           ))}
//         </div>
        
//         {activeTab === 'overview' && (
//           <div>
//             <motion.h3
//               className="text-lg font-semibold text-amber-500 mb-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Project Overview
//             </motion.h3>
//             <p className="text-gray-300 mb-6">{project.description}</p>
            
//             <div className="grid grid-cols-3 gap-4 mb-6">
//               {project.stats.map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   className="bg-gray-700/50 rounded-lg p-3 text-center border border-amber-500/30"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: i * 0.1, duration: 0.5 }}
//                 >
//                   <div className="text-2xl mb-1">{stat.icon}</div>
//                   <div className="text-amber-500 font-bold text-xl">{stat.value}</div>
//                   <div className="text-sm text-gray-300">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.h3
//               className="text-lg font-semibold text-amber-500 mb-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Key Challenges
//             </motion.h3>
//             <ul className="space-y-3 text-gray-300">
//               {project.challenges.map((challenge, i) => (
//                 <motion.li
//                   key={i}
//                   className="flex items-start gap-2"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: i * 0.1, duration: 0.5 }}
//                 >
//                   <TrafficIcon type="cone" />
//                   <span>{challenge}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         )}
        
//         {activeTab === 'stats' && (
//           <div>
//             <motion.h3
//               className="text-lg font-semibold text-amber-500 mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Event Statistics
//             </motion.h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {project.stats.map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   className="bg-gray-700/50 rounded-xl p-4 border border-amber-500/30 flex items-center gap-4"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: i * 0.1, duration: 0.5 }}
//                 >
//                   <div className="text-3xl">{stat.icon}</div>
//                   <div>
//                     <div className="text-amber-500 font-bold text-xl">{stat.value}</div>
//                     <div className="text-gray-300">{stat.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.h3
//               className="text-lg font-semibold text-amber-500 mt-6 mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Traffic Flow Metrics
//             </motion.h3>
//             <motion.div
//               className="bg-gray-700/50 rounded-xl p-4 border border-amber-500/30"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="h-48 flex items-center justify-center text-gray-400">
//                 [Traffic Flow Visualization]
//               </div>
//               <div className="mt-4 text-sm text-gray-300">
//                 Our real-time monitoring ensured smooth traffic flow with zero congestion points.
//               </div>
//             </motion.div>
//           </div>
//         )}
        
//         {activeTab === 'solutions' && (
//           <div>
//             <motion.h3
//               className="text-lg font-semibold text-amber-500 mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Our Solutions
//             </motion.h3>
//             <div className="space-y-4">
//               {[
//                 { title: "Custom Traffic Plan", description: "Tailored strategy addressing event-specific requirements and local conditions." },
//                 { title: "Advanced Signage", description: "Clear, visible signage with real-time updates for changing conditions." },
//                 { title: "Staff Coordination", description: "Trained personnel at key locations with centralized communication." }
//               ].map((solution, i) => (
//                 <motion.div
//                   key={i}
//                   className="bg-gray-700/50 rounded-xl p-4 border border-amber-500/30"
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: i * 0.1, duration: 0.5 }}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="bg-amber-500/20 text-amber-500 rounded-full p-2">
//                       <TrafficIcon type="barricade" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium text-amber-500 mb-1">{solution.title}</h4>
//                       <p className="text-gray-300">{solution.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
            
//             <motion.h3
//               className="text-lg font-semibold text-amber-500 mt-8 mb-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               Results Achieved
//             </motion.h3>
//             <motion.div
//               className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="flex items-start gap-3">
//                 <div className="bg-amber-500/20 text-amber-500 rounded-full p-2">
//                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
//                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-300">Zero traffic incidents, 40% reduction in congestion, and positive stakeholder feedback.</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
        
//         <motion.div
//           className="flex flex-wrap gap-4 mt-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.5 }}
//         >
//           <Link
//             to={`/projects/${project.slug}`}
//             className="px-6 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2"
//           >
//             View Full Case Study
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
//               <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
//             </svg>
//           </Link>
//           <button className="px-6 py-3 bg-gray-700 text-amber-500 font-medium rounded-full hover:bg-gray-600 transition-colors">
//             Contact Our Team
//           </button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// const ProjectsSection = () => {
//   const [activeProject, setActiveProject] = useState(null);
  
//   return (
//     <section className="relative w-full py-24 md:py-36 bg-[#1A1A1A] text-white overflow-hidden" id="projects">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Animated Road with Moving Vehicles */}
//         <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect width="1440" height="160" fill="#1A1A1A" />
//           {/* Lane Markings */}
//           <g>
//             {[...Array(18)].map((_, i) => (
//               <motion.rect
//                 key={i}
//                 x={i * 80 + 20}
//                 y="80"
//                 width="40"
//                 height="8"
//                 rx="4"
//                 fill="#FFD600"
//                 opacity="0.8"
//                 initial={{ x: i * 80 + 20 }}
//                 animate={{ x: i * 80 - 1440 }}
//                 transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//               />
//             ))}
//           </g>
//           {/* Moving Vehicles */}
//           <g>
//             <motion.g
//               initial={{ x: 200 }}
//               animate={{ x: -200 }}
//               transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//             >
//               <rect x="200" y="110" width="30" height="16" rx="6" fill="#FFD600" opacity="0.9" />
//               <rect x="206" y="106" width="18" height="4" fill="#FFD600" />
//               <circle cx="208" cy="126" r="2" fill="#1A1A1A" />
//               <circle cx="222" cy="126" r="2" fill="#1A1A1A" />
//             </motion.g>
//             <motion.g
//               initial={{ x: 900 }}
//               animate={{ x: -900 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//             >
//               <rect x="900" y="100" width="30" height="16" rx="6" fill="#FFD600" opacity="0.9" />
//               <rect x="906" y="96" width="18" height="4" fill="#FFD600" />
//               <circle cx="908" cy="116" r="2" fill="#1A1A1A" />
//               <circle cx="922" cy="116" r="2" fill="#1A1A1A" />
//             </motion.g>
//           </g>
//         </svg>
        
//         {/* Floating Traffic Lights */}
//         {[...Array(4)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute"
//             style={{
//               top: `${15 + (i * 20)}%`,
//               left: `${10 + (i * 20)}%`,
//               width: '40px',
//               height: '40px'
//             }}
//             animate={{
//               y: [0, -15, 0],
//               rotate: [0, 5, -5, 0]
//             }}
//             transition={{
//               duration: 5 + Math.random() * 2,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           >
//             <TrafficIcon type="light" />
//           </motion.div>
//         ))}
        
//         {/* Glowing Headlights Effect */}
//         <motion.div 
//           className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"
//           initial={{ x: "-100%" }}
//           animate={{ x: "100%" }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       {/* Section Header */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
//             <CarIcon />
//             <span className="text-sm font-medium text-amber-500">Our Event Portfolio</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
//               Traffic Management Timeline
//             </span>
//           </h2>
          
//           <motion.p
//             className="text-lg text-gray-300 max-w-3xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Explore how we’ve managed traffic for New Zealand’s premier events with precision and innovation.
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Timeline View */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative">
//           {/* Highway Timeline */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-500/30 -translate-x-1/2">
//             {/* Animated Car on Timeline */}
//             <motion.div
//               className="absolute -left-4 -top-4 w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50"
//               initial={{ top: "0%" }}
//               animate={{ top: "100%" }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             >
//               <CarIcon />
//             </motion.div>
//           </div>

//           {/* Project Cards */}
//           <div className="space-y-24 md:space-y-32">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.slug}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
//               >
//                 {/* Connector Dot */}
//                 <div className="hidden md:flex items-center justify-center w-16 h-16 mx-4 bg-gray-800 border-2 border-amber-500 rounded-full shadow-lg shadow-amber-500/50 z-10">
//                   <motion.div
//                     className="w-8 h-8"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                   >
//                     {index % 2 === 0 ? <TrafficIcon type="light" /> : <TrafficIcon type="sign" />}
//                   </motion.div>
//                 </div>

//                 {/* Project Card */}
//                 <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
//                   <motion.div 
//                     whileHover={{ y: -8, boxShadow: "0 12px 48px rgba(255, 214, 0, 0.3)" }}
//                     className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
//                   >
//                     <motion.div
//                       className="absolute inset-0 border-2 border-amber-500 rounded-2xl opacity-0 group-hover:opacity-80"
//                       animate={{ opacity: [0, 0.8, 0] }}
//                       transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//                       style={{ boxShadow: "0 0 40px 10px rgba(255, 214, 0, 0.5)" }}
//                     />
//                     <div className="relative h-48 overflow-hidden">
//                       <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         initial={{ scale: 1.1 }}
//                         whileHover={{ scale: 1.15 }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
//                       <div className="absolute top-4 left-4 flex items-center gap-2">
//                         <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
//                           {project.location}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-3">
//                         <div>
//                           <h3 className="text-xl font-bold text-amber-500">{project.title}</h3>
//                           <p className="text-sm text-amber-300">{project.subtitle}</p>
//                         </div>
//                         <motion.button 
//                           onClick={() => setActiveProject(index)}
//                           className="p-2 bg-gray-700 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           aria-label="View details"
//                         >
//                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"/>
//                           </svg>
//                         </motion.button>
//                       </div>
//                       <p className="text-gray-300 text-sm mb-4 line-clamp-2 ">{project.description}</p>
                      
//                       <div className="flex gap-3">
//                         {project.stats.map((stat, i) => (
//                           <motion.div
//                             key={i}
//                             className="flex-1 bg-gray-800/50 rounded-lg p-2 text-center border border-amber-500/30"
//                             initial={{ scale: 0.9 }}
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             <div className="text-amber-500 font-bold text-lg">{stat.value}</div>
//                             <div className="text-xs text-gray-400">{stat.label}</div>
//                           </motion.div>
//                         ))}
//                       </div>
                      
//                       <motion.div
//                         className="mt-4"
//                         whileHover={{ x: 5 }}
//                       >
//                         {/* <Link
//                           to={`/projects/${project.slug}`}
//                           className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors text-sm"
//                         >
//                           View Case Study
//                           <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
//                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
//                           </svg>
//                         </Link> */}
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {activeProject !== null && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveProject(null)}
//           >
//             <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
//             <ProjectModal project={projects[activeProject]} onClose={() => setActiveProject(null)} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsSection;





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import wo from '../assets/131500_wo.jpg'
// import { FaRoad} from "react-icons/fa";
// import { BsSignpost } from "react-icons/bs";
// import selwyn from "../assets/selwyn.webp"
// import arroundwinner from "../assets/aroundwinner.webp"
// import bridgetobridge from "../assets/bridgetobridge.webp"
// import AotearoaUltra from "../assets/AotearoaUltra.webp"
// import SouthIsland from "../assets/SouthIsland.webp"
// import CanterburyDuathlon from "../assets/CanterburyDuathlon.webp"

// const projects = [
  
//   {
//     title: "Selwyn Marathon",
//     slug: "selwyn-marathon",
//     location: "Lincoln, NZ",
//     subtitle: "Annual Marathon Event",
//     description: "The Selwyn Marathon will take place on Sunday, 2nd June 2024, during the King’s Birthday long weekend, starting and finishing at the Lincoln Events Centre. Participants can choose from a Full Marathon, Half Marathon, or 10km race on a flat, fast course through scenic Selwyn, including rural areas and a vineyard. While only longer distances go through Rossendale Wines, top 10km finishers get wine samples. The course is officially certified by World Athletics and AIMS",
//     image: selwyn,
//     stats: [
//       { label: "Participants", value: "5,200", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Road Closures", value: "42km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "85", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Coordinating with local businesses",
//       "Managing spectator crossings",
//       "Emergency vehicle access"
//     ]
//   },
//   {
//     title: "Cotswold School Triathlon",
//     slug: "cotswold-school-triathlon",
//     location: "New Zealand",
//     subtitle: "School Sports Event Traffic Management",
//     description: "Dominate traffic management at the Cotswold School Triathlon with comprehensive solutions for student safety and efficient event flow. Implemented specialized routes for young athletes and coordinated with school officials for seamless operations.",
//     image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Participants", value: "1,200", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Age Groups", value: "5-18", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Safety Staff", value: "45", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Managing young athlete safety",
//       "Parent spectator zones",
//       "Multiple transition areas"
//     ]
//   },
//   {
//     title: "Mawhera Quay New Year Party",
//     slug: "mawhera-quay-new-year",
//     location: "Mawhera Quay",
//     subtitle: "New Year Celebration Event",
//     description: "Celebrate the New Year in style at Mawhera Quay with comprehensive traffic and crowd management solutions. Designed safe pedestrian flows and vehicle management for the waterfront celebration with fireworks display.",
//     image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Attendees", value: "8,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Parking Managed", value: "2,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Event Duration", value: "6hr", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Alcohol management zones",
//       "Fireworks safety perimeter",
//       "Late-night transport coordination"
//     ]
//   },
//   {
//     title: "International Rugby",
//     slug: "rugby-event-2022",
//     location: "Christchurch",
//     subtitle: "Championship Finals 2022",
//     description: "Designed and executed traffic management for 35,000 spectators at Christchurch Stadium. Implemented phased arrival/departure systems, 8,000 parking spaces, and pedestrian flow optimization.",
//     image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Attendees", value: "35,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Parking Spaces", value: "8,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Shuttle Buses", value: "45", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Peak arrival/departure surges",
//       "Ride-share coordination",
//       "Disabled access"
//     ]
//   },
//   {
//     title: "Cherry Blossom Fest",
//     slug: "cherry-blossom-festival",
//     location: "Matangi Gardens",
//     subtitle: "Seasonal Cultural Event",
//     description: "Created traffic solutions for 18,000 daily visitors to rural location with limited infrastructure. Implemented one-way systems, satellite parking with shuttles, and pedestrian pathways.",
//     image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
//     stats: [
//       { label: "Daily Visitors", value: "18,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Shuttle Buses", value: "22", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Parking Spaces", value: "3,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Rural road limitations",
//       "Pedestrian/vehicle interaction",
//       "Weather contingencies"
//     ]
//   },
//   {
//     title: "Around Brunner",
//     slug: "around-brunner",
//     location: "Greymouth, NZ",
//     subtitle: "Iconic West Coast Cycling Challenge",
//     description: "Orchestrated traffic management for the Around Brunner cycling event, a globally recognized 130km circuit around Lake Brunner starting at Moana Hotel. Managed closures on State Highway 7 and rural roads, deploying cones and signage to ensure cyclist safety across scenic mountain and lake routes, attracting international riders to the West Coast’s wilderness.",
//     image: arroundwinner,
//     stats: [
//       { label: "Cyclists", value: "1,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Route Length", value: "130km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "50", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Navigating Taramakau Bridge crossings",
//       "Rural road cyclist safety",
//       "Emergency access on remote routes"
//     ]
//   },
//   {
//     title: "Bridge to Bridge",
//     slug: "bridge-to-bridge",
//     location: "Canterbury, NZ",
//     subtitle: "Premier Canterbury Trail Ultra",
//     description: "Managed traffic for the Bridge to Bridge Ultra Marathon, a 60km global trail event from Waimakariri Golf Club to Raven Quay, Kaiapoi, drawing international runners. Coordinated rolling closures on Brown Rock Road, Harrs Road, River Road, and Waimakariri River Park trails, with cone setups and barriers ensuring runner safety and spectator access under motorway bridges.",
//     image: bridgetobridge,
//     stats: [
//       { label: "Participants", value: "2,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Route Length", value: "60km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "60", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Urban-to-trail transitions",
//       "Motorway bridge safety",
//       "Spectator zone management"
//     ]
//   },
//   {
//     title: "Aotearoa Ultra Marathon",
//     slug: "aotearoa-ultra-marathon",
//     location: "Banks Peninsula, NZ",
//     subtitle: "World-Class Ultra Trail Adventure",
//     description: "Provided traffic management for the Aotearoa Ultra Marathon, a 101km trail event renowned globally, starting at Little River Domain and ending at Halswell Quarry. Managed closures on Western Valley Road, Summit Road, and Port Levy routes, with cone and barrier setups to support runners scaling Mt Herbert and navigating Akaroa and Lyttelton Harbours.",
//     image: AotearoaUltra,
//     stats: [
//       { label: "Participants", value: "1,800", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
//       { label: "Elevation Gain", value: "4,055m", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
//       { label: "Traffic Staff", value: "70", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> }
//     ],
//     challenges: [
//       "Steep terrain road closures",
//       "Remote trail access points",
//       "Team changeover logistics"
//     ]
//   },
//   {
//     title: "South Island Ultra Marathon",
//     slug: "south-island-ultra-marathon",
//     location: "West Coast, NZ",
//     subtitle: "Scenic Multi-Distance Trail Run",
//     description: "Managed traffic for the South Island Ultra Marathon on 10 May 2025 along the West Coast Wilderness Trail, from Greymouth to Hokitika. Supported four events (100km, 54km, 24km, 6km) with road closures and cone setups across diverse terrain including lakes, rivers, swing bridges, and coastal paths, ensuring safety for solo and team runners.",
//     image: SouthIsland,
//     stats: [
//       { label: "Participants", value: "800+", icon: "🏃‍♂️" },
//       { label: "Distances", value: "4", icon: "🏁" },
//       { label: "Traffic Staff", value: "65", icon: "👮" }
//     ],
//     "challenges": [
//       "Multiple race start points",
//       "Trail and road intersections",
//       "Remote terrain logistics"
//     ]
//   },
//   {
//     title: "Canterbury Duathlon Series",
//     slug: "canterbury-duathlon",
//     location: "Rolleston, NZ",
//     subtitle: "Inclusive 3-Race Duathlon Series",
//     description: "Managed traffic flow for the 2025 Canterbury Duathlon Series at Brookside Park, Rolleston, hosting over 1,000 participants across three races on 25 May, 8 June, and 22 June. Implemented road closures and bike lane setups for short (2.5km run, 12km bike, 1.25km run) and long (5km run, 24km bike, 2.5km run) courses, ensuring safety for diverse athletes and family spectators.",
//     image: CanterburyDuathlon,
//     stats: [
//       { label: "Participants", "value": "1,000+", "icon": "🏃‍♂️" },
//       { "label": "Races", "value": "3", "icon": "🏁" },
//       { "label": "Traffic Staff", "value": "40", "icon": "👮" }
//     ],
//     "challenges": [
//       "Run/bike transition zones",
//       "Family spectator safety",
//       "Course safety for diverse participants"
//     ]
//   }
// ];


// // ... (keep your existing projects array unchanged)


// // ... (keep your TrafficIcon and CarIcon components unchanged)
//  const TrafficIcon = ({ type }) => {
//   const icons = {
//     cone: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <polygon points="12,2 19,20 5,20" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1" />
//         <rect x="8" y="16" width="8" height="2" fill="#fff" />
//         <rect x="9" y="12" width="6" height="2" fill="#fff" />
//       </svg>
//     ),
//     light: (
//       <motion.svg viewBox="0 0 24 24" fill="none">
//         <rect x="8" y="4" width="8" height="16" rx="4" fill="#1A1A1A" stroke="#FFD600" strokeWidth="2" />
//         <motion.circle cx="12" cy="8" r="1.5" fill="#FF4D4D" animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
//         <motion.circle cx="12" cy="12" r="1.5" fill="#FFD600" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
//         <motion.circle cx="12" cy="16" r="1.5" fill="#4DFF4D" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
//       </motion.svg>
//     ),
//     sign: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1.5" />
//         <path d="M12 9V15M12 15L9 12M12 15L15 12" stroke="#1A1A1A" strokeWidth="2" />
//       </svg>
//     ),
//     barricade: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect x="4" y="10" width="16" height="4" rx="2" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1.5" />
//         <rect x="6" y="14" width="2" height="4" fill="#FFD600" />
//         <rect x="16" y="14" width="2" height="4" fill="#FFD600" />
//         <rect x="8" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3"/>
//         <rect x="14" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3"/>
//       </svg>
//     )
//   };
  
//   return <motion.div className="w-6 h-6" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>{icons[type] || icons.cone}</motion.div>;
// };

// const CarIcon = () => {
//   return (
//     <motion.svg 
//       width="24" 
//       height="24" 
//       viewBox="0 0 24 24"
//       animate={{
//         x: [0, 4, 0],
//         transition: { duration: 1.5, repeat: Infinity }
//       }}
//     >
//       <rect x="4" y="12" width="16" height="6" rx="2" fill="#FFD600" />
//       <rect x="6" y="8" width="12" height="4" fill="#FFD600" />
//       <circle cx="8" cy="18" r="2" fill="#1A1A1A" />
//       <circle cx="16" cy="18" r="2" fill="#1A1A1A" />
//     </motion.svg>
//   );
// };
// const ProjectModal = ({ project, onClose }) => {
//   // ... (keep your existing ProjectModal component unchanged)
// };

// const ProjectsSection = () => {
//   const [activeProject, setActiveProject] = useState(null);
  
//   return (
//     <section className="relative w-full py-24 md:py-36 bg-[#1A1A1A] text-white overflow-hidden" id="projects">
//       {/* ... (keep your animated background elements and section header unchanged) */}

//       {/* Timeline View */}
//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative">
//           {/* Highway Timeline */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-500/30 -translate-x-1/2">
//             {/* Animated Car on Timeline */}
//             <motion.div
//               className="absolute -left-4 -top-4 w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50"
//               initial={{ top: "0%" }}
//               animate={{ top: "100%" }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             >
//               <CarIcon />
//             </motion.div>
//           </div>

//           {/* Project Cards */}
//           <div className="space-y-24 md:space-y-32">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.slug}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
//               >
//                 {/* Connector Dot */}
//                 <div className="hidden md:flex items-center justify-center w-16 h-16 mx-4 bg-gray-800 border-2 border-amber-500 rounded-full shadow-lg shadow-amber-500/50 z-10">
//                   <motion.div
//                     className="w-8 h-8"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{ repeat: Infinity, duration: 2 }}
//                   >
//                     {index % 2 === 0 ? <TrafficIcon type="light" /> : <TrafficIcon type="sign" />}
//                   </motion.div>
//                 </div>

//                 {/* Project Card */}
//                 <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
//                   <motion.div 
//                     whileHover={{ y: -8, boxShadow: "0 12px 48px rgba(255, 214, 0, 0.3)" }}
//                     className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
//                   >
//                     <motion.div
//                       className="absolute inset-0 border-2 border-amber-500 rounded-2xl opacity-0 group-hover:opacity-80"
//                       animate={{ opacity: [0, 0.8, 0] }}
//                       transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//                       style={{ boxShadow: "0 0 40px 10px rgba(255, 214, 0, 0.5)" }}
//                     />
//                     <div className="relative h-64 overflow-hidden">
//                       <motion.img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
//                         initial={{ scale: 1 }}
//                         whileHover={{ scale: 1.05 }}
//                         style={{ objectPosition: 'center center' }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
//                       <div className="absolute top-4 left-4 flex items-center gap-2">
//                         <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
//                           {project.location}
//                         </span>
//                       </div>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setActiveProject(index);
//                         }}
//                         className="absolute bottom-4 right-4 px-4 py-2 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2 text-sm"
//                       >
//                         View Details
//                         <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
//                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
//                         </svg>
//                       </button>
//                     </div>
//                     <div className="p-6">
//                       <div className="mb-3">
//                         <h3 className="text-xl font-bold text-amber-500">{project.title}</h3>
//                         <p className="text-sm text-amber-300">{project.subtitle}</p>
//                       </div>
//                       <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
//                       <div className="flex gap-3">
//                         {project.stats.map((stat, i) => (
//                           <motion.div
//                             key={i}
//                             className="flex-1 bg-gray-800/50 rounded-lg p-2 text-center border border-amber-500/30"
//                             initial={{ scale: 0.9 }}
//                             whileHover={{ scale: 1.05 }}
//                           >
//                             <div className="text-amber-500 font-bold text-lg">{stat.value}</div>
//                             <div className="text-xs text-gray-400">{stat.label}</div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {activeProject !== null && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setActiveProject(null)}
//           >
//             <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
//             <ProjectModal project={projects[activeProject]} onClose={() => setActiveProject(null)} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProjectsSection;







import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRoad } from "react-icons/fa";
import { BsSignpost } from "react-icons/bs";
import selwyn from "../assets/selwyn.webp";
import arroundwinner from "../assets/aroundwinner.webp";
import bridgetobridge from "../assets/bridgetobridge.webp";
import AotearoaUltra from "../assets/AotearoaUltra.webp";
import SouthIsland from "../assets/SouthIsland.webp";
import CanterburyDuathlon from "../assets/CanterburyDuathlon.webp";

// Projects array (unchanged)
const projects = [
  {
  title: "Selwyn Marathon",
  slug: "selwyn-marathon",
  location: "Lincoln, NZ",
  subtitle: "Annual Marathon Event",
  description:
    "Held over the King’s Birthday long weekend, the Selwyn Marathon showcases the vibrant town of Lincoln and its surrounding rural landscape. Runners will experience a unique blend of urban development and countryside charm, including a scenic section through Rossendale Wines for marathon and half marathon participants. The event offers a flat, fast, and certified course with options for Marathon (42.2km), Half Marathon (21.1km), and 10km distances, suitable for both runners and walkers. While 10km runners miss the vineyard, the top three finishers will receive wine samples from Rossendale Wines. The course is certified by a World Athletics Certified Road Race Course Measurer in cooperation with AIMS.",
  image: selwyn,
  stats: [
    {
      label: "Participants",
      value: "5,200",
      icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div>
    },
    {
      label: "Road Closures",
      value: "42km",
      icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div>
    },
    {
      label: "Traffic Staff",
      value: "85",
      icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div>
    }
  ],
  challenges: [
    "Coordinating with local businesses",
    "Managing spectator crossings",
    "Emergency vehicle access"
  ]
},

  {
    title: "Cotswold School Triathlon",
    slug: "cotswold-school-triathlon",
    location: "New Zealand",
    subtitle: "School Sports Event Traffic Management",
    description:
    "Run by the passionate and community-driven team at 113 Events Ltd, the Cotswold 113 and Cotswold Classic are iconic middle-distance triathlons held in the heart of the scenic Cotswolds. These events originated in 2010 as a grassroots effort by a local triathlon club, filling a gap for athletes preparing for Ironman races. What started with borrowed gear, handwritten timing sheets, and club camaraderie has since grown into two of the most beloved triathlon events in the UK.\n\nThe Cotswold 113 takes place in early summer, while the Cotswold Classic follows in late August, offering athletes flexibility to choose their race season. Both events are staged at Ashton Keynes Water Park, a stunning venue featuring calm open-water swims, fast and flat bike routes on quiet roads, and a spectator-friendly run course.\n\nDesigned for inclusivity and performance, these races are ideal for first-timers stepping into the world of middle-distance triathlons, as well as seasoned athletes aiming for a new PB. Participants benefit from generous aid stations stocked with athlete essentials, top-notch organization, and a welcoming atmosphere. Racers receive high-quality race shirts designed for training (not just lounging), and families are encouraged to attend and enjoy the day alongside competitors.\n\n113 Events takes pride in listening to and supporting athletes, clubs, and supporters, tailoring the experience to meet everyone’s needs. These are races built by triathletes, for triathletes — combining charm, professionalism, and heart.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "1,800+", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Age Groups", value: " 70.3", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Safety Staff", value: "90+", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
     challenges: [
    "Adapting to race calendar shifts and seasonal demands",
    "Maintaining a personal, welcoming atmosphere despite growing popularity",
    "Managing dual-event logistics while preserving course quality and safety"
  ]
  },
  {
    title: "Mawhera Quay New Year Party",
    slug: "mawhera-quay-new-year",
    location: "Mawhera Quay",
    subtitle: "New Year Celebration Event",
    description:
      "Celebrate the New Year in style at Mawhera Quay with comprehensive traffic and crowd management solutions. Designed safe pedestrian flows and vehicle management for the waterfront celebration with fireworks display.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "8,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Parking Managed", value: "2,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
      { label: "Event Duration", value: "6hr", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
    challenges: [
      "Alcohol management zones",
      "Fireworks safety perimeter",
      "Late-night transport coordination",
    ],
  },
  {
    title: "International Rugby",
    slug: "rugby-event-2022",
    location: "Christchurch",
    subtitle: "Championship Finals 2022",
    description:
      "Designed and executed traffic management for 35,000 spectators at Christchurch Stadium. Implemented phased arrival/departure systems, 8,000 parking spaces, and pedestrian flow optimization.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "35,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Parking Spaces", value: "8,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
      { label: "Shuttle Buses", value: "45", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
    challenges: [
      "Peak arrival/departure surges",
      "Ride-share coordination",
      "Disabled access",
    ],
  },
  {
    title: "Cherry Blossom Fest",
    slug: "cherry-blossom-festival",
    location: "Matangi Gardens",
    subtitle: "Seasonal Cultural Event",
    description:
      "Created traffic solutions for 18,000 daily visitors to rural location with limited infrastructure. Implemented one-way systems, satellite parking with shuttles, and pedestrian pathways.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Daily Visitors", value: "18,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Shuttle Buses", value: "22", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
      { label: "Parking Spaces", value: "3,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
    challenges: [
      "Rural road limitations",
      "Pedestrian/vehicle interaction",
      "Weather contingencies",
    ],
  },
  {
    title: "Around Brunner",
    slug: "around-brunner",
    location: "Greymouth, NZ",
    subtitle: "Iconic West Coast Cycling Challenge",
    description:
    "Held annually on the first Saturday of May, the Around Brunner Cycle Ride is one of New Zealand’s most iconic road cycling events. Set against the stunning backdrop of Lake Brunner in Moana, this 130km ride showcases some of the country’s most breathtaking natural scenery — from lush rainforests and rolling hills to winding roads framed by mountains and lakes.\n\nNow entering its 18th year, the event attracts cyclists from all over the country and beyond, offering challenges for every level of rider. Participants can choose from three event formats: the solo 130km ride, a two-person relay option, or the grueling 260km Enduro — two laps of the full circuit. The ride starts and finishes at the scenic Hotel Lake Brunner, creating a festive atmosphere with support from the local community.\n\nThe Around Brunner Cycle Ride is known not just for its scenery, but for its strong sense of camaraderie, excellent support stations, and a course that is both demanding and deeply rewarding. Whether you’re chasing a personal best or soaking in the landscape with friends, this is a ride that promises challenge, beauty, and unforgettable memories.",
    image: arroundwinner,
    stats: [
      { label: "Cyclists", value: "1,500", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Route Length", value: "130km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
      { label: "Traffic Staff", value: "50", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
    challenges: [
      "Navigating Taramakau Bridge crossings",
      "Rural road cyclist safety",
      "Emergency access on remote routes",
    ],
  },
  {
    title: "Bridge to Bridge",
    slug: "bridge-to-bridge",
    location: "Canterbury, NZ",
    subtitle: "Premier Canterbury Trail Ultra",
    description:
    "The Bridge to Bridge Ultra Marathon is a stunning 60km point-to-point endurance event along the Waimakariri River in New Zealand. Starting outside the Waimakariri Golf Club on Thorncaster Road, participants journey through remote country roads, scenic stop banks, and forest trails as they follow the river's winding path toward the finish line on Raven Quay in Kaiapoi.\n\nRunners navigate a route that includes Brown Rock Road, the River Road 'Harrs Road' intake, and a scenic stretch eastward to the 45km mark. From there, the course transitions onto the stop bank, leading to a technical single trail weaving through trees in the beautiful Waimakariri River Park. After passing beneath the Motorway Bridges, runners return to the stop bank with just 2km to go before making the final descent onto Raven Quay to capture their well-earned finisher’s photo.\n\nWith no support runners permitted and a mix of trail, road, and riverside terrain, this ultra marathon tests endurance, navigation, and mental strength. A true adventure for seasoned ultra runners looking for a unique and scenic challenge.",
    image: bridgetobridge,
    stats: [
      { label: "Participants", value: "2,000", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Route Length", value: "60km", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
      { label: "Traffic Staff", value: "60", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
    challenges: [
      "Urban-to-trail transitions",
      "Motorway bridge safety",
      "Spectator zone management",
    ],
  },
  {
    title: "Aotearoa Ultra Marathon",
    slug: "aotearoa-ultra-marathon",
    location: "Banks Peninsula, NZ",
    subtitle: "World-Class Ultra Trail Adventure",
    description:
    "We provided comprehensive traffic management services for the Aotearoa Ultra Marathon, a premier 101km endurance trail race attracting elite runners from around the world. The event began at the scenic Little River Domain and concluded at Halswell Quarry, covering a challenging course across Banks Peninsula. Our responsibilities included full road closures and traffic control on critical access points such as Western Valley Road, Summit Road, and Port Levy routes. We deployed an extensive array of cones, barriers, and signage to ensure runner safety on steep gradients, remote switchbacks, and high-altitude ridge lines. Particular attention was given to complex zones near Mt Herbert, Akaroa Harbour, and Lyttelton Harbour where support vehicle access was limited. Our on-ground team coordinated with local authorities and race officials to manage aid station access, emergency detours, and live route updates, contributing to the smooth execution of this logistically demanding event.",
    image: AotearoaUltra,
    stats: [
      { label: "Participants", value: "1,800", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
      { label: "Elevation Gain", value: "4,055m", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><BsSignpost size={32} color="currentColor" /></motion.div> },
      { label: "Traffic Staff", value: "70", icon: <motion.div animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}><FaRoad size={32} color="currentColor" /></motion.div> },
    ],
    challenges: [
      "Steep terrain road closures",
      "Remote trail access points",
      "Team changeover logistics",
    ],
  },
  {
    title: "South Island Ultra Marathon",
    slug: "south-island-ultra-marathon",
    location: "West Coast, NZ",
    subtitle: "Scenic Multi-Distance Trail Run",
    description:
    "The South Island Ultra Marathon takes place on Saturday, 10th May 2025, on the breathtaking West Coast Wilderness Trail of New Zealand’s South Island. This unforgettable event offers four diverse race options suited for every level of runner, from ultra-distance athletes to casual joggers and walkers.\n\nParticipants will experience one of New Zealand's most scenic trails, running past shimmering lakes, winding rivers, lush wetlands, historic tram bridges, swing bridges, old forestry routes, and even through a western-style town. Set against the dramatic backdrop of the Southern Alps and the Tasman Sea, this event offers a unique opportunity to run what’s often called the most beautiful mountain biking trail in the country.\n\nWhether you’re aiming for the 100km ultra from Greymouth to Hokitika, the 54km segment from Old Christchurch Road, the 24km warm-up from Lake Kaniere, or the approachable 6km fun run from Kaniere Township, you’ll be part of an epic adventure across a truly iconic landscape.",
    image: SouthIsland,
    stats: [
      { label: "Participants", value: "800+", icon: "🏃‍♂️" },
      { label: "Distances", value: "4", icon: "🏁" },
      { label: "Traffic Staff", value: "65", icon: "👮" },
    ],
    challenges: [
      "Multiple race start points",
      "Trail and road intersections",
      "Remote terrain logistics",
    ],
  },
  {
    title: "Canterbury Duathlon Series",
    slug: "canterbury-duathlon",
    location: "Rolleston, NZ",
    subtitle: "Inclusive 3-Race Duathlon Series",
    description:
    "The Canterbury Duathlon Series, formerly known as the Ashburton Duathlon Series, is a beloved multi-race event held annually at the scenic Brookside Park in Rolleston. Scheduled for 25th May, 8th June, and 22nd June 2025, this 3-race series offers an inclusive and supportive environment where athletes of all levels—beginners to elites—can participate.\n\nThe event features both short and long course options to cater to a wide range of fitness levels. Families are especially encouraged to join, with the short course including a 2.5km run/walk, 12km bike ride, and a 1.25km run/walk. The long course offers a more challenging 5km run, 24km bike, and 2.5km run.\n\nBrookside Park’s beautiful open spaces and supportive community atmosphere make it a favorite among duathlon enthusiasts. Whether you're chasing a personal best or enjoying a family outing, the Canterbury Duathlon Series welcomes you.",
    image: CanterburyDuathlon,
    stats: [
      { label: "Participants", value: "1,000+", icon: "🏃‍♂️" },
      { label: "Races", value: "3", icon: "🏁" },
      { label: "Traffic Staff", value: "40", icon: "👮" },
    ],
    challenges: [
      "Run/bike transition zones",
      "Family spectator safety",
      "Course safety for diverse participants",
    ],
  },
];

// TrafficIcon component (unchanged)
const TrafficIcon = ({ type }) => {
  const icons = {
    cone: (
      <svg viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 19,20 5,20" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1" />
        <rect x="8" y="16" width="8" height="2" fill="#fff" />
        <rect x="9" y="12" width="6" height="2" fill="#fff" />
      </svg>
    ),
    light: (
      <motion.svg viewBox="0 0 24 24" fill="none">
        <rect x="8" y="4" width="8" height="16" rx="4" fill="#1A1A1A" stroke="#FFD600" strokeWidth="2" />
        <motion.circle cx="12" cy="8" r="1.5" fill="#FF4D4D" animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
        <motion.circle cx="12" cy="12" r="1.5" fill="#FFD600" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} />
        <motion.circle cx="12" cy="16" r="1.5" fill="#4DFF4D" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }} />
      </motion.svg>
    ),
    sign: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="6" y="6" width="12" height="12" rx="2" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1.5" />
        <path d="M12 9V15M12 15L9 12M12 15L15 12" stroke="#1A1A1A" strokeWidth="2" />
      </svg>
    ),
    barricade: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="10" width="16" height="4" rx="2" fill="#FFD600" stroke="#1A1A1A" strokeWidth="1.5" />
        <rect x="6" y="14" width="2" height="4" fill="#FFD600" />
        <rect x="16" y="14" width="2" height="4" fill="#FFD600" />
        <rect x="8" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3" />
        <rect x="14" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3" />
      </svg>
    ),
  };

  return (
    <motion.div className="w-6 h-6" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
      {icons[type] || icons.cone}
    </motion.div>
  );
};

// CarIcon component (unchanged)
const CarIcon = () => {
  return (
    <motion.svg width="24" height="24" viewBox="0 0 24 24" animate={{ x: [0, 4, 0], transition: { duration: 1.5, repeat: Infinity } }}>
      <rect x="4" y="12" width="16" height="6" rx="2" fill="#FFD600" />
      <rect x="6" y="8" width="12" height="4" fill="#FFD600" />
      <circle cx="8" cy="18" r="2" fill="#1A1A1A" />
      <circle cx="16" cy="18" r="2" fill="#1A1A1A" />
    </motion.svg>
  );
};

const ProjectsSection = () => {
  // State to track the index of the expanded card (null if none are expanded)
  const [expandedCard, setExpandedCard] = useState(null);

  // Toggle expansion of a card
  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-36 bg-[#1A1A1A] text-white overflow-hidden" id="projects">
      {/* Timeline View */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Highway Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-500/30 -translate-x-1/2">
            {/* Animated Car on Timeline */}
            <motion.div
              className="absolute -left-4 -top-4 w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/50"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <CarIcon />
            </motion.div>
          </div>

          {/* Project Cards */}
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => {
              const isExpanded = expandedCard === index;

              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Connector Dot */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 mx-4 bg-gray-800 border-2 border-amber-500 rounded-full shadow-lg shadow-amber-500/50 z-10">
                    <motion.div className="w-8 h-8" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                      {index % 2 === 0 ? <TrafficIcon type="light" /> : <TrafficIcon type="sign" />}
                    </motion.div>
                  </div>

                  {/* Project Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div
                      layout
                      animate={{
                        scale: isExpanded ? 1.05 : 1,
                        zIndex: isExpanded ? 20 : 1,
                      }}
                      transition={{ duration: 0.4, layout: { duration: 0.4 } }}
                      whileHover={{ y: -8, boxShadow: !isExpanded ? "0 12px 48px rgba(255, 214, 0, 0.3)" : "" }}
                      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
                    >
                      <motion.div
                        className="absolute inset-0 border-2 border-amber-500 rounded-2xl opacity-0 group-hover:opacity-80"
                        animate={{ opacity: isExpanded || expandedCard === null ? [0, 0.8, 0] : 0 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        style={{ boxShadow: "0 0 40px 10px rgba(255, 214, 0, 0.5)" }}
                      />
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          initial={{ scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          style={{ objectPosition: "center center" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">{project.location}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(index);
                          }}
                          className="absolute bottom-4 right-4 px-4 py-2 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2 text-sm"
                        >
                          {isExpanded ? "Close" : "View Details"}
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="mb-3">
                          <h3 className="text-xl font-bold text-amber-500">{project.title}</h3>
                          <p className="text-sm text-amber-300">{project.subtitle}</p>
                        </div>
                        <motion.p
                          className="text-gray-300 text-sm mb-4"
                          animate={{ height: isExpanded ? "auto" : "2.5rem" }}
                          transition={{ duration: 0.4 }}
                          style={{ overflow: "hidden" }}
                        >
                          {project.description}
                        </motion.p>

                        {/* Stats */}
                        <div className="flex gap-3 mb-4">
                          {project.stats.map((stat, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 bg-gray-800/50 rounded-lg p-2 text-center border border-amber-500/30"
                              initial={{ scale: 0.9 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {typeof stat.icon === "string" ? (
                                <span className="text-2xl">{stat.icon}</span>
                              ) : (
                                stat.icon
                              )}
                              <div className="text-amber-500 font-bold text-lg">{stat.value}</div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Expanded Content (Challenges) */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="mt-4"
                            >
                              <h4 className="text-lg font-semibold text-amber-500 mb-2">Challenges</h4>
                              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                {project.challenges.map((challenge, i) => (
                                  <li key={i}>{challenge}</li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;