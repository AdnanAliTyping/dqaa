interface WebsiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  potentialAction: {
    "@type": string;
    target: string;
  }[];
}

interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
  }[];
}

interface NewsArticleSchema {
  "@context": string;
  "@type": string;
  headline: string;
  image: string[];
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": string;
    name: string;
    url?: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  description: string;
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
}

interface CourseSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  provider: {
    "@type": string;
    name: string;
    sameAs: string;
  };
}

interface EventSchema {
  "@context": string;
  "@type": string;
  name: string;
  startDate: string;
  endDate?: string;
  location: {
    "@type": string;
    name: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  description: string;
  organizer: {
    "@type": string;
    name: string;
    url: string;
  };
}

interface FAQPageSchema {
  "@context": string;
  "@type": string;
  mainEntity: {
    "@type": string;
    name: string;
    acceptedAnswer: {
      "@type": string;
      text: string;
    };
  }[];
}

export const generateWebsiteSchema = (): WebsiteSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Darul Quran Abdulla Academy",
    "url": "https://www.darulquranaa.com/",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://www.darulquranaa.com/search?q={search_term_string}",
      }
    ]
  };
};

export const generateOrganizationSchema = (): OrganizationSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Darul Quran Abdulla Academy",
    "url": "https://www.darulquranaa.com/",
    "logo": "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
    "sameAs": [
      "https://www.facebook.com/darulquranindia/",
      "https://instagram.com/darulquranindia"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Darul Quran Abdulla Academy",
      "addressLocality": "Ottapalam",
      "addressRegion": "Kerala",
      "postalCode": "679101",
      "addressCountry": "India"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+919447987960",
        "contactType": "customer service"
      }
    ]
  };
};

export const generateNewsArticleSchema = (
  headline: string,
  imageUrl: string,
  datePublished: string,
  description: string,
  articleUrl: string,
  dateModified?: string
): NewsArticleSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": headline,
    "image": [imageUrl],
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy",
      "url": "https://www.darulquranaa.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png"
      }
    },
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };
};

export const generateCourseSchema = (
  name: string,
  description: string
): CourseSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy",
      "sameAs": "https://www.darulquranaa.com/"
    }
  };
};

export const generateEventSchema = (
  name: string,
  startDate: string,
  description: string,
  endDate?: string
): EventSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "location": {
      "@type": "Place",
      "name": "Darul Quran Abdulla Academy",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Darul Quran Campus, Kothakurssi",
        "addressLocality": "Panamanna",
        "addressRegion": "Kerala",
        "postalCode": "679501",
        "addressCountry": "India"
      }
    },
    "description": description,
    "organizer": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy",
      "url": "https://www.darulquranaa.com/"
    }
  };
};

export const generateFAQPageSchema = (faqs: Array<{ question: string; answer: string }>): FAQPageSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
