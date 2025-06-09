
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
    // Use custom schemas if provided, otherwise use default schemas
    const schemasToInject = customSchemas || schemas;
    
    // Inject schemas into document head
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemasToInject);
    document.head.appendChild(schemaScript);

    return () => {
      // Cleanup on unmount
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [customSchemas]);

  return <>{children}</>;
};

export default SchemaProvider;
