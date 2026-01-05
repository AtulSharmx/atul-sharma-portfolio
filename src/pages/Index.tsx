import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectSection from "@/components/sections/ProjectSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LinksSection from "@/components/sections/LinksSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <TestimonialsSection />
        <LinksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
