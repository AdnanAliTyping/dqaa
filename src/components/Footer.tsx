
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import LocationDetails from "./LocationDetails";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-dqaa-500 text-white rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold">DQAA</span>
              </div>
              <span className="font-display text-lg font-bold text-dqaa-500">
                Darul Quran Abdulla Academy
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Blending traditional Islamic education with modern technology since 2014.
            </p>
            <LocationDetails />
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/academic-programs" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Campus & Facilities
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">For Parents</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/parents#resources" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Parent Resources
                </Link>
              </li>
              <li>
                <Link to="/parents#calendar" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link to="/parents#portal" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link to="/parents#handbook" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  Student Handbook
                </Link>
              </li>
              <li>
                <Link to="/parents#faq" className="text-gray-600 hover:text-dqaa-500 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-dqaa-500">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-dqaa-500 text-white p-2 rounded-full hover:bg-dqaa-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-dqaa-500 text-white p-2 rounded-full hover:bg-dqaa-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-dqaa-500 text-white p-2 rounded-full hover:bg-dqaa-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-dqaa-500 text-white p-2 rounded-full hover:bg-dqaa-600 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
            <Link to="/donate">
              <form>
                <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
              </form>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Darul Quran Abdulla Academy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-600 text-sm hover:text-dqaa-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-gray-600 text-sm hover:text-dqaa-500 transition-colors">
                Terms of Use
              </Link>
              <Link to="/sitemap" className="text-gray-600 text-sm hover:text-dqaa-500 transition-colors">
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
