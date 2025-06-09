
import React, { ReactNode } from "react";

interface SchemaProviderProps {
  children: ReactNode;
  schemas: any[];
}

const SchemaProvider = ({ children, schemas }: SchemaProviderProps) => {
  // Schema provider logic would go here
  console.log('Schemas loaded:', schemas);
  
  return <>{children}</>;
};

export default SchemaProvider;
