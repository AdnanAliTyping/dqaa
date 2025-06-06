
import schemas from "./schemas";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingFallback from "./components/LoadingFallback";
import ErrorBoundary from "./components/ErrorBoundary";
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

// Create a wrapper component for pages with Layout
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </Layout>
);

function App() {
  return (
    <ErrorBoundary>
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
                        <Suspense fallback={<LoadingFallback />}>
                          <EidGreetingPage />
                        </Suspense>
                      } 
                    />
                    
                    {/* Routes with Layout */}
                    <Route path="/" element={<LayoutWrapper><Index /></LayoutWrapper>} />
                    <Route path="/home" element={<LayoutWrapper><HomePage /></LayoutWrapper>} />
                    <Route path="/about" element={<LayoutWrapper><AboutPage /></LayoutWrapper>} />
                    <Route path="/admissions" element={<LayoutWrapper><AdmissionsPage /></LayoutWrapper>} />
                    <Route path="/admissions/apply" element={<LayoutWrapper><ApplicationFormPage /></LayoutWrapper>} />
                    <Route path="/academic-programs" element={<LayoutWrapper><AcademicProgramsPage /></LayoutWrapper>} />
                    <Route path="/student-life" element={<LayoutWrapper><StudentLifePage /></LayoutWrapper>} />
                    <Route path="/campus" element={<LayoutWrapper><CampusFacilitiesPage /></LayoutWrapper>} />
                    <Route path="/technology" element={<LayoutWrapper><TechnologyPage /></LayoutWrapper>} />
                    <Route path="/parents" element={<LayoutWrapper><ParentsCornerPage /></LayoutWrapper>} />
                    <Route path="/community" element={<LayoutWrapper><CommunityPage /></LayoutWrapper>} />
                    <Route path="/news" element={<LayoutWrapper><NewsEventsPage /></LayoutWrapper>} />
                    <Route path="/news/:slug" element={<LayoutWrapper><NewsArticlePage /></LayoutWrapper>} />
                    <Route path="/contact" element={<LayoutWrapper><ContactPage /></LayoutWrapper>} />
                    <Route path="/donate" element={<LayoutWrapper><DonatePage /></LayoutWrapper>} />
                    <Route path="/faq" element={<LayoutWrapper><FAQPage /></LayoutWrapper>} />
                    <Route path="/faculty" element={<LayoutWrapper><FacultyPage /></LayoutWrapper>} />
                    <Route path="/careers" element={<LayoutWrapper><CareersPage /></LayoutWrapper>} />
                    <Route path="*" element={<LayoutWrapper><NotFoundPage /></LayoutWrapper>} />
                  </Routes>
                </SchemaProvider>
              </PerformanceOptimizer>
            </LanguageRootManager>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
