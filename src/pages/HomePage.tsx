
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
import IslamicStudyAssistant from "@/components/innovations/IslamicStudyAssistant";
import EnhancedPrayerTimes from "@/components/innovations/EnhancedPrayerTimes";
import QuranLearningHub from "@/components/innovations/QuranLearningHub";
import IslamicNewsTicker from "@/components/news/IslamicNewsTicker";
import IslamicEventCountdown from "@/components/events/IslamicEventCountdown";
import StickyActionButtons from "@/components/mobile/StickyActionButtons";
import EnhancedSEOHead from "@/components/seo/EnhancedSEOHead";
import { useTranslation } from "@/lib/i18n";

const HomePage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" }
  ];

  return (
    <Layout>
      <EnhancedSEOHead
        title={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി - കേരളത്തിലെ #1 ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം | 2025-26 പ്രവേശനം" :
          "Darul Quran Abdulla Academy - Kerala's #1 Islamic Education Institution | Admissions 2025-26"
        }
        description={isMalayalam ?
          "കേരളത്തിലെ മുൻനിര ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം - ഹിഫ്സ്, ശരീഅത്, ഡിപ്ലോമ പ്രോഗ്രാമുകൾ. AI അധിഷ്ഠിത ആധുനിക പഠനം, നമാസ് സമയം, ഖുർആൻ പഠനം. ഓട്ടപ്പാലം, കേരള. 100% വിജയനിരക്ക്. ഇപ്പോൾ അപേക്ഷിക്കുക!" :
          "Kerala's premier Islamic education institution offering Hifz, Shari'ah & diploma programs. AI-powered learning, prayer times, Quran study hub. Located in Ottapalam, Kerala. 100% success rate. Apply now for 2025-26!"
        }
        keywords="Darul Quran Abdulla Academy, Kerala Islamic education, Hifz program Kerala, Islamic boarding school, Quran memorization, prayer times Kerala, Islamic studies Ottapalam, AI Islamic education, ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി, കേരള ഇസ്ലാമിക് വിദ്യാഭ്യാസം, ഹിഫ്സ് പ്രോഗ്രാം, നമാസ് സമയം കേരള"
        url="https://www.darulquranaa.com/"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
        type="website"
      />

      {/* Islamic News Ticker */}
      <IslamicNewsTicker />

      <header role="banner">
        <HeroSection />
      </header>

      {/* Enhanced Prayer Times - Prominent Position */}
      <section aria-labelledby="prayer-times-heading">
        <h2 id="prayer-times-heading" className="sr-only">
          {isMalayalam ? "നമാസ് സമയം" : "Prayer Times"}
        </h2>
        <EnhancedPrayerTimes />
      </section>

      {/* Islamic Event Countdown */}
      <section aria-labelledby="islamic-events-heading">
        <h2 id="islamic-events-heading" className="sr-only">
          {isMalayalam ? "ഇസ്ലാമിക് ഇവന്റുകൾ" : "Islamic Events"}
        </h2>
        <IslamicEventCountdown />
      </section>

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

      <section aria-labelledby="islamic-assistant-heading" className="bg-gray-50">
        <h2 id="islamic-assistant-heading" className="sr-only">AI Islamic Study Assistant</h2>
        <IslamicStudyAssistant />
      </section>

      <section aria-labelledby="quran-learning-heading" className="bg-gray-50">
        <h2 id="quran-learning-heading" className="sr-only">Interactive Quran Learning Hub</h2>
        <QuranLearningHub />
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

      {/* Mobile Sticky Action Buttons */}
      <StickyActionButtons />
    </Layout>
  );
};

export default HomePage;
