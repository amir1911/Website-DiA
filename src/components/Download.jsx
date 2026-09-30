"use client";

import { config } from "@/config";
import { DownloadCloud, Info, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Download() {
  const isAvailable = config.downloadLinks.installer && config.downloadLinks.installer.length > 0;

  return (
    <section id="download" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations consistent with light theme */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 rounded-full bg-indigo-50 opacity-60 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Mulai Sekarang</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Unduh Aplikasi DiA</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Aplikasi desktop yang ringan, cepat, dan siap membantu Anda memproses ribuan surat tanpa hambatan.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {/* Main Download Card - Elegant White */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(37,99,235,0.07)] border border-slate-100 flex-1 flex flex-col relative overflow-hidden group"
          >
            {/* Top accent line */}
            <div className="absolute top-0 w-full left-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            
            <div className="flex-1">
              <h3 className="text-3xl font-black text-slate-900 mb-4">{config.app.name} untuk Desktop</h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-8">
                <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full font-bold border border-blue-100">
                  {config.app.version}
                </span>
                <span className="bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full font-medium">{config.app.os}</span>
                <span className="bg-slate-50 border border-slate-100 px-4 py-1.5 rounded-full font-medium">{config.app.size}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {['Lisensi gratis untuk penggunaan personal', 'Proses 100% offline tanpa internet', 'Tanpa batasan jumlah pembuatan surat'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {isAvailable ? (
              <motion.a
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href={config.downloadLinks.installer}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
              >
                <DownloadCloud size={24} />
                Download Installer
              </motion.a>
            ) : (
              <button
                disabled
                className="w-full bg-slate-100 text-slate-400 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed"
              >
                Segera Tersedia
              </button>
            )}
            {!isAvailable && (
              <p className="text-center text-sm text-slate-400 mt-4 font-medium">
                Update terbaru: {config.app.updateDate}
              </p>
            )}
          </motion.div>

          {/* Secondary Card - Elegant Soft Blue/Indigo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-blue-100/50 flex-1 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
          >
            <div>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-blue-100">
                <Info size={28} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Belum ada gambaran?</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Lihat dan unduh contoh file template Word beserta data Excel pasangannya untuk dicoba langsung di aplikasi.
              </p>
            </div>
            
            <div className="space-y-4">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={config.downloadLinks.exampleWord}
                className="block w-full bg-white hover:bg-slate-50 border border-slate-200 text-blue-700 text-center py-4 rounded-2xl font-bold transition-all shadow-sm"
              >
                Unduh Contoh Word (.docx)
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={config.downloadLinks.exampleExcel}
                className="block w-full bg-white hover:bg-slate-50 border border-slate-200 text-blue-700 text-center py-4 rounded-2xl font-bold transition-all shadow-sm"
              >
                Unduh Contoh Excel (.xlsx)
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
