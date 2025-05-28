
import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { useAccessibility } from "@/hooks/useAccessibility";

interface AccessibleSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccessibleSearchModal = ({ isOpen, onClose }: AccessibleSearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";
  const { announce, trapFocus } = useAccessibility();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  trapFocus(modalRef);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
      announce(isMalayalam ? "സെർച്ച് മോഡൽ തുറന്നു" : "Search modal opened", "polite");
    }
  }, [isOpen, announce, isMalayalam]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      announce(`${results.length} ${isMalayalam ? "ഫലങ്ങൾ കണ്ടെത്തി" : "results found"}`, "polite");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        ref={modalRef}
        className="max-w-2xl max-h-[80vh] overflow-hidden"
        onKeyDown={handleKeyDown}
        aria-label={isMalayalam ? "സെർച്ച് ഡയലോഗ്" : "Search dialog"}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{isMalayalam ? "തിരയുക" : "Search"}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label={isMalayalam ? "സെർച്ച് അടയ്ക്കുക" : "Close search"}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder={isMalayalam ? "തിരയുക..." : "Search..."}
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10"
              aria-label={isMalayalam ? "സെർച്ച് ഇൻപുട്ട്" : "Search input"}
              aria-describedby="search-instructions"
            />
            <div id="search-instructions" className="sr-only">
              {isMalayalam ? 
                "ടൈപ്പ് ചെയ്ത് തിരയാൻ തുടങ്ങുക, ESC അമർത്തി അടയ്ക്കുക" : 
                "Start typing to search, press ESC to close"
              }
            </div>
          </div>
          
          <div 
            role="region" 
            aria-live="polite" 
            aria-label={isMalayalam ? "സെർച്ച് ഫലങ്ങൾ" : "Search results"}
            className="min-h-[200px]"
          >
            {query && results.length === 0 && (
              <p className="text-center text-gray-500 py-8">
                {isMalayalam ? "ഫലങ്ങളൊന്നും കണ്ടെത്തിയില്ല" : "No results found"}
              </p>
            )}
            
            {results.length > 0 && (
              <div className="space-y-2">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg hover:bg-gray-50 focus:bg-gray-50"
                    tabIndex={0}
                    role="button"
                    aria-label={`${result.title} - ${result.type}`}
                  >
                    <h3 className="font-medium">{result.title}</h3>
                    <p className="text-sm text-gray-600">{result.excerpt}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibleSearchModal;
