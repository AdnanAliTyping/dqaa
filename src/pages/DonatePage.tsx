
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import LocationDetails from "@/components/LocationDetails";
import RazorpayDonateButton from "@/components/RazorpayDonateButton";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const DonatePage = () => {
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  // Add smooth scroll animation effect to page load
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 50) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on initial load
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Donate & Support DQAA | Darul Quran Abdulla Academy</title>
        <meta 
          name="description" 
          content="Support Darul Quran Abdulla Academy's mission. Your donation helps students learn the Quran and excel academically. Donate securely (Tax Exempt u/s 80G)."
        />
        <meta 
          name="keywords" 
          content="DQAA donate, support Islamic education, Darul Quran donation, Islamic charity Kerala, tax exempt donation"
        />
        <link rel="canonical" href="https://www.darulquranaa.com/donate" />
        
        {/* NGO Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Darul Quran Abdulla Academy",
              "url": "https://www.darulquranaa.com/",
              "logo": "https://www.darulquranaa.com/path/to/logo.png",
              "description": "Charitable trust nurturing young minds through Quranic education and academic excellence. Donations are tax-exempt under Section 80G.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Darul Quran Campus, Kothakurssi",
                "addressLocality": "Panamanna",
                "postalCode": "679501",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9526-552211",
                "contactType": "Donations/Support"
              }
            }
          `}
        </script>
      </Helmet>
      
      <PageHeader 
        title={isMalayalam ? "സഹായിക്കുക" : "Support DQAA"} 
        subtitle={isMalayalam ? 
          "നിങ്ങളുടെ ഉദാരമായ സംഭാവനകളിലൂടെ ഞങ്ങളുടെ വിദ്യാർത്ഥികളുടെ ജീവിതത്തിൽ വ്യത്യാസം വരുത്തുക" : 
          "Make a difference in the lives of our students through your generous contributions"
        }
        backgroundImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230A3D91' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
      />
      
      <section className="py-12 md:py-16 scroll-animate opacity-0 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block mb-4">
                <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
                {isMalayalam ? "നിങ്ങളുടെ പിന്തുണ വ്യത്യാസമുണ്ടാക്കുന്നു" : "Your Support Makes a Difference"}
              </h2>
            </div>
            
            <div className="bg-dqaa-50 p-6 md:p-10 rounded-lg mb-12">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-display text-dqaa-500 mb-2">
                  {isMalayalam ? "DQAA-ൽ സ്പോൺസർഷിപ്പ് അവസരങ്ങൾ" : "SPONSORSHIP OPPORTUNITIES AT DQAA"}
                </h3>
                <p className="text-base md:text-lg font-semibold text-gold-400 mb-4">
                  {isMalayalam 
                    ? "📢 DQAA-ൽ ഒരു വിദ്യാർത്ഥിയെ സ്പോൺസർ ചെയ്യുക, അവർ പഠിക്കുന്ന ഖുർആന്റെ ഓരോ വചനത്തിനും പ്രതിഫലം നേടുക!"
                    : "📢 SPONSOR A STUDENT AT DQAA AND GET REWARDED FOR EVERY VERSE OF THE QURAN THEY LEARN!"}
                </p>
                
                <div className="hadith-text text-base md:text-lg my-4 p-4 bg-white/70 rounded-lg">
                  قال رسول الله ﷺ: "كُلُّ امْرِئٍ فِي ظِلِّ صَدَقَتِهِ حَتَّى يُقْضَى بَيْنَ النَّاسِ." (رواه الإمام أحمد)
                </div>
                
                <p className="italic text-dqaa-600 text-sm md:text-base">
                  {isMalayalam 
                    ? "അല്ലാഹുവിന്റെ ദൂതൻ ﷺ പറഞ്ഞു: 'ജനങ്ങൾക്കിടയിൽ വിധി നടപ്പാക്കുന്നതുവരെ ഓരോ വ്യക്തിയും അവന്റെ ദാനധർമ്മത്തിന്റെ തണലിലായിരിക്കും.' (ഇമാം അഹ്മദ് റിപ്പോർട്ട് ചെയ്തത്)" 
                    : "The Messenger of Allah ﷺ said: \"Every person will be in the shade of their charity until judgment is rendered among the people.\" (Narrated by Imam Ahmad)"}
                </p>
              </div>
              
              <div className="mt-10 scroll-animate opacity-0 transition-all duration-1000">
                <h3 className="text-xl md:text-2xl font-display text-center text-dqaa-500 mb-6">
                  {isMalayalam ? "എന്തുകൊണ്ട് DQAA-യ്ക്ക് സംഭാവന നൽകണം?" : "WHY DONATE TO DQAA?"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start">
                      <div className="bg-gold-50 p-3 rounded-full mr-4 mt-1">
                        <span className="text-gold-500 text-lg">📖</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dqaa-500 text-lg">
                          {isMalayalam ? "ഫലപ്രദമായ വിദ്യാഭ്യാസം" : "Impactful Education"}
                        </h4>
                        <p className="text-gray-600">
                          {isMalayalam 
                            ? "നിങ്ങളുടെ സംഭാവന നേരിട്ട് ഞങ്ങളുടെ വിദ്യാർത്ഥികളെ സ്വാധീനിക്കുന്നു, അവരെ ഖുർആൻ പഠിക്കാനും മനഃപാഠമാക്കാനും, ഇസ്ലാമിക വിദ്യാഭ്യാസ ക്ലാസുകളിൽ പങ്കെടുക്കാനും, അക്കാദമിക്‌സിൽ മികവ് കാണിക്കാനും പ്രാപ്തമാക്കുന്നു."
                            : "Your donation directly impacts our students, enabling them to learn and memorize the Qur'an, attend Islamic education classes, and excel academically."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start">
                      <div className="bg-gold-50 p-3 rounded-full mr-4 mt-1">
                        <span className="text-gold-500 text-lg">💡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dqaa-500 text-lg">
                          {isMalayalam ? "ഭാവിയെ ശക്തിപ്പെടുത്തുന്നു" : "Empowering Futures"}
                        </h4>
                        <p className="text-gray-600">
                          {isMalayalam 
                            ? "ഒരു വിദ്യാർത്ഥിയെ സ്പോൺസർ ചെയ്ത് ദാരിദ്ര്യത്തിന്റെ ചക്രം തകർക്കാനും, അവരുടെ സ്വപ്നങ്ങൾ നേടാനും, ഭാവി നേതാക്കളാകാനും അവരെ പ്രാപ്തരാക്കുക."
                            : "Sponsor a student and empower them to break the cycle of poverty, achieve their dreams, and become future leaders."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start">
                      <div className="bg-gold-50 p-3 rounded-full mr-4 mt-1">
                        <span className="text-gold-500 text-lg">🌍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dqaa-500 text-lg">
                          {isMalayalam ? "സമൂഹ വികസനം" : "Community Development"}
                        </h4>
                        <p className="text-gray-600">
                          {isMalayalam 
                            ? "നിങ്ങളുടെ സംഭാവന സാമൂഹിക ഐക്യം, അനുകമ്പ, സേവനം എന്നിവ വളർത്തുന്നു, കൂടുതൽ ശക്തമായ, സമൃദ്ധമായ ഒരു സമൂഹത്തിന്റെ വികസനത്തിന് സംഭാവന നൽകുന്നു."
                            : "Your contribution fosters social cohesion, compassion, and service, contributing to the development of a stronger, more prosperous society."}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start">
                      <div className="bg-gold-50 p-3 rounded-full mr-4 mt-1">
                        <span className="text-gold-500 text-lg">📜</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dqaa-500 text-lg">
                          {isMalayalam ? "നികുതി ഇളവ്" : "Tax Exemption"}
                        </h4>
                        <p className="text-gray-600">
                          {isMalayalam 
                            ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലേക്കുള്ള സംഭാവനകൾ ഇൻകം ടാക്സ് ആക്റ്റിലെ 80-G വകുപ്പ് പ്രകാരം നികുതി കുറയ്ക്കാവുന്നതാണ്, നിങ്ങളുടെ സംഭാവന തുകയുടെ ഒരു ഭാഗം നികുതി യോഗ്യമായ വരുമാനത്തിൽ നിന്ന് കുറയ്ക്കാൻ നിങ്ങളെ അനുവദിക്കുന്നു."
                            : "Donations to Darul Quran Abdulla Academy are tax-deductible under Section 80-G of the Income Tax Act, allowing you to deduct a portion of your donation amount from your taxable income."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center scroll-animate opacity-0 transition-all duration-1000">
                <RazorpayDonateButton className="max-w-md mx-auto" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto scroll-animate opacity-0 transition-all duration-1000">
            <Card className="border-none shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-dqaa-500 text-white p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{isMalayalam ? "ഒറ്റത്തവണ" : "One-Time"}</h3>
                <p className="opacity-80 text-sm">{isMalayalam ? "ഞങ്ങളുടെ ദൗത്യത്തെ പിന്തുണയ്ക്കുക" : "Support our mission"}</p>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-dqaa-500">₹5000</span>
                    <span className="text-gray-500 text-sm ml-1">{isMalayalam ? "അല്ലെങ്കിൽ ഏത് തുകയും" : "or any amount"}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dqaa-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "ദിവസേനയുള്ള പ്രവർത്തനങ്ങളെ പിന്തുണയ്ക്കുക" : "Support daily operations"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dqaa-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "വിദ്യാഭ്യാസ ഉപകരണങ്ങൾക്ക് സംഭാവന ചെയ്യുക" : "Contribute to educational materials"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dqaa-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "സൗകര്യങ്ങളുടെ പരിപാലനത്തിന് സഹായിക്കുക" : "Help with facility maintenance"}</span>
                  </li>
                </ul>
                <RazorpayDonateButton />
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 right-0">
                <div className="bg-gold-400 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-1/4 -translate-y-1/2">
                  {isMalayalam ? "ജനപ്രിയം" : "Popular"}
                </div>
              </div>
              <div className="bg-gold-400 text-white p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{isMalayalam ? "പ്രതിമാസം" : "Monthly"}</h3>
                <p className="opacity-80 text-sm">{isMalayalam ? "തുടർച്ചയായ പിന്തുണ" : "Ongoing support"}</p>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gold-400">₹1000</span>
                    <span className="text-gray-500 text-sm ml-1">{isMalayalam ? "പ്രതിമാസം" : "monthly"}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "ഒറ്റത്തവണ സംഭാവനയുടെ എല്ലാ ആനുകൂല്യങ്ങളും" : "All benefits of one-time donation"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "സ്കോളർഷിപ്പ് പ്രോഗ്രാമുകളെ പിന്തുണയ്ക്കുക" : "Support scholarship programs"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "സാങ്കേതികവിദ്യാ മെച്ചപ്പെടുത്തലുകൾക്ക് ഫണ്ട് സഹായിക്കുക" : "Help fund technology upgrades"}</span>
                  </li>
                </ul>
                <RazorpayDonateButton />
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-dqaa-600 text-white p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">{isMalayalam ? "സ്പോൺസർഷിപ്പ്" : "Sponsorship"}</h3>
                <p className="opacity-80 text-sm">{isMalayalam ? "ഒരു വിദ്യാർത്ഥിയെ പിന്തുണയ്ക്കുക" : "Support a student"}</p>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-dqaa-600">₹25,000</span>
                    <span className="text-gray-500 text-sm ml-1">{isMalayalam ? "പ്രതിവർഷം" : "per year"}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dqaa-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "ഒരു വിദ്യാർത്ഥിയുടെ വിദ്യാഭ്യാസം സ്പോൺസർ ചെയ്യുക" : "Sponsor a student's education"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dqaa-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "വിദ്യാർത്ഥിയുടെ പുരോഗതിയെക്കുറിച്ചുള്ള അപ്‌ഡേറ്റുകൾ സ്വീകരിക്കുക" : "Receive updates on student progress"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-dqaa-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{isMalayalam ? "വാർഷിക റിപ്പോർട്ടിൽ അംഗീകാരം" : "Recognition in annual report"}</span>
                  </li>
                </ul>
                <RazorpayDonateButton />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-50 scroll-animate opacity-0 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6">
                  {isMalayalam ? "നിങ്ങളുടെ സംഭാവനയുടെ സ്വാധീനം" : "The Impact of Your Donation"}
                </h2>
                <p className="text-gray-600 mb-6">
                  {isMalayalam 
                    ? "നിങ്ങളുടെ ഉദാരമായ സംഭാവനകൾ ഞങ്ങളുടെ വിദ്യാർത്ഥികളെയും സമൂഹത്തെയും നിരവധി രീതികളിൽ നേരിട്ട് സ്വാധീനിക്കുന്നു:" 
                    : "Your generous contributions directly impact our students and community in numerous ways:"}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-dqaa-50 p-3 rounded-full mr-4 mt-1">
                      <Heart className="h-5 w-5 text-dqaa-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {isMalayalam ? "സ്കോളർഷിപ്പ് പിന്തുണ" : "Scholarship Support"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam 
                          ? "നിങ്ങളുടെ സംഭാവനകൾ മറ്റ് വിധത്തിൽ ഗുണനിലവാരമുള്ള ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിന് പ്രവേശനമില്ലാത്ത അർഹരായ വിദ്യാർത്ഥികൾക്ക് സ്കോളർഷിപ്പുകൾ നൽകാൻ സഹായിക്കുന്നു."
                          : "Your donations help provide scholarships to deserving students who otherwise might not have access to quality Islamic education."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dqaa-50 p-3 rounded-full mr-4 mt-1">
                      <Heart className="h-5 w-5 text-dqaa-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {isMalayalam ? "വിദ്യാഭ്യാസ വിഭവങ്ങൾ" : "Educational Resources"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam 
                          ? "പഠന അനുഭവം മെച്ചപ്പെടുത്തുന്ന ഏറ്റവും പുതിയ വിദ്യാഭ്യാസ ഉപകരണങ്ങൾ, സാങ്കേതികവിദ്യ, വിഭവങ്ങൾ എന്നിവ സ്വായത്തമാക്കാൻ ഫണ്ടുകൾ ഉപയോഗിക്കുന്നു."
                          : "Funds are used to acquire the latest educational materials, technology, and resources that enhance the learning experience."}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-dqaa-50 p-3 rounded-full mr-4 mt-1">
                      <Heart className="h-5 w-5 text-dqaa-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {isMalayalam ? "ക്യാമ്പസ് വികസനം" : "Campus Development"}
                      </h3>
                      <p className="text-gray-600">
                        {isMalayalam 
                          ? "ഞങ്ങളുടെ വിദ്യാർത്ഥികൾക്ക് ഒരു മികച്ച പഠന പരിസ്ഥിതി സൃഷ്ടിക്കുന്നതിന് ഞങ്ങളുടെ സൗകര്യങ്ങൾ നിലനിർത്താനും മെച്ചപ്പെടുത്താനും നിങ്ങളുടെ പിന്തുണ സഹായിക്കുന്നു."
                          : "Your support helps us maintain and improve our facilities to create an optimal learning environment for our students."}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-dqaa-500 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMalayalam ? "നികുതി ആനുകൂല്യങ്ങൾ" : "Tax Benefits"}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam 
                      ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലേക്കുള്ള എല്ലാ സംഭാവനകളും ഇൻകം ടാക്സ് ആക്റ്റിലെ 80-G വകുപ്പ് പ്രകാരം നികുതി ഇളവിന് അർഹമാണ്. നിങ്ങളുടെ സംഭാവനയ്ക്ക് ഒരു രസീത് ലഭിക്കും."
                      : "All donations to Darul Quran Abdulla Academy are tax-deductible under Section 80-G of the Income Tax Act. You will receive a receipt for your contribution."}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-gold-400 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMalayalam ? "കോർപ്പറേറ്റ് മാച്ചിംഗ്" : "Corporate Matching"}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam 
                      ? "പല തൊഴിലുടമകളും അവരുടെ ജീവനക്കാർ നടത്തുന്ന ചാരിറ്റബിൾ സംഭാവനകൾ പൊരുത്തപ്പെടുത്തുന്നു. നിങ്ങളുടെ സ്വാധീനം വർധിപ്പിക്കുന്നതിന് അവർക്ക് എന്തെങ്കിലും മാച്ചിംഗ് ഗിഫ്റ്റ് പ്രോഗ്രാം ഉണ്ടോ എന്ന് നിങ്ങളുടെ കമ്പനിയുമായി പരിശോധിക്കുക."
                      : "Many employers match charitable contributions made by their employees. Check with your company to see if they have a matching gift program to multiply your impact."}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-dqaa-600 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg mb-2">
                    {isMalayalam ? "പൈതൃക നൽകൽ" : "Legacy Giving"}
                  </h3>
                  <p className="text-gray-600">
                    {isMalayalam 
                      ? "വരാൻ പോകുന്ന തലമുറകൾക്ക് പ്രയോജനം ചെയ്യുന്ന ഒരു സ്ഥായിയായ പൈതൃകം നൽകാൻ നിങ്ങളുടെ എസ്റ്റേറ്റ് പ്ലാനിംഗിൽ DQAA ഉൾപ്പെടുത്തുന്നത് പരിഗണിക്കുക."
                      : "Consider including DQAA in your estate planning to leave a lasting legacy that will benefit generations of students to come."}
                  </p>
                </div>
                
                <div className="mt-6">
                  <RazorpayDonateButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 scroll-animate opacity-0 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dqaa-500 mb-6">
              {isMalayalam ? "ഞങ്ങളുമായി ബന്ധപ്പെടുക" : "Contact Us"}
            </h2>
            <p className="text-gray-600 mb-8">
              {isMalayalam 
                ? "ഞങ്ങളുടെ സംഭാവന പ്രോഗ്രാമുകളെക്കുറിച്ച് കൂടുതൽ വിവരങ്ങൾക്ക് അല്ലെങ്കിൽ നിർദ്ദിഷ്ട സംഭാവന അവസരങ്ങളെക്കുറിച്ച് ചർച്ച ചെയ്യാൻ, ദയവായി ഞങ്ങളുടെ ഡെവലപ്മെന്റ് ഓഫീസുമായി ബന്ധപ്പെടുക:"
                : "For more information about our donation programs or to discuss specific giving opportunities, please contact our development office:"}
            </p>
            <div className="bg-dqaa-50 p-6 rounded-lg">
              <LocationDetails />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
