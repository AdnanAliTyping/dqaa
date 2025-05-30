
interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  image: string[];
  "@id": string;
  url: string;
  telephone: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: {
    "@type": string;
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  sameAs: string[];
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: {
    "@type": string;
    position: number;
    name: string;
    item: string;
  }[];
}

interface VideoSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
  embedUrl: string;
}

export const generateLocalBusinessSchema = (): LocalBusinessSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Darul Quran Abdulla Academy",
    "image": [
      "https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png",
      "https://www.darulquranaa.com/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png"
    ],
    "@id": "https://www.darulquranaa.com/#organization",
    "url": "https://www.darulquranaa.com/",
    "telephone": "+919447987960",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Darul Quran Campus, Kothakurssi",
      "addressLocality": "Panamanna",
      "addressRegion": "Kerala",
      "postalCode": "679501",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.7905,
      "longitude": 76.2711
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/darulquranindia/",
      "https://instagram.com/darulquranindia"
    ]
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]): BreadcrumbSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateVideoSchema = (
  name: string,
  description: string,
  thumbnailUrl: string,
  uploadDate: string,
  duration: string,
  contentUrl: string,
  embedUrl: string
): VideoSchema => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    "contentUrl": contentUrl,
    "embedUrl": embedUrl
  };
};

export const generateEducationalCourseSchema = (
  courseName: string,
  description: string,
  duration: string,
  fee?: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Darul Quran Abdulla Academy",
      "sameAs": "https://www.darulquranaa.com/"
    },
    "courseMode": "in-person",
    "timeRequired": duration,
    "offers": fee ? {
      "@type": "Offer",
      "price": fee,
      "priceCurrency": "INR"
    } : undefined,
    "inLanguage": ["en", "ar", "ml"],
    "availableLanguage": ["English", "Arabic", "Malayalam"],
    "educationalLevel": "Secondary Education"
  };
};

export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Darul Quran Abdulla Academy",
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": 5
    }
  };
};
