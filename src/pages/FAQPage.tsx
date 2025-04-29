
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import FAQSection from "@/components/FAQSection";
import { useTranslation } from "@/lib/i18n";
import { Helmet } from "react-helmet";

const FAQPage = () => {
  const { t } = useTranslation();
  
  // Comprehensive FAQ items for DQAA
  const faqItems = [
    // Section 1: Introduction & Why DQAA
    {
      question: "What is Darul Quran Abdulla Academy?",
      questionMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി എന്താണ്?",
      answer: "Darul Quran Abdulla Academy is a premier residential academy for boys dedicated to Quranic memorization (Hifz) alongside regular academic education. Located in Kothakurssi, Kerala, our institution provides a unique integrated curriculum where students can memorize the Quran while also excelling in their regular schooling.",
      answerMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി ആൺകുട്ടികൾക്കായുള്ള ഒരു മികച്ച റെസിഡൻഷ്യൽ അക്കാദമിയാണ്, സാധാരണ അക്കാദമിക് വിദ്യാഭ്യാസത്തിനൊപ്പം ഖുർആൻ മനഃപാഠമാക്കുന്നതിനും (ഹിഫ്‌സ്) സമർപ്പിച്ചിരിക്കുന്നു. കേരളത്തിലെ കോത്തകുർശ്ശിയിൽ സ്ഥിതി ചെയ്യുന്ന ഞങ്ങളുടെ സ്ഥാപനം വിദ്യാർത്ഥികൾക്ക് സാധാരണ സ്കൂളിംഗിൽ മികവ് പുലർത്തുന്നതോടൊപ്പം ഖുർആൻ മനഃപാഠമാക്കാൻ കഴിയുന്ന ഒരു സവിശേഷമായ സംയോജിത പാഠ്യപദ്ധതി നൽകുന്നു."
    },
    {
      question: "What makes DQAA different from other institutions?",
      questionMl: "മറ്റ് സ്ഥാപനങ്ങളിൽ നിന്ന് DQAA യെ വ്യത്യസ്തമാക്കുന്നത് എന്താണ്?",
      answer: "DQAA stands apart through our unique integration of Quranic memorization with modern academics. Our students benefit from:<br><br>• A balanced curriculum where Hifz and academic subjects complement each other<br>• Instruction from qualified Qaris and experienced academic teachers<br>• Focus on character development (Tarbiya) alongside intellectual growth<br>• Modern facilities including technology-enabled classrooms<br>• A nurturing residential environment fostering brotherhood and Islamic values",
      answerMl: "ഖുർആൻ മനഃപാഠമാക്കലിനെ ആധുനിക അക്കാദമിക്സുമായി സംയോജിപ്പിക്കുന്നതിലൂടെ DQAA വ്യത്യസ്തമായി നിൽക്കുന്നു. ഞങ്ങളുടെ വിദ്യാർത്ഥികൾക്ക് ഇനിപ്പറയുന്ന ഗുണങ്ങൾ ലഭിക്കുന്നു:<br><br>• ഹിഫ്സും അക്കാദമിക് വിഷയങ്ങളും പരസ്പരപൂരകമായി നിൽക്കുന്ന സന്തുലിതമായ പാഠ്യപദ്ധതി<br>• യോഗ്യരായ ഖാരിമാരിൽ നിന്നും പരിചയസമ്പന്നരായ അക്കാദമിക് അധ്യാപകരിൽ നിന്നും ലഭിക്കുന്ന നിർദ്ദേശങ്ങൾ<br>• ബൗദ്ധിക വളർച്ചയ്ക്കൊപ്പം സ്വഭാവ രൂപീകരണത്തിലും (തർബിയ) ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു<br>• സാങ്കേതികവിദ്യ സജ്ജമാക്കിയ ക്ലാസ് മുറികൾ ഉൾപ്പെടെയുള്ള ആധുനിക സൗകര്യങ്ങൾ<br>• സാഹോദര്യവും ഇസ്ലാമിക മൂല്യങ്ങളും വളർത്തുന്ന പരിപോഷണ റെസിഡൻഷ്യൽ പരിസ്ഥിതി"
    },
    // Section 2: Programs & Curriculum
    {
      question: "What programs does DQAA offer?",
      questionMl: "DQAA എന്തെല്ലാം പ്രോഗ്രാമുകളാണ് നൽകുന്നത്?",
      answer: "DQAA offers two main programs:<br><br>1. <strong>Thahfeezul Qur'an Program</strong>: For boys who have passed 6th grade, integrating complete Qur'an memorization with CBSE schooling (grades 7-10)<br><br>2. <strong>Bayanul Qur'an Diploma Course</strong>: For students who have completed 10th grade with at least 60% marks, offering +1 and +2 education with Commerce & Humanities streams alongside advanced Islamic studies",
      answerMl: "DQAA രണ്ട് പ്രധാന പ്രോഗ്രാമുകൾ നൽകുന്നു:<br><br>1. <strong>തഹ്ഫീളുൽ ഖുർആൻ പ്രോഗ്രാം</strong>: 6-ാം ക്ലാസ് പാസായ ആൺകുട്ടികൾക്കായി, പൂർണ്ണമായ ഖുർആൻ മനഃപാഠമാക്കൽ CBSE സ്കൂളിംഗുമായി (7-10 ഗ്രേഡുകൾ) സംയോജിപ്പിക്കുന്നു.<br><br>2. <strong>ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്സ്</strong>: കുറഞ്ഞത് 60% മാർക്കോടെ 10-ാം ക്ലാസ് പൂർത്തിയാക്കിയ വിദ്യാർത്ഥികൾക്കായി, മെച്ചപ്പെട്ട ഇസ്ലാമിക പഠനങ്ങൾക്കൊപ്പം കൊമേഴ്‌സ് & ഹ്യൂമാനിറ്റീസ് സ്ട്രീമുകളോടെ +1, +2 വിദ്യാഭ്യാസം നൽകുന്നു."
    },
    {
      question: "How does the Hifz program work alongside regular school education?",
      questionMl: "സാധാരണ സ്കൂൾ വിദ്യാഭ്യാസത്തിനൊപ്പം ഹിഫ്സ് പ്രോഗ്രാം എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്?",
      answer: "Our Hifz program is carefully structured to complement regular academics:<br><br>• <strong>Daily Schedule</strong>: Mornings are dedicated to Quranic memorization and revision, while afternoons focus on academic subjects<br>• <strong>Personalized Pace</strong>: Students progress through Hifz at their own capacity while maintaining academic performance<br>• <strong>Integrated Approach</strong>: Our curriculum is designed so academic learning doesn't suffer while pursuing Hifz<br>• <strong>Regular Assessment</strong>: Both Quranic memorization and academic learning are regularly evaluated to ensure balanced progress<br>• <strong>Specialized Support</strong>: Dedicated teachers for both Hifz and academics ensure students receive proper guidance in both areas",
      answerMl: "ഞങ്ങളുടെ ഹിഫ്സ് പ്രോഗ്രാം സാധാരണ അക്കാദമിക്സിന് പൂരകമാകുന്ന തരത്തിൽ ശ്രദ്ധാപൂർവ്വം രൂപകൽപ്പന ചെയ്തിരിക്കുന്നു:<br><br>• <strong>ദിവസേനയുള്ള ഷെഡ്യൂൾ</strong>: രാവിലെ ഖുർആൻ മനഃപാഠമാക്കലിനും പുനരവലോകനത്തിനും സമർപ്പിച്ചിരിക്കുന്നു, അതേസമയം ഉച്ചയ്ക്കുശേഷം അക്കാദമിക് വിഷയങ്ങളിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു<br>• <strong>വ്യക്തിഗതമായ വേഗത</strong>: വിദ്യാർത്ഥികൾ അക്കാദമിക് പ്രകടനം നിലനിർത്തുമ്പോൾ അവരുടെ സ്വന്തം കഴിവനുസരിച്ച് ഹിഫ്സിൽ പുരോഗമിക്കുന്നു<br>• <strong>സംയോജിത സമീപനം</strong>: ഹിഫ്സ് പിന്തുടരുമ്പോൾ അക്കാദമിക് പഠനം കഷ്ടപ്പെടാത്ത വിധത്തിലാണ് ഞങ്ങളുടെ പാഠ്യപദ്ധതി രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്<br>• <strong>നിയമിത വിലയിരുത്തൽ</strong>: സന്തുലിതമായ പുരോഗതി ഉറപ്പാക്കുന്നതിന് ഖുർആൻ മനഃപാഠമാക്കലും അക്കാദമിക് പഠനവും കൃത്യമായി വിലയിരുത്തുന്നു<br>• <strong>പ്രത്യേക പിന്തുണ</strong>: ഹിഫ്സിനും അക്കാദമിക്‌സിനും സമർപ്പിതരായ അധ്യാപകർ വിദ്യാർത്ഥികൾക്ക് രണ്ട് മേഖലകളിലും ശരിയായ മാർഗനിർദ്ദേശം ലഭിക്കുന്നുവെന്ന് ഉറപ്പാക്കുന്നു"
    },
    // Section 3: Campus Life & Facilities
    {
      question: "What facilities are available at the DQAA campus?",
      questionMl: "DQAA ക്യാമ്പസിൽ എന്തെല്ലാം സൗകര്യങ്ങളാണ് ലഭ്യമായിട്ടുള്ളത്?",
      answer: "The DQAA campus features comprehensive facilities designed for holistic development:<br><br>• <strong>Modern Classrooms</strong>: Equipped with smart boards and teaching aids<br>• <strong>Comfortable Dormitories</strong>: Well-maintained residential facilities with proper supervision<br>• <strong>Library & Resources</strong>: Extensive collection of books, digital resources, and reference materials<br>• <strong>Technology Lab</strong>: Computer facilities and digital learning resources<br>• <strong>Playground & Sports Facilities</strong>: For physical development and recreation<br>• <strong>Dining Hall</strong>: Serving nutritious meals prepared under hygienic conditions<br>• <strong>Medical Facility</strong>: Basic healthcare services with arrangements for specialized care when needed<br>• <strong>Prayer Hall</strong>: Dedicated spaces for prayer and spiritual activities",
      answerMl: "DQAA ക്യാമ്പസിൽ സമഗ്രമായ വികസനത്തിനായി രൂപകൽപ്പന ചെയ്ത സമഗ്ര സൗകര്യങ്ങൾ ഉണ്ട്:<br><br>• <strong>ആധുനിക ക്ലാസ് മുറികൾ</strong>: സ്മാർട്ട് ബോർഡുകളും അദ്ധ്യാപന സഹായികളും ഉൾപ്പെടുന്നു<br>• <strong>സുഖകരമായ ഡോർമിറ്ററികൾ</strong>: ശരിയായ മേൽനോട്ടത്തോടെ നന്നായി പരിപാലിക്കുന്ന താമസ സൗകര്യങ്ങൾ<br>• <strong>ലൈബ്രറിയും വിഭവങ്ങളും</strong>: വിപുലമായ പുസ്തക ശേഖരം, ഡിജിറ്റൽ വിഭവങ്ങൾ, റഫറൻസ് മെറ്റീരിയലുകൾ<br>• <strong>ടെക്നോളജി ലാബ്</strong>: കമ്പ്യൂട്ടർ സൗകര്യങ്ങളും ഡിജിറ്റൽ ലേണിംഗ് റിസോഴ്സുകളും<br>• <strong>കളിസ്ഥലവും കായിക സൗകര്യങ്ങളും</strong>: ശാരീരിക വികസനത്തിനും വിനോദത്തിനും<br>• <strong>ഭക്ഷണശാല</strong>: ശുചിത്വ സാഹചര്യങ്ങളിൽ തയ്യാറാക്കിയ പോഷകാഹാരം നൽകുന്നു<br>• <strong>മെഡിക്കൽ സൗകര്യം</strong>: അടിസ്ഥാന ആരോഗ്യ സേവനങ്ങളും ആവശ്യമുള്ളപ്പോൾ വിദഗ്ധ പരിചരണത്തിനുള്ള ക്രമീകരണങ്ങളും<br>• <strong>പ്രാർത്ഥനാഹാൾ</strong>: പ്രാർത്ഥനയ്ക്കും ആത്മീയ പ്രവർത്തനങ്ങൾക്കുമായി സമർപ്പിച്ച ഇടങ്ങൾ"
    },
    {
      question: "What is the daily routine for students at DQAA?",
      questionMl: "DQAA ൽ വിദ്യാർത്ഥികളുടെ ദൈനംദിന ചെയ്തികൾ എന്താണ്?",
      answer: "Students follow a structured daily routine designed to balance spiritual growth, academic learning, physical development, and personal time:<br><br>• <strong>Pre-dawn</strong>: Wake up for Fajr prayer followed by early morning Quran revision<br>• <strong>Morning</strong>: Breakfast followed by intensive Hifz sessions<br>• <strong>Mid-day</strong>: Lunch and prayer break<br>• <strong>Afternoon</strong>: Academic classes covering regular school curriculum<br>• <strong>Evening</strong>: Sports and physical activities<br>• <strong>After Maghrib</strong>: Quran revision and preparation for next day's memorization<br>• <strong>After Isha</strong>: Dinner, homework time, and preparation for bed<br><br>The schedule varies slightly between weekdays and weekends, with more time allocated for recreation, family visits, and special activities on weekends.",
      answerMl: "വിദ്യാർത്ഥികൾ ആത്മീയ വളർച്ച, അക്കാദമിക് പഠനം, ശാരീരിക വികസനം, വ്യക്തിപരമായ സമയം എന്നിവ സന്തുലിതമാക്കുന്നതിനായി രൂപകൽപ്പന ചെയ്ത ഒരു ക്രമമായ ദിനചര്യ പിന്തുടരുന്നു:<br><br>• <strong>പ്രഭാതത്തിന് മുമ്പ്</strong>: ഫജ്ർ നമസ്കാരത്തിനായി ഉണരുന്നു, തുടർന്ന് പ്രഭാത ഖുർആൻ പുനരവലോകനം<br>• <strong>രാവിലെ</strong>: പ്രാതൽ കഴിഞ്ഞ് തീവ്രമായ ഹിഫ്സ് സെഷനുകൾ<br>• <strong>ഉച്ചയ്ക്ക്</strong>: ഉച്ചഭക്ഷണവും നമസ്‌കാര ഇടവേളയും<br>• <strong>ഉച്ചയ്ക്കുശേഷം</strong>: സാധാരണ സ്‌കൂൾ പാഠ്യപദ്ധതി ഉൾക്കൊള്ളുന്ന അക്കാദമിക് ക്ലാസുകൾ<br>• <strong>വൈകുന്നേരം</strong>: കായിക പ്രവർത്തനങ്ങൾ<br>• <strong>മഗ്രിബിന് ശേഷം</strong>: ഖുർആൻ പുനരവലോകനവും അടുത്ത ദിവസത്തെ മനഃപാഠത്തിനുള്ള തയ്യാറെടുപ്പും<br>• <strong>ഇഷാക്ക് ശേഷം</strong>: അത്താഴം, ഹോംവർക്ക് സമയം, ഉറങ്ങാനുള്ള തയ്യാറെടുപ്പ്<br><br>വാരാന്ത്യങ്ങളിൽ വിനോദത്തിനും കുടുംബ സന്ദർശനങ്ങൾക്കും പ്രത്യേക പ്രവർത്തനങ്ങൾക്കും കൂടുതൽ സമയം നീക്കിവച്ചിരിക്കുന്നതിനാൽ ഷെഡ്യൂൾ വാരാന്ത്യങ്ങളിൽ അൽപ്പം വ്യത്യാസപ്പെട്ടിരിക്കുന്നു."
    },
    // Section 4: Admissions & Enrollment
    {
      question: "What are the admission requirements for DQAA?",
      questionMl: "DQAA-യിലേക്കുള്ള പ്രവേശന ആവശ്യകതകൾ എന്തൊക്കെയാണ്?",
      answer: "Admission requirements vary by program:<br><br><strong>Thahfeezul Qur'an Program:</strong><br>• Successful completion of 6th grade<br>• Passing the entrance examination<br>• Performance in the personal interview<br>• Basic ability to read the Quran<br>• Good character and conduct<br><br><strong>Bayanul Qur'an Diploma Course:</strong><br>• Minimum 60% marks in 10th grade<br>• Passing the entrance examination<br>• Performance in the personal interview<br>• Interest in Islamic studies alongside academics<br><br>For both programs, we assess the student's aptitude, discipline, and motivation to ensure they can flourish in our integrated curriculum.",
      answerMl: "പ്രോഗ്രാം അനുസരിച്ച് പ്രവേശന ആവശ്യകതകൾ വ്യത്യാസപ്പെടുന്നു:<br><br><strong>തഹ്ഫീളുൽ ഖുർആൻ പ്രോഗ്രാം:</strong><br>• 6-ാം ക്ലാസ് വിജയകരമായി പൂർത്തിയാക്കിയിരിക്കണം<br>• പ്രവേശന പരീക്ഷ വിജയിച്ചിരിക്കണം<br>• വ്യക്തിഗത അഭിമുഖത്തിലെ പ്രകടനം<br>• ഖുർആൻ വായിക്കാനുള്ള അടിസ്ഥാന കഴിവ്<br>• നല്ല സ്വഭാവവും പെരുമാറ്റവും<br><br><strong>ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ കോഴ്‌സ്:</strong><br>• 10-ാം ക്ലാസിൽ കുറഞ്ഞത് 60% മാർക്ക്<br>• പ്രവേശന പരീക്ഷ വിജയിച്ചിരിക്കണം<br>• വ്യക്തിഗത അഭിമുഖത്തിലെ പ്രകടനം<br>• അക്കാദമിക്‌സിനൊപ്പം ഇസ്‌ലാമിക പഠനങ്ങളിൽ താൽപര്യം<br><br>രണ്ട് പ്രോഗ്രാമുകൾക്കും, ഞങ്ങളുടെ സംയോജിത പാഠ്യപദ്ധതിയിൽ വിദ്യാർത്ഥികൾക്ക് വികസിക്കാൻ കഴിയുമെന്ന് ഉറപ്പാക്കാൻ ഞങ്ങൾ വിദ്യാർത്ഥിയുടെ കഴിവ്, അച്ചടക്കം, പ്രചോദനം എന്നിവ വിലയിരുത്തുന്നു."
    },
    // Section 5: Parental Involvement
    {
      question: "How are parents involved in a student's education at DQAA?",
      questionMl: "DQAA-യിൽ ഒരു വിദ്യാർത്ഥിയുടെ വിദ്യാഭ്യാസത്തിൽ രക്ഷിതാക്കൾ എങ്ങനെയാണ് പങ്കാളികളാകുന്നത്?",
      answer: "While DQAA is a residential institution, we strongly encourage parental involvement through:<br><br>• <strong>Regular Progress Reports</strong>: Detailed updates on both Quranic and academic progress<br>• <strong>Parent-Teacher Meetings</strong>: Scheduled interactions with faculty members<br>• <strong>Visitation Days</strong>: Designated times for parents to visit their children at campus<br>• <strong>Home Visits</strong>: Structured breaks during which students return home<br>• <strong>Digital Communication</strong>: Regular updates through our parent portal and communication channels<br>• <strong>Parent Orientation</strong>: Sessions to help parents understand how to support their child's journey<br>• <strong>Special Events</strong>: Invitations to attend programs, competitions, and celebrations<br><br>We believe that a strong partnership between parents and the Academy creates the best environment for student success.",
      answerMl: "DQAA ഒരു റെസിഡൻഷ്യൽ സ്ഥാപനമാണെങ്കിലും, ഞങ്ങൾ രക്ഷാകർതൃ പങ്കാളിത്തം ശക്തമായി പ്രോത്സാഹിപ്പിക്കുന്നു:<br><br>• <strong>നിയമിത പുരോഗതി റിപ്പോർട്ടുകൾ</strong>: ഖുർആനിലും അക്കാദമിക് പുരോഗതിയിലുമുള്ള വിശദമായ അപ്‌ഡേറ്റുകൾ<br>• <strong>രക്ഷിതാക്കൾ-അധ്യാപകർ മീറ്റിംഗുകൾ</strong>: ഫാക്കൽറ്റി അംഗങ്ങളുമായുള്ള ഷെഡ്യൂൾ ചെയ്ത ഇടപെടലുകൾ<br>• <strong>സന്ദർശന ദിനങ്ങൾ</strong>: രക്ഷിതാക്കൾക്ക് ക്യാമ്പസിൽ അവരുടെ കുട്ടികളെ സന്ദർശിക്കാനുള്ള നിർദ്ദിഷ്ട സമയങ്ങൾ<br>• <strong>വീട്ടിൽ സന്ദർശിക്കൽ</strong>: വിദ്യാർത്ഥികൾ വീട്ടിലേക്ക് മടങ്ങുന്ന രൂപപ്പെടുത്തിയ ഇടവേളകൾ<br>• <strong>ഡിജിറ്റൽ കമ്മ്യൂണിക്കേഷൻ</strong>: ഞങ്ങളുടെ രക്ഷാകർതൃ പോർട്ടലിലൂടെയും ആശയവിനിമയ ചാനലുകളിലൂടെയും ക്രമമായ അപ്‌ഡേറ്റുകൾ<br>• <strong>രക്ഷാകർതൃ ഓറിയന്റേഷൻ</strong>: അവരുടെ കുട്ടിയുടെ യാത്രയെ പിന്തുണയ്ക്കുന്നത് എങ്ങനെയെന്ന് മനസ്സിലാക്കാൻ രക്ഷിതാക്കളെ സഹായിക്കുന്ന സെഷനുകൾ<br>• <strong>പ്രത്യേക ഇവന്റുകൾ</strong>: പ്രോഗ്രാമുകൾ, മത്സരങ്ങൾ, ആഘോഷങ്ങൾ എന്നിവയിൽ പങ്കെടുക്കാനുള്ള ക്ഷണങ്ങൾ<br><br>രക്ഷിതാക്കളും അക്കാദമിയും തമ്മിലുള്ള ശക്തമായ പങ്കാളിത്തം വിദ്യാർത്ഥി വിജയത്തിന് ഏറ്റവും നല്ല പരിസ്ഥിതി സൃഷ്ടിക്കുന്നുവെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു."
    },
    // Section 6: Vision & Technology
    {
      question: "How does DQAA incorporate technology in its educational approach?",
      questionMl: "DQAA അതിന്റെ വിദ്യാഭ്യാസ സമീപനത്തിൽ സാങ്കേതികവിദ്യ എങ്ങനെയാണ് ഉൾപ്പെടുത്തുന്നത്?",
      answer: "DQAA embraces technology as a tool to enhance learning while maintaining our core Islamic values:<br><br>• <strong>Smart Classrooms</strong>: Interactive whiteboards and multimedia teaching aids<br>• <strong>Digital Learning Resources</strong>: Access to approved educational apps and online resources<br>• <strong>Computer Education</strong>: Age-appropriate computing skills as part of the curriculum<br>• <strong>Quranic Learning Tools</strong>: Digital aids for memorization, tajweed, and understanding<br>• <strong>Management Systems</strong>: Digital tracking of student progress, attendance, and performance<br>• <strong>Parent Communication Platform</strong>: Easy digital communication between parents and staff<br>• <strong>Research Capabilities</strong>: Supervised access to online academic resources for senior students<br><br>We believe in integrating technology purposefully to enhance learning while teaching students to use digital tools responsibly and ethically.",
      answerMl: "DQAA ഞങ്ങളുടെ അടിസ്ഥാന ഇസ്ലാമിക മൂല്യങ്ങൾ നിലനിർത്തുന്നതോടൊപ്പം പഠനത്തെ വർദ്ധിപ്പിക്കുന്നതിനുള്ള ഉപകരണമായി സാങ്കേതികവിദ്യ ഉൾക്കൊള്ളുന്നു:<br><br>• <strong>സ്മാർട്ട് ക്ലാസ് മുറികൾ</strong>: ഇന്ററാക്ടീവ് വൈറ്റ്ബോർഡുകളും മൾട്ടിമീഡിയ അദ്ധ്യാപന സഹായികളും<br>• <strong>ഡിജിറ്റൽ ലേണിംഗ് റിസോഴ്‌സുകൾ</strong>: അംഗീകൃത വിദ്യാഭ്യാസ ആപ്പുകളിലും ഓൺലൈൻ റിസോഴ്‌സുകളിലും ആക്‌സസ്<br>• <strong>കമ്പ്യൂട്ടർ വിദ്യാഭ്യാസം</strong>: പാഠ്യപദ്ധതിയുടെ ഭാഗമായി പ്രായത്തിന് അനുയോജ്യമായ കമ്പ്യൂട്ടിംഗ് കഴിവുകൾ<br>• <strong>ഖുർആനിക് ലേണിംഗ് ടൂളുകൾ</strong>: മനഃപാഠമാക്കൽ, തജ്‌വീദ്, മനസ്സിലാക്കൽ എന്നിവയ്ക്കുള്ള ഡിജിറ്റൽ സഹായികൾ<br>• <strong>മാനേജ്‌മെന്റ് സിസ്റ്റങ്ങൾ</strong>: വിദ്യാർത്ഥികളുടെ പുരോഗതി, ഹാജർ, പ്രകടനം എന്നിവയുടെ ഡിജിറ്റൽ ട്രാക്കിംഗ്<br>• <strong>രക്ഷാകർതൃ കമ്മ്യൂണിക്കേഷൻ പ്ലാറ്റ്‌ഫോം</strong>: രക്ഷിതാക്കളും സ്റ്റാഫും തമ്മിലുള്ള എളുപ്പമുള്ള ഡിജിറ്റൽ കമ്മ്യൂണിക്കേഷൻ<br>• <strong>ഗവേഷണ ശേഷികൾ</strong>: സീനിയർ വിദ്യാർത്ഥികൾക്കായി ഓൺലൈൻ അക്കാദമിക് റിസോഴ്‌സുകളിലേക്കുള്ള മേൽനോട്ടമുള്ള ആക്‌സസ്<br><br>ഡിജിറ്റൽ ടൂളുകൾ ഉത്തരവാദിത്തത്തോടെയും ധാർമ്മികമായും ഉപയോഗിക്കാൻ വിദ്യാർത്ഥികളെ പഠിപ്പിക്കുന്നതോടൊപ്പം പഠനം മെച്ചപ്പെടുത്തുന്നതിന് ഉദ്ദേശ്യപൂർവ്വം സാങ്കേതികവിദ്യ സംയോജിപ്പിക്കുന്നതിൽ ഞങ്ങൾ വിശ്വസിക്കുന്നു."
    },
    {
      question: "What is DQAA's long-term vision?",
      questionMl: "DQAA-യുടെ ദീർഘകാല കാഴ്ചപ്പാട് എന്താണ്?",
      answer: "DQAA's long-term vision centers on developing well-rounded Islamic scholars and leaders who can excel in both religious knowledge and contemporary fields:<br><br>• <strong>Academic Excellence</strong>: Continuously enhancing our integrated curriculum to maintain high standards<br>• <strong>Expanded Programs</strong>: Developing additional educational pathways, including higher education options<br>• <strong>Research & Innovation</strong>: Establishing centers for Islamic research and educational innovation<br>• <strong>Global Recognition</strong>: Gaining recognition as a model institution for integrated Islamic education<br>• <strong>Alumni Network</strong>: Building a strong network of graduates who succeed in various fields while exemplifying Islamic values<br>• <strong>Community Impact</strong>: Expanding our positive influence on society through community programs and initiatives<br><br>Our ultimate goal is to produce generations of Muslims who are firmly grounded in their faith while capable of making meaningful contributions to contemporary society.",
      answerMl: "DQAA-യുടെ ദീർഘകാല കാഴ്ചപ്പാട് മതപരമായ അറിവിലും സമകാലിക മേഖലകളിലും മികവ് പുലർത്താൻ കഴിയുന്ന സമഗ്രമായ ഇസ്ലാമിക പണ്ഡിതന്മാരെയും നേതാക്കളെയും വികസിപ്പിക്കുന്നതിൽ കേന്ദ്രീകരിച്ചിരിക്കുന്നു:<br><br>• <strong>അക്കാദമിക് മികവ്</strong>: ഉയർന്ന നിലവാരം നിലനിർത്താൻ ഞങ്ങളുടെ സംയോജിത പാഠ്യപദ്ധതി തുടർച്ചയായി വർദ്ധിപ്പിക്കുന്നു<br>• <strong>വിപുലീകരിച്ച പ്രോഗ്രാമുകൾ</strong>: ഉന്നത വിദ്യാഭ്യാസ ഓപ്ഷനുകൾ ഉൾപ്പെടെ അധിക വിദ്യാഭ്യാസ പാതകൾ വികസിപ്പിക്കുന്നു<br>• <strong>ഗവേഷണവും നൂതനവും</strong>: ഇസ്‌ലാമിക ഗവേഷണത്തിനും വിദ്യാഭ്യാസ നവീകരണത്തിനുമുള്ള കേന്ദ്രങ്ങൾ സ്ഥാപിക്കുന്നു<br>• <strong>ആഗോള അംഗീകാരം</strong>: സംയോജിത ഇസ്ലാമിക വിദ്യാഭ്യാസത്തിനുള്ള മാതൃകാ സ്ഥാപനമായി അംഗീകാരം നേടുന്നു<br>• <strong>പൂർവ്വവിദ്യാർത്ഥി നെറ്റ്‌വർക്ക്</strong>: ഇസ്ലാമിക മൂല്യങ്ങൾ ഉദാഹരണമാക്കുന്നതോടൊപ്പം വിവിധ മേഖലകളിൽ വിജയിക്കുന്ന ബിരുദധാരികളുടെ ശക്തമായ നെറ്റ്‌വർക്ക് കെട്ടിപ്പടുക്കുന്നു<br>• <strong>സമൂഹത്തിലെ സ്വാധീനം</strong>: കമ്മ്യൂണിറ്റി പ്രോഗ്രാമുകളിലൂടെയും സംരംഭങ്ങളിലൂടെയും സമൂഹത്തിലുള്ള ഞങ്ങളുടെ നല്ല സ്വാധീനം വിപുലീകരിക്കുന്നു<br><br>സമകാലിക സമൂഹത്തിന് അർത്ഥപൂർണ്ണമായ സംഭാവനകൾ നൽകാൻ കഴിവുള്ളതോടൊപ്പം അവരുടെ വിശ്വാസത്തിൽ ഉറച്ചുനിൽക്കുന്ന മുസ്ലിം തലമുറകളെ സൃഷ്ടിക്കുക എന്നതാണ് ഞങ്ങളുടെ അന്തിമ ലക്ഷ്യം."
    }
  ];
  
  return (
    <Layout>
      <Helmet>
        <title>Frequently Asked Questions | Darul Quran Abdulla Academy</title>
        <meta name="description" content="Find answers to common questions about Darul Quran Abdulla Academy's programs, facilities, admissions process, and campus life. Learn more about our unique approach to Islamic education." />
        <meta name="keywords" content="DQAA FAQ, Darul Quran Abdulla Academy questions, Islamic education Kerala, Hifz program FAQ, DQAA admissions questions" />
        <link rel="canonical" href="https://www.darulquranaa.com/faq" />
      </Helmet>
      
      <PageHeader 
        title={t('faq.title') || "Frequently Asked Questions"} 
        subtitle={t('faq.subtitle') || "Find answers to common questions about DQAA and our programs"}
        backgroundImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230A3D91' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
      />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-dqaa-500 mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-dqaa-600 hover:text-dqaa-500 transition-colors">
                      About DQAA
                    </a>
                  </li>
                  <li>
                    <a href="#programs" className="text-dqaa-600 hover:text-dqaa-500 transition-colors">
                      Programs & Curriculum
                    </a>
                  </li>
                  <li>
                    <a href="#campus" className="text-dqaa-600 hover:text-dqaa-500 transition-colors">
                      Campus Life
                    </a>
                  </li>
                  <li>
                    <a href="#admissions" className="text-dqaa-600 hover:text-dqaa-500 transition-colors">
                      Admissions
                    </a>
                  </li>
                  <li>
                    <a href="#parents" className="text-dqaa-600 hover:text-dqaa-500 transition-colors">
                      For Parents
                    </a>
                  </li>
                  <li>
                    <a href="#vision" className="text-dqaa-600 hover:text-dqaa-500 transition-colors">
                      Vision & Technology
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-12">
              <section id="about" className="scroll-mt-24">
                <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 pb-2 border-b border-gold-200">
                  About DQAA
                </h2>
                <FAQSection 
                  faqs={faqItems.slice(0, 2)} 
                  className="py-0" 
                  title="" 
                  titleMl=""
                />
              </section>
              
              <section id="programs" className="scroll-mt-24">
                <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 pb-2 border-b border-gold-200">
                  Programs & Curriculum
                </h2>
                <FAQSection 
                  faqs={faqItems.slice(2, 4)} 
                  className="py-0" 
                  title="" 
                  titleMl=""
                />
              </section>
              
              <section id="campus" className="scroll-mt-24">
                <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 pb-2 border-b border-gold-200">
                  Campus Life
                </h2>
                <FAQSection 
                  faqs={faqItems.slice(4, 6)} 
                  className="py-0" 
                  title="" 
                  titleMl=""
                />
              </section>
              
              <section id="admissions" className="scroll-mt-24">
                <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 pb-2 border-b border-gold-200">
                  Admissions
                </h2>
                <FAQSection 
                  faqs={faqItems.slice(6, 7)} 
                  className="py-0" 
                  title="" 
                  titleMl=""
                />
              </section>
              
              <section id="parents" className="scroll-mt-24">
                <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 pb-2 border-b border-gold-200">
                  For Parents
                </h2>
                <FAQSection 
                  faqs={faqItems.slice(7, 8)} 
                  className="py-0" 
                  title="" 
                  titleMl=""
                />
              </section>
              
              <section id="vision" className="scroll-mt-24">
                <h2 className="text-2xl font-display font-bold text-dqaa-500 mb-6 pb-2 border-b border-gold-200">
                  Vision & Technology
                </h2>
                <FAQSection 
                  faqs={faqItems.slice(8, 10)} 
                  className="py-0" 
                  title="" 
                  titleMl=""
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
