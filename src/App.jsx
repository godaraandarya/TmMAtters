import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

import './App.css';

// Lazy-loaded components
const Hero = lazy(() => import('./sections/hero'));
const NavBar = lazy(() => import('./sections/navBar'));
const ServicesSection = lazy(() => import('./sections/services'));
const ProjectsSection = lazy(() => import('./sections/projects'));
const RFQForm = lazy(() => import('./sections/RFQForm'));
const PhotoLibrarySection = lazy(() =>
  import('./sections/PhotoLibrarySection').then(module => ({ default: module.PhotoLibrarySection }))
);
const ContactUsForm = lazy(() => import('./sections/ContactUsForm'));
const ProductionSection = lazy(() => import('./ProductionSection'));
const CheckoutPage = lazy(() => import('./CheckoutPage'));
const Footer = lazy(() => import('./sections/Footer'));
const AboutHeader = lazy(() => import('./sections/AboutHeader'));
const TeamSection = lazy(() => import('./sections/TeamSection'));

function App() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowScrollTop(currentScrollY > 300);
      setIsScrolled(currentScrollY > 50);

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setScrollDirection('down');
        } else if (currentScrollY < lastScrollY) {
          setScrollDirection('up');
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Scroll to top or a target section on route change
  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Base SEO configuration
  const baseSEO = {
    url: 'http://tmmatters.co.nz',
    image: 'http://tmmatters.co.nz/assets/og-image.webp',
    logo: 'http://tmmatters.co.nz/assets/Logo-11.png',
    twitterHandle: '@TMMattersNZ',
  };

  // Route-specific SEO configurations
  const routeSEO = {
    '/': {
      title: 'TM Matters - Traffic Management Solutions',
      description: 'TM Matters offers innovative traffic management, training, consultancy, engineering, construction, and TMP design services for safer roads in New Zealand.',
      keywords: 'traffic management, smart traffic systems, traffic safety, traffic training, traffic consultancy, traffic engineering, road construction, TMP design, New Zealand',
      ogTitle: 'TM Matters - Innovative Traffic Management Solutions',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Home',
        'url': `${baseSEO.url}/`,
        'description': 'TM Matters provides cutting-edge traffic management solutions in New Zealand.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
          ],
        },
      },
    },
    '/about': {
      title: 'About Us - TM Matters',
      description: 'Learn about TM Matters, your trusted partner for traffic management solutions in New Zealand, committed to safety and innovation.',
      keywords: 'about TM Matters, traffic management company, New Zealand traffic solutions, traffic safety, traffic engineering',
      ogTitle: 'About TM Matters - Traffic Management Experts',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'About Us',
        'url': `${baseSEO.url}/about`,
        'description': 'Discover TM Matters’ mission and expertise in traffic management.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'About', 'item': `${baseSEO.url}/about` },
          ],
        },
      },
    },
    '/services': {
      title: 'Services - TM Matters',
      description: 'Explore TM Matters’ traffic management services, including smart systems, training, consultancy, engineering, construction, and TMP design.',
      keywords: 'traffic management services, smart traffic systems, traffic training, event consultancy, traffic engineering, road construction, TMP design, New Zealand',
      ogTitle: 'Traffic Management Services - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Services',
        'url': `${baseSEO.url}/services`,
        'description': 'Comprehensive traffic management services by TM Matters.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `${baseSEO.url}/services` },
          ],
        },
      },
    },
    '/projects': {
      title: 'Projects - TM Matters',
      description: 'Discover TM Matters’ successful traffic management projects showcasing safety, efficiency, and innovation in New Zealand.',
      keywords: 'traffic management projects, road safety projects, traffic control projects, New Zealand traffic projects, TM Matters',
      ogTitle: 'Our Projects - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Projects',
        'url': `${baseSEO.url}/projects`,
        'description': 'Showcasing TM Matters’ traffic management projects.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Projects', 'item': `${baseSEO.url}/projects` },
          ],
        },
      },
    },
    '/team': {
      title: 'Our Team - TM Matters',
      description: 'Meet the TM Matters team, experts in traffic management, safety, and engineering in New Zealand.',
      keywords: 'TM Matters team, traffic management experts, traffic safety professionals, New Zealand traffic team',
      ogTitle: 'Meet Our Team - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Team',
        'url': `${baseSEO.url}/team`,
        'description': 'Introducing TM Matters’ expert team in traffic management.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Team', 'item': `${baseSEO.url}/team` },
          ],
        },
      },
    },
    '/contactus': {
      title: 'Contact Us - TM Matters',
      description: 'Get in touch with TM Matters for traffic management solutions, training, consultancy, and more in New Zealand.',
      keywords: 'contact TM Matters, traffic management contact, New Zealand traffic services, traffic consultancy contact',
      ogTitle: 'Contact TM Matters - Traffic Management Solutions',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Contact Us',
        'url': `${baseSEO.url}/contactus`,
        'description': 'Contact TM Matters for expert traffic management services.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Contact Us', 'item': `${baseSEO.url}/contactus` },
          ],
        },
      },
    },
    '/photolibrary': {
      title: 'Photo Library - TM Matters',
      description: 'Browse TM Matters’ photo library showcasing traffic management projects and services in New Zealand.',
      keywords: 'traffic management photos, TM Matters photo library, traffic safety images, New Zealand traffic projects',
      ogTitle: 'Photo Library - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Photo Library',
        'url': `${baseSEO.url}/photolibrary`,
        'description': 'Visuals of TM Matters’ traffic management projects.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Photo Library', 'item': `${baseSEO.url}/photolibrary` },
          ],
        },
      },
    },
    '/products': {
      title: 'Products - TM Matters',
      description: 'Explore TM Matters’ traffic management products, including signage, control systems, and safety equipment in New Zealand.',
      keywords: 'traffic management products, traffic signage, traffic control systems, traffic safety equipment, New Zealand',
      ogTitle: 'Traffic Management Products - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Products',
        'url': `${baseSEO.url}/products`,
        'description': 'TM Matters’ range of traffic management products.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `${baseSEO.url}/products` },
          ],
        },
      },
    },
    '/rfq': {
      title: 'Request a Quote - TM Matters',
      description: 'Request a quote for TM Matters’ traffic management services, including training, consultancy, and construction in New Zealand.',
      keywords: 'traffic management quote, TM Matters RFQ, traffic services quote, New Zealand traffic solutions',
      ogTitle: 'Request a Quote - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Request a Quote',
        'url': `${baseSEO.url}/rfq`,
        'description': 'Get a quote for TM Matters’ traffic management services.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Request a Quote', 'item': `${baseSEO.url}/rfq` },
          ],
        },
      },
    },
    '/checkout': {
      title: 'Checkout - TM Matters',
      description: 'Complete your purchase of TM Matters’ traffic management products or services in New Zealand.',
      keywords: 'traffic management checkout, TM Matters payment, traffic services purchase, New Zealand',
      ogTitle: 'Checkout - TM Matters',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Checkout',
        'url': `${baseSEO.url}/checkout`,
        'description': 'Secure checkout for TM Matters’ services and products.',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `${baseSEO.url}/` },
            { '@type': 'ListItem', 'position': 2, 'name': 'Checkout', 'item': `${baseSEO.url}/checkout` },
          ],
        },
      },
    },
  };

  const currentSEO = routeSEO[location.pathname] || routeSEO['/'];

  return (
    <div className="bg-[#0F0F0F] min-h-screen relative">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={currentSEO.ogTitle} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseSEO.url}${location.pathname}`} />
        <meta property="og:image" content={baseSEO.image} />
        <meta property="og:image:alt" content="TM Matters Traffic Management Services" />
        <meta property="og:site_name" content="TM Matters" />
        <meta property="og:locale" content="en_NZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.ogTitle} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content={baseSEO.image} />
        <meta name="twitter:image:alt" content="TM Matters Traffic Management Services" />
        <meta name="twitter:site" content={baseSEO.twitterHandle} />
        <link rel="canonical" href={`${baseSEO.url}${location.pathname}`} />
        <script type="application/ld+json">
          {JSON.stringify(currentSEO.jsonLd)}
        </script>
      </Helmet>

      {/* NavBar */}
      <Suspense fallback={<div className="bg-[#0F0F0F] h-16" />}>
        <NavBar scrollDirection={scrollDirection} isScrolled={isScrolled} />
      </Suspense>

      {/* Page Routes */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen bg-[#0F0F0F]">
            <motion.div
              className="w-12 h-12 border-4 border-t-amber-400 border-l-amber-400 border-r-transparent border-b-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutHeader />
                <ServicesSection />
                <ProjectsSection />
                <TeamSection />
                <ContactUsForm />
                <PhotoLibrarySection />
              </>
            }
          />
          <Route path="/about" element={<AboutHeader />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/contactus" element={<ContactUsForm />} />
          <Route path="/photolibrary" element={<PhotoLibrarySection />} />
          <Route path="/products" element={<ProductionSection />} />
          <Route path="/rfq" element={<RFQForm />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<div className="bg-[#0F0F0F] h-32" />}>
        <Footer />
      </Suspense>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-amber-400 text-black rounded-full shadow-lg z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;