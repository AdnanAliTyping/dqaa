import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Compass, Clock, MapPin, Bell, RefreshCw, Info, ExternalLink } from "lucide-react";
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

  // Calculate Qibla direction based on lat/lng
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

  // Fixed prayer times for demo
  const calculatePrayerTimes = (): PrayerTimes => ({
    fajr: '04:44',
    sunrise: '06:01',
    dhuhr: '12:22',
    asr: '15:49',
    maghrib: '18:43',
    isha: '20:01',
  });

  // Find next prayer and countdown
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

    // If no prayer left today, countdown to next day's fajr
    const diff = (24 * 60) - now + (4 * 60 + 44); // Next fajr time in minutes: 4:44 AM
    const hoursLeft = Math.floor(diff / 60);
    const minutesLeft = diff % 60;

    return {
      name: 'fajr',
      time: prayers.fajr,
      countdown: `${hoursLeft}h ${minutesLeft}m`
    };
  };

  // Request user location or fallback default
  const requestLocation = async () => {
    setLoading(true);
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            const locationData: LocationData = {
              city: 'Panamanna',
              country: 'India',
              latitude,
              longitude
            };

            setLocation(locationData);
            setQiblaDirection(calculateQiblaDirection(latitude, longitude));

            const prayers = calculatePrayerTimes();
            setPrayerTimes(prayers);

            const next = findNextPrayer(prayers, new Date());
            setNextPrayer(next.name);
            setTimeToNextPrayer(next.countdown);

            setLoading(false);
          },
          () => {
            // fallback location if permission denied or error
            const defaultLocation: LocationData = {
              city: 'Panamanna',
              country: 'India',
              latitude: 11.2588,
              longitude: 75.7804
            };

            setLocation(defaultLocation);
            setQiblaDirection(calculateQiblaDirection(defaultLocation.latitude, defaultLocation.longitude));

            const prayers = calculatePrayerTimes();
            setPrayerTimes(prayers);

            const next = findNextPrayer(prayers, new Date());
            setNextPrayer(next.name);
            setTimeToNextPrayer(next.countdown);

            setLoading(false);
          }
        );
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Error getting location:', error);
      setLoading(false);
    }
  };

  // On mount, request location once
  useEffect(() => {
    requestLocation();
  }, []);

  // Update next prayer countdown when time or prayers update
  useEffect(() => {
    if (prayerTimes) {
      const next = findNextPrayer(prayerTimes, currentTime);
      setNextPrayer(next.name);
      setTimeToNextPrayer(next.countdown);
    }
  }, [currentTime, prayerTimes]);

  // Format current time display
  const formatTime = (time: Date) => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  // Format current date display
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
        <Alert className="mb-6 border-green-200 bg-green-50">
          <Info className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <div>
              <span className="font-medium">
                {isMalayalam ? "പരീക്ഷണാത്മക AI ഫീച്ചർ" : "Experimental AI Feature"}
              </span>
              {" - "}
              {isMalayalam ?
                "AI8TY.com വികസിപ്പിച്ച ഡെമോ ഫീച്ചർ. ഡിഫോൾട്ട് ലൊക്കേഷൻ പാണമന്ന, കേരള." :
                "Demo feature by AI8TY.com. Default location: Panamanna, Kerala."
              }
            </div>
            <a
              href="https://ai8ty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 ml-2"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </AlertDescription>
        </Alert>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-dqaa-500 mr-3" />
            <h2 className="text-3xl font-bold text-dqaa-900">
              {isMalayalam ? "നിസ്കാര സമയം & ഖിബ്ല ദിശ" : "Prayer Times & Qibla Direction"}
            </h2>
          </div>
          <p className="text-gray-600">
            {isMalayalam ?
              "നിങ്ങളുടെ സ്ഥാനത്തിനനുസരിച്ചുള്ള കൃത്യമായ നിസ്കാര സമയവും ഖിബ്ല ദിശയും" :
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
                {isMalayalam ? "ഇന്നത്തെ നിസ്കാര സമയം" : "Today's Prayer Times"}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              {prayerTimes && Object.entries(prayerTimes).map(([key, time]) => (
                <div key={key} className="flex flex-col items-center">
                  <Badge
                    variant={nextPrayer === key ? "destructive" : "outline"}
                    className="mb-1 w-full text-center"
                  >
                    {prayerNames[isMalayalam ? 'ml' : 'en'][key as keyof PrayerTimes]}
                  </Badge>
                  <div className="text-xl font-semibold">{time}</div>
                </div>
              ))}
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
            <CardContent className="flex flex-col items-center justify-center py-10">
              <div
                style={{ transform: `rotate(${qiblaDirection}deg)` }}
                className="text-dqaa-600"
                aria-label="Qibla Direction Arrow"
                title={`Qibla: ${qiblaDirection}°`}
              >
                <Compass className="h-20 w-20" />
              </div>
              <div className="mt-4 text-lg font-semibold">
                {qiblaDirection}°
              </div>
              <div className="text-sm text-gray-600">
                {isMalayalam ? "നിങ്ങളുടെ സ്ഥിതിചെയ്യുന്ന സ്ഥാനത്തുനിന്നുള്ള ഖിബ്ല ദിശ" : "Direction from your location"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Prayer Countdown */}
        <div className="mt-8 text-center">
          <Alert className="inline-flex items-center justify-center w-auto mx-auto border-dqaa-300 bg-dqaa-50 text-dqaa-900 max-w-md">
            <Bell className="mr-2 h-5 w-5" />
            {isMalayalam ? "അടുത്ത നിസ്കാരം" : "Next Prayer"}:{" "}
            <strong className="ml-1 mr-2">
              {prayerNames[isMalayalam ? 'ml' : 'en'][nextPrayer as keyof PrayerTimes]}
            </strong>
            <span>
              {isMalayalam ? "ശേഷിക്കുന്ന സമയം" : "in"} {timeToNextPrayer}
            </span>
            <Button
              size="sm"
              variant="outline"
              className="ml-4"
              onClick={requestLocation}
              aria-label={isMalayalam ? "സ്ഥാനം പുതുക്കുക" : "Refresh Location"}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </Alert>
        </div>

      </div>
    </div>
  );
};

export default PrayerTimesQibla;
