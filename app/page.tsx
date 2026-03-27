import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import DepartmentsGrid from "@/components/DepartmentsGrid";
import Admissions from "@/components/Admissions";
import Placements from "@/components/Placements";
import ResearchInnovation from "@/components/ResearchInnovation";
import Visionaries from "@/components/Visionaries";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-gold selection:text-navy-deep overflow-x-hidden">
      <Navbar />
      <Hero />
      <NewsSection />
      <StatsSection />
      <DepartmentsGrid />
      <Admissions />
      <Placements />
      <ResearchInnovation />
      <Visionaries />
      <Facilities />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
