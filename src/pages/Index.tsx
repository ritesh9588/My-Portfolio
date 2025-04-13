
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
const Index = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Experience />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
