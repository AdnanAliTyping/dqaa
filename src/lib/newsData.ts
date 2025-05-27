
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateModified?: string;
  author: string;
  image: string;
  category: 'academic' | 'events' | 'achievements' | 'announcements';
  tags: string[];
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "hifz-shariah-exam-toppers",
    slug: "hifz-shariah-exam-toppers-2025",
    title: "Hifz & Shari'ah Annual Exam Toppers Announced",
    excerpt: "DQAA proudly announces the top performers in our annual Hifz and Shari'ah examinations for 2025.",
    content: `
      <p>Darul Quran Abdulla Academy is proud to announce the outstanding results of our annual Hifz and Shari'ah examinations for the academic year 2024-25.</p>
      
      <h3>Hifz Program Toppers:</h3>
      <ul>
        <li><strong>Muhammad Shamil K</strong> from Nellaya - First Position</li>
        <li><strong>Muhammad Sahil</strong> from Vallapuzha - Second Position</li>
        <li><strong>Muhammad Shaheel</strong> - Third Position</li>
      </ul>
      
      <h3>Shari'ah Program Toppers:</h3>
      <ul>
        <li><strong>Muhammad Sinan C</strong> from Manjeri - First Position</li>
        <li><strong>Muhammad Hinaan</strong> from Thootha - Second Position</li>
        <li><strong>Muhammad Firhad</strong> from Edappal - Third Position</li>
      </ul>
      
      <p>These exceptional students have demonstrated remarkable dedication to their Islamic studies while maintaining excellence in their academic pursuits. Their achievements reflect the high standards of education and spiritual development that DQAA strives to provide.</p>
      
      <p>We congratulate all our students for their hard work and dedication, and we extend our gratitude to the teachers and parents who have supported them throughout their journey.</p>
    `,
    date: "2025-05-13",
    author: "DQAA Administration",
    image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d",
    category: "achievements",
    tags: ["hifz", "shariah", "examinations", "toppers", "academic excellence"],
    featured: true
  },
  {
    id: "sslc-results-2025",
    slug: "100-percent-sslc-results-2025",
    title: "100% SSLC Results - Alhamdulillah",
    excerpt: "All DQAA students successfully pass SSLC examinations with flying colors, achieving 100% pass rate.",
    content: `
      <p>Alhamdulillah! Darul Quran Abdulla Academy celebrates another year of academic excellence with a 100% pass rate in the SSLC examinations 2025.</p>
      
      <p>This outstanding achievement is a testament to:</p>
      <ul>
        <li>The dedication and hard work of our students</li>
        <li>The excellence of our teaching faculty</li>
        <li>The support and prayers of parents and the community</li>
        <li>The blessing of Allah (SWT) upon our institution</li>
      </ul>
      
      <p>Our unique educational model, which seamlessly integrates Islamic values with modern academic curriculum, continues to produce well-rounded students who excel in both spiritual and worldly education.</p>
      
      <p>We extend our heartfelt congratulations to all our students and their families. May Allah (SWT) continue to bless their educational journey and grant them success in all their future endeavors.</p>
      
      <blockquote>
        <p>"And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose." - Quran 65:3</p>
      </blockquote>
    `,
    date: "2025-05-09",
    author: "Dr. PT Abdul Rahman",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    category: "academic",
    tags: ["sslc", "results", "academic excellence", "100 percent", "success"],
    featured: true
  },
  {
    id: "orientation-program-2025",
    slug: "admission-orientation-program-2025",
    title: "2025 Admission Orientation Program",
    excerpt: "Join us for our comprehensive orientation program for prospective students and parents on May 14, 2025.",
    content: `
      <p>Darul Quran Abdulla Academy cordially invites all prospective students and their parents to our Annual Admission Orientation Program for the academic year 2025-26.</p>
      
      <h3>Event Details:</h3>
      <ul>
        <li><strong>Date:</strong> May 14, 2025</li>
        <li><strong>Time:</strong> 10:00 AM - 3:00 PM</li>
        <li><strong>Venue:</strong> DQAA Main Campus, Kothakurssi, Panamanna</li>
      </ul>
      
      <h3>Program Highlights:</h3>
      <ul>
        <li>Campus tour and facility showcase</li>
        <li>Academic program presentations</li>
        <li>Meet our faculty and staff</li>
        <li>Admission process guidance</li>
        <li>Q&A session with current students and parents</li>
        <li>Scholarship information session</li>
      </ul>
      
      <h3>Who Should Attend:</h3>
      <ul>
        <li>Students interested in our Hifz program</li>
        <li>Students seeking the Bayanul Quran diploma course</li>
        <li>Parents wanting to learn about our educational philosophy</li>
        <li>Anyone interested in Islamic education excellence</li>
      </ul>
      
      <p>Refreshments will be provided. Please register in advance by calling +91-9526-552211 or visiting our website.</p>
      
      <p>We look forward to welcoming you to the DQAA family!</p>
    `,
    date: "2025-05-14",
    author: "Admissions Office",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    category: "events",
    tags: ["orientation", "admissions", "2025", "prospective students", "campus tour"],
    featured: false
  }
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.slug === slug);
};

export const getFeaturedArticles = (): NewsArticle[] => {
  return newsArticles.filter(article => article.featured);
};

export const getArticlesByCategory = (category: string): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};
