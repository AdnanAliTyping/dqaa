
import { newsArticles } from './newsData';

export interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  category: string;
  type: 'page' | 'news' | 'program';
}

interface SearchFilters {
  contentType: string[];
  language: string[];
  dateRange: string;
}

const searchablePages = [
  {
    title: "About Darul Quran Abdulla Academy",
    titleMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമി കുറിച്ച്",
    excerpt: "Learn about our mission, vision, and educational philosophy",
    excerptMl: "ഞങ്ങളുടെ ദൗത്യം, കാഴ്ചപ്പാട്, വിദ്യാഭ്യാസ തത്വശാസ്ത്രം എന്നിവയെക്കുറിച്ച് അറിയുക",
    url: "/about",
    category: "About",
    categoryMl: "കുറിച്ച്",
    type: "page" as const,
    keywords: ["about", "mission", "vision", "history", "chairman", "കുറിച്ച്", "ദൗത്യം", "കാഴ്ചപ്പാട്"]
  },
  {
    title: "Admissions",
    titleMl: "പ്രവേശനം",
    excerpt: "Information about admission process, requirements, and application",
    excerptMl: "പ്രവേശന പ്രക്രിയ, ആവശ്യകതകൾ, അപേക്ഷ എന്നിവയെക്കുറിച്ചുള്ള വിവരങ്ങൾ",
    url: "/admissions",
    category: "Admissions",
    categoryMl: "പ്രവേശനം",
    type: "page" as const,
    keywords: ["admission", "apply", "enrollment", "requirements", "പ്രവേശനം", "അപേക്ഷ"]
  },
  {
    title: "Academic Programs",
    titleMl: "അക്കാദമിക് പ്രോഗ്രാമുകൾ",
    excerpt: "Explore our Hifz, Shari'ah, and diploma programs",
    excerptMl: "ഞങ്ങളുടെ ഹിഫ്സ്, ഷരീഅ, ഡിപ്ലോമ പ്രോഗ്രാമുകൾ പര്യവേക്ഷണം ചെയ്യുക",
    url: "/academic-programs",
    category: "Programs",
    categoryMl: "പ്രോഗ്രാമുകൾ",
    type: "program" as const,
    keywords: ["hifz", "shariah", "diploma", "bayanul quran", "ഹിഫ്സ്", "ഷരീഅ", "ഡിപ്ലോമ"]
  },
  {
    title: "Campus Facilities",
    titleMl: "കാമ്പസ് സൗകര്യങ്ങൾ",
    excerpt: "Discover our state-of-the-art facilities and infrastructure",
    excerptMl: "ഞങ്ങളുടെ അത്യാധുനിക സൗകര്യങ്ങളും അടിസ്ഥാന സൗകര്യങ്ങളും കണ്ടെത്തുക",
    url: "/campus",
    category: "Facilities",
    categoryMl: "സൗകര്യങ്ങൾ",
    type: "page" as const,
    keywords: ["facilities", "campus", "infrastructure", "library", "സൗകര്യങ്ങൾ", "കാമ്പസ്"]
  },
  {
    title: "Student Life",
    titleMl: "വിദ്യാർത്ഥി ജീവിതം",
    excerpt: "Experience student life at DQAA with activities and programs",
    excerptMl: "പ്രവർത്തനങ്ങളും പ്രോഗ്രാമുകളുമായി DQAA-യിലെ വിദ്യാർത്ഥി ജീവിതം അനുഭവിക്കുക",
    url: "/student-life",
    category: "Student Life",
    categoryMl: "വിദ്യാർത്ഥി ജീവിതം",
    type: "page" as const,
    keywords: ["student", "life", "activities", "extracurricular", "വിദ്യാർത്ഥി", "ജീവിതം"]
  },
  {
    title: "Technology Integration",
    titleMl: "സാങ്കേതികവിദ്യ സംയോജനം",
    excerpt: "Learn about our AI and technology integration in education",
    excerptMl: "വിദ്യാഭ്യാസത്തിൽ ഞങ്ങളുടെ AI, സാങ്കേതികവിദ്യ സംയോജനത്തെക്കുറിച്ച് അറിയുക",
    url: "/technology",
    category: "Technology",
    categoryMl: "സാങ്കേതികവിദ്യ",
    type: "page" as const,
    keywords: ["technology", "AI", "digital", "innovation", "സാങ്കേതികവിദ്യ", "ഡിജിറ്റൽ"]
  },
  {
    title: "Parents Corner",
    titleMl: "രക്ഷിതാക്കളുടെ കോർണർ",
    excerpt: "Resources and information for parents and guardians",
    excerptMl: "രക്ഷിതാക്കൾക്കും രക്ഷാധികാരികൾക്കുമുള്ള വിഭവങ്ങളും വിവരങ്ങളും",
    url: "/parents",
    category: "Parents",
    categoryMl: "രക്ഷിതാക്കൾ",
    type: "page" as const,
    keywords: ["parents", "guardian", "family", "রক্ষিতাক্কൾ", "കുടുംബം"]
  },
  {
    title: "Contact Us",
    titleMl: "ഞങ്ങളെ ബന്ധപ്പെടുക",
    excerpt: "Get in touch with Darul Quran Abdulla Academy",
    excerptMl: "ദാറുൽ ഖുർആൻ അബ്ദുല്ല അക്കാദമിയുമായി ബന്ധപ്പെടുക",
    url: "/contact",
    category: "Contact",
    categoryMl: "ബന്ധപ്പെടുക",
    type: "page" as const,
    keywords: ["contact", "phone", "email", "address", "ബന്ധപ്പെടുക", "ഫോൺ"]
  }
];

export const searchContent = async (query: string, filters?: SearchFilters): Promise<SearchResult[]> => {
  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search in pages
  searchablePages.forEach(page => {
    // Apply content type filter
    if (filters?.contentType.length && !filters.contentType.includes(page.type)) {
      return;
    }

    const titleMatch = page.title.toLowerCase().includes(searchTerm) || 
                      page.titleMl.toLowerCase().includes(searchTerm);
    const excerptMatch = page.excerpt.toLowerCase().includes(searchTerm) || 
                        page.excerptMl.toLowerCase().includes(searchTerm);
    const keywordMatch = page.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchTerm)
    );

    if (titleMatch || excerptMatch || keywordMatch) {
      results.push({
        title: page.title,
        excerpt: page.excerpt,
        url: page.url,
        category: page.category,
        type: page.type
      });
    }
  });

  // Search in news articles
  newsArticles.forEach(article => {
    // Apply content type filter
    if (filters?.contentType.length && !filters.contentType.includes('news')) {
      return;
    }

    const titleMatch = article.title.toLowerCase().includes(searchTerm);
    const excerptMatch = article.excerpt.toLowerCase().includes(searchTerm);
    const contentMatch = article.content.toLowerCase().includes(searchTerm);
    const tagMatch = article.tags.some(tag => tag.toLowerCase().includes(searchTerm));

    if (titleMatch || excerptMatch || contentMatch || tagMatch) {
      results.push({
        title: article.title,
        excerpt: article.excerpt,
        url: `/news/${article.slug}`,
        category: article.category,
        type: 'news'
      });
    }
  });

  // Sort results by relevance (title matches first, then excerpt, then content)
  return results.sort((a, b) => {
    const aTitle = a.title.toLowerCase().includes(searchTerm) ? 1 : 0;
    const bTitle = b.title.toLowerCase().includes(searchTerm) ? 1 : 0;
    return bTitle - aTitle;
  }).slice(0, 10); // Limit to 10 results
};
