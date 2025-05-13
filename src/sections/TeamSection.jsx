import React from 'react';
import { FaLinkedinIn, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import founder from '../assets/goadara_Sir.png';
import founder2 from '../assets/c50befd1-619c-4cba-bffd-4f7fd976bb51.jpeg';

const TeamSection = () => {
  const themeColor = '#FFD600'; // Primary amber color
  const themeDark = '#1A1A1A'; // Dark background

  const founders = [
    {
      name: "Chaitanya Godara",
      role: "Managing Director & Head of Innovation",
      bio: "Leads strategic direction, vision, and innovation initiatives. Oversees prototyping, development, and implementation of IoT and AI-driven products. Responsible for ensuring technical excellence, staying ahead of industry trends, and maintaining competitive advantage. Drives partnerships, stakeholder relationships, and company growth.",
      quote: "True innovation solves real problems, not just creates shiny features.",
      image: founder,
      linkedin: "https://www.linkedin.com/in/chaitanya-godara-9853b9b/",
      accentColor: "#FBBF24" // Lighter amber for distinction
    },
    {
      name: "Nikita Arya",
      role: "Director of Operations & Product Design",
      bio: "Oversees product development, particularly design, aesthetics, usability, and quality control. Manages compliance, approvals, and operational excellence for all products and services. Leads team coordination, ensuring efficient workflow, strong team morale, and timely project delivery. Guides the company's branding and market positioning strategies, ensuring alignment with company values and vision.",
      quote: "Great code is like poetry - every line should serve a purpose.",
      image: founder2,
      linkedin: "https://www.linkedin.com/in/nikita-arya-502583150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      accentColor: "#FFD600" // Primary amber for distinction
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative py-10 px-2 sm:px-2 lg:px-6"
      style={{ backgroundColor: themeDark }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-serif tracking-tight"
            style={{ color: themeColor }}
          >
            Meet Our Visionaries
          </h2>
          <div 
            className="w-16 h-1 mx-auto mb-4 rounded-full"
            style={{ backgroundColor: themeColor }}
          ></div>
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: '#D1D5DB' }} // Light gray for secondary text
          >
            The brilliant minds shaping our company's future
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <div 
                className="h-full rounded-2xl overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2"
                style={{
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
                  backgroundColor: '#2A2A2A', // Slightly lighter dark for cards
                  border: '1px solid rgba(251, 191, 36, 0.2)' // Subtle amber border
                }}
              >
                {/* Image and Info */}
                <div className="p-6 flex flex-col md:flex-row items-center">
                  {/* Founder Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mb-4 md:mb-0 md:mr-6"
                  >
                    <div 
                      className="w-32 h-32 rounded-full overflow-hidden border-4 relative"
                      style={{ 
                        borderColor: founder.accentColor,
                        boxShadow: `0 4px 12px rgba(251, 191, 36, 0.2)`
                      }}
                    >
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Founder Info */}
                  <div className="text-center md:text-left flex-1">
                    <h3 
                      className="text-xl font-bold mb-1 font-serif"
                      style={{ color: '#FFFFFF' }} // White for primary text
                    >
                      {founder.name}
                    </h3>
                    <p 
                      className="text-base mb-3 font-medium"
                      style={{ color: founder.accentColor }}
                    >
                      {founder.role}
                    </p>
                    <p 
                      className="text-gray-400 mb-4 leading-relaxed text-sm"
                      style={{ color: '#D1D5DB' }} // Light gray for secondary text
                    >
                      {founder.bio}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <div className="flex justify-center mb-6 px-6">
                  <motion.a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium px-5 py-2 rounded-full transition-all duration-300 relative overflow-hidden"
                    style={{
                      backgroundColor: founder.accentColor,
                      color: '#1A1A1A', // Dark text for contrast on amber
                      boxShadow: `0 2px 8px rgba(251, 191, 36, 0.3)`
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 4px 12px rgba(251, 191, 36, 0.5)`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedinIn className="text-base" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </motion.a>
                </div>

                {/* Quote Section */}
                <div 
                  className="px-6 py-4 border-t"
                  style={{ 
                    borderColor: 'rgba(251, 191, 36, 0.1)',
                    backgroundColor: 'rgba(251, 191, 36, 0.02)'
                  }}
                >
                  <div className="flex items-start">
                    <FaQuoteLeft 
                      className="mt-1 mr-2 flex-shrink-0 text-sm" 
                      style={{ color: founder.accentColor }} 
                    />
                    <blockquote 
                      className="italic text-gray-300 font-serif text-sm"
                      style={{ color: '#D1D5DB' }} // Light gray for quote text
                    >
                      {founder.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;