
import { Card, CardContent } from "../ui/card";
import { Users, GraduationCap, Award, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Students",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: GraduationCap,
    number: "50+",
    label: "Teachers",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Award,
    number: "100%",
    label: "Results",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: BookOpen,
    number: "1000+",
    label: "Alumni",
    color: "bg-orange-50 text-orange-600"
  }
];

const MobileStatsSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-display font-bold text-dqaa-500 text-center mb-6">
          Our Achievements
        </h2>
        
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {stats.map((stat, index) => (
            <Card key={index} className="min-w-[150px] snap-center border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-dqaa-500 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileStatsSection;
