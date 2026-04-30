// app/sections/About.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Heart, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const values = [
  { icon: Camera, title: "Expert Photography Guides", desc: "Capture perfect moments with professional tips" },
  { icon: Heart, title: "Personalized Itineraries", desc: "Tailored to your unique preferences and pace" },
  { icon: MapPin, title: "Local Experiences", desc: "Authentic connections with local cultures" }
];

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const whyChooseUs = [
  "Detail-driven execution",
  "Strong planning & organization",
  "Trusted vendor network",
  "Seamless client experience",
  "Professional and reliable team",
  "Luxury service delivery"
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/tour2.jpg"
                alt="Travel experience"
                width={600}
                height={500}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-amber-500/30 rounded-3xl -z-10" />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-1/4 bg-neutral-900 p-4 rounded-2xl shadow-xl border border-amber-500/20 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="font-bold text-white">4.9/5</p>
                  <p className="text-xs text-neutral-500">Traveler Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              We Make Your Travel Dreams a Reality
            </h2>
            <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
              13th Luxe Travel & Tours is a premium travel brand built on expertise in planning, 
              organization, and execution. We specialize in delivering seamless, stylish, and 
              high-quality travel experiences for individuals, families, and corporate clients.
            </p>

            <div className="space-y-4 mb-10">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-900/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Mission", text: "Create unforgettable travel experiences through precision and excellence." },
                { label: "Vision", text: "Become a leading luxury travel brand globally." },
                { label: "Promise", text: "Every journey tailored to your dreams." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="p-4 rounded-2xl bg-neutral-900/50 border border-amber-500/10"
                >
                  <h4 className="font-bold text-amber-400 text-sm mb-2">{item.label}</h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}