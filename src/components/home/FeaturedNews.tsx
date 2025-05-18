
import { CalendarIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

const newsItems = [
  {
    id: "hifz-shariah-exam-toppers",
    title: "DQAA Students Win National Quran Competition",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d",
    excerpt: "Our students secured first place in the National Quran Competition held in Delhi last week.",
    badge: "New",
    badgeColor: "bg-red-500"
  },
  {
    id: "ai-learning-lab",
    title: "New AI Learning Lab Opening Ceremony",
    date: "April 23, 2025",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a",
    excerpt: "DQAA partners with AI8TY Technologies to launch a state-of-the-art AI learning laboratory.",
    badge: "Event",
    badgeColor: "bg-blue-500"
  },
  {
    id: "islamic-conference-2025",
    title: "Annual Islamic Conference 2025",
    date: "June 5, 2025",
    image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d",
    excerpt: "Join us for our Annual Islamic Conference featuring renowned scholars from around the world.",
    badge: "Upcoming",
    badgeColor: "bg-green-500"
  },
];

const FeaturedNews = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
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
          {newsItems.map((item) => (
            <Card key={item.id} className="mobile-card overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow card-hover">
              <div className="h-40 overflow-hidden relative card-image-container">
                {item.badge && (
                  <span className={`absolute top-2 right-2 ${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                    {item.badge}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 card-image-zoom"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-dqaa-700 line-clamp-2 hover:text-dqaa-500 transition-colors">
                  <Link to={`/news/${item.id}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2 text-sm">{item.excerpt}</p>
                <Link 
                  to={`/news/${item.id}`} 
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
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow card-hover">
              <div className="h-48 overflow-hidden relative card-image-container">
                {item.badge && (
                  <span className={`absolute top-2 right-2 ${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                    {item.badge}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 card-image-zoom"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-dqaa-700 line-clamp-2 hover:text-dqaa-500 transition-colors">
                  <Link to={`/news/${item.id}`}>{item.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
                <Link 
                  to={`/news/${item.id}`} 
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
