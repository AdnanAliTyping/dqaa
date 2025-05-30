
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock, Car, Bus } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface MapLocation {
  id: string;
  name: string;
  nameMl: string;
  type: string;
  typeMl: string;
  coordinates: { x: number; y: number };
  description: string;
  descriptionMl: string;
  facilities: string[];
  facilitiesMl: string[];
  isOpen: boolean;
  hours?: string;
  hoursMl?: string;
}

const InteractiveCampusMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const locations: MapLocation[] = [
    {
      id: "admin",
      name: "Administration Block",
      nameMl: "അഡ്മിനിസ്ട്രേഷൻ ബ്ലോക്ക്",
      type: "Administrative",
      typeMl: "ഭരണപരം",
      coordinates: { x: 25, y: 30 },
      description: "Main administrative offices, admissions, and student services",
      descriptionMl: "പ്രധാന ഭരണ ഓഫീസുകൾ, പ്രവേശനം, വിദ്യാർത്ഥി സേവനങ്ങൾ",
      facilities: ["Admissions Office", "Principal's Office", "Student Services", "Reception"],
      facilitiesMl: ["പ്രവേശന ഓഫീസ്", "പ്രിൻസിപ്പലിന്റെ ഓഫീസ്", "വിദ്യാർത്ഥി സേവനങ്ങൾ", "റിസപ്ഷൻ"],
      isOpen: true,
      hours: "8:00 AM - 5:00 PM",
      hoursMl: "രാവിലെ 8:00 - വൈകുന്നേരം 5:00"
    },
    {
      id: "mosque",
      name: "Main Mosque",
      nameMl: "പ്രധാന പള്ളി",
      type: "Religious",
      typeMl: "മതപരം",
      coordinates: { x: 50, y: 20 },
      description: "Central mosque for daily prayers and religious activities",
      descriptionMl: "ദൈനംദിന പ്രാർത്ഥനകൾക്കും മത പ്രവർത്തനങ്ങൾക്കുമുള്ള കേന്ദ്ര പള്ളി",
      facilities: ["Prayer Hall", "Mihrab", "Ablution Area", "Library Corner"],
      facilitiesMl: ["പ്രാർത്ഥനാ ഹാൾ", "മിഹ്റാബ്", "വുധു സ്ഥലം", "ലൈബ്രറി കോർണർ"],
      isOpen: true,
      hours: "5:00 AM - 10:00 PM",
      hoursMl: "രാവിലെ 5:00 - രാത്രി 10:00"
    },
    {
      id: "library",
      name: "Central Library",
      nameMl: "കേന്ദ്ര ലൈബ്രറി",
      type: "Academic",
      typeMl: "അക്കാദമിക്",
      coordinates: { x: 70, y: 45 },
      description: "Digital and traditional library with extensive Islamic collection",
      descriptionMl: "വിപുലമായ ഇസ്ലാമിക് ശേഖരമുള്ള ഡിജിറ്റൽ, പരമ്പരാഗത ലൈബ്രറി",
      facilities: ["Digital Resources", "Reading Rooms", "Research Section", "Rare Books"],
      facilitiesMl: ["ഡിജിറ്റൽ വിഭവങ്ങൾ", "വായനാ മുറികൾ", "ഗവേഷണ വിഭാഗം", "അപൂർവ പുസ്തകങ്ങൾ"],
      isOpen: true,
      hours: "7:00 AM - 9:00 PM",
      hoursMl: "രാവിലെ 7:00 - രാത്രി 9:00"
    },
    {
      id: "dormitory",
      name: "Student Dormitory",
      nameMl: "വിദ്യാർത്ഥി ഡോർമിറ്ററി",
      type: "Residential",
      typeMl: "താമസസ്ഥലം",
      coordinates: { x: 20, y: 70 },
      description: "Comfortable accommodation for residential students",
      descriptionMl: "താമസിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് സുഖകരമായ താമസസൗകര്യം",
      facilities: ["Shared Rooms", "Study Areas", "Common Kitchen", "Recreation Room"],
      facilitiesMl: ["പങ്കിട്ട മുറികൾ", "പഠന മേഖലകൾ", "പൊതു അടുക്കള", "വിനോദ മുറി"],
      isOpen: true,
      hours: "24/7 Access",
      hoursMl: "24/7 പ്രവേശനം"
    },
    {
      id: "dining",
      name: "Dining Hall",
      nameMl: "ഡൈനിംഗ് ഹാൾ",
      type: "Facilities",
      typeMl: "സൗകര്യങ്ങൾ",
      coordinates: { x: 60, y: 75 },
      description: "Cafeteria serving halal meals and refreshments",
      descriptionMl: "ഹലാൽ ഭക്ഷണവും പാനീയങ്ങളും നൽകുന്ന കഫറ്റീരിയ",
      facilities: ["Main Dining Area", "Kitchen", "Serving Counter", "Outdoor Seating"],
      facilitiesMl: ["പ്രധാന ഡൈനിംഗ് ഏരിയ", "അടുക്കള", "സേവിംഗ് കൗണ്ടർ", "ഔട്ട്ഡോർ സീറ്റിംഗ്"],
      isOpen: true,
      hours: "6:00 AM - 10:00 PM",
      hoursMl: "രാവിലെ 6:00 - രാത്രി 10:00"
    },
    {
      id: "sports",
      name: "Sports Complex",
      nameMl: "സ്പോർട്സ് കോംപ്ലക്സ്",
      type: "Recreation",
      typeMl: "വിനോദം",
      coordinates: { x: 80, y: 80 },
      description: "Indoor and outdoor sports facilities for students",
      descriptionMl: "വിദ്യാർത്ഥികൾക്കായി ഇൻഡോർ, ഔട്ട്ഡോർ കായിക സൗകര്യങ്ങൾ",
      facilities: ["Basketball Court", "Football Field", "Indoor Games", "Fitness Area"],
      facilitiesMl: ["ബാസ്കറ്റ് ബോൾ കോർട്ട്", "ഫുട്ബോൾ മൈതാനം", "ഇൻഡോർ ഗെയിമുകൾ", "ഫിറ്റ്നസ് ഏരിയ"],
      isOpen: true,
      hours: "6:00 AM - 8:00 PM",
      hoursMl: "രാവിലെ 6:00 - രാത്രി 8:00"
    }
  ];

  const locationTypes = [
    { id: "all", name: isMalayalam ? "എല്ലാം" : "All" },
    { id: "Administrative", name: isMalayalam ? "ഭരണപരം" : "Administrative" },
    { id: "Religious", name: isMalayalam ? "മതപരം" : "Religious" },
    { id: "Academic", name: isMalayalam ? "അക്കാദമിക്" : "Academic" },
    { id: "Residential", name: isMalayalam ? "താമസസ്ഥലം" : "Residential" },
    { id: "Facilities", name: isMalayalam ? "സൗകര്യങ്ങൾ" : "Facilities" },
    { id: "Recreation", name: isMalayalam ? "വിനോദം" : "Recreation" }
  ];

  const filteredLocations = filter === "all" 
    ? locations 
    : locations.filter(location => location.type === filter);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "ഇന്ററാക്ടീവ് കാമ്പസ് മാപ്പ്" : "Interactive Campus Map"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isMalayalam ? 
              "ഞങ്ങളുടെ കാമ്പസിന്റെ വിവിധ സൗകര്യങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക" :
              "Explore the various facilities across our campus"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-4">
                  {locationTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={filter === type.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter(type.id)}
                      className={filter === type.id ? "bg-dqaa-500" : ""}
                    >
                      {type.name}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-green-100 h-96 overflow-hidden">
                  {/* Campus Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300">
                    {/* Pathways */}
                    <svg className="absolute inset-0 w-full h-full">
                      <path 
                        d="M 0 200 Q 150 180 300 200 T 600 200" 
                        stroke="#8B5A2B" 
                        strokeWidth="8" 
                        fill="none"
                        opacity="0.6"
                      />
                      <path 
                        d="M 200 0 L 200 400" 
                        stroke="#8B5A2B" 
                        strokeWidth="6" 
                        fill="none"
                        opacity="0.6"
                      />
                      <path 
                        d="M 400 100 L 400 300" 
                        stroke="#8B5A2B" 
                        strokeWidth="6" 
                        fill="none"
                        opacity="0.6"
                      />
                    </svg>
                  </div>

                  {/* Location Markers */}
                  {filteredLocations.map((location) => (
                    <button
                      key={location.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                        selectedLocation?.id === location.id 
                          ? 'scale-125 z-20' 
                          : 'hover:scale-110 z-10'
                      }`}
                      style={{ 
                        left: `${location.coordinates.x}%`, 
                        top: `${location.coordinates.y}%` 
                      }}
                      onClick={() => setSelectedLocation(location)}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center ${
                        location.type === 'Religious' ? 'bg-green-500' :
                        location.type === 'Academic' ? 'bg-blue-500' :
                        location.type === 'Administrative' ? 'bg-purple-500' :
                        location.type === 'Residential' ? 'bg-orange-500' :
                        location.type === 'Facilities' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}>
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      {selectedLocation?.id === location.id && (
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 min-w-32 text-center border">
                          <p className="text-xs font-medium text-gray-800">
                            {isMalayalam ? location.nameMl : location.name}
                          </p>
                        </div>
                      )}
                    </button>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                    <h4 className="text-sm font-semibold mb-2">
                      {isMalayalam ? "ലെജൻഡ്" : "Legend"}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs">{isMalayalam ? "മതപരം" : "Religious"}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs">{isMalayalam ? "അക്കാദമിക്" : "Academic"}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs">{isMalayalam ? "ഭരണപരം" : "Admin"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Compass */}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    <Navigation className="h-6 w-6 text-dqaa-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            {selectedLocation ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {isMalayalam ? selectedLocation.typeMl : selectedLocation.type}
                    </Badge>
                    {selectedLocation.isOpen && (
                      <Badge variant="secondary" className="text-green-600">
                        {isMalayalam ? "തുറന്നിരിക്കുന്നു" : "Open"}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">
                    {isMalayalam ? selectedLocation.nameMl : selectedLocation.name}
                  </CardTitle>
                  <CardDescription>
                    {isMalayalam ? selectedLocation.descriptionMl : selectedLocation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedLocation.hours && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{isMalayalam ? selectedLocation.hoursMl : selectedLocation.hours}</span>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium mb-2">
                      {isMalayalam ? "സൗകര്യങ്ങൾ:" : "Facilities:"}
                    </h4>
                    <ul className="space-y-1">
                      {(isMalayalam ? selectedLocation.facilitiesMl : selectedLocation.facilities).map((facility, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-dqaa-500 rounded-full mr-2"></div>
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      {isMalayalam ? "ബന്ധപ്പെടുക" : "Contact"}
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Navigation className="h-4 w-4 mr-2" />
                      {isMalayalam ? "ദിശകൾ നേടുക" : "Get Directions"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    {isMalayalam ? 
                      "വിശദാംശങ്ങൾ കാണാൻ മാപ്പിൽ ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുക" :
                      "Select a location on the map to view details"
                    }
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Transportation Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  {isMalayalam ? "യാത്രാ വിവരങ്ങൾ" : "Transportation"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Bus className="h-4 w-4 text-blue-500" />
                  <span>{isMalayalam ? "പബ്ലിക് ബസ് ലഭ്യം" : "Public Bus Available"}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Car className="h-4 w-4 text-green-500" />
                  <span>{isMalayalam ? "പാർക്കിംഗ് സൗകര്യം" : "Parking Available"}</span>
                </div>
                <p className="text-xs text-gray-500">
                  {isMalayalam ? 
                    "കോഴിക്കോട് നഗരത്തിൽ നിന്ന് 45 മിനിറ്റ് ഡ്രൈവ്" :
                    "45 minutes drive from Kozhikode city"
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCampusMap;
