
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FAQSection from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/lib/i18n";

const FAQPage = () => {
  const { t, currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const faqSections = [
    {
      title: "General Questions",
      titleMl: "പൊതുവായ ചോദ്യങ്ങൾ",
      faqs: [
        {
          question: "What is Darul Quran Abdulla Academy?",
          questionMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി എന്താണ്?",
          answer: "Darul Quran Abdulla Academy (DQAA) is an educational institution that combines Islamic education with modern academic curricula. Founded in 2014, we focus on providing a holistic educational experience that nurtures both spiritual and academic excellence.",
          answerMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി (DQAA) ഇസ്ലാമിക വിദ്യാഭ്യാസവും ആധുനിക അക്കാദമിക കരിക്കുലവും സംയോജിപ്പിക്കുന്ന ഒരു വിദ്യാഭ്യാസ സ്ഥാപനമാണ്. 2014-ൽ സ്ഥാപിതമായ ഞങ്ങൾ ആത്മീയവും അക്കാദമികവുമായ മികവ് വളർത്തുന്ന സമഗ്രമായ വിദ്യാഭ്യാസ അനുഭവം നൽകുന്നതിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു."
        },
        {
          question: "How is DQAA different from other schools?",
          questionMl: "DQAA മറ്റ് സ്കൂളുകളിൽ നിന്ന് എങ്ങനെ വ്യത്യാസപ്പെട്ടിരിക്കുന്നു?",
          answer: "DQAA distinguishes itself by providing a unique blend of traditional Islamic education alongside a modern academic curriculum. Our students become proficient in multiple languages and benefit from a holistic approach that emphasizes moral character development alongside academic excellence.",
          answerMl: "DQAA ആധുനിക അക്കാദമിക പാഠ്യപദ്ധതിക്കൊപ്പം പരമ്പരാഗത ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിന്റെ അനന്യമായ സമ്മിശ്രണം നൽകുന്നതിലൂടെ സ്വയം വേർതിരിച്ചറിയുന്നു. ഞങ്ങളുടെ വിദ്യാർത്ഥികൾ ഒന്നിലധികം ഭാഷകളിൽ പ്രാവീണ്യം നേടുകയും അക്കാദമിക മികവിനൊപ്പം ധാർമ്മിക സ്വഭാവ വികസനത്തിന് ഊന്നൽ നൽകുന്ന സമഗ്രമായ സമീപനത്തിൽ നിന്ന് പ്രയോജനം നേടുകയും ചെയ്യുന്നു."
        },
        {
          question: "What age groups does DQAA cater to?",
          questionMl: "DQAA ഏതൊക്കെ പ്രായക്കാരെയാണ് ലക്ഷ്യം വയ്ക്കുന്നത്?",
          answer: "Our programs cater to students from ages 10 and above. The Hifz program typically accepts students aged 10-15, while our diploma courses and higher education programs are designed for older students and young adults.",
          answerMl: "ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ 10 വയസ്സും അതിനു മുകളിലും പ്രായമുള്ള വിദ്യാർത്ഥികളെ ലക്ഷ്യമിടുന്നു. ഹിഫ്സ് പ്രോഗ്രാം സാധാരണയായി 10-15 വയസ്സുള്ള വിദ്യാർത്ഥികളെ സ്വീകരിക്കുന്നു, അതേസമയം ഞങ്ങളുടെ ഡിപ്ലോമ കോഴ്സുകളും ഉന്നത വിദ്യാഭ്യാസ പ്രോഗ്രാമുകളും പ്രായമായ വിദ്യാർത്ഥികൾക്കും യുവാക്കൾക്കും വേണ്ടി രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു."
        }
      ]
    },
    {
      title: "Admissions",
      titleMl: "പ്രവേശനം",
      faqs: [
        {
          question: "What is the admission process for DQAA?",
          questionMl: "DQAA-യിലെ പ്രവേശന പ്രക്രിയ എന്താണ്?",
          answer: "The admission process involves submitting an application form, attending an entrance examination, and participating in an interview. Selection is based on the combined performance in these assessments, with priority given to students demonstrating both academic potential and commitment to Islamic values.",
          answerMl: "പ്രവേശന പ്രക്രിയയിൽ അപേക്ഷാ ഫോം സമർപ്പിക്കൽ, പ്രവേശന പരീക്ഷയിൽ പങ്കെടുക്കൽ, അഭിമുഖത്തിൽ പങ്കെടുക്കൽ എന്നിവ ഉൾപ്പെടുന്നു. അക്കാദമിക വാസന കാണിക്കുകയും ഇസ്ലാമിക മൂല്യങ്ങളോടുള്ള പ്രതിബദ്ധതയും കാണിക്കുന്ന വിദ്യാർത്ഥികൾക്ക് മുൻഗണന നൽകിക്കൊണ്ട് ഈ വിലയിരുത്തലുകളിലെ സംയുക്ത പ്രകടനത്തിന്റെ അടിസ്ഥാനത്തിലാണ് തിരഞ്ഞെടുപ്പ്."
        },
        {
          question: "What documents are required for admission?",
          questionMl: "പ്രവേശനത്തിന് എന്തെല്ലാം രേഖകളാണ് ആവശ്യമുള്ളത്?",
          answer: "Applicants need to submit their birth certificate, previous school records or transfer certificate, passport-sized photographs, and proof of address. For the Hifz program and residential courses, additional health records and guardian consent forms are required.",
          answerMl: "അപേക്ഷകർ അവരുടെ ജനന സർട്ടിഫിക്കറ്റ്, മുൻ സ്കൂൾ രേഖകൾ അല്ലെങ്കിൽ ട്രാൻസ്ഫർ സർട്ടിഫിക്കറ്റ്, പാസ്പോർട്ട് വലിപ്പത്തിലുള്ള ഫോട്ടോകൾ, വിലാസ തെളിയിക്കുന്ന രേഖ എന്നിവ സമർപ്പിക്കേണ്ടതുണ്ട്. ഹിഫ്സ് പ്രോഗ്രാമിനും റെസിഡൻഷ്യൽ കോഴ്സുകൾക്കും, അധിക ആരോഗ്യ രേഖകളും രക്ഷാകർതൃ സമ്മതപത്രങ്ങളും ആവശ്യമാണ്."
        }
      ]
    },
    {
      title: "Academic Programs",
      titleMl: "അക്കാദമിക് പ്രോഗ്രാമുകൾ",
      faqs: [
        {
          question: "What programs are offered at DQAA?",
          questionMl: "DQAA-യിൽ എന്തൊക്കെ പ്രോഗ്രാമുകളാണ് വാഗ്ദാനം ചെയ്യുന്നത്?",
          answer: "DQAA offers several programs including: <br>1. The Hifz Program, which combines Quranic memorization with academic education<br>2. The Bayanul Quran Diploma Course for Islamic studies<br>3. Regular academic programs following the CBSE curriculum<br>4. Language courses in Arabic, English, Malayalam, and Urdu<br>5. Higher education pathways through affiliated institutions",
          answerMl: "DQAA നിരവധി പ്രോഗ്രാമുകൾ വാഗ്ദാനം ചെയ്യുന്നു, അവയിൽ ഉൾപ്പെടുന്നവ: <br>1. ഖുർആൻ മനനവും അക്കാദമിക വിദ്യാഭ്യാസവും സംയോജിപ്പിക്കുന്ന ഹിഫ്സ് പ്രോഗ്രാം<br>2. ഇസ്ലാമിക പഠനങ്ങൾക്കായുള്ള ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്സ്<br>3. സിബിഎസ്‌ഇ പാഠ്യപദ്ധതി പിന്തുടരുന്ന സാധാരണ അക്കാദമിക പ്രോഗ്രാമുകൾ<br>4. അറബിക്, ഇംഗ്ലീഷ്, മലയാളം, ഉർദു എന്നീ ഭാഷാ കോഴ്സുകൾ<br>5. അഫിലിയേറ്റ് ചെയ്ത സ്ഥാപനങ്ങളിലൂടെയുള്ള ഉന്നത വിദ്യാഭ്യാസ പാതകൾ"
        },
        {
          question: "How is the Hifz program structured?",
          questionMl: "ഹിഫ്സ് പ്രോഗ്രാം എങ്ങനെയാണ് ഘടിപ്പിച്ചിരിക്കുന്നത്?",
          answer: "The Hifz program is uniquely structured to allow students to memorize the entire Quran while simultaneously pursuing their academic education. The day is divided between Quranic memorization sessions and regular academic classes. Students typically complete the program in 3-4 years, during which they also progress through their regular grade-level education.",
          answerMl: "വിദ്യാർത്ഥികൾക്ക് അവരുടെ അക്കാദമിക വിദ്യാഭ്യാസം നേടുന്നതിനൊപ്പം മുഴുവൻ ഖുർആനും മനപ്പാഠമാക്കാൻ അനുവദിക്കുന്ന വിധത്തിൽ ഹിഫ്സ് പ്രോഗ്രാം അനന്യമായി രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു. ദിവസം ഖുർആൻ മനഃപാഠ സെഷനുകൾക്കും സാധാരണ അക്കാദമിക ക്ലാസുകൾക്കും ഇടയിൽ വിഭജിച്ചിരിക്കുന്നു. വിദ്യാർത്ഥികൾ സാധാരണയായി 3-4 വർഷത്തിനുള്ളിൽ പ്രോഗ്രാം പൂർത്തിയാക്കുന്നു, ഈ സമയത്ത് അവർ അവരുടെ സാധാരണ ഗ്രേഡ്-ലെവൽ വിദ്യാഭ്യാസത്തിലൂടെയും പുരോഗമിക്കുന്നു."
        }
      ]
    },
    {
      title: "Latest Achievements",
      titleMl: "ഏറ്റവും പുതിയ നേട്ടങ്ങൾ",
      faqs: [
        {
          question: "What are DQAA's recent academic achievements?",
          questionMl: "DQAA-യുടെ സമീപകാല അക്കാദമിക നേട്ടങ്ങൾ എന്തൊക്കെയാണ്?",
          answer: "We're proud to announce our 100% pass rate in SSLC examinations for 2025. Additionally, our Hifz and Shari'ah program students have achieved top ranks in several regional Islamic academic competitions. Our students consistently demonstrate excellence in both religious and secular academic pursuits.",
          answerMl: "2025-ലെ SSLC പരീക്ഷകളിൽ 100% വിജയനിരക്ക് പ്രഖ്യാപിക്കുന്നതിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു. കൂടാതെ, ഞങ്ങളുടെ ഹിഫ്സ്, ഷരീഅ പ്രോഗ്രാം വിദ്യാർത്ഥികൾ നിരവധി പ്രാദേശിക ഇസ്ലാമിക അക്കാദമിക മത്സരങ്ങളിൽ മുൻനിര റാങ്കുകൾ നേടിയിട്ടുണ്ട്. മതപരവും ലൗകികവുമായ അക്കാദമിക സംരംഭങ്ങളിൽ ഞങ്ങളുടെ വിദ്യാർത്ഥികൾ സ്ഥിരമായി മികവ് പ്രകടിപ്പിക്കുന്നു."
        }
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Frequently Asked Questions | Darul Quran Abdulla Academy</title>
        <meta 
          name="description" 
          content="Find answers to common questions about DQAA's programs, admission process, facilities, and Islamic educational approach."
        />
        <meta
          name="keywords"
          content="DQAA FAQ, Islamic education Kerala, Hifz program questions, Quran memorization school, Islamic boarding school Kerala"
        />
        <link rel="canonical" href="https://www.darulquranaa.com/faq" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Darul Quran Abdulla Academy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Darul Quran Abdulla Academy (DQAA) is an educational institution that combines Islamic education with modern academic curricula. Founded in 2014, we focus on providing a holistic educational experience that nurtures both spiritual and academic excellence."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is DQAA different from other schools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "DQAA distinguishes itself by providing a unique blend of traditional Islamic education alongside a modern academic curriculum. Our students become proficient in multiple languages and benefit from a holistic approach that emphasizes moral character development alongside academic excellence."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <PageHeader 
        title={isMalayalam ? "പതിവ് ചോദ്യങ്ങൾ" : "Frequently Asked Questions"}
        subtitle={isMalayalam 
          ? "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയെക്കുറിച്ചുള്ള നിങ്ങളുടെ ചോദ്യങ്ങൾക്ക് ഉത്തരം കണ്ടെത്തുക" 
          : "Find answers to your questions about Darul Quran Abdulla Academy"}
        backgroundImage="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        showApplyButton={true}
      />
      
      <div className="py-12 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, index) => (
              <FAQSection
                key={index}
                title={section.title}
                titleMl={section.titleMl}
                faqs={section.faqs}
                className={index > 0 ? "mt-16" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
