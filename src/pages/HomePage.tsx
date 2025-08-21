
import React from 'react';
import HeroSection from "@/components/home/HeroSection";
import CountUpSection from "@/components/home/CountUpSection";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import SafeErrorBoundary from "@/components/SafeErrorBoundary";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <SafeErrorBoundary>
      <Helmet>
        <title>Darul Quran Abdulla Academy | Excellence in Islamic Education</title>
        <meta name="description" content="Darul Quran Abdulla Academy provides world-class Islamic education combining Quranic studies with modern academics in Kerala, India." />
        <meta name="keywords" content="Islamic education, Quran academy, DQAA, Kerala, Islamic school, Hifz program" />
        <link rel="canonical" href="https://www.darulquranaa.com/" />
      </Helmet>
      
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
    </SafeErrorBoundary>
  );
};

export default HomePage;
