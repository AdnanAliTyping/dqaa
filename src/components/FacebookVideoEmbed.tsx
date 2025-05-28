
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n";

interface FacebookVideoEmbedProps {
  videoId: string;
  title?: string;
  showText?: boolean;
  width?: number;
  height?: number;
}

const FacebookVideoEmbed = ({ 
  videoId, 
  title, 
  showText = true, 
  width = 560, 
  height = 316 
}: FacebookVideoEmbedProps) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const embedUrl = `https://www.facebook.com/plugins/video.php?height=${height}&href=https%3A%2F%2Fwww.facebook.com%2Fdarulquranindia%2Fvideos%2F${videoId}%2F&show_text=${showText}&width=${width}&t=0`;

  return (
    <Card className="overflow-hidden">
      {title && (
        <CardHeader>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className={title ? "pt-0" : "p-0"}>
        <div className="relative w-full" style={{ paddingBottom: `${(height / width) * 100}%` }}>
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ 
              border: "none", 
              overflow: "hidden",
              position: "absolute",
              top: 0,
              left: 0
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title={title || "Facebook Video"}
            loading="lazy"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default FacebookVideoEmbed;
