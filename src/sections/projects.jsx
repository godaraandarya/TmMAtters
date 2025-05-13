import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Selwyn Marathon",
    slug: "selwyn-marathon",
    location: "Lincoln, NZ",
    subtitle: "Annual Marathon Event",
    description: "Managed traffic flow for 5,000+ runners across 42km of urban and rural roads. Implemented rolling road closures, spectator zones, and emergency access routes while minimizing disruption to local businesses.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "5,200", icon: "🏃" },
      { label: "Road Closures", value: "42km", icon: "🛣️" },
      { label: "Traffic Staff", value: "85", icon: "👮" }
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
    description: "Dominate traffic management at the Cotswold School Triathlon with comprehensive solutions for student safety and efficient event flow. Implemented specialized routes for young athletes and coordinated with school officials for seamless operations.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "1,200", icon: "🏊" },
      { label: "Age Groups", value: "5-18", icon: "👦" },
      { label: "Safety Staff", value: "45", icon: "🛡️" }
    ],
    challenges: [
      "Managing young athlete safety",
      "Parent spectator zones",
      "Multiple transition areas"
    ]
  },
  {
    title: "Mawhera Quay New Year Party",
    slug: "mawhera-quay-new-year",
    location: "Mawhera Quay",
    subtitle: "New Year Celebration Event",
    description: "Celebrate the New Year in style at Mawhera Quay with comprehensive traffic and crowd management solutions. Designed safe pedestrian flows and vehicle management for the waterfront celebration with fireworks display.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "8,000", icon: "🎉" },
      { label: "Parking Managed", value: "2,500", icon: "🅿️" },
      { label: "Event Duration", value: "6hr", icon: "⏱️" }
    ],
    challenges: [
      "Alcohol management zones",
      "Fireworks safety perimeter",
      "Late-night transport coordination"
    ]
  },
  {
    title: "International Rugby",
    slug: "rugby-event-2022",
    location: "Christchurch",
    subtitle: "Championship Finals 2022",
    description: "Designed and executed traffic management for 35,000 spectators at Christchurch Stadium. Implemented phased arrival/departure systems, 8,000 parking spaces, and pedestrian flow optimization.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "35,000", icon: "👥" },
      { label: "Parking Spaces", value: "8,000", icon: "🅿️" },
      { label: "Shuttle Buses", value: "45", icon: "🚌" }
    ],
    challenges: [
      "Peak arrival/departure surges",
      "Ride-share coordination",
      "Disabled access"
    ]
  },
  {
    title: "Cherry Blossom Fest",
    slug: "cherry-blossom-festival",
    location: "Matangi Gardens",
    subtitle: "Seasonal Cultural Event",
    description: "Created traffic solutions for 18,000 daily visitors to rural location with limited infrastructure. Implemented one-way systems, satellite parking with shuttles, and pedestrian pathways.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Daily Visitors", value: "18,000", icon: "👥" },
      { label: "Shuttle Buses", value: "22", icon: "🚌" },
      { label: "Parking Spaces", value: "3,500", icon: "🅿️" }
    ],
    challenges: [
      "Rural road limitations",
      "Pedestrian/vehicle interaction",
      "Weather contingencies"
    ]
  },
  {
    title: "City Cycle Challenge",
    slug: "city-cycle-challenge",
    location: "Auckland CBD",
    subtitle: "Urban Cycling Festival",
    description: "Implemented temporary bike lanes and traffic diversions for 4,500 cyclists through Auckland's CBD. Coordinated with 150+ businesses for minimal disruption during the 45km route.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Cyclists", value: "4,500", icon: "🚴" },
      { label: "Route Length", value: "45km", icon: "🛣️" },
      { label: "Intersections", value: "62", icon: "🚦" }
    ],
    challenges: [
      "CBD business access",
      "Temporary bike lanes",
      "Public transport coordination"
    ]
  }
];

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
      <rect x="6" y="8" width="12" height="4" fill="#FFD600" />
      <circle cx="8" cy="18" r="2" fill="#1A1A1A" />
      <circle cx="16" cy="18" r="2" fill="#1A1A1A" />
    </motion.svg>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <motion.div
      className="relative max-w-5xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-amber-500 max-h-[90vh] flex flex-col"
      initial={{ scale: 0.8, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.8, y: 50, opacity: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div
        className="absolute inset-0 border-2 border-amber-500 rounded-2xl opacity-0"
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{ boxShadow: "0 0 40px 10px rgba(255, 214, 0, 0.5)" }}
      />
      <button
        className="absolute top-4 right-4 z-10 p-2 bg-gray-700 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
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
            className="flex items-center gap-2 px-3 py-1 bg-amber-500 text-black text-sm font-bold rounded-full"
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
        <div className="flex border-b border-amber-500/30 mb-6">
          {['overview', 'stats', 'solutions'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${activeTab === tab ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400 hover:text-amber-300'}`}
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
              className="text-lg font-semibold text-amber-500 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Project Overview
            </motion.h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-700/50 rounded-lg p-3 text-center border border-amber-500/30"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-amber-500 font-bold text-xl">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.h3
              className="text-lg font-semibold text-amber-500 mb-2"
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
              className="text-lg font-semibold text-amber-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Event Statistics
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-700/50 rounded-xl p-4 border border-amber-500/30 flex items-center gap-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl">{stat.icon}</div>
                  <div>
                    <div className="text-amber-500 font-bold text-xl">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.h3
              className="text-lg font-semibold text-amber-500 mt-6 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Traffic Flow Metrics
            </motion.h3>
            <motion.div
              className="bg-gray-700/50 rounded-xl p-4 border border-amber-500/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 flex items-center justify-center text-gray-400">
                [Traffic Flow Visualization]
              </div>
              <div className="mt-4 text-sm text-gray-300">
                Our real-time monitoring ensured smooth traffic flow with zero congestion points.
              </div>
            </motion.div>
          </div>
        )}
        
        {activeTab === 'solutions' && (
          <div>
            <motion.h3
              className="text-lg font-semibold text-amber-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Our Solutions
            </motion.h3>
            <div className="space-y-4">
              {[
                { title: "Custom Traffic Plan", description: "Tailored strategy addressing event-specific requirements and local conditions." },
                { title: "Advanced Signage", description: "Clear, visible signage with real-time updates for changing conditions." },
                { title: "Staff Coordination", description: "Trained personnel at key locations with centralized communication." }
              ].map((solution, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-700/50 rounded-xl p-4 border border-amber-500/30"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500/20 text-amber-500 rounded-full p-2">
                      <TrafficIcon type="barricade" />
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-500 mb-1">{solution.title}</h4>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.h3
              className="text-lg font-semibold text-amber-500 mt-8 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Results Achieved
            </motion.h3>
            <motion.div
              className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-amber-500/20 text-amber-500 rounded-full p-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13L9 17L19 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Zero traffic incidents, 40% reduction in congestion, and positive stakeholder feedback.</p>
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
            className="px-6 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2"
          >
            View Full Case Study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
            </svg>
          </Link>
          <button className="px-6 py-3 bg-gray-700 text-amber-500 font-medium rounded-full hover:bg-gray-600 transition-colors">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  return (
    <section className="relative w-full py-24 md:py-36 bg-[#1A1A1A] text-white overflow-hidden" id="projects">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Road with Moving Vehicles */}
        <svg className="absolute bottom-0 left-0 w-full h-40" viewBox="0 0 1440 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="160" fill="#1A1A1A" />
          {/* Lane Markings */}
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
          {/* Moving Vehicles */}
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
        
        {/* Floating Traffic Lights */}
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
        
        {/* Glowing Headlights Effect */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <CarIcon />
            <span className="text-sm font-medium text-amber-500">Our Event Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">
              Traffic Management Timeline
            </span>
          </h2>
          
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Explore how we’ve managed traffic for New Zealand’s premier events with precision and innovation.
          </motion.p>
        </motion.div>
      </div>

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
            {projects.map((project, index) => (
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
                  <motion.div
                    className="w-8 h-8"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {index % 2 === 0 ? <TrafficIcon type="light" /> : <TrafficIcon type="sign" />}
                  </motion.div>
                </div>

                {/* Project Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div 
                    whileHover={{ y: -8, boxShadow: "0 12px 48px rgba(255, 214, 0, 0.3)" }}
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-amber-500/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
                  >
                    <motion.div
                      className="absolute inset-0 border-2 border-amber-500 rounded-2xl opacity-0 group-hover:opacity-80"
                      animate={{ opacity: [0, 0.8, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      style={{ boxShadow: "0 0 40px 10px rgba(255, 214, 0, 0.5)" }}
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
                        <span className="px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                          {project.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-amber-500">{project.title}</h3>
                          <p className="text-sm text-amber-300">{project.subtitle}</p>
                        </div>
                        <motion.button 
                          onClick={() => setActiveProject(index)}
                          className="p-2 bg-gray-700 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
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
                        {project.stats.map((stat, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gray-800/50 rounded-lg p-2 text-center border border-amber-500/30"
                            initial={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-amber-500 font-bold text-lg">{stat.value}</div>
                            <div className="text-xs text-gray-400">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div
                        className="mt-4"
                        whileHover={{ x: 5 }}
                      >
                        {/* <Link
                          to={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-colors text-sm"
                        >
                          View Case Study
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5L21 12M21 12L14 19M21 12H3"/>
                          </svg>
                        </Link> */}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <ProjectModal project={projects[activeProject]} onClose={() => setActiveProject(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;