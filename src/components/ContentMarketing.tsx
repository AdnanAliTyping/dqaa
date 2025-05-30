
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Calendar, Clock, User, ArrowRight, Search, Filter } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface BlogPost {
  id: string;
  title: string;
  titleMl: string;
  excerpt: string;
  excerptMl: string;
  author: string;
  authorMl: string;
  date: string;
  readTime: string;
  readTimeMl: string;
  category: string;
  categoryMl: string;
  tags: string[];
  tagsMl: string[];
  image: string;
  featured: boolean;
}

const ContentMarketing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const blogPosts: BlogPost[] = [
    {
      id: "islamic-education-modern-world",
      title: "Islamic Education in the Modern World",
      titleMl: "ആധുനിക ലോകത്തിലെ ഇസ്ലാമിക് വിദ്യാഭ്യാസം",
      excerpt: "Exploring how Islamic educational institutions are adapting to contemporary challenges while preserving traditional values.",
      excerptMl: "പരമ്പരാഗത മൂല്യങ്ങൾ സംരക്ഷിച്ചുകൊണ്ട് ഇസ്ലാമിക് വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ എങ്ങനെ സമകാലിക വെല്ലുവിളികളുമായി പൊരുത്തപ്പെടുന്നു എന്ന് പര്യവേക്ഷണം ചെയ്യുന്നു.",
      author: "Dr. Ahmed Hassan",
      authorMl: "ഡോ. അഹ്മദ് ഹസൻ",
      date: "2025-05-25",
      readTime: "5 min read",
      readTimeMl: "5 മിനിറ്റ് വായന",
      category: "Education",
      categoryMl: "വിദ്യാഭ്യാസം",
      tags: ["Islamic Studies", "Modern Education", "Academic Excellence"],
      tagsMl: ["ഇസ്ലാമിക് പഠനം", "ആധുനിക വിദ്യാഭ്യാസം", "അക്കാദമിക് മികവ്"],
      image: "/lovable-uploads/bc411243-163d-496a-a8c0-9941b27e5b3c.png",
      featured: true
    },
    {
      id: "memorization-techniques",
      title: "Effective Quran Memorization Techniques",
      titleMl: "ഫലപ്രദമായ ഖുർആൻ സ്മരണ രീതികൾ",
      excerpt: "Discover proven methods and strategies for successful Quran memorization used at leading Islamic academies.",
      excerptMl: "പ്രമുഖ ഇസ്ലാമിക് അക്കാദമികളിൽ ഉപയോഗിക്കുന്ന വിജയകരമായ ഖുർആൻ സ്മരണത്തിനുള്ള തെളിയിക്കപ്പെട്ട രീതികളും തന്ത്രങ്ങളും കണ്ടെത്തുക.",
      author: "Hafiz Muhammad Ali",
      authorMl: "ഹാഫിസ് മുഹമ്മദ് അലി",
      date: "2025-05-20",
      readTime: "7 min read",
      readTimeMl: "7 മിനിറ്റ് വായന",
      category: "Hifz",
      categoryMl: "ഹിഫ്സ്",
      tags: ["Quran", "Memorization", "Study Tips"],
      tagsMl: ["ഖുർആൻ", "സ്മരണ", "പഠന നുറുങ്ങുകൾ"],
      image: "/lovable-uploads/4131c2be-ede7-4928-9d02-7936cb9b4804.png",
      featured: false
    },
    {
      id: "technology-islamic-education",
      title: "Technology Integration in Islamic Education",
      titleMl: "ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തിൽ സാങ്കേതികവിദ്യ സംയോജനം",
      excerpt: "How AI and digital tools are revolutionizing Islamic learning while maintaining traditional teaching methods.",
      excerptMl: "പരമ്പരാഗത അധ്യാപന രീതികൾ നിലനിർത്തിക്കൊണ്ട് AI യും ഡിജിറ്റൽ ടൂളുകളും എങ്ങനെ ഇസ്ലാമിക് പഠനത്തിൽ വിപ്ലവം സൃഷ്ടിക്കുന്നു.",
      author: "Prof. Sarah Khan",
      authorMl: "പ്രൊഫ. സാറാ ഖാൻ",
      date: "2025-05-15",
      readTime: "6 min read",
      readTimeMl: "6 മിനിറ്റ് വായന",
      category: "Technology",
      categoryMl: "സാങ്കേതികവിദ്യ",
      tags: ["AI", "Digital Learning", "EdTech"],
      tagsMl: ["AI", "ഡിജിറ്റൽ പഠനം", "എഡ്ടെക്"],
      image: "/lovable-uploads/26f01633-775e-480a-b72c-f85de1f96e1a.png",
      featured: true
    },
    {
      id: "student-life-balance",
      title: "Balancing Spiritual and Academic Life",
      titleMl: "ആത്മീയവും അക്കാദമിക് ജീവിതവും സന്തുലിതമാക്കുന്നു",
      excerpt: "Tips for students to maintain excellence in both religious studies and secular education.",
      excerptMl: "മത പഠനത്തിലും മതേതര വിദ്യാഭ്യാസത്തിലും മികവ് നിലനിർത്താൻ വിദ്യാർത്ഥികൾക്കുള്ള നുറുങ്ങുകൾ.",
      author: "Ustadh Omar Farooq",
      authorMl: "ഉസ്താദ് ഉമർ ഫാറൂഖ്",
      date: "2025-05-10",
      readTime: "4 min read",
      readTimeMl: "4 മിനിറ്റ് വായന",
      category: "Student Life",
      categoryMl: "വിദ്യാർത്ഥി ജീവിതം",
      tags: ["Balance", "Spirituality", "Academic Success"],
      tagsMl: ["സന്തുലനം", "ആത്മീയത", "അക്കാദമിക് വിജയം"],
      image: "/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png",
      featured: false
    },
    {
      id: "parent-guide",
      title: "A Parent's Guide to Islamic Education",
      titleMl: "ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തിനുള്ള രക്ഷിതാക്കളുടെ വഴികാട്ടി",
      excerpt: "Essential information for parents considering Islamic education for their children.",
      excerptMl: "തങ്ങളുടെ കുട്ടികൾക്ക് ഇസ്ലാമിക് വിദ്യാഭ്യാസം പരിഗണിക്കുന്ന രക്ഷിതാക്കൾക്കുള്ള അത്യാവശ്യ വിവരങ്ങൾ.",
      author: "Dr. Fatima Zahra",
      authorMl: "ഡോ. ഫാത്തിമ സഹ്റ",
      date: "2025-05-05",
      readTime: "8 min read",
      readTimeMl: "8 മിനിറ്റ് വായന",
      category: "Parents",
      categoryMl: "രക്ഷിതാക്കൾ",
      tags: ["Parenting", "Education Choice", "Islamic Values"],
      tagsMl: ["രക്ഷാകർതൃത്വം", "വിദ്യാഭ്യാസ തിരഞ്ഞെടുപ്പ്", "ഇസ്ലാമിക് മൂല്യങ്ങൾ"],
      image: "/lovable-uploads/d9397387-67b8-47f6-856b-b0559a89e20a.png",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: isMalayalam ? "എല്ലാം" : "All" },
    { id: "Education", name: isMalayalam ? "വിദ്യാഭ്യാസം" : "Education" },
    { id: "Hifz", name: isMalayalam ? "ഹിഫ്സ്" : "Hifz" },
    { id: "Technology", name: isMalayalam ? "സാങ്കേതികവിദ്യ" : "Technology" },
    { id: "Student Life", name: isMalayalam ? "വിദ്യാർത്ഥി ജീവിതം" : "Student Life" },
    { id: "Parents", name: isMalayalam ? "രക്ഷിതാക്കൾ" : "Parents" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      (isMalayalam ? post.titleMl : post.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
      (isMalayalam ? post.excerptMl : post.excerpt).toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "വിദ്യാഭ്യാസ ബ്ലോഗ്" : "Educational Blog"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isMalayalam ? 
              "ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തെക്കുറിച്ചുള്ള സമീപകാല ലേഖനങ്ങളും ഉൾക്കാഴ്ചകളും പര്യവേക്ഷണം ചെയ്യുക" :
              "Explore the latest articles and insights on Islamic education"
            }
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={isMalayalam ? "ലേഖനങ്ങൾ തിരയുക..." : "Search articles..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`${selectedCategory === category.id ? "bg-dqaa-500" : ""} text-xs`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-dqaa-500 mb-6">
              {isMalayalam ? "ഫീച്ചർഡ് ലേഖനങ്ങൾ" : "Featured Articles"}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={isMalayalam ? post.titleMl : post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">
                        {isMalayalam ? post.categoryMl : post.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {isMalayalam ? "ഫീച്ചർഡ്" : "Featured"}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-dqaa-500 mb-3 line-clamp-2">
                      {isMalayalam ? post.titleMl : post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {isMalayalam ? post.excerptMl : post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {isMalayalam ? post.authorMl : post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {isMalayalam ? post.readTimeMl : post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {(isMalayalam ? post.tagsMl : post.tags).slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group">
                      {isMalayalam ? "വായിക്കുക" : "Read More"}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-dqaa-500 mb-6">
              {isMalayalam ? "സമീപകാല ലേഖനങ്ങൾ" : "Recent Articles"}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={post.image}
                      alt={isMalayalam ? post.titleMl : post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {isMalayalam ? post.categoryMl : post.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-dqaa-500 mb-2 line-clamp-2">
                      {isMalayalam ? post.titleMl : post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {isMalayalam ? post.excerptMl : post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {(isMalayalam ? post.authorMl : post.author).split(' ')[0]}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {isMalayalam ? post.readTimeMl : post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      {isMalayalam ? "വായിക്കുക" : "Read More"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {isMalayalam ? 
                "നിങ്ങളുടെ തിരയലിന് അനുയോജ്യമായ ലേഖനങ്ങളൊന്നും കണ്ടെത്തിയില്ല" :
                "No articles found matching your search"
              }
            </p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="bg-dqaa-50 border-dqaa-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-dqaa-500 mb-4">
                {isMalayalam ? "വിദ്യാഭ്യാസ വാർത്താലേഖനം" : "Educational Newsletter"}
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {isMalayalam ? 
                  "ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തെക്കുറിച്ചുള്ള സമീപകാല ലേഖനങ്ങളും ഉൾക്കാഴ്ചകളും ലഭിക്കാൻ സബ്സ്ക്രൈബ് ചെയ്യുക" :
                  "Subscribe to receive the latest articles and insights on Islamic education"
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder={isMalayalam ? "നിങ്ങളുടെ ഇമെയിൽ വിലാസം" : "Your email address"}
                  className="flex-1"
                />
                <Button className="bg-dqaa-500 hover:bg-dqaa-600">
                  {isMalayalam ? "സബ്സ്ക്രൈബ് ചെയ്യുക" : "Subscribe"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketing;
