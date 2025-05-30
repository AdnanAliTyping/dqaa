
import { Helmet } from 'react-helmet-async';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/enhancedSchema';
import SchemaProvider from '@/components/SchemaProvider';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  breadcrumbs?: { name: string; url: string }[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  locale?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
  url = "https://www.darulquranaa.com/",
  type = "website",
  breadcrumbs = [],
  article,
  locale = "en_US"
}: SEOHeadProps) => {
  const schemas = [
    generateLocalBusinessSchema(),
    ...(breadcrumbs.length > 0 ? [generateBreadcrumbSchema(breadcrumbs)] : [])
  ];

  return (
    <SchemaProvider schemas={schemas}>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={url} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Darul Quran Abdulla Academy" />
        <meta property="og:locale" content={locale} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@darulquranindia" />
        
        {/* Article specific meta tags */}
        {article && (
          <>
            {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
            {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
            {article.author && <meta property="article:author" content={article.author} />}
            {article.section && <meta property="article:section" content={article.section} />}
            {article.tags && article.tags.map(tag => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Darul Quran Abdulla Academy" />
        <meta name="publisher" content="Darul Quran Abdulla Academy" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Panamanna, Kerala" />
        <meta name="geo.position" content="10.7905;76.2711" />
        <meta name="ICBM" content="10.7905, 76.2711" />
        
        {/* Hreflang for multilingual support */}
        <link rel="alternate" hrefLang="en" href={url} />
        <link rel="alternate" hrefLang="ml" href={url} />
        <link rel="alternate" hrefLang="x-default" href={url} />
        
        {/* Additional structured data for educational institution */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": title,
            "description": description,
            "url": url,
            "inLanguage": ["en", "ml"],
            "isPartOf": {
              "@type": "WebSite",
              "name": "Darul Quran Abdulla Academy",
              "url": "https://www.darulquranaa.com/"
            }
          })}
        </script>
      </Helmet>
    </SchemaProvider>
  );
};

export default SEOHead;
