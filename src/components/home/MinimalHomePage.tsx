import React from 'react';
import HeroSection from "./HeroSection";
import CountUpSection from "./CountUpSection";
import ProgramsOverview from "./ProgramsOverview";
import SafeErrorBoundary from "@/components/SafeErrorBoundary";

const MinimalHomePage = () => {
  // Simple page without SEO dependencies that cause crashes
  return (
    <SafeErrorBoundary>
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

export default MinimalHomePage;