
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Facebook, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import LocationDetails from "@/components/LocationDetails";

const ContactPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with Darul Quran Abdulla Academy"
        backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We welcome your inquiries and feedback. Please feel free to contact us using the form or through any of the contact methods listed below.
              </p>
              
              <ContactForm />
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-bold text-dqaa-500 mb-6">
                Contact Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <LocationDetails />
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/darulquranindia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-50 hover:bg-dqaa-50 text-dqaa-500 p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://instagram.com/darulquranindia" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-50 hover:bg-dqaa-50 text-dqaa-500 p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-lg overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.5773988447527!2d76.32905085!3d10.9160916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d0426f917b25%3A0xbf1c0c0050b40486!2sDARUL%20QURAN%20ABDULLA%20ACADEMY%2C%20Koothakunsi%2C%20Koothakunsi%20Kadavu%2C%20Kerala%20679501!5e0!3m2!1sen!2sin!4v1712148854240!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
