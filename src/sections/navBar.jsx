import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingBag } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import logo from '../assets/Logo-11.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const location = useLocation();

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const cartItems = useSelector((state) => state.cart.items || []);
  const cartCount = useMemo(() => cartItems.length, [cartItems]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/Services' },
    { name: 'Products', href: '/products' },
    { name: 'RFQ', href: '/rfq' },
  ];

  const handleScroll = () => {
    const currentY = window.scrollY;

    if (currentY > lastScrollY.current && currentY > 50) {
      setScrollDirection('down');
    } else if (currentY < lastScrollY.current || currentY <= 50) {
      setScrollDirection('up');
    }

    setIsScrolled(currentY > 50);
    lastScrollY.current = currentY;
    ticking.current = false;
  };

  const onScroll = () => {
    if (!ticking.current) {
      requestAnimationFrame(handleScroll);
      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navVariants = {
    up: {
      y: 0,
      backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0,0,0,0)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      transition: { duration: 0.3 },
    },
    down: {
      y: -100,
      transition: { duration: 0.2 },
    },
  };

  const isActive = (href) => location.pathname === href;

  return (
    <motion.nav
      variants={navVariants}
      animate={scrollDirection}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={logo}
              alt="Logo"
              className="h-16 w-auto"
              whileHover={{
                scale: 1.05,
                rotate: [0, 3, -3, 0],
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-amber-400 font-semibold'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link to="/checkout" className="relative text-white hover:text-amber-300">
              <FaShoppingBag size={20} />
              {cartCount > 0 && (
                <motion.span
                  key="desktop-cart"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col space-y-1 w-8 h-8 justify-center items-center"
              aria-label="Toggle menu"
            >
              <span className={`bg-white h-0.5 w-6 transform transition duration-200 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`bg-white h-0.5 w-6 transition duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`bg-white h-0.5 w-6 transform transition duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-xl font-medium ${
                      isActive(item.href) ? 'text-amber-400' : 'text-white hover:text-amber-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/checkout"
                  className="flex items-center text-xl text-white hover:text-amber-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingBag className="mr-2" />
                  Cart
                  {cartCount > 0 && (
                    <motion.span
                      key="mobile-cart"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 bg-amber-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
