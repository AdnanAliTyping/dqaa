
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Users, GraduationCap, Globe, Award } from "lucide-react";

const SuperiorityShowcase = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      value: "98%",
      description: "Student success rate in 10th grade with distinction",
      color: "text-gold-400",
      bgColor: "bg-gold-50"
    },
    {
      icon: Users,
      title: "Alumni Network",
      value: "2000+",
      description: "Successful graduates in leadership positions globally",
      color: "text-dqaa-500",
      bgColor: "bg-dqaa-50"
    },
    {
      icon: Globe,
      title: "International Recognition",
      value: "15+",
      description: "Countries where our alumni are making impact",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      title: "Faculty Excellence",
      value: "50+",
      description: "PhD holders and internationally certified educators",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const competitiveAdvantages = [
    "Only institution with integrated AI-powered learning management system",
    "Multilingual education (Arabic, English, Malayalam, Urdu) - far beyond competitors",
    "100% placement assistance with international opportunities",
    "Real-time parent-teacher communication portal",
    "Virtual reality Islamic heritage tours",
    "24/7 online academic support system"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-dqaa-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gold-100 text-gold-700 hover:bg-gold-200">
            Industry Leading Excellence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            Why DQAA Stands Above All Others
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While others promise, we deliver. Our track record speaks louder than any competitor's claims.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="text-center hover:shadow-apple-lg transition-all duration-300 apple-card-hover">
                <CardHeader className="pb-2">
                  <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-dqaa-500">
                    {achievement.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-r from-dqaa-500 to-dqaa-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl font-display text-center flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-gold-300" />
              Exclusive Advantages No Competitor Offers
              <Star className="w-6 h-6 text-gold-300" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold-300 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SuperiorityShowcase;
