
import { MapPin, Phone, Globe, Mail } from "lucide-react";

const LocationDetails = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <MapPin className="h-5 w-5 text-dqaa-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-700">
            Kothakurssi, Ottapalam, Palakkad Dt,<br />
            Kerala, India, Pin:679501<br />
            <span className="text-sm text-gray-500">R9F2+QC Pathamkulam, Kerala, India</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-start">
        <Phone className="h-5 w-5 text-dqaa-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <div className="text-gray-700">
            <a href="tel:+919526552211" className="hover:text-dqaa-500 transition-colors block">
              +91 95265 52211
            </a>
            <a href="tel:+919496721259" className="hover:text-dqaa-500 transition-colors block">
              +91 94967 21259 <span className="text-sm text-gray-500">(Admissions)</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex items-start">
        <Mail className="h-5 w-5 text-dqaa-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <a 
            href="mailto:darulquranind@gmail.com" 
            className="text-dqaa-500 hover:text-dqaa-600 transition-colors"
          >
            darulquranind@gmail.com
          </a>
        </div>
      </div>
      
      <div className="flex items-start">
        <Globe className="h-5 w-5 text-dqaa-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <a 
            href="https://maps.app.goo.gl/t7dt9bgn4MKcfRb86" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dqaa-500 hover:text-dqaa-600 transition-colors"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
