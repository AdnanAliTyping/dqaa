
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, TrophyIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

interface Announcement {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

const Announcements = () => {
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  const announcements: Announcement[] = [
    {
      id: "1",
      date: "13/05/2025",
      title: isMalayalam ? "ഹിഫ്സ് & ഷരീഅത്ത് വാർഷിക പരീക്ഷ ടോപ്പേഴ്സ്" : "Hifz & Shari'ah Annual Exam Toppers",
      description: isMalayalam ? 
        "ഹിഫ്സ്: മുഹമ്മദ് ഷാമിൽ കെ (നെല്ലായ), മുഹമ്മദ് സാഹിൽ (വള്ളപ്പുഴ), മുഹമ്മദ് ഷഹീൽ. ഷരീഅത്ത്: മുഹമ്മദ് സിനാൻ സി (മഞ്ചേരി), മുഹമ്മദ് ഹിനാൻ (തൂത്ത), മുഹമ്മദ് ഫിർഹാദ് (എടപ്പാൾ)" : 
        "Hifz: Muhammad Shamil K (Nellaya), Muhammad Sahil (Vallapuzha), Muhammad Shaheel. Shari'ah: Muhammad Sinan C (Manjeri), Muhammad Hinaan (Thootha), Muhammad Firhad (Edappal)",
      icon: <TrophyIcon className="h-8 w-8 text-gold-400" />,
      link: "/news/hifz-shariah-exam-toppers"
    },
    {
      id: "2",
      date: "09/05/2025",
      title: isMalayalam ? "100% SSLC ഫലം, അൽഹംദുലില്ലാഹ്" : "100% SSLC Result, Alhamdulillah",
      description: isMalayalam ? 
        "എല്ലാ വിദ്യാർത്ഥികളും വിജയിച്ചതിന് അല്ലാഹുവിന് നന്ദി. അദ്ധ്യാപകർക്കും രക്ഷിതാക്കൾക്കും അഭിനന്ദനങ്ങൾ." : 
        "All our students have successfully passed the SSLC examinations. Thanks to Allah for this blessing. Congratulations to our teachers and parents.",
      icon: <GraduationCapIcon className="h-8 w-8 text-gold-400" />,
      link: "/news/sslc-results-2025"
    },
    {
      id: "3",
      date: "14/05/2025",
      title: isMalayalam ? "2025 പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാം" : "2025 Admission Orientation Program",
      description: isMalayalam ? 
        "മെയ് 14 ന് ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിൽ നടക്കുന്ന 2025-26 അക്കാദമിക് വർഷത്തെ പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാമിലേക്ക് എല്ലാവരെയും സ്വാഗതം ചെയ്യുന്നു." : 
        "Welcome to the 2025-26 academic year admission orientation program at Darul Quran Abdulla Academy on May 14, 2025. All prospective students and parents are invited.",
      icon: <CalendarIcon className="h-8 w-8 text-gold-400" />,
      link: "/news/orientation-program-2025"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dqaa-900 font-display mb-2">
              {isMalayalam ? "പ്രധാന അറിയിപ്പുകൾ" : "Latest Announcements"}
            </h2>
            <p className="text-gray-600">
              {isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിൽ നിന്നുള്ള ഏറ്റവും പുതിയ വിശേഷങ്ങൾ" : 
              "Stay updated with the latest news from Darul Quran Abdulla Academy"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="bg-white border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    {announcement.icon}
                    <div className="text-sm text-gray-500">{announcement.date}</div>
                  </div>
                  <CardTitle className="text-lg font-semibold mt-2">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{announcement.description}</CardDescription>
                </CardContent>
                {announcement.link && (
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <Link to={announcement.link}>
                        {isMalayalam ? "കൂടുതൽ വായിക്കുക" : "Read More"}
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="default" asChild>
              <Link to="/news">
                {isMalayalam ? "എല്ലാ അറിയിപ്പുകളും കാണുക" : "View All Announcements"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
