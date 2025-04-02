
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const CampusFacilitiesPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Campus & Facilities" 
        subtitle="Explore our modern campus designed to foster learning and growth"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Our Campus
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include information about our campus overview, smart classrooms, 
            computer lab, libraries and Qutubukhana, prayer areas, and residential facilities.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Campus facilities content is being developed and will be available soon.
              Please check back later for detailed information about our state-of-the-art campus.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampusFacilitiesPage;
