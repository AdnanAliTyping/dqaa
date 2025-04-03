
import { useState, useEffect } from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showBanner, setShowBanner] = useState(true);
  
  // Check localStorage on component mount
  useEffect(() => {
    const bannerClosed = localStorage.getItem("admissionsBannerClosed");
    if (bannerClosed === "true") {
      setShowBanner(false);
    }
  }, []);

  const closeBanner = () => {
    setShowBanner(false);
    localStorage.setItem("admissionsBannerClosed", "true");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {showBanner && (
        <div className="bg-gold-400 text-dqaa-900 py-2 px-4 text-center relative">
          <div className="container mx-auto flex justify-center items-center flex-wrap">
            <Link to="/admissions/apply" className="flex items-center justify-center w-full">
              <span className="font-medium mr-2 text-sm md:text-base">Admissions Open for 2025!</span>
              <Button variant="secondary" size="sm" className="text-xs sm:text-sm my-1 bg-dqaa-900 text-white hover:bg-dqaa-700">
                Apply Now
              </Button>
            </Link>
          </div>
          <button 
            onClick={closeBanner}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-dqaa-900 hover:text-dqaa-700 touch-target"
            aria-label="Close banner"
          >
            <X size={18} />
          </button>
        </div>
      )}
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
