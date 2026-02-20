"use client";

import React from "react";
import { motion } from "framer-motion";

export const CameroonArc = () => {
  return (
    <div className="fixed top-[-180px] md:top-[-145px] left-1/2 -translate-x-1/2 w-[150vw] h-[600px] pointer-events-none z-[-1] overflow-visible drop-shadow-[0_15px_15px_rgba(0,0,0,0.08)]">
      <svg
        viewBox="0 0 1400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="cameroonGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#007A5E" />
            <stop offset="33%" stopColor="#007A5E" />
            <stop offset="33%" stopColor="#CE1126" />
            <stop offset="66%" stopColor="#CE1126" />
            <stop offset="66%" stopColor="#FCD116" />
            <stop offset="100%" stopColor="#FCD116" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Arc */}
        <path
          d="M 0 550 Q 700 -50 1400 550"
          stroke="url(#cameroonGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          filter="url(#glow)"
          strokeOpacity="1"
        />

        {/* The Star - Very compact and perfectly centered */}
        <g filter="url(#starGlow)" transform="translate(700, 250) scale(0.8)">
          <path
            d="M 0 -15 L 4.5 -5 L 15 -3.5 L 7.5 4 L 9 14.5 L 0 9.5 L -9 14.5 L -7.5 4 L -15 -3.5 L -4.5 -5 Z"
            fill="#FCD116"
          />
        </g>
      </svg>
    </div>
  );
};
