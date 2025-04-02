
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const ParentsCornerPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Parents' Corner" 
        subtitle="Resources and information for parents of DQAA students"
        backgroundImage="https://images.unsplash.com/photo-1491013516836-7db643ee125a"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Parent Resources
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include information about communication channels, parent-teacher collaboration, 
            progress reporting system, parent resources and workshops, and guidelines for parental involvement.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Parents' corner content is being developed and will be available soon.
              Please check back later for resources and information for DQAA parents.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParentsCornerPage;
