
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface IslamicEvent {
  name: string;
  nameML: string;
  date: Date;
  type: 'hajj' | 'ramadan' | 'muharram' | 'general';
  description: string;
  descriptionML: string;
}

const IslamicEventCountdown = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  const upcomingEvents: IslamicEvent[] = [
    {
      name: "Ramadan 2026",
      nameML: "റമദാൻ 2026",
      date: new Date('2026-03-01'),
      type: 'ramadan', 
      description: "Holy month of fasting",
      descriptionML: "നോമ്പിന്റെ പവിത്രമാസം"
    },
    {
      name: "New Academic Year",
      nameML: "പുതിയ അധ്യയന വർഷം",
      date: new Date('2025-06-01'),
      type: 'general',
      description: "2025-26 Academic Session",
      descriptionML: "2025-26 അധ്യയന സെഷൻ"
    },
    {
      name: "Muharram 1447",
      nameML: "മുഹറം 1447",
      date: new Date('2025-07-07'),
      type: 'muharram',
      description: "Islamic New Year",
      descriptionML: "ഇസ്ലാമിക് പുതുവത്സരം"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newTimeLeft: { [key: string]: string } = {};

      upcomingEvents.forEach(event => {
        const diff = event.date.getTime() - now.getTime();
        
        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          
          newTimeLeft[event.name] = `${days}d ${hours}h ${minutes}m`;
        } else {
          newTimeLeft[event.name] = isMalayalam ? "സമാപ്തം" : "Completed";
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [isMalayalam]);

  const getEventColor = (type: string) => {
    switch (type) {
      case 'hajj': return 'from-blue-500 to-indigo-600';
      case 'ramadan': return 'from-purple-500 to-violet-600';
      case 'muharram': return 'from-gray-600 to-slate-700';
      case 'general': return 'from-green-500 to-emerald-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isMalayalam ? "ഇസ്ലാമിക് ഇവന്റുകൾ" : "Upcoming Islamic Events"}
          </h2>
          <p className="text-gray-600">
            {isMalayalam ? "പ്രധാന ഇസ്ലാമിക് പരിപാടികളുടെ കൗണ്ട്ഡൗൺ" : "Countdown to major Islamic occasions"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${getEventColor(event.type)}`}></div>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">
                    {event.date.toLocaleDateString(isMalayalam ? 'ml-IN' : 'en-IN')}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {isMalayalam ? event.nameML : event.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {isMalayalam ? event.descriptionML : event.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="font-mono text-lg font-bold text-gray-900">
                    {timeLeft[event.name] || (isMalayalam ? "കണക്കാക്കുന്നു..." : "Calculating...")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IslamicEventCountdown;
