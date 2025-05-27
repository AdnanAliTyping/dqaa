
import { CalendarIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";
import { getFeaturedArticles } from "@/lib/newsData";
import { Badge } from "../ui/badge";
import OptimizedImage from "../OptimizedImage";

const FeaturedNews = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const featuredArticles = getFeaturedArticles();
  
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-dqaa-500 mb-2">
              {isMalayalam ? "പുതിയ വാർത്തകളും പരിപാടികളും" : "Latest News & Events"}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {isMalayalam ? 
                "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലെ ഏറ്റവും പുതിയ വിശേഷങ്ങൾ അറിയുക" : 
                "Stay updated with the latest happenings at Darul Quran Abdulla Academy"
              }
            </p>
          </div>
          <Link to="/news" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-dqaa-500 text-dqaa-500 hover:bg-dqaa-50">
              {isMalayalam ? "എല്ലാ വാർത്തകളും കാണുക" : "View All News"}
            </Button>
          </Link>
        </div>

        {/* Mobile scroll container for small screens */}
        <div className="md:hidden mobile-scroll">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="mobile-card overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow card-hover">
              <div className="h-40 overflow-hidden relative card-image-container">
                <Badge className="absolute top-2 right-2 bg-dqaa-500 text-white text-xs z-10">
                  {article.category}
                </Badge>
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full transition-transform duration-500 card-image-zoom"
                  width={300}
                  height={160}
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-dqaa-700 line-clamp-2 hover:text-dqaa-500 transition-colors">
                  <Link to={`/news/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{article.excerpt}</p>
                <Link 
                  to={`/news/${article.slug}`} 
                  className="text-dqaa-500 font-medium hover:text-dqaa-600 flex items-center text-sm"
                >
                  {isMalayalam ? "കൂടുതൽ വായിക്കുക" : "Read More"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular grid for larger screens */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 overflow-hidden relative card-image-container">
                <Badge className="absolute top-2 right-2 bg-dqaa-500 text-white text-xs z-10">
                  {article.category}
                </Badge>
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full transition-transform duration-500 card-image-zoom"
                  width={400}
                  height={192}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dqaa-700 line-clamp-2 hover:text-dqaa-500 transition-colors">
                  <Link to={`/news/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <Link 
                  to={`/news/${article.slug}`} 
                  className="text-dqaa-500 font-medium hover:text-dqaa-600 flex items-center"
                >
                  {isMalayalam ? "കൂടുതൽ വായിക്കുക" : "Read More"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
