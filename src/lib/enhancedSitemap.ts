
interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  images?: {
    loc: string;
    caption?: string;
    title?: string;
  }[];
  alternates?: {
    hreflang: string;
    href: string;
  }[];
}

export const generateEnhancedSitemap = (): string => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls: SitemapUrl[] = [
    {
      loc: 'https://www.darulquranaa.com/',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0,
      images: [
        {
          loc: 'https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
          caption: 'Darul Quran Abdulla Academy Logo',
          title: 'DQAA Logo'
        },
        {
          loc: 'https://www.darulquranaa.com/lovable-uploads/eb43aecc-3a7e-43db-8bef-b8ff970f946a.png',
          caption: 'DQAA Students in Campus',
          title: 'Campus Life'
        }
      ],
      alternates: [
        { hreflang: 'en', href: 'https://www.darulquranaa.com/' },
        { hreflang: 'ml', href: 'https://www.darulquranaa.com/?lang=ml' }
      ]
    },
    {
      loc: 'https://www.darulquranaa.com/about',
      lastmod: '2025-05-10',
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { hreflang: 'en', href: 'https://www.darulquranaa.com/about' },
        { hreflang: 'ml', href: 'https://www.darulquranaa.com/about?lang=ml' }
      ]
    },
    {
      loc: 'https://www.darulquranaa.com/faculty',
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: 'https://www.darulquranaa.com/lovable-uploads/1255e92e-f987-4871-9c80-72cd4c3bf3be.png',
          caption: 'DQAA Faculty Members',
          title: 'Expert Faculty'
        }
      ],
      alternates: [
        { hreflang: 'en', href: 'https://www.darulquranaa.com/faculty' },
        { hreflang: 'ml', href: 'https://www.darulquranaa.com/faculty?lang=ml' }
      ]
    },
    {
      loc: 'https://www.darulquranaa.com/admissions',
      lastmod: '2025-05-15',
      changefreq: 'weekly',
      priority: 0.9,
      alternates: [
        { hreflang: 'en', href: 'https://www.darulquranaa.com/admissions' },
        { hreflang: 'ml', href: 'https://www.darulquranaa.com/admissions?lang=ml' }
      ]
    },
    {
      loc: 'https://www.darulquranaa.com/admissions/apply',
      lastmod: '2025-05-15',
      changefreq: 'weekly',
      priority: 0.95,
      alternates: [
        { hreflang: 'en', href: 'https://www.darulquranaa.com/admissions/apply' },
        { hreflang: 'ml', href: 'https://www.darulquranaa.com/admissions/apply?lang=ml' }
      ]
    },
    {
      loc: 'https://www.darulquranaa.com/academic-programs',
      lastmod: '2025-05-12',
      changefreq: 'monthly',
      priority: 0.8,
      alternates: [
        { hreflang: 'en', href: 'https://www.darulquranaa.com/academic-programs' },
        { hreflang: 'ml', href: 'https://www.darulquranaa.com/academic-programs?lang=ml' }
      ]
    }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${url.images ? url.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
      ${img.title ? `<image:title>${img.title}</image:title>` : ''}
    </image:image>`).join('\n') : ''}
    ${url.alternates ? url.alternates.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n') : ''}
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.darulquranaa.com/sitemap.xml

# Block access to admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$

# Crawl delay for respectful crawling
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /`;
};
