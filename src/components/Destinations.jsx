'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const wine = '#722F37';

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
    country: "Doha",
    image: "/images/tour44.jpg",
    rating: 4.8,
    category: "Tropical",
    description: "Luxury experiences with modern Arabian culture."
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

  const filtered =
    activeFilter === 'All'
      ? destinations
      : destinations.filter(d => d.category === activeFilter);

  return (
    <section id="destinations" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: wine }}>
              Destinations
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3">
              Popular Destinations
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Handpicked locations offering the finest experiences for discerning travelers.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">

            {filters.map((filter) => (
              <motion.button
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  activeFilter === filter
                    ? 'text-white shadow-sm'
                    : 'bg-white text-black border-gray-200 hover:bg-gray-50'
                }`}
                style={
                  activeFilter === filter
                    ? { backgroundColor: wine, borderColor: wine }
                    : {}
                }
              >
                {filter}
              </motion.button>
            ))}

          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          layout
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4"
        >
          <AnimatePresence mode="popLayout">

            {filtered.map((dest, index) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group min-w-[85%] sm:min-w-[70%] md:min-w-0 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 snap-center"
              >

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />

                  {/* rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm border border-gray-200">

                    <Star className="w-4 h-4 fill-current" style={{ color: wine }} />
                    <span className="text-sm font-bold text-black">
                      {dest.rating}
                    </span>

                  </div>

                  {/* hover description */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-black/70 text-sm">
                      {dest.description}
                    </p>
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="flex items-center gap-2 mb-2" style={{ color: wine }}>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium text-gray-600">
                      {dest.country}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-2">
                    {dest.name}
                  </h3>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">

                    <div>
                      <span className="text-gray-400 text-sm">From</span>
                      <p className="text-lg font-bold" style={{ color: wine }}>
                        ——
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition"
                    >
                      <ArrowRight className="w-5 h-5 text-black" />
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