
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, GraduationCap, Languages, Award, FileText, Check, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

const AcademicProgramsPage = () => {
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  return (
    <Layout>
      <Helmet>
        <title>Academic Programs | Darul Quran Abdulla Academy</title>
        <meta 
          name="description" 
          content="Explore our comprehensive curriculum at DQAA that combines Islamic knowledge with modern education. From Hifz programs to diploma courses." 
        />
        <meta 
          name="keywords" 
          content="Best Hifz-ul-Quran College in Kerala, Quran memorization college India, Islamic School Ottapalam, DQAA academic programs" 
        />
        <link rel="canonical" href="https://www.darulquranaa.com/academic-programs" />
        
        {/* Educational Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Darul Quran Abdulla Academy",
              "description": "Premier Islamic academy offering comprehensive Quranic memorization and academic programs.",
              "url": "https://www.darulquranaa.com/",
              "logo": "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Darul Quran Campus, Kothakurssi",
                "addressLocality": "Panamanna",
                "postalCode": "679501",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Academic Programs",
                "itemListElement": [
                  {
                    "@type": "Course",
                    "name": "Thahfeezul Qur'an Program",
                    "description": "Combines Quranic memorization with regular academic education",
                    "provider": {
                      "@type": "Organization",
                      "name": "Darul Quran Abdulla Academy"
                    }
                  },
                  {
                    "@type": "Course",
                    "name": "Bayanul Qur'an Diploma Course",
                    "description": "Two-year Islamic studies diploma with modern academic subjects",
                    "provider": {
                      "@type": "Organization",
                      "name": "Darul Quran Abdulla Academy"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      
      <PageHeader 
        title={isMalayalam ? "അക്കാദമിക് പ്രോഗ്രാമുകൾ" : "Academic Programs"} 
        subtitle={isMalayalam ? 
          "ഇസ്ലാമിക വിജ്ഞാനവും ആധുനിക വിദ്യാഭ്യാസവും സംയോജിപ്പിക്കുന്ന ഞങ്ങളുടെ സമഗ്രമായ പാഠ്യപദ്ധതി കണ്ടെത്തുക" : 
          "Explore our comprehensive curriculum that combines Islamic knowledge with modern education"}
        backgroundImage="https://images.unsplash.com/photo-1577896851231-70ef18881754"
        showApplyButton={true}
      />
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block mb-4">
              <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
              {isMalayalam ? "ഞങ്ങളുടെ അക്കാദമിക് പ്രോഗ്രാമുകൾ" : "Our Academic Programs"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {isMalayalam ? 
                "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി പരമ്പരാഗത ഇസ്ലാമിക വിദ്യാഭ്യാസം ആധുനിക അക്കാദമിക പാഠ്യപദ്ധതിയുമായി സംയോജിപ്പിക്കുന്ന സമഗ്രമായ വിദ്യാഭ്യാസ പ്രോഗ്രാമുകൾ വാഗ്ദാനം ചെയ്യുന്നു." : 
                "Darul Quran Abdulla Academy offers comprehensive educational programs that integrate traditional Islamic education with modern academic curriculum."}
            </p>
          </div>
          
          <Tabs defaultValue="hifz" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="hifz">
                {isMalayalam ? "ഹിഫ്സ് പ്രോഗ്രാം" : "Hifz Program"}
              </TabsTrigger>
              <TabsTrigger value="bayanul">
                {isMalayalam ? "ബയാനുൽ ഖുർആൻ" : "Bayanul Quran"}
              </TabsTrigger>
              <TabsTrigger value="academic">
                {isMalayalam ? "അക്കാദമിക് വിഷയങ്ങൾ" : "Academic Subjects"}
              </TabsTrigger>
              <TabsTrigger value="additional">
                {isMalayalam ? "കൂടുതൽ കോഴ്സുകൾ" : "Additional Courses"}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="hifz" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-dqaa-50 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-dqaa-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-dqaa-500">
                        {isMalayalam ? "തഹ്ഫീളുൽ ഖുർആൻ പ്രോഗ്രാം" : "Thahfeezul Qur'an Program"}
                      </CardTitle>
                      <CardDescription>
                        {isMalayalam ? "ഖുർആൻ മനഃപാഠമാക്കുന്നതും സാധാരണ അക്കാദമിക വിദ്യാഭ്യാസവും സംയോജിപ്പിക്കുന്നു" : "Integration of Qur'an memorization with regular academic education"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "പ്രോഗ്രാം അവലോകനം" : "Program Overview"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam ? 
                          "തഹ്ഫീളുൽ ഖുർആൻ പ്രോഗ്രാം ഖുർആൻ മുഴുവനായും മനപ്പാഠമാക്കാനും അതേസമയം SSLC വരെയുള്ള സാധാരണ അക്കാദമിക വിദ്യാഭ്യാസം തുടരാനും വിദ്യാർത്ഥികളെ പ്രാപ്തരാക്കുന്നു. ഈ സമഗ്രമായ പ്രോഗ്രാം വിദ്യാർത്ഥികളെ ആത്മീയ നേതാക്കളും അക്കാദമിക മികവുറ്റവരുമാക്കി വളർത്തുന്നു." : 
                          "The Thahfeezul Qur'an Program enables students to memorize the entire Qur'an while simultaneously pursuing their regular academic education up to SSLC. This comprehensive program nurtures students to become both spiritual leaders and academic achievers."}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border rounded-lg p-4 bg-dqaa-50/30">
                        <h4 className="font-medium text-dqaa-500 mb-2 flex items-center">
                          <Book className="h-4 w-4 mr-2" />
                          {isMalayalam ? "ഖുർആൻ ഹിഫ്സ്" : "Qur'an Hifz"}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>{isMalayalam ? "മുഴുവൻ ഖുർആനും മനപ്പാഠമാക്കൽ" : "Memorization of the entire Qur'an"}</li>
                          <li>{isMalayalam ? "തജ്‌വീദ് (ശരിയായ ഉച്ചാരണം)" : "Tajweed (proper pronunciation)"}</li>
                          <li>{isMalayalam ? "വിദേശ ഖാരിമാരുടെ കീഴിൽ പഠനം" : "Learning under foreign Qaris"}</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-dqaa-50/30">
                        <h4 className="font-medium text-dqaa-500 mb-2 flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2" />
                          {isMalayalam ? "അക്കാദമിക് വിദ്യാഭ്യാസം" : "Academic Education"}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>{isMalayalam ? "SSLC വരെയുള്ള CBSE പാഠ്യപദ്ധതി" : "CBSE curriculum up to SSLC"}</li>
                          <li>{isMalayalam ? "വിഷയ വിദഗ്ധരായ അധ്യാപകർ" : "Subject specialist teachers"}</li>
                          <li>{isMalayalam ? "പ്രത്യേക പരീക്ഷാ തയ്യാറെടുപ്പ്" : "Special exam preparations"}</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-dqaa-50/30">
                        <h4 className="font-medium text-dqaa-500 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          {isMalayalam ? "പ്രത്യേകതകൾ" : "Special Features"}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>{isMalayalam ? "റെസിഡൻഷ്യൽ പ്രോഗ്രാം" : "Residential program"}</li>
                          <li>{isMalayalam ? "വൈകാരിക അടുപ്പമുള്ള അന്തരീക്ഷം" : "Emotionally nurturing environment"}</li>
                          <li>{isMalayalam ? "സാമൂഹിക സേവന പ്രവർത്തനങ്ങൾ" : "Community service activities"}</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "പ്രോഗ്രാം വിശദാംശങ്ങൾ" : "Program Details"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "കാലയളവ്:" : "Duration:"}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {isMalayalam ? "3-4 വർഷം" : "3-4 years"}
                          </p>
                          
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "പ്രവേശന മാനദണ്ഡങ്ങൾ:" : "Admission Criteria:"}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {isMalayalam ? "6-ാം ക്ലാസ് പാസ്, പ്രവേശന പരീക്ഷ, അഭിമുഖം" : "Passed 6th grade, entrance exam, interview"}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "പഠന സമയക്രമം:" : "Learning Schedule:"}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {isMalayalam ? "ഹിഫ്സ് സെഷനുകൾ (രാവിലെ & വൈകുന്നേരം), അക്കാദമിക് ക്ലാസുകൾ (ഉച്ചയ്ക്ക്)" : "Hifz sessions (morning & evening), Academic classes (daytime)"}
                          </p>
                          
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "അവസാന സർട്ടിഫിക്കറ്റ്:" : "Final Certification:"}
                          </h4>
                          <p className="text-gray-600">
                            {isMalayalam ? "SSLC സർട്ടിഫിക്കറ്റ് & ഹാഫിസ് സാക്ഷ്യപത്രം" : "SSLC Certificate & Hafiz Certification"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Link to="/admissions/apply">
                        <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                          {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bayanul" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-dqaa-50 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-dqaa-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-dqaa-500">
                        {isMalayalam ? "ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്സ്" : "Bayanul Quran Diploma Course"}
                      </CardTitle>
                      <CardDescription>
                        {isMalayalam ? "+1 വിത്ത് കൊമേഴ്സ് & ഹ്യൂമാനിറ്റീസ്" : "+1 with Commerce & Humanities"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "പ്രോഗ്രാം അവലോകനം" : "Program Overview"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam ? 
                          "ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്സ് ഇസ്ലാമിക പഠനങ്ങളും ആധുനിക അക്കാദമിക വിഷയങ്ങളും സംയോജിപ്പിക്കുന്ന ഒരു രണ്ട് വർഷ പ്രോഗ്രാമാണ്. ഖുർആനിക വ്യാഖ്യാനം, ഇസ്ലാമിക നിയമവും വിശ്വാസവും കൂടാതെ കൊമേഴ്‌സ്, ഹ്യൂമാനിറ്റീസ് എന്നിവയിൽ വിദ്യാർത്ഥികൾക്ക് പ്രാവീണ്യം നേടാൻ ഈ കോഴ്‌സ് സഹായിക്കുന്നു." : 
                          "The Bayanul Quran Diploma Course is a two-year program that integrates Islamic studies with modern academic subjects. It helps students gain proficiency in Quranic interpretation, Islamic law and beliefs, along with Commerce and Humanities."}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border rounded-lg p-4 bg-dqaa-50/30">
                        <h4 className="font-medium text-dqaa-500 mb-2 flex items-center">
                          <Book className="h-4 w-4 mr-2" />
                          {isMalayalam ? "ഇസ്ലാമിക് പഠനങ്ങൾ" : "Islamic Studies"}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>{isMalayalam ? "ഖുർആൻ തഫ്സീർ (വ്യാഖ്യാനം)" : "Qur'an Tafseer (interpretation)"}</li>
                          <li>{isMalayalam ? "ഫിഖ്ഹ് (ഇസ്ലാമിക നിയമം)" : "Fiqh (Islamic jurisprudence)"}</li>
                          <li>{isMalayalam ? "അഖീദ (വിശ്വാസത്തിന്റെ തത്വങ്ങൾ)" : "Aqeedah (principles of belief)"}</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-dqaa-50/30">
                        <h4 className="font-medium text-dqaa-500 mb-2 flex items-center">
                          <Languages className="h-4 w-4 mr-2" />
                          {isMalayalam ? "ഭാഷാ പഠനങ്ങൾ" : "Language Studies"}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>{isMalayalam ? "അറബിക് ഭാഷാ പ്രാവീണ്യം" : "Arabic language proficiency"}</li>
                          <li>{isMalayalam ? "അഡ്വാൻസ്ഡ് ഇംഗ്ലീഷ് & IELTS തയ്യാറെടുപ്പ്" : "Advanced English & IELTS preparation"}</li>
                          <li>{isMalayalam ? "മലയാളം, ഉർദു എന്നിവയിലെ പ്രാവീണ്യം" : "Proficiency in Malayalam, Urdu"}</li>
                        </ul>
                      </div>
                      
                      <div className="border rounded-lg p-4 bg-dqaa-50/30">
                        <h4 className="font-medium text-dqaa-500 mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          {isMalayalam ? "അക്കാദമിക് വിഷയങ്ങൾ" : "Academic Subjects"}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          <li>{isMalayalam ? "കൊമേഴ്സ്: അക്കൗണ്ടിംഗ്, ബിസിനസ് സ്റ്റഡീസ്" : "Commerce: Accounting, Business Studies"}</li>
                          <li>{isMalayalam ? "ഹ്യൂമാനിറ്റീസ്: ചരിത്രം, ഭൂമിശാസ്ത്രം" : "Humanities: History, Geography"}</li>
                          <li>{isMalayalam ? "PSC, UPSC പരീക്ഷകൾക്കുള്ള പ്രത്യേക കോച്ചിംഗ്" : "Special coaching for PSC, UPSC exams"}</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "പ്രോഗ്രാം വിശദാംശങ്ങൾ" : "Program Details"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "കാലയളവ്:" : "Duration:"}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {isMalayalam ? "2 വർഷം" : "2 years"}
                          </p>
                          
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "പ്രവേശന മാനദണ്ഡങ്ങൾ:" : "Admission Criteria:"}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {isMalayalam ? "10-ാം ക്ലാസ് (കുറഞ്ഞത് 60% മാർക്ക്), പ്രവേശന പരീക്ഷ, അഭിമുഖം" : "Passed 10th grade (minimum 60% marks), entrance exam, interview"}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-md font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "പ്രത്യേകതകൾ:" : "Special Features:"}
                          </h4>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            <li>{isMalayalam ? "വിവിധ വർക്ക്ഷോപ്പുകൾ" : "Various workshops"}</li>
                            <li>{isMalayalam ? "ദേശീയ & അന്തർദേശീയ സെമിനാറുകൾ" : "National & International seminars"}</li>
                            <li>{isMalayalam ? "ഗ്രൂപ്പ് പ്രോജക്ടുകൾ" : "Group projects"}</li>
                            <li>{isMalayalam ? "ഫീൽഡ് വിസിറ്റുകൾ" : "Field visits"}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Link to="/admissions/apply">
                        <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                          {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="academic" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-dqaa-50 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-dqaa-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-dqaa-500">
                        {isMalayalam ? "അക്കാദമിക് വിഷയങ്ങൾ" : "Academic Subjects"}
                      </CardTitle>
                      <CardDescription>
                        {isMalayalam ? "CBSE പാഠ്യപദ്ധതി അനുസരിച്ചുള്ള വിഷയങ്ങൾ" : "Subjects based on CBSE curriculum"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "അക്കാദമിക് അവലോകനം" : "Academic Overview"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam ? 
                          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി CBSE പാഠ്യപദ്ധതിയിൽ അധിഷ്ഠിതമായ സമഗ്രമായ അക്കാദമിക പ്രോഗ്രാം വാഗ്ദാനം ചെയ്യുന്നു. ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിനൊപ്പം, ഞങ്ങൾ വിദ്യാർത്ഥികൾക്ക് സയൻസ്, ഗണിതം, സോഷ്യൽ സയൻസ്, ഭാഷകൾ എന്നിവയിൽ മികച്ച അടിത്തറ നൽകുന്നു." : 
                          "Darul Quran Abdulla Academy offers a comprehensive academic program based on the CBSE curriculum. Alongside Islamic education, we provide students with a strong foundation in Science, Mathematics, Social Sciences, and Languages."}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-dqaa-500 mb-3">
                          {isMalayalam ? "പ്രൈമറി & മിഡിൽ സ്കൂൾ (1-8)" : "Primary & Middle School (1-8)"}
                        </h3>
                        <ul className="space-y-3">
                          <li className="border rounded-lg p-3 bg-dqaa-50/20">
                            <h4 className="font-medium text-gray-800">
                              {isMalayalam ? "ഭാഷകൾ" : "Languages"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {isMalayalam ? "ഇംഗ്ലീഷ്, ഹിന്ദി, മലയാളം, അറബിക്" : "English, Hindi, Malayalam, Arabic"}
                            </p>
                          </li>
                          <li className="border rounded-lg p-3 bg-dqaa-50/20">
                            <h4 className="font-medium text-gray-800">
                              {isMalayalam ? "ഗണിതം & സയൻസ്" : "Mathematics & Science"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {isMalayalam ? "പ്രായത്തിന് അനുയോജ്യമായ പാഠ്യപദ്ധതി, പ്രായോഗിക പഠനത്തോടെ" : "Age-appropriate curriculum with practical learning"}
                            </p>
                          </li>
                          <li className="border rounded-lg p-3 bg-dqaa-50/20">
                            <h4 className="font-medium text-gray-800">
                              {isMalayalam ? "സോഷ്യൽ സയൻസ്" : "Social Science"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {isMalayalam ? "ചരിത്രം, ഭൂമിശാസ്ത്രം, സിവിക്‌സ്" : "History, Geography, Civics"}
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-dqaa-500 mb-3">
                          {isMalayalam ? "സെക്കൻഡറി സ്കൂൾ (9-10)" : "Secondary School (9-10)"}
                        </h3>
                        <ul className="space-y-3">
                          <li className="border rounded-lg p-3 bg-dqaa-50/20">
                            <h4 className="font-medium text-gray-800">
                              {isMalayalam ? "ഇംഗ്ലീഷ്, ഭാഷകൾ, ഗണിതം" : "English, Languages & Mathematics"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {isMalayalam ? "SSLC പരീക്ഷക്കുള്ള പ്രത്യേക തയ്യാറെടുപ്പ്" : "Special preparation for SSLC examination"}
                            </p>
                          </li>
                          <li className="border rounded-lg p-3 bg-dqaa-50/20">
                            <h4 className="font-medium text-gray-800">
                              {isMalayalam ? "സയൻസ് (ഫിസിക്‌സ്, കെമിസ്ട്രി, ബയോളജി)" : "Science (Physics, Chemistry, Biology)"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {isMalayalam ? "പ്രായോഗിക പരീക്ഷണങ്ങളോടെയുള്ള സമഗ്ര പഠനം" : "Comprehensive study with practical experiments"}
                            </p>
                          </li>
                          <li className="border rounded-lg p-3 bg-dqaa-50/20">
                            <h4 className="font-medium text-gray-800">
                              {isMalayalam ? "സോഷ്യൽ സയൻസ്" : "Social Science"}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {isMalayalam ? "ഇന്ത്യൻ, ലോക ചരിത്രം, ഭൂമിശാസ്ത്രം, രാഷ്ട്രീയ ശാസ്ത്രം, സാമ്പത്തിക ശാസ്ത്രം" : "Indian & World History, Geography, Political Science, Economics"}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg mt-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">
                        {isMalayalam ? "2024-25 അക്കാദമിക് നേട്ടങ്ങൾ" : "2024-25 Academic Achievements"}
                      </h3>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src="/lovable-uploads/4131c2be-ede7-4928-9d02-7936cb9b4804.png" alt="SSLC 100% Results" className="w-full md:w-1/3 rounded-lg" />
                        <div>
                          <h4 className="font-medium text-blue-700 mb-1">
                            {isMalayalam ? "SSLC 2025 - 100% വിജയനിരക്ക്" : "SSLC 2025 - 100% Pass Rate"}
                          </h4>
                          <p className="text-sm text-blue-600">
                            {isMalayalam ? 
                              "ഞങ്ങളുടെ എല്ലാ വിദ്യാർത്ഥികളും 2025 SSLC പരീക്ഷയിൽ വിജയിച്ചു, അതിൽ 85% വിദ്യാർത്ഥികൾക്ക് A+ ഗ്രേഡ് ലഭിച്ചു. ഈ സ്ഥിരമായ അക്കാദമിക മികവ് നമ്മുടെ സമഗ്രമായ വിദ്യാഭ്യാസ സമീപനം വിജയമാണെന്ന് തെളിയിക്കുന്നു." : 
                              "All of our students passed the 2025 SSLC examination with 85% securing A+ grade. This consistent academic excellence proves the success of our comprehensive educational approach."}
                          </p>
                          <div className="flex mt-3">
                            <div className="border-r pr-3 mr-3">
                              <span className="block text-xl font-bold text-blue-700">100%</span>
                              <span className="text-xs text-blue-600">{isMalayalam ? "വിജയനിരക്ക്" : "Pass Rate"}</span>
                            </div>
                            <div className="border-r pr-3 mr-3">
                              <span className="block text-xl font-bold text-blue-700">85%</span>
                              <span className="text-xs text-blue-600">{isMalayalam ? "A+ ഗ്രേഡ്" : "A+ Grade"}</span>
                            </div>
                            <div>
                              <span className="block text-xl font-bold text-blue-700">3</span>
                              <span className="text-xs text-blue-600">{isMalayalam ? "ഉന്നത സ്കോറർമാർ" : "Top Scorers"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "പഠന സൗകര്യങ്ങൾ" : "Learning Facilities"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 border rounded-lg bg-dqaa-50/10">
                          <h4 className="font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "ആധുനിക ലാബുകൾ" : "Modern Laboratories"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {isMalayalam ? "സയൻസ് & കമ്പ്യൂട്ടർ ലാബുകൾ പ്രായോഗിക പഠനത്തിനായി" : "Science & computer labs for practical learning"}
                          </p>
                        </div>
                        
                        <div className="text-center p-4 border rounded-lg bg-dqaa-50/10">
                          <h4 className="font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "സമൃദ്ധമായ ലൈബ്രറി" : "Well-stocked Library"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {isMalayalam ? "വിശാലമായ പുസ്തക ശേഖരം, ഡിജിറ്റൽ റിസോഴ്‌സുകൾ" : "Extensive book collection, digital resources"}
                          </p>
                        </div>
                        
                        <div className="text-center p-4 border rounded-lg bg-dqaa-50/10">
                          <h4 className="font-medium text-dqaa-500 mb-1">
                            {isMalayalam ? "സ്മാർട്ട് ക്ലാസ്‌റൂമുകൾ" : "Smart Classrooms"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {isMalayalam ? "ഇന്ററാക്ടീവ് ടീച്ചിംഗ് സഹായികളോടെ" : "With interactive teaching aids"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Link to="/admissions/apply">
                        <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                          {isMalayalam ? "പ്രവേശനത്തിന് അപേക്ഷിക്കുക" : "Apply for Admission"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="additional" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-dqaa-50 p-3 rounded-full">
                      <Award className="h-6 w-6 text-dqaa-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-dqaa-500">
                        {isMalayalam ? "കൂടുതൽ കോഴ്സുകൾ & പ്രോഗ്രാമുകൾ" : "Additional Courses & Programs"}
                      </CardTitle>
                      <CardDescription>
                        {isMalayalam ? "സമ്പൂർണ വിദ്യാർത്ഥി വികസനത്തിനായി" : "For holistic student development"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isMalayalam ? "അധിക കോഴ്സുകൾ" : "Supplementary Courses"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam ? 
                          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി അതിന്റെ സാധാരണ അക്കാദമിക, ഇസ്ലാമിക പ്രോഗ്രാമുകൾക്ക് പുറമെ, വിദ്യാർത്ഥികളുടെ സമഗ്രമായ വികസനത്തിനായി നിരവധി കൂടുതൽ കോഴ്‌സുകളും പ്രോഗ്രാമുകളും വാഗ്ദാനം ചെയ്യുന്നു." : 
                          "Beyond its regular academic and Islamic programs, Darul Quran Abdulla Academy offers numerous additional courses and programs aimed at the holistic development of students."}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-dqaa-500 mb-4">
                          {isMalayalam ? "ഭാഷാ & വിനിമയ കോഴ്സുകൾ" : "Language & Communication Courses"}
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3 border-b pb-3">
                            <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                              <Languages className="h-4 w-4 text-dqaa-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {isMalayalam ? "അഡ്വാൻസ്ഡ് അറബിക്" : "Advanced Arabic"}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {isMalayalam ? 
                                  "ചെറിയ ഗ്രൂപ്പ് ക്ലാസുകളിലൂടെ അറബിക് സാഹിത്യം, ഗ്രാമർ, സംഭാഷണ നൈപുണ്യങ്ങൾ എന്നിവയിൽ ഉയർന്ന പ്രാവീണ്യത്തിലേക്ക് നയിക്കുന്നു." : 
                                  "Leads to higher proficiency in Arabic literature, grammar, and conversational skills through small group classes."}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3 border-b pb-3">
                            <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                              <Languages className="h-4 w-4 text-dqaa-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {isMalayalam ? "IELTS & TOEFL തയ്യാറെടുപ്പ്" : "IELTS & TOEFL Preparation"}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {isMalayalam ? 
                                  "വിദേശ സർവകലാശാലകളിലേക്കുള്ള പ്രവേശനത്തിന് വിദ്യാർത്ഥികളെ തയ്യാറാക്കുന്നു." : 
                                  "Prepares students for admission to foreign universities."}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                              <Languages className="h-4 w-4 text-dqaa-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {isMalayalam ? "പബ്ലിക് സ്പീക്കിംഗ് & ഡിബേറ്റ്" : "Public Speaking & Debate"}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {isMalayalam ? 
                                  "ഇംഗ്ലീഷിലും അറബിയിലുമുള്ള സംവാദ കഴിവുകൾ, ഉപന്യാസ രചന, പൊതു പ്രഭാഷണം എന്നിവയിൽ പരിശീലനം ലഭിക്കുന്നു." : 
                                  "Training in debate skills, essay writing, and public speaking in English and Arabic."}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-dqaa-500 mb-4">
                          {isMalayalam ? "ലീഡർഷിപ്പ് & സ്കിൽ ഡെവലപ്മെന്റ്" : "Leadership & Skill Development"}
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3 border-b pb-3">
                            <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                              <Users className="h-4 w-4 text-dqaa-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {isMalayalam ? "ലീഡർഷിപ്പ് ട്രെയിനിംഗ്" : "Leadership Training"}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {isMalayalam ? 
                                  "ടീം മാനേജ്മെന്റ്, കമ്മ്യൂണിക്കേഷൻ, ക്രിയാത്മക പ്രശ്ന പരിഹാരം എന്നിവയിൽ ശ്രദ്ധ കേന്ദ്രീകരിച്ചുകൊണ്ട്." : 
                                  "Focusing on team management, communication, and creative problem-solving."}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3 border-b pb-3">
                            <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                              <FileText className="h-4 w-4 text-dqaa-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {isMalayalam ? "PSC/UPSC തയ്യാറെടുപ്പ്" : "PSC/UPSC Preparation"}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {isMalayalam ? 
                                  "സിവിൽ സർവീസസ്, PSC പരീക്ഷകൾക്കായി വിദ്യാർത്ഥികളെ തയ്യാറാക്കുന്ന പ്രത്യേക കോച്ചിംഗ് സെഷനുകൾ." : 
                                  "Special coaching sessions preparing students for Civil Services and PSC examinations."}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                              <Book className="h-4 w-4 text-dqaa-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {isMalayalam ? "ഗ്ലോബൽ ഇസ്ലാമിക്ക് സ്റ്റഡീസ്" : "Global Islamic Studies"}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {isMalayalam ? 
                                  "സമകാലിക വിഷയങ്ങൾ, ലോകമെമ്പാടുമുള്ള ഇസ്ലാമിക ചിന്തകൾ, സമകാലിക സാമൂഹിക പ്രശ്നങ്ങൾ എന്നിവ പഠിക്കുന്നു." : 
                                  "Studying contemporary issues, Islamic thought worldwide, and current social challenges."}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="p-4 border rounded-lg text-center bg-dqaa-50/20">
                        <h4 className="font-semibold text-dqaa-500 mb-2">
                          {isMalayalam ? "കമ്പ്യൂട്ടർ സയൻസ്" : "Computer Science"}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {isMalayalam ? "പ്രോഗ്രാമിംഗ്, വെബ് ഡിസൈൻ, ഡിജിറ്റൽ മാർക്കറ്റിംഗ്" : "Programming, web design, digital marketing"}
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg text-center bg-dqaa-50/20">
                        <h4 className="font-semibold text-dqaa-500 mb-2">
                          {isMalayalam ? "കലാ & കായിക പരിപാടികൾ" : "Arts & Sports Programs"}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {isMalayalam ? "കലിഗ്രഫി, മാർഷ്യൽ ആർട്സ്, ഫുട്ബോൾ, ക്രിക്കറ്റ്" : "Calligraphy, martial arts, football, cricket"}
                        </p>
                      </div>
                      
                      <div className="p-4 border rounded-lg text-center bg-dqaa-50/20">
                        <h4 className="font-semibold text-dqaa-500 mb-2">
                          {isMalayalam ? "കമ്മ്യൂണിറ്റി സർവീസ്" : "Community Service"}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {isMalayalam ? "സാമൂഹിക പ്രവർത്തനങ്ങൾ, പരിസ്ഥിതി പദ്ധതികൾ" : "Social activities, environmental projects"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Link to="/admissions/apply">
                        <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                          {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
                {isMalayalam ? "അക്കാദമിക് ഫീച്ചറുകൾ" : "Academic Features"}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/lovable-uploads/20beacd9-1d35-4320-8d62-7e692d1d87f8.png" 
                  alt="Students in Classroom" 
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
              </div>
              
              <div className="space-y-4 flex flex-col justify-center">
                <div className="flex items-start space-x-3">
                  <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                    <Check className="h-5 w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {isMalayalam ? "കുറഞ്ഞ വിദ്യാർത്ഥി-അധ്യാപക അനുപാതം" : "Low Student-Teacher Ratio"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isMalayalam ? 
                        "ഓരോ വിദ്യാർത്ഥിക്കും വ്യക്തിഗത ശ്രദ്ധ ലഭിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്നു." : 
                        "Ensures each student receives individual attention."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                    <Check className="h-5 w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {isMalayalam ? "വിഷയ വിദഗ്ധരായ അധ്യാപകർ" : "Subject Specialist Teachers"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isMalayalam ? 
                        "ഓരോ വിഷയത്തിലും വൈദഗ്ധ്യമുള്ള യോഗ്യരായ അധ്യാപകർ." : 
                        "Qualified teachers with expertise in each subject."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                    <Check className="h-5 w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {isMalayalam ? "രാത്രി പഠന സഹായം" : "Evening Study Support"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isMalayalam ? 
                        "വിദ്യാർത്ഥികൾക്ക് അധ്യാപകരുടെ മേൽനോട്ടത്തിലുള്ള പഠന സെഷനുകൾ." : 
                        "Supervised study sessions for students with teacher guidance."}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-dqaa-50 p-2 rounded-full mt-1">
                    <Check className="h-5 w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {isMalayalam ? "പതിവായ വിലയിരുത്തലുകൾ & ഫീഡ്ബാക്ക്" : "Regular Assessments & Feedback"}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isMalayalam ? 
                        "പരീക്ഷയ്ക്ക് തയ്യാറെടുക്കാനും ശക്തമായ അടിത്തറ ഉറപ്പാക്കാനും വിദ്യാർത്ഥികളെ സഹായിക്കുന്നു." : 
                        "Helps students prepare for exams and ensure a strong foundation."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-5 order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500">
                  {isMalayalam ? "ഹിഫ്സ് പ്രോഗ്രാമിന്റെ പ്രത്യേകതകൾ" : "Excellence in Our Hifz Program"}
                </h2>
                <p className="text-gray-600">
                  {isMalayalam ? 
                    "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ ഞങ്ങളുടെ ഹിഫ്സ് പ്രോഗ്രാം സാധാരണ അക്കാദമിക വിദ്യാഭ്യാസവുമായി ഖുർആൻ മെമൊറൈസേഷൻ അതുല്യമായി സംയോജിപ്പിക്കുന്നു, തദ്വാരാ വിദ്യാർത്ഥികൾക്ക് സമ്പൂർണമായ അക്കാദമിക-ആത്മീയ വികാസം ലഭിക്കുന്നു." : 
                    "Our Hifz program at Darul Quran Abdulla Academy uniquely integrates Quranic memorization with regular academic education, providing students with comprehensive academic-spiritual development."}
                </p>
                
                <div className="space-y-3 pt-3">
                  <div className="flex items-center space-x-2">
                    <div className="bg-dqaa-50 p-1 rounded-full">
                      <Check className="h-4 w-4 text-dqaa-500" />
                    </div>
                    <p className="text-gray-700">
                      {isMalayalam ? "വിദേശ ഖാരിമാരുടെ കീഴിൽ ഉച്ചാരണ രീതികളുടെ പഠനം" : "Recitation method training under foreign Qaris"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-dqaa-50 p-1 rounded-full">
                      <Check className="h-4 w-4 text-dqaa-500" />
                    </div>
                    <p className="text-gray-700">
                      {isMalayalam ? "മുരാജഅ (പുനർപരിശോധന) സെഷനുകൾക്ക് പ്രത്യേക സമയം" : "Dedicated time for Muraja'ah (revision) sessions"}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-dqaa-50 p-1 rounded-full">
                      <Check className="h-4 w-4 text-dqaa-500" />
                    </div>
                    <p className="text-gray-700">
                      {isMalayalam ? "വ്യക്തിഗതമായി നിരീക്ഷിക്കുന്ന പുരോഗതി & സംഭാവന അടിസ്ഥാനമാക്കിയുള്ള പ്രോത്സാഹനം" : "Individually monitored progress & contribution-based incentives"}
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link to="/admissions/apply">
                    <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white">
                      {isMalayalam ? "ഹിഫ്സ് പ്രോഗ്രാമിന് അപേക്ഷിക്കുക" : "Apply for Hifz Program"}
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/a2f070ed-14a0-4e70-8632-82409e0f0d9f.png" 
                    alt="Students in Hifz Class" 
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-gold-400 text-white p-3 rounded shadow-md">
                    <span className="block text-2xl font-bold">3-4</span>
                    <span className="text-sm">{isMalayalam ? "വർഷങ്ങൾ" : "Years"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-dqaa-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
              {isMalayalam ? "നിങ്ങളുടെ അക്കാദമിക് യാത്ര ആരംഭിക്കുക" : "Begin Your Academic Journey"}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {isMalayalam ? 
                "ഇസ്ലാമിക മൂല്യങ്ങളിൽ അടിയുറച്ച വിദ്യാഭ്യാസത്തിലൂടെ നിങ്ങളുടെ ഭാവി രൂപപ്പെടുത്തുക." : 
                "Shape your future through education rooted in Islamic values."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-dqaa-500 hover:bg-dqaa-600 text-white w-full">
                  {isMalayalam ? "കൂടുതൽ അറിയുക" : "Explore Programs"}
                </Button>
              </Link>
              <Link to="/admissions/apply">
                <Button size="lg" variant="outline" className="border-dqaa-500 text-dqaa-500 hover:bg-dqaa-100 w-full">
                  {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className="fixed bottom-6 right-6 z-20">
        <a href="https://form.jotform.com/250855675394470" target="_blank" rel="noopener noreferrer">
          <Button className="bg-dqaa-500 hover:bg-dqaa-600 text-white shadow-lg">
            {isMalayalam ? "അപേക്ഷിക്കുക" : "Apply Now"}
          </Button>
        </a>
      </div>
    </Layout>
  );
};

export default AcademicProgramsPage;
