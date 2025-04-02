
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const NewsEventsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="News & Events" 
        subtitle="Stay updated with the latest happenings at Darul Quran Abdulla Academy"
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Latest News & Upcoming Events
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include the school calendar, upcoming events, blog/news articles, 
            and a newsletter signup form.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              News and events content is being developed and will be available soon.
              Please check back later for the latest updates from DQAA.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsEventsPage;
