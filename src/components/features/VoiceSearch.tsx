
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Search } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

// Declare the Web Speech API types
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
  length: number;
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
  length: number;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onerror: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
  start(): void;
  stop(): void;
}

interface VoiceSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const VoiceSearch = ({ onSearch, placeholder }: VoiceSearchProps) => {
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert(isMalayalam ? 'വോയ്‌സ് സെർച്ച് ലഭ്യമല്ല' : 'Voice search not supported in this browser');
      return;
    }

    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognitionAPI() as SpeechRecognition;
    
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = currentLanguage === 'ml' ? 'ml-IN' : 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      setTranscript(transcript);
      
      if (event.results[current].isFinal) {
        onSearch(transcript);
        setIsListening(false);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  return (
    <div className="flex items-center space-x-2 bg-white rounded-lg shadow-md p-2">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder={placeholder || (isMalayalam ? 'തിരയുക...' : 'Search...')}
          className="w-full pl-10 pr-4 py-2 border-none outline-none rounded-md"
          onKeyPress={(e) => e.key === 'Enter' && onSearch(transcript)}
        />
      </div>
      <Button
        onClick={isListening ? stopListening : startListening}
        size="sm"
        variant={isListening ? "destructive" : "default"}
        className={`${isListening ? 'animate-pulse' : ''}`}
      >
        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default VoiceSearch;
