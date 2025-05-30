
import Layout from "@/components/Layout";
import SEOHead from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import OptimizedImage from "@/components/OptimizedImage";

const FacultyPage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. PT Abdul Rahman",
      nameAr: "الدكتور ع ت عبد الرحمن",
      nameMl: "ഡോ. പി ടി അബ്ദുൽ റഹ്മാൻ",
      position: "Chairman & Principal",
      positionMl: "ചെയർമാൻ & പ്രിൻസിപ്പാൾ",
      qualifications: ["PhD in Islamic Studies", "Masters in Arabic Literature"],
      qualificationsMl: ["ഇസ്ലാമിക് പഠനത്തിൽ പിഎച്ച്ഡി", "അറബി സാഹിത്യത്തിൽ മാസ്റ്റേഴ്സ്"],
      specialization: "Quranic Studies & Islamic Jurisprudence",
      specializationMl: "ഖുർആനിക് പഠനങ്ങളും ഇസ്ലാമിക് നിയമശാസ്ത്രവും",
      experience: "25+ years",
      image: "/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      bio: "A distinguished scholar with over 25 years of experience in Islamic education and Quranic studies.",
      bioMl: "ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തിലും ഖുർആനിക് പഠനങ്ങളിലും 25 വർഷത്തിലധികം പരിചയമുള്ള ഒരു വിശിഷ്ട പണ്ഡിതൻ.",
      subjects: ["Tafseer", "Hadith", "Fiqh", "Arabic Grammar"]
    },
    {
      id: 2,
      name: "Ustadh Muhammad Ali",
      nameAr: "الأستاذ محمد علي",
      nameMl: "ഉസ്താദ് മുഹമ്മദ് അലി",
      position: "Head of Hifz Department",
      positionMl: "ഹിഫ്സ് വിഭാഗം തലവൻ",
      qualifications: ["Hafiz-e-Quran", "Masters in Qira'at"],
      qualificationsMl: ["ഹാഫിസുൽ ഖുർആൻ", "ഖിറാഅത്തിൽ മാസ്റ്റേഴ്സ്"],
      specialization: "Quran Memorization & Recitation",
      specializationMl: "ഖുർആൻ മുഖസ്ഥീകരണവും പാരായണവും",
      experience: "15+ years",
      image: "/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      bio: "Expert in Quranic memorization techniques with exceptional teaching methodology.",
      bioMl: "മികച്ച അധ്യാപന രീതിശാസ്ത്രത്തോടുകൂടിയ ഖുർആനിക് മുഖസ്ഥീകരണ സാങ്കേതിക വിദഗ്ധൻ.",
      subjects: ["Hifz", "Qira'at", "Tajweed"]
    },
    {
      id: 3,
      name: "Dr. Fatima Zahra",
      nameAr: "الدكتورة فاطمة الزهراء",
      nameMl: "ഡോ. ഫാത്തിമ സഹ്റ",
      position: "Head of Academic Department",
      positionMl: "അക്കാദമിക് വിഭാഗം തലവൻ",
      qualifications: ["PhD in Education", "Masters in Islamic Studies"],
      qualificationsMl: ["വിദ്യാഭ്യാസത്തിൽ പിഎച്ച്ഡി", "ഇസ്ലാമിക് പഠനത്തിൽ മാസ്റ്റേഴ്സ്"],
      specialization: "Curriculum Development & Educational Psychology",
      specializationMl: "പാഠ്യപദ്ധതി വികസനവും വിദ്യാഭ്യാസ മനഃശാസ്ത്രവും",
      experience: "20+ years",
      image: "/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      bio: "Leading educational expert specializing in integrating modern pedagogy with Islamic education.",
      bioMl: "ആധുനിക അധ്യാപനശാസ്ത്രത്തെ ഇസ്ലാമിക് വിദ്യാഭ്യാസവുമായി സമന്വയിപ്പിക്കുന്നതിൽ വിശേഷജ്ഞയായ പ്രമുഖ വിദ്യാഭ്യാസ വിദഗ്ധ.",
      subjects: ["Islamic History", "English", "Mathematics", "Science"]
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "https://www.darulquranaa.com/" },
    { name: "Faculty", url: "https://www.darulquranaa.com/faculty" }
  ];

  return (
    <Layout>
      <SEOHead
        title={isMalayalam ? "ഫാക്കൽറ്റി - ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" : "Faculty - Darul Quran Abdulla Academy"}
        description={isMalayalam ? 
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ വിദഗ്ധരായ ഫാക്കൽറ്റി അംഗങ്ങളെ കണ്ടെത്തുക. ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തിലും ആധുനിക അക്കാദമിക്സിലും പ്രവീണരായ അധ്യാപകർ." :
          "Meet our distinguished faculty members at Darul Quran Abdulla Academy. Expert educators in Islamic studies and modern academics."
        }
        keywords="DQAA faculty, Islamic education teachers, Quran teachers Kerala, Hifz instructors, Islamic scholars"
        url="https://www.darulquranaa.com/faculty"
        breadcrumbs={breadcrumbs}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dqaa-900 to-dqaa-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                {isMalayalam ? "നമ്മുടെ ഫാക്കൽറ്റി" : "Our Faculty"}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {isMalayalam ? 
                  "ഇസ്ലാമിക് വിജ്ഞാനത്തിലും ആധുനിക വിദ്യാഭ്യാസത്തിലും പ്രവീണരായ വിദഗ്ധ അധ്യാപകരുടെ നേതൃത്വത്തിൽ" :
                  "Led by distinguished educators with expertise in Islamic knowledge and modern education"
                }
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {facultyMembers.map((member) => (
                <Card key={member.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-dqaa-900 mb-1">
                      {isMalayalam ? member.nameMl : member.name}
                    </h3>
                    <div className="text-lg font-arabic text-gold-600 mb-2">
                      {member.nameAr}
                    </div>
                    <Badge variant="secondary" className="bg-dqaa-100 text-dqaa-700">
                      {isMalayalam ? member.positionMl : member.position}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-dqaa-700 mb-2">
                        {isMalayalam ? "യോഗ്യതകൾ:" : "Qualifications:"}
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {(isMalayalam ? member.qualificationsMl : member.qualifications).map((qual, index) => (
                          <li key={index}>• {qual}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dqaa-700 mb-2">
                        {isMalayalam ? "സ്പെഷ്യലൈസേഷൻ:" : "Specialization:"}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isMalayalam ? member.specializationMl : member.specialization}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dqaa-700 mb-2">
                        {isMalayalam ? "പരിചയം:" : "Experience:"}
                      </h4>
                      <p className="text-sm text-gray-600">{member.experience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dqaa-700 mb-2">
                        {isMalayalam ? "വിഷയങ്ങൾ:" : "Subjects:"}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.subjects.map((subject, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {isMalayalam ? member.bioMl : member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-dqaa-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dqaa-900 mb-4">
              {isMalayalam ? "ഞങ്ങളുടെ കുടുംബത്തിൽ ചേരുക" : "Join Our Academic Family"}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {isMalayalam ? 
                "മികച്ച വിദ്യാഭ്യാസവും ആത്മീയ വളർച്ചയും നൽകുന്ന ഞങ്ങളുടെ അനുഭവസമ്പന്നരായ അധ്യാപകരുടെ കൂടെ പഠിക്കുക" :
                "Learn with our experienced educators who provide excellence in both academic and spiritual development"
              }
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FacultyPage;
