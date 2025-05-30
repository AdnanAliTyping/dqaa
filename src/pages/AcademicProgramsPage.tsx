
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import ProgramComparison from "@/components/ProgramComparison";
import ContentMarketing from "@/components/ContentMarketing";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/lib/i18n";

const AcademicProgramsPage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" },
    { name: isMalayalam ? "അക്കാദമിക് പ്രോഗ്രാമുകൾ" : "Academic Programs", url: "https://www.darulquranaa.com/academic-programs" }
  ];

  return (
    <Layout>
      <SEOHead
        title={isMalayalam ? 
          "അക്കാദമിക് പ്രോഗ്രാമുകൾ - ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" :
          "Academic Programs - Darul Quran Abdulla Academy"
        }
        description={isMalayalam ?
          "ഹിഫ്സ്, ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ, ഷരീഅ പഠനം എന്നിവയുൾപ്പെടെയുള്ള ഞങ്ങളുടെ സമഗ്ര ഇസ്ലാമിക് വിദ്യാഭ്യാസ പ്രോഗ്രാമുകൾ കണ്ടെത്തുക." :
          "Discover our comprehensive Islamic education programs including Hifz, Bayanul Quran Diploma, and Shari'ah Studies."
        }
        keywords="Islamic education programs, Hifz program Kerala, Bayanul Quran diploma, Shari'ah studies, Quran memorization, Islamic academy courses"
        url="https://www.darulquranaa.com/academic-programs"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
      />

      <PageHeader
        title={isMalayalam ? "അക്കാദമിക് പ്രോഗ്രാമുകൾ" : "Academic Programs"}
        subtitle={isMalayalam ? 
          "നിങ്ങളുടെ ആത്മീയവും അക്കാദമിക് യാത്രയ്ക്കുള്ള സമഗ്ര പ്രോഗ്രാമുകൾ" :
          "Comprehensive programs for your spiritual and academic journey"
        }
        backgroundImage="/lovable-uploads/bc411243-163d-496a-a8c0-9941b27e5b3c.png"
      />

      <ProgramComparison />
      <ContentMarketing />
    </Layout>
  );
};

export default AcademicProgramsPage;
