
import { MapPin, Phone, Globe } from "lucide-react";

const LocationDetails = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start">
        <MapPin className="h-5 w-5 text-dqaa-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-700">
            Kothakurssi, Pathamkulam, Ananganadi,<br />
            Kerala 679501, India<br />
            <span className="text-sm text-gray-500">R9F2+QC Pathamkulam, Kerala, India</span>
          </p>
        </div>
      </div>
      
      <div className="flex items-center">
        <Phone className="h-5 w-5 text-dqaa-500 mr-3 flex-shrink-0" />
        <a href="tel:+919526552211" className="text-gray-700 hover:text-dqaa-500 transition-colors">
          +91 95265 52211
        </a>
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
