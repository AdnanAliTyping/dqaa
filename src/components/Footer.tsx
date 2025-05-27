
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail, ChevronUp, ChevronDown } from "lucide-react";
import LocationDetails from "./LocationDetails";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Admissions", href: "/admissions" },
        { name: "Academic Programs", href: "/academic-programs" },
        { name: "Campus & Facilities", href: "/campus" },
        { name: "News & Events", href: "/news" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "For Parents",
      links: [
        { name: "Parent Resources", href: "/parents#resources" },
        { name: "Academic Calendar", href: "/parents#calendar" },
        { name: "Parent Portal", href: "/parents#portal" },
        { name: "Student Handbook", href: "/parents#handbook" },
        { name: "FAQs", href: "/parents#faq" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-6 gap-x-8">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" 
                alt="DQAA Logo" 
                className="w-12 h-12 object-contain mr-3"
              />
              <span className="font-display text-lg font-bold text-dqaa-500">
                Darul Quran<span className="hidden xs:inline"> Abdulla Academy</span>
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Blending traditional Islamic education with modern technology since 2014.
            </p>
            <LocationDetails />
          </div>
          
          {/* Collapsible sections for mobile */}
          <div className="lg:hidden space-y-4">
            {footerSections.map((section) => (
              <Collapsible 
                key={section.title}
                open={openSections[section.title]} 
                onOpenChange={() => toggleSection(section.title)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <h3 className="font-semibold text-lg text-dqaa-500">{section.title}</h3>
                  {openSections[section.title] ? 
                    <ChevronUp className="h-4 w-4" /> : 
                    <ChevronDown className="h-4 w-4" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2 pl-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          to={link.href} 
                          className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          
          {/* Desktop sections */}
          <div className="hidden lg:block">
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">Quick Links</h3>
            <ul className="space-y-2">
              {footerSections[0].links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="hidden lg:block">
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">For Parents</h3>
            <ul className="space-y-2">
              {footerSections[1].links.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/darulquranindia/" target="_blank" rel="noopener noreferrer" className="bg-dqaa-500 text-white p-3 rounded-full hover:bg-dqaa-600 transition-colors touch-target">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com/darulquranindia" target="_blank" rel="noopener noreferrer" className="bg-dqaa-500 text-white p-3 rounded-full hover:bg-dqaa-600 transition-colors touch-target">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-dqaa-500 text-white p-3 rounded-full hover:bg-dqaa-600 transition-colors touch-target">
                <Youtube size={18} />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
            <div className="razorpay-container">
              <form>
                <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Darul Quran Abdulla Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <Link to="/privacy-policy" className="text-gray-600 text-sm hover:text-dqaa-500 transition-colors py-1">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-gray-600 text-sm hover:text-dqaa-500 transition-colors py-1">
                Terms of Use
              </Link>
              <Link to="/sitemap" className="text-gray-600 text-sm hover:text-dqaa-500 transition-colors py-1">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-20 left-6 z-40 bg-dqaa-500 hover:bg-dqaa-600 text-white rounded-full w-12 h-12 shadow-lg"
          size="icon"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;
