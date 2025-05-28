
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
      
      <blockquote>
        <p>"Success is not just in academic achievement, but in the character and Islamic values our students embody." - Ustad Mustafa Mannani, Principal</p>
      </blockquote>
    `,
    date: "2025-05-13",
    dateModified: "2025-05-13",
    author: "DQAA Administration",
    image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d",
    category: "achievements",
    tags: ["hifz", "shariah", "examinations", "toppers", "academic excellence", "annual results"],
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
      
      <h3>Key Highlights:</h3>
      <ul>
        <li>100% pass rate across all subjects</li>
        <li>85% of students achieved A+ grades</li>
        <li>Outstanding performance in mathematics and science</li>
        <li>Excellent results in language subjects</li>
      </ul>
      
      <p>Our unique educational model, which seamlessly integrates Islamic values with modern academic curriculum, continues to produce well-rounded students who excel in both spiritual and worldly education.</p>
      
      <p>We extend our heartfelt congratulations to all our students and their families. May Allah (SWT) continue to bless their educational journey and grant them success in all their future endeavors.</p>
      
      <blockquote>
        <p>"And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose." - Quran 65:3</p>
      </blockquote>
      
      <p>Special recognition goes to our dedicated teaching staff who have worked tirelessly to ensure each student receives personalized attention and support throughout their academic journey.</p>
    `,
    date: "2025-05-09",
    dateModified: "2025-05-09",
    author: "Dr. PT Abdul Rahman",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    category: "academic",
    tags: ["sslc", "results", "academic excellence", "100 percent", "success", "examinations"],
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
        <li><strong>Registration:</strong> Free of charge</li>
      </ul>
      
      <h3>Program Highlights:</h3>
      <ul>
        <li>Welcome address by Chairman Dr. PT Abdul Rahman</li>
        <li>Campus tour and facility showcase</li>
        <li>Academic program presentations</li>
        <li>Meet our experienced faculty and staff</li>
        <li>Admission process guidance and Q&A</li>
        <li>Interaction with current students and alumni</li>
        <li>Parent testimonials and experiences</li>
        <li>Scholarship and financial aid information</li>
        <li>Hostel facilities tour</li>
        <li>Cultural performances by students</li>
      </ul>
      
      <h3>Who Should Attend:</h3>
      <ul>
        <li>Students interested in our Hifz program (Age 10-16)</li>
        <li>Students seeking the Bayanul Quran diploma course</li>
        <li>Parents wanting to learn about our educational philosophy</li>
        <li>Anyone interested in quality Islamic education</li>
        <li>Educational consultants and advisors</li>
      </ul>
      
      <h3>Special Features:</h3>
      <p>This year's orientation will include a special presentation on our technology integration initiatives, including our AI-powered learning management system and digital classroom innovations.</p>
      
      <p>Refreshments will be provided throughout the day. Transportation facilities are available from major nearby cities. Please register in advance by calling +91-9526-552211 or visiting our website.</p>
      
      <p>We look forward to welcoming you to the DQAA family and sharing our vision for holistic Islamic education!</p>
      
      <blockquote>
        <p>"The seeking of knowledge is obligatory upon every Muslim." - Prophet Muhammad (PBUH)</p>
      </blockquote>
    `,
    date: "2025-05-14",
    dateModified: "2025-05-14",
    author: "Admissions Office",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    category: "events",
    tags: ["orientation", "admissions", "2025", "prospective students", "campus tour", "open day"],
    featured: false
  },
  {
    id: "10th-anniversary-celebration",
    slug: "darul-quran-10th-anniversary-celebration",
    title: "Darul Quran Celebrates 10th Anniversary",
    excerpt: "DQAA celebrates a decade of excellence with a grand ceremony featuring distinguished guests, alumni, and current students.",
    content: `
      <p>Darul Quran Abdulla Academy marked a significant milestone on April 10, 2025, celebrating its 10th anniversary with a grand ceremony that brought together the entire academic community.</p>
      
      <h3>Event Highlights:</h3>
      <ul>
        <li>Opening ceremony with Quranic recitation</li>
        <li>Keynote address by Chairman Dr. PT Abdul Rahman</li>
        <li>Recognition of founding members and contributors</li>
        <li>Alumni success stories and testimonials</li>
        <li>Cultural performances by current students</li>
        <li>Documentary screening: "A Decade of Excellence"</li>
        <li>Future vision presentation</li>
        <li>Community appreciation awards</li>
      </ul>
      
      <h3>Distinguished Guests:</h3>
      <p>The celebration was graced by prominent Islamic scholars, educational leaders, government officials, and community leaders who have supported DQAA's journey over the past decade.</p>
      
      <h3>Achievements Over the Decade:</h3>
      <ul>
        <li>Over 500 students graduated from various programs</li>
        <li>100% success rate in board examinations</li>
        <li>Recognition as a premier Islamic educational institution</li>
        <li>State-of-the-art campus development</li>
        <li>Technology integration in Islamic education</li>
        <li>Community outreach programs</li>
        <li>Scholarship programs for deserving students</li>
      </ul>
      
      <h3>Vision for the Future:</h3>
      <p>Chairman Dr. PT Abdul Rahman unveiled an ambitious vision for the next decade, emphasizing:</p>
      <ul>
        <li>Expansion of digital learning initiatives</li>
        <li>International collaborations and exchanges</li>
        <li>Research and development in Islamic education</li>
        <li>Enhanced community service programs</li>
        <li>Sustainable campus development</li>
      </ul>
      
      <p>A commemorative anniversary brochure was released during the event, chronicling the academy's journey, achievements, and contributions to Islamic education in the region.</p>
      
      <p>The anniversary celebration concluded with a special dua for the continued success and blessing of the institution, its students, staff, and the broader community.</p>
      
      <blockquote>
        <p>"We are grateful to Allah for blessing our institution with ten years of service. This is just the beginning of our journey to serve the ummah through quality Islamic education." - Dr. PT Abdul Rahman, Chairman</p>
      </blockquote>
    `,
    date: "2025-04-10",
    dateModified: "2025-04-11",
    author: "Event Management Team",
    image: "/lovable-uploads/26f01633-775e-480a-b72c-f85de1f96e1a.png",
    category: "events",
    tags: ["anniversary", "10th anniversary", "celebration", "milestone", "community", "achievement"],
    featured: true
  },
  {
    id: "aeas-mou-signing",
    slug: "aeas-mou-signing-ceremony",
    title: "AEA Signs MOU with WNU-Sudan",
    excerpt: "Academic partnership established between AEA and World Nile University, Sudan for educational collaboration.",
    content: `
      <p>A significant milestone in academic collaboration was achieved with the signing of a Memorandum of Understanding (MOU) between the Arab Educational Association (AEA) and World Nile University, Sudan.</p>
      
      <h3>Key Participants:</h3>
      <ul>
        <li>Dr. Samani Abdul Muttalib Ahmad (AEA Representative)</li>
        <li>Dr. PT Abdul Rahman Mohammed</li>
        <li>Dr. Badrul Islam Abdulla Al Sheikh Al Muntasir Billah Fathi Al Tahir (Al Terdini Al Ahmadi)</li>
        <li>Representatives from various educational institutions</li>
      </ul>
      
      <h3>Partnership Objectives:</h3>
      <ul>
        <li>Student and faculty exchange programs</li>
        <li>Joint research initiatives in Islamic studies</li>
        <li>Curriculum development and sharing</li>
        <li>Quality assurance and accreditation support</li>
        <li>Technology transfer in educational methods</li>
        <li>Cultural and academic collaboration</li>
      </ul>
      
      <h3>Impact on DQAA:</h3>
      <p>This partnership opens new avenues for Darul Quran Abdulla Academy students and faculty:</p>
      <ul>
        <li>Opportunities for higher education in Sudan</li>
        <li>Access to international Islamic scholarship</li>
        <li>Cross-cultural academic experiences</li>
        <li>Enhanced curriculum through international perspectives</li>
        <li>Research collaboration opportunities</li>
      </ul>
      
      <h3>Future Initiatives:</h3>
      <p>The MOU establishes framework for:</p>
      <ul>
        <li>Annual academic conferences</li>
        <li>Joint publication of research papers</li>
        <li>Shared online learning platforms</li>
        <li>International student mobility programs</li>
        <li>Faculty development workshops</li>
      </ul>
      
      <p>This collaboration represents a significant step in DQAA's commitment to providing world-class Islamic education and creating global connections for our academic community.</p>
      
      <blockquote>
        <p>"Educational partnerships like this strengthen the bonds of the global Muslim ummah and enhance the quality of Islamic education worldwide." - Dr. PT Abdul Rahman</p>
      </blockquote>
      
      <p>The signing ceremony was attended by faculty members, students, and community leaders, marking the beginning of a promising educational partnership.</p>
    `,
    date: "2022-12-25",
    dateModified: "2022-12-26",
    author: "International Relations Office",
    image: "/lovable-uploads/bc411243-163d-496a-a8c0-9941b27e5b3c.png",
    category: "announcements",
    tags: ["MOU", "partnership", "international", "Sudan", "AEA", "collaboration", "higher education"],
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

export const getRecentArticles = (limit: number = 5): NewsArticle[] => {
  return newsArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getAllArticles = (): NewsArticle[] => {
  return newsArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
