"use client";

import { Settings, Upload, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Guide() {
  const steps = [
    {
      number: "01",
      icon: <Settings size={28} />,
      title: "Atur Surat",
      description: "Pengguna menentukan nama folder ZIP, format nama file hasil, dan tag variabel yang akan diganti. Contohnya, menggunakan format 'Surat - {{NAMA}}'.",
      color: "bg-blue-100 text-blue-600 border-blue-200"
    },
    {
      number: "02",
      icon: <Upload size={28} />,
      title: "Unggah File",
      description: "Masukkan template surat berformat .docx yang memuat tag variabel serta unggah file .xlsx berisi data. Sistem akan membaca setiap baris data.",
      color: "bg-indigo-100 text-indigo-600 border-indigo-200"
    },
    {
      number: "03",
      icon: <PlayCircle size={28} />,
      title: "Buat Otomatis",
      description: "Aplikasi memproses surat massal. Pantau persentase progres, jumlah file berhasil diproses, dan Anda bisa membatalkan kapan pun.",
      color: "bg-emerald-100 text-emerald-600 border-emerald-200"
    }
  ];

  return (
    <section id="panduan" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Light modern background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Cara Kerja</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Hanya 3 Langkah Mudah</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Hasilkan ratusan surat secara otomatis, rapi, dan terstruktur tanpa perlu keahlian teknis khusus.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-500"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pt-12"
              >
                <div className="bg-white rounded-3xl p-8 border border-slate-200/60 shadow-lg shadow-slate-200/50 text-center relative h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl flex items-center justify-center font-bold shadow-md border ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="absolute top-4 right-6 text-slate-100 font-black text-6xl select-none">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-6 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
