
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedNews from "@/components/home/FeaturedNews";
import QuickLinks from "@/components/home/QuickLinks";
import Testimonials from "@/components/home/Testimonials";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
              Welcome to Darul Quran Abdulla Academy
            </h2>
            <p className="text-gray-600 mb-8">
              Established in 2014, DQAA has been at the forefront of Islamic education, 
              combining traditional Quranic learning with modern academic curriculum. 
              Our holistic approach to education focuses on developing students 
              intellectually, spiritually, and morally to meet the challenges of the contemporary world.
            </p>
            <div className="flex justify-center">
              <Link to="/about">
                <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ProgramsOverview />
      
      <QuickLinks />
      
      <FeaturedNews />
      
      <Testimonials />
      
      {/* Call to Action */}
      <section className="py-20 bg-dqaa-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
              Begin Your Journey with DQAA
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join our community of learners and embark on a path of knowledge, faith, and excellence. 
              Applications for the upcoming academic year are now open.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-dqaa-500 hover:bg-dqaa-600 text-white w-full">
                  Apply Now
                </Button>
              </Link>
              <Link to="/campus#tour">
                <Button size="lg" variant="outline" className="border-dqaa-500 text-dqaa-500 hover:bg-dqaa-50 w-full">
                  Virtual Campus Tour
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
