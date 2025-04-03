
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/about",
    submenu: [
      { name: "Mission & Vision", href: "/about#mission" },
      { name: "Educational Philosophy", href: "/about#philosophy" },
      { name: "Core Values", href: "/about#values" },
      { name: "History", href: "/about#history" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "Faculty & Staff", href: "/about#faculty" },
    ]
  },
  { 
    name: "Admissions", 
    href: "/admissions",
    submenu: [
      { name: "Application Process", href: "/admissions#process" },
      { name: "Requirements", href: "/admissions#requirements" },
      { name: "Tuition & Fees", href: "/admissions#tuition" },
      { name: "Financial Aid", href: "/admissions#aid" },
      { name: "FAQs", href: "/admissions#faqs" },
    ]
  },
  { 
    name: "Academic Programs", 
    href: "/academic-programs",
    submenu: [
      { name: "Hifz Program", href: "/academic-programs#hifz" },
      { name: "Bayanul Quran", href: "/academic-programs#bayanul" },
      { name: "Islamic Studies", href: "/academic-programs#islamic" },
      { name: "Academic Subjects", href: "/academic-programs#academic" },
      { name: "Additional Courses", href: "/academic-programs#additional" },
    ]
  },
  { name: "Student Life", href: "/student-life" },
  { name: "Campus", href: "/campus" },
  { name: "Technology", href: "/technology" },
  { name: "Parents", href: "/parents" },
  { name: "News & Events", href: "/news" },
  { name: "Contact", href: "/contact" },
];

// Group navigation items for mobile optimization
const primaryNavItems = navigation.slice(0, 5); // First 5 items for primary nav
const secondaryNavItems = navigation.slice(5); // Remaining items for secondary nav

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Search term:", searchTerm);
    setSearchOpen(false);
    setSearchTerm("");
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" 
            alt="DQAA Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span className={cn(
            "font-display text-base md:text-lg lg:text-xl font-bold transition-colors",
            isScrolled ? "text-dqaa-500" : "text-dqaa-500"
          )}>
            <span className="hidden sm:inline">Darul Quran Abdulla Academy</span>
            <span className="inline sm:hidden">DQAA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navigation.map((item) => (
            item.submenu ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={cn(
                      "flex items-center text-sm font-medium py-2 px-2 md:px-3 rounded transition-colors",
                      location.pathname === item.href ? "text-dqaa-500 bg-dqaa-50" : "text-gray-700 hover:text-dqaa-500 hover:bg-dqaa-50/50"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        to={subItem.href} 
                        className="w-full px-3 py-2 text-sm hover:text-dqaa-500 hover:bg-dqaa-50"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium py-2 px-2 md:px-3 rounded transition-colors",
                  location.pathname === item.href ? "text-dqaa-500 bg-dqaa-50" : "text-gray-700 hover:text-dqaa-500 hover:bg-dqaa-50/50"
                )}
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-700 hover:text-dqaa-500"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-dqaa-500"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/donate" className="razorpay-container">
            <form>
              <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
            </form>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex lg:hidden items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-700 mr-2 touch-target"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 touch-target"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Improved for better touch interactions */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg fixed inset-x-0 top-[57px] bottom-0 z-50 overflow-y-auto">
          <div className="container mx-auto py-4 px-4">
            <nav className="space-y-1">
              {/* Primary Navigation Items */}
              {primaryNavItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2 mb-2 last:border-0">
                  <Link
                    to={item.href}
                    className={cn(
                      "block py-3 px-3 rounded-md text-base font-medium transition-colors",
                      location.pathname === item.href
                        ? "text-dqaa-500 bg-dqaa-50"
                        : "text-gray-700 hover:text-dqaa-500 hover:bg-dqaa-50/50"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-3 px-3 text-sm text-gray-600 hover:text-dqaa-500 hover:bg-dqaa-50/50 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Secondary Navigation Items */}
              <div className="pt-2">
                {secondaryNavItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-2 mb-2 last:border-0">
                    <Link
                      to={item.href}
                      className={cn(
                        "block py-3 px-3 rounded-md text-base font-medium transition-colors",
                        location.pathname === item.href
                          ? "text-dqaa-500 bg-dqaa-50"
                          : "text-gray-700 hover:text-dqaa-500 hover:bg-dqaa-50/50"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-3 px-3 text-sm text-gray-600 hover:text-dqaa-500 hover:bg-dqaa-50/50 rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="mt-4 flex flex-col space-y-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 w-full py-3 h-auto"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full bg-white">
                  <DropdownMenuItem className="py-3">English</DropdownMenuItem>
                  <DropdownMenuItem className="py-3">العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/donate" className="w-full razorpay-container">
                <form className="w-full">
                  <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
                </form>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay - Improved for mobile */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 z-50">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-dqaa-500 focus:border-dqaa-500 h-12"
              autoFocus
            />
            <Button type="submit" className="rounded-l-none h-12">
              Search
            </Button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
