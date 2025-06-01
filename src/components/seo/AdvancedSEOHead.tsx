
import { Helmet } from 'react-helmet-async';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/enhancedSchema';
import { generateHreflangTags, generateRichSnippetSchema, generatePrayerTimeSchema } from '@/lib/enhancedSEO';
import SchemaProvider from '@/components/SchemaProvider';

interface AdvancedSEOHeadProps {
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
  canonicalUrl?: string;
  noindex?: boolean;
  priority?: 'high' | 'medium' | 'low';
}

const AdvancedSEOHead = ({
  title,
  description,
  keywords,
  image = "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
  url = "https://www.darulquranaa.com/",
  type = "website",
  breadcrumbs = [],
  article,
  locale = "en_US",
  alternateUrls = [],
  canonicalUrl,
  noindex = false,
  priority = 'medium'
}: AdvancedSEOHeadProps) => {
  const schemas = [
    generateLocalBusinessSchema(),
    generateRichSnippetSchema(),
    generatePrayerTimeSchema(),
    ...(breadcrumbs.length > 0 ? [generateBreadcrumbSchema(breadcrumbs)] : [])
  ];

  const hreflangTags = generateHreflangTags(new URL(url).pathname);

  // Generate critical CSS for above-the-fold content
  const criticalCSS = `
    .hero-section { 
      background: linear-gradient(135deg, #134e4a 0%, #065f46 100%);
      min-height: 85vh;
    }
    .mobile-scroll { 
      display: flex; 
      overflow-x: auto; 
      scroll-snap-type: x mandatory; 
      -webkit-overflow-scrolling: touch;
    }
    .mobile-card { 
      flex: none; 
      width: 280px; 
      scroll-snap-align: start; 
      margin-right: 1rem;
    }
  `;

  return (
    <SchemaProvider schemas={schemas}>
      <Helmet>
        {/* Critical CSS Inline */}
        <style type="text/css">{criticalCSS}</style>
        
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Robots and SEO directives */}
        <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
        <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        <meta name="bingbot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl || url} />
        
        {/* Enhanced Meta Tags */}
        <meta name="author" content="Darul Quran Abdulla Academy" />
        <meta name="publisher" content="Darul Quran Abdulla Academy" />
        <meta name="copyright" content="© 2025 Darul Quran Abdulla Academy" />
        <meta name="language" content={locale.startsWith('ml') ? 'Malayalam' : 'English'} />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="doc-type" content="Web Page" />
        <meta name="doc-rights" content="Copywritten Work" />
        <meta name="doc-class" content="Published" />
        
        {/* Priority hints */}
        {priority === 'high' && <meta name="priority" content="high" />}
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Ottapalam, Kerala, India" />
        <meta name="geo.position" content="10.7905;76.2711" />
        <meta name="ICBM" content="10.7905, 76.2711" />
        <meta name="geo.country" content="India" />
        <meta name="geo.state" content="Kerala" />
        <meta name="geo.city" content="Ottapalam" />
        
        {/* Business Information */}
        <meta name="business.contact_data.street_address" content="Darul Quran Campus, Kothakurssi" />
        <meta name="business.contact_data.locality" content="Panamanna" />
        <meta name="business.contact_data.region" content="Kerala" />
        <meta name="business.contact_data.postal_code" content="679501" />
        <meta name="business.contact_data.country_name" content="India" />
        <meta name="business.contact_data.phone" content="+91-9447987960" />
        <meta name="business.contact_data.email" content="info@darulquranaa.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Darul Quran Abdulla Academy - Excellence in Islamic Education" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Darul Quran Abdulla Academy" />
        <meta property="og:locale" content={locale} />
        <meta property="og:locale:alternate" content={locale.startsWith('en') ? 'ml_IN' : 'en_US'} />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        
        {/* Additional OG Properties */}
        <meta property="business:contact_data:street_address" content="Darul Quran Campus, Kothakurssi" />
        <meta property="business:contact_data:locality" content="Panamanna" />
        <meta property="business:contact_data:region" content="Kerala" />
        <meta property="business:contact_data:postal_code" content="679501" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta property="place:location:latitude" content="10.7905" />
        <meta property="place:location:longitude" content="76.2711" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content="Darul Quran Abdulla Academy" />
        <meta name="twitter:site" content="@darulquranindia" />
        <meta name="twitter:creator" content="@darulquranindia" />
        <meta name="twitter:domain" content="darulquranaa.com" />
        
        {/* Article specific meta tags */}
        {article && (
          <>
            <meta property="article:published_time" content={article.publishedTime} />
            <meta property="article:modified_time" content={article.modifiedTime} />
            <meta property="article:author" content={article.author} />
            <meta property="article:section" content={article.section} />
            <meta property="article:publisher" content="https://www.darulquranaa.com/" />
            {article.tags?.map(tag => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}
        
        {/* Hreflang for multilingual support */}
        {hreflangTags.map(tag => (
          <link key={tag.hreflang} rel="alternate" hrefLang={tag.hreflang} href={tag.href} />
        ))}
        
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jotfor.ms" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//checkout.razorpay.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png" as="image" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" as="style" />
        
        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="address=yes" />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DQAA" />
        <meta name="application-name" content="DQAA" />
        
        {/* Theme colors and PWA */}
        <meta name="theme-color" content="#134e4a" />
        <meta name="msapplication-navbutton-color" content="#134e4a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#134e4a" />
        <meta name="msapplication-TileColor" content="#134e4a" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Educational specific meta tags */}
        <meta name="educational.audience" content="students, parents, teachers" />
        <meta name="educational.subject" content="Islamic Studies, Quran Memorization, Religious Education" />
        <meta name="educational.type" content="Higher Education Institution" />
        <meta name="educational.grade" content="Secondary, Higher Secondary, Diploma" />
        
        {/* Local business meta tags */}
        <meta name="business.hours" content="mo-sa 08:00-17:00" />
        <meta name="business.phone" content="+91-9447987960" />
        <meta name="business.fax" content="+91-9447987960" />
        <meta name="business.email" content="info@darulquranaa.com" />
        
        {/* Social media verification */}
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        
        {/* AMP support if needed */}
        {/* <link rel="amphtml" href={`${url}amp/`} /> */}
      </Helmet>
    </SchemaProvider>
  );
};

export default AdvancedSEOHead;
