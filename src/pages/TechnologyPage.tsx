
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Cpu, 
  Monitor, 
  Wifi, 
  Smartphone, 
  BookOpen, 
  Brain, 
  Code, 
  Database,
  Shield,
  Users,
  Zap,
  Globe
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const TechnologyPage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const aiFeatures = [
    {
      title: isMalayalam ? "AI അസിസ്റ്റഡ് ലേണിംഗ്" : "AI Assisted Learning",
      description: isMalayalam ? "വ്യക്തിഗതമാക്കിയ പഠന അനുഭവം" : "Personalized learning experiences",
      icon: Brain,
      progress: 85
    },
    {
      title: isMalayalam ? "സ്മാർട് അസസ്മെന്റ്" : "Smart Assessment",
      description: isMalayalam ? "AI അടിസ്ഥാന മൂല്യനിർണയം" : "AI-powered evaluation system",
      icon: Monitor,
      progress: 78
    },
    {
      title: isMalayalam ? "ഇന്റലിജന്റ് ട്യൂട്ടറിംഗ്" : "Intelligent Tutoring",
      description: isMalayalam ? "24/7 AI ട്യൂട്ടർ സപ്പോർട്ട്" : "24/7 AI tutor support",
      icon: Users,
      progress: 72
    },
    {
      title: isMalayalam ? "പ്രിഡിക്റ്റീവ് അനാലിറ്റിക്സ്" : "Predictive Analytics",
      description: isMalayalam ? "വിദ്യാർത്ഥി പ്രകടന പ്രവചനം" : "Student performance prediction",
      icon: Database,
      progress: 68
    }
  ];

  const infrastructure = [
    {
      title: isMalayalam ? "സ്മാർട് ക്ലാസ്റൂമുകൾ" : "Smart Classrooms",
      count: "25+",
      description: isMalayalam ? "ഇന്ററാക്ടീവ് ബോർഡുകളും പ്രൊജക്ടറുകളും" : "Interactive boards and projectors",
      icon: Monitor
    },
    {
      title: isMalayalam ? "കമ്പ്യൂട്ടർ ലാബ്" : "Computer Labs",
      count: "3",
      description: isMalayalam ? "ഏറ്റവും പുതിയ സിസ്റ്റങ്ങളുള്ള ലാബുകൾ" : "Labs with latest systems",
      icon: Cpu
    },
    {
      title: isMalayalam ? "ഹൈ-സ്പീഡ് ഇന്റർനെറ്റ്" : "High-Speed Internet",
      count: "1 Gbps",
      description: isMalayalam ? "ക്യാമ്പസ് മുഴുവൻ WiFi കവറേജ്" : "Campus-wide WiFi coverage",
      icon: Wifi
    },
    {
      title: isMalayalam ? "മൊബൈൽ ലേണിംഗ്" : "Mobile Learning",
      count: "24/7",
      description: isMalayalam ? "മൊബൈൽ ആപ്പ് വഴി പഠനം" : "Learning through mobile app",
      icon: Smartphone
    }
  ];

  const curriculum = [
    {
      grade: isMalayalam ? "ക്ലാസ് 1-5" : "Grades 1-5",
      topics: [
        isMalayalam ? "അടിസ്ഥാന കമ്പ്യൂട്ടർ സാക്ഷരത" : "Basic Computer Literacy",
        isMalayalam ? "ഡിജിറ്റൽ സേഫ്റ്റി" : "Digital Safety",
        isMalayalam ? "ടൈപ്പിംഗ് & മൗസ് സ്കിൽസ്" : "Typing & Mouse Skills"
      ]
    },
    {
      grade: isMalayalam ? "ക്ലാസ് 6-8" : "Grades 6-8",
      topics: [
        isMalayalam ? "പ്രോഗ്രാമിംഗ് അടിസ്ഥാനങ്ങൾ" : "Programming Fundamentals",
        isMalayalam ? "വെബ് ഡിസൈൻ" : "Web Design",
        isMalayalam ? "AI & മെഷീൻ ലേണിംഗ് ആമുഖം" : "AI & Machine Learning Intro"
      ]
    },
    {
      grade: isMalayalam ? "ക്ലാസ് 9-12" : "Grades 9-12",
      topics: [
        isMalayalam ? "അഡ്വാൻസ്ഡ് പ്രോഗ്രാമിംഗ്" : "Advanced Programming",
        isMalayalam ? "റോബോട്ടിക്സ്" : "Robotics",
        isMalayalam ? "AI പ്രൊജക്ട് ഡെവലപ്മെന്റ്" : "AI Project Development"
      ]
    }
  ];

  const partnerships = [
    {
      name: "AI8TY Technologies",
      role: isMalayalam ? "ഡിജിറ്റൽ ട്രാൻസ്ഫോർമേഷൻ പാർട്ട്നർ" : "Digital Transformation Partner",
      description: isMalayalam ? 
        "LMS വികസനവും AI സംവിധാനങ്ങളും" :
        "LMS development and AI systems"
    },
    {
      name: "Microsoft Education",
      role: isMalayalam ? "ക്ലൗഡ് സർവീസ് പ്രൊവൈഡർ" : "Cloud Services Provider",
      description: isMalayalam ? 
        "Office 365 വിദ്യാഭ്യാസ സേവനങ്ങൾ" :
        "Office 365 Education services"
    },
    {
      name: "Google for Education",
      role: isMalayalam ? "ഡിജിറ്റൽ ടൂൾസ് പാർട്ട്നർ" : "Digital Tools Partner",
      description: isMalayalam ? 
        "Google Classroom & ഡ്രൈവ് സേവനങ്ങൾ" :
        "Google Classroom & Drive services"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title={isMalayalam ? "സാങ്കേതികവിദ്യയും നവീകരണവും" : "Technology & Innovation"} 
        subtitle={isMalayalam ? "ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിൽ ആധുനിക സാങ്കേതികവിദ്യയുടെ സംയോജനം" : "Integrating modern technology with Islamic education"}
        backgroundImage="https://images.unsplash.com/photo-1535378917042-10a22c95931a"
      />
      
      {/* AI Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "AI പവേഡ് ലേണിംഗ്" : "AI-Powered Learning"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isMalayalam ? 
                "കൃത്രിമബുദ്ധി സാങ്കേതികവിദ്യ ഉപയോഗിച്ച് വിദ്യാർത്ഥികൾക്ക് വ്യക്തിഗതമാക്കിയ പഠന അനുഭവം നൽകുന്നു" :
                "Utilizing artificial intelligence to provide personalized learning experiences for every student"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-dqaa-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-dqaa-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    <Progress value={feature.progress} className="h-2" />
                    <span className="text-sm text-gray-500">{feature.progress}% {isMalayalam ? "പൂർത്തിയായി" : "Complete"}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "ഡിജിറ്റൽ ഇൻഫ്രാസ്ട്രക്ചർ" : "Digital Infrastructure"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "അത്യാധുനിക സാങ്കേതിക സൗകര്യങ്ങൾ" :
                "State-of-the-art technological facilities"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.count}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "സാങ്കേതിക പാഠ്യപദ്ധതി" : "Technology Curriculum"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "പ്രായോചിതമായ സാങ്കേതിക വിദ്യാഭ്യാസം" :
                "Age-appropriate technology education"
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {curriculum.map((level, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-center">
                    <Badge variant="secondary" className="text-lg py-2 px-4">
                      {level.grade}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center">
                        <Code className="h-4 w-4 text-dqaa-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Management System */}
      <section className="py-16 bg-gradient-to-r from-dqaa-500 to-dqaa-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              {isMalayalam ? "ലേണിംഗ് മാനേജ്മെന്റ് സിസ്റ്റം" : "Learning Management System"}
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {isMalayalam ? 
                "AI8TY Technologies സഹകരണത്തോടെ വികസിപ്പിച്ച അത്യാധുനിക LMS" :
                "Advanced LMS developed in partnership with AI8TY Technologies"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-gold-400" />
              <h3 className="font-bold text-xl mb-2">
                {isMalayalam ? "സുരക്ഷിത ആക്സസ്" : "Secure Access"}
              </h3>
              <p className="opacity-90">
                {isMalayalam ? 
                  "വിദ്യാർത്ഥികൾക്കും രക്ഷിതാക്കൾക്കും സുരക്ഷിത പോർട്ടൽ" :
                  "Secure portal for students and parents"
                }
              </p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-gold-400" />
              <h3 className="font-bold text-xl mb-2">
                {isMalayalam ? "തത്സമയ അപ്ഡേറ്റുകൾ" : "Real-time Updates"}
              </h3>
              <p className="opacity-90">
                {isMalayalam ? 
                  "അക്കാദമിക പുരോഗതിയുടെ തത്സമയ റിപ്പോർട്ടുകൾ" :
                  "Live academic progress reports"
                }
              </p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-gold-400" />
              <h3 className="font-bold text-xl mb-2">
                {isMalayalam ? "ആഗോള ആക്സസ്" : "Global Access"}
              </h3>
              <p className="opacity-90">
                {isMalayalam ? 
                  "എവിടെ നിന്നും ആക്സസ് ചെയ്യാവുന്ന പ്ലാറ്റ്ഫോം" :
                  "Access from anywhere, anytime"
                }
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="secondary" className="bg-white text-dqaa-500 hover:bg-gray-100">
              {isMalayalam ? "LMS ആക്സസ് ചെയ്യുക" : "Access LMS Portal"}
            </Button>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "സാങ്കേതിക പങ്കാളിത്തം" : "Technology Partnerships"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "മുൻനിര സാങ്കേതിക കമ്പനികളുമായുള്ള സഹകരണം" :
                "Collaborating with leading technology companies"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-dqaa-600">{partner.name}</h3>
                  <Badge variant="outline" className="mb-4">{partner.role}</Badge>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-dqaa-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6">
              {isMalayalam ? "ഭാവി ദർശനം" : "Future Vision"}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {isMalayalam ? 
                "2030 ആകുമ്പോഴേക്കും DQAA കേരളത്തിലെ ഏറ്റവും നൂതനമായ സാങ്കേതിക വിദ്യാഭ്യാസ സ്ഥാപനമായി മാറാൻ ലക്ഷ്യമിടുന്നു. വർച്വൽ റിയാലിറ്റി, ബ്ലോക്ക്ചെയിൻ, ക്വാണ്ടം കമ്പ്യൂട്ടിംഗ് എന്നിവയിൽ പയനീയറിംഗ് റിസർച്ച് നടത്താൻ പദ്ധതിയിടുന്നു." :
                "By 2030, DQAA aims to become Kerala's most innovative technology-enabled educational institution. We plan to pioneer research in Virtual Reality, Blockchain, and Quantum Computing while maintaining our Islamic educational values."
              }
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-dqaa-600">
                  {isMalayalam ? "വർച്വൽ റിയാലിറ്റി" : "Virtual Reality"}
                </h4>
                <p className="text-sm text-gray-600">
                  {isMalayalam ? 
                    "ഇമ്മേഴ്സീവ് ലേണിംഗ് എക്സ്പീരിയൻസുകൾ" :
                    "Immersive learning experiences"
                  }
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-dqaa-600">
                  {isMalayalam ? "ബ്ലോക്ക്ചെയിൻ" : "Blockchain"}
                </h4>
                <p className="text-sm text-gray-600">
                  {isMalayalam ? 
                    "സർട്ടിഫിക്കറ്റ് വെരിഫിക്കേഷൻ സിസ്റ്റം" :
                    "Secure certificate verification"
                  }
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-dqaa-600">
                  {isMalayalam ? "IoT ക്യാമ്പസ്" : "IoT Campus"}
                </h4>
                <p className="text-sm text-gray-600">
                  {isMalayalam ? 
                    "സ്മാർട് ക്യാമ്പസ് ഇൻഫ്രാസ്ട്രക്ചർ" :
                    "Smart campus infrastructure"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologyPage;
