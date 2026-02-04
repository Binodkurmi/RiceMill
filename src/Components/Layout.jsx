import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const { pathname } = useLocation();

  // Hide footer on specific routes
  const hideFooterRoutes = ["/contact", "/admin"];
  const hideFooter = hideFooterRoutes.includes(pathname);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  // Page transition animations
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { opacity: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="flex-grow"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {!hideFooter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      )}
    </div>
  );
}