import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlansSection";
import PortfolioSection from "@/components/PortfolioSection";
import SupportSection from "@/components/SupportSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PlansSection />
      <PortfolioSection />
      <SupportSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
