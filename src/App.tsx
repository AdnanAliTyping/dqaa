
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import { HelmetProvider } from 'react-helmet-async';

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import AcademicProgramsPage from "./pages/AcademicProgramsPage";
import StudentLifePage from "./pages/StudentLifePage";
import CampusFacilitiesPage from "./pages/CampusFacilitiesPage";
import TechnologyPage from "./pages/TechnologyPage";
import ParentsCornerPage from "./pages/ParentsCornerPage";
import CommunityPage from "./pages/CommunityPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import NotFoundPage from "./pages/NotFoundPage";
import Index from "./pages/Index";
import FAQPage from "./pages/FAQPage";
import CareersPage from "./pages/CareersPage";

// Language management
import { useEffect } from "react";
import { useLanguageStore } from "@/lib/i18n";
import LanguageRootManager from "./components/LanguageRootManager";

const queryClient = new QueryClient();

const App = () => {
  // Initialize language from localStorage on app start
  useEffect(() => {
    const savedLanguage = localStorage.getItem("dqaa-language");
    if (savedLanguage === "en" || savedLanguage === "ml") {
      useLanguageStore.getState().setLanguage(savedLanguage);
    }
  }, []);
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <LanguageRootManager />
            <IntroScreen />
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Legacy route that now redirects to homepage */}
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
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
