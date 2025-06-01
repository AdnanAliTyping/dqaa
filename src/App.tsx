
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, useEffect } from "react";

// Immediate loading components
import HomePage from "./pages/HomePage";
import LoadingFallback from "./components/LoadingFallback";
import ErrorBoundary from "./components/ErrorBoundary";
import { useLanguageStore } from "@/lib/i18n";
import LanguageRootManager from "./components/LanguageRootManager";
import { measureWebVitals } from "./hooks/usePerformance";
import { createLazyComponent, preloadComponent } from "./utils/lazyImports";

// Lazy load non-critical pages
const AboutPage = createLazyComponent(() => import("./pages/AboutPage"));
const AdmissionsPage = createLazyComponent(() => import("./pages/AdmissionsPage"));
const ApplicationFormPage = createLazyComponent(() => import("./pages/ApplicationFormPage"));
const AcademicProgramsPage = createLazyComponent(() => import("./pages/AcademicProgramsPage"));
const StudentLifePage = createLazyComponent(() => import("./pages/StudentLifePage"));
const CampusFacilitiesPage = createLazyComponent(() => import("./pages/CampusFacilitiesPage"));
const TechnologyPage = createLazyComponent(() => import("./pages/TechnologyPage"));
const ParentsCornerPage = createLazyComponent(() => import("./pages/ParentsCornerPage"));
const CommunityPage = createLazyComponent(() => import("./pages/CommunityPage"));
const NewsEventsPage = createLazyComponent(() => import("./pages/NewsEventsPage"));
const NewsArticlePage = createLazyComponent(() => import("./pages/NewsArticlePage"));
const ContactPage = createLazyComponent(() => import("./pages/ContactPage"));
const DonatePage = createLazyComponent(() => import("./pages/DonatePage"));
const NotFoundPage = createLazyComponent(() => import("./pages/NotFoundPage"));
const Index = createLazyComponent(() => import("./pages/Index"));
const FAQPage = createLazyComponent(() => import("./pages/FAQPage"));
const CareersPage = createLazyComponent(() => import("./pages/CareersPage"));
const FacultyPage = createLazyComponent(() => import("./pages/FacultyPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // Initialize language from localStorage on app start
  useEffect(() => {
    const savedLanguage = localStorage.getItem("dqaa-language");
    if (savedLanguage === "en" || savedLanguage === "ml") {
      useLanguageStore.getState().setLanguage(savedLanguage);
    }
    
    // Preload critical pages
    preloadComponent(() => import("./pages/AdmissionsPage"));
    preloadComponent(() => import("./pages/AboutPage"));
    
    // Initialize performance monitoring
    measureWebVitals((metric) => {
      console.log('Performance metric:', metric);
    });
  }, []);
  
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
              <LanguageRootManager />
              <Toaster />
              <Sonner />
              <Suspense fallback={<LoadingFallback type="page" />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/index" element={<Index />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/admissions" element={<AdmissionsPage />} />
                  <Route path="/admissions/apply" element={<ApplicationFormPage />} />
                  <Route path="/academic-programs" element={<AcademicProgramsPage />} />
                  <Route path="/student-life" element={<StudentLifePage />} />
                  <Route path="/campus" element={<CampusFacilitiesPage />} />
                  <Route path="/technology" element={<TechnologyPage />} />
                  <Route path="/parents" element={<ParentsCornerPage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/news" element={<NewsEventsPage />} />
                  <Route path="/news/:slug" element={<NewsArticlePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/donate" element={<DonatePage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/faculty" element={<FacultyPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
