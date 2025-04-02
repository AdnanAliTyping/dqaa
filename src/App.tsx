
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
