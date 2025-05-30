
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import VirtualTour from "@/components/VirtualTour";
import InteractiveCampusMap from "@/components/InteractiveCampusMap";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/lib/i18n";

const CampusFacilitiesPage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" },
    { name: isMalayalam ? "കാമ്പസ് സൗകര്യങ്ങൾ" : "Campus Facilities", url: "https://www.darulquranaa.com/campus" }
  ];

  return (
    <Layout>
      <SEOHead
        title={isMalayalam ? 
          "കാമ്പസ് സൗകര്യങ്ങൾ - ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" :
          "Campus Facilities - Darul Quran Abdulla Academy"
        }
        description={isMalayalam ?
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുടെ അത്യാധുനിക കാമ്പസ് സൗകര്യങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക. ലൈബ്രറി, ലാബുകൾ, പ്രാർത്ഥനാ ഹാൾ, ഡോർമിറ്ററികൾ എന്നിവ ഉൾപ്പെടുന്നു." :
          "Explore the state-of-the-art campus facilities at Darul Quran Abdulla Academy. Includes library, labs, prayer hall, dormitories and more."
        }
        keywords="DQAA campus, Islamic academy facilities, library, dormitory, mosque, Kerala Islamic education infrastructure"
        url="https://www.darulquranaa.com/campus"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
      />

      <PageHeader
        title={isMalayalam ? "കാമ്പസ് സൗകര്യങ്ങൾ" : "Campus Facilities"}
        subtitle={isMalayalam ? 
          "ആധുനിക സൗകര്യങ്ങളോടുകൂടിയ മനോഹരമായ കാമ്പസ്" :
          "A beautiful campus with modern facilities"
        }
        backgroundImage="/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png"
      />

      <VirtualTour />
      <InteractiveCampusMap />
    </Layout>
  );
};

export default CampusFacilitiesPage;
