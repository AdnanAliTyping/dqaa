
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface SocialPost {
  id: string;
  platform: "facebook" | "instagram";
  link: string;
  previewImage: string;
  title: string;
  description: string;
}

const SocialMediaFeeds = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  
  const socialPosts: SocialPost[] = [
    {
      id: "1",
      platform: "facebook",
      link: "https://www.facebook.com/story.php?story_fbid=1107965078014612&id=100064033903639",
      previewImage: "/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      title: isMalayalam ? "10-ാം വാർഷികം" : "10th Anniversary Celebration",
      description: isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുടെ 10-ാം വാർഷികം ആഘോഷിക്കുന്നു." : "Celebrating a decade of excellence at Darul Quran Abdulla Academy."
    },
    {
      id: "2",
      platform: "facebook",
      link: "https://www.facebook.com/photo/?fbid=1109069874570799&set=a.354657160012078",
      previewImage: "/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      title: isMalayalam ? "വാർഷിക പരീക്ഷാ ഫലം" : "Annual Exam Results",
      description: isMalayalam ? "2025 വാർഷിക പരീക്ഷയിൽ മികച്ച പ്രകടനം കാഴ്ചവെച്ച വിദ്യാർത്ഥികൾക്ക് അഭിനന്ദനങ്ങൾ." : "Congratulations to all our students for excellent performance in the 2025 annual examinations."
    },
    {
      id: "3",
      platform: "facebook",
      link: "https://www.facebook.com/darulquranindia",
      previewImage: "/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      title: isMalayalam ? "പ്രവേശന അറിയിപ്പ്" : "Admission Notice",
      description: isMalayalam ? "2025-26 അക്കാദമിക് വർഷത്തേക്കുള്ള പ്രവേശനം ആരംഭിച്ചിരിക്കുന്നു. ഇപ്പോൾ അപേക്ഷിക്കുക." : "Admissions for the 2025-26 academic year are now open. Apply today."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dqaa-900 font-display mb-2">
              {isMalayalam ? "സോഷ്യൽ മീഡിയയിൽ" : "Social Media Highlights"}
            </h2>
            <p className="text-gray-600">
              {isMalayalam ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയെ ഫേസ്ബുക്കിലും ഇൻസ്റ്റഗ്രാമിലും പിന്തുടരൂ" : 
              "Follow Darul Quran Abdulla Academy on Facebook and Instagram"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {socialPosts.map((post) => (
              <Card key={post.id} className="border shadow-sm hover:shadow-md transition-shadow duration-300">
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={post.previewImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm">
                      {post.platform === "facebook" ? (
                        <Facebook className="h-5 w-5 text-blue-600" />
                      ) : (
                        <Instagram className="h-5 w-5 text-pink-600" />
                      )}
                    </div>
                  </div>
                </a>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{post.description}</CardDescription>
                  <Button variant="ghost" size="sm" asChild className="mt-2 px-0 text-dqaa-500">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      {isMalayalam ? "പോസ്റ്റ് കാണുക" : "View Post"} →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="flex items-center" asChild>
              <a href="https://www.facebook.com/darulquranindia" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" /> {isMalayalam ? "ഫേസ്ബുക്കിൽ പിന്തുടരുക" : "Follow on Facebook"}
              </a>
            </Button>
            <Button variant="outline" className="flex items-center" asChild>
              <a href="https://instagram.com/darulquranindia" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> {isMalayalam ? "ഇൻസ്റ്റാഗ്രാമിൽ പിന്തുടരുക" : "Follow on Instagram"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFeeds;
