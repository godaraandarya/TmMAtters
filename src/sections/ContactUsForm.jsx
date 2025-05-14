import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaRoad, FaLinkedin, FaFacebook } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const inputVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

const buttonVariants = {
  hover: { scale: 1.02, backgroundColor: '#FBBF24', transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

const iconVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } },
};

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    meetingDateTime: null,
  });
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, meetingDateTime: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);
    const toastId = toast.loading('Sending your message...');

    // Timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      toast.update(toastId, {
        render: 'Request timed out. Please try again.',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
        closeButton: true,
      });
    }, 10000);

    const emailData = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      meeting: formData.meetingDateTime ? formData.meetingDateTime.toLocaleString() : 'Not scheduled',
      to_email: 'godaraandarya@gmail.com',
      fileNote: file ? `A file (${file.name}) was attached. Please contact the sender for the file.` : 'No file attached.',
    };

    // Send to primary recipient
    emailjs
      .send('service_k54f2td', 'template_85ds51f', emailData, 'uDc6Pncwq_Cz2bnfh')
      .then(
        () => {
          // Send to CC recipient
          emailjs
            .send(
              'service_k54f2td',
              'template_85ds51f',
              { ...emailData, to_email: 'Nikita@tmmatters.co.nz' },
              'uDc6Pncwq_Cz2bnfh'
            )
            .then(
              () => {
                clearTimeout(timeoutId);
                toast.update(toastId, {
                  render: "Message Sent! We'll get back to you soon.",
                  type: 'success',
                  isLoading: false,
                  autoClose: 5000,
                  closeButton: true,
                });
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                  meetingDateTime: null,
                });
                setFile(null);
                setIsLoading(false);
              },
              (error) => {
                clearTimeout(timeoutId);
                toast.update(toastId, {
                  render: 'Error sending message to CC recipient. Please try again.',
                  type: 'error',
                  isLoading: false,
                  autoClose: 5000,
                  closeButton: true,
                });
                console.error('CC email error:', error.text);
                setIsLoading(false);
              }
            );
        },
        (error) => {
          clearTimeout(timeoutId);
          toast.update(toastId, {
            render: 'Error sending message. Please try again.',
            type: 'error',
            isLoading: false,
            autoClose: 5000,
            closeButton: true,
          });
          console.error('Primary email error:', error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div id="contact-us" className="py-12 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            {[...Array(18)].map((_, i) => (
              <motion.rect
                key={i}
                x={i * 80 + 20}
                y="50"
                width="40"
                height="6"
                rx="3"
                fill="#FFD600"
                opacity="0.6"
                initial={{ x: i * 80 + 20 }}
                animate={{ x: i * 80 - 1440 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />
            ))}
          </g>
        </svg>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full">
            <FaEnvelope className="text-amber-400 text-lg" />
            <span className="text-sm font-medium text-amber-400">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Contact Us
            </span>
          </h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Reach out to discuss your traffic management needs or schedule a consultation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card: Company Information */}
          <motion.div
            className="relative bg-[#1F1F1F] rounded-xl p-6 shadow-lg border border-amber-500/30 group"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 12px 48px rgba(251, 191, 36, 0.3)" }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-80 pointer-events-none"
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 40px 10px rgba(251, 191, 36, 0.5)" }}
            />
            <div className="flex items-center mb-4">
              <FaRoad className="text-amber-500 text-2xl mr-2" aria-hidden="true" />
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                TM Matters
              </h2>
            </div>
            <div className="space-y-3 text-sm text-gray-300 mb-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-400 mt-0.5 mr-2 text-sm" aria-hidden="true" />
                <a
                  href="https://maps.app.goo.gl/2nX8X9vFKB3h4aJ48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="View TM Matters address on Google Maps"
                >
                  Unit 7, 2 William Lewis Drive, Sockburn, Christchurch 8042
                </a>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-amber-400 mt-0.5 mr-2 text-sm" aria-hidden="true" />
                <a
                  href="tel:+64800866247"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Call TM Matters Non-Emergency"
                >
                  +64 800 866 247 (Non-Emergency)
                </a>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-amber-400 mt-0.5 mr-2 text-sm" aria-hidden="true" />
                <a
                  href="tel:+64800866627"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Call TM Matters Emergency On-Call Service"
                >
                  +64 800 866 627 (Emergency On-Call Service)
                </a>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-amber-400 mt-0.5 mr-2 text-sm" aria-hidden="true" />
                <a
                  href="mailto:here4you@tmmatters.co.nz"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Email TM Matters"
                >
                  here4you@tmmatters.co.nz
                </a>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <motion.a
                href="https://www.linkedin.com/company/traffic-management-matters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                variants={iconVariants}
                whileHover="hover"
                aria-label="TM Matters on LinkedIn"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/tmmatters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                variants={iconVariants}
                whileHover="hover"
                aria-label="TM Matters on Facebook"
              >
                <FaFacebook size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Card: Contact Form */}
          <motion.div
            className="relative bg-[#1F1F1F] rounded-xl p-6 shadow-lg border border-amber-500/30 group"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 12px 48px rgba(251, 191, 36, 0.3)" }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-amber-400 rounded-xl opacity-0 group-hover:opacity-80 pointer-events-none"
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ boxShadow: "0 0 40px 10px rgba(251, 191, 36, 0.5)" }}
            />
            <div className="flex items-center mb-4">
              <FaRoad className="text-amber-500 text-2xl mr-2" aria-hidden="true" />
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Contact Us
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <motion.div variants={inputVariants} className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    aria-required="true"
                    aria-label="Your name"
                    className="w-full px-3 py-2 text-xs border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50 hover:border-amber-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    aria-required="true"
                    aria-label="Your email"
                    className="w-full px-3 py-2 text-xs border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50 hover:border-amber-400"
                  />
                </div>
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  aria-label="Your phone number"
                  className="w-full px-3 py-2 text-xs border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50 hover:border-amber-400"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  aria-required="true"
                  aria-label="Your message"
                  className="w-full px-3 py-2 text-xs border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50 hover:border-amber-400"
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <label htmlFor="file" className="block text-xs font-medium text-gray-300 mb-1">
                  Attach File
                </label>
                <input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  disabled={isLoading}
                  aria-label="Attach a file"
                  className="w-full px-3 py-2 text-xs border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all disabled:opacity-50 hover:border-amber-400"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Note: Files are not sent directly. We’ll contact you to retrieve the file.
                </p>
              </motion.div>
              <motion.div variants={inputVariants} className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="meeting" className="block text-xs font-medium text-gray-300 mb-1">
                    Meeting Time
                  </label>
                  <DatePicker
                    id="meeting"
                    selected={formData.meetingDateTime}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMM d, h:mm aa"
                    minDate={new Date()}
                    className="w-full px-3 py-2 text-xs border border-gray-700 rounded-md bg-gray-800 text-gray-200 focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all hover:border-amber-400"
                    placeholderText="Select time"
                    aria-label="Select meeting date and time"
                  />
                </div>
                <motion.div className="flex items-end">
                  <motion.button
                    type="submit"
                    className="w Cyclone full px-3 py-2 text-xs font-medium rounded-md text-black bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:opacity-50 transition-all"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    disabled={isLoading}
                    aria-label="Send message"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="text-xs"
        progressClassName="bg-amber-500"
      />
    </div>
  );
};

export default ContactUsForm;