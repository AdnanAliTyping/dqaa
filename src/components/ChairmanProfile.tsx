
import { Facebook, Instagram, Youtube } from "lucide-react";

const ChairmanProfile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="/lovable-uploads/d9397387-67b8-47f6-856b-b0559a89e20a.png"
            alt="Dr. PT Abdul Rahman - Chairman"
            className="w-full h-auto"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-dqaa-700">Dr. PT Abdul Rahman</h3>
          <p className="text-gray-600">Chairman & Founder</p>
          
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href="https://www.facebook.com/abdulrahman.peetee?mibextid=2JQ9oc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-dqaa-500 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/drpt7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-dqaa-500 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://youtube.com/@dharmarekha?si=GkXfmYn3h71k0aSB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-dqaa-500 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="bg-dqaa-50 p-4 rounded-lg">
          <h4 className="font-semibold text-dqaa-700 mb-2">Authored Works</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• സൃഷ്ടി അർഥരഹിതമാണോ? (Srushti Artharahithamano? – Malayalam)</li>
            <li>• هل الخلق بلا معنى؟ (Hal Al-Khalq Bila Ma'na? – Arabic)</li>
            <li>• Is the Creation Meaningless? (English)</li>
            <li>• സൃഷ്ടാവിലേക്ക് (Srishtavilekku – Malayalam)</li>
            <li>• Towards the Creator (English)</li>
            <li>• The Address to Know How to Address (Guide for non-Arabic speakers)</li>
            <li>• إنهُ شمس العلماء (Innahu Shamsul Ulama – Arabic)</li>
          </ul>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <h3 className="text-2xl font-display font-bold text-dqaa-600 mb-4">A Legacy of Leadership & Scholarship</h3>
        <div className="space-y-4 text-gray-600">
          <p>
            Dr. PT Abdul Rahman, the visionary behind Darul Quran Abdulla Academy (أكاديمية عبد الله لتحفيظ القران), is a distinguished Islamic scholar, educationist, and humanitarian. His life's work has been dedicated to integrating traditional Islamic scholarship with contemporary education, ensuring the next generation is equipped with both spiritual and academic excellence.
          </p>
          
          <h4 className="text-xl font-semibold text-dqaa-600 mt-6 mb-2">A Journey of Service & Transformation</h4>
          <p>
            For over three decades, Dr. PT Abdul Rahman has been at the forefront of educational and community initiatives that have profoundly impacted thousands of lives. His leadership has led to the establishment of prominent institutions, including Dubai Indian Islamic Centre (DIIC), a hub for cultural and intellectual exchange; Darul Quran Abdulla Academy, a residential Hifz institution dedicated to nurturing Quranic excellence; Shamsa Academy for Girls, ensuring access to high-quality Islamic education for young women; and Al-Badawi Shariah College, fostering higher Islamic studies and research.
          </p>
          <p>
            His role as a researcher at Dubai Awqaf & Islamic Affairs further solidified his contributions to Islamic jurisprudence and policy development. His unwavering commitment continues to drive initiatives that blend faith, knowledge, and service to humanity.
          </p>
          
          <h4 className="text-xl font-semibold text-dqaa-600 mt-6 mb-2">Awards & Recognition</h4>
          <p>
            Dr. PT Abdul Rahman has received numerous notable recognitions for his contributions to Islamic education and scholarship, including a Golden Visa from the Dubai Government, recognition from the Dubai International Holy Quran Award, and multiple letters of appreciation and honorary certifications from prestigious organizations worldwide.
          </p>
          
          <h4 className="text-xl font-semibold text-dqaa-600 mt-6 mb-2">Humanitarian Contributions</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Scholarship programs ensuring access to education for underprivileged students.</li>
            <li>Medical outreach programs, including the UAE's first free medical camp for low-income workers.</li>
            <li>Repatriation services for expatriates in need.</li>
            <li>Prisoner rehabilitation initiatives offering legal aid and family support.</li>
          </ul>
          
          <div className="border-t border-dqaa-100 my-6 pt-6">
            <h4 className="text-xl font-semibold text-dqaa-600 mb-3">Dharmarekha Teleserial</h4>
            <p className="mb-4">
              Dr. PT Abdul Rahman's breakthrough Islamic teleserial Dharmarekha, the first-ever televised Malayalam Ramadan program, continues to inspire and educate. Watch his latest video:
            </p>
            <div className="aspect-video w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/j0s21rGpqxo" 
                title="Dharmarekha by Dr. PT Abdul Rahman" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
          
          <p className="italic border-l-4 border-dqaa-500 pl-4 py-2 bg-gray-50 mt-6">
            "Through his leadership and unwavering commitment to education and social welfare, Dr. PT Abdul Rahman continues to inspire generations, shaping Darul Quran Abdulla Academy into a beacon of knowledge, faith, and excellence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChairmanProfile;
