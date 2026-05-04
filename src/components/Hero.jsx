'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Crown, ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';



export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black-200">

      {/* Background Image */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
     <Image
  src="/images/tour11.jpg"
  alt="Luxury travel destination"
  fill
  priority
  className="object-cover opacity-60"
/>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
         <br />
         <br />
         <br />
         <br />
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 backdrop-blur-md border border-amber-500/20 text-amber-400 text-sm font-medium">
            <Crown className="w-4 h-2" />
            Premium Travel & Tour Experiences
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Discover Your Next
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            Great Adventure
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 1, delay: 0.9 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-10"
        >
          Curated journeys to the world’s most breathtaking destinations.
          Experience travel that transforms with full planning and VIP support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#destinations"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black rounded-full font-bold text-lg flex items-center justify-center gap-2"
          >
            Explore Destinations
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-lg"
          >
            Get a Quote
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400/60"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

    </section>
  );
}