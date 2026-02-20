"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const ServiceCard = ({
  title,
  description,
  icon,
  featured,
}: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`p-6 rounded-md border transition-all duration-500 group relative overflow-hidden ${
      featured
        ? "bg-[#007A5E] border-[#007A5E] shadow-lg shadow-[#007A5E]/20"
        : "bg-white dark:bg-zinc-900 border-slate-100 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 shadow-sm"
    }`}
  >
    <div className="flex justify-between items-start mb-10">
      <div
        className={`p-3 rounded-xl ${featured ? "bg-white/10" : "bg-slate-50 dark:bg-zinc-800 text-[#007A5E]"}`}
      >
        {icon}
      </div>
      <ArrowUpRight
        className={`w-5 h-5 ${featured ? "text-white/40" : "text-slate-300 group-hover:text-[#007A5E]"} transition-colors`}
      />
    </div>
    <h3
      className={`text-base font-bold mb-3 ${featured ? "text-white" : "text-zinc-900 dark:text-zinc-100"}`}
    >
      {title}
    </h3>
    <p
      className={`text-xs leading-relaxed ${featured ? "text-green-50" : "text-slate-500 dark:text-zinc-400"}`}
    >
      {description}
    </p>
  </motion.div>
);

export const Services = ({ services }: { services: ServiceCardProps[] }) => (
  <section className="py-16 px-6 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-2xl md:text-3xl font-black mb-4 text-zinc-900 dark:text-white">
        Services Publics <span className="text-[#007A5E]">Numériques</span>
      </h2>
      <p className="text-slate-800 font-semibold dark:text-zinc-400 text-xs max-w-2xl mx-auto">
        Découvrez les outils digitaux mis à disposition par l&apos;État pour
        faciliter vos démarches au quotidien.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <ServiceCard key={i} {...s} />
      ))}
    </div>
  </section>
);
