import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, BookOpen, Award, Heart, Users, School, Facebook, Instagram, Youtube } from "lucide-react";
import ChairmanProfile from "@/components/ChairmanProfile";

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="About DQAA" 
        subtitle="Learn about our mission, vision, and the people who make DQAA exceptional"
        backgroundImage="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
      />

      <section className="py-16" id="mission">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 mb-6">
                At Darul Quran Abdulla Academy, our mission is to provide a comprehensive educational 
                environment that nurtures intellectual growth, spiritual development, and moral 
                excellence. We aim to prepare students who are grounded in Islamic values while 
                excelling in contemporary academic fields.
              </p>
              <p className="text-gray-600 mb-6">
                Our vision is to be a leading educational institution that produces graduates who 
                are hafiz of the Quran, proficient in multiple languages, well-versed in Islamic 
                sciences, and equipped with modern knowledge and skills to make positive contributions 
                to society.
              </p>
              <div className="bg-dqaa-50 p-6 rounded-lg border-l-4 border-dqaa-500">
                <h3 className="font-semibold text-dqaa-700 mb-2">Our Guiding Principle</h3>
                <p className="italic text-dqaa-600">
                  "To cultivate a generation that embodies the Quranic teachings in thought and action, 
                  while embracing the advancements of the modern world with wisdom and discernment."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754" 
                alt="DQAA Campus" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="text-3xl font-bold text-dqaa-500 mb-2">Since 2014</div>
                <p className="text-gray-600">
                  Providing excellence in Islamic and academic education for nearly a decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="philosophy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
              Our Educational Philosophy
            </h2>
            <p className="text-gray-600">
              We believe in a holistic approach to education that addresses all dimensions 
              of human development - intellectual, spiritual, moral, physical, and social.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-dqaa-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Integrated Curriculum</h3>
                <p className="text-gray-600">
                  We seamlessly integrate Islamic education with modern academic subjects, 
                  ensuring students excel in both domains without compromise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-dqaa-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence in All Pursuits</h3>
                <p className="text-gray-600">
                  We encourage excellence in all endeavors, whether memorizing the Quran, 
                  mastering languages, or exploring scientific concepts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-dqaa-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Character Development</h3>
                <p className="text-gray-600">
                  We emphasize the development of Islamic character, ethics, and values 
                  as the foundation for all learning and achievement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-dqaa-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
                <p className="text-gray-600">
                  We foster a caring, inclusive community where students support each 
                  other's growth and learning in a collaborative environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <School className="h-12 w-12 text-dqaa-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Perspective</h3>
                <p className="text-gray-600">
                  We prepare students to engage confidently with the global community 
                  through language proficiency and cultural understanding.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-12 w-12 text-dqaa-500 mb-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Technological Fluency</h3>
                <p className="text-gray-600">
                  We embrace technology as an essential tool for learning and future success, 
                  integrating digital literacy across our curriculum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16" id="values">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
              Core Values
            </h2>
            <p className="text-gray-600">
              Our values form the foundation of everything we do at Darul Quran Abdulla Academy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-4">
              <div className="bg-dqaa-50 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-dqaa-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Taqwa (God-consciousness)</h3>
                <p className="text-gray-600">
                  We foster awareness of Allah's presence in all aspects of life, encouraging 
                  students to act with sincerity and accountability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4">
              <div className="bg-dqaa-50 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-dqaa-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ihsan (Excellence)</h3>
                <p className="text-gray-600">
                  We strive for excellence in all endeavors, whether academic, spiritual, 
                  or extracurricular, encouraging students to give their best.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4">
              <div className="bg-dqaa-50 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-dqaa-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Adab (Respect & Etiquette)</h3>
                <p className="text-gray-600">
                  We emphasize proper Islamic conduct and respect for others, teaching students 
                  the importance of good character in all interactions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4">
              <div className="bg-dqaa-50 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-dqaa-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ilm (Knowledge)</h3>
                <p className="text-gray-600">
                  We value the pursuit of beneficial knowledge, encouraging lifelong learning 
                  and intellectual curiosity in all subjects.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4">
              <div className="bg-dqaa-50 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-dqaa-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ta'awun (Cooperation)</h3>
                <p className="text-gray-600">
                  We foster cooperation and mutual support among students, faculty, and the broader 
                  community, working together toward common goals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-4">
              <div className="bg-dqaa-50 p-3 rounded-full mr-4">
                <Check className="h-6 w-6 text-dqaa-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Istiqama (Consistency)</h3>
                <p className="text-gray-600">
                  We encourage steadfastness in faith and practice, helping students develop 
                  discipline and persistence in all their endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="history">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4 text-center">
              Our History
            </h2>
            
            <div className="space-y-8 mt-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-lg font-bold text-gold-400">2014</div>
                </div>
                <div className="border-l-2 border-dqaa-300 pl-6 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Founding of DQAA</h3>
                  <p className="text-gray-600">
                    Darul Quran Abdulla Academy was established by Dr. PT Abdul Rahman with the vision 
                    of creating an institution that combines Quranic memorization with modern education.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-lg font-bold text-gold-400">2015</div>
                </div>
                <div className="border-l-2 border-dqaa-300 pl-6 pb-8">
                  <h3 className="text-xl font-semibold mb-2">First Graduating Batch</h3>
                  <p className="text-gray-600">
                    The academy celebrated its first batch of students who completed the initial 
                    year of the integrated Hifz program with academic excellence.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-lg font-bold text-gold-400">2017</div>
                </div>
                <div className="border-l-2 border-dqaa-300 pl-6 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Campus Expansion</h3>
                  <p className="text-gray-600">
                    DQAA expanded its campus to include new academic buildings, a larger library, 
                    and improved residential facilities to accommodate growing enrollment.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-lg font-bold text-gold-400">2019</div>
                </div>
                <div className="border-l-2 border-dqaa-300 pl-6 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Introduction of Bayanul Quran Diploma</h3>
                  <p className="text-gray-600">
                    The academy launched its comprehensive Bayanul Quran Diploma Course, 
                    focusing on deep understanding of the Quran with English as the medium of instruction.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-lg font-bold text-gold-400">2021</div>
                </div>
                <div className="border-l-2 border-dqaa-300 pl-6 pb-8">
                  <h3 className="text-xl font-semibold mb-2">Technology Integration Partnership</h3>
                  <p className="text-gray-600">
                    DQAA partnered with AI8TY Technologies to integrate artificial intelligence 
                    and modern technology into its curriculum, establishing state-of-the-art computer labs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-lg font-bold text-gold-400">2023</div>
                </div>
                <div className="border-l-2 border-dqaa-300 pl-6">
                  <h3 className="text-xl font-semibold mb-2">DQAA Today</h3>
                  <p className="text-gray-600">
                    Today, DQAA stands as a premier institution known for its unique approach to 
                    Islamic education, academic excellence, and technological innovation, serving 
                    students from diverse backgrounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="leadership">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Leadership
          </h2>
          
          <Tabs defaultValue="chairman" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="chairman">Chairman's Message</TabsTrigger>
              <TabsTrigger value="board">Board of Directors</TabsTrigger>
              <TabsTrigger value="admin">Administration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chairman">
              <ChairmanProfile />
            </TabsContent>
            
            <TabsContent value="board">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="border-none shadow-md">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                        <img 
                          src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'men' : 'women'}/${item + 10}.jpg`} 
                          alt="Board Member" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-dqaa-700">Board Member Name</h3>
                      <p className="text-gray-500 text-sm mb-3">Position on Board</p>
                      <p className="text-gray-600 text-sm">
                        Brief description of the board member's background, expertise, and contribution to DQAA.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="admin">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="border-none shadow-md">
                    <CardContent className="p-6 text-center">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                        <img 
                          src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`} 
                          alt="Administrative Staff" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-dqaa-700">Administrator Name</h3>
                      <p className="text-gray-500 text-sm mb-3">Administrative Role</p>
                      <p className="text-gray-600 text-sm">
                        Brief description of the administrator's responsibilities and experience at DQAA.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="faculty">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
              Faculty & Staff
            </h2>
            <p className="text-gray-600">
              Our dedicated educators and support staff bring expertise, passion, and commitment 
              to their roles at Darul Quran Abdulla Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="text-center">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img 
                    src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'men' : 'women'}/${item + 30}.jpg`} 
                    alt="Faculty Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-dqaa-700">Faculty Name</h3>
                <p className="text-gray-500 text-sm mb-2">Subject / Department</p>
                <p className="text-gray-600 text-sm">
                  Brief qualification and specialization details.
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="text-dqaa-500 font-medium hover:underline">
              View All Faculty & Staff
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
