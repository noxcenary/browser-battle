'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Hospital, BookOpen, Home, Server, Dumbbell, Heart, Users, Globe } from 'lucide-react';

const facilities = [
  { icon: Hospital, name: "BMS Hospital", desc: "On-campus healthcare for students and staff." },
  { icon: BookOpen, name: "Central Library", desc: "Vast collection of books, journals & e-resources." },
  { icon: Home, name: "Hostels", desc: "Comfortable accommodation for outstation students." },
  { icon: Server, name: "Data Center", desc: "State-of-the-art computing infrastructure." },
  { icon: Dumbbell, name: "Sports Complex", desc: "Outdoor & indoor sports facilities." },
  { icon: Heart, name: "Counselling Center", desc: "Mental wellness support for all students." },
  { icon: Users, name: "NSS & NCC", desc: "Social service and discipline programs." },
  { icon: Globe, name: "International Cell", desc: "Support for OCI & foreign passport holders." }
];

export default function Facilities() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-navy-deep/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Campus Life</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              World-Class <span className="text-gold italic drop-shadow-sm">Facilities</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>Life at BMSCE</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="bg-[#F4F6F9] rounded-3xl p-8 group cursor-pointer hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 border border-navy-deep/5"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-navy-deep/5 shadow-sm flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                <fac.icon size={24} className="text-navy-deep group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-sans text-xl font-black text-navy-deep mb-3 leading-tight group-hover:text-gold transition-colors">{fac.name}</h3>
              <p className="text-navy-deep/60 font-sans text-xs leading-relaxed uppercase tracking-widest font-bold mb-6">{fac.desc}</p>
              <div className="flex items-center space-x-3 text-gold font-sans text-[10px] uppercase tracking-[0.2em] font-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span>Explore Facility</span>
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
