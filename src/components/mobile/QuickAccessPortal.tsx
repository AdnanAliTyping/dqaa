
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Users, BookOpen, X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const QuickAccessPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const portals = [
    {
      title: "Student Portal",
      description: "Access assignments, grades, and academic resources",
      icon: Users,
      color: "bg-blue-50 text-blue-600",
      link: "/student-portal"
    },
    {
      title: "Teacher Portal", 
      description: "Manage classes, assignments, and student progress",
      icon: BookOpen,
      color: "bg-green-50 text-green-600",
      link: "/teacher-portal"
    }
  ];

  return (
    <>
      {/* Floating Quick Access Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-dqaa-500 hover:bg-dqaa-600 text-white rounded-full w-14 h-14 shadow-lg"
          size="icon"
        >
          <Users className="h-6 w-6" />
        </Button>
      </div>

      {/* Portal Selection Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-center text-xl text-dqaa-500">
              Quick Access Portal
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {portals.map((portal, index) => (
              <Card key={index} className="border-none shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <a href={portal.link} className="block">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${portal.color}`}>
                        <portal.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-dqaa-500 mb-1">{portal.title}</h3>
                        <p className="text-sm text-gray-600">{portal.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickAccessPortal;
