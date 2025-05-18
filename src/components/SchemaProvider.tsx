
import { Helmet } from 'react-helmet-async';

interface SchemaProviderProps {
  schemas: Record<string, any>[];
  children?: React.ReactNode;
}

const SchemaProvider = ({ schemas, children }: SchemaProviderProps) => {
  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script 
          key={index} 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </Helmet>
  );
};

export default SchemaProvider;
