'use client';

import { motion } from 'framer-motion';
import { Crown, ArrowUp } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-16 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-amber-500">
                <Crown className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">13th Luxe</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-amber-400">
                  Travel & Tours
                </span>
              </div>
            </div>
            <p className="leading-relaxed text-sm">
              Premium travel and tour services delivering seamless, stylish, and unforgettable journeys worldwide.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Tours', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Travel & Tours', 'Car Rentals', 'Airport Protocol', 'Visa Services', 'Concierge'].map(item => (
                <li key={item}>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <p className="text-sm mb-4">
              Stay connected for travel inspiration and exclusive deals.
            </p>

            <motion.a
              href="https://instagram.com/13thluxe_event"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
              @13thluxe_event
            </motion.a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-amber-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © 2024 13th Luxe Travel & Tours. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-amber-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 text-sm">
              Terms of Service
            </a>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 hover:bg-amber-500/20"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}