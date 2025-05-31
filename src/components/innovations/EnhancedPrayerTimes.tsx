
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Clock, MapPin, Bell, Share2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface PrayerTimes {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const EnhancedPrayerTimes = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes] = useState<PrayerTimes>({
    fajr: '05:15',
    sunrise: '06:00',
    dhuhr: '12:15',
    asr: '15:30',
    maghrib: '18:45',
    isha: '20:00'
  });
  const [nextPrayer, setNextPrayer] = useState<string>('');
  const [timeToNext, setTimeToNext] = useState<string>('');
  const [qiblaDirection] = useState(292); // Accurate for Ottapalam, Kerala

  const prayerNames = {
    en: { fajr: 'Fajr', sunrise: 'Sunrise', dhuhr: 'Dhuhr', asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha' },
    ml: { fajr: 'ഫജ്ർ', sunrise: 'സൂര്യോദയം', dhuhr: 'സുഹർ', asr: 'അസർ', maghrib: 'മഗ്രിബ്', isha: 'ഇശാ' }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Convert to IST
      const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
      setCurrentTime(istTime);
      
      // Find next prayer
      const currentMinutes = istTime.getHours() * 60 + istTime.getMinutes();
      const prayers = [
        { name: 'fajr', time: prayerTimes.fajr },
        { name: 'dhuhr', time: prayerTimes.dhuhr },
        { name: 'asr', time: prayerTimes.asr },
        { name: 'maghrib', time: prayerTimes.maghrib },
        { name: 'isha', time: prayerTimes.isha }
      ];

      for (const prayer of prayers) {
        const [hours, minutes] = prayer.time.split(':').map(Number);
        const prayerMinutes = hours * 60 + minutes;
        
        if (prayerMinutes > currentMinutes) {
          setNextPrayer(prayer.name);
          const diff = prayerMinutes - currentMinutes;
          const hoursLeft = Math.floor(diff / 60);
          const minutesLeft = diff % 60;
          setTimeToNext(`${hoursLeft}h ${minutesLeft}m`);
          break;
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [prayerTimes]);

  const shareTime = (prayer: string, time: string) => {
    const text = `${prayer} prayer time today: ${time} (IST) - Ottapalam, Kerala`;
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-6">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Current Time */}
          <Card className="lg:col-span-3 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">
                {currentTime.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true })}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-1" />
                Ottapalam, Kerala (IST)
              </div>
            </CardContent>
          </Card>

          {/* Prayer Times */}
          <Card className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-600" />
                {isMalayalam ? "ഇന്നത്തെ നമാസ് സമയം" : "Today's Prayer Times"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(prayerTimes).map(([prayer, time]) => 
                prayer !== 'sunrise' && (
                  <div
                    key={prayer}
                    className={`flex justify-between items-center p-3 rounded-lg ${
                      nextPrayer === prayer ? 'bg-green-100 border-2 border-green-300' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="font-medium">
                        {prayerNames[currentLanguage as keyof typeof prayerNames][prayer as keyof typeof prayerNames.en]}
                      </span>
                      {nextPrayer === prayer && (
                        <Badge className="ml-2 bg-green-600">
                          {isMalayalam ? "അടുത്തത്" : "Next"}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-green-800">{time}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => shareTime(prayer, time)}
                        className="h-6 w-6 p-0"
                      >
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>

          {/* Qibla Direction */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Compass className="h-5 w-5 mr-2 text-green-600" />
                {isMalayalam ? "ഖിബ്ല ദിശ" : "Qibla"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-3">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200">
                  <div
                    className="absolute top-0 left-1/2 w-1 h-10 bg-green-600 transform -translate-x-1/2 origin-bottom"
                    style={{ transform: `translateX(-50%) rotate(${qiblaDirection}deg)` }}
                  >
                    <div className="w-2 h-2 bg-green-600 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold">N</div>
                </div>
              </div>
              <div className="text-xl font-bold text-green-800">{qiblaDirection}°</div>
              <div className="text-xs text-gray-600">
                {isMalayalam ? "മക്കയിലേക്ക്" : "To Mecca"}
              </div>
            </CardContent>
          </Card>

          {/* Next Prayer Alert */}
          {nextPrayer && (
            <Card className="lg:col-span-3 bg-green-100 border-green-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-green-700 mr-2" />
                    <div>
                      <div className="font-bold text-green-800">
                        {isMalayalam ? "അടുത്ത നമാസ്" : "Next Prayer"}
                      </div>
                      <div className="text-green-700 text-sm">
                        {prayerNames[currentLanguage as keyof typeof prayerNames][nextPrayer as keyof typeof prayerNames.en]} - {prayerTimes[nextPrayer as keyof PrayerTimes]}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-800">{timeToNext}</div>
                    <div className="text-xs text-green-600">
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

export default EnhancedPrayerTimes;
