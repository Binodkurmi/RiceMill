import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, key } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll if the pathname has changed (not on hash changes)
    if (prevPathname.current !== pathname) {
      // Modern scroll behavior with smooth scrolling
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      
      // For browsers that don't support smooth scrolling
      if (!("scrollBehavior" in document.documentElement.style)) {
        window.scrollTo(0, 0);
      }
      
      prevPathname.current = pathname;
    }
  }, [pathname, key]); // Added key to handle same-path navigation

  return null;
}