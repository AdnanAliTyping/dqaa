
import schemas from "./schemas";
import { lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import LanguageRootManager from "./components/LanguageRootManager";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import SchemaProvider from "./components/SchemaProvider";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const ApplicationFormPage = lazy(() => import("./pages/ApplicationFormPage"));
const AcademicProgramsPage = lazy(() => import("./pages/AcademicProgramsPage"));
const StudentLifePage = lazy(() => import("./pages/StudentLifePage"));
const CampusFacilitiesPage = lazy(() => import("./pages/CampusFacilitiesPage"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));
const ParentsCornerPage = lazy(() => import("./pages/ParentsCornerPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const NewsEventsPage = lazy(() => import("./pages/NewsEventsPage"));
const NewsArticlePage = lazy(() => import("./pages/NewsArticlePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DonatePage = lazy(() => import("./pages/DonatePage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const FacultyPage = lazy(() => import("./pages/FacultyPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const EidGreetingPage = lazy(() => import("./pages/EidGreetingPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <LanguageRootManager>
            <PerformanceOptimizer>
              <SchemaProvider schemas={schemas}>
                <Routes>
                  {/* Special routes without Layout */}
                  <Route 
                    path="/eid-greeting" 
                    element={
                      <PageWrapper withLayout={false}>
                        <EidGreetingPage />
                      </PageWrapper>
                    } 
                  />
                  
                  {/* Routes with Layout */}
                  <Route 
                    path="/" 
                    element={
                      <PageWrapper>
                        <Index />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/home" 
                    element={
                      <PageWrapper>
                        <HomePage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/about" 
                    element={
                      <PageWrapper>
                        <AboutPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/admissions" 
                    element={
                      <PageWrapper>
                        <AdmissionsPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/admissions/apply" 
                    element={
                      <PageWrapper>
                        <ApplicationFormPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/academic-programs" 
                    element={
                      <PageWrapper>
                        <AcademicProgramsPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/student-life" 
                    element={
                      <PageWrapper>
                        <StudentLifePage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/campus" 
                    element={
                      <PageWrapper>
                        <CampusFacilitiesPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/technology" 
                    element={
                      <PageWrapper>
                        <TechnologyPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/parents" 
                    element={
                      <PageWrapper>
                        <ParentsCornerPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/community" 
                    element={
                      <PageWrapper>
                        <CommunityPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/news" 
                    element={
                      <PageWrapper>
                        <NewsEventsPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/news/:slug" 
                    element={
                      <PageWrapper>
                        <NewsArticlePage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/contact" 
                    element={
                      <PageWrapper>
                        <ContactPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/donate" 
                    element={
                      <PageWrapper>
                        <DonatePage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/faq" 
                    element={
                      <PageWrapper>
                        <FAQPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/faculty" 
                    element={
                      <PageWrapper>
                        <FacultyPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="/careers" 
                    element={
                      <PageWrapper>
                        <CareersPage />
                      </PageWrapper>
                    } 
                  />
                  <Route 
                    path="*" 
                    element={
                      <PageWrapper>
                        <NotFoundPage />
                      </PageWrapper>
                    } 
                  />
                </Routes>
              </SchemaProvider>
            </PerformanceOptimizer>
          </LanguageRootManager>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
