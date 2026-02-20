"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// Authentic Social Brand Icons as SVG components
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.464-5.944 5.419-5.944 1.257 0 2.438.09 2.503.102v3.314h-1.87c-1.491 0-1.747.501-1.747 1.896v2.212h3.294l-.494 3.667h-2.8v7.981h-4.305z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454c.98 0 1.775-.773 1.775-1.729V1.729C24 .774 23.205 0 22.225 0z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[16px] h-[16px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants pour un effet premium au survol
  const linkHover = {
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  const sections = [
    {
      title: "NAVIGATION",
      links: [
        { name: "Tous les services", href: "#" },
        { name: "Espace Entreprise", href: "#" },
        { name: "Portail Open Data", href: "#" },
        { name: "Actualités", href: "#" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Aide & FAQ", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Points d'accueil", href: "#" },
        { name: "Accessibilité", href: "#" },
      ],
    },
    {
      title: "INFORMATIONS",
      links: [
        { name: "Mentions légales", href: "#" },
        { name: "Données personnelles", href: "#" },
        { name: "Conditions d'utilisation", href: "#" },
        { name: "Plan du site", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-zinc-950/80 border-t border-gray-200 dark:border-zinc-800 pt-16 pb-8 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Top Section: Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              {/* Remplacer par votre vrai logo SVG ou Image */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#1E3A8A] dark:text-white tracking-tight leading-none">
                  OPEN DIGITAL
                </span>
                <span className="text-[8px] text-gray-400 dark:text-zinc-500 font-medium tracking-widest mt-1 uppercase">
                  République du Cameroun
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed max-w-xs transition-colors">
              Plateforme nationale unifiée pour l'accès aux services publics
              numériques. Développée pour assurer la continuité du service
              public et la transparence administrative.
            </p>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-500 hover:text-[#1877F2] dark:hover:text-[#1877F2] hover:border-[#1877F2]/30 dark:hover:border-[#1877F2]/30 transition-colors shadow-sm"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-500 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-colors shadow-sm"
              >
                <XIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-500 hover:text-[#E4405F] dark:hover:text-[#E4405F] hover:border-[#E4405F]/30 dark:hover:border-[#E4405F]/30 transition-colors shadow-sm"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-400 dark:text-zinc-500 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-[#0A66C2]/30 dark:hover:border-[#0A66C2]/30 transition-colors shadow-sm"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
          </div>

          {/* Columns 2, 3, 4: Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold text-gray-900 dark:text-white tracking-[0.15em] mb-6 uppercase transition-colors">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.div whileHover="hover">
                      <Link
                        href={link.href}
                        className="text-[11px] text-gray-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors block"
                      >
                        <motion.span
                          variants={linkHover}
                          className="inline-block"
                        >
                          {link.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Bottom Section: Copyright & Motto --- */}
        <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-colors">
          <div className="text-[8px] text-gray-400 dark:text-zinc-500 uppercase tracking-widest font-medium">
            © {currentYear} GOUVERNEMENT DU CAMEROUN • OPEN DIGITAL
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[8px] italic text-gray-400 dark:text-zinc-500 font-medium">
              Paix - Travail - Patrie
            </span>
            {/* Drapeau Cameroun (Simple représentation CSS ou SVG) */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center cursor-help"
              title="République du Cameroun"
            >
              <CameroonFlag />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
