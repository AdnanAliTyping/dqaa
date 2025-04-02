
import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { BookOpen, GraduationCap, Users, Calendar, Award, Landmark } from "lucide-react";

const links = [
  {
    title: "Academic Programs",
    description: "Explore our comprehensive educational offerings",
    icon: BookOpen,
    href: "/academic-programs",
    color: "bg-dqaa-50 text-dqaa-500",
  },
  {
    title: "Admissions",
    description: "Learn about the application process and requirements",
    icon: GraduationCap,
    href: "/admissions",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Campus Life",
    description: "Discover the vibrant environment and facilities",
    icon: Landmark,
    href: "/campus",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Events Calendar",
    description: "Stay updated with upcoming events and activities",
    icon: Calendar,
    href: "/news",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Our Community",
    description: "Meet our students, faculty, and alumni",
    icon: Users,
    href: "/community",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Student Achievements",
    description: "Celebrate the success stories of our students",
    icon: Award,
    href: "/student-life#achievements",
    color: "bg-rose-50 text-rose-600",
  },
];

const QuickLinks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dqaa-500 mb-4">
            Quick Links
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navigate to key sections of our website to learn more about Darul Quran Abdulla Academy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link to={link.href} key={index}>
              <Card className="h-full hover:shadow-lg transition-shadow border-none">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${link.color}`}>
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
