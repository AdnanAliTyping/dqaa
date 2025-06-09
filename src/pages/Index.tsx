
import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-5xl font-display text-estate-800 mb-16">Discover</h2>
          <PropertyGrid />
        </div>
      </section>

      <AboutUs />
      <OurVision />
      <Testimonials />
      <Footer />
      
      <div className="fixed bottom-6 right-6">
        <Link to="/home">
          <Button className="bg-dqaa-500 hover:bg-dqaa-600">
            Go to Main Website
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
