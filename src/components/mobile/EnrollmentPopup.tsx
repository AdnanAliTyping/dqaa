
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Card, CardContent } from "../ui/card";
import { ChevronRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

interface EnrollmentPopupProps {
  children: React.ReactNode;
}

const EnrollmentPopup = ({ children }: EnrollmentPopupProps) => {
  const [step, setStep] = useState(1);
  const [academicYear, setAcademicYear] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    if (step === 1 && academicYear) {
      setStep(2);
    }
  };

  const handleSubmit = () => {
    if (gradeLevel) {
      // Store data in localStorage for the application form
      localStorage.setItem("enrollmentData", JSON.stringify({ academicYear, gradeLevel }));
      setIsOpen(false);
      // Navigate to application form
      window.location.href = "/admissions/apply";
    }
  };

  const resetForm = () => {
    setStep(1);
    setAcademicYear("");
    setGradeLevel("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) resetForm();
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md mx-4">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-dqaa-500 flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Begin Your Journey
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="flex items-center justify-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              step >= 1 ? 'bg-dqaa-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>1</div>
            <div className={`w-8 h-1 ${step >= 2 ? 'bg-dqaa-500' : 'bg-gray-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              step >= 2 ? 'bg-dqaa-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>2</div>
          </div>

          {step === 1 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Select Academic Year</h3>
                <Select value={academicYear} onValueChange={setAcademicYear}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose academic year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-26">2025-26</SelectItem>
                    <SelectItem value="2026-27">2026-27</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleNext} 
                  disabled={!academicYear}
                  className="w-full mt-4 bg-dqaa-500 hover:bg-dqaa-600"
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Select Grade Level</h3>
                <Select value={gradeLevel} onValueChange={setGradeLevel}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hifz-foundation">Hifz Foundation</SelectItem>
                    <SelectItem value="hifz-intermediate">Hifz Intermediate</SelectItem>
                    <SelectItem value="hifz-advanced">Hifz Advanced</SelectItem>
                    <SelectItem value="bayanul-quran">Bayanul Quran Diploma</SelectItem>
                    <SelectItem value="academic-grade-1">Academic Grade 1</SelectItem>
                    <SelectItem value="academic-grade-5">Academic Grade 5</SelectItem>
                    <SelectItem value="academic-grade-8">Academic Grade 8</SelectItem>
                    <SelectItem value="academic-grade-10">Academic Grade 10</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!gradeLevel}
                    className="flex-1 bg-dqaa-500 hover:bg-dqaa-600"
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentPopup;
