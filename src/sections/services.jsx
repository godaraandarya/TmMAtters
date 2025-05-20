import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "TMP DESIGN",
    icon: (
      <motion.svg
        className="w-12 h-12 text-neon-purple"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
      >
        <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 9h6v6H9z" fill="currentColor" />
        <motion.circle cx="12" cy="12" r="1.5" fill="black" animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
      </motion.svg>
    ),
    description:
      "Expert TMP Design Services in New Zealand | TMMatters",
    detailedDescription:
      "We provide complete on-site support, including the setup of signage, barriers, detours, lane closures, and real-time traffic control using stop/slow bat operators. Our services are available day or night, with rapid deployment and full compliance with all safety and regulatory standards.At Traffic Management Matters, safety isn’t just a priority — it’s our responsibility.",
    gradient: "from-neon-purple to-indigo-500",
  },{
    title: "Traffic Management",
    icon: (
      <motion.svg
        className="w-12 h-12 text-neon-orange"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <rect x="7" y="2" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
        <motion.circle cx="12" cy="7" r="2" fill="currentColor" animate={{ fill: ["#FF6F61", "#FFD700", "#FF6F61"] }} transition={{ repeat: Infinity, duration: 3 }} />
        <motion.circle cx="12" cy="12" r="2" fill="currentColor" animate={{ fill: ["#FFD700", "#FF6F61", "#FFD700"] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} />
        <motion.circle cx="12" cy="17" r="2" fill="currentColor" animate={{ fill: ["#FF6F61", "#FFD700", "#FF6F61"] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} />
      </motion.svg>
    ),
    description:
      "At Traffic Management Matters, we specialize in delivering professional, reliable on-site traffic management services ",
    detailedDescription:
      " Whether you're managing a roadwork site, construction project, special event, or emergency response, our certified traffic controllers are equipped to handle it with precision and care.We provide complete on-site support, including the setup of signage, barriers, detours, lane closures, and real-time traffic control using stop/slow bat operators. Our services are available day or night, with rapid deployment and full compliance with all safety and regulatory standards. At Traffic Management Matters, safety isn’t just a priority — it’s our responsibility.",
    gradient: "from-neon-orange to-pink-500",
  },
  {
    title: "Training",
    icon: (
      <motion.svg
        className="w-12 h-12 text-neon-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ rotate: 0, scale: 1 }}
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <rect x="3" y="6" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <motion.circle cx="12" cy="18" r="1" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
      </motion.svg>
    ),
    description:
      "Expert-led training for traffic professionals, covering safety, control, and modern traffic management techniques.",
    detailedDescription:
      "Our training programs are designed for traffic management professionals, offering hands-on workshops and certifications in safety protocols, traffic control strategies, and the use of modern technologies. Led by industry experts, our courses ensure participants are equipped to handle complex traffic scenarios with confidence and precision.",
    gradient: "from-neon-blue to-purple-500",
  },
  {
    title: "Events & Consultancy ",
    icon: (
      <motion.svg
        className="w-12 h-12 text-neon-green"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <motion.circle cx="17" cy="17" r="1.5" fill="currentColor" animate={{ fill: ["#00FF77", "#FFD700", "#00FF77"] }} transition={{ repeat: Infinity, duration: 2 }} />
      </motion.svg>
    ),
    description:
      "We provide expert traffic management for events like marathons, races, and sports gatherings — ensuring safe, smooth movement for participants, spectators, and the public.",
    detailedDescription:
    "At Traffic Management Matters, we provide professional and dependable event traffic management services to support the safe, smooth, and efficient movement of vehicles and pedestrians during events of all types and scales.From marathons, fun runs, and cycling races to stadium sports events, festivals, parades, and community celebrations, our experienced team handles every aspect of traffic and crowd control. We design tailored traffic management plans, install appropriate signage and barriers, and deploy certified traffic controllers to manage road closures, detours, parking, and pedestrian flow.We work closely with event organizers, local councils, and emergency services to ensure your event complies with all regulations while minimizing disruption to the public. Whether it’s a city-wide race or a local community gathering, Traffic Management Matters is your trusted partner in delivering safe and successful events.",
     gradient: "from-neon-green to-teal-500",
  },
  {
    title: "Engineering",
    icon: (
      <motion.svg
        className="w-12 h-12 text-neon-pink"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ y: 0, opacity: 0.6 }}
        animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>
    ),
    description:
      "Our engineering team provides expert support for traffic-related resource consents across New Zealand, including Traffic Impact Assessments (TIAs) and compliance with council and NZTA requirements",
    detailedDescription:
      "At TMMatters, we pride ourselves on being a leading provider of top-notch  engineering services in New Zealand. With a commitment to excellence, safety, and innovation, we offer a comprehensive range of solutions designed to optimize road traffic flow and ensure the safety of all road users.",
    gradient: "from-neon-pink to-red-500",
  },
  {
    title: "Equipment Hire",
    icon: (
      <motion.svg
      className="w-12 h-12 text-neon-yellow"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      initial={{ y: 0, scale: 1 }}
      animate={{ y: [0, 6, 0], scale: [1, 1.25, 1] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4L6 20h12L12 4z"
      />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20h12"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 14h8"
      />
    </motion.svg>
    ),
    description:
      "We supply and install traffic management equipment-VMS boards, arrow boards, barriers, signage-ensuring safe, compliant traffic control for projects and events across New Zealand.",
    detailedDescription:
      "At Traffic Management Matters, we supply and set up a full range of traffic management equipment, including signage, cones, temporary traffic lights, VMS boards, TMA, and truck arrow boards for hire. Our team ensures all equipment is installed to meet New Zealand's safety standards, providing efficient, compliant, and reliable solutions for any project or event.",
    gradient: "from-neon-yellow to-orange-500",
  },

];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: 0.15 * i, duration: 0.8, type: "spring", stiffness: 100 },
  }),
};

const popupVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, type: "spring", stiffness: 120 } },
  exit: { opacity: 0, scale: 0.8, y: 50, transition: { duration: 0.3 } },
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden py-16" id="services">
      {/* Background with animated glowing orbs */}
      <motion.div
        className="absolute -top-40 left-1/4 w-[40rem] h-[40rem] bg-neon-orange opacity-20 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 1, y: -50 }}
        animate={{ scale: [1, 1.2, 1], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-neon-blue opacity-15 rounded-full blur-2xl pointer-events-none"
        initial={{ scale: 1, x: 0 }}
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-3/4 w-64 h-64 bg-neon-green opacity-10 rounded-full blur-xl pointer-events-none"
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: [1, 1.15, 1], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Animated SVG road background with moving cars */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 z-0"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ pointerEvents: "none" }}
      >
        <rect width="1440" height="120" fill="transparent" />
        {/* Lane markings with animation */}
        <g>
          {[...Array(18)].map((_, i) => (
            <motion.rect
              key={i}
              x={i * 80 + 20}
              y="60"
              width="40"
              height="8"
              rx="4"
              fill="#FFD700"
              opacity="0.8"
              initial={{ x: i * 80 + 20 }}
              animate={{ x: i * 80 - 1440 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            />
          ))}
        </g>
        {/* Animated car icons */}
        <g>
          <motion.rect
            x="200"
            y="90"
            width="30"
            height="16"
            rx="6"
            fill="#FF6F61"
            opacity="0.9"
            initial={{ x: 200 }}
            animate={{ x: -200 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <motion.rect
            x="900"
            y="80"
            width="30"
            height="16"
            rx="6"
            fill="#00FF77"
            opacity="0.9"
            initial={{ x: 900 }}
            animate={{ x: -900 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
        </g>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Our Services
            </span>
          </h2>
          <motion.p
            className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Cutting-edge solutions to revolutionize traffic management
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`relative bg-gradient-to-br ${service.gradient} rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-500 group overflow-hidden border border-white/10 cursor-pointer`}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 12px 48px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(255, 215, 0, 0.5)",
                borderColor: "#FFD700",
              }}
              onClick={() => handleCardClick(service)}
            >
              {/* Animated glowing background effect */}
              <motion.div
                className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl"
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.4 }}
              />
              {/* Animated traffic cone accent on hover */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: -20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="w-10 h-10" viewBox="0 0 24 24">
                  <polygon points="12,2 19,20 5,20" fill="#FFD700" />
                  <rect x="8" y="16" width="8" height="2" fill="white" />
                  <rect x="9" y="12" width="6" height="2" fill="white" />
                </svg>
              </motion.div>
              <div className="mb-6 relative">
                {service.icon}
                {/* Glowing halo effect behind icon */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-current opacity-20 blur-lg"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-100 text-base font-light">{service.description}</p>
              {/* Animated glowing border */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-300 opacity-0 group-hover:opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{
                  boxShadow: "0 0 40px 10px rgba(255, 215, 0, 0.5)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup for service details */}
      {selectedService && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={handleClosePopup}
  >
    <motion.div
      className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl p-8 max-w-lg w-full mx-4 text-white shadow-2xl border border-white/10 max-h-[90vh] overflow-hidden"
      variants={popupVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
        onClick={handleClosePopup}
        aria-label="Close popup"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Fixed Header */}
      <div className="flex items-center justify-center mb-4">
        {selectedService.icon}
      </div>
      <h3 id="popup-title" className="text-3xl font-bold text-center mb-2 text-yellow-300">
        {selectedService.title}
      </h3>
      <p id="popup-description" className="text-gray-200 text-lg text-center mb-4">
        {selectedService.description}
      </p>

      {/* Scrollable Body */}
      <div className="overflow-y-auto pr-2" style={{ maxHeight: "50vh" }}>
        <p className="text-gray-300 text-base leading-relaxed">
          {selectedService.detailedDescription}
        </p>
      </div>
    </motion.div>
  </motion.div>
)}

    </section>
  );
};

export default ServicesSection;