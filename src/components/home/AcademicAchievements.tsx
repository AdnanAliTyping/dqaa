
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/lib/i18n";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Achievement {
  id: number;
  title: string;
  titleMl: string;
  date: string;
  details: string;
  detailsMl: string;
  image: string;
}

const announcements: Achievement[] = [
  {
    id: 1,
    title: "100% SSLC Result, Alhamdulillah",
    titleMl: "100% SSLC ഫലം, അൽഹംദുലില്ലാഹ്",
    date: "May 9, 2025",
    details: "DQAA is proud to announce our 100% pass rate in SSLC examinations for 2025, with 85% of students securing A+ grades.",
    detailsMl: "2025 SSLC പരീക്ഷകളിൽ 100% വിജയവും 85% വിദ്യാർത്ഥികൾ A+ ഗ്രേഡും നേടിയതിൽ DQAA അഭിമാനിക്കുന്നു.",
    image: "/lovable-uploads/4131c2be-ede7-4928-9d02-7936cb9b4804.png"
  },
  {
    id: 2,
    title: "Hifz & Shari'ah Annual Exam Toppers",
    titleMl: "ഹിഫ്സ് & ഷരീഅ വാർഷിക പരീക്ഷാ ടോപ്പേഴ്സ്",
    date: "May 13, 2025",
    details: "Congratulations to our top performers: Hifz Program - Muhammad Shamil K (Nellaya), Muhammad Sahil (Vallapuzha), Muhammad Shaheel. Shari'ah Program - Muhammad Sinan C (Manjeri), Muhammad Hinaan (Thootha), Muhammad Firhad (Edappal).",
    detailsMl: "ഞങ്ങളുടെ മികച്ച പ്രകടനക്കാർക്ക് അഭിനന്ദനങ്ങൾ: ഹിഫ്സ് പ്രോഗ്രാം - മുഹമ്മദ് ഷാമിൽ കെ (നെല്ലായ), മുഹമ്മദ് സാഹിൽ (വള്ളപ്പുഴ), മുഹമ്മദ് ഷാഹീൽ. ഷരീഅ പ്രോഗ്രാം - മുഹമ്മദ് സിനാൻ സി (മഞ്ചേരി), മുഹമ്മദ് ഹിനാൻ (തൂത്ത), മുഹമ്മദ് ഫിർഹാദ് (എടപ്പാൾ).",
    image: "/lovable-uploads/ab7ff499-b4e7-4f16-ae61-5128f8465d6a.png"
  }
];

const events: Achievement[] = [
  {
    id: 3,
    title: "2025 Admission Orientation Program",
    titleMl: "2025 പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാം",
    date: "May 14, 2025",
    details: "DQAA held its admission orientation program for the 2025-26 academic year, introducing prospective students and parents to our programs.",
    detailsMl: "2025-26 അക്കാദമിക് വർഷത്തേക്കുള്ള പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാം DQAA നടത്തി, സാധ്യതയുള്ള വിദ്യാർത്ഥികളെയും രക്ഷിതാക്കളെയും ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ പരിചയപ്പെടുത്തി.",
    image: "/lovable-uploads/e592db7a-4118-4bdb-b9c7-e7865e2017fe.png"
  },
  {
    id: 4,
    title: "10th Anniversary Celebration",
    titleMl: "10-ാം വാർഷിക ആഘോഷം",
    date: "April 10, 2025",
    details: "Darul Quran Abdulla Academy celebrated its 10th anniversary with distinguished guests, alumni, and current students.",
    detailsMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി വിശിഷ്ട അതിഥികൾ, പൂർവ വിദ്യാർത്ഥികൾ, നിലവിലെ വിദ്യാർത്ഥികൾ എന്നിവരോടൊപ്പം 10-ാം വാർഷികം ആഘോഷിച്ചു.",
    image: "/lovable-uploads/26f01633-775e-480a-b72c-f85de1f96e1a.png"
  }
];

const AcademicAchievements = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [selectedTab, setSelectedTab] = useState("announcements");

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "പ്രധാന അറിയിപ്പുകൾ" : "Principal's Announcements"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isMalayalam 
              ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ ഏറ്റവും പുതിയ വാർത്തകളും പ്രധാന പരിപാടികളും"
              : "The latest news and important events at Darul Quran Abdulla Academy"
            }
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="announcements" onValueChange={setSelectedTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="announcements">{isMalayalam ? "അറിയിപ്പുകൾ" : "Announcements"}</TabsTrigger>
                <TabsTrigger value="events">{isMalayalam ? "പരിപാടികൾ" : "Events"}</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="announcements" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {announcements.map((item, index) => (
                  <Card key={item.id} className={`overflow-hidden shadow-sm hover:shadow-md transition-all ${index === 0 ? 'border-t-4 border-t-gold-400' : ''}`}>
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={isMalayalam ? item.titleMl : item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                      <CardTitle>{isMalayalam ? item.titleMl : item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {isMalayalam ? item.detailsMl : item.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="events" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {events.map((item) => (
                  <Card key={item.id} className="overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={isMalayalam ? item.titleMl : item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                      <CardTitle>{isMalayalam ? item.titleMl : item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {isMalayalam ? item.detailsMl : item.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 text-center">
            <Link to="/news">
              <Button variant="outline" className="border-dqaa-500 text-dqaa-500 hover:bg-dqaa-50">
                {isMalayalam ? "എല്ലാ വാർത്തകളും പരിപാടികളും" : "All News & Events"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicAchievements;
