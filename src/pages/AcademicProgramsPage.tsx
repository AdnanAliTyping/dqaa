
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const AcademicProgramsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Academic Programs" 
        subtitle="Explore our comprehensive curriculum that combines Islamic knowledge with modern education"
        backgroundImage="https://images.unsplash.com/photo-1577896851231-70ef18881754"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Our Academic Programs
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include detailed information about all academic programs offered at DQAA, 
            including the Hifz Program, Bayanul Quran Diploma Course, Islamic Studies, Academic Subjects, 
            and Additional Courses.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Academic programs content is being developed and will be available soon.
              Please check back later for detailed information about our curriculum and courses.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcademicProgramsPage;
