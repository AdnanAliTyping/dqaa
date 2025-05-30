
import { useState, useEffect } from "react";
import { Search, Filter, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslation } from "@/lib/i18n";
import { searchContent } from "@/lib/search";

interface AdvancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchFilters {
  contentType: string[];
  language: string[];
  dateRange: string;
}

const AdvancedSearchModal = ({ isOpen, onClose }: AdvancedSearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    contentType: [],
    language: [],
    dateRange: "all"
  });
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const contentTypes = [
    { id: "pages", label: isMalayalam ? "പേജുകൾ" : "Pages" },
    { id: "news", label: isMalayalam ? "വാർത്തകൾ" : "News" },
    { id: "programs", label: isMalayalam ? "പ്രോഗ്രാമുകൾ" : "Programs" },
    { id: "faculty", label: isMalayalam ? "ഫാക്കൽറ്റി" : "Faculty" }
  ];

  const languages = [
    { id: "en", label: "English" },
    { id: "ml", label: "മലയാളം" },
    { id: "ar", label: "العربية" }
  ];

  const dateRanges = [
    { id: "all", label: isMalayalam ? "എല്ലാ സമയവും" : "All time" },
    { id: "week", label: isMalayalam ? "കഴിഞ്ഞ ആഴ്ച" : "Past week" },
    { id: "month", label: isMalayalam ? "കഴിഞ്ഞ മാസം" : "Past month" },
    { id: "year", label: isMalayalam ? "കഴിഞ്ഞ വർഷം" : "Past year" }
  ];

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    try {
      const searchResults = await searchContent(query, filters);
      setResults(searchResults);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => {
      if (filterType === "contentType" || filterType === "language") {
        const currentArray = prev[filterType] as string[];
        const newArray = currentArray.includes(value)
          ? currentArray.filter(item => item !== value)
          : [...currentArray, value];
        return { ...prev, [filterType]: newArray };
      } else {
        return { ...prev, [filterType]: value };
      }
    });
  };

  const clearFilters = () => {
    setFilters({
      contentType: [],
      language: [],
      dateRange: "all"
    });
  };

  const getActiveFilterCount = () => {
    return filters.contentType.length + filters.language.length + (filters.dateRange !== "all" ? 1 : 0);
  };

  useEffect(() => {
    if (query) {
      const debounceTimer = setTimeout(handleSearch, 300);
      return () => clearTimeout(debounceTimer);
    } else {
      setResults([]);
    }
  }, [query, filters]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            {isMalayalam ? "വിപുലമായ തിരയൽ" : "Advanced Search"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4 flex-1 overflow-hidden">
          {/* Search Input */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                placeholder={isMalayalam ? "തിരയുക..." : "Search..."}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pr-10"
                autoFocus
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {isMalayalam ? "ഫിൽട്ടറുകൾ" : "Filters"}
              {getActiveFilterCount() > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {getActiveFilterCount()}
                </Badge>
              )}
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="border rounded-lg p-4 bg-gray-50 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">
                  {isMalayalam ? "ഫിൽട്ടറുകൾ" : "Filters"}
                </h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  {isMalayalam ? "ക്ലിയർ ചെയ്യുക" : "Clear All"}
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Content Type Filter */}
                <div>
                  <h4 className="font-medium mb-2">
                    {isMalayalam ? "ഉള്ളടക്ക തരം" : "Content Type"}
                  </h4>
                  <div className="space-y-2">
                    {contentTypes.map((type) => (
                      <div key={type.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={type.id}
                          checked={filters.contentType.includes(type.id)}
                          onCheckedChange={() => handleFilterChange("contentType", type.id)}
                        />
                        <label htmlFor={type.id} className="text-sm">
                          {type.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Language Filter */}
                <div>
                  <h4 className="font-medium mb-2">
                    {isMalayalam ? "ഭാഷ" : "Language"}
                  </h4>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <div key={lang.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={lang.id}
                          checked={filters.language.includes(lang.id)}
                          onCheckedChange={() => handleFilterChange("language", lang.id)}
                        />
                        <label htmlFor={lang.id} className="text-sm">
                          {lang.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Range Filter */}
                <div>
                  <h4 className="font-medium mb-2">
                    {isMalayalam ? "സമയ പരിധി" : "Date Range"}
                  </h4>
                  <div className="space-y-2">
                    {dateRanges.map((range) => (
                      <div key={range.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={range.id}
                          checked={filters.dateRange === range.id}
                          onCheckedChange={() => handleFilterChange("dateRange", range.id)}
                        />
                        <label htmlFor={range.id} className="text-sm">
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto">
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dqaa-500 mx-auto"></div>
                <p className="mt-2 text-gray-600">
                  {isMalayalam ? "തിരയുന്നു..." : "Searching..."}
                </p>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  {isMalayalam ? 
                    `${results.length} ഫലങ്ങൾ കണ്ടെത്തി` : 
                    `${results.length} results found`
                  }
                </p>
                {results.map((result, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                    <h3 className="font-medium text-dqaa-700 mb-1">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {result.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {result.type}
                      </Badge>
                      {result.language && (
                        <Badge variant="secondary" className="text-xs">
                          {result.language}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : query ? (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  {isMalayalam ? "ഫലങ്ങളൊന്നും കണ്ടെത്തിയില്ല" : "No results found"}
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  {isMalayalam ? 
                    "തിരയാൻ ആരംഭിക്കുക..." : 
                    "Start typing to search..."
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedSearchModal;
