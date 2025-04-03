
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";
import jsPDF from "jspdf";
import { saveAs } from 'file-saver';

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

      // Send email using the email service
      await sendEmail({
        to: "darulquranind@gmail.com",
        subject: `New Application: ${formData.studentName}`,
        fromName: formData.studentName,
        fromEmail: formData.email,
        message: message,
        replyTo: formData.email,
        sendConfirmation: true
      });
      
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
  
  const generateApplicationPDF = (formData: ApplicationData) => {
    // Create a new PDF document
    const doc = new jsPDF();
    
    // Add DQAA header
    doc.setFontSize(20);
    doc.setTextColor(53, 94, 59); // dqaa-500 color
    doc.text("Darul Quran Abdulla Academy", 105, 20, { align: 'center' });
    doc.setFontSize(14);
    doc.text("أكاديمية عبد الله لتحفيظ القران", 105, 30, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Application Form", 105, 40, { align: 'center' });
    
    // Add a line
    doc.setDrawColor(186, 153, 76); // gold-400 color
    doc.setLineWidth(0.5);
    doc.line(20, 45, 190, 45);
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    
    // Add application details
    let y = 55;
    const lineHeight = 7;
    
    // Student Information
    doc.setFontSize(14);
    doc.setTextColor(53, 94, 59);
    doc.text("Student Information", 20, y);
    y += lineHeight + 3;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${formData.studentName}`, 20, y); y += lineHeight;
    doc.text(`Date of Birth: ${formData.dateOfBirth}`, 20, y); y += lineHeight;
    doc.text(`Gender: ${formData.gender}`, 20, y); y += lineHeight;
    doc.text(`Email: ${formData.email}`, 20, y); y += lineHeight;
    doc.text(`Phone: ${formData.phone}`, 20, y); y += lineHeight;
    
    // Address
    doc.setFontSize(14);
    doc.setTextColor(53, 94, 59);
    y += 5;
    doc.text("Address", 20, y);
    y += lineHeight;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const addressLines = formData.address.split('\n');
    addressLines.forEach(line => {
      doc.text(line, 20, y);
      y += lineHeight;
    });
    
    // Parent/Guardian Information
    doc.setFontSize(14);
    doc.setTextColor(53, 94, 59);
    y += 5;
    doc.text("Parent/Guardian Information", 20, y);
    y += lineHeight + 3;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${formData.parentName}`, 20, y); y += lineHeight;
    doc.text(`Occupation: ${formData.parentOccupation}`, 20, y); y += lineHeight;
    
    // Education Background
    doc.setFontSize(14);
    doc.setTextColor(53, 94, 59);
    y += 5;
    doc.text("Education Background", 20, y);
    y += lineHeight + 3;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(`Previous School: ${formData.previousSchool}`, 20, y); y += lineHeight;
    
    // Check if we need to add a new page
    if (y > 250) {
      doc.addPage();
      y = 20;
    }
    
    // Medical Information
    doc.setFontSize(14);
    doc.setTextColor(53, 94, 59);
    y += 5;
    doc.text("Medical Information", 20, y);
    y += lineHeight + 3;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(formData.medicalInfo || 'None provided', 20, y); y += lineHeight;
    
    // Program of Interest
    doc.setFontSize(14);
    doc.setTextColor(53, 94, 59);
    y += 5;
    doc.text("Program of Interest", 20, y);
    y += lineHeight + 3;
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(formData.program, 20, y); y += lineHeight;
    
    // Additional Information
    if (formData.howDidYouHear || formData.additionalInfo) {
      doc.setFontSize(14);
      doc.setTextColor(53, 94, 59);
      y += 5;
      doc.text("Additional Information", 20, y);
      y += lineHeight + 3;
      
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      if (formData.howDidYouHear) {
        doc.text(`How did you hear about us: ${formData.howDidYouHear}`, 20, y);
        y += lineHeight;
      }
      if (formData.additionalInfo) {
        doc.text(`Additional notes: ${formData.additionalInfo}`, 20, y);
        y += lineHeight;
      }
    }
    
    // Add footer
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Application Date: ${new Date().toLocaleDateString()}`, 20, 280);
    doc.text("Darul Quran Abdulla Academy - Kothakurssi, Ottapalam, Kerala, India, Pin:679501", 105, 287, { align: 'center' });
    doc.text("Email: darulquranind@gmail.com | Phone: +919526552211", 105, 292, { align: 'center' });
    
    // Save the PDF
    const filename = `DQAA_Application_${formData.studentName.replace(/\s+/g, '_')}.pdf`;
    saveAs(doc.output('blob'), filename);
    
    toast({
      title: "PDF Generated",
      description: "Your application PDF has been generated and is ready to download.",
    });
    
    return filename;
  };
  
  return { 
    sendApplicationEmail,
    generateApplicationPDF
  };
};

export default useApplicationEmailService;
