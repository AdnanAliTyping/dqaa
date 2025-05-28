
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";
import { searchContent, SearchResult } from "@/lib/search";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  useEffect(() => {
    const saved = localStorage.getItem("recent-searches");
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsSearching(true);
    const searchResults = await searchContent(searchQuery);
    setResults(searchResults);
    setIsSearching(false);

    // Save to recent searches
    const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recent-searches", JSON.stringify(updated));
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (query) {
        handleSearch(query);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const popularSearches = isMalayalam 
    ? ["ഹിഫ്സ് പ്രോഗ്രാം", "പ്രവേശനം", "സൗകര്യങ്ങൾ", "ഫീസ്"]
    : ["Hifz Program", "Admissions", "Facilities", "Fees"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={isMalayalam ? "തിരയുക..." : "Search..."}
              className="pl-10 pr-10 text-lg border-0 focus-visible:ring-0 shadow-none"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </DialogHeader>

        <div className="px-6 pb-6 overflow-auto max-h-96">
          {!query && (
            <div className="space-y-4">
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {isMalayalam ? "സമീപകാല തിരയലുകൾ" : "Recent Searches"}
                  </h3>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => setQuery(search)}
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {isMalayalam ? "ജനപ്രിയ തിരയലുകൾ" : "Popular Searches"}
                </h3>
                <div className="space-y-1">
                  {popularSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full justify-start text-left h-auto py-2"
                      onClick={() => setQuery(search)}
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {query && (
            <div className="space-y-3">
              {isSearching && (
                <div className="text-center py-8 text-gray-500">
                  {isMalayalam ? "തിരയുന്നു..." : "Searching..."}
                </div>
              )}

              {!isSearching && results.length === 0 && query && (
                <div className="text-center py-8 text-gray-500">
                  {isMalayalam ? "ഫലങ്ങളൊന്നും കണ്ടെത്തിയില്ല" : "No results found"}
                </div>
              )}

              {results.map((result, index) => (
                <Link
                  key={index}
                  to={result.url}
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">
                        {result.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {result.excerpt}
                      </p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {result.category}
                        </span>
                        <span className="ml-2">{result.url}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
