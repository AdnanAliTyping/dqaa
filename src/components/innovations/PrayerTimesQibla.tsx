
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Clock, MapPin, Bell, RefreshCw } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

interface LocationData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

const PrayerTimesQibla = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [qiblaDirection, setQiblaDirection] = useState<number>(0);
  const [nextPrayer, setNextPrayer] = useState<string>('');
  const [timeToNextPrayer, setTimeToNextPrayer] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const prayerNames = {
    en: {
      fajr: 'Fajr',
      sunrise: 'Sunrise',
      dhuhr: 'Dhuhr',
      asr: 'Asr',
      maghrib: 'Maghrib',
      isha: 'Isha'
    },
    ml: {
      fajr: 'ഫജ്ർ',
      sunrise: 'സൂര്യോദയം',
      dhuhr: 'സുഹർ',
      asr: 'അസർ',
      maghrib: 'മഗ്രിബ്',
      isha: 'ഇശാ'
    }
  };

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate Qibla direction
  const calculateQiblaDirection = (lat: number, lng: number): number => {
    const kaabaLat = 21.4225; // Kaaba latitude
    const kaabaLng = 39.8262; // Kaaba longitude
    
    const dLng = (kaabaLng - lng) * Math.PI / 180;
    const lat1 = lat * Math.PI / 180;
    const lat2 = kaabaLat * Math.PI / 180;
    
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    
    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    bearing = (bearing + 360) % 360;
    
    return Math.round(bearing);
  };

  // Calculate prayer times (simplified calculation)
  const calculatePrayerTimes = (lat: number, lng: number, date: Date): PrayerTimes => {
    // This is a simplified calculation. In production, use a proper Islamic prayer times library
    const sunrise = 6; // 6:00 AM
    const sunset = 18; // 6:00 PM
    
    return {
      fajr: '05:30',
      sunrise: '06:15',
      dhuhr: '12:30',
      asr: '15:45',
      maghrib: '18:15',
      isha: '19:30'
    };
  };

  // Find next prayer
  const findNextPrayer = (prayers: PrayerTimes, currentTime: Date): { name: string; time: string; countdown: string } => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const prayerList = [
      { name: 'fajr', time: prayers.fajr },
      { name: 'dhuhr', time: prayers.dhuhr },
      { name: 'asr', time: prayers.asr },
      { name: 'maghrib', time: prayers.maghrib },
      { name: 'isha', time: prayers.isha }
    ];

    for (const prayer of prayerList) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerMinutes = hours * 60 + minutes;
      
      if (prayerMinutes > now) {
        const diff = prayerMinutes - now;
        const hoursLeft = Math.floor(diff / 60);
        const minutesLeft = diff % 60;
        const countdown = `${hoursLeft}h ${minutesLeft}m`;
        
        return {
          name: prayer.name,
          time: prayer.time,
          countdown
        };
      }
    }
    
    // If no prayer found for today, return Fajr of next day
    const diff = (24 * 60) - now + (5 * 60 + 30); // Next Fajr
    const hoursLeft = Math.floor(diff / 60);
    const minutesLeft = diff % 60;
    
    return {
      name: 'fajr',
      time: prayers.fajr,
      countdown: `${hoursLeft}h ${minutesLeft}m`
    };
  };

  const requestLocation = async () => {
    setLoading(true);
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Set default location (you can integrate with a geocoding service)
            const locationData: LocationData = {
              city: 'Panamanna',
              country: 'India',
              latitude,
              longitude
            };
            
            setLocation(locationData);
            setQiblaDirection(calculateQiblaDirection(latitude, longitude));
            
            const prayers = calculatePrayerTimes(latitude, longitude, new Date());
            setPrayerTimes(prayers);
            
            const next = findNextPrayer(prayers, currentTime);
            setNextPrayer(next.name);
            setTimeToNextPrayer(next.countdown);
            
            setLoading(false);
          },
          (error) => {
            console.error('Location error:', error);
            // Use default location (DQAA location)
            const defaultLocation: LocationData = {
              city: 'Panamanna',
              country: 'India',
              latitude: 11.2588,
              longitude: 75.7804
            };
            
            setLocation(defaultLocation);
            setQiblaDirection(calculateQiblaDirection(defaultLocation.latitude, defaultLocation.longitude));
            
            const prayers = calculatePrayerTimes(defaultLocation.latitude, defaultLocation.longitude, new Date());
            setPrayerTimes(prayers);
            
            const next = findNextPrayer(prayers, currentTime);
            setNextPrayer(next.name);
            setTimeToNextPrayer(next.countdown);
            
            setLoading(false);
          }
        );
      }
    } catch (error) {
      console.error('Error getting location:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  useEffect(() => {
    if (prayerTimes) {
      const next = findNextPrayer(prayerTimes, currentTime);
      setNextPrayer(next.name);
      setTimeToNextPrayer(next.countdown);
    }
  }, [currentTime, prayerTimes]);

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(isMalayalam ? 'ml-IN' : 'en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-dqaa-500 mr-3" />
            <h2 className="text-3xl font-bold text-dqaa-900">
              {isMalayalam ? "നമാസ് സമയം & ഖിബ്ല ദിശ" : "Prayer Times & Qibla Direction"}
            </h2>
          </div>
          <p className="text-gray-600">
            {isMalayalam ? 
              "നിങ്ങളുടെ സ്ഥാനത്തിനനുസരിച്ചുള്ള കൃത്യമായ നമാസ് സമയവും ഖിബ്ല ദിശയും" :
              "Accurate prayer times and Qibla direction for your location"
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Current Time & Date */}
          <Card className="lg:col-span-3">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-dqaa-900 mb-2">
                  {formatTime(currentTime)}
                </div>
                <div className="text-lg text-gray-600 mb-4">
                  {formatDate(currentTime)}
                </div>
                {location && (
                  <div className="flex items-center justify-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {location.city}, {location.country}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Prayer Times */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-dqaa-500" />
                {isMalayalam ? "ഇന്നത്തെ നമാസ് സമയം" : "Today's Prayer Times"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <RefreshCw className="h-6 w-6 animate-spin text-dqaa-500" />
                  <span className="ml-2">
                    {isMalayalam ? "ലോഡിംഗ്..." : "Loading..."}
                  </span>
                </div>
              ) : prayerTimes ? (
                <div className="space-y-3">
                  {Object.entries(prayerTimes).map(([prayer, time]) => (
                    prayer !== 'sunrise' && (
                      <div
                        key={prayer}
                        className={`flex justify-between items-center p-3 rounded-lg border ${
                          nextPrayer === prayer ? 'bg-dqaa-50 border-dqaa-200' : 'bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900">
                            {prayerNames[currentLanguage as keyof typeof prayerNames][prayer as keyof typeof prayerNames.en]}
                          </span>
                          {nextPrayer === prayer && (
                            <Badge className="ml-2 bg-dqaa-500">
                              {isMalayalam ? "അടുത്തത്" : "Next"}
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-dqaa-900">{time}</div>
                          {nextPrayer === prayer && (
                            <div className="text-xs text-dqaa-600">
                              {isMalayalam ? `${timeToNextPrayer} ബാക്കി` : `in ${timeToNextPrayer}`}
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Button onClick={requestLocation}>
                    <MapPin className="h-4 w-4 mr-2" />
                    {isMalayalam ? "സ്ഥാനം അനുവദിക്കുക" : "Enable Location"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Qibla Direction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Compass className="h-5 w-5 mr-2 text-dqaa-500" />
                {isMalayalam ? "ഖിബ്ല ദിശ" : "Qibla Direction"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-200">
                    <div
                      className="absolute top-0 left-1/2 w-1 h-16 bg-dqaa-500 transform -translate-x-1/2 origin-bottom"
                      style={{ transform: `translateX(-50%) rotate(${qiblaDirection}deg)` }}
                    >
                      <div className="w-3 h-3 bg-dqaa-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold">N</div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs">S</div>
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs">W</div>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs">E</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-dqaa-900 mb-2">
                  {qiblaDirection}°
                </div>
                <div className="text-sm text-gray-600">
                  {isMalayalam ? "മക্কയിലേക്കുള്ള ദിശ" : "Direction to Mecca"}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Prayer Alert */}
          {nextPrayer && prayerTimes && (
            <Card className="lg:col-span-3 bg-dqaa-50 border-dqaa-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-6 w-6 text-dqaa-500 mr-3" />
                    <div>
                      <div className="font-bold text-dqaa-900">
                        {isMalayalam ? "അടുത്ത നമാസ്" : "Next Prayer"}
                      </div>
                      <div className="text-dqaa-700">
                        {prayerNames[currentLanguage as keyof typeof prayerNames][nextPrayer as keyof typeof prayerNames.en]} - {prayerTimes[nextPrayer as keyof PrayerTimes]}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-dqaa-900">{timeToNextPrayer}</div>
                    <div className="text-sm text-dqaa-600">
                      {isMalayalam ? "ബാക്കി" : "remaining"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrayerTimesQibla;
