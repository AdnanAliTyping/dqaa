
import { Helmet } from 'react-helmet-async';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/enhancedSchema';
import { generateHreflangTags, generateRichSnippetSchema, generatePrayerTimeSchema } from '@/lib/enhancedSEO';
import SchemaProvider from '@/components/SchemaProvider';

interface EnhancedSEOHeadProps {
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
  alternateUrls?: { lang: string; url: string }[];
}

const EnhancedSEOHead = ({
  title,
  description,
  keywords,
  image = "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
  url = "https://www.darulquranaa.com/",
  type = "website",
  breadcrumbs = [],
  article,
  locale = "en_US",
  alternateUrls = []
}: EnhancedSEOHeadProps) => {
  const schemas = [
    generateLocalBusinessSchema(),
    generateRichSnippetSchema(),
    generatePrayerTimeSchema(),
    ...(breadcrumbs.length > 0 ? [generateBreadcrumbSchema(breadcrumbs)] : [])
  ];

  const hreflangTags = generateHreflangTags(new URL(url).pathname);

  return (
    <SchemaProvider schemas={schemas}>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={url} />
        
        {/* Enhanced Meta Tags */}
        <meta name="author" content="Darul Quran Abdulla Academy" />
        <meta name="publisher" content="Darul Quran Abdulla Academy" />
        <meta name="copyright" content="Darul Quran Abdulla Academy" />
        <meta name="language" content={locale.startsWith('ml') ? 'Malayalam' : 'English'} />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ottapalam, Kerala" />
        <meta name="geo.position" content="10.7905;76.2711" />
        <meta name="ICBM" content="10.7905, 76.2711" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Darul Quran Abdulla Academy - Islamic Education Excellence" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Darul Quran Abdulla Academy" />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale.startsWith('en') ? 'ml_IN' : 'en_US'} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@darulquranindia" />
        <meta name="twitter:creator" content="@darulquranindia" />
        
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
        
        {/* Hreflang for multilingual support */}
        {hreflangTags.map(tag => (
          <link key={tag.hreflang} rel="alternate" hrefLang={tag.hreflang} href={tag.href} />
        ))}
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jotfor.ms" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DQAA" />
        
        {/* Theme colors */}
        <meta name="theme-color" content="#134e4a" />
        <meta name="msapplication-navbutton-color" content="#134e4a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#134e4a" />
      </Helmet>
    </SchemaProvider>
  );
};

export default EnhancedSEOHead;
