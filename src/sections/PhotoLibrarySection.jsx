import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Photo Imports (unchanged)
import nighttimeTrafficFlow from "../assets/20220915_144112-_1_-min-scaled.webp";
import urbanIntersectionUpgrade from "../assets/20221213_224042-min-scaled.webp";
import highwaySafetyMeasures from "../assets/20230121_161350-min-scaled.webp";
// import seoulNightCityscape from "../assets/beautyful-traffic-seoul-night-cityscape-south-korea-with-motion-blur.jpg";
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
  { id: 1, title: "Nighttime Traffic Flow", description: "Implementing smart traffic signals to streamline nighttime traffic in a bustling city center.", image: nighttimeTrafficFlow },
  { id: 2, title: "Urban Intersection Upgrade", description: "Upgrading a major intersection with IoT sensors for real-time traffic monitoring.", image: urbanIntersectionUpgrade },
  { id: 3, title: "Highway Safety Measures", description: "Deploying temporary barriers and signage for safe highway construction.", image: highwaySafetyMeasures },
  // { id: 4, title: "Seoul Night Cityscape", description: "Managing dynamic traffic patterns in Seoul’s vibrant nightscape with advanced control systems.", image: seoulNightCityscape },
  { id: 5, title: "TrafficFlow Branding", description: "Showcasing our innovative logo at a traffic management expo.", image: trafficFlowBranding },
  { id: 6, title: "New Year Traffic Control", description: "Coordinating traffic for a massive New Year’s Eve celebration in a metropolitan area.", image: newYearTrafficControl },
  { id: 7, title: "Smart Road Sensors", description: "Installing cutting-edge sensors to optimize traffic flow in suburban areas.", image: smartRoadSensors },
  { id: 8, title: "Pedestrian Safety Zone", description: "Creating a pedestrian-friendly zone with temporary barriers and clear signage.", image: pedestrianSafetyZone },
  { id: 9, title: "Rural Road Safety", description: "Enhancing rural road safety with reflective signage and speed control measures.", image: ruralRoadSafety },
  { id: 10, title: "Construction Traffic Management", description: "Ensuring smooth traffic flow during a major urban construction project.", image: constructionTrafficManagement },
  { id: 11, title: "Event Traffic Coordination", description: "Managing traffic for a large outdoor event with thousands of attendees.", image: eventTrafficCoordination },
  { id: 12, title: "City Traffic Overview", description: "Overseeing traffic patterns in a busy city with real-time analytics.", image: cityTrafficOverview },
  { id: 13, title: "Emergency Traffic Response", description: "Rapid deployment of traffic control measures during an emergency road situation.", image: emergencyTrafficResponse },
];

// Projects Array (unchanged)
const projects = [
  {
    title: "Selwyn Marathon",
    slug: "selwyn-marathon",
    location: "Lincoln, NZ",
    subtitle: "Navigating Success: Ensuring Smooth Traffic Flow at the Selwyn Marathon with TMMatters",
    description: "Managed traffic flow for 5,000+ runners across urban and rural roads in Lincoln, New Zealand. Implemented rolling road closures, spectator zones, and emergency access routes while minimizing disruption to local residents.",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "5,000", icon: "🏃" },
      { label: "Traffic Managed", value: "5,000 People", icon: "👥" },
      { label: "Event Type", value: "Marathon", icon: "🏅" }
    ],
    challenges: [
      "Coordinating with local residents",
      "Managing spectator crossings",
      "Ensuring emergency vehicle access"
    ],
    overview: {
      introduction: "When the vibrant spirit of athleticism meets the challenge of navigating roads, TMMatters stands as the dependable partner ensuring an unforgettable experience at the Selwyn Marathon. As a trusted road traffic management company, TMMatters takes the lead in orchestrating flawless traffic management, allowing participants and spectators to focus solely on the race. In this spotlight, we unveil our role in optimizing traffic flow during the Selwyn Marathon, making it an event where roads pave the way for both triumph and inspiration.",
      uninterruptedFlow: "At TMMatters, we recognize the Selwyn Marathon as not just a race, but an occasion that bonds the community. Our meticulous traffic management strategies are designed to seamlessly accommodate both runners and local residents, ensuring minimal disruptions. By strategically placing road closures and detours, we harmonize the event’s energy with everyday life.",
      safety: "Safety is paramount, and our collaboration with the Selwyn Marathon underscores this commitment. We meticulously craft traffic management plans that prioritize the well-being of participants, spectators, and residents alike. Our team coordinates with local authorities, employs highly visible signage, and enforces speed restrictions to cultivate an environment where everyone can thrive harmoniously.",
      resourceAllocation: "As seasoned professionals, TMMatters understands the importance of optimized resource allocation. Through our comprehensive traffic management solutions, we mitigate congestion, reduce travel time, and enhance the overall event experience. By strategically deploying our expertise, we ensure that traffic doesn’t hinder the participants’ quest for victory.",
      eventExperience: "The Selwyn Marathon is more than just a race; it’s an event that uplifts the spirits of the community. TMMatters is committed to contributing to this uplifting atmosphere by maintaining fluid traffic flow. Our solutions guarantee that participants can focus on reaching their personal best, spectators can cheer on their loved ones without impediment, and the community can relish in the event’s positive vibes.",
      partnership: "TMMatters takes immense pride in partnering with the Selwyn Marathon, transforming roads into pathways of achievement. With a holistic approach to traffic management, we usher in a new era where road events are synonymous with efficiency, safety, and seamless coordination. Join us in celebrating the Selwyn Marathon, an event where every stride taken is supported by TMMatters’ dedication to excellence."
    }
  },
  {
    title: "Rugby Event 2022",
    slug: "rugby-event-2022",
    location: "Christchurch, NZ",
    subtitle: "TMMatters Shines Bright at the Rugby Event in Christchurch 2022 – Illuminating Traffic Management Excellence",
    description: "Designed and executed traffic management for 50,000 spectators at a rugby event in Christchurch, New Zealand. Implemented phased arrival/departure systems, parking solutions, and pedestrian flow optimization.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "50,000", icon: "👥" },
      { label: "Event Type", value: "Sports", icon: "🏉" },
      { label: "Location", value: "Christchurch", icon: "📍" }
    ],
    challenges: [
      "Managing peak arrival/departure surges",
      "Coordinating ride-share services",
      "Ensuring disabled access"
    ],
    overview: {
      introduction: "Welcome to the dynamic world of traffic management, where every event unfolds as a symphony of order amidst chaos. TMMatters proudly presents a showcase of our expertise at the Rugby Event in Christchurch 2022, where precision meets passion to ensure seamless traffic flow and safety.",
      trafficManagement: "In the heart of Christchurch, the Rugby Event 2022 promises a spectacle that blends elegance, excitement, and entertainment. At TMMatters, we recognize the pivotal role that impeccable traffic management plays in shaping the overall event experience. As a trusted partner, we seamlessly weave together the intricate threads of traffic planning, control, and coordination, transforming the streets into a canvas of fluidity and safety.",
      planning: "TMMatters embraces a holistic approach to traffic management, recognizing that every event is unique. Our journey begins with meticulous planning, where we analyze the event’s layout, anticipated footfall, and traffic patterns. Armed with this insight, we craft a tailored traffic management strategy that guarantees minimal disruptions and optimal traffic flow. Come event day, our dedicated team of professionals takes the center stage. Equipped with advanced technology and unwavering dedication, we orchestrate the movement of vehicles and pedestrians with a finesse that rivals the grace of a rugby player. Our real-time monitoring ensures swift adjustments, while our responsive communication network guarantees a unified and coordinated effort that keeps the traffic currents flowing smoothly.",
      safety: "At TMMatters, safety is our North Star. We understand that a safe event is a successful event, and our traffic management solutions are built upon this principle. From strategically positioned barriers and signs to efficient detour routes, we leave no stone unturned in creating a secure environment for both attendees and participants. Our meticulous attention to detail ensures that every road, every intersection, and every pathway aligns seamlessly to facilitate an unforgettable event experience.",
      partnership: "At TMMatters, we redefine traffic management, turning it into an art form that enhances events. The Rugby Event in Christchurch 2022 is not merely an event; it’s a testament to our dedication, expertise, and unwavering bond with the city. As we continue to shape the landscape of traffic management, one event at a time, we invite you to join us in our journey towards creating seamless, safe, and unforgettable event experiences."
    }
  },
  {
    title: "Cherry Blossom Festival",
    slug: "cherry-blossom-festival",
    location: "Matangi, NZ",
    subtitle: "Unveiling Nature’s Splendor: Matangi’s Cherry Blossom Festival",
    description: "Created traffic solutions for 5,000 daily visitors to Matangi, New Zealand, with limited infrastructure. Implemented parking solutions, signage, and pedestrian pathways.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Daily Visitors", value: "5,000", icon: "👥" },
      { label: "Event Type", value: "Festival", icon: "🌸" },
      { label: "Location", value: "Matangi", icon: "📍" }
    ],
    challenges: [
      "Limited rural infrastructure",
      "Pedestrian/vehicle interactions",
      "Preserving festival atmosphere"
    ],
    overview: {
      introduction: "Welcome to the picturesque town of Matangi, New Zealand, where nature paints a breathtaking masterpiece each spring. Matangi’s Cherry Blossom Festival is a celebration that ignites the senses, showcasing the ethereal beauty of cherry blossoms in full bloom. At TMMatters, we’re not just experts in road traffic management; we’re also passionate about connecting people to unique experiences, and the Cherry Blossom Festival is an event that perfectly embodies this connection.",
      wonderland: "Matangi’s Cherry Blossom Festival transforms the town into a mesmerizing wonderland. Thousands of cherry trees burst into bloom, draping the landscape in delicate shades of pink and white. As a traffic management company committed to safe and seamless experiences, TMMatters collaborates closely with festival organizers to ensure smooth traffic flow, allowing visitors to navigate the area effortlessly.",
      navigation: "At TMMatters, we understand that preserving the festival’s enchanting atmosphere is essential. Our experienced team of traffic management professionals devises comprehensive plans that prioritize safety while minimizing disruptions. From strategically positioned signs to efficient parking solutions, our seamless traffic management ensures that attendees can focus on indulging in the festival’s magic without any worries.",
      safety: "Matangi’s Cherry Blossom Festival is not just an event; it’s a canvas of cherished memories waiting to be painted. Families and friends gather to revel in the festivities, from captivating cultural performances to mouthwatering food stalls. TMMatters plays a vital role in orchestrating a traffic management ballet that guarantees safe passage for all, allowing festival-goers to fully immerse themselves in every joyous moment.",
      partnership: "TMMatters takes pride in being part of the fabric of Matangi’s Cherry Blossom Festival. Our commitment to excellence aligns seamlessly with the festival’s dedication to creating an unforgettable experience. With our expertise in traffic management, we ensure that attendees’ journey to and from the festival is as enchanting as the event itself."
    }
  },
  {
    title: "Mawhera Quay New Year Party",
    slug: "mawhera-quay-new-year-party",
    location: "Mawhera, NZ",
    subtitle: "Celebrate the New Year in Style at Mawhera Quay, New Zealand – An Unforgettable Party Experience",
    description: "Managed traffic for 5,000 attendees at Mawhera Quay’s New Year Party in New Zealand. Ensured seamless flow with optimized routes, parking, and safety protocols.",
    image: "https://images.unsplash.com/photo-1483794344538-d0d2020a78a1?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Attendees", value: "5,000", icon: "👥" },
      { label: "Event Type", value: "Party", icon: "🎉" },
      { label: "Location", value: "Mawhera", icon: "📍" }
    ],
    challenges: [
      "Managing late-night traffic",
      "Ensuring pedestrian safety",
      "Coordinating with local authorities"
    ],
    overview: {
      introduction: "Are you ready to welcome the New Year in grandeur? Look no further than Mawhera Quay, a picturesque haven nestled in the heart of New Zealand, where an extraordinary New Year’s Eve celebration awaits you! At TMMatters, we’re excited to present the most thrilling and seamless traffic management services to ensure your journey to and from this exquisite event is nothing short of remarkable.",
      eventDetails: "Mawhera Quay’s New Year Party has earned its reputation as the most sought-after extravaganza in New Zealand. Against the backdrop of stunning coastal views and a vibrant atmosphere, this event promises an unforgettable experience that will leave you with memories to cherish for a lifetime. As the clock ticks closer to midnight, Mawhera Quay transforms into a hub of excitement, offering a dazzling array of entertainment, live music, culinary delights, and a mesmerizing fireworks display that lights up the night sky. From families to friends, and locals to tourists, everyone gathers to bid adieu to the old year and embrace the new one with open arms.",
      trafficManagement: "At TMMatters, we understand that reaching your destination should be as seamless as the event itself. Our unparalleled expertise in road traffic management ensures that your journey to and from Mawhera Quay’s New Year Party is safe, efficient, and stress-free. Our dedicated team of professionals works diligently to craft a meticulously planned traffic management strategy that takes into account every detail, from traffic flow optimization to road safety protocols.",
      whyChooseUs: "Expertise: With years of experience under our belt, TMMatters is a name synonymous with excellence in traffic management. Our team of seasoned professionals is well-versed in orchestrating large-scale events, making your journey to Mawhera Quay a breeze. Custom Solutions: We understand that every event is unique. Our tailor-made traffic management solutions are designed to cater to the specific requirements of Mawhera Quay’s New Year Party, ensuring seamless traffic flow and minimal disruptions. Safety First: Your safety is our utmost priority. Our comprehensive traffic management plans prioritize the safety of all attendees, motorists, and pedestrians, guaranteeing a smooth and secure journey. Efficiency: Our innovative strategies are geared towards optimizing traffic flow, minimizing congestion, and reducing travel time, so you can spend more time enjoying the festivities and less time stuck in traffic. Collaborative Approach: We believe in collaboration and open communication. We work closely with event organizers, local authorities, and law enforcement to ensure a well-coordinated traffic management plan that aligns seamlessly with the event’s schedule.",
      invitation: "The countdown to an extraordinary New Year’s celebration has begun, and TMMatters is your trusted partner in making this experience one to remember. Let us handle the traffic management intricacies while you immerse yourself in the magic of Mawhera Quay’s New Year Party. Contact us today and make your journey to the festivities hassle-free and enjoyable. Together, let’s ring in the New Year with style and excitement!"
    }
  },
  {
    title: "Nelson Half Marathon",
    slug: "nelson-half-marathon",
    location: "Nelson, NZ",
    subtitle: "Conquering the Nelson Half Marathon: A Safe and Smooth Road Race with TMMatters",
    description: "Managed traffic for 5,000 participants at the Nelson Half Marathon in New Zealand. Implemented strategic road closures, safety measures, and efficient logistics.",
    image: "https://images.unsplash.com/photo-1534105287632-6e93e0a3f490?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "5,000", icon: "🏃" },
      { label: "Event Type", value: "Half Marathon", icon: "🏅" },
      { label: "Location", value: "Nelson", icon: "📍" }
    ],
    challenges: [
      "Coordinating scenic route closures",
      "Managing spectator zones",
      "Ensuring emergency access"
    ],
    overview: {
      introduction: "Welcome to the heart-pounding excitement of the Nelson Half Marathon in New Zealand, where passionate runners from around the globe gather to push their limits and achieve remarkable feats. At TMMatters, we take immense pride in ensuring the safety, efficiency, and seamless flow of this incredible event, allowing participants to focus on their journey towards victory.",
      eventDetails: "Nestled amidst the breathtaking landscapes of Nelson, New Zealand, the Nelson Half Marathon stands as a testament to human determination and perseverance. With its awe-inspiring route that winds through scenic vistas, lush forests, and charming local communities, this marathon has become a celebrated event on the global running calendar.",
      contributions: "Behind the scenes, TMMatters plays an indispensable role in making the Nelson Half Marathon an unforgettable experience. Strategic Traffic Management: TMMatters strategically plans and executes traffic management solutions that seamlessly guide runners and spectators through the marathon route. Our meticulous planning ensures that road closures and diversions are flawlessly implemented, keeping traffic flowing smoothly in alternate routes. Safety First: Safety is our utmost priority. Our team implements comprehensive safety measures, including barricades, signage, and trained personnel, to safeguard participants, volunteers, and spectators along the marathon course. Efficient Logistics: We understand the importance of efficient logistics in a marathon of this scale. TMMatters expertly coordinates with local authorities, emergency services, and event organizers to ensure that the event’s logistics are streamlined, contributing to an uninterrupted flow of the race. Spectator Experience: We believe that every element of the marathon contributes to the overall experience. By skillfully managing traffic and minimizing disruptions, we enhance the viewing experience for the enthusiastic crowd, allowing them to fully immerse themselves in the excitement of the event.",
      partnership: "Just as every runner’s dedication contributes to the success of the Nelson Half Marathon, TMMatters proudly stands as a driving force behind the scenes. Our commitment to excellence, safety, and efficiency ensures that participants and spectators alike can relish every moment of this thrilling event."
    }
  },
  {
    title: "Cotswold School Triathlon",
    slug: "cotswold-school-triathlon",
    location: "Cotswold, NZ",
    subtitle: "Dominate Traffic Management at the Cotswold School Triathlon in New Zealand with TMMatters",
    description: "Managed traffic for 1,000 participants at the Cotswold School Triathlon in New Zealand. Ensured seamless transitions with optimized routes and safety measures.",
    image: "https://images.unsplash.com/photo-1629059904545-5b27e33e36d6?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Participants", value: "1,000", icon: "🏊‍♂️" },
      { label: "Event Type", value: "Triathlon", icon: "🚴" },
      { label: "Location", value: "Cotswold", icon: "📍" }
    ],
    challenges: [
      "Managing multi-sport transitions",
      "Coordinating with school schedules",
      "Ensuring participant safety"
    ],
    overview: {
      introduction: "Welcome to the exhilarating world of the Cotswold School Triathlon in New Zealand, where athleticism and adrenaline converge in a stunning natural setting. As the premier road Traffic Management Company, TMMatters is poised to elevate your event experience to new heights. Our expertise in traffic flow optimization and safety ensures a seamless and secure environment for participants, spectators, and organizers alike. Join us in creating an unforgettable event at the Cotswold School Triathlon that leaves a lasting impression.",
      whyChooseUs: "At TMMatters, we recognize that a well-managed traffic plan is the cornerstone of any successful event. Our seasoned professionals bring a wealth of experience and innovation to the table, ensuring your Cotswold School Triathlon unfolds seamlessly. From strategizing traffic routes to implementing road closures and detours, we’re dedicated to optimizing traffic patterns that keep participants and attendees moving smoothly.",
      partnership: "Collaborating with TMMatters means entrusting your event’s traffic management to a team dedicated to perfection. With an unwavering commitment to excellence, we’re more than just a service provider; we’re your partners in success. Let us transform the Cotswold School Triathlon into a spectacle that wows participants and spectators alike, leaving an indelible mark on their memories."
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

// PhotoLibrarySection (unchanged)
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
            <span className="text-sm sm:text-base font-semibold text-amber-400">Our Visual Legacy</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-5">
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            >
              Photo Library
            </motion.span>
          </h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover our innovative traffic management solutions through captivating visuals.
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
      <rect x="6" y="8" width="12" height="4" fill="#FFD600" />
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
                  Nature's Palette: A Blossom Wonderland
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
                  Ensuring Uninterrupted Flow
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
                  Navigating with Ease
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
                  Meticulous Planning, Flawless Execution
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
                  Elevating the Event Experience
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
                  Why Choose TMMatters
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
              Event Statistics
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
                Our real-time monitoring ensured smooth traffic flow with zero congestion points.
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
                { title: "Custom Traffic Plan", description: "Tailored strategy addressing event-specific requirements and local conditions." },
                { title: "Advanced Signage", description: "Clear, visible signage with real-time updates for changing conditions." },
                { title: "Staff Coordination", description: "Trained personnel at key locations with centralized communication." }
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

// ProjectsSection (completed)
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
            <span className="text-sm font-medium text-amber-400">Our Event Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
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