"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto px-6 mb-12"
    >
      <div className="rounded-md p-5 md:p-6 flex flex-wrap items-center justify-between gap-6 md:gap-10 border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-colors">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              1M+
            </div>
            <div className="text-[9px] text-slate-500 uppercase tracking-widest font-medium">
              Citoyens en ligne
            </div>
          </div>
          <div className="h-10 w-px bg-slate-100 dark:bg-zinc-800 hidden md:block mx-2" />
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8 opacity-60 dark:opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#007A5E]/10 dark:bg-[#007A5E]/20 rounded-full flex items-center justify-center">
              <span className="text-[#007A5E] text-[8px] font-bold">PR</span>
            </div>
            <span className="font-bold text-slate-700 dark:text-zinc-300 text-xs tracking-tight">
              Présidence
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#CE1126]/10 dark:bg-[#CE1126]/20 rounded-full flex items-center justify-center">
              <span className="text-[#CE1126] text-[8px] font-bold">PM</span>
            </div>
            <span className="font-bold text-slate-700 dark:text-zinc-300 text-xs tracking-tight">
              Primature
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-100 dark:bg-zinc-800 rounded-full flex items-center justify-center">
              <span className="text-slate-900 dark:text-white text-[8px] font-bold">
                G
              </span>
            </div>
            <span className="font-bold text-slate-700 dark:text-zinc-300 text-xs tracking-tight">
              Open Data
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#FCD116]/10 dark:bg-[#FCD116]/20 rounded-full flex items-center justify-center">
              <span className="text-[#FCD116] text-[8px] font-bold">I</span>
            </div>
            <span className="font-bold text-slate-700 dark:text-zinc-300 text-xs tracking-tight">
              Inclusion
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
