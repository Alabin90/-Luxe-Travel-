// app/sections/Tours.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Car, Shield, Crown, Heart, MapPin, Plane, Hotel } from 'lucide-react';
import Image from 'next/image';

const tours = [
  {
    id: 1,
    title: "Curated Travel & Tours",
    description: "Bespoke journeys with full planning, visa assistance, and 24/7 support.",
    icon: Plane,
    image: "/images/plane1.jpg"
  },
  {
    id: 2,
    title: "Luxury Car Rentals",
    description: "Premium vehicles, buses, and trucks with professional drivers.",
    icon: Car,
    image: "/images/plane2.jpg"
  },
  {
    id: 3,
    title: "Airport Protocol",
    description: "VIP handling from touchdown to exit. No queues, no stress.",
    icon: Crown,
    image: "/images/plane3.jpg"
  },
  {
    id: 4,
    title: "Travel Security",
    description: "Reliable MOPOL and private security for your peace of mind.",
    icon: Shield,
    image: "/images/plane4.jpg"
  },
  {
    id: 5,
    title: "Travel Concierge",
    description: "Personal assistant on standby for every travel need.",
    icon: Heart,
    image: "/images/plane5.jpg"
  },
  {
    id: 6,
    title: "Premium Accommodation",
    description: "Impeccable apartments and hotels in perfect locations.",
    icon: Hotel,
    image: "/images/plane6.jpg"
  },
  {
    id: 7,
    title: "Visa Services",
    description: "Schengen, UK, USA, Singapore visas handled with expertise.",
    icon: Globe,
    image: "/images/plane7.jpg"
  },
  {
    id: 8,
    title: "Local Tours",
    description: "Guided experiences showing you the hidden gems of every destination.",
    icon: MapPin,
    image: "/images/plane8.jpg"
  }
];

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function Tours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tours" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Everything you need for a seamless, luxurious journey.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              variants={scaleIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl bg-neutral-900 aspect-[4/5] border border-amber-500/10 hover:border-amber-500/30 transition-colors">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30"
                  >
                    <tour.icon className="w-7 h-7 text-black" />
                  </motion.div>
                  <h3 className="text-white text-lg font-bold mb-2">{tour.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{tour.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}