'use client';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import Placements from "@/components/Placements";
import ResearchInnovation from "@/components/ResearchInnovation";
import Visionaries from "@/components/Visionaries";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Lanyard from "@/components/Lanyard";
import AdmissionsModal from "@/components/AdmissionsModal";

export default function Home() {
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white selection:bg-gold selection:text-navy-deep overflow-x-hidden relative">
      <Navbar />
      
      {/* Lanyard floating at the top, entry point to Admissions */}
      <div className="fixed top-0 right-[5%] w-[300px] h-[600px] z-[150] pointer-events-none hidden lg:block">
        <Lanyard onClick={() => setIsAdmissionsOpen(true)} />
      </div>

      <Hero onExploreClick={() => setIsAdmissionsOpen(true)} />
      <NewsSection />
      <StatsSection />
      <DepartmentsGrid />
      
      {/* Removed Admissions section from main flow as per user request */}
      
      <Placements />
      <ResearchInnovation />
      <Visionaries />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Footer />

      {/* Admissions Modal triggered by the Lanyard */}
      <AdmissionsModal isOpen={isAdmissionsOpen} onClose={() => setIsAdmissionsOpen(false)} />
    </main>
  );
}
