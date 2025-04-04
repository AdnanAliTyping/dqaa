
import emailjs from '@emailjs/browser';

interface EmailParams {
  to: string;
  subject: string;
  fromName: string;
  fromEmail: string;
  message: string;
  replyTo?: string;
  sendConfirmation?: boolean;
}

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'G2Bhlh8TeOSh0atei';
const EMAILJS_SERVICE_ID = 'service_rtzafui';
const CONTACT_TEMPLATE_ID = 'template_3emjpvl';
const ADMISSION_TEMPLATE_ID = 'template_2ehzm9d';
const CONFIRMATION_TEMPLATE_ID = 'template_3emjpvl'; // Using the same template for confirmations

// Initialize EmailJS immediately
emailjs.init(EMAILJS_PUBLIC_KEY);

export async function sendEmail(params: EmailParams, isAdmissionForm: boolean = false): Promise<void> {
  const { to, subject, fromName, fromEmail, message, replyTo, sendConfirmation } = params;
  
  try {
    console.log(`Starting email process for ${isAdmissionForm ? 'admission' : 'contact'} form`);
    
    // Send email to admin
    await sendEmailToAdmin(to, subject, message, fromName, fromEmail, replyTo, isAdmissionForm);
    console.log('Admin email sent successfully');
    
    // Send confirmation email to user if requested
    if (sendConfirmation) {
      console.log('Sending confirmation email to user:', fromEmail);
      await sendConfirmationEmail(fromEmail, fromName, isAdmissionForm);
      console.log('Confirmation email to user sent successfully');
    }
  } catch (error) {
    console.error('Error in sendEmail process:', error);
    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function sendEmailToAdmin(
  to: string, 
  subject: string, 
  message: string,
  fromName: string,
  fromEmail: string,
  replyTo?: string,
  isAdmissionForm: boolean = false
): Promise<void> {
  console.log('Preparing to send email to admin:', {
    to,
    subject,
    fromName,
    fromEmail,
    replyTo: replyTo || fromEmail,
    template: isAdmissionForm ? ADMISSION_TEMPLATE_ID : CONTACT_TEMPLATE_ID
  });
  
  try {
    // Prepare template parameters
    const templateParams = {
      to_email: to,
      to_name: 'DQAA Admin',
      from_name: fromName,
      from_email: fromEmail,
      subject: subject,
      message: message,
      reply_to: replyTo || fromEmail
    };
    
    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      isAdmissionForm ? ADMISSION_TEMPLATE_ID : CONTACT_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent to admin successfully:', response.status, response.text);
  } catch (error) {
    console.error('Error sending email to admin:', error);
    throw error;
  }
}

async function sendConfirmationEmail(
  toEmail: string,
  toName: string,
  isAdmissionForm: boolean = false
): Promise<void> {
  console.log('Preparing confirmation email to user:', {
    to: toEmail,
    name: toName,
    template: CONFIRMATION_TEMPLATE_ID
  });
  
  try {
    // Prepare template parameters for confirmation email
    const templateParams = {
      to_email: toEmail,
      to_name: toName,
      from_name: 'Darul Quran Abdulla Academy',
      from_email: 'darulquranind@gmail.com',
      subject: isAdmissionForm ? 
        'Thank you for your application to Darul Quran Abdulla Academy' : 
        'Thank you for contacting Darul Quran Abdulla Academy',
      message: isAdmissionForm ?
        `Dear ${toName},\n\nThank you for submitting your application to Darul Quran Abdulla Academy. We have received your application and will review it shortly. Our admissions team will contact you soon regarding the next steps.\n\nBest regards,\nDarul Quran Abdulla Academy Team\nPhone: +919526552211\nEmail: darulquranind@gmail.com` :
        `Dear ${toName},\n\nThank you for contacting Darul Quran Abdulla Academy. We have received your message and will get back to you as soon as possible.\n\nBest regards,\nDarul Quran Abdulla Academy Team\nPhone: +919526552211\nEmail: darulquranind@gmail.com`,
      // These fields will be used by the EmailJS template
      academy_name: 'Darul Quran Abdulla Academy',
      academy_email: 'darulquranind@gmail.com',
      academy_phone: '+919526552211',
      reply_to: 'darulquranind@gmail.com'
    };
    
    // Send confirmation email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      CONFIRMATION_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Confirmation email sent successfully:', response.status, response.text);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}
