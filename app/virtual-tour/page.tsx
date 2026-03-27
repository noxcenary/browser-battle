'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import { MapPin, Library, TestTube, MonitorPlay, Building2, Eye, Compass, Navigation } from 'lucide-react';
import Link from 'next/link';

const spots = [
  { icon: Building2, title: "Main Academic Block", desc: "The cornerstone of BMSCE's legacy." },
  { icon: Library, title: "Central Library", desc: "A vast repository of knowledge & digital resources." },
  { icon: TestTube, title: "Innovation Labs", desc: "State-of-the-art research facilities." },
  { icon: MonitorPlay, title: "Data Center", desc: "High-performance computing infrastructure." },
  { icon: Navigation, title: "Sports Complex", desc: "Indoor stadiums and massive outdoor fields." },
  { icon: Compass, title: "Student Hostels", desc: "Comfortable and secure residential halls." }
];

export default function VirtualTourPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-gold selection:text-navy-deep overflow-x-hidden pt-32">
      <Navbar />

      <header className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-16 text-center">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 mb-6">
             <div className="w-8 h-[2px] bg-gold" />
             <span className="font-sans text-[11px] text-navy-deep/50 uppercase tracking-[0.4em] font-bold">Immersive Experience</span>
             <div className="w-8 h-[2px] bg-gold" />
          </div>
          <h1 className="font-sans text-5xl lg:text-7xl font-black text-navy-deep tracking-tight mb-6">Virtual <span className="text-gold italic drop-shadow-sm">Campus Tour</span></h1>
          <p className="max-w-2xl mx-auto text-navy-deep/60 font-sans leading-relaxed text-sm font-medium">
             Step inside our beautiful campus from anywhere in the world. Explore our academic blocks, cutting-edge labs, and vibrant student spaces in interactive 360°.
          </p>
        </motion.div>
      </header>

      {/* Main 360 Video Player */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-24">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-navy-deep/10 bg-[#F4F6F9] group"
         >
           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 bg-gradient-to-t from-navy-deep/50 to-transparent">
              <div className="w-20 h-20 rounded-full glass-card border-none bg-white/20 flex items-center justify-center backdrop-blur-md mb-6 animate-pulse-glow group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-gold/10">
                 <Eye size={36} className="text-white drop-shadow-lg" />
              </div>
              <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-white drop-shadow-lg bg-navy-deep/50 px-4 py-2 rounded-full border border-white/20">Click & Drag to Look Around</span>
           </div>
           
           <iframe 
             src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0" // Placeholder for an actual 360 tour or campus drone video
             className="w-full h-full object-cover scale-[1.05]"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
           ></iframe>
         </motion.div>
      </section>

      {/* Explore Specific Spots */}
      <section className="py-24 bg-[#F4F6F9] relative overflow-hidden border-t border-navy-deep/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 blur-3xl rounded-full opacity-60 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans text-3xl font-black text-navy-deep">Explore Campus Spots directly</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto mt-6 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spots.map((spot, idx) => (
              <motion.div
                key={spot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card bg-white p-8 rounded-3xl group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-500 relative flex flex-col items-center text-center overflow-hidden border border-navy-deep/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F8FAFC] flex items-center justify-center mb-6 shadow-sm border border-navy-deep/5 group-hover:bg-gold transition-colors duration-500">
                  <spot.icon size={28} className="text-navy-deep group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-sans font-black text-xl text-navy-deep mb-3 group-hover:text-gold transition-colors">{spot.title}</h3>
                <p className="font-sans text-navy-deep/60 text-sm font-medium leading-relaxed max-w-xs">{spot.desc}</p>
                
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <MapPin size={24} className="text-gold/40" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
