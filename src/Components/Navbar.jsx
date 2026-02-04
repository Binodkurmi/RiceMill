import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiPhone, FiMail, FiChevronDown, FiMapPin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLeaf, FaFacebook } from "react-icons/fa";
import '../Style/Navbar.css';

const menuItems = [
  { name: "Home", path: "/" },
  { 
    name: "About", 
    path: "/about",
    submenu: [
      { name: "Our Story", path: "/about/story" },
      { name: "Team", path: "/about/team" }
    ]
  },
  { 
    name: "Products", 
    path: "/products",
    submenu: [
      { name: "Organic Rice", path: "/products/organic_rice" },
      { name: "Premium Varieties", path: "/products/premium_rice" }
    ]
  },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: <FaInstagram size={20} />, url: "#" },
  { icon: <FaWhatsapp size={20} />, url: "https://wa.me/9779821556600" },
  { icon: <FaFacebook size={20} />, url: "#" }
];

const contactInfo = [
  { icon: <FiPhone />, text: "+977 9821556600", url: "tel:+9779821556600" },
  { icon: <FiMail />, text: "jaiambericemill2014@gmail.com", url: "mailto:jaiambericemill2014@gmail.com" }
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  const isAboutRoute = location.pathname.startsWith('/about');
  const isProductsRoute = location.pathname.startsWith('/products');

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY <= 100 || currentScrollY < lastScrollY);
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50);
  };

  const handleClickOutside = (event) => {
    if (mobileOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const renderDesktopNavItem = (item) => (
    <div 
      key={item.path}
      className="relative"
      onMouseEnter={() => setHoveredItem(item.path)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 rounded-lg transition-all ${
            isActive || 
            (item.path === '/about' && isAboutRoute) ||
            (item.path === '/products' && isProductsRoute)
              ? "text-emerald-600 font-medium" 
              : "text-gray-700 hover:text-emerald-600"
          }`
        }
      >
        {item.name}
        {item.submenu && (
          <FiChevronDown className={`ml-1 transition-transform ${
            hoveredItem === item.path ? "rotate-180" : ""
          }`} />
        )}
      </NavLink>

      {item.submenu && (
        <AnimatePresence>
          {hoveredItem === item.path && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
            >
              {item.submenu.map((subItem) => (
                <NavLink
                  key={subItem.path}
                  to={subItem.path}
                  className={({ isActive }) => 
                    `block px-4 py-3 transition-colors ${
                      isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-emerald-50'
                    }`
                  }
                >
                  {subItem.name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );

  return (
    <>
      {/* Top Announcement Bar */}
      <motion.div 
        className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white text-sm py-2 px-4 text-center z-[60] sticky top-0"
        style={{ height: 'var(--announcement-bar-height)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-2 bg-black/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border-l-4 border-emerald-400"
              >
                <FaLeaf className="text-emerald-400 text-lg" />
                <div>
                  <p className="font-bold text-white tracking-tight text-sm md:text-base">
                    "पौष्टिक अन्न, स्वस्थ जीवन" <span className="hidden sm:inline">| Healthy Grains, Healthy Life</span>
                  </p>
                  <p className="text-xs text-white/80 flex items-center">
                    <FiMail className="mr-1" />jaiambericemill2014@gmail.com
                  </p>
                </div>
              </motion.div>

              <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="hidden md:flex items-center space-x-2 bg-black/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border-l-4 border-amber-400"
              >
                <FiMapPin className="text-amber-300 text-lg" />
                <div>
                  <p className="font-medium text-white tracking-tight text-sm">
                    तौलिहवा‑३, कपिलवस्तु
                  </p>
                  <p className="text-xs text-white/80">
                    Taulihawa‑3, Kapilvastu
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.a
              href="tel:+9779821556600"
              className="relative group hidden md:flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg hover:shadow-emerald-400/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center text-sm md:text-base">
                <FiPhone className="mr-2" />
                <span>+977 9821556600</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <motion.span 
                className="absolute inset-0 border-2 border-emerald-400 rounded-full opacity-0"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.header
        ref={navbarRef}
        className={`fixed top-[var(--announcement-bar-height)] left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/90'
        } backdrop-blur-lg`}
        style={{ height: 'var(--navbar-height)' }}
        initial={{ y: 0 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
           <NavLink to="/" className="flex items-center space-x-3 group">
  <motion.div 
    className="relative"
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative overflow-hidden">
      <img 
        src="./RiceMill_logo.png" 
        alt="RiceMill Logo" 
        className="h-15 w-auto" 
      />
    
    </div>
  </motion.div>
</NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map(renderDesktopNavItem)}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.a
                href="https://wa.me/9779821556600"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="text-lg" />
                <span className="text-sm font-medium">Chat on WhatsApp</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="lg:hidden bg-white/95 backdrop-blur-sm overflow-y-auto"
              style={{
                top: 'calc(var(--navbar-height) + var(--announcement-bar-height))',
                height: 'calc(100vh - var(--navbar-height) - var(--announcement-bar-height))',
                paddingBottom: 'env(safe-area-inset-bottom)'
              }}
            >
              <div className="container mx-auto px-4 py-6">
                <ul>
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { delay: index * 0.05 }
                      }}
                      transition={{ type: "spring" }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg py-2 px-2 text-lg font-medium ${
                            isActive || (item.path === '/about' && isAboutRoute)
                              ? "bg-emerald-100 text-emerald-700" 
                              : "text-gray-800 hover:bg-gray-100"
                          }`
                        }
                      >
                        {item.name}
                        {item.submenu && (
                          <FiChevronDown className="inline ml-2" />
                        )}
                      </NavLink>
                      
                      {item.submenu && (
                        <ul className="space-y-1 px-5">
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.li
                              key={subItem.path}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ 
                                x: 0, 
                                opacity: 1,
                                transition: { delay: index * 0.05 + subIndex * 0.05 + 0.1 }
                              }}
                            >
                              <NavLink
                                to={subItem.path}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                  `block text-gray-600 hover:bg-gray-50 rounded-lg px-4 py-2 ${
                                    isActive ? 'text-emerald-600 font-medium' : ''
                                  }`
                                }
                              >
                                {subItem.name}
                              </NavLink>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Contact Info */}
                <div className="mt-8 px-4">
                  <h3 className="text-lg font-medium text-gray-900">Contact Us</h3>
                  <div className="space-y-2">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.url}
                        className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: menuItems.length * 0.05 + index * 0.1 }
                        }}
                      >
                        <span className="text-emerald-600">{info.icon}</span>
                        <span>{info.text}</span>
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <motion.a
                    href="https://wa.me/9779821556600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: menuItems.length * 0.05 + contactInfo.length * 0.1 + socialLinks.length * 0.1 + 0.1
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="text-xl" />
                    <span className="text-base font-medium">Chat on WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}