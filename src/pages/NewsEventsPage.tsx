
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronRight, Image, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "@/lib/i18n";

// Define the news and events data
const newsAndEvents = [
  {
    id: 1,
    title: "100% SSLC Result, Alhamdulillah",
    titleMl: "100% SSLC ഫലം, അൽഹംദുലില്ലാഹ്",
    date: "May 9, 2025",
    category: "announcement",
    image: "/lovable-uploads/4131c2be-ede7-4928-9d02-7936cb9b4804.png",
    excerpt: "DQAA is proud to announce our 100% pass rate in SSLC examinations for 2025, with 85% of students securing A+ grades.",
    excerptMl: "2025 SSLC പരീക്ഷകളിൽ 100% വിജയവും 85% വിദ്യാർത്ഥികൾ A+ ഗ്രേഡും നേടിയതിൽ DQAA അഭിമാനിക്കുന്നു.",
    content: "DQAA is proud to announce our exceptional results in the 2025 SSLC examinations. All of our students have successfully passed, with an impressive 85% securing A+ grades across subjects. This remarkable achievement reflects the dedication of our students, the expertise of our faculty, and the effectiveness of our integrated educational approach that combines Islamic and academic excellence. Special recognition goes to our top performers and to all the teachers who have worked tirelessly to ensure this success.",
    contentMl: "2025 SSLC പരീക്ഷകളിൽ ഞങ്ങളുടെ മികച്ച ഫലം പ്രഖ്യാപിക്കുന്നതിൽ DQAA അഭിമാനിക്കുന്നു. ഞങ്ങളുടെ എല്ലാ വിദ്യാർത്ഥികളും വിജയിച്ചു, 85% വിദ്യാർത്ഥികൾ എല്ലാ വിഷയങ്ങളിലും A+ ഗ്രേഡ് നേടി. ഞങ്ങളുടെ വിദ്യാർത്ഥികളുടെ സമർപ്പണവും, അധ്യാപകരുടെ വൈദഗ്ധ്യവും, ഇസ്ലാമിക-അക്കാദമിക മികവ് സംയോജിപ്പിക്കുന്ന ഞങ്ങളുടെ സമഗ്ര വിദ്യാഭ്യാസ സമീപനത്തിന്റെ ഫലപ്രാപ്തിയും ഈ ശ്രദ്ധേയമായ നേട്ടം പ്രതിഫലിപ്പിക്കുന്നു. എല്ലാ മികച്ച പ്രകടനം കാഴ്ചവച്ചവർക്കും, ഈ വിജയം ഉറപ്പാക്കാൻ അക്ഷീണം പ്രവർത്തിച്ച എല്ലാ അധ്യാപകർക്കും പ്രത്യേക അംഗീകാരം."
  },
  {
    id: 2,
    title: "Hifz & Shari'ah Annual Exam Toppers",
    titleMl: "ഹിഫ്സ് & ഷരീഅ വാർഷിക പരീക്ഷാ ടോപ്പേഴ്സ്",
    date: "May 13, 2025",
    category: "announcement",
    image: "/lovable-uploads/ab7ff499-b4e7-4f16-ae61-5128f8465d6a.png",
    excerpt: "We are pleased to announce the top performers in our Hifz and Shari'ah programs for the academic year 2024-25.",
    excerptMl: "2024-25 അക്കാദമിക് വർഷത്തിൽ ഞങ്ങളുടെ ഹിഫ്സ്, ഷരീഅ പ്രോഗ്രാമുകളിലെ മികച്ച പ്രകടനം കാഴ്ചവച്ചവരെ അറിയിക്കുന്നതിൽ ഞങ്ങൾ സന്തോഷിക്കുന്നു.",
    content: "We are delighted to announce the outstanding achievers in our 2025 annual examinations for Hifz and Shari'ah programs.\n\nHifz Program Toppers:\n1. Muhammad Shamil K (Nellaya)\n2. Muhammad Sahil (Vallapuzha)\n3. Muhammad Shaheel\n\nShari'ah Program Toppers:\n1. Muhammad Sinan C (Manjeri)\n2. Muhammad Hinaan (Thootha)\n3. Muhammad Firhad (Edappal)\n\n\"Congratulations to all winners and heartfelt appreciation to staff and parents for their continuous support and guidance.\" — Ustad Mustafa Mannani, Principal",
    contentMl: "ഞങ്ങളുടെ ഹിഫ്സ്, ഷരീഅ പ്രോഗ്രാമുകളുടെ 2025 വാർഷിക പരീക്ഷകളിലെ മികച്ച നേട്ടങ്ങൾ പ്രഖ്യാപിക്കുന്നതിൽ ഞങ്ങൾ സന്തോഷിക്കുന്നു.\n\nഹിഫ്സ് പ്രോഗ്രാം ടോപ്പേഴ്സ്:\n1. മുഹമ്മദ് ഷാമിൽ കെ (നെല്ലായ)\n2. മുഹമ്മദ് സാഹിൽ (വള്ളപ്പുഴ)\n3. മുഹമ്മദ് ഷാഹീൽ\n\nഷരീഅ പ്രോഗ്രാം ടോപ്പേഴ്സ്:\n1. മുഹമ്മദ് സിനാൻ സി (മഞ്ചേരി)\n2. മുഹമ്മദ് ഹിനാൻ (തൂത്ത)\n3. മുഹമ്മദ് ഫിർഹാദ് (എടപ്പാൾ)\n\n\"എല്ലാ വിജയികൾക്കും അഭിനന്ദനങ്ങൾ, സ്റ്റാഫുകൾക്കും രക്ഷിതാക്കൾക്കും അവരുടെ തുടർച്ചയായ പിന്തുണയ്ക്കും മാർഗനിർദേശത്തിനും ഹൃദയപൂർവ്വം നന്ദി.\" — ഉസ്താദ് മുസ്തഫ മന്നാനി, പ്രിൻസിപ്പൽ"
  },
  {
    id: 3,
    title: "2025 Admission Orientation Program",
    titleMl: "2025 പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാം",
    date: "May 14, 2025",
    category: "event",
    image: "/lovable-uploads/e592db7a-4118-4bdb-b9c7-e7865e2017fe.png",
    excerpt: "DQAA held its admission orientation program for the 2025-26 academic year, introducing prospective students and parents to our programs.",
    excerptMl: "2025-26 അക്കാദമിക് വർഷത്തേക്കുള്ള പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാം DQAA നടത്തി, സാധ്യതയുള്ള വിദ്യാർത്ഥികളെയും രക്ഷിതാക്കളെയും ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ പരിചയപ്പെടുത്തി.",
    content: "On May 14th, Darul Quran Abdulla Academy hosted its Admission Orientation Program for the upcoming 2025-26 academic year. The event was attended by prospective students and their parents, who were introduced to our comprehensive educational programs, campus facilities, and admission procedures.\n\nThe program included presentations on our Hifz program, Bayanul Quran Diploma Course, and academic offerings. Administrative staff provided detailed information about the application process, important dates, and required documentation. Faculty members were available to answer questions and provide guidance to interested families.\n\nWe are pleased with the enthusiastic response to our admission orientation program and look forward to welcoming our new students in the upcoming academic year.",
    contentMl: "മേയ് 14-ന്, വരാനിരിക്കുന്ന 2025-26 അക്കാദമിക് വർഷത്തേക്കുള്ള പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാം ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി ആതിഥേയത്വം വഹിച്ചു. സാധ്യതയുള്ള വിദ്യാർത്ഥികളും അവരുടെ രക്ഷിതാക്കളും പങ്കെടുത്ത ഈ പരിപാടിയിൽ, ഞങ്ങളുടെ സമഗ്രമായ വിദ്യാഭ്യാസ പരിപാടികൾ, ക്യാമ്പസ് സൗകര്യങ്ങൾ, പ്രവേശന നടപടിക്രമങ്ങൾ എന്നിവ പരിചയപ്പെടുത്തി.\n\nപ്രോഗ്രാമിൽ ഞങ്ങളുടെ ഹിഫ്സ് പ്രോഗ്രാം, ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്സ്, അക്കാദമിക് ഓഫറിംഗുകൾ എന്നിവയെക്കുറിച്ചുള്ള അവതരണങ്ങൾ ഉൾപ്പെടുന്നു. അഡ്മിനിസ്ട്രേറ്റീവ് സ്റ്റാഫ് അപേക്ഷാ പ്രക്രിയ, പ്രധാനപ്പെട്ട തീയതികൾ, ആവശ്യമായ രേഖകൾ എന്നിവയെക്കുറിച്ച് വിശദമായ വിവരങ്ങൾ നൽകി. താൽപ്പര്യമുള്ള കുടുംബങ്ങൾക്ക് ചോദ്യങ്ങൾക്ക് ഉത്തരം നൽകാനും മാർഗനിർദ്ദേശം നൽകാനും ഫാക്കൽറ്റി അംഗങ്ങൾ ലഭ്യമായിരുന്നു.\n\nഞങ്ങളുടെ പ്രവേശന ഓറിയന്റേഷൻ പ്രോഗ്രാമിനുള്ള ആവേശകരമായ പ്രതികരണത്തിൽ ഞങ്ങൾ സന്തുഷ്ടരാണ്, വരാനിരിക്കുന്ന അക്കാദമിക് വർഷത്തിൽ ഞങ്ങളുടെ പുതിയ വിദ്യാർത്ഥികളെ സ്വാഗതം ചെയ്യാൻ ആകാംക്ഷയോടെ കാത്തിരിക്കുന്നു."
  },
  {
    id: 4,
    title: "Darul Quran Celebrates 10th Anniversary",
    titleMl: "ദാറുൽ ഖുർആൻ 10-ാം വാർഷികം ആഘോഷിക്കുന്നു",
    date: "April 10, 2025",
    category: "event",
    image: "/lovable-uploads/26f01633-775e-480a-b72c-f85de1f96e1a.png",
    excerpt: "Darul Quran Abdulla Academy celebrated its 10th anniversary with a grand ceremony attended by distinguished guests, alumni, and current students.",
    excerptMl: "പ്രമുഖ അതിഥികൾ, പൂർവ വിദ്യാർത്ഥികൾ, നിലവിലെ വിദ്യാർത്ഥികൾ എന്നിവർ പങ്കെടുത്ത ഗംഭീര ചടങ്ങോടെ ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി അതിന്റെ 10-ാം വാർഷികം ആഘോഷിച്ചു.",
    content: "Darul Quran Abdulla Academy marked a significant milestone, celebrating its 10th anniversary with a grand ceremony held at the academy campus. The event was graced by the presence of distinguished Islamic scholars, educational leaders, alumni, current students, and their families.\n\nThe celebration featured inspirational speeches, recognition of outstanding achievements, and cultural performances by students. A special documentary highlighting the journey of DQAA from its inception to its current status as a premier Islamic educational institution was screened during the event.\n\nThe Chairman, Dr. PT Abdul Rahman, expressed his gratitude to all who have contributed to the growth and success of the academy over the past decade. He also unveiled an ambitious vision for the future, emphasizing continued excellence in integrating traditional Islamic education with modern academic approaches.\n\nA commemorative anniversary brochure was released during the event, chronicling the academy's achievements and contributions to Islamic education in the region.",
    contentMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി അതിന്റെ 10-ാം വാർഷികം അക്കാദമി ക്യാമ്പസിൽ നടന്ന ഗംഭീര ചടങ്ങോടെ ഒരു പ്രധാന നാഴികക്കല്ല് അടയാളപ്പെടുത്തി. പ്രമുഖ ഇസ്ലാമിക പണ്ഡിതരുടെയും, വിദ്യാഭ്യാസ നേതാക്കളുടെയും, പൂർവ വിദ്യാർത്ഥികളുടെയും, നിലവിലെ വിദ്യാർത്ഥികളുടെയും അവരുടെ കുടുംബങ്ങളുടെയും സാന്നിധ്യം കൊണ്ട് ചടങ്ങ് അനുഗ്രഹീതമായി.\n\nആഘോഷത്തിൽ പ്രചോദനാത്മകമായ പ്രസംഗങ്ങൾ, സവിശേഷമായ നേട്ടങ്ങളുടെ അംഗീകാരം, വിദ്യാർത്ഥികളുടെ സാംസ്കാരിക പ്രകടനങ്ങൾ എന്നിവ ഉൾപ്പെട്ടിരുന്നു. DQAA-യുടെ ആരംഭം മുതൽ പ്രമുഖ ഇസ്ലാമിക വിദ്യാഭ്യാസ സ്ഥാപനമെന്ന നിലവിലെ സ്ഥാനം വരെയുള്ള യാത്ര ഹൈലൈറ്റ് ചെയ്യുന്ന ഒരു പ്രത്യേക ഡോക്യുമെന്ററി ചടങ്ങിനിടെ പ്രദർശിപ്പിച്ചു.\n\nചെയർമാൻ, ഡോ. പി.ടി അബ്ദുൽ റഹ്മാൻ, കഴിഞ്ഞ ദശകത്തിൽ അക്കാദമിയുടെ വളർച്ചയ്ക്കും വിജയത്തിനും സംഭാവന നൽകിയ എല്ലാവരോടും നന്ദി പ്രകടിപ്പിച്ചു. പരമ്പരാഗത ഇസ്ലാമിക വിദ്യാഭ്യാസവും ആധുനിക അക്കാദമിക സമീപനങ്ങളും സംയോജിപ്പിക്കുന്നതിൽ തുടർച്ചയായ മികവിന് ഊന്നൽ നൽകിക്കൊണ്ട് അദ്ദേഹം ഭാവിക്കായി ഒരു മഹത്തായ കാഴ്ചപ്പാട് അനാവരണം ചെയ്തു.\n\nചടങ്ങിനിടെ, പ്രദേശത്തെ ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിൽ അക്കാദമിയുടെ നേട്ടങ്ങളും സംഭാവനകളും രേഖപ്പെടുത്തുന്ന ഒരു സ്മരണീയമായ വാർഷിക ബ്രോഷർ പുറത്തിറക്കി."
  }
];

// Define event calendar data
const eventCalendar = [
  {
    id: 1,
    title: "Admission Applications Begin",
    titleMl: "പ്രവേശന അപേക്ഷകൾ ആരംഭിക്കുന്നു",
    date: "January 15, 2025"
  },
  {
    id: 2,
    title: "Entrance Examination",
    titleMl: "പ്രവേശന പരീക്ഷ",
    date: "April 15, 2025"
  },
  {
    id: 3,
    title: "Annual Day Celebration",
    titleMl: "വാർഷിക ദിനാഘോഷം",
    date: "May 20, 2025"
  },
  {
    id: 4,
    title: "New Academic Year Begins",
    titleMl: "പുതിയ അക്കാദമിക് വർഷം ആരംഭിക്കുന്നു",
    date: "June 1, 2025"
  },
  {
    id: 5,
    title: "Parents' Meeting",
    titleMl: "രക്ഷാകർതൃ യോഗം",
    date: "July 10, 2025"
  }
];

const NewsEventsPage = () => {
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  const selectedNews = newsAndEvents.find(item => item.id === selectedNewsId);

  return (
    <Layout>
      <Helmet>
        <title>News & Events | Darul Quran Abdulla Academy</title>
        <meta 
          name="description" 
          content="Stay updated with the latest happenings, announcements, and events at Darul Quran Abdulla Academy. View our news, calendar, and upcoming events."
        />
        <meta 
          name="keywords" 
          content="DQAA news, Islamic school events Kerala, Quran academy events, Islamic education updates, DQAA announcements, Darul Quran events"
        />
        <link rel="canonical" href="https://www.darulquranaa.com/news" />
        
        {/* Event Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Darul Quran Abdulla Academy",
              "url": "https://www.darulquranaa.com/",
              "logo": "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
              "event": [
                {
                  "@type": "EducationEvent",
                  "name": "Admission Orientation Program 2025",
                  "startDate": "2025-05-14T10:00:00+05:30",
                  "endDate": "2025-05-14T13:00:00+05:30",
                  "location": {
                    "@type": "Place",
                    "name": "Darul Quran Abdulla Academy Campus",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Darul Quran Campus, Kothakurssi",
                      "addressLocality": "Panamanna",
                      "postalCode": "679501",
                      "addressRegion": "Kerala",
                      "addressCountry": "IN"
                    }
                  },
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  },
                  "organizer": {
                    "@type": "Organization",
                    "name": "Darul Quran Abdulla Academy",
                    "url": "https://www.darulquranaa.com/"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <PageHeader 
        title={isMalayalam ? "വാർത്തകളും പരിപാടികളും" : "News & Events"} 
        subtitle={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ ഏറ്റവും പുതിയ സംഭവവികാസങ്ങളുമായി അപ്ഡേറ്റ് ചെയ്യുക" : 
          "Stay updated with the latest happenings at Darul Quran Abdulla Academy"}
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
        showApplyButton={true}
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="news">
                {isMalayalam ? "വാർത്തകൾ" : "News"}
              </TabsTrigger>
              <TabsTrigger value="events">
                {isMalayalam ? "പരിപാടികൾ" : "Events"}
              </TabsTrigger>
              <TabsTrigger value="calendar">
                {isMalayalam ? "കലണ്ടർ" : "Calendar"}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="news" className="animate-fade-in">
              {selectedNewsId === null ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsAndEvents.filter(item => item.category === 'announcement').map((news) => (
                    <Card key={news.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={isMalayalam ? news.titleMl : news.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{news.date}</span>
                        </div>
                        <CardTitle className="text-lg">{isMalayalam ? news.titleMl : news.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {isMalayalam ? news.excerptMl : news.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="outline" 
                          className="text-dqaa-500 border-dqaa-500 hover:bg-dqaa-50"
                          onClick={() => setSelectedNewsId(news.id)}
                        >
                          {isMalayalam ? "കൂടുതൽ വായിക്കുക" : "Read More"}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="mb-8">
                  <div className="h-64 md:h-96 overflow-hidden">
                    <img 
                      src={selectedNews?.image} 
                      alt={isMalayalam ? selectedNews?.titleMl : selectedNews?.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{selectedNews?.date}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-display">
                      {isMalayalam ? selectedNews?.titleMl : selectedNews?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-dqaa max-w-none">
                      {(isMalayalam ? selectedNews?.contentMl : selectedNews?.content)?.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedNewsId(null)}
                      className="text-dqaa-500"
                    >
                      {isMalayalam ? "എല്ലാ വാർത്തകളും കാണുക" : "View All News"}
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="events" className="animate-fade-in">
              {selectedNewsId === null ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsAndEvents.filter(item => item.category === 'event').map((event) => (
                    <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={isMalayalam ? event.titleMl : event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <CardTitle className="text-lg">{isMalayalam ? event.titleMl : event.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {isMalayalam ? event.excerptMl : event.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="outline" 
                          className="text-dqaa-500 border-dqaa-500 hover:bg-dqaa-50"
                          onClick={() => setSelectedNewsId(event.id)}
                        >
                          {isMalayalam ? "കൂടുതൽ വായിക്കുക" : "Read More"}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="mb-8">
                  <div className="h-64 md:h-96 overflow-hidden">
                    <img 
                      src={selectedNews?.image} 
                      alt={isMalayalam ? selectedNews?.titleMl : selectedNews?.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{selectedNews?.date}</span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-display">
                      {isMalayalam ? selectedNews?.titleMl : selectedNews?.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-dqaa max-w-none">
                      {(isMalayalam ? selectedNews?.contentMl : selectedNews?.content)?.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedNewsId(null)}
                      className="text-dqaa-500"
                    >
                      {isMalayalam ? "എല്ലാ പരിപാടികളും കാണുക" : "View All Events"}
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="calendar" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-display">
                    {isMalayalam ? "2025 പരിപാടി കലണ്ടർ" : "2025 Event Calendar"}
                  </CardTitle>
                  <CardDescription>
                    {isMalayalam ? "വരുന്ന പരിപാടികളെക്കുറിച്ച് അപ്‌ഡേറ്റ് ചെയ്തിരിക്കുന്നു" : "Stay updated about upcoming events"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {eventCalendar.map((event) => (
                      <div key={event.id} className="flex items-start p-3 border border-gray-100 rounded-md hover:bg-gray-50">
                        <div className="flex-shrink-0 w-16 h-16 bg-dqaa-50 flex flex-col items-center justify-center rounded-md mr-4">
                          <span className="text-sm text-gray-500">{event.date.split(' ')[0]}</span>
                          <span className="text-xl font-bold text-dqaa-500">{event.date.split(' ')[1].replace(',', '')}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {isMalayalam ? event.titleMl : event.title}
                          </h3>
                          <p className="text-sm text-gray-500">{event.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <FileText className="mr-2 h-5 w-5 text-dqaa-500" />
                      <CardTitle className="text-lg">
                        {isMalayalam ? "10-ാം വാർഷിക ബ്രോഷർ" : "10th Anniversary Brochure"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {isMalayalam ? 
                        "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുടെ 10-ാം വാർഷിക ബ്രോഷർ കാണുക." : 
                        "View Darul Quran Abdulla Academy's 10th Anniversary brochure."}
                    </p>
                    <div className="aspect-[4/3] bg-gray-100 rounded-md flex items-center justify-center">
                      <iframe 
                        src="https://issuu.com/dqaa/docs/darul_quran_abdulla_academy_10th_anniversary_cerem" 
                        width="100%" 
                        height="300" 
                        title="Darul Quran Abdulla Academy 10th Anniversary Brochure"
                        className="rounded-md"
                      />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center">
                      <Image className="mr-2 h-5 w-5 text-dqaa-500" />
                      <CardTitle className="text-lg">
                        {isMalayalam ? "ഫോട്ടോ ആൽബം" : "Photo Gallery"}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {isMalayalam ? 
                        "അക്കാദമിയിലെ പ്രധാന പരിപാടികളുടെ ചിത്രങ്ങൾ കാണുക." : 
                        "Browse photos from key events at the academy."}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-24 overflow-hidden rounded-md">
                        <img 
                          src="/lovable-uploads/26f01633-775e-480a-b72c-f85de1f96e1a.png" 
                          alt="Photo 1" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-24 overflow-hidden rounded-md">
                        <img 
                          src="/lovable-uploads/e592db7a-4118-4bdb-b9c7-e7865e2017fe.png" 
                          alt="Photo 2" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="h-24 overflow-hidden rounded-md">
                        <img 
                          src="/lovable-uploads/b0d00e17-fe67-4c2c-a8c7-40a656f9ba8b.png" 
                          alt="Photo 3" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <a 
                        href="https://photos.app.goo.gl/3Z2jXKmvjhRpNAhKA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-dqaa-500 hover:underline"
                      >
                        {isMalayalam ? "എല്ലാ ചിത്രങ്ങളും കാണുക" : "View Full Gallery"}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-dqaa-50 rounded-lg p-6">
              <h3 className="text-xl font-display font-bold text-dqaa-500 mb-4 text-center">
                {isMalayalam ? "ഞങ്ങളുടെ സമൂഹ മാധ്യമങ്ങൾ പിന്തുടരുക" : "Follow Our Social Media"}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {isMalayalam ? 
                  "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ ഏറ്റവും പുതിയ പരിപാടികൾ, അറിയിപ്പുകൾ, ഫോട്ടോകൾ എന്നിവ ലഭിക്കാൻ ഞങ്ങളുടെ സമൂഹ മാധ്യമ ചാനലുകൾ സബ്സ്ക്രൈബ് ചെയ്യുക." : 
                  "Subscribe to our social media channels to receive the latest events, announcements, and photos from Darul Quran Abdulla Academy."}
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.facebook.com/darulquranindia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a 
                  href="https://instagram.com/darulquranindia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsEventsPage;
