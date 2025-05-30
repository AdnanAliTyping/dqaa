
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CommunityEngagement from "@/components/CommunityEngagement";
import SEOHead from "@/components/seo/SEOHead";
import { useTranslation } from "@/lib/i18n";

const CommunityPage = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const breadcrumbs = [
    { name: isMalayalam ? "ഹോം" : "Home", url: "https://www.darulquranaa.com/" },
    { name: isMalayalam ? "കമ്മ്യൂണിറ്റി" : "Community", url: "https://www.darulquranaa.com/community" }
  ];

  return (
    <Layout>
      <SEOHead
        title={isMalayalam ? 
          "കമ്മ്യൂണിറ്റി - ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി" :
          "Community - Darul Quran Abdulla Academy"
        }
        description={isMalayalam ?
          "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി കമ്മ്യൂണിറ്റിയിൽ ചേരുക. വിദ്യാർത്ഥികൾ, രക്ഷിതാക്കൾ, പൂർവ്വ വിദ്യാർത്ഥികളിൽ നിന്നുള്ള അനുഭവങ്ങൾ കേൾക്കുക." :
          "Join the Darul Quran Abdulla Academy community. Hear experiences from students, parents, and alumni."
        }
        keywords="DQAA community, Islamic academy testimonials, student experiences, parent reviews, alumni stories"
        url="https://www.darulquranaa.com/community"
        breadcrumbs={breadcrumbs}
        locale={isMalayalam ? "ml_IN" : "en_US"}
      />

      <PageHeader
        title={isMalayalam ? "കമ്മ്യൂണിറ്റി" : "Community"}
        subtitle={isMalayalam ? 
          "ഞങ്ങളുടെ കമ്മ്യൂണിറ്റിയുമായി ബന്ധപ്പെടുകയും അനുഭവങ്ങൾ പങ്കിടുകയും ചെയ്യുക" :
          "Connect with our community and share experiences"
        }
        backgroundImage="/lovable-uploads/d9397387-67b8-47f6-856b-b0559a89e20a.png"
      />

      <CommunityEngagement />
    </Layout>
  );
};

export default CommunityPage;
