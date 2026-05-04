// app/sections/Destinations.tsx
'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Greece",
    image: "/images/tour3.jpg",
    rating: 4.9,
    category: "Beach",
    description: "White-washed buildings and stunning sunsets over the Aegean Sea."
  },
  {
    id: 2,
    name: "Qatar",
    country: " Doha",
    image: "/images/tour44.jpg",
    rating: 4.8,
    category: "Tropical",
    description: "Lush rice terraces, ancient temples, and pristine beaches."
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    image: "/images/tour5.jpg",
    rating: 5.0,
    category: "Luxury",
    description: "Ultra-modern architecture meets Arabian heritage and desert adventures."
  },
  {
    id: 4,
    name: "Maldives",
    country: "Maldives",
    image: "/images/tour6.jpg",
    rating: 4.9,
    category: "Luxury",
    description: "Crystal clear waters and overwater bungalows."
  },
  {
    id: 5,
    name: "Paris",
    country: "France",
    image: "/images/tour7.jpg",
    rating: 4.7,
    category: "Culture",
    description: "The city of lights, romance, and world-class cuisine."
  },
  {
    id: 6,
    name: "Cape Town",
    country: "South Africa",
    image: "/images/tour8.jpg",
    rating: 4.8,
    category: "Adventure",
    description: "Stunning coastlines, Table Mountain, and safari experiences."
  }
];

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = ['All', 'Luxury', 'Beach', 'Tropical', 'Culture', 'Adventure'];
  
  const filtered = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(d => d.category === activeFilter);

  return (
    <section id="destinations" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Destinations</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Popular Destinations
            </h2>
            <p className="text-neutral-400 mt-4 max-w-xl">
              Handpicked locations offering the finest experiences for discerning travelers.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25'
                    : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-amber-500/10'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ✅ MOBILE: horizontal scroll | DESKTOP: grid */}
        <motion.div
          layout
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4"
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((dest, index) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}

                // *✅ THIS MAKES SLIDE WORK 
                className="group min-w-[85%] sm:min-w-[70%] md:min-w-0 bg-neutral-900 rounded-3xl overflow-hidden border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 snap-center"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-black">{dest.rating}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm">{dest.description}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-amber-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{dest.country}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
                    <div>
                      <span className="text-neutral-500 text-sm">From</span>
                      <p className="text-xl font-bold text-amber-400">{dest.price}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-black transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}