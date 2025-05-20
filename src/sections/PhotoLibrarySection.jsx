import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Photo Imports (unchanged)
import nighttimeTrafficFlow from "../assets/20220915_144112-_1_-min-scaled.webp";
import urbanIntersectionUpgrade from "../assets/20221213_224042-min-scaled.webp";
import highwaySafetyMeasures from "../assets/20230121_161350-min-scaled.webp";
import trafficFlowBranding from "../assets/logo-5.png";
import newYearTrafficControl from "../assets/new-Year.jpeg";
import smartRoadSensors from "../assets/p3-1-scaled.jpg";
import pedestrianSafetyZone from "../assets/p5-scaled.jpg";
import ruralRoadSafety from "../assets/pexels-ann-h-45017-3095695.jpg";
import constructionTrafficManagement from "../assets/pexels-ilia-bronskiy-1137858493-23962930.jpg";
import eventTrafficCoordination from "../assets/pexels-jill-burrow-8953363.jpg";
import cityTrafficOverview from "../assets/pexels-photo-1044329.jpeg";
import emergencyTrafficResponse from "../assets/pexels-rdne-8782696.jpg";

const photos = [
  { id: 1, title: "Nighttime Traffic Control", description: "Implementing rapid TMP approvals for safe nighttime traffic management in a busy urban area.", image: nighttimeTrafficFlow },
  { id: 2, title: "Urban Road Closure", description: "Executing professional onsite management for a major road closure with clear signage and detours.", image: urbanIntersectionUpgrade },
  { id: 3, title: "Highway Safety Compliance", description: "Conducting safe site walkovers and deploying barriers for compliant highway maintenance.", image: highwaySafetyMeasures },
  { id: 4, title: "TMM Branding", description: "Showcasing Traffic Management Matters’ logo at a New Zealand traffic safety conference.", image: trafficFlowBranding },
  { id: 5, title: "Festival Traffic Management", description: "Coordinating traffic for a large festival with thousands of attendees, ensuring safety and flow.", image: newYearTrafficControl },
  { id: 6, title: "Temporary Traffic Setup", description: "Deploying temporary signage and barriers for a construction project with minimal disruption.", image: smartRoadSensors },
  { id: 7, title: "Pedestrian Safety Measures", description: "Creating a pedestrian-safe zone with compliant barriers and signage for a community event.", image: pedestrianSafetyZone },
  { id: 8, title: "Rural Traffic Safety", description: "Enhancing rural road safety with reflective signage and speed control measures.", image: ruralRoadSafety },
  { id: 9, title: "Construction Site Management", description: "Ensuring smooth traffic flow during a major infrastructure project with STMS oversight.", image: constructionTrafficManagement },
  { id: 10, title: "Event Traffic Coordination", description: "Managing traffic for a large public event with efficient parking and pedestrian pathways.", image: eventTrafficCoordination },
  { id: 11, title: "City Traffic Oversight", description: "Overseeing urban traffic patterns with real-time monitoring for safety and compliance.", image: cityTrafficOverview },
  { id: 12, title: "Emergency Traffic Response", description: "Rapidly deploying traffic control measures for an emergency road situation.", image: emergencyTrafficResponse },
];

const projects = [
  {
    title: "Canterbury Marathon",
    slug: "canterbury-marathon",
    location: "Lincoln, NZ",
    subtitle: "Ensuring Safety and Flow: Traffic Management Matters at the Canterbury Marathon",
    description: "Managed traffic for 5,000+ runners across urban and rural roads in Lincoln, New Zealand. Implemented rolling road closures, pedestrian safety zones, and emergency access routes with rapid TMP approvals.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "5,000+", icon: "🏃" },
      { label: "Roads Managed", value: "20 km", icon: "🛣️" },
      { label: "Event Type", value: "Marathon", icon: "🏅" }
    ],
    challenges: [
      "Coordinating with local residents",
      "Ensuring pedestrian safety",
      "Maintaining emergency vehicle access"
    ],
    overview: {
      introduction: "At Traffic Management Matters Limited, we transform challenges into opportunities. The Canterbury Marathon in Lincoln, New Zealand, showcased our expertise in delivering safe and efficient traffic management for a major event, ensuring 5,000+ runners and spectators enjoyed a seamless experience.",
      uninterruptedFlow: "Our team designed a comprehensive traffic management plan (TMP) with rolling road closures to minimize disruption. By working closely with local councils and NZTA, we secured rapid TMP approvals, keeping the event on schedule while maintaining access for residents.",
      safety: "Safety is our priority. We deployed highly visible signage, temporary barriers, and skilled STMS operators to create secure runner and spectator zones. Our safe site walkovers ensured compliance with all regulations, protecting everyone involved.",
      resourceAllocation: "Efficient resource allocation was key. We strategically placed traffic control personnel and equipment to manage congestion and ensure smooth flow, allowing runners to focus on their performance and spectators to enjoy the event.",
      eventExperience: "The Canterbury Marathon is a community celebration. Our flexible and responsive service ensured that traffic management enhanced the event’s atmosphere, letting participants and attendees focus on the joy of the race.",
      partnership: "Partnering with the Canterbury Marathon organizers, TMM delivered a traffic management solution that set a new standard for event safety and efficiency. Our commitment to excellence made this marathon a success."
    }
  },
  {
    title: "Christchurch Rugby Festival",
    slug: "christchurch-rugby-festival",
    location: "Christchurch, NZ",
    subtitle: "TMM Excels at the Christchurch Rugby Festival 2022 – Precision Traffic Management",
    description: "Managed traffic for 50,000 spectators at a rugby festival in Christchurch, New Zealand. Implemented phased arrival/departure systems, parking solutions, and pedestrian safety measures with professional onsite management.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "50,000", icon: "👥" },
      { label: "Event Type", value: "Sports Festival", icon: "🏉" },
      { label: "Location", value: "Christchurch", icon: "📍" }
    ],
    challenges: [
      "Handling peak traffic surges",
      "Coordinating accessible parking",
      "Ensuring pedestrian safety"
    ],
    overview: {
      introduction: "The Christchurch Rugby Festival 2022 was a vibrant celebration of sport, and Traffic Management Matters Limited ensured seamless traffic flow for 50,000 attendees. Our expertise in traffic management made this event safe and enjoyable for all.",
      trafficManagement: "We crafted a tailored TMP to manage high-volume traffic, with phased arrival and departure systems to prevent congestion. Our collaboration with local authorities ensured rapid approvals and compliance with NZTA standards.",
      planning: "Meticulous planning was key. We analyzed traffic patterns and event logistics to deploy clear signage, barriers, and STMS operators. Real-time monitoring allowed us to adapt quickly, ensuring smooth traffic flow throughout the event.",
      safety: "Safety was paramount. We implemented pedestrian pathways, accessible parking zones, and emergency access routes, supported by regular compliance checks and safe site walkovers to maintain a secure environment.",
      partnership: "Our partnership with the Christchurch Rugby Festival organizers showcased TMM’s ability to deliver cost-effective, safety-focused traffic solutions, enhancing the event experience for attendees and stakeholders."
    }
  },
  {
    title: "Matangi Spring Festival",
    slug: "matangi-spring-festival",
    location: "Matangi, NZ",
    subtitle: "Celebrating Spring: Safe Traffic Solutions for Matangi’s Festival",
    description: "Provided traffic management for 5,000 daily visitors to Matangi, New Zealand. Implemented parking solutions, signage, and pedestrian pathways with rapid TMP approvals.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Daily Visitors", value: "5,000", icon: "👥" },
      { label: "Event Type", value: "Festival", icon: "🌸" },
      { label: "Location", value: "Matangi", icon: "📍" }
    ],
    challenges: [
      "Managing limited rural infrastructure",
      "Balancing pedestrian and vehicle flow",
      "Preserving the festival atmosphere"
    ],
    overview: {
      introduction: "The Matangi Spring Festival is a celebration of community and nature. Traffic Management Matters Limited ensured safe and efficient traffic flow for 5,000 daily visitors, enhancing the festival experience.",
      wonderland: "Matangi’s vibrant festival transforms the town into a hub of activity. TMM’s traffic solutions, including clear signage and temporary barriers, maintained the event’s charm while ensuring safety.",
      navigation: "Our team designed a TMP to navigate limited rural infrastructure, with efficient parking and pedestrian pathways. Rapid TMP approvals and professional onsite management minimized disruptions.",
      safety: "Safety was critical. We conducted safe site walkovers and deployed compliant signage to protect attendees, ensuring a secure and enjoyable festival for families and visitors.",
      partnership: "Partnering with festival organizers, TMM delivered flexible, responsive traffic management that preserved the event’s atmosphere and supported its success."
    }
  },
  {
    title: "Mawhera Quay Festival",
    slug: "mawhera-quay-festival",
    location: "Mawhera, NZ",
    subtitle: "Festive Flow: Traffic Management Matters at Mawhera Quay’s Celebration",
    description: "Managed traffic for 5,000 attendees at Mawhera Quay’s festival in New Zealand. Ensured smooth flow with optimized routes, parking, and safety protocols.",
    image: "https://images.unsplash.com/photo-1483794344538-d0d2020a78a1?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "5,000", icon: "👥" },
      { label: "Event Type", value: "Festival", icon: "🎉" },
      { label: "Location", value: "Mawhera", icon: "📍" }
    ],
    challenges: [
      "Managing peak evening traffic",
      "Ensuring pedestrian safety",
      "Coordinating with local councils"
    ],
    overview: {
      introduction: "Mawhera Quay’s festival brought 5,000 attendees together, and Traffic Management Matters Limited ensured safe, efficient traffic management to enhance the celebration.",
      eventDetails: "This vibrant festival featured live music, food stalls, and fireworks. TMM’s traffic solutions ensured attendees could focus on the festivities without traffic concerns.",
      trafficManagement: "We implemented a TMP with optimized routes and parking solutions, securing rapid approvals from local councils. Our STMS operators managed traffic flow in real time.",
      whyChooseUs: "TMM’s expertise, rapid approvals, and safety-first approach made us the ideal partner. Our flexible service ensured seamless traffic management, even during peak hours.",
      invitation: "Partner with TMM for your next event. Contact us at 0800 866 247 or visit www.tmmatters.co.nz to ensure your celebration is safe and successful."
    }
  },
  {
    title: "Nelson Road Upgrade",
    slug: "nelson-road-upgrade",
    location: "Nelson, NZ",
    subtitle: "Building Safely: Traffic Management for Nelson’s Road Upgrade",
    description: "Managed traffic for a major road upgrade in Nelson, New Zealand. Implemented strategic road closures, safety measures, and efficient detours with professional onsite management.",
    image: "https://images.unsplash.com/photo-1534105287632-6e93e0a3f490?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Project Duration", value: "6 Months", icon: "⏳" },
      { label: "Event Type", value: "Infrastructure", icon: "🛠️" },
      { label: "Location", value: "Nelson", icon: "📍" }
    ],
    challenges: [
      "Minimizing disruption to daily traffic",
      "Ensuring worker safety",
      "Coordinating with contractors"
    ],
    overview: {
      introduction: "The Nelson Road Upgrade was a critical infrastructure project, and Traffic Management Matters Limited delivered safe, compliant traffic management to keep it on track.",
      eventDetails: "This six-month project involved major road improvements. TMM’s traffic solutions ensured minimal disruption while prioritizing worker and motorist safety.",
      contributions: "We provided rapid TMP approvals, strategic road closures, and professional onsite management. Safe site walkovers and compliance checks maintained high safety standards.",
      partnership: "Our collaboration with contractors and local councils ensured the project’s success, showcasing TMM’s ability to manage complex infrastructure traffic needs."
    }
  },
  {
    title: "Cotswold Community Event",
    slug: "cotswold-community-event",
    location: "Cotswold, NZ",
    subtitle: "Community in Motion: TMM at the Cotswold Community Event",
    description: "Managed traffic for 1,000 attendees at a community event in Cotswold, New Zealand. Ensured smooth flow with optimized routes and safety measures.",
    image: "https://images.unsplash.com/photo-1629059904545-5b27e33e36d6?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "1,000", icon: "👥" },
      { label: "Event Type", value: "Community Event", icon: "🎭" },
      { label: "Location", value: "Cotswold", icon: "📍" }
    ],
    challenges: [
      "Managing local traffic patterns",
      "Ensuring pedestrian safety",
      "Coordinating with community organizers"
    ],
    overview: {
      introduction: "The Cotswold Community Event brought residents together, and Traffic Management Matters Limited ensured safe, efficient traffic management for all attendees.",
      whyChooseUs: "TMM’s expertise in rapid TMP approvals and professional onsite management ensured a seamless event. Our safety-focused solutions protected attendees and enhanced the experience.",
      partnership: "Partnering with Cotswold organizers, TMM delivered cost-effective, compliant traffic solutions that supported the community’s celebration."
    }
  }
];

// Photo Modal for PhotoLibrarySection (unchanged)
const PhotoModal = ({ photo, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      <motion.div
        className="relative max-w-4xl w-full sm:max-w-5xl bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl border border-amber-400/40"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-10 p-2 bg-gray-800 rounded-full hover:bg-amber-400 hover:text-black transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6L18 18"/>
          </svg>
        </button>
        <div className="relative h-[400px] sm:h-[600px] overflow-hidden">
          <motion.img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover rounded-lg"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onError={(e) => {
              console.error(`Failed to load image: ${photo.title}`);
              e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
            }}
          />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-semibold text-amber-400 mb-2 sm:mb-3">{photo.title}</h2>
            <p className="text-gray-200 text-base sm:text-lg">{photo.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Grid Modal for PhotoLibrarySection's Full Library (unchanged)
const GridModal = ({ photos, onClose, onPhotoClick }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-labelledby="grid-modal-title"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      <motion.div
        className="relative max-w-6xl w-full bg-[#1A1A1A] rounded-xl overflow-hidden shadow-2xl border border-amber-400/40 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="sticky top-4 right-4 z-10 p-2 bg-gray-800 rounded-full hover:bg-amber-400 hover:text-black transition-colors ml-auto"
          onClick={onClose}
          aria-label="Close grid view"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6L18 18"/>
          </svg>
        </button>
        
        <div className="p-6 sm:p-8">
          <h2 id="grid-modal-title" className="text-2xl sm:text-3xl font-semibold text-amber-400 mb-6 text-center">
            Full Photo Library
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="relative group bg-[#1A1A1A] border border-amber-400/30 rounded-xl overflow-hidden shadow-md cursor-pointer"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => onPhotoClick(photo)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <motion.img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${photo.title}`);
                      e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-semibold text-amber-400">{photo.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{photo.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.button
                    onClick={() => onPhotoClick(photo)}
                    className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`View ${photo.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12C15 13.6569 15 12 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"/>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// PhotoLibrarySection
const PhotoLibrarySection = () => {
  const [activePhoto, setActivePhoto] = useState(null);
  const [showGrid, setShowGrid] = useState(false);

  const mainPhotos = photos.slice(0, 3);

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-36 bg-[#0F0F0F] text-white overflow-hidden" id="photo-library">
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? 'bg-amber-500/10' : i % 3 === 1 ? 'bg-blue-500/10' : 'bg-green-500/10'}`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-amber-500/10 border border-amber-400/40 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 sm:w-7 h-6 sm:h-7 text-amber-400" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="12" width="16" height="6" rx="2" fill="#FFD700" />
              <rect x="6" y="8" width="12" height="4" fill="#FFD700" />
              <circle cx="8" cy="18" r="2" fill="#0F0F0F" />
              <circle cx="16" cy="18" r="2" fill="#0F0F0F" />
            </svg>
            <span className="text-sm sm:text-base font-semibold text-amber-400">Our Visual Impact</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-5">
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
              Our Work in Action
            </motion.span>
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            See how Traffic Management Matters delivers safe, compliant, and efficient traffic solutions across New Zealand.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {mainPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="relative group bg-[#1A1A1A] border border-amber-400/30 rounded-xl overflow-hidden shadow-md cursor-pointer"
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActivePhoto(photo)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <motion.img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    console.error(`Failed to load image: ${photo.title}`);
                    e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-amber-400">{photo.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-2">{photo.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <motion.button
                  onClick={() => setActivePhoto(photo)}
                  className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 hover:text-black transition-colors opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View ${photo.title}`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12C15 13.6569 15 12 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"/>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"/>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center mt-8 sm:mt-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setShowGrid(true)}
            className="px-6 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2 shadow-lg hover:shadow-amber-400/30"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6H20M4 12H20M4 18H20"/>
            </svg>
            View Full Library
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {activePhoto && (
          <PhotoModal
            photo={activePhoto}
            onClose={() => setActivePhoto(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGrid && (
          <GridModal
            photos={photos}
            onClose={() => setShowGrid(false)}
            onPhotoClick={(photo) => {
              setShowGrid(false);
              setActivePhoto(photo);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Traffic Icon for ProjectsSection (unchanged)
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
        <rect x="8" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3"/>
        <rect x="14" y="10" width="2" height="4" fill="#1A1A1A" opacity="0.3"/>
      </svg>
    )
  };
  
  return <motion.div className="w-6 h-6" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>{icons[type] || icons.cone}</motion.div>;
};

// Car Icon for ProjectsSection (unchanged)
const CarIcon = () => {
  return (
    <motion.svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24"
      animate={{
        x: [0, 4, 0],
        transition: { duration: 1.5, repeat: Infinity }
      }}
    >
      <rect x="4" y="12" width="16" height="6" rx="2" fill="#FFD600" />
      <rect x="6" y="8" width="12" height="4" fill="#FFD700" />
      <circle cx="8" cy="18" r="2" fill="#1A1A1A" />
      <circle cx="16" cy="18" r="2" fill="#1A1A1A" />
    </motion.svg>
  );
};

// Project Modal for ProjectsSection (unchanged)
const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <motion.div
      className="relative max-w-5xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-400/40 max-h-[90vh] flex flex-col"
      initial={{ scale: 0.8, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.8, y: 50, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div
        className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0"
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ boxShadow: "0 0 40px 10px rgba(251, 191, 36, 0.5)" }}
      />
      <button
        className="absolute top-4 right-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-amber-400 hover:text-black transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6L18 18"/>
        </svg>
      </button>

      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <motion.h2
            className="text-3xl font-bold text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {project.title}
          </motion.h2>
          <motion.div
            className="flex items-center gap-2 px-3 py-1 bg-amber-400 text-black text-sm font-bold rounded-full"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <TrafficIcon type="sign" />
            <span>{project.location}</span>
          </motion.div>
        </div>
      </div>

      <div className="p-6 overflow-y-auto flex-1">
        <div className="flex border-b border-amber-400/30 mb-6">
          {['overview', 'stats', 'solutions'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-amber-400 border-b-2 border-amber-400' : 'text-gray-400 hover:text-amber-300'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div>
            <motion.h3
              className="text-lg font-semibold text-amber-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Project Overview
            </motion.h3>
            {project.overview.introduction && (
              <p className="text-gray-300 mb-4">{project.overview.introduction}</p>
            )}
            {project.overview.eventDetails && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Event Details
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.eventDetails}</p>
              </>
            )}
            {project.overview.wonderland && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  A Vibrant Celebration
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.wonderland}</p>
              </>
            )}
            {project.overview.uninterruptedFlow && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Ensuring Smooth Flow
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.uninterruptedFlow}</p>
              </>
            )}
            {project.overview.trafficManagement && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Traffic Management
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.trafficManagement}</p>
              </>
            )}
            {project.overview.navigation && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Seamless Navigation
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.navigation}</p>
              </>
            )}
            {project.overview.planning && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Meticulous Planning
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.planning}</p>
              </>
            )}
            {project.overview.contributions && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Contributions
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.contributions}</p>
              </>
            )}
            {project.overview.safety && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Prioritizing Safety
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.safety}</p>
              </>
            )}
            {project.overview.resourceAllocation && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Efficient Resource Allocation
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.resourceAllocation}</p>
              </>
            )}
            {project.overview.eventExperience && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Enhancing the Event Experience
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.eventExperience}</p>
              </>
            )}
            {project.overview.whyChooseUs && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Why Choose TMM
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.whyChooseUs}</p>
              </>
            )}
            {project.overview.partnership && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Partnering for Success
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.partnership}</p>
              </>
            )}
            {project.overview.invitation && (
              <>
                <motion.h4
                  className="text-md font-semibold text-amber-400 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Join Us
                </motion.h4>
                <p className="text-gray-300 mb-4">{project.overview.invitation}</p>
              </>
            )}
            <motion.h3
              className="text-lg font-semibold text-amber-400 mb-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Key Challenges
            </motion.h3>
            <ul className="space-y-3 text-gray-300">
              {project.challenges.map((challenge, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <TrafficIcon type="cone" />
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'stats' && (
          <div>
            <motion.h3
              className="text-lg font-semibold text-amber-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Project Statistics
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-700/50 rounded-xl p-4 border border-amber-400/30 flex items-center gap-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl">{stat.icon}</div>
                  <div>
                    <div className="text-amber-400 font-bold text-xl">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              className="text-lg font-semibold text-amber-400 mt-6 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Traffic Flow Metrics
            </motion.h3>
            <motion.div
              className="bg-gray-700/50 rounded-xl p-4 border border-amber-400/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 flex items-center justify-center text-gray-400">
                [Traffic Flow Visualization]
              </div>
              <div className="mt-4 text-sm text-gray-300">
                Our professional onsite management ensured zero incidents and smooth traffic flow.
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div>
            <motion.h3
              className="text-lg font-semibold text-amber-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Solutions
            </motion.h3>
            <div className="space-y-4">
              {[
                { title: "Rapid TMP Approval", description: "Fast-tracked traffic management plans with full council compliance." },
                { title: "Professional Signage", description: "Clear, compliant signage for safe navigation and minimal disruption." },
                { title: "STMS Coordination", description: "Skilled STMS operators at key locations with real-time oversight." }
              ].map((solution, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-700/50 rounded-xl p-4 border border-amber-400/30"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-400/20 text-amber-400 rounded-full p-2">
                      <TrafficIcon type="barricade" />
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-400 mb-1">{solution.title}</h4>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              className="text-lg font-semibold text-amber-400 mt-8 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Results Achieved
            </motion.h3>
            <motion.div
              className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-amber-400/20 text-amber-400 rounded-full p-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Zero incidents, reduced congestion, and positive feedback from stakeholders.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            to={`/projects/${project.slug}`}
            className="px-6 py-3 bg-amber-400 text-black font-medium rounded-full hover:bg-amber-300 transition-colors flex items-center gap-2"
          >
            View Full Case Study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
            </svg>
          </Link>
          <button className="px-6 py-3 bg-gray-700 text-amber-400 font-medium rounded-full hover:bg-gray-600 transition-colors">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ProjectsSection
const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative w-full py-24 md:py-36 bg-[#1A1A1A] text-white overflow-hidden" id="projects">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="160" fill="#1A1A1A" />
          <g>
            {[...Array(18)].map((_, i) => (
              <motion.rect
                key={i}
                x={i * 80 + 20}
                y="80"
                width="40"
                height="8"
                rx="4"
                fill="#FFD600"
                opacity="0.8"
                initial={{ x: i * 80 + 20 }}
                animate={{ x: i * 80 - 1440 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              />
            ))}
          </g>
          <g>
            <motion.g
              initial={{ x: 200 }}
              animate={{ x: -200 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <rect x="200" y="110" width="30" height="16" rx="6" fill="#FFD600" opacity="0.9" />
              <rect x="206" y="106" width="18" height="4" fill="#FFD600" />
              <circle cx="208" cy="126" r="2" fill="#1A1A1A" />
              <circle cx="222" cy="126" r="2" fill="#1A1A1A" />
            </motion.g>
            <motion.g
              initial={{ x: 900 }}
              animate={{ x: -900 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              <rect x="900" y="100" width="30" height="16" rx="6" fill="#FFD600" opacity="0.9" />
              <rect x="906" y="96" width="18" height="4" fill="#FFD600" />
              <circle cx="908" cy="116" r="2" fill="#1A1A1A" />
              <circle cx="922" cy="116" r="2" fill="#1A1A1A" />
            </motion.g>
          </g>
        </svg>

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${15 + (i * 20)}%`,
              left: `${10 + (i * 20)}%`,
              width: '40px',
              height: '40px'
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TrafficIcon type="light" />
          </motion.div>
        ))}

        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
            <CarIcon />
            <span className="text-sm font-medium text-amber-400">Our Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Our Project Highlights
            </span>
          </h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover how Traffic Management Matters delivers safe, compliant traffic solutions for New Zealand’s events and infrastructure projects.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-400/30 -translate-x-1/2">
            <motion.div
              className="absolute -left-4 -top-4 w-9 h-9 bg-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/50"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <CarIcon />
            </motion.div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:flex items-center justify-center w-16 h-16 mx-4 bg-gray-800 border-2 border-amber-400 rounded-full shadow-lg shadow-amber-400/50 z-10">
                  <motion.div
                    className="w-8 h-8"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {index % 2 === 0 ? <TrafficIcon type="light" /> : <TrafficIcon type="sign" />}
                  </motion.div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div 
                    whileHover={{ y: -8, boxShadow: "0 12px 48px rgba(251, 191, 36, 0.3)" }}
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-400/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0 group-hover:opacity-80"
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      style={{ boxShadow: "0 0 40px 10px rgba(251, 191, 36, 0.5)" }}
                    />
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        initial={{ scale: 1.1 }}
                        whileHover={{ scale: 1.15 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 bg-amber-400 text-black text-xs font-bold rounded-full">
                          {project.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-amber-400">{project.title}</h3>
                          <p className="text-sm text-amber-300">{project.subtitle}</p>
                        </div>
                        <motion.button 
                          onClick={() => setActiveProject(index)}
                          className="p-2 bg-gray-700 rounded-full hover:bg-amber-400 hover:text-black transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View details"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"/>
                          </svg>
                        </motion.button>
                      </div>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => setActiveProject(index)}
                          className="px-4 py-2 bg-amber-400 text-black font-medium rounded-full hover:bg-amber-300 transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn More
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L13 6M19 12L13 18"/>
                          </svg>
                        </motion.button>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="px-4 py-2 bg-gray-700 text-amber-400 font-medium rounded-full hover:bg-gray-600 transition-colors flex items-center gap-2"
                        >
                          Full Case Study
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <ProjectModal project={projects[activeProject]} onClose={() => setActiveProject(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Export both sections
export { PhotoLibrarySection, ProjectsSection };