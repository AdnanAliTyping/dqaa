
import React, { ReactNode, useEffect } from 'react';
import schemas from '../schemas';

interface SchemaProviderProps {
  children: ReactNode;
}

/**
 * Simple Schema Provider that injects structured data for SEO
 */
const SchemaProvider = ({ children }: SchemaProviderProps) => {
  useEffect(() => {
    // Inject schemas into document head
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemas);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup on unmount
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return <>{children}</>;
};

export default SchemaProvider;
