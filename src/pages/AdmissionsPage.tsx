
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppleInspiredPageHeader from "@/components/admissions/AppleInspiredPageHeader";
import AppleInspiredAdmissionCard from "@/components/admissions/AppleInspiredAdmissionCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, BookOpen, GraduationCap, Users, FileBadge, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";
import FAQSection from "@/components/FAQSection";

const AdmissionsPage = () => {
  const [showMalayalam, setShowMalayalam] = useState(false);
  const navigate = useNavigate();
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  // FAQ items specific to admissions
  const admissionsFaqs = [
    {
      question: "What are the eligibility criteria for Thahfeezul Qur'an Program?",
      questionMl: "തഹ്ഫീളുൽ ഖുർആൻ പ്രോഗ്രാമിനുള്ള യോഗ്യതാ മാനദണ്ഡങ്ങൾ എന്തൊക്കെയാണ്?",
      answer: "Students must have passed 6th grade, demonstrate basic ability to read the Quran, and possess good character and conduct. Candidates must pass an entrance examination and perform well in a personal interview.",
      answerMl: "വിദ്യാർത്ഥികൾ 6-ാം ക്ലാസ് പാസായിരിക്കണം, ഖുർആൻ വായിക്കാനുള്ള അടിസ്ഥാന കഴിവ് പ്രദർശിപ്പിക്കണം, നല്ല സ്വഭാവവും പെരുമാറ്റവും ഉണ്ടായിരിക്കണം. ഉദ്യോഗാർത്ഥികൾ ഒരു പ്രവേശന പരീക്ഷ പാസാകുകയും വ്യക്തിഗത അഭിമുഖത്തിൽ നന്നായി പ്രകടിപ്പിക്കുകയും വേണം."
    },
    {
      question: "What is the application process for admission?",
      questionMl: "പ്രവേശനത്തിനുള്ള അപേക്ഷാ നടപടിക്രമം എന്താണ്?",
      answer: "The application process includes: 1) Submitting the online application form with required information, 2) Taking the entrance examination on the scheduled date, 3) Attending a personal interview if you pass the entrance exam, 4) Receiving the results announcement, and 5) Confirming admission by paying fees and submitting required documents if selected.",
      answerMl: "അപേക്ഷാ നടപടിക്രമത്തിൽ ഉൾപ്പെടുന്നത്: 1) ആവശ്യമായ വിവരങ്ങളോടെ ഓൺലൈൻ അപേക്ഷാ ഫോം സമർപ്പിക്കുക, 2) നിശ്ചിത തീയതിയിൽ പ്രവേശന പരീക്ഷ എഴുതുക, 3) പ്രവേശന പരീക്ഷ പാസായാൽ വ്യക്തിഗത അഭിമുഖത്തിൽ പങ്കെടുക്കുക, 4) ഫല പ്രഖ്യാപനം സ്വീകരിക്കുക, 5) തിരഞ്ഞെടുക്കപ്പെട്ടാൽ ഫീസ് അടച്ച് ആവശ്യമായ രേഖകൾ സമർപ്പിച്ച് പ്രവേശനം ഉറപ്പാക്കുക."
    },
    {
      question: "What documents are required for admission?",
      questionMl: "പ്രവേശനത്തിന് എന്തെല്ലാം രേഖകളാണ് ആവശ്യം?",
      answer: "Required documents include: Birth Certificate (copy), Transfer Certificate (original), Conduct Certificate, School & Madrassa Mark Lists, Aadhaar copy, Ration Card copy, and four passport-size photos with blue background.",
      answerMl: "ആവശ്യമായ രേഖകളിൽ ഉൾപ്പെടുന്നവ: ജനന സർട്ടിഫിക്കറ്റ് (പകർപ്പ്), ട്രാൻസ്ഫർ സർട്ടിഫിക്കറ്റ് (അസൽ), പെരുമാറ്റ സർട്ടിഫിക്കറ്റ്, സ്കൂൾ & മദ്രസ മാർക്ക് ലിസ്റ്റുകൾ, ആധാർ പകർപ്പ്, റേഷൻ കാർഡ് പകർപ്പ്, നീല ബാക്ക്ഗ്രൗണ്ടിൽ നാല് പാസ്പോർട്ട് സൈസ് ഫോട്ടോകൾ."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Admissions | Darul Quran Abdulla Academy</title>
        <meta 
          name="description" 
          content="Learn about the admissions process at Darul Quran Abdulla Academy. Discover our Quran memorization & Islamic studies programs. Apply to DQAA today!" 
        />
        <meta 
          name="keywords" 
          content="DQAA admissions, Darul Quran admission process, Islamic academy enrollment, Hifz program admission, Quran memorization school application" 
        />
        <link rel="canonical" href="https://www.darulquranaa.com/admissions" />
      </Helmet>
      
      <AppleInspiredPageHeader 
        title={isMalayalam ? "പ്രവേശനം" : "Admissions"} 
        subtitle={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ വിദ്യാർത്ഥി സമൂഹത്തിൽ ചേരുക" : 
          "Join our community of learners at Darul Quran Abdulla Academy"}
        backgroundImage="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
        showApplyButton={true}
      />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            onClick={() => setShowMalayalam(!showMalayalam)}
            className="apple-button-secondary text-sm"
          >
            {showMalayalam ? "Switch to English" : "മലയാളത്തിലേക്ക് മാറുക"}
          </Button>
        </div>
      </div>
      
      <section className="py-8 md:py-16 animate-apple-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center animate-apple-slide-up">
            {showMalayalam ? "പ്രവേശന വിവരങ്ങൾ" : "Admissions Information"}
          </h2>
          
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-apple-slide-up animation-delay-200">
            {showMalayalam ? 
              "2025 അധ്യയന വർഷത്തിലേക്കുള്ള പ്രവേശനം ഇപ്പോൾ തുറന്നിരിക്കുന്നു. താഴെയുള്ള വിവരങ്ങൾ പരിശോധിച്ച് എത്രയും പെട്ടെന്ന് അപേക്ഷിക്കുക." : 
              "Admissions for the 2025 academic year are now open. Review the information below and apply as soon as possible to secure your spot."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-apple-slide-up animation-delay-300">
              <AppleInspiredAdmissionCard
                icon={FileText}
                title={showMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                description={showMalayalam ? "ഓൺലൈൻ അപ്ലിക്കേഷൻ പൂരിപ്പിക്കുക" : "Complete our online application"}
                content={showMalayalam ? 
                  "ഞങ്ങളുടെ സുരക്ഷിത ഓൺലൈൻ അപ്ലിക്കേഷനിലൂടെ 2025 അധ്യയന വർഷത്തിലേക്ക് അപേക്ഷിക്കുക." : 
                  "Apply for the 2025 academic year through our secure online application."}
                buttonText={showMalayalam ? "അപേക്ഷിക്കുക" : "Apply Now"}
                iconColor="text-dqaa-500"
                borderColor="border-t-4 border-t-dqaa-500"
                isInteractive={true}
                onClick={() => navigate('/admissions/apply')}
              />
            </div>
            
            <div className="animate-apple-slide-up animation-delay-500">
              <AppleInspiredAdmissionCard
                icon={Calendar}
                title={showMalayalam ? "പ്രവേശന കലണ്ടർ" : "Admission Calendar"}
                description={showMalayalam ? "പ്രധാനപ്പെട്ട തീയതികൾ" : "Important dates to remember"}
                content="Application Opens: Jan 15, 2025 | Deadline: Mar 30, 2025 | Entrance Exam: Apr 15, 2025 | Results: Apr 30, 2025 | Classes Begin: Jun 1, 2025"
                buttonText=""
                iconColor="text-gold-400"
                borderColor="border-t-4 border-t-gold-400"
              />
            </div>
            
            <div className="animate-apple-slide-up animation-delay-700">
              <AppleInspiredAdmissionCard
                icon={FileBadge}
                title={showMalayalam ? "ആവശ്യമായ രേഖകൾ" : "Required Documents"}
                description={showMalayalam ? "തയ്യാറാക്കി വയ്ക്കേണ്ട രേഖകൾ" : "Documents to prepare"}
                content={showMalayalam ? 
                  "ജനന സർട്ടിഫിക്കറ്റ്, ട്രാൻസ്ഫർ സർട്ടിഫിക്കറ്റ്, പെരുമാറ്റ സർട്ടിഫിക്കറ്റ്, മാർക്ക് ലിസ്റ്റുകൾ, ആധാർ, റേഷൻ കാർഡ്, ഫോട്ടോകൾ" :
                  "Birth Certificate, Transfer Certificate, Conduct Certificate, Mark Lists, Aadhaar, Ration Card, Photos"}
                buttonText=""
                iconColor="text-blue-700"
                borderColor="border-t-4 border-t-blue-700"
              />
            </div>
          </div>
          
          <Tabs defaultValue="programs" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="programs">
                {showMalayalam ? "പ്രോഗ്രാമുകൾ" : "Our Programs"}
              </TabsTrigger>
              <TabsTrigger value="process">
                {showMalayalam ? "പ്രവേശന നടപടികൾ" : "Admission Process"}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="programs" className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-dqaa-100 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-dqaa-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-dqaa-500">
                        {showMalayalam ? "തഹ്ഫീളുൽ ഖുർആൻ" : "Thahfeezul Qur'an Program"}
                      </CardTitle>
                      <CardDescription>
                        {showMalayalam ? "പതിവ് സ്‌കൂൾ വിദ്യാഭ്യാസത്തോടെ" : "Integration of Qur'an memorization with regular academics"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        {showMalayalam ? "യോഗ്യത മാനദണ്ഡം:" : "Eligibility:"}
                      </h4>
                      <p className="text-gray-600">
                        {showMalayalam ? "6-ാം ക്ലാസ് പാസായ ആൺകുട്ടികൾക്കായി" : "For boys who have passed 6th grade"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        {showMalayalam ? "പ്രത്യേകതകൾ:" : "Special Features:"}
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>
                          {showMalayalam ? 
                            "ഭൗതിക പഠനത്തിന് കോട്ടം തട്ടാത്ത രീതിയിലുള്ള അക്കാദമിക് സംവിധാനം" : 
                            "Academic system designed without compromising secular education"}
                        </li>
                        <li>
                          {showMalayalam ? 
                            "പത്താം തരം ഉന്നത മാർക്കോടെ പാസാകാനുള്ള പ്രത്യേക പരിശീലനം" : 
                            "Special coaching to excel in 10th grade examinations"}
                        </li>
                        <li>
                          {showMalayalam ? 
                            "വിശ്യാത കീഴിൽ ഖുർആൻ പാരായണ ശൈലി പഠനം" : 
                            "Qur'an recitation style training under foreign Qaris"}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <Button onClick={() => navigate('/admissions/apply')} className="bg-dqaa-500 text-white hover:bg-dqaa-600 transition-colors">
                        {showMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-dqaa-100 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-dqaa-500" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-dqaa-500">
                        {showMalayalam ? "ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്‌സ്" : "Bayanul Qur'an Diploma Course"}
                      </CardTitle>
                      <CardDescription>
                        {showMalayalam ? "+1 വിത്ത് കൊമേഴ്സ് & ഹ്യൂമാനിറ്റീസ്" : "+1 with Commerce & Humanities"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        {showMalayalam ? "യോഗ്യത മാനദണ്ഡം:" : "Eligibility:"}
                      </h4>
                      <p className="text-gray-600">
                        {showMalayalam ? "10-ാം ക്ലാസ് പാസായ ആൺകുട്ടികൾക്കായി" : "For boys who have passed 10th grade with minimum 60%"}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">
                        {showMalayalam ? "പ്രത്യേകതകൾ:" : "Special Features:"}
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>
                          {showMalayalam ? 
                            "വിവിധ വർക്ക്ഷോപ്പുകളും അഡ്വാൻസ്ഡ് ലാംഗ്വേജ് ലാബുകളും" : 
                            "Multiple workshops with advanced language labs"}
                        </li>
                        <li>
                          {showMalayalam ? 
                            "IELTS, TOEFL എന്നിവയ്ക്കുള്ള തയ്യാറെടുപ്പ്" : 
                            "Preparation for IELTS and TOEFL"}
                        </li>
                        <li>
                          {showMalayalam ? 
                            "PSC, UPSC തുടങ്ങിയ മത്സര പരീക്ഷകൾക്കുള്ള കോച്ചിംഗ്" : 
                            "Coaching for competitive exams like PSC and UPSC"}
                        </li>
                        <li>
                          {showMalayalam ? 
                            "ഗ്രൂപ്പ് പ്രോജക്ടുകൾ, ദേശീയ & അന്തർദേശീയ സെമിനാറുകൾ" : 
                            "Group projects, National & International Seminars"}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <Button onClick={() => navigate('/admissions/apply')} className="bg-dqaa-500 text-white hover:bg-dqaa-600 transition-colors">
                        {showMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="process" className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-display font-semibold text-dqaa-500 mb-4">
                  {showMalayalam ? "പ്രവേശന പ്രക്രിയ" : "Admission Process"}
                </h3>
                
                <ol className="space-y-6 relative border-l border-dqaa-200 ml-3 mt-8">
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-dqaa-500 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-white font-medium">1</span>
                    </span>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {showMalayalam ? "അപേക്ഷിക്കുക" : "Submit Application"}
                    </h4>
                    <p className="text-gray-600">
                      {showMalayalam ? 
                        "ഞങ്ങളുടെ ഓൺലൈൻ അപ്ലിക്കേഷൻ പൂരിപ്പിച്ച് സമർപ്പിക്കുക." : 
                        "Complete and submit our online application form with all required information."}
                    </p>
                  </li>
                  
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-dqaa-500 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-white font-medium">2</span>
                    </span>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {showMalayalam ? "എൻട്രൻസ് പരീക്ഷ" : "Entrance Examination"}
                    </h4>
                    <p className="text-gray-600">
                      {showMalayalam ? 
                        "നിർദ്ദിഷ്ട തീയതിയിൽ നടക്കുന്ന പ്രവേശന പരീക്ഷ എഴുതുക." : 
                        "Take the entrance examination on the scheduled date."}
                    </p>
                  </li>
                  
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-dqaa-500 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-white font-medium">3</span>
                    </span>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {showMalayalam ? "വ്യക്തിഗത അഭിമുഖം" : "Personal Interview"}
                    </h4>
                    <p className="text-gray-600">
                      {showMalayalam ? 
                        "പ്രവേശന പരീക്ഷയിൽ വിജയിച്ച വിദ്യാർത്ഥികൾക്ക് വ്യക്തിഗത അഭിമുഖത്തിന് ക്ഷണിക്കും." : 
                        "Students who pass the entrance exam will be invited for a personal interview."}
                    </p>
                  </li>
                  
                  <li className="mb-6 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-dqaa-500 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-white font-medium">4</span>
                    </span>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {showMalayalam ? "ഫലം പ്രഖ്യാപനം" : "Results Announcement"}
                    </h4>
                    <p className="text-gray-600">
                      {showMalayalam ? 
                        "അഭിമുഖത്തിന്റെയും പരീക്ഷയുടെയും അടിസ്ഥാനത്തിൽ ഫലം പ്രഖ്യാപിക്കും." : 
                        "Results will be announced based on the entrance exam and interview performance."}
                    </p>
                  </li>
                  
                  <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-dqaa-500 rounded-full -left-4 ring-4 ring-white">
                      <span className="text-white font-medium">5</span>
                    </span>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {showMalayalam ? "പ്രവേശനം ഉറപ്പാക്കൽ" : "Confirmation of Admission"}
                    </h4>
                    <p className="text-gray-600">
                      {showMalayalam ? 
                        "തിരഞ്ഞെടുക്കപ്പെട്ട വിദ്യാർത്ഥികൾ പ്രവേശന ഫീസ് അടച്ച് രേഖകൾ സമർപ്പിച്ച് പ്രവേശനം ഉറപ്പാക്കണം." : 
                        "Selected students must confirm their admission by paying the admission fee and submitting all required documents."}
                    </p>
                  </li>
                </ol>
                
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Users className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">
                        {showMalayalam ? "പ്രവേശന മാനദണ്ഡം" : "Selection Criteria"}
                      </h4>
                      <p className="text-sm text-blue-700 mt-1">
                        {showMalayalam ? 
                          "എൻട്രൻസ് പരീക്ഷ, വ്യക്തിഗത ഇൻ്റർവ്യൂ എന്നിവയുടെ അടിസ്ഥാനത്തിൽ യോഗ്യതാ മാനദണ്ഡങ്ങൾ പൂർത്തിയാക്കുന്നവരെ മാത്രമേ പരിഗണിക്കുകയുള്ളൂ." : 
                          "Admission is based solely on merit, determined through entrance exam performance and personal interview. Only those meeting the eligibility criteria will be considered."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-dqaa-500">
                    {showMalayalam ? "ഫീസ് വിവരങ്ങൾ" : "Tuition & Fees"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gold-100 p-2 rounded-full">
                        <CreditCard className="h-5 w-5 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          {showMalayalam ? 
                            "വിശദമായ ഫീസ് വിവരങ്ങൾക്കായി ദയവായി ഞങ്ങളുടെ ഓഫീസുമായി ബന്ധപ്പെടുക." : 
                            "Please contact our office for detailed fee information. We offer various scholarship opportunities for deserving students."}
                        </p>
                        <Button variant="outline" className="mt-4">
                          {showMalayalam ? "കൂടുതൽ വിവരങ്ങൾക്ക് ബന്ധപ്പെടുക" : "Contact for Fee Details"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-8">
                <Button onClick={() => navigate('/admissions/apply')} size="lg" className="bg-dqaa-500 hover:bg-dqaa-600 transition-colors">
                  {showMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section for Admissions */}
      <section className="py-8 md:py-16 bg-gray-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <FAQSection 
            title="Frequently Asked Admission Questions"
            titleMl="പതിവായി ചോദിക്കുന്ന പ്രവേശന ചോദ്യങ്ങൾ"
            subtitle="Find answers to common questions about our admission process"
            subtitleMl="ഞങ്ങളുടെ പ്രവേശന നടപടിക്രമത്തെക്കുറിച്ചുള്ള സാധാരണ ചോദ്യങ്ങൾക്ക് ഉത്തരങ്ങൾ കണ്ടെത്തുക"
            faqs={admissionsFaqs}
          />
        </div>
      </section>
    </>
  );
};

export default AdmissionsPage;
