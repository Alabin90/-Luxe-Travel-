'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Car, Shield, Crown, Heart, MapPin, Plane, Hotel } from 'lucide-react';
import Image from 'next/image';

const wine = '#722F37';

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
    image: "/images/plane33.jpg"
  },
  {
    id: 4,
    title: "Travel Security",
    description: "Reliable MOPOL and private security for your peace of mind.",
    icon: Shield,
    image: "/images/plane44.jpg"
  },
  {
    id: 5,
    title: "Travel Concierge",
    description: "Personal assistant on standby for every travel need.",
    icon: Heart,
    image: "/images/plane55.jpg"
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

export default function Tours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tours" className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: wine }}>
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
            Complete Travel Solutions
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need for a seamless, luxurious journey.
          </p>
        </motion.div>

      </div>

      {/* 🔥 MARQUEE TRACK (USING SAME CARD DESIGN) */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: ['0%', '-50%']
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
        >

          {[...tours, ...tours].map((tour, index) => (
            <div
              key={index}
              className="group cursor-pointer w-[320px] shrink-0"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white aspect-[4/5] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500">

                {/* IMAGE */}
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

                {/* CONTENT (UNCHANGED CARD STRUCTURE) */}
                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
                    <tour.icon className="w-7 h-7" style={{ color: wine }} />
                  </div>

                  <h3 className="text-black text-lg font-bold mb-2">
                    {tour.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {tour.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}