import React, { Suspense, lazy } from 'react';
import HeroSection from "./HeroSection";
import CountUpSection from "./CountUpSection";
import ProgramsOverview from "./ProgramsOverview";
import LoadingFallback from "../LoadingFallback";
import SafeErrorBoundary from "../SafeErrorBoundary";
import AdvancedSEOHead from "@/components/seo/AdvancedSEOHead";
import IslamicNewsTicker from "@/components/news/IslamicNewsTicker";
import StickyActionButtons from "@/components/mobile/StickyActionButtons";
import { useTranslation } from "@/lib/i18n";

// Lazy load heavy components
const AcademicAchievements = lazy(() => import("./AcademicAchievements"));
const FeaturedNews = lazy(() => import("./FeaturedNews"));
const PhotoGallery = lazy(() => import("./PhotoGallery"));
const VideoGallery = lazy(() => import("@/components/VideoGallery"));
const Testimonials = lazy(() => import("./Testimonials"));
const QuickLinks = lazy(() => import("./QuickLinks"));
const IslamicStudyAssistant = lazy(() => import("@/components/innovations/IslamicStudyAssistant"));
const EnhancedPrayerTimes = lazy(() => import("@/components/innovations/EnhancedPrayerTimes"));
const QuranLearningHub = lazy(() => import("@/components/innovations/QuranLearningHub"));
const IslamicEventCountdown = lazy(() => import("@/components/events/IslamicEventCountdown"));
const PullToRefresh = lazy(() => import("@/components/features/PullToRefresh"));
const InteractiveChatBot = lazy(() => import("@/components/features/InteractiveChatBot"));
const VirtualTourEnhanced = lazy(() => import("@/components/features/VirtualTourEnhanced"));
const SuperiorityShowcase = lazy(() => import("@/components/competitive/SuperiorityShowcase"));
const AlumniSuccessTracker = lazy(() => import("@/components/competitive/AlumniSuccessTracker"));

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <SafeErrorBoundary fallback={<div className="py-4 text-center text-gray-500">Content temporarily unavailable</div>}>
    <Suspense fallback={<div className="py-8"><LoadingFallback /></div>}>
      {children}
    </Suspense>
  </SafeErrorBoundary>
);

const OptimizedHomePage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" }
  ];

  const virtualTourScenes = [
    {
      id: '1',
      title: isMalayalam ? 'പ്രധാന കാമ്പസ്' : 'Main Campus',
      image: '/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png',
      description: isMalayalam ? 'ഞങ്ങളുടെ മനോഹരമായ പ്രധാന കാമ്പസ് കാഴ്ച' : 'Beautiful view of our main campus',
      hotspots: [
        { x: 30, y: 40, label: isMalayalam ? 'ലൈബ്രറി' : 'Library', nextScene: '1' },
        { x: 70, y: 60, label: isMalayalam ? 'ക്ലാസ്റൂം' : 'Classroom', nextScene: '2' }
      ]
    },
    {
      id: '2',
      title: isMalayalam ? 'ലൈബ്രറി' : 'Library',
      image: '/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
      description: isMalayalam ? 'ആധുനിക സൗകര്യങ്ങളുള്ള ലൈബ്രറി' : 'Modern library with extensive resources'
    }
  ];

  const handleRefresh = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.reload();
    } catch (error) {
      console.warn('Refresh failed:', error);
    }
  };

  return (
    <>
      <AdvancedSEOHead
        title={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി - കേരളത്തിലെ #1 ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം | 2025-26 പ്രവേശനം" :
          "Darul Quran Abdulla Academy - Kerala's #1 Islamic Education Institution | Admissions 2025-26"
        }
        description={isMalayalam ?
          "കേരളത്തിലെ മുൻനിര ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം - ഹിഫ്സ്, ശരീഅത്, ഡിപ്ലോമ പ്രോഗ്രാമുകൾ. AI അധിഷ്ഠിത ആധുനിക പഠനം, നമാസ് സമയം, ഖുർആൻ പഠനം. ഓട്ടപ്പാലം, കേരള. 100% വിജയനിരക്ക്. ഇപ്പോൾ അപേക്ഷിക്കുക!" :
          "Kerala's premier Islamic education institution offering Hifz, Shari'ah & diploma programs. AI-powered learning, prayer times, Quran study hub. Located in Ottapalam, Kerala. 100% success rate. Apply now for 2025-26!"
        }
        keywords="Darul Quran Abdulla Academy, Kerala Islamic education, Hifz program Kerala, Islamic boarding school, Quran memorization, prayer times Kerala, Islamic studies Ottapalam, AI Islamic education, virtual campus tour"
        url="https://www.darulquranaa.com/"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
        type="website"
        priority="high"
      />

      <LazySection>
        <PullToRefresh onRefresh={handleRefresh}>
          <IslamicNewsTicker />

          <header role="banner">
            <HeroSection />
          </header>

          <LazySection>
            <SuperiorityShowcase />
          </LazySection>

          <section aria-labelledby="prayer-times-heading">
            <h2 id="prayer-times-heading" className="sr-only">
              {isMalayalam ? "നമാസ് സമയം" : "Prayer Times"}
            </h2>
            <LazySection>
              <EnhancedPrayerTimes />
            </LazySection>
          </section>

          <section aria-labelledby="islamic-events-heading">
            <h2 id="islamic-events-heading" className="sr-only">
              {isMalayalam ? "ഇസ്ലാമിക് ഇവന്റുകൾ" : "Islamic Events"}
            </h2>
            <LazySection>
              <IslamicEventCountdown />
            </LazySection>
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
            <LazySection>
              <AcademicAchievements />
            </LazySection>
          </section>

          <LazySection>
            <AlumniSuccessTracker />
          </LazySection>

          <section aria-labelledby="islamic-assistant-heading" className="bg-gray-50">
            <h2 id="islamic-assistant-heading" className="sr-only">AI Islamic Study Assistant</h2>
            <LazySection>
              <IslamicStudyAssistant />
            </LazySection>
          </section>

          <section aria-labelledby="quran-learning-heading" className="bg-gray-50">
            <h2 id="quran-learning-heading" className="sr-only">Interactive Quran Learning Hub</h2>
            <LazySection>
              <QuranLearningHub />
            </LazySection>
          </section>

          <section aria-labelledby="virtual-tour-heading">
            <h2 id="virtual-tour-heading" className="sr-only">Virtual Campus Tour</h2>
            <LazySection>
              <VirtualTourEnhanced scenes={virtualTourScenes} />
            </LazySection>
          </section>

          <section aria-labelledby="news-heading">
            <h2 id="news-heading" className="sr-only">Featured News and Events</h2>
            <LazySection>
              <FeaturedNews />
            </LazySection>
          </section>

          <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="sr-only">Photo Gallery</h2>
            <LazySection>
              <PhotoGallery />
            </LazySection>
          </section>

          <section aria-labelledby="videos-heading">
            <h2 id="videos-heading" className="sr-only">Video Gallery</h2>
            <LazySection>
              <VideoGallery />
            </LazySection>
          </section>

          <section aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="sr-only">Student and Parent Testimonials</h2>
            <LazySection>
              <Testimonials />
            </LazySection>
          </section>

          <section aria-labelledby="quick-links-heading">
            <h2 id="quick-links-heading" className="sr-only">Quick Links</h2>
            <LazySection>
              <QuickLinks />
            </LazySection>
          </section>
        </PullToRefresh>
      </LazySection>

      <StickyActionButtons />
      <LazySection>
        <InteractiveChatBot />
      </LazySection>
    </>
  );
};

export default OptimizedHomePage;