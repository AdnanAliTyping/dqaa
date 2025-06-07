import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { 
  MessageCircle, 
  Send, 
  BookOpen, 
  Lightbulb, 
  User, 
  Bot, 
  Info, 
  ExternalLink,
  Clock,
  Trash2,
  Copy,
  Check,
  RefreshCw
} from "lucide-react";

// Types
interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: 'academic' | 'islamic' | 'admission' | 'general';
  isError?: boolean;
}

interface QuickQuestion {
  text: { en: string; ml: string };
  category: Message['category'];
  keywords: string[];
}

// Enhanced response database
const responseDatabase = {
  hifz: {
    en: "Our Hifz program is a comprehensive course for Quran memorization designed for dedicated students. Under the guidance of experienced Qaris and Ustads, students memorize the entire Quran while maintaining their regular academic studies. The program typically takes 3-5 years to complete, with flexible schedules for working students. We provide individual attention, progress tracking, and regular assessments to ensure quality memorization.",
    ml: "ഞങ്ങളുടെ ഹിഫ്സ് പ്രോഗ്രാം സമർപ്പിത വിദ്യാർത്ഥികൾക്കായി രൂപകൽപ്പന ചെയ്ത ഖുർആൻ മനഃപാഠത്തിനുള്ള ഒരു സമഗ്ര കോഴ്സാണ്. പരിചയസമ്പന്നരായ ഖാരികളുടെയും ഉസ്താദുമാരുടെയും മാർഗ്ഗദർശനത്തിൽ, വിദ്യാർത്ഥികൾ അവരുടെ സാധാരണ അക്കാദമിക് പഠനം തുടർന്നുകൊണ്ട് മുഴുവൻ ഖുർആനും മനഃപാഠമാക്കുന്നു. പ്രോഗ്രാം പൂർത്തിയാക്കാൻ സാധാരണയായി 3-5 വർഷം വേണ്ടിവരും."
  },
  admission: {
    en: "Admissions for 2025-26 academic year are now open! We welcome students from all backgrounds who are committed to Islamic education. Selection process includes entrance examination, interview, and document verification. Required documents: School Transfer Certificate, Birth Certificate, Recent Photographs, and Character Certificate. Application deadline is March 31st, 2025. Financial assistance and scholarships are available for deserving students.",
    ml: "2025-26 അക്കാദമിക് വർഷത്തേക്കുള്ള പ്രവേശനം ഇപ്പോൾ തുറന്നിരിക്കുന്നു! ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തോട് പ്രതിബദ്ധതയുള്ള എല്ലാ പശ്ചാത്തലത്തിലുമുള്ള വിദ്യാർത്ഥികളെ ഞങ്ങൾ സ്വാഗതം ചെയ്യുന്നു. തിരഞ്ഞെടുപ്പ് പ്രക്രിയയിൽ എൻട്രൻസ് പരീക്ഷ, അഭിമുഖം, രേഖകളുടെ പരിശോധന എന്നിവ ഉൾപ്പെടുന്നു. ആവശ്യമായ രേഖകൾ: സ്കൂൾ ട്രാൻസ്ഫർ സർട്ടിഫിക്കറ്റ്, ജനന സർട്ടിഫിക്കറ്റ്, സമീപകാല ഫോട്ടോഗ്രാഫുകൾ, സ്വഭാവ സർട്ടിഫിക്കറ്റ്."
  },
  salah: {
    en: "Salah (prayer) is the second pillar of Islam and our most direct connection with Allah (SWT). The five daily prayers - Fajr, Dhuhr, Asr, Maghrib, and Isha - are obligatory for every Muslim. Beyond being a religious duty, Salah provides spiritual purification, mental peace, discipline, and keeps us constantly mindful of our Creator. It serves as a spiritual anchor throughout our day, helping us maintain our Islamic identity and values.",
    ml: "സലാത്ത് (നമാസ്) ഇസ്ലാമിന്റെ രണ്ടാമത്തെ സ്തംഭവും അല്ലാഹുവിനോട് (സുബ്ഹാനഹു വതആല) നമുക്കുള്ള ഏറ്റവും നേരിട്ടുള്ള ബന്ധവുമാണ്. അഞ്ച് നിത്യ നമാസുകൾ - ഫജർ, ദുഹർ, അസർ, മഗ്രിബ്, ഇശ - എല്ലാ മുസ്ലിമുകൾക്കും നിർബന്ധമാണ്. മതപരമായ കടമയ്ക്കപ്പുറം, സലാത്ത് ആത്മീയ ശുദ്ധീകരണം, മാനസിക സമാധാനം, അച്ചടക്കം നൽകുകയും നമ്മുടെ സ്രഷ്ടാവിനെക്കുറിച്ച് നിരന്തരം ബോധവാന്മാര്‍ ആക്കുകയും ചെയ്യുന്നു."
  },
  campus: {
    en: "Our state-of-the-art campus is designed to provide an optimal learning environment for Islamic education. Facilities include: Smart classrooms with digital boards, Well-equipped computer laboratory, Extensive library with Islamic and academic books, Beautiful mosque for daily prayers, Comfortable dormitories with modern amenities, Sports facilities and recreational areas, Cafeteria with halal food, Medical facility with qualified staff, and 24/7 security. We ensure a safe, conducive environment for holistic Islamic education.",
    ml: "ഇസ്ലാമിക് വിദ്യാഭ്യാസത്തിന് അനുയോജ്യമായ പഠന അന്തരീക്ഷം പ്രദാനം ചെയ്യുന്നതിനായി രൂപകൽപ്പന ചെയ്ത അത്യാധുനിക കാമ്പസാണ് ഞങ്ങളുടേത്. സൗകര്യങ്ങളിൽ ഉൾപ്പെടുന്നവ: ഡിജിറ്റൽ ബോർഡുകളുള്ള സ്മാർട്ട് ക്ലാസ്റൂമുകൾ, നന്നായി സജ്ജീകരിച്ച കമ്പ്യൂട്ടർ ലബോറട്ടറി, ഇസ്ലാമിക്, അക്കാദമിക് പുസ്തകങ്ങളുള്ള വിപുലമായ ലൈബ്രറി, ദൈനംദിന നമാസുകൾക്കുള്ള മനോഹരമായ മസ്ജിദ്, ആധുനിക സൗകര്യങ്ങളുള്ള സുഖപ്രദമായ ഡോർമിറ്ററികൾ, കായിക സൗകര്യങ്ങളും വിനോദ മേഖലകളും."
  }
};

// Custom hook for language management
const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ml'>('en');
  const isMalayalam = currentLanguage === 'ml';
  
  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => prev === 'en' ? 'ml' : 'en');
  }, []);

  return { currentLanguage, isMalayalam, toggleLanguage };
};

const IslamicStudyAssistant = () => {
  const { currentLanguage, isMalayalam, toggleLanguage } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      type: 'assistant',
      content: isMalayalam ? 
        'അസ്സലാമു അലൈകും! ഞാൻ DQAA യുടെ AI സ്റ്റഡി അസിസ്റ്റന്റാണ്. ഇസ്ലാമിക് പഠനം, അക്കാദമിക് കോഴ്സുകൾ, അല്ലെങ്കിൽ പ്രവേശനം സംബന്ധിച്ച് എന്തെങ്കിലും ചോദ്യങ്ങൾ ഉണ്ടോ?' :
        'Assalamu Alaikum! I\'m DQAA\'s AI Study Assistant. How can I help you with Islamic studies, academic courses, or admissions today?',
      timestamp: new Date(),
      category: 'general'
    };
    setMessages([welcomeMessage]);
  }, [isMalayalam]);

  const quickQuestions: QuickQuestion[] = useMemo(() => [
    {
      text: { en: "What is the Hifz program?", ml: "ഹിഫ്സ് പ്രോഗ്രാം എന്താണ്?" },
      category: 'academic',
      keywords: ['hifz', 'memorization', 'quran', 'ഹിഫ്സ്', 'മനഃപാഠം']
    },
    {
      text: { en: "Admission process", ml: "പ്രവേശന പ്രക്രിയ" },
      category: 'admission',
      keywords: ['admission', 'apply', 'enrollment', 'പ്രവേശന', 'അപേക്ഷ']
    },
    {
      text: { en: "Importance of Salah", ml: "നമാസിന്റെ പ്രാധാന്യം" },
      category: 'islamic',
      keywords: ['salah', 'prayer', 'namaz', 'നമാസ്', 'സലാത്ത്']
    },
    {
      text: { en: "Campus facilities", ml: "കാമ്പസ് സൗകര്യങ്ങൾ" },
      category: 'general',
      keywords: ['campus', 'facilities', 'hostel', 'കാമ്പസ്', 'സൗകര്യങ്ങൾ']
    }
  ], []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  // Enhanced response generation with better keyword matching
  const generateResponse = useCallback((userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let response = '';
    let category: Message['category'] = 'general';

    // More sophisticated keyword matching
    if (lowerMessage.match(/hifz|memorization|memorize|quran|ഹിഫ്സ്|മനഃപാഠം|ഖുർആൻ/)) {
      category = 'academic';
      response = responseDatabase.hifz[currentLanguage];
    } else if (lowerMessage.match(/admission|apply|enrollment|join|പ്രവേശന|അപേക്ഷ|ചേരാൻ/)) {
      category = 'admission';
      response = responseDatabase.admission[currentLanguage];
    } else if (lowerMessage.match(/salah|prayer|namaz|pray|നമാസ്|സലാത്ത്|പ്രാർത്ഥന/)) {
      category = 'islamic';
      response = responseDatabase.salah[currentLanguage];
    } else if (lowerMessage.match(/campus|facilities|hostel|library|കാമ്പസ്|സൗകര്യങ്ങൾ|ഹോസ്റ്റൽ|ലൈബ്രറി/)) {
      category = 'general';
      response = responseDatabase.campus[currentLanguage];
    } else if (lowerMessage.match(/fee|cost|scholarship|ഫീസ്|പണം|സ്കോളർഷിപ്/)) {
      category = 'admission';
      response = isMalayalam ? 
        'ഞങ്ങളുടെ ഫീസ് ഘടന വളരെ മിതമായതാണ്. വിവിധ കോഴ്സുകൾക്കായി വ്യത്യസ്ത ഫീസ് ഘടനയുണ്ട്. യോഗ്യരായ വിദ്യാർത്ഥികൾക്ക് സ്കോളർഷിപ്പുകളും സാമ്പത്തിക സഹായവും ലഭ്യമാണ്. കൃത്യമായ വിവരങ്ങൾക്ക് ഞങ്ങളുടെ അഡ്മിഷൻ ഓഫീസിൽ ബന്ധപ്പെടുക.' :
        'Our fee structure is very reasonable and varies by course. Scholarships and financial assistance are available for deserving students. Merit-based and need-based financial aid programs help make quality Islamic education accessible to all. Please contact our admission office for detailed fee information and scholarship opportunities.';
    } else {
      response = isMalayalam ? 
        'നിങ്ങളുടെ ചോദ്യത്തിന് കൂടുതൽ വ്യക്തമായ ഉത്തരം നൽകാൻ എനിക്ക് കഴിയുന്നില്ല. ദയവായി കൂടുതൽ വ്യക്തമായി ചോദിക്കുക അല്ലെങ്കിൽ നിങ്ങൾക്ക് ഞങ്ങളുടെ അഡ്മിഷൻ ഓഫീസിൽ ബന്ധപ്പെടാവുന്നതാണ്: +91-XXXXXXXXXX' :
        'I need more specific information to provide you with an accurate answer. Please ask more detailed questions, or you can directly contact our admission office at +91-XXXXXXXXXX for personalized assistance. Our staff will be happy to help you with any queries.';
    }

    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: response,
      timestamp: new Date(),
      category
    };
  }, [currentLanguage, isMalayalam]);

  const handleSendMessage = useCallback(() => {
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: trimmedMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate realistic typing delay
    const typingDelay = Math.min(Math.max(trimmedMessage.length * 30, 800), 2500);
    
    setTimeout(() => {
      try {
        const assistantResponse = generateResponse(trimmedMessage);
        setMessages(prev => [...prev, assistantResponse]);
      } catch (error) {
        const errorMessage: Message = {
          id: Date.now().toString(),
          type: 'assistant',
          content: isMalayalam ? 
            'മാപ്പ്, ഒരു പിശക് സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.' :
            'Sorry, an error occurred. Please try again.',
          timestamp: new Date(),
          category: 'general',
          isError: true
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
        inputRef.current?.focus();
      }
    }, typingDelay);
  }, [inputMessage, isTyping, generateResponse, isMalayalam]);

  const handleQuickQuestion = useCallback((question: string) => {
    if (isTyping) return;
    setInputMessage(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  }, [isTyping, handleSendMessage]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const clearChat = useCallback(() => {
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'assistant',
      content: isMalayalam ? 
        'ചാറ്റ് ക്ലിയർ ചെയ്തു. എങ്ങനെ സഹായിക്കാം?' :
        'Chat cleared. How can I help you?',
      timestamp: new Date(),
      category: 'general'
    };
    setMessages([welcomeMessage]);
  }, [isMalayalam]);

  const copyMessage = useCallback(async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  }, []);

  const getCategoryColor = useCallback((category?: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'islamic': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'admission': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  }, []);

  const formatTime = useCallback((date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Experimental Feature Disclaimer */}
      <Alert className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
        <Info className="h-4 w-4" />
        <AlertDescription className="flex items-center justify-between">
          <div>
            <span className="font-medium">
              {isMalayalam ? "പരീക്ഷണാത്മക AI ഫീച്ചർ" : "Experimental AI Feature"}
            </span>
            {" - "}
            {isMalayalam ? 
              "AI8TY.com വികസിപ്പിച്ച ഡെമോ ഫീച്ചർ. പൂർണ്ണ വേർഷൻ ഉടൻ ലഭ്യമാകും." :
              "Demo feature developed by AI8TY.com. Full version coming soon."
            }
          </div>
          <a 
            href="https://ai8ty.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 ml-2 transition-colors"
            aria-label="Visit AI8TY website"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </AlertDescription>
      </Alert>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="h-8 w-8 text-emerald-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {isMalayalam ? "AI സ്റ്റഡി അസിസ്റ്റന്റ്" : "AI Study Assistant"}
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
          {isMalayalam ? 
            "ഇസ്ലാമിക് പഠനം, അക്കാദമിക് കോഴ്സുകൾ, പ്രവേശന പ്രക്രിയ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക" :
            "Ask questions about Islamic studies, academic courses, and admission process"
          }
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            {currentLanguage === 'en' ? 'മലയാളം' : 'English'}
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearChat}
            className="flex items-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            {isMalayalam ? 'ക്ലിയർ' : 'Clear'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Questions Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-sm">
                <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                {isMalayalam ? "ദ്രുത ചോദ്യങ്ങൾ" : "Quick Questions"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuickQuestion(question.text[currentLanguage])}
                  disabled={isTyping}
                  className="w-full justify-start text-left h-auto py-2 px-3 whitespace-normal"
                >
                  <Badge 
                    className={`mr-2 ${getCategoryColor(question.category)}`}
                    variant="secondary"
                  >
                    {question.category}
                  </Badge>
                  <span className="text-xs">{question.text[currentLanguage]}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-3">
          <Card className="shadow-lg h-[600px] flex flex-col">
            <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                  {isMalayalam ? "ചാറ്റ് അസിസ്റ്റന്റ്" : "Chat Assistant"}
                </div>
                <Badge variant="outline" className="text-xs">
                  {messages.filter(m => m.type === 'user').length} {isMalayalam ? 'സന്ദേശങ്ങൾ' : 'messages'}
                </Badge>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg relative group ${
                          message.type === 'user'
                            ? 'bg-emerald-600 text-white'
                            : message.isError 
                            ? 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100'
                            : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'assistant' ? (
                            <Bot className={`h-4 w-4 mt-1 flex-shrink-0 ${message.isError ? 'text-red-500' : 'text-emerald-600'}`} />
                          ) : (
                            <User className="h-4 w-4 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm leading-relaxed break-words">{message.content}</p>
                            <div className="flex items-center justify-between mt-2">
                              <div className="flex items-center gap-2">
                                {message.category && message.type === 'assistant' && (
                                  <Badge className={`text-xs ${getCategoryColor(message.category)}`}>
                                    {message.category}
                                  </Badge>
                                )}
                                <span className="text-xs opacity-70 flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {formatTime(message.timestamp)}
                                </span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyMessage(message.content, message.id)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                              >
                                {copiedMessageId === message.id ? (
                                  <Check className="h-3 w-3" />
                                ) : (
                                  <Copy className="h-3 w-3" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-emerald-600" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <Separator />
              
              <div className="p-4">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={isMalayalam ? "നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക..." : "Type your question..."}
                    onKeyPress={handleKeyPress}
                    disabled={isTyping}
                    className="flex-1"
                    maxLength={500}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!inputMessage.trim() || isTyping}
                    className="px-4"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                  <span>
                    {isMalayalam ? 'Enter അമർത്തി അയയ്ക്കുക' : 'Press Enter to send'}
                  </span>
                  <span>
                    {inputMessage.length}/500
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IslamicStudyAssistant;
