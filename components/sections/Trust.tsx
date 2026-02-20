"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const TrustSection = ({
  stats,
}: {
  stats: { id: string; title: string }[];
}) => (
  <section className="bg-slate-50 dark:bg-zinc-950/50 py-16 px-6 transition-colors">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-zinc-900 dark:text-white">
          Transparence. <span className="text-[#b60202]">Engagement.</span>{" "}
          Résultats.
        </h2>
        <p className="text-slate-800 font-semibold dark:text-zinc-400 max-w-2xl mx-auto text-xs">
          Le gouvernement s&apos;engage pour une administration moderne au
          service de tous les Camerounais, partout dans le monde.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm rounded-md hover:border-[#007A5E]/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="text-slate-200 text-xl font-black group-hover:text-[#007A5E]/10 transition-colors">
                {stat.id}
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-[#007A5E] transition-colors" />
            </div>
            <h4 className="text-base font-bold leading-tight text-slate-800 dark:text-zinc-100">
              {stat.title}
            </h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
