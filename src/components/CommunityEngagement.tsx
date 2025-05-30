
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, User, Calendar, Users, Star } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface TestimonialData {
  id: string;
  name: string;
  nameMl: string;
  role: string;
  roleMl: string;
  content: string;
  contentMl: string;
  rating: number;
  date: string;
  image?: string;
  verified: boolean;
  likes: number;
  replies: number;
}

const CommunityEngagement = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    role: "",
    content: "",
    rating: 5
  });
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const testimonials: TestimonialData[] = [
    {
      id: "1",
      name: "Aisha Rahman",
      nameMl: "ആയിഷ റഹ്മാൻ",
      role: "Parent",
      roleMl: "രക്ഷിതാവ്",
      content: "DQAA has transformed my child's understanding of both Islamic values and modern education. The balanced approach is exceptional.",
      contentMl: "DQAA എന്റെ കുട്ടിയുടെ ഇസ്ലാമിക് മൂല്യങ്ങളുടെയും ആധുനിക വിദ്യാഭ്യാസത്തിന്റെയും ധാരണയെ മാറ്റിമറിച്ചു. സന്തുലിതമായ സമീപനം അസാധാരണമാണ്.",
      rating: 5,
      date: "2025-05-20",
      image: "/lovable-uploads/d9397387-67b8-47f6-856b-b0559a89e20a.png",
      verified: true,
      likes: 24,
      replies: 3
    },
    {
      id: "2",
      name: "Mohammed Ali",
      nameMl: "മുഹമ്മദ് അലി",
      role: "Alumni",
      roleMl: "പൂർവ്വ വിദ്യാർത്ഥി",
      content: "The Hifz program at DQAA gave me a strong foundation in Quranic studies. Now I'm pursuing higher Islamic studies with confidence.",
      contentMl: "DQAA-യിലെ ഹിഫ്സ് പ്രോഗ്രാം എനിക്ക് ഖുർആനിക് പഠനത്തിൽ ശക്തമായ അടിത്തറ നൽകി. ഇപ്പോൾ ഞാൻ ആത്മവിശ്വാസത്തോടെ ഉന്നത ഇസ്ലാമിക് പഠനം തുടരുകയാണ്.",
      rating: 5,
      date: "2025-05-18",
      verified: true,
      likes: 18,
      replies: 7
    },
    {
      id: "3",
      name: "Fatima Khatun",
      nameMl: "ഫാത്തിമ ഖാതൂൻ",
      role: "Current Student",
      roleMl: "നിലവിലെ വിദ്യാർത്ഥിനി",
      content: "The faculty here are not just teachers, they are mentors who guide us in every aspect of life. The campus facilities are excellent.",
      contentMl: "ഇവിടെയുള്ള ഫാക്കൽറ്റി വെറും അധ്യാപകരല്ല, ജീവിതത്തിന്റെ എല്ലാ മേഖലകളിലും ഞങ്ങളെ നയിക്കുന്ന ഉപദേശകരാണ്. കാമ്പസ് സൗകര്യങ്ങൾ മികച്ചതാണ്.",
      rating: 4,
      date: "2025-05-15",
      verified: true,
      likes: 12,
      replies: 2
    }
  ];

  const filters = [
    { id: "all", label: isMalayalam ? "എല്ലാം" : "All" },
    { id: "parents", label: isMalayalam ? "രക്ഷിതാക്കൾ" : "Parents" },
    { id: "students", label: isMalayalam ? "വിദ്യാർത്ഥികൾ" : "Students" },
    { id: "alumni", label: isMalayalam ? "പൂർവ്വ വിദ്യാർത്ഥികൾ" : "Alumni" }
  ];

  const filteredTestimonials = selectedFilter === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => {
        const role = testimonial.role.toLowerCase();
        return (
          (selectedFilter === "parents" && role.includes("parent")) ||
          (selectedFilter === "students" && role.includes("student")) ||
          (selectedFilter === "alumni" && role.includes("alumni"))
        );
      });

  const handleSubmitTestimonial = () => {
    if (newTestimonial.name && newTestimonial.content) {
      // Here you would normally submit to a backend
      console.log("New testimonial:", newTestimonial);
      setNewTestimonial({ name: "", role: "", content: "", rating: 5 });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "കമ്മ്യൂണിറ്റി അഭിപ്രായങ്ങൾ" : "Community Testimonials"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isMalayalam ? 
              "ഞങ്ങളുടെ കമ്മ്യൂണിറ്റിയിൽ നിന്നുള്ള യഥാർത്ഥ അനുഭവങ്ങളും അഭിപ്രായങ്ങളും കേൾക്കുക" :
              "Hear authentic experiences and feedback from our community"
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className={selectedFilter === filter.id ? "bg-dqaa-500" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonials Feed */}
          <div className="lg:col-span-2 space-y-6">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={isMalayalam ? testimonial.nameMl : testimonial.name} />
                        <AvatarFallback>
                          {(isMalayalam ? testimonial.nameMl : testimonial.name).charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-dqaa-500">
                            {isMalayalam ? testimonial.nameMl : testimonial.name}
                          </h3>
                          {testimonial.verified && (
                            <Badge variant="secondary" className="text-xs">
                              {isMalayalam ? "സ്ഥിരീകരിച്ചത്" : "Verified"}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          {isMalayalam ? testimonial.roleMl : testimonial.role}
                        </p>
                        <div className="flex items-center space-x-1 mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(testimonial.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{isMalayalam ? testimonial.contentMl : testimonial.content}"
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{testimonial.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{testimonial.replies}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span className="text-sm">{isMalayalam ? "പങ്കിടുക" : "Share"}</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Testimonial Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  {isMalayalam ? "നിങ്ങളുടെ അനുഭവം പങ്കിടുക" : "Share Your Experience"}
                </CardTitle>
                <CardDescription>
                  {isMalayalam ? 
                    "ഞങ്ങളുടെ കമ്മ്യൂണിറ്റിയുമായി നിങ്ങളുടെ അനുഭവം പങ്കിടുക" :
                    "Share your experience with our community"
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder={isMalayalam ? "നിങ്ങളുടെ പേര്" : "Your Name"}
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                />
                <Input
                  placeholder={isMalayalam ? "നിങ്ങളുടെ പദവി (രക്ഷിതാവ്, വിദ്യാർത്ഥി, മുതലായവ)" : "Your Role (Parent, Student, etc.)"}
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                />
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {isMalayalam ? "റേറ്റിംഗ്" : "Rating"}
                  </label>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setNewTestimonial({ ...newTestimonial, rating: i + 1 })}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-5 w-5 ${
                            i < newTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  placeholder={isMalayalam ? "നിങ്ങളുടെ അനുഭവം വിവരിക്കുക..." : "Describe your experience..."}
                  rows={4}
                  value={newTestimonial.content}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, content: e.target.value })}
                />
                <Button onClick={handleSubmitTestimonial} className="w-full bg-dqaa-500 hover:bg-dqaa-600">
                  {isMalayalam ? "അഭിപ്രായം സമർപ്പിക്കുക" : "Submit Testimonial"}
                </Button>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {isMalayalam ? "കമ്മ്യൂണിറ്റി സ്ഥിതിവിവരക്കണക്കുകൾ" : "Community Stats"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {isMalayalam ? "മൊത്തം അഭിപ്രായങ്ങൾ" : "Total Testimonials"}
                  </span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {isMalayalam ? "ശരാശരി റേറ്റിംഗ്" : "Average Rating"}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold">4.8</span>
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {isMalayalam ? "പൂർവ്വ വിദ്യാർത്ഥികൾ" : "Alumni Reviews"}
                  </span>
                  <span className="font-semibold">48</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {isMalayalam ? "രക്ഷിതാക്കളുടെ അഭിപ്രായങ്ങൾ" : "Parent Reviews"}
                  </span>
                  <span className="font-semibold">72</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagement;
