import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowUp, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "COMPANY",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "PRODUCTS",
      links: [
        { name: "White Rice" },
        { name: "Brown Rice" },
        { name: "Parboiled Rice" },
        { name: "Rice Flour" }
      ]
    },
    {
      title: "FEATURES",
      links: [
        { name: "Sustainable Practices" },
        { name: "Organic Varieties" },
        { name: "Farmer Partnerships" },
        { name: "Quality Assurance" }
      ]
    },
    {
      title: "SUPPORT",
      links: [
        { name: "FAQ" },
        { name: "Contact Us" },
        { name: "Privacy Policy" },
        { name: "Returns & Refunds" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/9779821451060" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#e6f7d9] via-[#ecfae5] to-[#d8f3c0] text-gray-700 border-t border-green-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Footer Links - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-base sm:text-lg text-green-900 tracking-wide">
                {column.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-sm sm:text-base"
                  >
                    {link.path ? (
                      <NavLink
                        to={link.path}
                        className="text-green-800 hover:text-green-600 transition-colors duration-200 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </NavLink>
                    ) : (
                      <span className="text-green-800 cursor-pointer hover:text-green-600 transition-colors duration-200 flex items-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links - centered on mobile */}
        <div className="flex justify-center space-x-6 mt-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-600 text-lg"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-200/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RiceMill. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="text-gray-500 hover:text-green-600 text-xs sm:text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 text-xs sm:text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-green-600 text-xs sm:text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            onClick={scrollTop}
            aria-label="Back to Top"
            className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}