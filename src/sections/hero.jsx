import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import bgImage from '../assets/gettyimages-1488425955-640x640.jpg';

const floatingEmojis = ['🚦', '🚗', '🚙'];

const HeroSection = () => {
  const [ctaActive, setCtaActive] = useState(false);
  const controls = useAnimation();

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative w-full min-h-screen pt-6 bg-black text-white overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, zIndex: 0 }}
        initial={{ scale: 1.2, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#00283cB3] to-[#001428CC]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        aria-hidden="true"
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${i % 2 ? 'text-amber-400' : 'text-yellow-300'}`}
            style={{
              left: `${10 + i * 10}%`,
              top: `${15 + i * 8}%`,
              fontSize: `${1 + (i % 3)}rem`,
              opacity: 0.4,
            }}
            animate={{
              y: [0, i % 2 ? -15 : 15, 0],
              rotate: [0, i % 2 ? -5 : 5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {floatingEmojis[i % floatingEmojis.length]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <section className="relative py-12 sm:pb-16 lg:pb-20 xl:pb-24 z-10 h-full flex items-center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">
                Introducing Smart Mobility Solutions
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                  Traffic Management
                </span>{' '}
                <span className="text-amber-400">Matters</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Revolutionizing urban mobility with AI-powered traffic optimization, real-time analytics, and sustainable infrastructure solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    setCtaActive(true);
                    setTimeout(() => setCtaActive(false), 800);
                    scrollToElement('contact-us');
                  }}
                  className="relative px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ctaActive ? (
                    <>
                      <svg className="animate-spin mr-2 w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0..." />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Contact us
                      
                    </>
                  )}
                </motion.button>

                <motion.button
                  onClick={() => scrollToElement('about')}
                  className="px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-amber-400/50 rounded-full hover:bg-amber-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              className="hidden lg:flex flex-col gap-6"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              {/* Cards */}
              {[
                { value: '30%+', text: 'Reduction in traffic congestion', width: '70%' },
                { value: '24/7', text: 'Real-time monitoring & response' },
                { value: '100+', text: 'Cities transformed worldwide' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-amber-900/50 to-orange-900/50 p-6 rounded-2xl border border-amber-400/20 backdrop-blur-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-amber-400 mb-2">{item.value}</div>
                  <div className="text-amber-200">{item.text}</div>
                  {item.width && (
                    <div className="mt-4 h-2 bg-amber-900/50 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-amber-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: item.width }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  )}
                  {item.value === '100+' && (
                    <div className="mt-4 flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="w-3 h-3 bg-amber-400 rounded-full"
                          animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
                          transition={{ delay: i * 0.3, duration: 1.5, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut',
        }}
        onClick={() => window.scrollBy({ top: window.innerHeight - 100, behavior: 'smooth' })}
      >
        <div className="w-12 h-20 rounded-full border-2 border-amber-400 flex justify-center p-2">
          <motion.div
            className="w-2 h-2 bg-amber-400 rounded-full mt-2"
            animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
        <span className="text-xs text-amber-400 mt-2 font-medium">Explore More</span>
      </motion.div>
    </header>
  );
};

export default HeroSection;
