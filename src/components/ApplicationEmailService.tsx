
import { useToast } from "@/hooks/use-toast";

interface ApplicationData {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  parentName: string;
  parentOccupation: string;
  previousSchool: string;
  medicalInfo: string;
  program: string;
  howDidYouHear: string;
  additionalInfo: string;
  [key: string]: any;
}

const useApplicationEmailService = () => {
  const { toast } = useToast();
  
  const sendApplicationEmail = async (formData: ApplicationData): Promise<boolean> => {
    console.log("Sending application email with data:", formData);
    
    try {
      // Construct the email message
      const message = `
New Application Submission:

Student Information:
------------------
Name: ${formData.studentName}
Date of Birth: ${formData.dateOfBirth}
Gender: ${formData.gender}
Email: ${formData.email}
Phone: ${formData.phone}

Address:
------------------
${formData.address}

Parent/Guardian Information:
------------------
Name: ${formData.parentName}
Occupation: ${formData.parentOccupation}

Education Background:
------------------
Previous School: ${formData.previousSchool}

Medical Information:
------------------
${formData.medicalInfo || 'None provided'}

Program of Interest: ${formData.program}

How did they hear about us: ${formData.howDidYouHear}

Additional Information:
------------------
${formData.additionalInfo || 'None provided'}

Submission Date: ${new Date().toLocaleString()}
`;

      // For now, we'll simulate sending the email with a console log
      // In a real implementation, this would call an API endpoint or email service
      console.log("Would send email to: darulquranind@gmail.com");
      console.log("Email content:", message);
      
      // Send confirmation email to applicant
      await sendConfirmationEmail(formData.email, formData.studentName);
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We will contact you soon.",
      });
      
      return true;
    } catch (error) {
      console.error("Error sending application email:", error);
      
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your application. Please try again later.",
        variant: "destructive",
      });
      
      return false;
    }
  };
  
  const sendConfirmationEmail = async (toEmail: string, studentName: string): Promise<void> => {
    // For demonstration purposes, we'll simulate sending a confirmation email
    console.log("Would send confirmation email to:", toEmail);
    console.log("Confirmation email content:", `
Dear ${studentName},

Thank you for submitting your application to Darul Quran Abdulla Academy. We have received your application and will review it shortly.

We will contact you regarding the next steps in the admissions process. If you have any questions, please feel free to contact our admissions office at +91 94967 21259.

Best regards,
Admissions Team
Darul Quran Abdulla Academy
    `);
  };
  
  return { sendApplicationEmail };
};

export default useApplicationEmailService;
