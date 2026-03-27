'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Users, Building, Percent } from 'lucide-react';

const stats = [
  { icon: Trophy, value: "₹44 LPA", label: "Highest Package", desc: "International offer — AY 2024-25" },
  { icon: Trophy, value: "#1", label: "Placement Rank", desc: "Times Engineering Survey 2019" },
  { icon: Building, value: "250+", label: "Recruiting Partners", desc: "Fortune 500 & top Indian firms" },
  { icon: Percent, value: "90%+", label: "Placement Rate", desc: "Consistent across programs" }
];

const companies = [
  "Google", "Microsoft", "Amazon", "Infosys", "Wipro", "TCS", "Accenture", "Deloitte", "IBM", "Cisco", "Intel", "Qualcomm", "Bosch", "Siemens", "ABB", "Oracle", "SAP", "Capgemini", "HCL", "Tech Mahindra", "L&T", "ISRO", "DRDO", "BHEL"
];

export default function Placements() {
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
              <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Career Outcomes</span>
            </div>
            <h2 className="font-sans text-4xl lg:text-5xl font-black text-navy-deep leading-tight">
              Placements & <span className="text-gold italic drop-shadow-sm">Industry Impact</span>
            </h2>
          </div>
          <button className="flex items-center space-x-3 text-gold font-sans text-[11px] uppercase tracking-[0.2em] font-black hover:text-navy-deep transition-all group border-b border-gold/30 pb-2">
            <span>Download Placement Report</span>
            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
              className="bg-[#F4F6F9] p-8 rounded-3xl text-center group hover:bg-white hover:border-gold/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 border border-navy-deep/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-navy-deep/5 shadow-sm flex items-center justify-center mx-auto mb-8 group-hover:bg-gold transition-colors duration-500">
                <stat.icon size={24} className="text-navy-deep group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="font-sans text-5xl font-black text-navy-deep mb-3 group-hover:text-gold transition-colors duration-500">{stat.value}</div>
              <div className="font-sans text-navy-deep/80 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{stat.label}</div>
              <div className="text-navy-deep/50 font-sans text-[10px] uppercase tracking-[0.1em] font-bold leading-relaxed">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Company Marquee - Refined */}
        <div className="space-y-10 mb-20">
          <div className="flex items-center justify-center space-x-6">
            <div className="h-px bg-navy-deep/5 flex-1" />
            <div className="font-sans font-black text-navy-deep/40 uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">
              Trusted by 250+ Industry Leaders
            </div>
            <div className="h-px bg-navy-deep/5 flex-1" />
          </div>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative overflow-hidden py-4"
          >
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex whitespace-nowrap animate-marquee">
              {[...companies, ...companies].map((company, i) => (
                <div key={i} className="mx-4 px-10 py-4 glass-card bg-white/50 border border-navy-deep/5 text-navy-deep/60 font-sans font-black text-lg min-w-[180px] text-center shadow-sm hover:text-navy-deep hover:border-gold/30 hover:bg-white transition-all duration-500 cursor-default rounded-2xl">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8FAFC] rounded-3xl border border-navy-deep/5 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group shadow-sm"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
          <div className="space-y-4 text-center lg:text-left relative z-10 max-w-2xl">
            <h3 className="font-sans text-4xl font-black text-navy-deep">Looking to recruit at BMSCE?</h3>
            <p className="text-navy-deep/60 font-sans text-sm leading-relaxed font-medium">
              Our Placement Cell facilitates seamless recruitment drives for global industry leaders, providing access to a diverse pool of highly skilled engineering talent.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-deep text-white px-10 py-4 rounded-xl font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-navy-deep transition-all duration-300 shadow-md"
            >
              Corporate Relations
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-xl border-2 border-navy-deep/10 text-navy-deep font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:border-gold transition-all duration-300"
            >
              Placement Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
