
import React, { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import SafeErrorBoundary from "./SafeErrorBoundary";

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
 * Language management component - simplified without useTranslation hook
 */
const LanguageManager = ({ children }: AppProvidersProps) => {
  useEffect(() => {
    try {
      // Simple language detection without hooks
      const storedLang = localStorage.getItem('dqaa-language') || 'en';
      if (document?.documentElement) {
        document.documentElement.lang = storedLang;
        
        if (storedLang === 'ml') {
          document.documentElement.classList.add('lang-ml');
        } else {
          document.documentElement.classList.remove('lang-ml');
        }
      }
    } catch (error) {
      console.warn('Language setting failed:', error);
    }
  }, []);

  return <>{children}</>;
};

/**
 * Simplified provider component - removing problematic TooltipProvider and SchemaProvider
 */
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <SafeErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageManager>
          {children}
          <Toaster />
        </LanguageManager>
      </QueryClientProvider>
    </SafeErrorBoundary>
  );
};

export default AppProviders;
