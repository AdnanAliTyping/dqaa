
import { lazy } from 'react';

// Lazy load page components with custom loading component
export const createLazyComponent = (importFunc: () => Promise<any>) => {
  return lazy(() => 
    importFunc().then(module => {
      // Add artificial delay in development for testing
      if (process.env.NODE_ENV === 'development') {
        return new Promise(resolve => {
          setTimeout(() => resolve(module), 100);
        });
      }
      return module;
    })
  );
};

// Pre-load critical components
export const preloadComponent = (importFunc: () => Promise<any>) => {
  // Only preload in production
  if (process.env.NODE_ENV === 'production') {
    importFunc();
  }
};
