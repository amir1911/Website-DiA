"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { config } from "@/config";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Fitur", href: "#fitur" },
    { name: "Panduan", href: "#panduan" },
    { name: "Download", href: "#download" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleMobileNavClick = () => {
    // Delay slightly to let the native browser hash navigation run first
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200/50' : 'bg-transparent'}`}
    >
      <div className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex-shrink-0 flex items-center">
              <a href="#hero" className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-lg">
                  D
                </div>
                {config.app.name}
              </a>
            </div>
            <div className="hidden md:flex space-x-1 items-center bg-white/50 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/50 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 px-4 py-2 rounded-full transition-all font-medium text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                className="bg-slate-900 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors text-sm shadow-lg shadow-slate-900/20"
              >
                Download
              </motion.a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-800 hover:text-blue-600 focus:outline-none p-2 relative z-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute top-full left-0 w-full shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#download"
                onClick={handleMobileNavClick}
                className="block mt-4 text-center bg-blue-600 text-white px-4 py-3 text-base font-bold rounded-xl shadow-lg shadow-blue-500/30"
              >
                Download Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
