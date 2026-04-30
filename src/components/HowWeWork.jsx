// app/sections/HowWeWork.tsx
'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, ClipboardList, Plane, Smile } from 'lucide-react';

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

// 👉 NEW: Companies section
const companies = [
  {
    name: "",
    logo: "/images/comm1.jpeg"
  },
  {
    name: "",
    logo: "/images/comm2.jpeg"
  },
  {
    name: "",
    logo: "/images/comm3.jpeg"
  },
  {
    name: "",
    logo: "/images/comm4.jpeg"
  },
   {
    name: "",
    logo: "/images/comm5.jpeg"
  }
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            How We Work
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A seamless journey from dream to departure.
          </p>
        </motion.div>

        {/* 👉 NEW: Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 bg-neutral-900 px-5 py-3 rounded-xl border border-neutral-800 hover:border-amber-500/30 transition"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-white text-sm font-medium">
                {company.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6"
              >
                <step.icon className="w-10 h-10 text-amber-400" />
              </motion.div>

              <div className="text-5xl font-bold text-amber-500/10 mb-4">
                {step.step}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-neutral-400">{step.description}</p>

              {index < 3 && (
                <div className="hidden md:block absolute top-10 right-0 w-full h-[2px] bg-gradient-to-r from-amber-500/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}