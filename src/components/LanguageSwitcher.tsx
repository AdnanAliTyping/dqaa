
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation, Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "icon" | "text" | "full";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LanguageSwitcher = ({
  variant = "full",
  size = "md",
  className,
}: LanguageSwitcherProps) => {
  const { currentLanguage, setLanguage, t } = useTranslation();

  const languages: { code: Language; name: string }[] = [
    { code: "en", name: t("language.english") },
    { code: "ml", name: t("language.malayalam") },
  ];

  // Size classes for the button
  const sizeClasses = {
    sm: "h-8 text-xs",
    md: "h-9 text-sm",
    lg: "h-10 text-base",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-2",
            sizeClasses[size],
            className
          )}
        >
          <Globe className="h-4 w-4" />
          {variant !== "icon" && (
            <>
              {variant === "full" && (
                <span className="mr-1">{t("language")}:</span>
              )}
              <span>
                {currentLanguage === "en"
                  ? "English"
                  : "മലയാളം"}
              </span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={cn(
              "cursor-pointer",
              currentLanguage === lang.code && "font-bold bg-muted"
            )}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
