import HeroSection from "../components/salon/HeroSection";
import AboutSection from "../components/salon/AboutSection";
import DesignedForSection from "../components/salon/DesignedForSection";
import ExperienceSection from "../components/salon/ExperienceSection";
import ProductionsSection from "../components/salon/ProductionsSection";
import GallerySection from "../components/salon/GallerySection";
import ContactSection from "../components/salon/ContactSection";

export default function Home() {
  return (
    <main className="bg-white font-serif">
      <HeroSection />
      <AboutSection />
      <DesignedForSection />
      <ExperienceSection />
      <ProductionsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}