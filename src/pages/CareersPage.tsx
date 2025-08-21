
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet-async";
import { Briefcase, Check, FileText, Phone, School, Users } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";

const CareersPage = () => {
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: isMalayalam ? "അപേക്ഷ സമർപ്പിച്ചു" : "Application Submitted",
        description: isMalayalam 
          ? "നിങ്ങളുടെ അപേക്ഷ സ്വീകരിച്ചു. ഞങ്ങൾ ഉടൻ നിങ്ങളുമായി ബന്ധപ്പെടും." 
          : "Your application has been received. We will contact you soon.",
        duration: 5000,
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <Helmet>
        <title>Careers at Darul Quran Abdulla Academy | Join DQAA</title>
        <meta 
          name="description" 
          content="Explore career opportunities at Darul Quran Abdulla Academy. Join our mission to provide transformative education rooted in Islamic values. Submit your application."
        />
        <meta 
          name="keywords" 
          content="DQAA careers, Darul Quran jobs, Islamic academy jobs, teaching positions Kerala, DQAA employment"
        />
        <link rel="canonical" href="https://www.darulquranaa.com/careers" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Darul Quran Abdulla Academy",
              "url": "https://www.darulquranaa.com/",
              "logo": "https://www.darulquranaa.com/path/to/logo.png",
              "sameAs": [
                "https://www.facebook.com/darulquranaa",
                "https://www.instagram.com/darulquranaa"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Darul Quran Campus, Kothakurssi",
                "addressLocality": "Panamanna",
                "postalCode": "679501",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              }
            }
          `}
        </script>
      </Helmet>
      
      <PageHeader 
        title={isMalayalam ? "കരിയർ" : "Careers"} 
        subtitle={isMalayalam 
          ? "ഞങ്ങളുടെ ടീമിൽ ചേരുക, ഭാവി രൂപപ്പെടുത്തുന്നതിൽ സഹായിക്കുക" 
          : "Join our team and help shape the future"}
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
      />

      <div className="py-12 md:py-16 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
                {isMalayalam 
                  ? "ഞങ്ങൾക്കൊപ്പം പ്രവർത്തിക്കുക" 
                  : "Work With Us"}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                {isMalayalam 
                  ? "വിദ്യാർത്ഥികളുടെ ജീവിതത്തിൽ ശാശ്വതമായ സ്വാധീനം ചെലുത്തുന്ന ഒരു സമർപ്പിത അധ്യാപകരുടെയും പിന്തുണാ സ്റ്റാഫിന്റെയും ടീമിൽ ചേരുക, അവരുടെ പഠന യാത്രയിൽ അവരെ വഴിനടത്തുക." 
                  : "Join a dedicated team of teachers and support staff who make a lasting impact on students' lives, guiding them in their educational journey and helping them develop into well-rounded individuals with strong Islamic values."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-dqaa-500 h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-dqaa-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <Briefcase className="text-dqaa-500 h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-dqaa-500 mb-3">
                    {isMalayalam ? "സംതുലിതമായ ജീവിതം" : "Balanced Life"}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam 
                      ? "ഞങ്ങൾ തൊഴിൽ-ജീവിത സന്തുലനത്തിന് മുൻഗണന നൽകുന്നു, ആത്മീയതയും വ്യക്തിപരമായ വളർച്ചയും പ്രോത്സാഹിപ്പിക്കുന്നു." 
                      : "We prioritize work-life balance and encourage spirituality and personal growth alongside professional development."}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-gold-400 h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-gold-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <Users className="text-gold-400 h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-dqaa-500 mb-3">
                    {isMalayalam ? "മികച്ച സംസ്കാരം" : "Great Culture"}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam 
                      ? "സഹകരണം, ആദരവ്, സമർപ്പണം എന്നിവയുടെ അടിസ്ഥാനത്തിലുള്ള ഒരു വളർത്തുന്ന പ്രവർത്തന പരിസ്ഥിതിയിൽ ജോലി ചെയ്യുക." 
                      : "Work in a nurturing environment built on collaboration, respect, and dedication to our mission and values."}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-dqaa-600 h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="bg-dqaa-50 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <School className="text-dqaa-600 h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold text-dqaa-500 mb-3">
                    {isMalayalam ? "മതിയായ പ്രതിഫലം" : "Fair Compensation"}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam 
                      ? "മത്സരാധിഷ്ഠിത ശമ്പളം, ആകർഷകമായ ആനുകൂല്യങ്ങൾ, പ്രൊഫഷണൽ വളർച്ചയ്ക്കുള്ള അവസരങ്ങൾ എന്നിവ ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു." 
                      : "We offer competitive salaries, attractive benefits, and opportunities for professional growth and development."}
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-dqaa-500 mb-6">
                  {isMalayalam ? "ഞങ്ങൾ എന്താണ് അന്വേഷിക്കുന്നത്" : "What We Look For"}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                      <Check className="h-4 w-4 text-dqaa-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {isMalayalam ? "യോഗ്യത & വിദ്യാഭ്യാസം" : "Qualifications & Education"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam 
                          ? "പ്രസക്തമായ മേഖലയിൽ ബിരുദാനന്തര ബിരുദം അല്ലെങ്കിൽ തത്തുല്യ അനുഭവം. ഇസ്ലാമിക വിഷയങ്ങൾക്ക്, ഇസ്ലാമിക പഠനങ്ങളിൽ ബിരുദം അഭിലഷണീയമാണ്." 
                          : "Post-graduate degree or equivalent experience in relevant field. For Islamic subjects, a degree in Islamic studies is desirable."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                      <Check className="h-4 w-4 text-dqaa-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {isMalayalam ? "അധ്യാപന കഴിവുകൾ" : "Teaching Abilities"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam 
                          ? "വിവിധ പഠന ശൈലികളിൽ വിദ്യാർത്ഥികളെ ഉൾക്കൊള്ളാനുള്ള കഴിവ്, ചിന്താപരമായ ശീലങ്ങളെ പ്രോത്സാഹിപ്പിക്കുന്ന ആകർഷകമായ പഠന അനുഭവങ്ങൾ രൂപകൽപ്പന ചെയ്യാനുള്ള പ്രതിബദ്ധത." 
                          : "Ability to engage students of various learning styles and a commitment to designing engaging learning experiences that promote intellectual habits."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                      <Check className="h-4 w-4 text-dqaa-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {isMalayalam ? "മൂല്യങ്ങളോടുള്ള പ്രതിബദ്ധത" : "Commitment to Values"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam 
                          ? "ഞങ്ങളുടെ മിഷനുമായി പൊരുത്തപ്പെടുന്ന ശക്തമായ മൂല്യങ്ങൾ, ഉയർന്ന ധാർമ്മിക നിലവാരം, ഇസ്ലാമിക തത്വങ്ങളോടുള്ള ആഴത്തിലുള്ള ബഹുമാനം എന്നിവ പ്രദർശിപ്പിക്കുന്നവരെ ഞങ്ങൾ അന്വേഷിക്കുന്നു." 
                          : "We seek individuals who demonstrate strong values aligned with our mission, high ethical standards, and a deep respect for Islamic principles."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad" 
                  alt="DQAA professional working environment" 
                  className="rounded-lg shadow-lg object-cover w-full h-80"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
                {isMalayalam ? "നിലവിലുള്ള ഒഴിവുകൾ" : "Current Openings"}
              </h2>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold text-dqaa-500 mb-2">
                  {isMalayalam ? "ഇസ്ലാമിക സ്റ്റഡീസ് അധ്യാപകർ" : "Islamic Studies Teachers"}
                </h3>
                <p className="text-gray-600 mb-3">
                  {isMalayalam 
                    ? "ഇസ്ലാമിക വിഷയങ്ങളിൽ വിദഗ്ധമായ അറിവും, പരിചയവും ഉള്ള അധ്യാപകരെ ആവശ്യമുണ്ട്, പ്രത്യേകിച്ച് ഖുർആൻ, ഹദീസ്, ഫിഖ്ഹ് എന്നിവയിൽ." 
                    : "We need teachers with expert knowledge and experience in Islamic subjects, particularly in Quran, Hadith, and Fiqh."}
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" className="text-dqaa-500 border-dqaa-500">
                    {isMalayalam ? "അപേക്ഷിക്കുക" : "Apply"}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                <h3 className="text-xl font-semibold text-dqaa-500 mb-2">
                  {isMalayalam ? "സയൻസ് & മാത്തമാറ്റിക്സ് അധ്യാപകർ" : "Science & Mathematics Teachers"}
                </h3>
                <p className="text-gray-600 mb-3">
                  {isMalayalam 
                    ? "CBSE കരിക്കുലം അനുസരിച്ച് സയൻസ്, മാത്തമാറ്റിക്സ് വിഷയങ്ങൾ പഠിപ്പിക്കാൻ പരിചയസമ്പന്നരായ അധ്യാപകരെ ആവശ്യമുണ്ട്." 
                    : "Experienced teachers needed to teach Science and Mathematics subjects according to the CBSE curriculum."}
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" className="text-dqaa-500 border-dqaa-500">
                    {isMalayalam ? "അപേക്ഷിക്കുക" : "Apply"}
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-dqaa-500 mb-2">
                  {isMalayalam ? "അഡ്മിനിസ്ട്രേറ്റീവ് സ്റ്റാഫ്" : "Administrative Staff"}
                </h3>
                <p className="text-gray-600 mb-3">
                  {isMalayalam 
                    ? "ഓഫീസ് മാനേജ്മെന്റ്, അഡ്മിഷൻ പ്രക്രിയകൾ, സ്റ്റുഡന്റ് റെക്കോർഡുകൾ കൈകാര്യം ചെയ്യൽ തുടങ്ങിയവയ്ക്കായി അഡ്മിനിസ്ട്രേറ്റീവ് സ്റ്റാഫിനെ ആവശ്യമുണ്ട്." 
                    : "Administrative staff needed for office management, admission procedures, handling student records, and general administrative duties."}
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" className="text-dqaa-500 border-dqaa-500">
                    {isMalayalam ? "അപേക്ഷിക്കുക" : "Apply"}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-dqaa-50 p-8 rounded-lg border border-dqaa-100">
              <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 text-center">
                {isMalayalam ? "ജനറൽ ആപ്ലിക്കേഷൻ" : "General Application"}
              </h2>
              <p className="text-center text-gray-600 mb-8">
                {isMalayalam 
                  ? "നിങ്ങളുടെ കഴിവുകൾ ഞങ്ങളുടെ ടീമിന് ഗുണം ചെയ്യുമെന്ന് നിങ്ങൾ വിശ്വസിക്കുന്നുവെങ്കിൽ, താഴെയുള്ള ഫോം പൂരിപ്പിക്കുക അല്ലെങ്കിൽ നിങ്ങളുടെ റെസ്യൂമെ ഞങ്ങൾക്ക് അയയ്ക്കുക." 
                  : "If you believe your skills would benefit our team, fill out the form below or send us your resume."}
              </p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {isMalayalam ? "പേര്" : "Name"}*
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      className="bg-white"
                      placeholder={isMalayalam ? "നിങ്ങളുടെ പൂർണ്ണമായ പേര്" : "Your full name"}  
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {isMalayalam ? "ഇമെയിൽ" : "Email"}*
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="bg-white"
                      placeholder={isMalayalam ? "നിങ്ങളുടെ ഇമെയിൽ വിലാസം" : "Your email address"}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {isMalayalam ? "ഫോൺ" : "Phone"}*
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      required 
                      className="bg-white"
                      placeholder={isMalayalam ? "നിങ്ങളുടെ ഫോൺ നമ്പർ" : "Your phone number"}
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      {isMalayalam ? "താൽപര്യമുള്ള പൊസിഷൻ" : "Position of Interest"}*
                    </label>
                    <Input 
                      id="position" 
                      name="position" 
                      required 
                      className="bg-white"
                      placeholder={isMalayalam ? "നിങ്ങൾ താൽപര്യപ്പെടുന്ന റോൾ" : "Role you're interested in"}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    {isMalayalam ? "പ്രസക്തമായ പരിചയം" : "Relevant Experience"}*
                  </label>
                  <Textarea 
                    id="experience" 
                    name="experience" 
                    required 
                    className="bg-white"
                    placeholder={isMalayalam 
                      ? "നിങ്ങളുടെ പ്രസക്തമായ പരിചയത്തെക്കുറിച്ച് ചുരുക്കി വിവരിക്കുക" 
                      : "Briefly describe your relevant experience"}
                    rows={4}
                  />
                </div>
                
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                    {isMalayalam ? "വിദ്യാഭ്യാസം" : "Education"}*
                  </label>
                  <Textarea 
                    id="education" 
                    name="education" 
                    required 
                    className="bg-white"
                    placeholder={isMalayalam 
                      ? "നിങ്ങളുടെ വിദ്യാഭ്യാസ യോഗ്യതകളെക്കുറിച്ച് ചുരുക്കി വിവരിക്കുക" 
                      : "Briefly describe your educational qualifications"}
                    rows={3}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {isMalayalam ? "കൂടുതൽ വിവരങ്ങൾ" : "Additional Information"}
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    className="bg-white"
                    placeholder={isMalayalam 
                      ? "നിങ്ങളെക്കുറിച്ചും നിങ്ങളുടെ താൽപര്യങ്ങളെക്കുറിച്ചും കൂടുതൽ വിവരങ്ങൾ" 
                      : "Any additional information about yourself and your interests"}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center space-x-2 cursor-pointer bg-white px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <FileText className="h-5 w-5 text-dqaa-500" />
                    <span>{isMalayalam ? "റെസ്യൂമെ അപ്‌ലോഡ് ചെയ്യുക" : "Upload Resume"}</span>
                  </label>
                  <span className="ml-2 text-xs text-gray-600">
                    {isMalayalam ? "(PDF അല്ലെങ്കിൽ Word ഫോർമാറ്റ്)" : "(PDF or Word format)"}
                  </span>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    className="bg-dqaa-500 hover:bg-dqaa-600 text-white px-8 py-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 
                      (isMalayalam ? "സമർപ്പിക്കുന്നു..." : "Submitting...") : 
                      (isMalayalam ? "അപേക്ഷിക്കുക" : "Submit Application")}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="text-center mt-12">
              <h3 className="font-semibold text-xl text-dqaa-500 mb-4">
                {isMalayalam ? "കൂടുതൽ ചോദ്യങ്ങൾ?" : "Have Questions?"}
              </h3>
              <p className="mb-6 text-gray-600">
                {isMalayalam 
                  ? "ഞങ്ങളുടെ കരിയർ ഓപ്പർച്യുണിറ്റികളെക്കുറിച്ച് കൂടുതൽ അറിയാൻ ഞങ്ങളുമായി ബന്ധപ്പെടുക." 
                  : "Contact us to learn more about our career opportunities."}
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91-9526-552211</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>careers@darulquranaa.com</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CareersPage;
