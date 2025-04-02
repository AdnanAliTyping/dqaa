
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const TechnologyPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Technology & Innovation" 
        subtitle="Discover how we integrate modern technology with Islamic education"
        backgroundImage="https://images.unsplash.com/photo-1535378917042-10a22c95931a"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Our Technology Program
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include information about AI integration in education, our partnership with AI8TY Technologies, 
            the Learning Management System, IT curriculum and digital literacy, and AI and robotics programs.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Technology program content is being developed and will be available soon.
              Please check back later for detailed information about our innovative approach to technology.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TechnologyPage;
