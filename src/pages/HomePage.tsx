
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import CountUpSection from "@/components/home/CountUpSection";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import AcademicAchievements from "@/components/home/AcademicAchievements";
import FeaturedNews from "@/components/home/FeaturedNews";
import PhotoGallery from "@/components/home/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/home/Testimonials";
import QuickLinks from "@/components/home/QuickLinks";
import { Helmet } from "react-helmet-async";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/schema";
import SchemaProvider from "@/components/SchemaProvider";

const HomePage = () => {
  const schemas = [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ];

  return (
    <SchemaProvider schemas={schemas}>
      <Layout>
        <Helmet>
          <title>Darul Quran Abdulla Academy - Premier Islamic Education in Kerala</title>
          <meta 
            name="description" 
            content="Darul Quran Abdulla Academy offers comprehensive Islamic education with Hifz, Shari'ah, and diploma programs. Located in Panamanna, Kerala. Admissions open for 2025-26." 
          />
          <meta 
            name="keywords" 
            content="Darul Quran, Islamic education Kerala, Hifz program, Shari'ah studies, Islamic academy Panamanna, Quran memorization, Islamic boarding school" 
          />
          <link rel="canonical" href="https://www.darulquranaa.com/" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Darul Quran Abdulla Academy - Premier Islamic Education" />
          <meta property="og:description" content="Comprehensive Islamic education with Hifz, Shari'ah, and diploma programs in Kerala" />
          <meta property="og:image" content="https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" />
          <meta property="og:url" content="https://www.darulquranaa.com/" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Darul Quran Abdulla Academy" />
          <meta name="twitter:description" content="Premier Islamic education in Kerala" />
          <meta name="twitter:image" content="https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" />
        </Helmet>

        <HeroSection />
        <CountUpSection />
        <ProgramsOverview />
        <AcademicAchievements />
        <FeaturedNews />
        <PhotoGallery />
        <VideoGallery />
        <Testimonials />
        <QuickLinks />
      </Layout>
    </SchemaProvider>
  );
};

export default HomePage;
