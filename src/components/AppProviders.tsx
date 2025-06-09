
import React, { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { useTranslation } from "@/lib/i18n";
import SchemaProvider from "./SchemaProvider";

interface AppProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

/**
 * Unified provider component that handles all app-level providers
 * including React Query, Tooltips, Language management, and Schema injection
 */
const AppProviders = ({ children }: AppProvidersProps) => {
  const { currentLanguage } = useTranslation();
  
  // Language management - sets HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    
    if (currentLanguage === 'ml') {
      document.documentElement.classList.add('lang-ml');
    } else {
      document.documentElement.classList.remove('lang-ml');
    }
  }, [currentLanguage]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SchemaProvider>
          <Toaster />
          {children}
        </SchemaProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
