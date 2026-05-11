// app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Menu, X } from 'lucide-react';

const wine = '#722F37'; // classy wine color

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Destinations', 'Tours', 'About', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <motion.a
  href="/"
  className="flex items-center gap-3"
  whileHover={{ scale: 1.05 }}
>
  <div className="p-2 rounded-xl bg-white border">
    <Image
      src="/images/LOGO.PNG"
      alt="Logo"
      width={40}
      height={40}
      className="object-contain"
    />
  </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-black">
              13th Luxe
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: wine }}>
              Travel & Tours
            </span>
          </div>
        </motion.a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wide uppercase text-black hover:opacity-70 transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{ color: 'black' }}
            >
              {item}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full font-semibold text-sm text-white"
            style={{ backgroundColor: wine }}
          >
            Book Now
          </motion.a>
        </div>

        {/* MOBILE BUTTON */}
        <button 
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium py-2 text-black hover:opacity-70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}