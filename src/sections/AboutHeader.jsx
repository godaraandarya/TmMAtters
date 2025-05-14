import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import aboutusimages from '../assets/temporary-traffic-management-image.jpg';

// Animation constants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.8
    }
  }
};

const floatingVariants = {
  float: {
    y: [-10, 10],
    transition: {
      y: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
    }
  }
};

const gradientVariants = {
  initial: { backgroundPosition: '0% 50%' },
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: { duration: 12, repeat: Infinity, ease: "linear" }
  }
};

// Memoized particle generation
const useParticles = () => useMemo(() => {
  return Array.from({ length: 15 }).map((_, i) => {
    const size = `w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2}`;
    const color = i % 3 === 0 ? 'bg-amber-400' : i % 2 === 0 ? 'bg-blue-400' : 'bg-white';
    const position = { x: Math.random() * 100, y: Math.random() * 100 };
    const delay = Math.random() * 5;

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0], x: [0, 100], y: [0, -50] }}
        transition={{ duration: 20, delay, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
        className={`absolute rounded-full ${color} ${size}`}
        style={{ left: `${position.x}%`, top: `${position.y}%`, filter: 'blur(1px)' }}
      />
    );
  });
}, []);

const AboutHeader = () => {
  const particles = useParticles();

  return (
    <div id="about" className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex items-center">
      {/* Particles */}
      {particles}

      {/* Floating Blurs */}
      <motion.div variants={floatingVariants} animate="float" className="absolute top-1/4 left-1/6 w-16 h-16 bg-amber-400 rounded-full opacity-20 blur-xl" />
      <motion.div variants={floatingVariants} animate="float" className="absolute top-1/3 right-1/5 w-24 h-24 bg-blue-500 rounded-full opacity-15 blur-xl" />

      {/* Traffic Light */}
      <div className="absolute top-10 right-10 w-16 h-40 bg-black rounded-lg flex flex-col items-center justify-around py-2 z-0 opacity-30">
        {['red', 'yellow', 'green'].map((color, index) => (
          <motion.div
            key={color}
            animate={{
              opacity: [0.3, 1, 0.3],
              boxShadow: [`0 0 0px ${color}`, `0 0 20px ${color}`, `0 0 0px ${color}`]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: index * 2 }}
            className={`w-10 h-10 rounded-full bg-${color}-500`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side */}
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={aboutusimages}
                alt="Road Planning Design"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-white text-lg font-medium"
                >
                  <span className="bg-amber-500/90 px-3 py-1 rounded-md">Award-Winning Road Design 2023</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-2 gap-4">
              {[
                { title: "Precision Planning", content: "Optimized road designs for safety and flow", icon: "🛤️" },
                { title: "Smart Signage", content: "Clear symbols for better navigation", icon: "🚸" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.3)" }}
                  className="bg-gray-800/80 backdrop-blur-sm p-5 rounded-xl border border-amber-500/20 hover:border-amber-500/50 transition-all"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-amber-400 font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className="lg:w-1/2">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants} className="inline-block mb-6">
                <motion.span 
                  className="px-5 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30"
                  whileHover={{ scale: 1.05 }}
                >
                  🗺️ Pioneering Road Planning Since 2010
                </motion.span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                <motion.span
                  style={{
                    backgroundImage: 'linear-gradient(45deg, #f59e0b, #d97706, #fbbf24, #d97706, #f59e0b)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                  variants={gradientVariants}
                  initial="initial"
                  animate="animate"
                  className="block"
                >
                  About RoadPlan Innovations
                </motion.span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
              >
                RoadPlan Innovations leads the way in <span className="text-amber-400 font-medium">traffic management and road planning design</span>. With over a decade of experience, we create safer, more efficient roads using advanced planning and clear traffic symbols.
              </motion.p>

              {/* Bullet Points */}
              <motion.div variants={itemVariants} className="space-y-5 mb-8">
                {[
                  "Expert road planning with real-time traffic analysis",
                  "Designed 100+ projects with optimized traffic flow",
                  "Reduced congestion by 40% through proper road design",
                  "Award-winning traffic signage and symbols"
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start" whileHover={{ x: 5 }}>
                    <div className="flex-shrink-0 mt-1">
                      <motion.div 
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="ml-3 text-gray-300 text-lg">{item}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons 
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all relative overflow-hidden"
                >
                  <a href="#services" className="relative z-10 text-white hover:underline">
                    Explore Road Designs
                  </a>
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-amber-500 text-amber-400 font-bold rounded-full hover:bg-amber-500/10 transition-all relative"
                >
                  <a href="#our-team" className="relative z-10">Meet Our Planners</a>
                </motion.button>
              </motion.div>*/}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Cones */}
      <motion.div className="absolute bottom-10 left-10 w-16 h-24 bg-amber-500 clip-traffic-cone"
        initial={{ y: 0 }} animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-20 right-20 w-16 h-24 bg-amber-500 clip-traffic-cone"
        initial={{ y: 0 }} animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Traffic cone CSS */}
      <style>{`
        .clip-traffic-cone {
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
};

export default AboutHeader;
