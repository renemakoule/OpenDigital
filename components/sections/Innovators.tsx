import { motion } from "framer-motion";

export const Innovators = () => {
  const partners = [
    { name: "MINPOSTEL", color: "#007A5E" },
    { name: "ANTIC", color: "#CE1126" },
    { name: "CENADI", color: "#007A5E" },
    { name: "MINCOM", color: "#FCD116" },
    { name: "MINRESI", color: "#007A5E" },
  ];

  return (
    <section className="py-12 px-6 text-center bg-white dark:bg-zinc-950 transition-colors">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg font-bold mb-10 text-zinc-900 dark:text-white"
      >
        Partenaires Institutionnels
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="w-24 md:w-32 h-12 flex items-center justify-center grayscale opacity-40 dark:opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-sm font-black tracking-widest text-[#007A5E] dark:text-[#00a680]">
                {partner.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
