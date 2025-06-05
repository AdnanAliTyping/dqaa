
import { useEffect, useState } from "react";
import AppleInspiredHero from "./AppleInspiredHero";
import OptimizedMobileHero from "../mobile/OptimizedMobileHero";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Use Apple-inspired hero for desktop, optimized for mobile
  return isMobile ? <OptimizedMobileHero /> : <AppleInspiredHero />;
};

export default HeroSection;
