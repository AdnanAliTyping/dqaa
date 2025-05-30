
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, X, Clock, Users, BookOpen, Award } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

interface Program {
  id: string;
  name: string;
  nameMl: string;
  duration: string;
  durationMl: string;
  capacity: number;
  fees: string;
  feesMl: string;
  features: string[];
  featuresMl: string[];
  highlights: string[];
  highlightsMl: string[];
  category: string;
  categoryMl: string;
}

const ProgramComparison = () => {
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);
  const { currentLanguage } = useTranslation();
  const isMalayalam = currentLanguage === "ml";

  const programs: Program[] = [
    {
      id: "hifz",
      name: "Hifz Program",
      nameMl: "ഹിഫ്സ് പ്രോഗ്രാം",
      duration: "3-5 years",
      durationMl: "3-5 വർഷം",
      capacity: 50,
      fees: "₹15,000/year",
      feesMl: "₹15,000/വർഷം",
      features: [
        "Complete Quran memorization",
        "Arabic language training",
        "Islamic jurisprudence",
        "Character development",
        "Regular assessments"
      ],
      featuresMl: [
        "പൂർണ്ണ ഖുർആൻ സ്മരണ",
        "അറബി ഭാഷാ പരിശീലനം",
        "ഇസ്ലാമിക് നിയമശാസ്ത്രം",
        "സ്വഭാവ വികസനം",
        "പതിവ് വിലയിരുത്തലുകൾ"
      ],
      highlights: ["Traditional Method", "Experienced Teachers", "Spiritual Focus"],
      highlightsMl: ["പരമ്പരാഗത രീതി", "പരിചയസമ്പന്ന അധ്യാപകർ", "ആത്മീയ ശ്രദ്ധ"],
      category: "Religious",
      categoryMl: "മതപരം"
    },
    {
      id: "bayanul-quran",
      name: "Bayanul Quran Diploma",
      nameMl: "ബയാനുൽ ഖുർആൻ ഡിപ്ലോമ",
      duration: "2 years",
      durationMl: "2 വർഷം",
      capacity: 30,
      fees: "₹12,000/year",
      feesMl: "₹12,000/വർഷം",
      features: [
        "English proficiency focus",
        "Quranic interpretation",
        "Islamic philosophy",
        "Public speaking",
        "Research methodology"
      ],
      featuresMl: [
        "ഇംഗ്ലീഷ് പ്രാവീണ്യ ശ്രദ്ധ",
        "ഖുർആനിക് വ്യാഖ്യാനം",
        "ഇസ്ലാമിക് തത്വശാസ്ത്രം",
        "പബ്ലിക് സ്പീക്കിംഗ്",
        "ഗവേഷണ രീതിശാസ്ത്രം"
      ],
      highlights: ["Modern Approach", "Language Focus", "Career Oriented"],
      highlightsMl: ["ആധുനിക സമീപനം", "ഭാഷാ ശ്രദ്ധ", "കരിയർ അധിഷ്ഠിതം"],
      category: "Academic",
      categoryMl: "അക്കാദമിക്"
    },
    {
      id: "shariah",
      name: "Shari'ah Studies",
      nameMl: "ഷരീഅ പഠനം",
      duration: "4 years",
      durationMl: "4 വർഷം",
      capacity: 25,
      fees: "₹18,000/year",
      feesMl: "₹18,000/വർഷം",
      features: [
        "Islamic law studies",
        "Comparative jurisprudence",
        "Legal research",
        "Court procedures",
        "Contemporary issues"
      ],
      featuresMl: [
        "ഇസ്ലാമിക് നിയമ പഠനം",
        "താരതമ്യ നിയമശാസ്ത്രം",
        "നിയമ ഗവേഷണം",
        "കോടതി നടപടികൾ",
        "സമകാലിക പ്രശ്നങ്ങൾ"
      ],
      highlights: ["Professional Degree", "Expert Faculty", "Research Focus"],
      highlightsMl: ["പ്രൊഫഷണൽ ഡിഗ്രി", "വിദഗ്ധ ഫാക്കൽറ്റി", "ഗവേഷണ ശ്രദ്ധ"],
      category: "Professional",
      categoryMl: "പ്രൊഫഷണൽ"
    }
  ];

  const toggleProgram = (programId: string) => {
    setSelectedPrograms(prev => 
      prev.includes(programId) 
        ? prev.filter(id => id !== programId)
        : [...prev, programId]
    );
  };

  const selectedProgramsData = programs.filter(program => selectedPrograms.includes(program.id));

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dqaa-500 mb-4">
            {isMalayalam ? "പ്രോഗ്രാം താരതമ്യം" : "Program Comparison"}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {isMalayalam ? 
              "നിങ്ങൾക്ക് അനുയോജ്യമായ പ്രോഗ്രാം കണ്ടെത്താൻ ഞങ്ങളുടെ വിവിധ പ്രോഗ്രാമുകൾ താരതമ്യം ചെയ്യുക" :
              "Compare our different programs to find the one that suits you best"
            }
          </p>
        </div>

        {/* Program Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">
            {isMalayalam ? "താരതമ്യത്തിനായി പ്രോഗ്രാമുകൾ തിരഞ്ഞെടുക്കുക:" : "Select programs to compare:"}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {programs.map((program) => (
              <Card 
                key={program.id}
                className={`cursor-pointer transition-all ${
                  selectedPrograms.includes(program.id) ? 'ring-2 ring-dqaa-500 bg-dqaa-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleProgram(program.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={selectedPrograms.includes(program.id)}
                      onChange={() => toggleProgram(program.id)}
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">
                        {isMalayalam ? program.nameMl : program.name}
                      </h4>
                      <Badge variant="outline" className="mt-1">
                        {isMalayalam ? program.categoryMl : program.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedProgramsData.length > 0 && (
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid" style={{ gridTemplateColumns: `200px repeat(${selectedProgramsData.length}, 1fr)` }}>
                {/* Header */}
                <div className="p-4 bg-gray-100 font-semibold border-b">
                  {isMalayalam ? "സവിശേഷതകൾ" : "Features"}
                </div>
                {selectedProgramsData.map((program) => (
                  <div key={program.id} className="p-4 bg-dqaa-500 text-white font-semibold border-b text-center">
                    {isMalayalam ? program.nameMl : program.name}
                  </div>
                ))}

                {/* Duration */}
                <div className="p-4 bg-gray-50 font-medium border-b flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {isMalayalam ? "കാലാവധി" : "Duration"}
                </div>
                {selectedProgramsData.map((program) => (
                  <div key={program.id} className="p-4 border-b text-center">
                    {isMalayalam ? program.durationMl : program.duration}
                  </div>
                ))}

                {/* Capacity */}
                <div className="p-4 bg-gray-50 font-medium border-b flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {isMalayalam ? "ശേഷി" : "Capacity"}
                </div>
                {selectedProgramsData.map((program) => (
                  <div key={program.id} className="p-4 border-b text-center">
                    {program.capacity} {isMalayalam ? "വിദ്യാർത്ഥികൾ" : "students"}
                  </div>
                ))}

                {/* Fees */}
                <div className="p-4 bg-gray-50 font-medium border-b flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  {isMalayalam ? "ഫീസ്" : "Fees"}
                </div>
                {selectedProgramsData.map((program) => (
                  <div key={program.id} className="p-4 border-b text-center font-semibold text-dqaa-500">
                    {isMalayalam ? program.feesMl : program.fees}
                  </div>
                ))}

                {/* Features */}
                <div className="p-4 bg-gray-50 font-medium border-b flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  {isMalayalam ? "സവിശേഷതകൾ" : "Features"}
                </div>
                {selectedProgramsData.map((program) => (
                  <div key={program.id} className="p-4 border-b">
                    <ul className="space-y-2">
                      {(isMalayalam ? program.featuresMl : program.features).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Highlights */}
                <div className="p-4 bg-gray-50 font-medium flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  {isMalayalam ? "പ്രത്യേകതകൾ" : "Highlights"}
                </div>
                {selectedProgramsData.map((program) => (
                  <div key={program.id} className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {(isMalayalam ? program.highlightsMl : program.highlights).map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedProgramsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {isMalayalam ? 
                "താരതമ്യത്തിനായി കുറഞ്ഞത് ഒരു പ്രോഗ്രാമെങ്കിലും തിരഞ്ഞെടുക്കുക" :
                "Select at least one program to start comparing"
              }
            </p>
          </div>
        )}

        {/* Apply Now Section */}
        {selectedProgramsData.length > 0 && (
          <div className="mt-12 text-center">
            <Card className="bg-dqaa-50 border-dqaa-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dqaa-500 mb-4">
                  {isMalayalam ? "താൽപ്പര്യമുണ്ടോ?" : "Interested?"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {isMalayalam ? 
                    "നിങ്ങൾ തിരഞ്ഞെടുത്ത പ്രോഗ്രാമുകളിൽ ഏതെങ്കിലുമൊന്നിലേക്ക് ഇപ്പോൾ അപേക്ഷിക്കുക" :
                    "Apply now for any of the programs you've selected"
                  }
                </p>
                <Button size="lg" className="bg-dqaa-500 hover:bg-dqaa-600">
                  {isMalayalam ? "ഇപ്പോൾ അപേക്ഷിക്കുക" : "Apply Now"}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramComparison;
