
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, MessageSquare, CreditCard, BookOpen, Users, Bell, Download, Phone } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

const ParentsCornerPage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const quickLinks = [
    {
      title: isMalayalam ? "അക്കാദമിക് പുരോഗതി" : "Academic Progress",
      description: isMalayalam ? "നിങ്ങളുടെ കുട്ടിയുടെ പഠന നിലവാരം കാണുക" : "View your child's academic performance",
      icon: BookOpen,
      color: "bg-blue-500",
      action: isMalayalam ? "കാണുക" : "View Progress"
    },
    {
      title: isMalayalam ? "ഫീസ് പേയ്മെന്റ്" : "Fee Payment",
      description: isMalayalam ? "ഓൺലൈനായി ഫീസ് അടയ്ക്കുക" : "Pay fees online securely",
      icon: CreditCard,
      color: "bg-green-500",
      action: isMalayalam ? "അടയ്ക്കുക" : "Pay Now"
    },
    {
      title: isMalayalam ? "ടീച്ചർ കമ്മ്യൂണിക്കേഷൻ" : "Teacher Communication",
      description: isMalayalam ? "അധ്യാപകരുമായി നേരിട്ട് സംവദിക്കുക" : "Communicate directly with teachers",
      icon: MessageSquare,
      color: "bg-purple-500",
      action: isMalayalam ? "സന്ദേശം" : "Message"
    },
    {
      title: isMalayalam ? "ഇവന്റ് കലണ്ടർ" : "Event Calendar",
      description: isMalayalam ? "സ്കൂൾ പരിപാടികൾ കാണുക" : "View upcoming school events",
      icon: CalendarIcon,
      color: "bg-orange-500",
      action: isMalayalam ? "കലണ്ടർ" : "View Calendar"
    }
  ];

  const resources = [
    {
      title: isMalayalam ? "രക്ഷിതാക്കളുടെ കൈപ്പുസ്തകം" : "Parent Handbook",
      description: isMalayalam ? "സ്കൂൾ നയങ്ങളും നിയമങ്ങളും" : "School policies and guidelines",
      type: "PDF"
    },
    {
      title: isMalayalam ? "വാർഷിക കലണ്ടർ" : "Academic Calendar",
      description: isMalayalam ? "2024-25 അക്കാദമിക വർഷത്തിന്റെ കലണ്ടർ" : "2024-25 Academic year calendar",
      type: "PDF"
    },
    {
      title: isMalayalam ? "ഹോം സ്റ്റഡി ഗൈഡ്" : "Home Study Guide",
      description: isMalayalam ? "വീട്ടിൽ പഠനത്തിനുള്ള മാർഗനിർദേശങ്ങൾ" : "Guidelines for effective home study",
      type: "PDF"
    },
    {
      title: isMalayalam ? "പോഷകാഹാര ഗൈഡ്" : "Nutrition Guide",
      description: isMalayalam ? "കുട്ടികൾക്കുള്ള ആരോഗ്യകരമായ ഭക്ഷണം" : "Healthy meal plans for children",
      type: "PDF"
    }
  ];

  const workshops = [
    {
      title: isMalayalam ? "ഇസ്ലാമിക് പാരന്റിംഗ്" : "Islamic Parenting Workshop",
      date: "2024-12-15",
      time: "10:00 AM - 12:00 PM",
      speaker: "Dr. Ahmad Hassan"
    },
    {
      title: isMalayalam ? "ഡിജിറ്റൽ സേഫ്റ്റി" : "Digital Safety for Children",
      date: "2024-12-22",
      time: "2:00 PM - 4:00 PM",
      speaker: "Ms. Fatima Ali"
    },
    {
      title: isMalayalam ? "അക്കാദമിക് സപ്പോർട്ട്" : "Academic Support Strategies",
      date: "2024-12-29",
      time: "10:00 AM - 11:30 AM",
      speaker: "Prof. Abdullah Rahman"
    }
  ];

  const announcements = [
    {
      title: isMalayalam ? "ശീതകാല അവധി അറിയിപ്പ്" : "Winter Break Notice",
      date: "2024-12-01",
      priority: "high",
      content: isMalayalam ? 
        "ഡിസംബർ 20 മുതൽ ജനുവരി 5 വരെ ശീതകാല അവധി" :
        "Winter break from December 20 to January 5"
    },
    {
      title: isMalayalam ? "മാതാപിതാക്കളുടെ യോഗം" : "Parent-Teacher Meeting",
      date: "2024-11-28",
      priority: "medium",
      content: isMalayalam ? 
        "ഡിസംബർ 10ന് സായാഹ്നം 4 മണിക്ക് മാതാപിതാക്കളുടെ യോഗം" :
        "Parent-teacher meeting on December 10 at 4:00 PM"
    },
    {
      title: isMalayalam ? "ഫീസ് അടയ്ക്കാനുള്ള അവസാന തീയതി" : "Fee Payment Deadline",
      date: "2024-11-25",
      priority: "high",
      content: isMalayalam ? 
        "ഡിസംബർ 15നകം ഫീസ് അടയ്ക്കേണ്ടതാണ്" :
        "Fee payment deadline is December 15"
    }
  ];

  return (
    <Layout>
      <PageHeader 
        title={isMalayalam ? "രക്ഷിതാക്കളുടെ കോർണർ" : "Parents' Corner"} 
        subtitle={isMalayalam ? "DQAA വിദ്യാർത്ഥികളുടെ രക്ഷിതാക്കൾക്കുള്ള വിഭവങ്ങളും വിവരങ്ങളും" : "Resources and information for parents of DQAA students"}
        backgroundImage="https://images.unsplash.com/photo-1491013516836-7db643ee125a"
      />
      
      {/* Quick Access Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "ദ്രുത പ്രവേശനം" : "Quick Access"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isMalayalam ? 
                "നിങ്ങൾക്ക് ആവശ്യമായ സേവനങ്ങൾ എളുപ്പത്തിൽ ആക്സസ് ചെയ്യുക" :
                "Easily access the services you need most"
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <link.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                  <Button size="sm" className="w-full">
                    {link.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="announcements" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="announcements">
                {isMalayalam ? "അറിയിപ്പുകൾ" : "Announcements"}
              </TabsTrigger>
              <TabsTrigger value="resources">
                {isMalayalam ? "വിഭവങ്ങൾ" : "Resources"}
              </TabsTrigger>
              <TabsTrigger value="workshops">
                {isMalayalam ? "വർക്ക്ഷോപ്പുകൾ" : "Workshops"}
              </TabsTrigger>
              <TabsTrigger value="guidelines">
                {isMalayalam ? "മാർഗനിർദേശങ്ങൾ" : "Guidelines"}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="announcements" className="space-y-4">
              <div className="grid gap-4">
                {announcements.map((announcement, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg">{announcement.title}</h3>
                            <Badge variant={announcement.priority === 'high' ? 'destructive' : 'secondary'}>
                              {announcement.priority === 'high' ? (isMalayalam ? 'അടിയന്തിരം' : 'Urgent') : (isMalayalam ? 'സാധാരണ' : 'Normal')}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{announcement.content}</p>
                          <p className="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString()}</p>
                        </div>
                        <Bell className="h-5 w-5 text-orange-500" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                          <p className="text-gray-600 mb-4">{resource.description}</p>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          {isMalayalam ? "ഡൗൺലോഡ്" : "Download"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops" className="space-y-4">
              <div className="grid gap-4">
                {workshops.map((workshop, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg mb-2">{workshop.title}</h3>
                          <p className="text-gray-600 mb-1">
                            <CalendarIcon className="h-4 w-4 inline mr-2" />
                            {new Date(workshop.date).toLocaleDateString()} • {workshop.time}
                          </p>
                          <p className="text-sm text-gray-500">
                            {isMalayalam ? "സ്പീക്കർ:" : "Speaker:"} {workshop.speaker}
                          </p>
                        </div>
                        <Button>
                          {isMalayalam ? "രജിസ്റ്റർ ചെയ്യുക" : "Register"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guidelines" className="space-y-4">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{isMalayalam ? "സ്കൂൾ നയങ്ങൾ" : "School Policies"}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">{isMalayalam ? "ഹാജർ നയം" : "Attendance Policy"}</h4>
                      <p className="text-gray-600 text-sm">
                        {isMalayalam ? 
                          "95% ഹാജർ നിർബന്ധമാണ്. മൂന്ന് തുടർച്ചയായുള്ള അവധിക്ക് മെഡിക്കൽ സർട്ടിഫിക്കറ്റ് ആവശ്യമാണ്." :
                          "95% attendance is mandatory. Medical certificate required for three consecutive days of absence."
                        }
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{isMalayalam ? "യൂണിഫോം നയം" : "Uniform Policy"}</h4>
                      <p className="text-gray-600 text-sm">
                        {isMalayalam ? 
                          "എല്ലാ വിദ്യാർത്ഥികളും നിയത യൂണിഫോം ധരിക്കണം. വെള്ളിയാഴ്ച കാഷ്വൽ ഡ്രസ് അനുവദനീയമാണ്." :
                          "All students must wear prescribed uniform. Casual dress is allowed on Fridays."
                        }
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{isMalayalam ? "അച്ചടക്ക നയം" : "Discipline Policy"}</h4>
                      <p className="text-gray-600 text-sm">
                        {isMalayalam ? 
                          "ഇസ്ലാമിക മൂല്യങ്ങൾക്ക് വിരുദ്ധമായ പെരുമാറ്റം സഹിക്കില്ല. മാതാപിതാക്കളെ അറിയിച്ചുകൊണ്ട് നടപടി സ്വീകരിക്കും." :
                          "Behavior contrary to Islamic values is not tolerated. Actions will be taken with parental notification."
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{isMalayalam ? "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ" : "Contact Information"}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">{isMalayalam ? "പ്രിൻസിപ്പൽ" : "Principal"}</h4>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          +91 94476 12345
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{isMalayalam ? "അഡ്മിഷൻ ഓഫീസ്" : "Admission Office"}</h4>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          +91 94476 67890
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{isMalayalam ? "അക്കൗണ്ട്സ് ഓഫീസ്" : "Accounts Office"}</h4>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          +91 94476 11111
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{isMalayalam ? "ഹോസ്റ്റൽ വാർഡൻ" : "Hostel Warden"}</h4>
                        <p className="text-sm text-gray-600 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          +91 94476 22222
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-red-100 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-800 mb-2">
              {isMalayalam ? "അടിയന്തിര ബന്ധപ്പെടൽ" : "Emergency Contact"}
            </h3>
            <p className="text-red-700 mb-4">
              {isMalayalam ? 
                "അടിയന്തിര സാഹചര്യങ്ങളിൽ 24/7 ബന്ധപ്പെടാം" :
                "Available 24/7 for emergency situations"
              }
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Phone className="h-5 w-5 text-red-600" />
              <span className="text-xl font-bold text-red-800">+91 94476 99999</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParentsCornerPage;
