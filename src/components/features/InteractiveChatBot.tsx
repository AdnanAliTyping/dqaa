
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const InteractiveChatBot = () => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: '1',
        text: isMalayalam ? 
          'സലാമുന്ന ആലൈകുമ്! ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയിലേക്ക് സ്വാഗതം. എങ്ങനെ സഹായിക്കാം?' :
          'Assalamu Alaikum! Welcome to Darul Quran Abdulla Academy. How can I help you today?',
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, isMalayalam]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('admission') || input.includes('apply')) {
      return isMalayalam ? 
        'പ്രവേശനത്തിനായി ഞങ്ങളുടെ വെബ്‌സൈറ്റിലെ അപേക്ഷാ ഫോം പൂരിപ്പിക്കുക അല്ലെങ്കിൽ +91-9447987960 നമ്പറിൽ വിളിക്കുക.' :
        'For admissions, please fill out our application form on the website or call us at +91-9447987960.';
    }
    
    if (input.includes('fees') || input.includes('cost')) {
      return isMalayalam ? 
        'ഫീസ് വിവരങ്ങൾക്കായി ദയവായി ഞങ്ങളുടെ പ്രവേശന വിഭാഗവുമായി ബന്ധപ്പെടുക.' :
        'For detailed fee structure, please contact our admissions department.';
    }
    
    if (input.includes('program') || input.includes('course')) {
      return isMalayalam ? 
        'ഞങ്ങൾ ഹിഫ്‌സ്, ശരീഅത്ത്, ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ എന്നിവ വാഗ്ദാനം ചെയ്യുന്നു.' :
        'We offer Hifz, Shariah, and Bayanul Quran Diploma programs.';
    }
    
    return isMalayalam ? 
      'കൂടുതൽ വിവരങ്ങൾക്കായി ഞങ്ങളുടെ കൗൺസിലറുമായി ബന്ധപ്പെടുക അല്ലെങ്കിൽ വെബ്‌സൈറ്റ് പര്യവേക്ഷണം ചെയ്യുക.' :
      'For more information, please contact our counselor or explore our website.';
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-40 bg-dqaa-600 hover:bg-dqaa-700 text-white rounded-full w-14 h-14 shadow-lg md:hidden"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 z-40 w-80 h-96 shadow-2xl md:hidden">
      <CardHeader className="bg-dqaa-600 text-white p-3 rounded-t-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-medium">
              {isMalayalam ? 'DQAA സഹായി' : 'DQAA Assistant'}
            </span>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            size="sm"
            variant="ghost"
            className="text-white hover:bg-dqaa-700 p-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 flex flex-col h-80">
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.isUser
                    ? 'bg-dqaa-500 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="p-3 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={isMalayalam ? 'സന്ദേശം ടൈപ്പ് ചെയ്യുക...' : 'Type your message...'}
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-dqaa-500"
            />
            <Button onClick={handleSendMessage} size="sm" className="bg-dqaa-600 hover:bg-dqaa-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveChatBot;
