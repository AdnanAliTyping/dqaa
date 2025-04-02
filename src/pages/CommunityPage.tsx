
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const CommunityPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Community Engagement" 
        subtitle="Discover how DQAA gives back to the community and makes a positive impact"
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Our Community Initiatives
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include information about charitable trust initiatives, outreach programs, 
            sustainable development goals, and alumni success stories.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Community engagement content is being developed and will be available soon.
              Please check back later for information about our community initiatives.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommunityPage;
