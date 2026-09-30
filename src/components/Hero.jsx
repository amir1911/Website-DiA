"use client";

import { ArrowRight, Files, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background gradients & grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px] animate-pulse"></div>
      <div className="absolute right-0 bottom-0 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-500 opacity-10 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-sm font-semibold mb-6 border border-blue-200 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-blue-600" />
              <span>Otomatisasi Dokumen</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Satu Template, <br className="hidden lg:block"/>Banyak Surat. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Beres Sekali Proses.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tinggalkan cara manual. Buat ratusan surat dalam hitungan detik hanya menggunakan template Word Anda dan data dari Excel. Cocok untuk mahasiswa, kepanitiaan, dan staf administrasi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#download"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Download Aplikasi
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#panduan"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                Lihat Cara Kerja
              </motion.a>
            </div>
          </motion.div>

          {/* Cool Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-1 w-full max-w-lg lg:max-w-xl mx-auto lg:mx-0 relative perspective-1000 z-10"
          >
            <motion.div 
              whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/70 rounded-3xl shadow-2xl p-6 md:p-8 border border-white/50 relative overflow-hidden backdrop-blur-2xl z-10 transition-transform duration-500"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 w-full left-0 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-green-400"></div>

              <div className="flex items-center justify-between relative h-64 md:h-72">
                {/* Left Side: Inputs */}
                <div className="flex flex-col gap-6 w-[40%]">
                  {/* Word Document */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-blue-100 p-4 flex flex-col items-center justify-center transform -rotate-3 relative z-20 cursor-default"
                  >
                    <div className="w-14 h-14 flex items-center justify-center mb-3">
                      <img src="/images/word.webp" alt="Word Logo" className="w-full h-full object-contain drop-shadow-sm" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">Template.docx</span>
                    <span className="text-[10px] text-slate-500 mt-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">Ada Tag Parameter</span>
                  </motion.div>

                  {/* Excel Data */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                    className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-green-100 p-4 flex flex-col items-center justify-center transform rotate-3 relative z-20 cursor-default"
                  >
                    <div className="w-14 h-14 flex items-center justify-center mb-3">
                      <img src="/images/exsel.webp" alt="Excel Logo" className="w-full h-full object-contain drop-shadow-sm" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">Data.xlsx</span>
                    <span className="text-[10px] text-slate-500 mt-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">100 Baris Data</span>
                  </motion.div>
                </div>

                {/* Center: Processing Flow */}
                <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-md opacity-20 rounded-full animate-pulse"></div>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-blue-50 relative z-10"
                    >
                      <Sparkles className="text-blue-600" size={24} />
                    </motion.div>
                  </div>
                  {/* Flow lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent -z-10 border-t border-dashed border-blue-400"></div>
                </div>

                {/* Right Side: Output */}
                <div className="w-[40%] flex justify-end">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-blue-100 p-5 w-full flex flex-col items-center justify-center relative z-20 cursor-default"
                  >
                    {/* Stack Effect Backgrounds */}
                    <div className="absolute -top-3 left-3 right-3 h-4 bg-white/60 border border-slate-200 rounded-t-xl -z-10"></div>
                    <div className="absolute -top-1.5 left-1.5 right-1.5 h-4 bg-white/80 border border-slate-200 rounded-t-xl -z-10"></div>

                    <div className="relative mb-4 mt-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-xl flex items-center justify-center border border-blue-100">
                        <Files className="text-blue-600" size={36} />
                      </div>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md ring-2 ring-white"
                      >
                        <CheckCircle2 size={16} strokeWidth={3} />
                      </motion.div>
                    </div>

                    <span className="text-sm font-black text-slate-800">100 Surat</span>
                    <span className="text-xs font-medium text-green-600 mt-1 bg-green-50 px-2 py-0.5 rounded border border-green-100">Siap Cetak</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
