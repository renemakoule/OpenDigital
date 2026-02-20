"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
}

const ProjectCard = ({ title, category, description }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-md p-5 flex flex-col items-start text-left shadow-sm hover:border-[#007A5E]/20 transition-all"
  >
    <span className="text-[9px] uppercase tracking-widest text-[#007A5E] font-bold mb-3">
      {category}
    </span>
    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-xs text-slate-500 dark:text-zinc-400 mb-6 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const Projects = () => {
  const projects = [
    {
      category: "Infrastructure",
      title: "Backbone National Fibre Optique",
      description:
        "Extension du réseau haut débit pour connecter toutes les régions du pays.",
    },
    {
      category: "Gouvernance",
      title: "Système Intégré de Gestion de l'État",
      description:
        "Modernisation des processus budgétaires et financiers de l'administration.",
    },
    {
      category: "Social",
      title: "Plateforme Nationale de Protection Sociale",
      description:
        "Simplification de l'accès aux aides pour les familles vulnérables.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto text-center border-t border-slate-50 dark:border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-black mb-4 text-zinc-900 dark:text-white">
          Projets <span className="text-[#ecdd00]">Transformateurs</span>
        </h2>
        <p className="text-slate-800 font-semibold dark:text-zinc-400 text-xs max-w-2xl mx-auto">
          Découvrez les grands chantiers numériques qui façonnent le futur du
          Cameroun.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};
