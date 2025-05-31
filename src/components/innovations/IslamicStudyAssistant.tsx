
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, BookOpen, Lightbulb, User, Bot } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  category?: 'academic' | 'islamic' | 'admission' | 'general';
}

const IslamicStudyAssistant = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: isMalayalam ? 
        'അസ്സലാമു അലൈകും! ഞാൻ DQAA യുടെ AI സ്റ്റഡി അസിസ്റ്റന്റാണ്. ഇസ്ലാമിക് പഠനം, അക്കാദമിക് കോഴ്സുകൾ, അല്ലെങ്കിൽ പ്രവേശനം സംബന്ധിച്ച് എന്തെങ്കിലും ചോദ്യങ്ങൾ ഉണ്ടോ?' :
        'Assalamu Alaikum! I\'m DQAA\'s AI Study Assistant. How can I help you with Islamic studies, academic courses, or admissions today?',
      timestamp: new Date(),
      category: 'general'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    {
      text: isMalayalam ? "ഹിഫ്സ് പ്രോഗ്രാം എന്താണ്?" : "What is the Hifz program?",
      category: 'academic' as const
    },
    {
      text: isMalayalam ? "പ്രവേശന പ്രക്രിയ" : "Admission process",
      category: 'admission' as const
    },
    {
      text: isMalayalam ? "നമാസിന്റെ പ്രാധാന്യം" : "Importance of Salah",
      category: 'islamic' as const
    },
    {
      text: isMalayalam ? "കാമ്പസ് സൗകര്യങ്ങൾ" : "Campus facilities",
      category: 'general' as const
    }
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateResponse = (userMessage: string): Message => {
    let response = '';
    let category: Message['category'] = 'general';

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hifz') || lowerMessage.includes('memorization') || lowerMessage.includes('ഹിഫ്സ്')) {
      category = 'academic';
      response = isMalayalam ? 
        'ഹിഫ്സ് പ്രോഗ്രാം ഖുർആൻ മനഃപാഠമാക്കുന്നതിനുള്ള ഒരു സമഗ്ര കോഴ്സാണ്. ഞങ്ങളുടെ പരിചയസമ്പന്നരായ ഉസ്താദുമാരുടെ മാർഗ്ഗദർശനത്തിൽ, വിദ്യാർത്ഥികൾ ഖുർആൻ പൂർണ്ണമായും മനഃപാഠമാക്കുകയും സാധാരണ അക്കാദമിക് വിഷയങ്ങളും പഠിക്കുകയും ചെയ്യുന്നു.' :
        'Our Hifz program is a comprehensive course for Quran memorization. Under the guidance of experienced Ustads, students memorize the entire Quran while also studying regular academic subjects. The program typically takes 3-5 years to complete.';
    } else if (lowerMessage.includes('admission') || lowerMessage.includes('apply') || lowerMessage.includes('പ്രവേശന')) {
      category = 'admission';
      response = isMalayalam ? 
        '2025-26 അക്കാദമിക് വർഷത്തേക്കുള്ള പ്രവേശനം തുറന്നിരിക്കുന്നു! എൻട്രൻസ് എക്സാമിനേഷൻ അടിസ്ഥാനത്തിലാണ് തിരഞ്ഞെടുപ്പ്. ആവശ്യമായ രേഖകൾ: സ്കൂൾ ട്രാൻസ്ഫർ സർട്ടിഫിക്കറ്റ്, ജനന സർട്ടിഫിക്കറ്റ്, ഫോട്ടോഗ്രാഫുകൾ.' :
        'Admissions for 2025-26 are now open! Selection is based on entrance examination performance. Required documents include school transfer certificate, birth certificate, and photographs. Contact our admission office for detailed information.';
    } else if (lowerMessage.includes('salah') || lowerMessage.includes('prayer') || lowerMessage.includes('namaz') || lowerMessage.includes('നമാസ്')) {
      category = 'islamic';
      response = isMalayalam ? 
        'നമാസ് ഇസ്ലാമിന്റെ രണ്ടാമത്തെ സ്തംഭമാണ്. ഇത് അല്ലാഹുവിനോടുള്ള നേരിട്ടുള്ള ബന്ധമാണ്. ദിവസേന അഞ്ച് നേരം നമാസ് അടയ്ക്കുന്നത് ഒരു മുസ്ലിമിന്റെ കടമയാണ്. ഇത് ആത്മീയ ശുദ്ധീകരണവും അച്ചടക്കവും നൽകുന്നു.' :
        'Salah is the second pillar of Islam and represents our direct connection with Allah. The five daily prayers are obligatory for every Muslim. It provides spiritual purification, discipline, and keeps us mindful of our Creator throughout the day.';
    } else if (lowerMessage.includes('campus') || lowerMessage.includes('facilities') || lowerMessage.includes('കാമ്പസ്')) {
      category = 'general';
      response = isMalayalam ? 
        'ഞങ്ങളുടെ കാമ്പസിൽ സ്മാർട്ട് ക്ലാസ്റൂമുകൾ, കമ്പ്യൂട്ടർ ലാബ്, വിശാലമായ ലൈബ്രറി, മസ്ജിദ്, ഡോർമിറ്ററികൾ, കളിസ്ഥലങ്ങൾ എന്നിവ ഉൾപ്പെടുന്നു. വിദ്യാർത്ഥികൾക്ക് മികച്ച പഠന അന്തരീക്ഷം ഉറപ്പാക്കുന്നതിനായി എല്ലാ ആധുനിക സൗകര്യങ്ങളും ലഭ്യമാണ്.' :
        'Our campus features smart classrooms, computer lab, extensive library, mosque, dormitories, and recreational areas. All modern facilities are available to ensure an excellent learning environment for students.';
    } else {
      response = isMalayalam ? 
        'നിങ്ങളുടെ ചോദ്യത്തിന് കൂടുതൽ വിവരങ്ങൾ ആവശ്യമാണ്. ദയവായി കൂടുതൽ വ്യക്തമായി ചോദിക്കുക അല്ലെങ്കിൽ ഞങ്ങളുടെ അഡ്മിഷൻ ഓഫീസിൽ ബന്ധപ്പെടുക.' :
        'I need more information to answer your question properly. Please be more specific, or you can contact our admission office for detailed assistance.';
    }

    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: response,
      timestamp: new Date(),
      category
    };
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const assistantResponse = generateResponse(inputMessage);
      setMessages(prev => [...prev, assistantResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'islamic': return 'bg-green-100 text-green-800';
      case 'admission': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="h-8 w-8 text-dqaa-500 mr-3" />
            <h2 className="text-3xl font-bold text-dqaa-900">
              {isMalayalam ? "AI സ്റ്റഡി അസിസ്റ്റന്റ്" : "AI Study Assistant"}
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isMalayalam ? 
              "ഇസ്ലാമിക് പഠനം, അക്കാദമിക് കോഴ്സുകൾ, പ്രവേശന പ്രക്രിയ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക" :
              "Ask questions about Islamic studies, academic courses, and admission process"
            }
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="bg-dqaa-50">
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-dqaa-500" />
              {isMalayalam ? "ചാറ്റ് അസിസ്റ്റന്റ്" : "Chat Assistant"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-dqaa-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'assistant' ? (
                          <Bot className="h-4 w-4 mt-1 text-dqaa-500" />
                        ) : (
                          <User className="h-4 w-4 mt-1" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{message.content}</p>
                          {message.category && message.type === 'assistant' && (
                            <Badge className={`mt-2 text-xs ${getCategoryColor(message.category)}`}>
                              {message.category}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-dqaa-500" />
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

            <div className="border-t p-4">
              <div className="flex space-x-2 mb-3">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(question.text)}
                    className="text-xs"
                  >
                    <Lightbulb className="h-3 w-3 mr-1" />
                    {question.text}
                  </Button>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={isMalayalam ? "നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക..." : "Type your question..."}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isTyping}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IslamicStudyAssistant;
