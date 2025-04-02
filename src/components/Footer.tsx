
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dqaa-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-dqaa-700 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-display font-bold">Subscribe to our Newsletter</h3>
              <p className="text-dqaa-100">Stay updated with our latest news and events</p>
            </div>
            <div className="w-full md:w-auto flex">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="rounded-r-none bg-dqaa-600 border-dqaa-600 text-white placeholder:text-dqaa-300 focus:border-gold-400"
              />
              <Button className="rounded-l-none bg-gold-400 hover:bg-gold-500 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white text-dqaa-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">DQAA</span>
              </div>
              <h3 className="font-display font-bold text-xl">Darul Quran<br />Abdulla Academy</h3>
            </div>
            <p className="text-dqaa-100 mb-4">
              Established in 2014, DQAA blends traditional Islamic education with modern technology, emphasizing a unique quadrilingual approach.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-dqaa-600">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-dqaa-100 hover:text-gold-400 transition-colors">About DQAA</Link>
              </li>
              <li>
                <Link to="/admissions" className="text-dqaa-100 hover:text-gold-400 transition-colors">Admissions</Link>
              </li>
              <li>
                <Link to="/academic-programs" className="text-dqaa-100 hover:text-gold-400 transition-colors">Academic Programs</Link>
              </li>
              <li>
                <Link to="/student-life" className="text-dqaa-100 hover:text-gold-400 transition-colors">Student Life</Link>
              </li>
              <li>
                <Link to="/news" className="text-dqaa-100 hover:text-gold-400 transition-colors">News & Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-dqaa-100 hover:text-gold-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/donate" className="text-dqaa-100 hover:text-gold-400 transition-colors">Support DQAA</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Academic Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-dqaa-600">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/academic-programs#hifz" className="text-dqaa-100 hover:text-gold-400 transition-colors">Hifz Program</Link>
              </li>
              <li>
                <Link to="/academic-programs#bayanul" className="text-dqaa-100 hover:text-gold-400 transition-colors">Bayanul Quran Diploma</Link>
              </li>
              <li>
                <Link to="/academic-programs#islamic" className="text-dqaa-100 hover:text-gold-400 transition-colors">Islamic Studies</Link>
              </li>
              <li>
                <Link to="/academic-programs#academic" className="text-dqaa-100 hover:text-gold-400 transition-colors">Academic Subjects</Link>
              </li>
              <li>
                <Link to="/academic-programs#additional" className="text-dqaa-100 hover:text-gold-400 transition-colors">Additional Courses</Link>
              </li>
              <li>
                <Link to="/technology" className="text-dqaa-100 hover:text-gold-400 transition-colors">Technology & AI</Link>
              </li>
              <li>
                <Link to="/student-life" className="text-dqaa-100 hover:text-gold-400 transition-colors">Extracurricular Activities</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-dqaa-600">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-dqaa-100">123 Academy Road, Educational District, Kerala, India</span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-dqaa-100">+91 123 456 7890</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-dqaa-100">info@dqaa.edu</span>
              </li>
              <li className="flex">
                <Clock className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                <span className="text-dqaa-100">Monday - Friday: 8:00 AM - 4:00 PM<br />Saturday: 8:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dqaa-600 text-center text-dqaa-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Darul Quran Abdulla Academy. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-dqaa-100 hover:text-gold-400 mr-4">Privacy Policy</Link>
              <Link to="/terms" className="text-dqaa-100 hover:text-gold-400">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
