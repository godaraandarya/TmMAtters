import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaAddressBook, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-11.png';

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterClick = () => {
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/">
              <img src={logo} alt="TM Matters Logo" className="h-16 w-auto mx-auto" />
            </Link>
          </motion.div>
        </div>

        {/* Main Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaEnvelope className="text-yellow-400 mr-2" />
              <span className="border-b-2 border-yellow-400 pb-1">Contact</span>
            </h3>
            <ul className="space-y-4 text-gray-300 text-base">
              <li className="flex items-start">
                <FaEnvelope className="text-yellow-400 mt-1 mr-2 flex-shrink-0" aria-hidden="true" />
                <motion.a
                  href="mailto:here4you@tmmatters.co.nz"
                  className="hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Email TM Matters"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  here4you@tmmatters.co.nz
                </motion.a>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-yellow-400 mt-1 mr-2 flex-shrink-0" aria-hidden="true" />
                <motion.a
                  href="tel:+64800866247"
                  className="hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Call TM Matters Non-Emergency"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  +64 800 866 247 (Non-Emergency)
                </motion.a>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-yellow-400 mt-1 mr-2 flex-shrink-0" aria-hidden="true" />
                <motion.a
                  href="tel:+64800866627"
                  className="hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Call TM Matters Emergency On-Call Service"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  +64 800 866 627 (Emergency On-Call Service)
                </motion.a>
              </li>
              <li className="flex items-start">
                <FaAddressBook className="text-yellow-400 mt-1 mr-2 flex-shrink-0" aria-hidden="true" />
                <motion.a
                  href="https://maps.app.goo.gl/2nX8X9vFKB3h4aJ48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-colors duration-300"
                  aria-label="View TM Matters address on Google Maps"
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Unit 7, 2 William Lewis Drive, Sockburn, Christchurch 8042
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaLinkedin className="text-yellow-400 mr-2" />
              <span className="border-b-2 border-yellow-400 pb-1">Connect</span>
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/company/traffic-management-matters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                aria-label="TM Matters on LinkedIn"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/tmmatters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                aria-label="TM Matters on Facebook"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/traffic_management_matters/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="TM Matters on Instagram"
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaEnvelope className="text-yellow-400 mr-2" />
              <span className="border-b-2 border-yellow-400 pb-1">Newsletter</span>
            </h3>
            <div className="flex flex-col space-y-3">
              <p className="text-gray-300 text-sm">
                Stay updated with our latest news and offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 text-base bg-gray-800 text-white border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
                <motion.button
                  onClick={handleNewsletterClick}
                  className="px-4 py-2 bg-yellow-500 text-gray-900 font-medium rounded-r-lg hover:bg-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join
                </motion.button>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaAddressBook className="text-yellow-400 mr-2" />
              <span className="border-b-2 border-yellow-400 pb-1">Our Location</span>
            </h3>
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg border border-yellow-400/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.7661942106623!2d172.5537169155063!3d-43.54284597912547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bf7e8f8c8b7%3A0x7e8c4d8f1e8f6d1c!2s2%20William%20Lewis%20Drive%2C%20Sockburn%2C%20Christchurch%208042%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1698765432109!5m2!1sen!2snz"
                width="100%"
                height="200"
                style={{ border: 0, filter: 'grayscale(20%) contrast(120%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TM Matters Location - Christchurch"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TM Matters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;