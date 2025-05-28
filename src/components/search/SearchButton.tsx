
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";
import { useTranslation } from "@/lib/i18n";

const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsSearchOpen(true)}
        className="hidden md:flex items-center space-x-2 text-gray-600 border-gray-200 hover:bg-gray-50"
      >
        <Search className="h-4 w-4" />
        <span>{isMalayalam ? "തിരയുക..." : "Search..."}</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsSearchOpen(true)}
        className="md:hidden"
      >
        <Search className="h-5 w-5" />
      </Button>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default SearchButton;
