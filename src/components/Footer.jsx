"use client";

import { config } from "@/config";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white text-lg font-black shadow-md">
              D
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">{config.app.name}</span>
            <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-md font-semibold">v{config.app.version}</span>
          </div>
          <p className="text-slate-500 text-sm mt-2 text-center md:text-left max-w-xs">
            Solusi otomatisasi dokumen massal tercepat dan termudah.
          </p>
        </div>
        
        <p className="text-slate-400 text-sm text-center font-medium">
          &copy; {currentYear} {config.app.name}. All rights reserved.
        </p>

        <div className="flex gap-6">
          {['Beranda', 'Panduan', 'FAQ'].map((item) => (
            <motion.a 
              key={item}
              whileHover={{ y: -2 }}
              href={`#${item.toLowerCase() === 'beranda' ? 'hero' : item.toLowerCase()}`} 
              className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            whileHover={{ y: -2 }}
            href={`mailto:${config.contact.email}`} 
            className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors"
          >
            Kontak
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
