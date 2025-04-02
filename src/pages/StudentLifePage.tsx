
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const StudentLifePage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Student Life" 
        subtitle="Experience the vibrant and nurturing environment at DQAA"
        backgroundImage="https://images.unsplash.com/photo-1509062522246-3755977927d7"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6 text-center">
            Life at DQAA
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            This page will include information about daily schedules, extracurricular activities, 
            quadrilingual proficiency development, sports programs, arts and cultural activities, 
            community service initiatives, and student achievements.
          </p>
          
          <div className="bg-dqaa-50 p-8 rounded-lg max-w-3xl mx-auto">
            <p className="text-center text-dqaa-600">
              Student life content is being developed and will be available soon.
              Please check back later for comprehensive information about campus life at DQAA.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLifePage;
