
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Phone, Mail } from "lucide-react";
import LocationDetails from "./LocationDetails";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          <div>
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
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/academic-programs" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Campus & Facilities
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">For Parents</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4">
              <li>
                <Link to="/parents#resources" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link to="/parents#calendar" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link to="/parents#portal" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link to="/parents#handbook" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  Student Handbook
                </Link>
              </li>
              <li>
                <Link to="/parents#faq" className="text-gray-600 hover:text-dqaa-500 transition-colors block py-1">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
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
    </footer>
  );
};

export default Footer;
