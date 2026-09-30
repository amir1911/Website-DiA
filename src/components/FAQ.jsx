"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { config } from "@/config";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah format dan desain Word saya akan berubah?",
      answer: "Tidak, DiA akan mempertahankan format teks, tabel, font, ukuran, hingga margin yang ada di file Word asli Anda. Aplikasi hanya mengganti teks parameter saja."
    },
    {
      question: "Berapa banyak surat yang bisa dibuat sekaligus?",
      answer: "Sesuai dengan jumlah baris yang ada di Excel Anda. Jika ada 100 baris data, maka akan tercipta 100 file surat secara instan."
    },
    {
      question: "Apakah aplikasi ini butuh koneksi internet?",
      answer: "Tidak perlu. Seluruh pemrosesan (membaca Word, membuat Excel, hingga membuat banyak dokumen surat) dilakukan secara offline di komputer Anda."
    },
    {
      question: "Sistem operasi apa saja yang didukung?",
      answer: `Saat ini DiA mendukung ${config.app.os}.`
    },
    {
      question: "Apakah bisa diekspor langsung ke PDF?",
      answer: "Bisa langsung diekspor menjadi file PDF maupun Word."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Pertanyaan Umum</h2>
          <p className="text-slate-600 text-lg md:text-xl">
            Jawaban untuk beberapa pertanyaan yang sering diajukan seputar DiA.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-blue-500 bg-white shadow-lg shadow-blue-500/5' : 'border-slate-200 bg-white hover:border-blue-300'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg pr-4 transition-colors ${openIndex === index ? 'text-blue-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-3xl shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Masih punya pertanyaan?</h3>
            <p className="text-blue-100 mb-8 max-w-lg mx-auto text-lg">Jangan ragu untuk menghubungi kami jika Anda mengalami kendala atau memiliki saran fitur.</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${config.contact.email}`}
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              Hubungi Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
