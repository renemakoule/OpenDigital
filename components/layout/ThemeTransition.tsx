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
          <div className="flex-1 bg-primary-red" />
          <div className="flex-1 bg-primary-yellow" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
