
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchButton from "./search/SearchButton";
import { useTranslation } from "@/lib/i18n";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // SearchButton will handle opening the modal
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  const navigationItems = [
    { 
      href: "/", 
      label: isMalayalam ? "ഹോം" : "Home" 
    },
    { 
      href: "/about", 
      label: isMalayalam ? "കുറിച്ച്" : "About" 
    },
    {
      label: isMalayalam ? "പ്രോഗ്രാമുകൾ" : "Programs",
      dropdown: [
        { href: "/academic-programs", label: isMalayalam ? "അക്കാദമിക് പ്രോഗ്രാമുകൾ" : "Academic Programs" },
        { href: "/student-life", label: isMalayalam ? "വിദ്യാർത്ഥി ജീവിതം" : "Student Life" },
        { href: "/technology", label: isMalayalam ? "സാങ്കേതികവിദ്യ" : "Technology" }
      ]
    },
    { 
      href: "/admissions", 
      label: isMalayalam ? "പ്രവേശനം" : "Admissions" 
    },
    { 
      href: "/campus", 
      label: isMalayalam ? "കാമ്പസ്" : "Campus" 
    },
    { 
      href: "/parents", 
      label: isMalayalam ? "രക്ഷിതാക്കൾ" : "Parents" 
    },
    { 
      href: "/news", 
      label: isMalayalam ? "വാർത്തകൾ" : "News" 
    },
    { 
      href: "/contact", 
      label: isMalayalam ? "ബന്ധപ്പെടുക" : "Contact" 
    }
  ];

  return (
    <nav 
      className="bg-white shadow-sm border-b sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
      id="main-navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:ring-2 focus:ring-dqaa-500 focus:outline-none rounded"
            aria-label="Darul Quran Abdulla Academy - Home"
          >
            <img 
              src="/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" 
              alt="DQAA Logo" 
              className="h-8 w-8"
            />
            <span className="font-bold text-xl text-dqaa-500 hidden sm:block">
              {isMalayalam ? "ദാറുൽ ഖുർആൻ" : "DQAA"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6" role="menubar">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button 
                      className="flex items-center space-x-1 text-gray-700 hover:text-dqaa-500 font-medium focus:ring-2 focus:ring-dqaa-500 focus:outline-none rounded px-2 py-1"
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                      aria-label={`${item.label} menu`}
                      role="menuitem"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-48 bg-white border shadow-lg rounded-md py-2 z-50"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-dqaa-500 focus:bg-gray-50 focus:text-dqaa-500 focus:outline-none"
                            role="menuitem"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={`text-gray-700 hover:text-dqaa-500 font-medium focus:ring-2 focus:ring-dqaa-500 focus:outline-none rounded px-2 py-1 ${
                      location.pathname === item.href ? "text-dqaa-500" : ""
                    }`}
                    role="menuitem"
                    aria-current={location.pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <SearchButton />
            <LanguageSwitcher />
            <Link to="/admissions/apply" className="hidden lg:block">
              <Button 
                className="bg-dqaa-500 hover:bg-dqaa-600 focus:ring-2 focus:ring-dqaa-700"
                aria-label={isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply now for admissions"}
              >
                {isMalayalam ? "അപേക്ഷിക്കുക" : "Apply Now"}
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden focus:ring-2 focus:ring-dqaa-500"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t bg-white"
              id="mobile-menu"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="py-4 space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                          aria-expanded={activeDropdown === item.label}
                          aria-controls={`mobile-submenu-${index}`}
                          role="menuitem"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`h-4 w-4 transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                        {activeDropdown === item.label && (
                          <div 
                            className="pl-8 space-y-1"
                            id={`mobile-submenu-${index}`}
                            role="menu"
                          >
                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                              <Link
                                key={dropdownIndex}
                                to={dropdownItem.href}
                                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                                role="menuitem"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href!}
                        className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                          location.pathname === item.href ? "text-dqaa-500 bg-dqaa-50" : ""
                        }`}
                        role="menuitem"
                        aria-current={location.pathname === item.href ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link to="/admissions/apply" className="block">
                    <Button 
                      className="w-full bg-dqaa-500 hover:bg-dqaa-600 focus:ring-2 focus:ring-dqaa-700"
                      aria-label={isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply now for admissions"}
                    >
                      {isMalayalam ? "അപേക്ഷിക്കുക" : "Apply Now"}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
