
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Brain, BookOpen, MessageSquare, BarChart3, Zap, Users, Trophy } from "lucide-react";

const AIInnovationHub = () => {
  const [activeDemo, setActiveDemo] = useState("memorization");

  const aiFeatures = [
    {
      id: "memorization",
      title: "AI Quran Memorization Tracker",
      icon: BookOpen,
      description: "Personalized memorization plans with progress tracking",
      benefits: ["Voice recognition accuracy", "Progress analytics", "Mistake pattern analysis", "Adaptive learning paths"]
    },
    {
      id: "tutor",
      title: "Islamic Studies AI Tutor",
      icon: Bot,
      description: "24/7 AI assistant for Islamic knowledge queries",
      benefits: ["Instant answers", "Hadith verification", "Context-aware responses", "Multi-language support"]
    },
    {
      id: "analytics",
      title: "Predictive Learning Analytics",
      icon: BarChart3,
      description: "AI-powered insights for academic performance",
      benefits: ["Performance prediction", "Learning gap identification", "Personalized recommendations", "Parent insights"]
    },
    {
      id: "communication",
      title: "Smart Communication Portal",
      icon: MessageSquare,
      description: "AI-enhanced parent-teacher-student communication",
      benefits: ["Auto-translation", "Sentiment analysis", "Priority sorting", "Smart notifications"]
    }
  ];

  const innovationStats = [
    { label: "AI Models Deployed", value: "12+", icon: Brain },
    { label: "Student Interactions Daily", value: "5,000+", icon: Users },
    { label: "Accuracy Rate", value: "99.2%", icon: Trophy },
    { label: "Response Time", value: "<1s", icon: Zap }
  ];

  const competitorComparison = [
    { feature: "AI-Powered Learning", dqaa: true, competitor: false },
    { feature: "Voice Recognition for Quran", dqaa: true, competitor: false },
    { feature: "Predictive Analytics", dqaa: true, competitor: false },
    { feature: "24/7 AI Tutor", dqaa: true, competitor: false },
    { feature: "Smart Communication Portal", dqaa: true, competitor: false },
    { feature: "Multi-language AI Support", dqaa: true, competitor: false },
    { feature: "Adaptive Learning Paths", dqaa: true, competitor: "basic" },
    { feature: "Real-time Progress Tracking", dqaa: true, competitor: "basic" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
            Cutting-Edge Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            AI Innovation That Leaves Competitors Behind
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            While other institutions struggle with basic technology, DQAA leads with revolutionary AI-powered 
            Islamic education tools that transform how students learn and excel.
          </p>
        </div>

        {/* AI Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {innovationStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-apple-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-dqaa-500 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* AI Features Showcase */}
        <Tabs defaultValue="memorization" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {aiFeatures.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} className="text-xs lg:text-sm">
                {feature.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {aiFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <TabsContent key={feature.id} value={feature.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-dqaa-500">{feature.title}</CardTitle>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Key Benefits:</h4>
                        <div className="space-y-3">
                          {feature.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-6 flex items-center justify-center">
                        <div className="text-center">
                          <Icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                          <Button className="bg-blue-600 text-white hover:bg-blue-700">
                            Try Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Competitor Comparison */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-dqaa-500 text-center">
              DQAA's AI vs. Traditional Institutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-800">AI Features</th>
                    <th className="text-center py-4 px-4 font-semibold text-dqaa-500">DQAA</th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">Other Institutions</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-gray-700">{item.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {item.competitor === true ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        ) : item.competitor === "basic" ? (
                          <Badge variant="secondary" className="text-xs">Basic</Badge>
                        ) : (
                          <div className="w-6 h-6 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                            <span className="text-white text-xs">✗</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
          <CardContent className="py-8">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Experience the Future of Islamic Education Today
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Don't settle for outdated teaching methods. Join DQAA and give your child access to 
              revolutionary AI-powered Islamic education that guarantees success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule AI Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View All AI Features
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AIInnovationHub;
