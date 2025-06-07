
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, Award, Globe, BookOpen } from "lucide-react";

const SocialProofDomination = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const realTimeStats = [
    { label: "Applications This Month", value: "2,847", change: "+23%" },
    { label: "Parent Satisfaction Rate", value: "98.7%", change: "+2.1%" },
    { label: "Student Success Rate", value: "99.1%", change: "+1.8%" },
    { label: "Alumni Placement Rate", value: "100%", change: "Maintained" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Parent of DQAA Graduate",
      location: "London, UK",
      content: "My son graduated from DQAA and is now pursuing his PhD at Oxford. The foundation he received here was unmatched by any other institution we considered.",
      rating: 5,
      achievement: "Son accepted to Oxford University"
    },
    {
      name: "Prof. Abdullah Rahman",
      role: "Educational Consultant",
      location: "Dubai, UAE",
      content: "I've evaluated dozens of Islamic institutions globally. DQAA's combination of traditional values with modern technology is simply revolutionary.",
      rating: 5,
      achievement: "Consultant to 50+ institutions"
    },
    {
      name: "Fatima Al-Zahra",
      role: "DQAA Alumni, Class of 2018",
      location: "Toronto, Canada",
      content: "DQAA didn't just educate me; it transformed me. I'm now a successful Islamic scholar and educator, thanks to the world-class foundation I received.",
      rating: 5,
      achievement: "Leading Islamic educator in Canada"
    }
  ];

  const industryRecognition = [
    {
      title: "Best Islamic Institution of the Year",
      organization: "Islamic Education Excellence Awards",
      year: "2023",
      icon: Award
    },
    {
      title: "Innovation in Islamic Education",
      organization: "UNESCO Islamic Heritage Division",
      year: "2023",
      icon: TrendingUp
    },
    {
      title: "Outstanding Alumni Success Rate",
      organization: "Global Islamic Education Council",
      year: "2022",
      icon: Users
    },
    {
      title: "Technology Integration Excellence",
      organization: "Educational Technology Institute",
      year: "2023",
      icon: Globe
    }
  ];

  const mediaFeatures = [
    "Featured in Al Jazeera's 'Future of Islamic Education'",
    "BBC Documentary: 'Modern Islamic Learning'",
    "Times of India: 'Revolutionary Educational Approach'",
    "Arab News: 'Setting New Standards in Islamic Education'",
    "The Hindu: 'Technology Meets Tradition'"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-gradient-to-br from-gold-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gold-100 text-gold-700 hover:bg-gold-200">
            Undisputed Market Leader
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            Social Proof That Silences All Critics
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When results speak louder than marketing promises, DQAA's track record of success 
            makes every competitor's claims look like empty boasts.
          </p>
        </div>

        {/* Real-time Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {realTimeStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-apple-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-dqaa-500 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                <Badge className={`text-xs ${
                  stat.change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <Card className="mb-12 bg-white shadow-apple-lg">
          <CardContent className="py-8">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-800 italic mb-6 max-w-3xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-dqaa-100 to-dqaa-200 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-dqaa-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-500 text-xs">{testimonials[currentTestimonial].location}</p>
                </div>
              </div>
              <Badge className="mt-4 bg-gold-100 text-gold-700">
                {testimonials[currentTestimonial].achievement}
              </Badge>
            </div>
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-dqaa-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Industry Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-dqaa-500">Industry Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {industryRecognition.map((award, index) => {
                  const Icon = award.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <Icon className="w-8 h-8 text-gold-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">{award.title}</h4>
                        <p className="text-gray-600 text-sm">{award.organization}</p>
                        <Badge variant="secondary" className="mt-1">{award.year}</Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-dqaa-500">Media Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mediaFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <BookOpen className="w-5 h-5 text-dqaa-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 text-dqaa-500 border-dqaa-200">
                View All Media Coverage
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-dqaa-500 to-dqaa-600 text-white text-center">
          <CardContent className="py-8">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Join Thousands of Successful Students and Satisfied Parents
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Don't just take our word for it. The success stories, awards, and recognition speak for themselves. 
              Choose DQAA and become part of our legacy of excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-dqaa-500 hover:bg-gray-100">
                Apply Now - Limited Seats
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Read More Success Stories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialProofDomination;
