
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, ArrowLeft, Share2 } from "lucide-react";
import { getArticleBySlug, newsArticles } from "@/lib/newsData";
import SchemaProvider from "@/components/SchemaProvider";
import { generateNewsArticleSchema } from "@/lib/schema";
import { Card, CardContent } from "@/components/ui/card";

const NewsArticlePage = () => {
  const navigate = useNavigate();
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  console.log("NewsArticlePage: params =", params, "slug =", slug);

  const article = slug ? getArticleBySlug(slug) : undefined;

  // Redirect to news page if no article found
  useEffect(() => {
    if (!article && slug) {
      console.warn(`Article not found for slug: ${slug}`);
      navigate("/news", { replace: true });
    }
  }, [article, slug, navigate]);

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/news">
            <Button>Return to News</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const articleUrl = `https://www.darulquranaa.com/news/${article.slug}`;
  const schemas = [
    generateNewsArticleSchema(
      article.title,
      article.image,
      article.date,
      article.excerpt,
      articleUrl,
      article.dateModified
    )
  ];

  const shareArticle = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: articleUrl
      });
    } else {
      navigator.clipboard.writeText(articleUrl);
    }
  };

  const relatedArticles = newsArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <SchemaProvider schemas={schemas}>
      <Layout>
        <Helmet>
          <title>{article.title} | Darul Quran Abdulla Academy</title>
          <meta name="description" content={article.excerpt} />
          <meta name="keywords" content={article.tags.join(', ')} />
          <link rel="canonical" href={articleUrl} />
          
          {/* Open Graph */}
          <meta property="og:title" content={article.title} />
          <meta property="og:description" content={article.excerpt} />
          <meta property="og:image" content={article.image} />
          <meta property="og:url" content={articleUrl} />
          <meta property="og:type" content="article" />
          <meta property="article:published_time" content={article.date} />
          <meta property="article:author" content={article.author} />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={article.title} />
          <meta name="twitter:description" content={article.excerpt} />
          <meta name="twitter:image" content={article.image} />
        </Helmet>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link to="/news" className="text-dqaa-500 hover:text-dqaa-600 flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
          </nav>

          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="capitalize">
                  {article.category}
                </Badge>
                {article.featured && (
                  <Badge variant="default">Featured</Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-dqaa-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <span>By {article.author}</span>
                </div>
                
                <Button variant="outline" size="sm" onClick={shareArticle}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-dqaa-900 prose-a:text-dqaa-500 hover:prose-a:text-dqaa-600"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-dqaa-900 mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map(relatedArticle => (
                  <Card key={relatedArticle.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedArticle.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        <Link 
                          to={`/news/${relatedArticle.slug}`}
                          className="hover:text-dqaa-500"
                        >
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="text-xs text-gray-500">
                        {new Date(relatedArticle.date).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </Layout>
    </SchemaProvider>
  );
};

export default NewsArticlePage;
