
import React, { ReactNode, useEffect } from 'react';
import schemas from '../schemas';

interface SchemaProviderProps {
  children: ReactNode;
  schemas?: any[];
}

/**
 * Simple Schema Provider that injects structured data for SEO
 */
const SchemaProvider = ({ children, schemas: customSchemas }: SchemaProviderProps) => {
  useEffect(() => {
    try {
      // Use custom schemas if provided, otherwise use default schemas
      const schemasToInject = customSchemas || schemas;
      
      // Remove existing schema script first
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      
      // Inject new schemas into document head
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(schemasToInject);
      document.head.appendChild(schemaScript);

      return () => {
        // Cleanup on unmount
        try {
          const scriptToRemove = document.head.querySelector('script[type="application/ld+json"]');
          if (scriptToRemove) {
            document.head.removeChild(scriptToRemove);
          }
        } catch (error) {
          console.warn('Schema cleanup failed:', error);
        }
      };
    } catch (error) {
      console.warn('Schema injection failed:', error);
    }
  }, [customSchemas]);

  return <>{children}</>;
};

export default SchemaProvider;
