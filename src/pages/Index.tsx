
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import NetworkShowcase from "@/components/NetworkShowcase";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import ChatSupport from "@/components/ChatSupport";
import LogoSpinner from "@/components/LogoSpinner";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <div className="py-16 flex justify-center">
          <LogoSpinner size="large" className="drop-shadow-xl" />
        </div>
        <Stats />
        <Services />
        <NetworkShowcase />
        <Features />
        <ServiceAreaMap />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  );
};

export default Index;
