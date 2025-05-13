import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const RFQForm = () => {
  const [formData, setFormData] = useState({
    worksiteContractor: "",
    principalOwner: "",
    worksiteDetails: "",
    locationOfWorks: "",
    startDateTime: "",
    endDateTime: "",
    tmRequirement: "",
    trafficManagementPlan: "no",
    siteEstablishment: "no",
    dryGearHire: "no",
    siteChecks: "no",
    planningForTender: "no",
    keyDetails: "",
    email: "",
  });

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      ...formData,
      to_email: "Nikita@tmmatters.co.nz"||"godaraandarya@gmail.com",
      
      fileNote: file ? `A file (${file.name}) was attached. Please contact the sender for the file.` : "No file attached.",
    };

    emailjs
      .send("service_22pf5me", "template_83idybm", emailData, "uDc6Pncwq_Cz2bnfh")
      .then(
        (result) => {
          setMessage("RFQ Sent! We'll respond soon.");
          console.log(result.text);
          setFormData({
            worksiteContractor: "",
            principalOwner: "",
            worksiteDetails: "",
            locationOfWorks: "",
            startDateTime: "",
            endDateTime: "",
            tmRequirement: "",
            trafficManagementPlan: "no",
            siteEstablishment: "no",
            dryGearHire: "no",
            siteChecks: "no",
            planningForTender: "no",
            keyDetails: "",
            email: "",
          });
          setFile(null);
        },
        (error) => {
          setMessage("Error sending RFQ. Try again.");
          console.error(error.text);
        }
      );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const buttonVariants = {
    hover: { 
      scale: 1.03,
      boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-2 sm:px-4 bg-gray-900">
      <motion.div
        className="w-full max-w-7xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header with traffic light theme */}
        <div className="bg-gray-900 p-4 border-b border-amber-500/30 relative">
          <div className="flex items-center justify-center space-x-2 mb-1">
            {["red", "yellow", "green"].map((color) => (
              <motion.div
                key={color}
                className={`w-3 h-3 rounded-full bg-${color}-500 shadow-md`}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: color === "red" ? 0 : color === "yellow" ? 0.4 : 0.8,
                }}
              />
            ))}
          </div>
          <motion.h1
            className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Traffic Management RFQ
          </motion.h1>
          <motion.p
            className="text-center text-gray-400 text-sm mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Request a quote for your traffic management needs
          </motion.p>
        </div>

        {message && (
          <motion.div
            className={`mx-4 mt-3 p-2 rounded-lg text-center font-medium ${
              message.includes("Error") ? "bg-red-900/50 text-red-300" : "bg-amber-900/30 text-amber-300"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="space-y-3">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">Worksite Contractor *</label>
                <input
                  type="text"
                  name="worksiteContractor"
                  value={formData.worksiteContractor}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 placeholder-gray-400 text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">Principal/Owner</label>
                <input
                  type="text"
                  name="principalOwner"
                  value={formData.principalOwner}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 placeholder-gray-400 text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">Location of Works</label>
                <input
                  type="text"
                  name="locationOfWorks"
                  value={formData.locationOfWorks}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 placeholder-gray-400 text-sm"
                />
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">Start Date/Time *</label>
                <input
                  type="datetime-local"
                  name="startDateTime"
                  value={formData.startDateTime}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">End Date/Time *</label>
                <input
                  type="datetime-local"
                  name="endDateTime"
                  value={formData.endDateTime}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 text-sm"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">TM Requirement</label>
                <select
                  name="tmRequirement"
                  value={formData.tmRequirement}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="Basic signage and cones">Basic signage and cones</option>
                  <option value="Pedestrian safety">Pedestrian safety</option>
                  <option value="Partial road closure">Partial road closure</option>
                  <option value="Full road closure">Full road closure</option>
                  <option value="Complex traffic management">Complex traffic management</option>
                </select>
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-300">Services Needed</label>
                <div className="space-y-1">
                  {[
                    { name: "trafficManagementPlan", label: "Traffic Management Plan" },
                    { name: "siteEstablishment", label: "Site Establishment" },
                    { name: "dryGearHire", label: "Dry Gear Hire" },
                    { name: "siteChecks", label: "24 Hour Site Checks" },
                    { name: "planningForTender", label: "Planning for Tender" },
                  ].map((service) => (
                    <div key={service.name} className="flex items-center">
                      <input
                        type="checkbox"
                        id={service.name}
                        name={service.name}
                        checked={formData[service.name] === "yes"}
                        onChange={(e) =>
                          handleChange({
                            target: {
                              name: service.name,
                              value: e.target.checked ? "yes" : "no",
                            },
                          })
                        }
                        className="h-4 w-4 text-amber-600 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
                      />
                      <label htmlFor={service.name} className="ml-2 text-sm text-gray-300">
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Full width fields */}
          <div className="mt-4 space-y-3">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300">Worksite Details</label>
              <textarea
                name="worksiteDetails"
                rows="2"
                value={formData.worksiteDetails}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 placeholder-gray-400 text-sm"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300">Key Details</label>
              <textarea
                name="keyDetails"
                rows="2"
                value={formData.keyDetails}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 placeholder-gray-400 text-sm"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300">Attachments</label>
              <div className="flex items-center space-x-3">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amber-500/20 file:text-amber-400 hover:file:bg-amber-500/30"
                />
                <span className="text-xs text-gray-500">Or email to: tmp@tmmatters.co.nz</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-300">Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-200 placeholder-gray-400 text-sm"
              />
            </motion.div>
          </div>

          <motion.div className="mt-6 text-center" variants={itemVariants}>
            <motion.button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-md text-sm"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Submit Request
              <span className="ml-1.5">🚦</span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default RFQForm;