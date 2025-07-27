import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import YoutubeSection from "@/components/YoutubeSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-exo">
      <DisclaimerPopup />
      <Header />
      <HeroSection />
      <HowItWorks />
      <YoutubeSection />
      <Testimonials />
      <FAQ />
      <Disclaimer />
      <Footer />
    </div>
  );
};

export default Index;
