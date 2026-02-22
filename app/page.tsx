"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { TrustSection } from "@/components/sections/Trust";
import { Projects } from "@/components/sections/Projects";
import { Innovators } from "@/components/sections/Innovators";
import { CameroonArc } from "@/components/ui/CameroonArc";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { motion } from "framer-motion";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <ScrollToTop />

      {/* Sceau de la République (Background Watermark) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[-1] opacity-[0.1] dark:opacity-[0.15]">
        <img
          src="/sceau.png"
          alt="Sceau de la République"
          className="w-[270px] md:w-[380px] h-auto object-contain animate-seal-pulse"
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 px-6 flex flex-col items-center text-center">
        {/* --- L'EFFET ARC-EN-CIEL (SVG CAMEROUN) --- */}

        <CameroonArc />

        {/* Contenu (Z-index élevé) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 leading-[1.1] text-zinc-900 dark:text-white">
            L&apos;Innovation au Service <br />
            <span className="text-[#007A5E]">du Citoyen Camerounais.</span>
          </h1>

          <p className="text-slate-800 dark:text-zinc-400 text-sm md:text-base max-w-2xl mx-auto mt-8 leading-relaxed">
            Accédez à tous les services publics numériques du Cameroun en un
            seul clic. Transparence, efficacité et modernité pour construire
            notre nation digitale.
          </p>

          <div className="flex justify-center items-center mt-5">
            <button className="rounded-md px-8 py-3 text-sm bg-[#007A5E] hover:bg-[#005c46] text-white border-none">
              Services aux Citoyens
            </button>
          </div>
        </motion.div>
      </section>

      <Stats />

      {/* Services Section */}
      <Services
        services={[
          {
            title: "Identité Numérique",
            description:
              "Gérez votre CNI numérique et vos documents d'état civil en toute sécurité.",
            icon: (
              <div className="w-5 h-5 flex items-center justify-center border-t-2 border-l-2 border-[#007A5E] rounded-sm opacity-80">
                <span className="text-[10px] font-bold text-[#007A5E]">ID</span>
              </div>
            ),
          },
          {
            title: "e-Administration",
            description:
              "Dépôt de dossiers, suivi de requêtes et procédures administratives dématérialisées.",
            icon: (
              <div className="w-5 h-5 flex items-center justify-center border-t-2 border-l-2 border-[#ce1126] rounded-sm opacity-80">
                <span className="text-[10px] font-bold text-[#ce1126]">
                  GOV
                </span>
              </div>
            ),
            featured: true,
          },
          {
            title: "Création d'Entreprise",
            description:
              "Lancez votre activité en 72h avec notre guichet unique 100% digital.",
            icon: (
              <div className="w-5 h-5 flex items-center justify-center border-t-2 border-l-2 border-[#fcd116] rounded-sm opacity-80">
                <span className="text-[10px] font-bold text-[#fcd116]">
                  BIZ
                </span>
              </div>
            ),
          },
          {
            title: "Éducation & Formation",
            description:
              "Accès aux ressources pédagogiques nationales et inscriptions scolaires.",
            icon: (
              <div className="w-5 h-5 flex items-center justify-center border-t-2 border-l-2 border-[#007A5E] rounded-sm opacity-80">
                <span className="text-[10px] font-bold text-[#007A5E]">
                  EDU
                </span>
              </div>
            ),
          },
          {
            title: "Santé Digitale",
            description:
              "Prenez rendez-vous et accédez à votre carnet de santé électronique national.",
            icon: (
              <div className="w-5 h-5 flex items-center justify-center border-t-2 border-l-2 border-[#ce1126] rounded-sm opacity-80">
                <span className="text-[10px] font-bold text-[#ce1126]">
                  MED
                </span>
              </div>
            ),
          },
          {
            title: "Transparence Publique",
            description:
              "Suivi des projets de développement et accès aux données ouvertes du pays.",
            icon: (
              <div className="w-5 h-5 flex items-center justify-center border-t-2 border-l-2 border-[#fcd116] rounded-sm opacity-80">
                <span className="text-[10px] font-bold text-[#fcd116]">
                  DATA
                </span>
              </div>
            ),
          },
        ]}
      />

      {/* Trust Section */}
      <TrustSection
        stats={[
          { id: "01", title: "Sécurisé par le CENADI" },
          { id: "02", title: "Interconnecté Nationalement" },
          { id: "03", title: "Disponible 24h/24 & 7j/7" },
          { id: "04", title: "Support Dédié à Yaoundé" },
        ]}
      />

      <Projects />
      <Innovators />
      <Footer />
    </main>
  );
}
