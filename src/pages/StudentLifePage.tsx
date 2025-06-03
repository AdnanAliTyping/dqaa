
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Trophy, BookOpen, Heart, Calendar, Camera, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const StudentLifePage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const dailySchedule = [
    { time: "05:00 AM", activity: isMalayalam ? "ഫജ്ർ നമാസ്" : "Fajr Prayer", icon: Clock },
    { time: "06:00 AM", activity: isMalayalam ? "ഖുർആൻ പഠനം" : "Quran Study", icon: BookOpen },
    { time: "08:00 AM", activity: isMalayalam ? "പ്രഭാതഭക്ഷണം" : "Breakfast", icon: Heart },
    { time: "09:00 AM", activity: isMalayalam ? "ക്ലാസുകൾ ആരംഭം" : "Classes Begin", icon: BookOpen },
    { time: "12:30 PM", activity: isMalayalam ? "സുഹർ നമാസ്" : "Dhuhr Prayer", icon: Clock },
    { time: "01:00 PM", activity: isMalayalam ? "ഉച്ചഭക്ഷണം" : "Lunch Break", icon: Heart },
    { time: "02:00 PM", activity: isMalayalam ? "ഉച്ചകാല ക്ലാസുകൾ" : "Afternoon Classes", icon: BookOpen },
    { time: "04:00 PM", activity: isMalayalam ? "അസർ നമാസ്" : "Asr Prayer", icon: Clock },
    { time: "04:30 PM", activity: isMalayalam ? "കായികപ്രവർത്തനങ്ങൾ" : "Sports & Activities", icon: Trophy },
    { time: "06:30 PM", activity: isMalayalam ? "മഗ്രിബ് നമാസ്" : "Maghrib Prayer", icon: Clock },
    { time: "07:00 PM", activity: isMalayalam ? "സായാഹ്നഭക്ഷണം" : "Dinner", icon: Heart },
    { time: "08:00 PM", activity: isMalayalam ? "പഠന സമയം" : "Study Time", icon: BookOpen },
    { time: "09:00 PM", activity: isMalayalam ? "ഇശാ നമാസ്" : "Isha Prayer", icon: Clock },
  ];

  const activities = [
    {
      title: isMalayalam ? "കായികപ്രവർത്തനങ്ങൾ" : "Sports & Fitness",
      description: isMalayalam ? "ഫുട്ബോൾ, ക്രിക്കറ്റ്, ബാഡ്മിന്റൺ, ടേബിൾ ടെന്നിസ്" : "Football, Cricket, Badminton, Table Tennis",
      icon: Trophy,
      color: "bg-blue-500"
    },
    {
      title: isMalayalam ? "സാംസ്കാരിക പ്രവർത്തനങ്ങൾ" : "Cultural Activities",
      description: isMalayalam ? "നാട്യം, സംഗീതം, കലാ മത്സരങ്ങൾ" : "Drama, Music, Art Competitions",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: isMalayalam ? "ഇസ്ലാമിക് പ്രോഗ്രാമുകൾ" : "Islamic Programs",
      description: isMalayalam ? "മൗലിദ്, മിലാദ്, ഇസ്ലാമിക് ക്വിസ്" : "Maulid, Milad, Islamic Quiz",
      icon: BookOpen,
      color: "bg-green-500"
    },
    {
      title: isMalayalam ? "സാമൂഹിക സേവനം" : "Community Service",
      description: isMalayalam ? "സാക്ഷരതാ പരിപാടികൾ, പരിസ്ഥിതി സംരക്ഷണം" : "Literacy Programs, Environmental Conservation",
      icon: Heart,
      color: "bg-red-500"
    }
  ];

  const clubs = [
    { name: isMalayalam ? "ലിറ്റററി ക്ലബ്" : "Literary Club", members: "45+" },
    { name: isMalayalam ? "സയൻസ് ക്ലബ്" : "Science Club", members: "38+" },
    { name: isMalayalam ? "ഡിബേറ്റിംഗ് സൊസൈറ്റി" : "Debating Society", members: "32+" },
    { name: isMalayalam ? "ഇസ്ലാമിക് സ്റ്റഡീസ് ഗ്രൂപ്" : "Islamic Studies Group", members: "60+" },
    { name: isMalayalam ? "ആർട്ട് & ക്രാഫ്റ്റ്സ്" : "Art & Crafts", members: "28+" },
    { name: isMalayalam ? "കമ്പ്യൂട്ടർ ക്ലബ്" : "Computer Club", members: "42+" }
  ];

  return (
    <Layout>
      <PageHeader 
        title={isMalayalam ? "വിദ്യാർത്ഥി ജീവിതം" : "Student Life"} 
        subtitle={isMalayalam ? "DQAA യിലെ ജീവന്ത വിദ്യാഭ്യാസ അനുഭവം" : "Experience the vibrant educational journey at DQAA"}
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7"
      />
      
      {/* Daily Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "ദിനചര്യ" : "Daily Schedule"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "ഞങ്ങളുടെ വിദ്യാർത്ഥികളുടെ ദിവസം ഇസ്ലാമിക മൂല്യങ്ങളും അക്കാദമിക മികവും സന്തുലിതമാക്കുന്നു" :
                "Our students' day perfectly balances Islamic values with academic excellence"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dailySchedule.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-dqaa-100 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-dqaa-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-dqaa-700">{item.time}</div>
                      <div className="text-sm text-gray-600">{item.activity}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "വിദ്യാർത്ഥി പ്രവർത്തനങ്ങൾ" : "Student Activities"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "വിവിധതരം പ്രവർത്തനങ്ങളിലൂടെ വിദ്യാർത്ഥികളുടെ വ്യക്തിത്വ വികസനം" :
                "Comprehensive personality development through diverse activities"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "ക്ലബുകളും സംഘടനകളും" : "Clubs & Societies"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "വിദ്യാർത്ഥികളുടെ കഴിവുകൾ വികസിപ്പിക്കുന്ന വിവിധ ക്ലബുകൾ" :
                "Various clubs fostering student talents and interests"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{club.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {club.members} {isMalayalam ? "അംഗങ്ങൾ" : "Members"}
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    {isMalayalam ? "ചേരുക" : "Join Club"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "കാമ്പസ് സൗകര്യങ്ങൾ" : "Campus Facilities"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570" 
                alt="Library" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  {isMalayalam ? "ലൈബ്രറി" : "Library"}
                </h3>
                <p className="text-gray-600">
                  {isMalayalam ? 
                    "10,000+ പുസ്തകങ്ങളുള്ള ആധുനിക ലൈബ്രറി" :
                    "Modern library with 10,000+ books and digital resources"
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" 
                alt="Sports" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  {isMalayalam ? "കായികരംഗം" : "Sports Complex"}
                </h3>
                <p className="text-gray-600">
                  {isMalayalam ? 
                    "ഫുട്ബോൾ, ക്രിക്കറ്റ്, ബാഡ്മിന്റൺ കോർട്ടുകൾ" :
                    "Football field, cricket ground, and badminton courts"
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585" 
                alt="Dormitory" 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">
                  {isMalayalam ? "ഹോസ്റ്റൽ" : "Dormitory"}
                </h3>
                <p className="text-gray-600">
                  {isMalayalam ? 
                    "സുരക്ഷിതവും സൗകര്യപ്രദവുമായ താമസസ്ഥലം" :
                    "Safe and comfortable accommodation facilities"
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dqaa-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isMalayalam ? "DQAA കുടുംബത്തിൽ ചേരുക" : "Join the DQAA Family"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {isMalayalam ? 
              "ഇസ്ലാമിക മൂല്യങ്ങളും ആധുനിക വിദ്യാഭ്യാസവും സമന്വയിപ്പിച്ച് നിങ്ങളുടെ ഭാവി കെട്ടിപ്പടുക്കുക" :
              "Build your future with Islamic values and modern education"
            }
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-dqaa-500 hover:bg-gray-100">
            {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLifePage;
