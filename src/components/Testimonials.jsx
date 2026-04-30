'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rabiu Simbiat",
    date: "4/6/2025",
    text: "When I booked my trip with you, I honestly didn't expect this level of excellence. Everything was seamless and luxurious.",
    location: "Bali Trip"
  },
  {
    id: 2,
    name: "Mr. Orilogbon",
    text: "I just wanted a simple Bali trip, but what I got was beyond expectations. I didn't even want to come back home.",
    location: "Bali Trip"
  },
  {
    id: 3,
    name: "Ola from the USA",
    date: "2/2/2025",
    text: "The apartment selection was impeccable. Perfect location and very comfortable.",
    location: "Accommodation"
  },
  {
    id: 4,
    name: "Linda",
    text: "Your car service was top notch. Clean car and always on time.",
    location: "Car Service"
  },
  {
    id: 5,
    name: "Unilever Nigeria",
    text: "Airport protocol service was extremely efficient and professional.",
    location: "Airport Protocol"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [index, setIndex] = useState(0);

  // ✅ FIXED useEffect (this is what was breaking your app before)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[index];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            What Travelers Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-amber-500/10 rounded-3xl p-10 text-center"
            >
              <Quote className="w-10 h-10 text-amber-500/20 mx-auto mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/80 mb-6 leading-relaxed text-lg max-w-2xl mx-auto">
                “{current?.text}”
              </p>

              {/* Name */}
              <h4 className="font-bold text-white text-lg">
                {current?.name}
              </h4>

              {/* Date */}
              {current?.date && (
                <p className="text-sm text-amber-400/60">
                  {current.date}
                </p>
              )}

              {/* Location */}
              <span className="inline-block mt-3 text-xs text-amber-400 px-4 py-1 rounded-full bg-amber-500/10">
                {current?.location}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded-full hover:bg-amber-500/10 transition"
            >
              Prev
            </button>

            <button
              onClick={nextSlide}
              className="px-4 py-2 border border-amber-500/30 text-amber-400 rounded-full hover:bg-amber-500/10 transition"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}