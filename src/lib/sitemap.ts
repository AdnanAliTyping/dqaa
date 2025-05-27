
interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface NewsItem {
  id: string;
  title: string;
  date: string;
  slug: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  slug: string;
}

export const generateDynamicSitemap = (newsItems: NewsItem[], events: Event[]): string => {
  const baseUrls: SitemapUrl[] = [
    {
      loc: 'https://www.darulquranaa.com/',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: 'https://www.darulquranaa.com/about',
      lastmod: '2025-05-10',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: 'https://www.darulquranaa.com/admissions',
      lastmod: '2025-05-15',
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: 'https://www.darulquranaa.com/admissions/apply',
      lastmod: '2025-05-15',
      changefreq: 'monthly',
      priority: 0.9
    },
    {
      loc: 'https://www.darulquranaa.com/academic-programs',
      lastmod: '2025-05-12',
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: 'https://www.darulquranaa.com/news',
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.9
    }
  ];

  // Add dynamic news articles
  const newsUrls: SitemapUrl[] = newsItems.map(item => ({
    loc: `https://www.darulquranaa.com/news/${item.slug}`,
    lastmod: item.date,
    changefreq: 'monthly',
    priority: 0.7
  }));

  // Add dynamic events
  const eventUrls: SitemapUrl[] = events.map(event => ({
    loc: `https://www.darulquranaa.com/events/${event.slug}`,
    lastmod: event.date,
    changefreq: 'weekly',
    priority: 0.6
  }));

  const allUrls = [...baseUrls, ...newsUrls, ...eventUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const generateNewsRssFeed = (newsItems: NewsItem[]): string => {
  const rssItems = newsItems.map(item => `
    <item>
      <title>${item.title}</title>
      <link>https://www.darulquranaa.com/news/${item.slug}</link>
      <guid>https://www.darulquranaa.com/news/${item.slug}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>Latest news from Darul Quran Abdulla Academy</description>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Darul Quran Abdulla Academy - Latest News</title>
    <link>https://www.darulquranaa.com/news</link>
    <description>Stay updated with the latest news and announcements from DQAA</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;
};
