"use client";

import { Settings2, UploadCloud, Zap, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Settings2 className="text-blue-600 group-hover:text-blue-700 transition-colors" size={32} />,
      title: "Pengaturan Penamaan Fleksibel",
      description: "Atur sendiri nama folder hasil (ZIP) dan format nama file surat. Gunakan parameter seperti Surat - {{NAMA}} agar nama file menyesuaikan data."
    },
    {
      icon: <UploadCloud className="text-blue-600 group-hover:text-blue-700 transition-colors" size={32} />,
      title: "Integrasi Word & Excel",
      description: "Cukup unggah satu template Word (.docx) dan satu file data Excel (.xlsx). Setiap baris data pada Excel otomatis menjadi satu dokumen surat."
    },
    {
      icon: <Zap className="text-blue-600 group-hover:text-blue-700 transition-colors" size={32} />,
      title: "Pemrosesan Massal Instan",
      description: "Tinggalkan copy-paste manual. Aplikasi memproses ratusan hingga ribuan surat secara bersamaan hanya dengan satu kali klik."
    },
    {
      icon: <Activity className="text-blue-600 group-hover:text-blue-700 transition-colors" size={32} />,
      title: "Pantau Progres Real-Time",
      description: "Lihat langsung persentase progres dan jumlah file yang sudah diproses. Anda juga memegang kendali penuh untuk membatalkan proses kapan saja."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="fitur" className="scroll-mt-20 py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Fitur Unggulan</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Kenapa Menggunakan DiA?</h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            DiA dirancang untuk memberi Anda kendali penuh, efisiensi tinggi, dan transparansi selama proses pembuatan surat massal.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-8 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
