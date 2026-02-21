"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [lang, setLang] = useState("FR");

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Automatic theme based on time
    const checkTimeTheme = () => {
      const currentHour = new Date().getHours();
      const shouldBeDark = currentHour >= 20 || currentHour < 6;

      const manualTheme = localStorage.getItem("theme-manual");
      if (!manualTheme) {
        setTheme(shouldBeDark ? "dark" : "light");
      }
    };

    checkTimeTheme();
    const interval = setInterval(checkTimeTheme, 60000);
    return () => clearInterval(interval);
  }, [setTheme]);

  const handleThemeToggle = () => {
    const currentTheme = resolvedTheme || theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Trigger the sweep animation first
    window.dispatchEvent(new CustomEvent("theme-sweep"));

    // Delay the actual theme change so it happens when the screen is covered
    setTimeout(() => {
      setTheme(newTheme);
      localStorage.setItem("theme-manual", "true");
    }, 300);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-colors duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-50 dark:bg-zinc-900 px-6 py-2 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-4">
          {/* Cameroon Flag Icon */}
          <CameroonFlag />

          <div className="flex items-center gap-3 text-[8px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
            <span>République du Cameroun</span>
            <span className="text-slate-200 dark:text-zinc-800">|</span>
            <i>Paix - Travail - Patrie</i>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-5">
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-slate-400 dark:text-zinc-500 hover:text-[#007A5E] dark:hover:text-[#007A5E] transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="px-6 py-4 flex items-center justify-between bg-white/80 dark:bg-zinc-950/80 backdrop-blur-[10px] transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter text-blue-900 dark:text-white leading-none">
              OPEN DIGITAL
            </span>
            <span className="text-[7px] font-bold tracking-[0.2em] text-[#007A5E]">
              CAMEROUN<span className="text-[#CE1126]">&bull;</span>
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Citoyens", "Entreprises", "Procédures", "Open Data"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold text-slate-500 dark:text-zinc-400 hover:text-[#007A5E] dark:hover:text-[#007A5E] transition-colors"
              >
                {item}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Languages className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
            <span className="text-[10px] font-bold text-slate-600 dark:text-zinc-300">
              {lang}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={resolvedTheme}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4 text-zinc-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-500" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 flex flex-col p-6 gap-4 md:hidden shadow-lg transition-colors"
            >
              {["Citoyens", "Entreprises", "Procédures", "Open Data"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-slate-600 dark:text-zinc-300 text-sm font-bold py-2 border-b border-slate-50 dark:border-zinc-900"
                  >
                    {item}
                  </a>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

const CameroonFlag = () => (
  <svg
    viewBox="0 0 900 600"
    className="w-6 h-4 rounded-[2px] shadow-sm flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Drapeau du Cameroun"
  >
    {/* Bande Verte (Gauche) : de 0 à 300 */}
    <rect width="300" height="600" fill="#007a5e" />

    {/* Bande Rouge (Centre) : de 300 à 600 */}
    <rect width="300" height="600" x="300" fill="#ce1126" />

    {/* Bande Jaune (Droite) : de 600 à 900 */}
    <rect width="300" height="600" x="600" fill="#fcd116" />

    {/* 
      Étoile Jaune : 
      Calculée pour être centrée à x=450 (milieu de 300-600) 
      et y=300 (milieu de 0-600)
    */}
    <path
      fill="#fcd116"
      d="M450,205 
         L482.7,296.8 
         L584.2,296.8 
         L502.1,356.5 
         L533.4,453.2 
         L450,393.5 
         L366.6,453.2 
         L397.9,356.5 
         L315.8,296.8 
         L417.3,296.8 
         Z"
    />
  </svg>
);
