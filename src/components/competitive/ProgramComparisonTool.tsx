
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Trophy } from "lucide-react";

const ProgramComparisonTool = () => {
  const [selectedComparison, setSelectedComparison] = useState("general");

  const comparisons = {
    general: {
      title: "General Excellence Comparison",
      subtitle: "See how DQAA outperforms traditional Islamic institutions",
      features: [
        {
          feature: "Integrated Academic & Islamic Curriculum",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "AI-Powered Learning Management System",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Multilingual Education (4+ Languages)",
          dqaa: true,
          competitor: false,
          highlight: false
        },
        {
          feature: "100% Placement Assistance",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Real-time Parent Communication Portal",
          dqaa: true,
          competitor: false,
          highlight: false
        },
        {
          feature: "International Alumni Network",
          dqaa: true,
          competitor: "limited",
          highlight: false
        },
        {
          feature: "Modern Campus Facilities",
          dqaa: true,
          competitor: "basic",
          highlight: false
        },
        {
          feature: "Technology Integration in Learning",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Scholarship Opportunities",
          dqaa: true,
          competitor: true,
          highlight: false
        },
        {
          feature: "24/7 Academic Support",
          dqaa: true,
          competitor: false,
          highlight: false
        }
      ]
    },
    curriculum: {
      title: "Curriculum Excellence",
      subtitle: "Academic rigor that surpasses all competitors",
      features: [
        {
          feature: "NCERT + State Board Integration",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Hifz with Academic Excellence Program",
          dqaa: true,
          competitor: "basic",
          highlight: true
        },
        {
          feature: "Advanced Language Laboratory",
          dqaa: true,
          competitor: false,
          highlight: false
        },
        {
          feature: "IELTS/TOEFL Preparation",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Competitive Exam Coaching (PSC/UPSC)",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "International Islamic Studies Program",
          dqaa: true,
          competitor: "limited",
          highlight: false
        },
        {
          feature: "Research Methodology Training",
          dqaa: true,
          competitor: false,
          highlight: false
        },
        {
          feature: "Digital Islamic Library Access",
          dqaa: true,
          competitor: false,
          highlight: false
        }
      ]
    },
    facilities: {
      title: "Infrastructure & Facilities",
      subtitle: "World-class facilities that competitors can only dream of",
      features: [
        {
          feature: "Smart Classrooms with AI Integration",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Virtual Reality Islamic Heritage Tours",
          dqaa: true,
          competitor: false,
          highlight: true
        },
        {
          feature: "Climate-Controlled Dormitories",
          dqaa: true,
          competitor: "basic",
          highlight: false
        },
        {
          feature: "Professional Computer Laboratory",
          dqaa: true,
          competitor: "limited",
          highlight: false
        },
        {
          feature: "Extensive Digital Library",
          dqaa: true,
          competitor: "basic",
          highlight: false
        },
        {
          feature: "Sports & Recreation Facilities",
          dqaa: true,
          competitor: true,
          highlight: false
        },
        {
          feature: "Medical Center with 24/7 Care",
          dqaa: true,
          competitor: "basic",
          highlight: false
        },
        {
          feature: "Cafeteria with Nutritious Meals",
          dqaa: true,
          competitor: true,
          highlight: false
        }
      ]
    }
  };

  const currentComparison = comparisons[selectedComparison];

  const renderFeatureValue = (value, isCompetitor = false) => {
    if (value === true) {
      return <Check className={`w-5 h-5 ${isCompetitor ? 'text-gray-500' : 'text-green-600'}`} />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-red-500" />;
    } else if (value === "limited" || value === "basic") {
      return (
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4 text-yellow-500" />
          <span className="text-xs text-yellow-600 capitalize">{value}</span>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">
            Competitor Analysis
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            The Undeniable Truth: DQAA vs Others
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't take our word for it. Compare the facts and see why parents choose DQAA over all competitors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(comparisons).map(([key, comparison]) => (
            <Button
              key={key}
              variant={selectedComparison === key ? "default" : "outline"}
              onClick={() => setSelectedComparison(key)}
              className={`${
                selectedComparison === key 
                  ? "bg-dqaa-500 text-white hover:bg-dqaa-600" 
                  : "text-dqaa-500 border-dqaa-200 hover:bg-dqaa-50"
              } transition-all duration-200`}
            >
              {comparison.title}
            </Button>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display text-dqaa-500 mb-2">
              {currentComparison.title}
            </CardTitle>
            <p className="text-gray-600">{currentComparison.subtitle}</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-800">Features</th>
                    <th className="text-center py-4 px-4 font-semibold text-dqaa-500">
                      <div className="flex items-center justify-center gap-2">
                        <Trophy className="w-5 h-5 text-gold-400" />
                        DQAA
                      </div>
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-500">
                      Other Institutions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentComparison.features.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        item.highlight ? 'bg-dqaa-50/30' : ''
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.highlight && <Star className="w-4 h-4 text-gold-400" />}
                          <span className={`${item.highlight ? 'font-medium text-dqaa-600' : 'text-gray-700'}`}>
                            {item.feature}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderFeatureValue(item.dqaa)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderFeatureValue(item.competitor, true)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-dqaa-500 to-dqaa-600 rounded-lg text-white text-center">
              <h3 className="text-xl font-semibold mb-2">The Verdict is Clear</h3>
              <p className="text-white/90 mb-4">
                DQAA consistently outperforms competitors in every category that matters for your child's future.
              </p>
              <Button className="bg-white text-dqaa-500 hover:bg-gray-100">
                Secure Your Child's Spot at DQAA
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramComparisonTool;
