import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/gettyimages-1488425955-640x640.jpg';

const HeroSection = () => {
  const [ctaActive, setCtaActive] = useState(false);

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Vector icons for floating elements
  const vectorIcons = [
    // Traffic Light
    <svg key="traffic-light" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2v2m0 18v2m-4-18h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2zm0 4a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z"
      />
    </svg>,
    // Road Sign
    <svg key="road-sign" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2v10m0 0l-4-4m4 4l4-4M6 18h12"
      />
    </svg>,
    // Stop Sign
    <svg key="stop-sign" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h18l-3 18H6L3 3zm6 6h6v6H9V9z"
      />
    </svg>,
    // Map
    <svg key="map" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447-2.724A1 1 0 0021 13.382V2.618a1 1 0 00-1.447-.894L15 4m0 13V4"
      />
    </svg>,
  ];

  // Stats icons
  const statsIcons = [
    // Magnifying Glass (Detection Accuracy)
    <svg key="magnify" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>,
    // Bolt (Traffic Flow)
    <svg key="bolt" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>,
    // Road (Roads Mapped)
    <svg key="road" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16V6a1 1 0 00-2 0v10a1 1 0 002 0zm-9-4h2m14 0h2m-9 4h2m-2-8h2"
      />
    </svg>,
  ];

  return (
    <header className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
        initial={{ scale: 1.3, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#00283cB3] to-[#001428CC]"
        aria-hidden="true"
      />

      {/* Floating Vector Icons */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 2 ? 'text-amber-400' : 'text-yellow-300'}`}
            style={{
              left: `${5 + (i * 13) % 90}%`,
              top: `${10 + (i * 10) % 80}%`,
              opacity: 0.7,
            }}
            animate={{
              y: [0, i % 2 ? -30 : 30, 0],
              x: [0, i % 3 ? 15 : -15, 0],
              rotate: [0, i % 2 ? -15 : 15, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            {vectorIcons[i % vectorIcons.length]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <section className="relative py-12 sm:pb-16 lg:pt-25 xl:pt-24 z-10 h-full flex items-center justify-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
            {/* Left Column */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-amber-400/20 w-full max-w-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Advanced Traffic Managment
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Safe &
                </motion.span>
                <motion.span
                  className="block text-amber-400"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                   Reliable Traffic Solutions
                </motion.span>
              </h1>

              <motion.p
                className="text-lg text-gray-300 mb-8 leading-relaxed flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447-2.724A1 1 0 0021 13.382V2.618a1 1 0 00-1.447-.894L15 4m0 13V4"
                  />
                </svg>
                Comprehensive traffic management solutions ensuring safety, compliance, and efficiency across New Zealand.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    setCtaActive(true);
                    setTimeout(() => setCtaActive(false), 800);
                    scrollToElement('contact-us');
                  }}
                  className="relative px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245, 158, 11, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {ctaActive ? (
                      <>
                        <svg className="animate-spin mr-2 w-5 h-5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                          <path
                            fill="currentColor"
                            className="opacity-75"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Mapping Route...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Contact Us
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>

                <motion.button
                  onClick={() => scrollToElement('services')}
                  className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-amber-400/50 rounded-xl hover:bg-amber-400/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, borderColor: '#f59e0b' }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Our Solutions
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Animated Stats */}
            <motion.div
              className="flex flex-col gap-6 w-full max-w-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }}
            >
              {[
                {
                  value: '95%',
                  text: 'Detection Accuracy',
                  barColor: 'bg-amber-400',
                  barWidth: '95%',
                  icon: statsIcons[0],
                },
                {
                  value: '40% Faster',
                  text: 'Traffic Flow Improvement',
                  barColor: 'bg-yellow-500',
                  barWidth: '70%',
                  icon: statsIcons[1],
                },
                {
                  value: '10,000+',
                  text: 'Roads Mapped',
                  barColor: 'bg-amber-500',
                  barWidth: '85%',
                  icon: statsIcons[2],
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-amber-900/50 p-6 rounded-2xl border border-amber-400/20 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-900/50 rounded-xl group-hover:bg-amber-500/20 group-hover:rotate-6 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-gray-200">{item.text}</div>
                      <div className="mt-4 h-2 bg-amber-900/50 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${item.barColor} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: item.barWidth }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
      >
        <div className="w-12 h-20 rounded-full border-2 border-amber-400/50 flex justify-center p-2 group hover:border-amber-400 transition-colors duration-300">
          <motion.div
            className="w-3 h-3 bg-amber-400 rounded-full mt-2 group-hover:bg-yellow-500 transition-colors duration-300"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
        <motion.span
          className="text-sm text-amber-400 mt-2 font-medium tracking-wider"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          EXPLORE SOLUTIONS
        </motion.span>
      </motion.div>
    </header>
  );
};

export default HeroSection;