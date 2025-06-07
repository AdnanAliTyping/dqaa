
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
                    <Route 
                      path="/" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <Index />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/home" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <HomePage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/about" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <AboutPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/admissions" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <AdmissionsPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/admissions/apply" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <ApplicationFormPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/academic-programs" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <AcademicProgramsPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/student-life" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <StudentLifePage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/campus" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <CampusFacilitiesPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/technology" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <TechnologyPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/parents" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <ParentsCornerPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/community" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <CommunityPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/news" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <NewsEventsPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/news/:slug" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <NewsArticlePage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/contact" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <ContactPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/donate" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <DonatePage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/faq" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <FAQPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/faculty" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <FacultyPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="/careers" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <CareersPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
                    <Route 
                      path="*" 
                      element={
                        <Layout>
                          <Suspense fallback={<LoadingFallback />}>
                            <NotFoundPage />
                          </Suspense>
                        </Layout>
                      } 
                    />
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
