
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, TrophyIcon, GraduationCapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";
import { getFeaturedArticles } from "@/lib/newsData";

const Announcements = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const featuredArticles = getFeaturedArticles().slice(0, 3);
  
  const getIcon = (category: string) => {
    switch (category) {
      case 'achievements':
        return <TrophyIcon className="h-8 w-8 text-gold-400" />;
      case 'academic':
        return <GraduationCapIcon className="h-8 w-8 text-gold-400" />;
      default:
        return <CalendarIcon className="h-8 w-8 text-gold-400" />;
    }
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dqaa-900 font-display mb-2">
              {isMalayalam ? "പ്രധാന അറിയിപ്പുകൾ" : "Latest Announcements"}
            </h2>
            <p className="text-gray-600">
              {isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിൽ നിന്നുള്ള ഏറ്റവും പുതിയ വിശേഷങ്ങൾ" : 
              "Stay updated with the latest news from Darul Quran Abdulla Academy"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="bg-white border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    {getIcon(article.category)}
                    <div className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold mt-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{article.excerpt}</CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" asChild className="mt-2">
                    <Link to={`/news/${article.slug}`}>
                      {isMalayalam ? "കൂടുതൽ വായിക്കുക" : "Read More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="default" asChild>
              <Link to="/news">
                {isMalayalam ? "എല്ലാ അറിയിപ്പുകളും കാണുക" : "View All Announcements"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
