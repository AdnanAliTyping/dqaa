
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Users, Phone, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

const MobileBottomNavigation = () => {
  const location = useLocation();
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Auto-hide on scroll down, show on scroll up (Apple pattern)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      href: "/",
      icon: Home,
      label: isMalayalam ? "ഹോം" : "Home",
      id: "home"
    },
    {
      href: "/academic-programs",
      icon: BookOpen,
      label: isMalayalam ? "പ്രോഗ്രാമുകൾ" : "Programs",
      id: "programs"
    },
    {
      href: "/admissions",
      icon: GraduationCap,
      label: isMalayalam ? "പ്രവേശനം" : "Admissions",
      id: "admissions"
    },
    {
      href: "/student-life",
      icon: Users,
      label: isMalayalam ? "വിദ്യാർത്ഥികൾ" : "Students",
      id: "students"
    },
    {
      href: "/contact",
      icon: Phone,
      label: isMalayalam ? "ബന്ധപ്പെടുക" : "Contact",
      id: "contact"
    }
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        "bg-white/95 backdrop-blur-md border-t border-gray-200",
        "transition-transform duration-300 ease-out",
        "safe-area-pb", // Handle iPhone notch
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      role="navigation"
      aria-label="Mobile bottom navigation"
    >
      <div className="flex items-center justify-around px-2 py-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.id}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center",
                "min-h-[50px] min-w-[50px] rounded-lg",
                "px-2 py-1 text-xs font-medium",
                "transition-all duration-200 ease-out",
                "touch-manipulation select-none",
                active
                  ? "text-dqaa-600 bg-dqaa-50"
                  : "text-gray-600 hover:text-dqaa-500 hover:bg-gray-50"
              )}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
            >
              <item.icon 
                className={cn(
                  "h-5 w-5 mb-1 transition-transform duration-150",
                  active ? "scale-110" : "scale-100"
                )} 
              />
              <span className={cn(
                "leading-tight text-center",
                isMalayalam ? "text-[10px]" : "text-xs"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNavigation;
