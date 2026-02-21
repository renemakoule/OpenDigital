"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const ThemeTransition = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleTrigger = () => {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(true); // Ensure visibility state is consistent
        setIsVisible(false);
      }, 900);
    };

    window.addEventListener("theme-sweep", handleTrigger);

    return () => {
      window.removeEventListener("theme-sweep", handleTrigger);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-9999 pointer-events-none flex"
        >
          {/* Cameroon colors sweep */}
          <div className="flex-1 bg-primary-green" />
          <div className="flex-1 bg-primary-red flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-32 h-32 md:w-64 md:h-64 text-primary-yellow fill-current"
            >
              <path d="M50,15 L58.2,38 L82.5,38 L62.8,52.5 L70.5,76.5 L50,61.8 L29.5,76.5 L37.2,52.5 L17.5,38 L41.8,38 Z" />
            </svg>
          </div>
          <div className="flex-1 bg-primary-yellow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
