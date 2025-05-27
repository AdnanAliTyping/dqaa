
import { useEffect } from 'react';

interface PerformanceMetrics {
  name: string;
  value: number;
  delta?: number;
}

export const usePerformance = (routeName: string) => {
  useEffect(() => {
    // Mark route navigation
    if ('performance' in window) {
      performance.mark(`route-${routeName}-start`);
    }

    return () => {
      if ('performance' in window) {
        performance.mark(`route-${routeName}-end`);
        performance.measure(`route-${routeName}`, `route-${routeName}-start`, `route-${routeName}-end`);
      }
    };
  }, [routeName]);
};

export const measureWebVitals = (onPerfEntry?: (metric: PerformanceMetrics) => void) => {
  if (onPerfEntry && 'performance' in window) {
    // Measure Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        onPerfEntry({
          name: entry.name,
          value: entry.startTime,
        });
      });
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

    // Cleanup function
    return () => observer.disconnect();
  }
};
