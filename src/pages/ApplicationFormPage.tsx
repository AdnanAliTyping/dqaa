import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  fullNameCapital: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  gender: z.string().min(1, { message: "Please select gender." }),
  parentName: z.string().min(2, { message: "Parent name is required." }),
  parentRelation: z.string().min(1, { message: "Please specify relationship." }),
  motherName: z.string().min(2, { message: "Mother's name is required." }),
  parentOccupation: z.string().min(2, { message: "Parent occupation is required." }),
  parentAddress: z.string().min(5, { message: "Parent address is required." }),
  guardianOccupation: z.string().optional(),
  guardianAddress: z.string().optional(),
  previousSchool: z.string().min(2, { message: "Previous school name is required." }),
  dateOfBirth: z.string().min(1, { message: "Date of birth is required." }),
  dateOfBirthWords: z.string().min(5, { message: "Date of birth in words is required." }),
  birthCertificate: z.string().min(1, { message: "Please select an option." }),
  ageYears: z.string().min(1, { message: "Age in years is required." }),
  ageMonths: z.string().min(1, { message: "Age in months is required." }),
  category: z.string().min(1, { message: "Please select a category." }),
  religion: z.string().min(1, { message: "Religion is required." }),
  classApplying: z.string().min(1, { message: "Please select a class." }),
  motherTongue: z.string().min(1, { message: "Mother tongue is required." }),
  preferredMedium: z.string().min(1, { message: "Please select preferred medium." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
});

const ApplicationFormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMalayalam, setShowMalayalam] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      fullNameCapital: "",
      gender: "",
      parentName: "",
      parentRelation: "",
      motherName: "",
      parentOccupation: "",
      parentAddress: "",
      guardianOccupation: "",
      guardianAddress: "",
      previousSchool: "",
      dateOfBirth: "",
      dateOfBirthWords: "",
      birthCertificate: "",
      ageYears: "",
      ageMonths: "",
      category: "",
      religion: "",
      classApplying: "",
      motherTongue: "",
      preferredMedium: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Submit to JotForm
    const jotformData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      jotformData.append(key, value.toString());
    });
    
    fetch("https://form.jotform.com/250855675394470", {
      method: "POST",
      body: jotformData,
    })
      .then(response => {
        if (response.ok) {
          toast({
            title: showMalayalam ? "അപേക്ഷ സമർപ്പിച്ചു" : "Application Submitted",
            description: showMalayalam ? 
              "നിങ്ങളുടെ അപേക്ഷ വിജയകരമായി സമർപ്പിച്ചു. ഞങ്ങൾ ഉടൻ നിങ്ങളുമായി ബന്ധപ്പെടും." : 
              "Your application has been successfully submitted. We will contact you soon.",
          });
          navigate('/admissions');
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        toast({
          title: showMalayalam ? "പിശക്" : "Error",
          description: showMalayalam ? 
            "അപേക്ഷ സമർപ്പിക്കുന്നതിൽ ഒരു പിശക് ഉണ്ടായി. ദയവായി വീണ്ടും ശ്രമിക്കുക." : 
            "There was an error submitting your application. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <Layout>
      <head>
        <title>Apply to Darul Quran Abdulla Academy | Admission Form</title>
        <meta name="description" content="Apply to study at Darul Quran Abdulla Academy. Fill our online application form to join our Hifz or Bayanul Quran programs." />
        <meta name="keywords" content="DQAA application, Islamic school admission, Hifz program application, Quran memorization admission, Islamic boarding school application" />
      </head>
      
      <PageHeader 
        title={showMalayalam ? "അപേക്ഷാ ഫോം" : "Application Form"} 
        subtitle={showMalayalam ? 
          "DQAA യിലെ പഠനത്തിനായി അപേക്ഷിക്കുക" : 
          "Apply to study at Darul Quran Abdulla Academy"}
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
      />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <a 
              href="https://drive.google.com/file/d/1234567890/view"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dqaa-500 hover:text-dqaa-700 flex items-center text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path></svg>
              {showMalayalam ? "പ്രോസ്പെക്ടസ് ഡൗൺലോഡ് ചെയ്യുക" : "Download Prospectus"}
            </a>
          </div>
          <Button
            variant="outline"
            onClick={() => setShowMalayalam(!showMalayalam)}
            className="text-sm"
          >
            {showMalayalam ? "Switch to English" : "മലയാളത്തിലേക്ക് മാറുക"}
          </Button>
        </div>
      </div>
      
      <section className="py-8 mb-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader className="bg-dqaa-500 text-white">
              <CardTitle className="text-2xl">
                {showMalayalam ? "2025 അക്കാദമിക് വർഷത്തിലേക്കുള്ള അപേക്ഷ" : "Application for the 2025 Academic Year"}
              </CardTitle>
              <CardDescription className="text-white/80">
                {showMalayalam ? 
                  "ദയവായി താഴെ നൽകിയിരിക്കുന്ന എല്ലാ വിവരങ്ങളും പൂരിപ്പിക്കുക." : 
                  "Please fill in all the information requested below."}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-dqaa-500 border-b pb-2">
                      {showMalayalam ? "വിദ്യാർത്ഥിയുടെ വിവരങ്ങൾ" : "Student Information"}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "പേര്" : "First Name"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "അവസാന പേര് / കുടുംബ പേര്" : "Last Name / Family Name"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="fullNameCapital"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {showMalayalam ? "കാപ്പിറ്റൽ അക്ഷരങ്ങളിൽ പേര് (ഇംഗ്ലീഷിൽ)" : "Name in English Capital Letters"} *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="JOHN DOE" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {showMalayalam ? "ലിംഗം" : "Gender"} *
                          </FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={showMalayalam ? "ലിംഗം തിരഞ്ഞെടുക്കുക" : "Select gender"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">{showMalayalam ? "പുരുഷൻ" : "Male"}</SelectItem>
                              <SelectItem value="female">{showMalayalam ? "സ്ത്രീ" : "Female"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "ജനന തീയതി" : "Date of Birth"} *
                            </FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="dateOfBirthWords"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "ജനന തീയതി (വാക്കുകളിൽ)" : "Date of Birth (in words)"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Fifth May Two Thousand Ten" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="birthCertificate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? 
                                "ജനന സർട്ടിഫിക്കറ്റ് നൽകിയിട്ടുണ്ടോ?" : 
                                "Birth Certificate Provided?"} *
                            </FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={showMalayalam ? "തിരഞ്ഞെടുക്കുക" : "Select"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="birth_register">
                                  {showMalayalam ? "ജനന സർട്ടിഫിക്കറ്റ്" : "Birth Register"}
                                </SelectItem>
                                <SelectItem value="affidavit">
                                  {showMalayalam ? "സത്യവാങ്മൂലം" : "Affidavit"}
                                </SelectItem>
                                <SelectItem value="medical_certificate">
                                  {showMalayalam ? "മെഡിക്കൽ സർട്ടിഫിക്കറ്റ്" : "Medical Certificate"}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="ageYears"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "വയസ്സ് (വർഷങ്ങൾ)" : "Age (Years)"} *
                            </FormLabel>
                            <FormControl>
                              <Input type="number" min="0" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="ageMonths"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "വയസ്സ് (മാസങ്ങൾ)" : "Age (Months)"} *
                            </FormLabel>
                            <FormControl>
                              <Input type="number" min="0" max="11" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "വിദ്യാർത്ഥി വിഭാഗം" : "Student Category"} *
                            </FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={showMalayalam ? "തിരഞ്ഞെടുക്കുക" : "Select category"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">{showMalayalam ? "ജനറൽ" : "General"}</SelectItem>
                                <SelectItem value="obc">{showMalayalam ? "OBC" : "OBC"}</SelectItem>
                                <SelectItem value="sc">{showMalayalam ? "SC" : "SC"}</SelectItem>
                                <SelectItem value="st">{showMalayalam ? "ST" : "ST"}</SelectItem>
                                <SelectItem value="other">{showMalayalam ? "മറ്റുള്ളവ" : "Other"}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="religion"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "മതം" : "Religion"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "മതം" : "Religion"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="previousSchool"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "മുൻ സ്കൂളിന്റെ പേര്" : "Previous School"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "മുൻ സ്കൂളിന്റെ പേര്" : "Previous school name"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="classApplying"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "പ്രവേശനം ആവശ്യമുള്ള ക്ലാസ്" : "Class Applying For"} *
                            </FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={showMalayalam ? "തിരഞ്ഞെടുക്കുക" : "Select class"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="thahfeezul_quran">
                                  {showMalayalam ? "തഹ്ഫീളുൽ ഖുർആൻ" : "Thahfeezul Qur'an"}
                                </SelectItem>
                                <SelectItem value="bayanul_quran">
                                  {showMalayalam ? "ബയാനുൽ ഖുർആൻ" : "Bayanul Qur'an"}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="motherTongue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "മാതൃഭാഷ" : "Mother Tongue"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "മാതൃഭാഷ" : "Mother tongue"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="preferredMedium"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "പഠന മാധ്യമം" : "Preferred Medium"} *
                            </FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={showMalayalam ? "തിരഞ്ഞെടുക്കുക" : "Select medium"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="english">{showMalayalam ? "ഇംഗ്ലീഷ്" : "English"}</SelectItem>
                                <SelectItem value="malayalam">{showMalayalam ? "മലയാളം" : "Malayalam"}</SelectItem>
                                <SelectItem value="arabic">{showMalayalam ? "അറബിക്" : "Arabic"}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold text-dqaa-500 border-b pb-2">
                      {showMalayalam ? "രക്ഷാകർത്താവിന്റെ വിവരങ്ങൾ" : "Parent/Guardian Information"}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "രക്ഷാകർത്താവിന്റെ പേര്" : "Parent/Guardian's Name"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "രക്ഷാകർത്താവിന്റെ പേര്" : "Parent/Guardian's name"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="parentRelation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "വിദ്യാർത്ഥിയുമായുള്ള ബന്ധം" : "Relationship with Student"} *
                            </FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={showMalayalam ? "തിരഞ്ഞെടുക്കുക" : "Select relationship"} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="father">{showMalayalam ? "പിതാവ്" : "Father"}</SelectItem>
                                <SelectItem value="mother">{showMalayalam ? "മാതാവ്" : "Mother"}</SelectItem>
                                <SelectItem value="guardian">{showMalayalam ? "രക്ഷാകർത്താവ്" : "Guardian"}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="motherName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {showMalayalam ? "മാതാവിന്റെ പേര്" : "Mother's Name"} *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder={showMalayalam ? "മാതാവിന്റെ പേര്" : "Mother's name"} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="parentOccupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "രക്ഷാകർത്താവിന്റെ തൊഴിൽ" : "Parent's Occupation"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "തൊഴിൽ" : "Occupation"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="parentAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "രക്ഷാകർത്താവിന്റെ വിലാസം" : "Parent's Address"} *
                            </FormLabel>
                            <FormControl>
                              <Textarea placeholder={showMalayalam ? "വിലാസം" : "Address"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="guardianOccupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "താൽക്കാലിക രക്ഷാകർത്താവിന്റെ തൊഴിൽ (ആവശ്യമെങ്കിൽ)" : "Temporary Guardian's Occupation (if applicable)"}
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "തൊഴിൽ" : "Occupation"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="guardianAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "താൽക്കാലിക രക്ഷാകർത്താവിന്റെ വിലാസം (ആവശ്യമെങ്കിൽ)" : "Temporary Guardian's Address (if applicable)"}
                            </FormLabel>
                            <FormControl>
                              <Textarea placeholder={showMalayalam ? "വിലാസം" : "Address"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold text-dqaa-500 border-b pb-2">
                      {showMalayalam ? "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ" : "Contact Information"}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "ഇമെയിൽ" : "Email"} *
                            </FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {showMalayalam ? "ഫോൺ നമ്പർ" : "Phone Number"} *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder={showMalayalam ? "ഫോൺ നമ്പർ" : "Phone number"} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <p className="text-sm text-gray-500 mb-6">
                      {showMalayalam ? 
                        "ഈ ഫോമിൽ നൽകിയിരിക്കുന്ന എല്ലാ വിവരങ്ങളും എന്റെ അറിവിൽ സത്യവും കൃത്യവുമാണെന്ന് ഞാൻ സ്ഥിരീകരിക്കുന്നു." : 
                        "I confirm that all the information provided in this form is true and correct to the best of my knowledge."}
                    </p>
                    
                    <Button 
                      type="submit" 
                      className="bg-dqaa-500 hover:bg-dqaa-600 w-full md:w-auto px-8" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 
                        (showMalayalam ? "സമർപ്പിക്കുന്നു..." : "Submitting...") : 
                        (showMalayalam ? "അപേക്ഷ സമർപ്പിക്കുക" : "Submit Application")}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t flex flex-col items-start p-6">
              <h4 className="font-semibold text-dqaa-500 mb-2">
                {showMalayalam ? "പ്രധാന നിർദ്ദേശങ്ങൾ:" : "Important Instructions:"}
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                <li>
                  {showMalayalam ? 
                    "എല്ലാ വിവരങ്ങളും കൃത്യമായി പൂരിപ്പിക്കുക." : 
                    "Fill in all information accurately."}
                </li>
                <li>
                  {showMalayalam ? 
                    "സ്വീകരണത്തിനായി വിദ്യാർത്ഥിയുടെ നവീനമായ പാസ്പോർട്ട് വലിപ്പത്തിലുള്ള ഫോട്ടോ കൊണ്ടുവരിക." : 
                    "Bring an updated passport-size photograph of the student for verification."}
                </li>
                <li>
                  {showMalayalam ? 
                    "എല്ലാ ആവശ്യമായ രേഖകളുടെയും അസൽ നേരിട്ട് കാണിക്കേണ്ടതാണ്." : 
                    "Original documents must be presented for verification."}
                </li>
                <li>
                  {showMalayalam ? 
                    "ഓൺലൈൻ അപേക്ഷയ്ക്ക് ശേഷം, ഫോമിന്റെ പ്രിന്റ് എടുത്ത് നിങ്ങൾക്ക് അക്കാദമിയിലേക്ക് കൊണ്ടുവരാവുന്നതാണ്." : 
                    "After online application, you can bring a printout of this form to the Academy."}
                </li>
              </ul>
              
              <div className="w-full mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="tel:+919526552211" 
                    className="text-sm text-dqaa-500 hover:text-dqaa-700 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    {showMalayalam ? "സഹായത്തിന് വിളിക്കുക" : "Call for Assistance"}: +91 9526 552211
                  </a>
                  <a 
                    href="mailto:darulquranind@gmail.com" 
                    className="text-sm text-dqaa-500 hover:text-dqaa-700 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
                    {showMalayalam ? "ഇമെയിൽ" : "Email"}: darulquranind@gmail.com
                  </a>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationFormPage;
