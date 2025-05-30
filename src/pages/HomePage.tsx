
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
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/lib/i18n";

const HomePage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" }
  ];

  return (
    <Layout>
      <SEOHead
        title={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി - കേരളത്തിലെ പ്രമുഖ ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം" :
          "Darul Quran Abdulla Academy - Premier Islamic Education in Kerala"
        }
        description={isMalayalam ?
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി ഹിഫ്സ്, ശരീഅത്, ഡിപ്ലോമ പ്രോഗ്രാമുകളോടുകൂടിയ സമഗ്രമായ ഇസ്ലാമിക് വിദ്യാഭ്യാസം നൽകുന്നു. പാണമന്ന, കേരളത്തിൽ സ്ഥിതി ചെയ്യുന്നു. 2025-26 പ്രവേശനം തുറന്നിരിക്കുന്നു." :
          "Darul Quran Abdulla Academy offers comprehensive Islamic education with Hifz, Shari'ah, and diploma programs. Located in Panamanna, Kerala. Admissions open for 2025-26."
        }
        keywords="Darul Quran, Islamic education Kerala, Hifz program, Shari'ah studies, Islamic academy Panamanna, Quran memorization, Islamic boarding school, Kerala madrasah, Islamic university Kerala"
        url="https://www.darulquranaa.com/"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
      />

      <header role="banner">
        <HeroSection />
      </header>

      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Academy Statistics</h2>
        <CountUpSection />
      </section>

      <section aria-labelledby="programs-heading">
        <h2 id="programs-heading" className="sr-only">Academic Programs Overview</h2>
        <ProgramsOverview />
      </section>

      <section aria-labelledby="achievements-heading">
        <h2 id="achievements-heading" className="sr-only">Academic Achievements</h2>
        <AcademicAchievements />
      </section>

      <section aria-labelledby="news-heading">
        <h2 id="news-heading" className="sr-only">Featured News and Events</h2>
        <FeaturedNews />
      </section>

      <section aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">Photo Gallery</h2>
        <PhotoGallery />
      </section>

      <section aria-labelledby="videos-heading">
        <h2 id="videos-heading" className="sr-only">Video Gallery</h2>
        <VideoGallery />
      </section>

      <section aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading" className="sr-only">Student and Parent Testimonials</h2>
        <Testimonials />
      </section>

      <section aria-labelledby="quick-links-heading">
        <h2 id="quick-links-heading" className="sr-only">Quick Links</h2>
        <QuickLinks />
      </section>
    </Layout>
  );
};

export default HomePage;
