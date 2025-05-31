
interface PrayerTimeSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  location: {
    "@type": string;
    name: string;
    address: {
      "@type": string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  schedule: {
    "@type": string;
    scheduleTimezone: string;
    byDay: string[];
  };
}

interface NewsArticleSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
}

interface TestimonialSchema {
  "@context": string;
  "@type": string;
  review: {
    "@type": string;
    reviewRating: {
      "@type": string;
      ratingValue: number;
      bestRating: number;
    };
    author: {
      "@type": string;
      name: string;
    };
    reviewBody: string;
  }[];
  aggregateRating: {
    "@type": string;
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
  };
}

export const generatePrayerTimeSchema = (): PrayerTimeSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Schedule",
    "name": "Daily Prayer Times - Darul Quran Abdulla Academy",
    "description": "Islamic prayer times (Salah) for Ottapalam, Kerala, India in Indian Standard Time",
    "location": {
      "@type": "Place",
      "name": "Ottapalam, Kerala",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ottapalam",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    },
    "schedule": {
      "@type": "Schedule",
      "scheduleTimezone": "Asia/Kolkata",
      "byDay": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    }
  };
};

export const generateIslamicNewsSchema = (
  headline: string,
  description: string,
  datePublished: string
): NewsArticleSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": headline,
    "description": description,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "author": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.darulquranaa.com/"
    }
  };
};

export const generateTestimonialSchema = (testimonials: Array<{
  author: string;
  rating: number;
  review: string;
}>): TestimonialSchema => {
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5
      },
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewBody": testimonial.review
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": parseFloat(averageRating.toFixed(1)),
      "reviewCount": testimonials.length,
      "bestRating": 5
    }
  };
};

export const generateHreflangTags = (currentPath: string) => {
  const baseUrl = "https://www.darulquranaa.com";
  return [
    { hreflang: "en", href: `${baseUrl}${currentPath}` },
    { hreflang: "ml", href: `${baseUrl}${currentPath}?lang=ml` },
    { hreflang: "x-default", href: `${baseUrl}${currentPath}` }
  ];
};

export const generateRichSnippetSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Darul Quran Abdulla Academy",
    "alternateName": "DQAA",
    "url": "https://www.darulquranaa.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.darulquranaa.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/darulquranindia/",
      "https://instagram.com/darulquranindia",
      "https://www.youtube.com/@darulquranindia"
    ]
  };
};
