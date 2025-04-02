
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import LocationDetails from "@/components/LocationDetails";

const DonatePage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Support DQAA" 
        subtitle="Make a difference in the lives of our students through your generous contributions"
        backgroundImage="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230A3D91' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-dqaa-500 mb-4">
              Your Support Makes a Difference
            </h2>
            
            <div className="my-8">
              <h3 className="text-xl md:text-2xl font-display text-dqaa-500 mb-2">
                SPONSORSHIP OPPORTUNITIES AT DQAA
              </h3>
              <p className="text-base md:text-lg font-semibold text-gold-400 mb-4">
                📢 SPONSOR A STUDENT AT DQAA AND GET REWARDED FOR EVERY VERSE OF THE QURAN THEY LEARN!
              </p>
              
              <div className="hadith-text text-base md:text-lg my-4 p-4 bg-dqaa-50 rounded-lg">
                قال رسول الله ﷺ: "كُلُّ امْرِئٍ فِي ظِلِّ صَدَقَتِهِ حَتَّى يُقْضَى بَيْنَ النَّاسِ." (رواه الإمام أحمد)
              </div>
              
              <p className="italic text-dqaa-600 text-sm md:text-base">
                The Messenger of Allah ﷺ said: "Every person will be in the shade of their charity until judgment is rendered among the people." (Narrated by Imam Ahmad)
              </p>
            </div>
            
            <div className="my-8">
              <h3 className="text-xl md:text-2xl font-display text-dqaa-500 mb-4">WHY DONATE TO DQAA?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
                <div className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-3 mt-1">
                    <span className="text-dqaa-500 text-lg">📖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dqaa-500">Impactful Education</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Your donation directly impacts our students, enabling them to learn and memorize the Qur'an, attend Islamic education classes, and excel academically.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-3 mt-1">
                    <span className="text-dqaa-500 text-lg">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dqaa-500">Empowering Futures</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Sponsor a student and empower them to break the cycle of poverty, achieve their dreams, and become future leaders.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-3 mt-1">
                    <span className="text-dqaa-500 text-lg">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dqaa-500">Community Development</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Your contribution fosters social cohesion, compassion, and service, contributing to the development of a stronger, more prosperous society.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-3 mt-1">
                    <span className="text-dqaa-500 text-lg">📜</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dqaa-500">Tax Exemption</h4>
                    <p className="text-gray-600 text-sm md:text-base">
                      Donations to Darul Quran Abdulla Academy are tax-deductible under Section 80-G of the Income Tax Act, allowing you to deduct a portion of your donation amount from your taxable income.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 max-w-md mx-auto">
              <div className="razorpay-container">
                <form>
                  <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
                </form>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mt-8 md:mt-12">
            <Card className="border-none shadow-md overflow-hidden">
              <div className="bg-dqaa-500 text-white p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">One-Time</h3>
                <p className="opacity-80 text-sm">Support our mission</p>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-dqaa-500">$100</span>
                    <span className="text-gray-500 text-sm ml-1">or any amount</span>
                  </div>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Support daily operations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Contribute to educational materials</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Help with facility maintenance</span>
                  </li>
                </ul>
                <div className="razorpay-container">
                  <form>
                    <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
                  </form>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0">
                <div className="bg-gold-400 text-white text-xs font-bold px-2 md:px-3 py-1 transform rotate-45 translate-x-1/4 -translate-y-1/2">
                  Popular
                </div>
              </div>
              <div className="bg-gold-400 text-white p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">Monthly</h3>
                <p className="opacity-80 text-sm">Ongoing support</p>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-gold-400">$25</span>
                    <span className="text-gray-500 text-sm ml-1">monthly</span>
                  </div>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">All benefits of one-time donation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Support scholarship programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Help fund technology upgrades</span>
                  </li>
                </ul>
                <div className="razorpay-container">
                  <form>
                    <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
                  </form>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md overflow-hidden">
              <div className="bg-navy-500 text-white p-4 md:p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold mb-1">Sponsorship</h3>
                <p className="opacity-80 text-sm">Support a student</p>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-navy-500">$500</span>
                    <span className="text-gray-500 text-sm ml-1">per semester</span>
                  </div>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-navy-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Sponsor a student's education</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-navy-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Receive updates on student progress</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-navy-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-xs md:text-sm">Recognition in annual report</span>
                  </li>
                </ul>
                <div className="razorpay-container">
                  <form>
                    <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_QEBC8u1SAAat14" async />
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-dqaa-500 mb-6">
                The Impact of Your Donation
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Your generous contributions directly impact our students and community in numerous ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1">Scholarship Support</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Your donations help provide scholarships to deserving students who otherwise 
                      might not have access to quality Islamic education.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1">Educational Resources</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Funds are used to acquire the latest educational materials, technology, and 
                      resources that enhance the learning experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1">Campus Development</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Your support helps us maintain and improve our facilities to create an 
                      optimal learning environment for our students.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dqaa-50 p-2 rounded-full mr-4 mt-1">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-dqaa-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base md:text-lg mb-1">Community Outreach</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Donations enable us to extend our reach into the community through various 
                      educational and charitable initiatives.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-dqaa-500">
                <h3 className="font-semibold text-base md:text-lg mb-2">Tax Benefits</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  All donations to Darul Quran Abdulla Academy are tax-deductible under Section 80-G of the Income Tax Act. You will receive a receipt for your contribution.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-gold-400">
                <h3 className="font-semibold text-base md:text-lg mb-2">Corporate Matching</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Many employers match charitable contributions made by their employees. Check with 
                  your company to see if they have a matching gift program to multiply your impact.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border-l-4 border-navy-500">
                <h3 className="font-semibold text-base md:text-lg mb-2">Legacy Giving</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Consider including DQAA in your estate planning to leave a lasting legacy that 
                  will benefit generations of students to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dqaa-500 mb-6">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              For more information about our donation programs or to discuss specific giving opportunities, 
              please contact our development office:
            </p>
            <div className="bg-dqaa-50 p-6 rounded-lg">
              <LocationDetails />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonatePage;
