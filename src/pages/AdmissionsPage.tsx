
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const AdmissionsPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Admissions" 
        subtitle="Join our community of learners at Darul Quran Abdulla Academy"
        backgroundImage="https://images.unsplash.com/photo-1531545514256-b1400bc00f31"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Admissions Information
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include detailed information about the application process, requirements, 
            tuition, financial aid, entrance exams, and frequently asked questions.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Admissions content is being developed and will be available soon.
              Please check back later or contact our admissions office for more information.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdmissionsPage;
