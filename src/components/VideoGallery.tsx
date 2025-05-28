
import { useTranslation } from "@/lib/i18n";
import FacebookVideoEmbed from "./FacebookVideoEmbed";

const VideoGallery = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const videos = [
    {
      id: "648020548009514",
      title: isMalayalam ? "അക്കാദമി ഔദ്യോഗിക വീഡിയോ" : "Academy Official Video",
      showText: true
    },
    {
      id: "153729340955278", 
      title: isMalayalam ? "അക്കാദമി പ്രോഗ്രാം ഹൈലൈറ്റുകൾ" : "Academy Program Highlights",
      showText: false
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gold-400 mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "വീഡിയോ ഗാലറി" : "Video Gallery"}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {isMalayalam 
              ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുടെ പ്രധാന പരിപാടികളുടെയും പ്രവർത്തനങ്ങളുടെയും വീഡിയോകൾ"
              : "Watch videos of key programs and activities at Darul Quran Abdulla Academy"
            }
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
          {videos.map((video, index) => (
            <FacebookVideoEmbed
              key={video.id}
              videoId={video.id}
              title={video.title}
              showText={video.showText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
