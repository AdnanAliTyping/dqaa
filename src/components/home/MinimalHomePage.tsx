import React from 'react';
import HeroSection from "./HeroSection";
import CountUpSection from "./CountUpSection";
import ProgramsOverview from "./ProgramsOverview";
import AdvancedSEOHead from "@/components/seo/AdvancedSEOHead";
import { useTranslation } from "@/lib/i18n";

const MinimalHomePage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" }
  ];

  return (
    <>
      <AdvancedSEOHead
        title={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി - കേരളത്തിലെ #1 ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം" :
          "Darul Quran Abdulla Academy - Kerala's #1 Islamic Education Institution"
        }
        description={isMalayalam ?
          "കേരളത്തിലെ മുൻനിര ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനം - ഹിഫ്സ്, ശരീഅത്, ഡിപ്ലോമ പ്രോഗ്രാമുകൾ" :
          "Kerala's premier Islamic education institution offering Hifz, Shari'ah & diploma programs"
        }
        keywords="Darul Quran Abdulla Academy, Kerala Islamic education, Hifz program Kerala, Islamic boarding school"
        url="https://www.darulquranaa.com/"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
        type="website"
        priority="high"
      />

      <main>
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
      </main>
    </>
  );
};

export default MinimalHomePage;