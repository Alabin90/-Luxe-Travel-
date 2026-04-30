// app/sections/Stats.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Heart, MapPin, Star } from 'lucide-react';

const stats = [
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Heart, value: "10K+", label: "Happy Travelers" },
  { icon: MapPin, value: "500+", label: "Tours Completed" },
  { icon: Star, value: "4.9", label: "Average Rating" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-neutral-950 border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 mb-4 border border-amber-500/20"
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-neutral-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}