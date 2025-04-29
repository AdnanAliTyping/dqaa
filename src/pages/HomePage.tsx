
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedNews from "@/components/home/FeaturedNews";
import QuickLinks from "@/components/home/QuickLinks";
import Testimonials from "@/components/home/Testimonials";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import RazorpayDonateButton from "@/components/RazorpayDonateButton";
import { useTranslation } from "@/lib/i18n";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroSection />
      
      {/* Welcome Message */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
                {t('academy.name')}
              </h2>
              <div className="text-xl mb-6 text-dqaa-600 font-arabic text-center">
                أكاديمية عبد الله لتحفيظ القران
              </div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {t('home.established')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczPsBVtemiyAIEKEROpFyAw0UoI7rRma98S4YRGe92pXb2DF2IhS4Zt6ZsKuX8ChujOcKcxEoR1c8S7as-LldnBjsI-DB1FPM9Vjgg2IJoYGaKARaKE=w2400" 
                  alt="DQAA Graduation" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold text-dqaa-500 mb-4">
                  {t('mission')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('mission.text')}
                </p>
                <div>
                  <Link to="/about">
                    <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                      {t('learnMore')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
              {t('home.whyChoose')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dqaa-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dqaa-500"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"/><path d="M21 11h-6a2 2 0 0 1-2-2V3"/><path d="M9 14v1.5"/><path d="M15 14v1.5"/></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-dqaa-500 mb-3">
                  {t('home.quranicExcellence')}
                </h3>
                <p className="text-gray-600">
                  {t('home.quranicExcellenceText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dqaa-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dqaa-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-dqaa-500 mb-3">
                  {t('home.academicFocus')}
                </h3>
                <p className="text-gray-600">
                  {t('home.academicFocusText')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-dqaa-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dqaa-500"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </div>
                <h3 className="text-xl font-display font-bold text-dqaa-500 mb-3">
                  {t('home.characterDev')}
                </h3>
                <p className="text-gray-600">
                  {t('home.characterDevText')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <ProgramsOverview />
      
      <QuickLinks />
      
      <FeaturedNews />
      
      <Testimonials />
      
      <section className="py-16 md:py-20 bg-dqaa-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
              {t('home.beginJourney')}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t('home.joinCommunity')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-dqaa-500 hover:bg-dqaa-600 text-white w-full">
                  {t('cta.apply')}
                </Button>
              </Link>
              <Link to="/campus#tour">
                <Button size="lg" variant="outline" className="border-dqaa-500 text-dqaa-500 hover:bg-dqaa-50 w-full">
                  {t('cta.tour')}
                </Button>
              </Link>
              <RazorpayDonateButton className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-400"></div>
      </section>
    </Layout>
  );
};

export default HomePage;
