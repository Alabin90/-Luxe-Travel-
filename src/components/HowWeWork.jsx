'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ClipboardList, Plane, Smile } from 'lucide-react';

const wine = '#722F37';

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Consultation",
    description: "We understand your travel vision, needs, and expectations."
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Planning & Strategy",
    description: "We create a tailored itinerary covering all aspects of your trip."
  },
  {
    step: "03",
    icon: Plane,
    title: "Execution",
    description: "Our team delivers with precision—from flights to accommodation."
  },
  {
    step: "04",
    icon: Smile,
    title: "Experience",
    description: "You enjoy a seamless, stress-free journey of a lifetime."
  }
];

const companies = [
  { name: "", logo: "/images/comm1.jpeg" },
  { name: "", logo: "/images/comm2.jpeg" },
  { name: "", logo: "/images/comm3.jpeg" },
  { name: "", logo: "/images/comm4.jpeg" },
  { name: "", logo: "/images/comm5.jpeg" }
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: wine }}>
            Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-4">
            How We Work
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A seamless journey from dream to departure.
          </p>
        </motion.div>

        {/* COMPANY LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-16">

          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={50}
                height={50}
                className="object-contain"
              />

              {company.name && (
                <span className="text-black text-sm font-medium">
                  {company.name}
                </span>
              )}
            </motion.div>
          ))}

        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >

              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto rounded-2xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm"
              >
                <step.icon className="w-10 h-10" style={{ color: wine }} />
              </motion.div>

              {/* STEP NUMBER */}
              <div className="text-5xl font-bold mb-4" style={{ color: '#f3f3f3' }}>
                {step.step}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-black mb-3">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500">
                {step.description}
              </p>

              {/* CONNECT LINE (desktop only) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-10 right-0 w-full h-[2px] bg-gradient-to-r from-gray-200 to-transparent" />
              )}

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}