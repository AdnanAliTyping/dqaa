
import Layout from "@/components/Layout";
import MobileHeroSection from "@/components/mobile/MobileHeroSection";
import AboutMissionSection from "@/components/mobile/AboutMissionSection";
import MobileStatsSection from "@/components/mobile/MobileStatsSection";
import WhyChooseUsSection from "@/components/mobile/WhyChooseUsSection";
import QuickAccessPortal from "@/components/mobile/QuickAccessPortal";
import FeaturedNews from "@/components/home/FeaturedNews";
import Testimonials from "@/components/home/Testimonials";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import AcademicAchievements from "@/components/home/AcademicAchievements";
import PhotoGallery from "@/components/home/PhotoGallery";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import RazorpayDonateButton from "@/components/RazorpayDonateButton";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Announcements from "@/components/Announcements";
import CountUpSection from "@/components/home/CountUpSection";
import SchemaProvider from "@/components/SchemaProvider";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";
import { usePerformance } from "@/hooks/usePerformance";

const HomePage = () => {
  const { t } = useTranslation();
  usePerformance('home');

  const schemas = [
    generateWebsiteSchema(),
    generateOrganizationSchema()
  ];

  return (
    <SchemaProvider schemas={schemas}>
      <Layout>
        <Helmet>
          <title>Darul Quran Abdulla Academy | Islamic Education in Kerala</title>
          <meta 
            name="description" 
            content="Darul Quran Abdulla Academy offers premier Islamic education with Quranic memorization programs and modern academic curriculum in Kerala, India."
          />
          <meta 
            name="keywords" 
            content="Best Hifz-ul-Quran College in Kerala, Islamic School Ottapalam, Quran College Kerala, Modern Islamic School India, Hifz program for boys Kerala"
          />
          <link rel="canonical" href="https://www.darulquranaa.com/" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Darul Quran Abdulla Academy | Islamic Education in Kerala" />
          <meta property="og:description" content="Darul Quran Abdulla Academy offers premier Islamic education with Quranic memorization programs and modern academic curriculum in Kerala, India." />
          <meta property="og:url" content="https://www.darulquranaa.com/" />
          <meta property="og:image" content="https://www.darulquranaa.com/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Darul Quran Abdulla Academy | Islamic Education in Kerala" />
          <meta name="twitter:description" content="Darul Quran Abdulla Academy offers premier Islamic education with Quranic memorization programs and modern academic curriculum in Kerala, India." />
          <meta name="twitter:image" content="https://www.darulquranaa.com/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png" />
        </Helmet>
        
        <MobileHeroSection />
        
        <AboutMissionSection />
        
        <MobileStatsSection />
        
        <WhyChooseUsSection />
        
        <CountUpSection />
        
        <ProgramsOverview />
        
        <Announcements />
        
        <AcademicAchievements />
        
        <PhotoGallery />
        
        <FeaturedNews />
        
        <Testimonials />
        
        {/* Final Enroll Section with contrasting background */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-dqaa-800 to-dqaa-900 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust elements */}
              <div className="flex justify-center items-center gap-6 mb-6">
                <div className="bg-gold-400 text-dqaa-900 px-3 py-1 rounded-full text-sm font-medium">
                  Top Rated
                </div>
                <div className="bg-gold-400 text-dqaa-900 px-3 py-1 rounded-full text-sm font-medium">
                  Since 2014
                </div>
                <div className="bg-gold-400 text-dqaa-900 px-3 py-1 rounded-full text-sm font-medium">
                  100% Results
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Begin Your Journey
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Join thousands of students who have found success through our unique blend of Islamic and modern education.
              </p>
              
              {/* Parent testimonial */}
              <Card className="bg-white/10 border-white/20 mb-8 backdrop-blur-sm">
                <CardContent className="p-6">
                  <p className="text-white/90 italic mb-3">
                    "The education quality and moral values taught at DQAA have exceeded our expectations. 
                    Our son has grown both academically and spiritually."
                  </p>
                  <p className="text-gold-400 font-semibold">- Ahmad & Khadija, Parents</p>
                </CardContent>
              </Card>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/admissions">
                  <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-dqaa-900 w-full font-medium">
                    Begin Your Journey
                  </Button>
                </Link>
                <Link to="/campus#tour">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                    Schedule Campus Visit
                  </Button>
                </Link>
                <RazorpayDonateButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-400"></div>
        </section>
        
        <QuickAccessPortal />
        <FloatingWhatsApp phoneNumber="919447987960" />
      </Layout>
    </SchemaProvider>
  );
};

export default HomePage;
