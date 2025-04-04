
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

// Initialize EmailJS immediately
emailjs.init(EMAILJS_PUBLIC_KEY);

export async function sendEmail(params: EmailParams, isAdmissionForm: boolean = false): Promise<void> {
  const { to, subject, fromName, fromEmail, message, replyTo, sendConfirmation } = params;
  
  try {
    // Send email to admin
    await sendEmailToAdmin(to, subject, message, fromName, fromEmail, replyTo, isAdmissionForm);
    
    // Send confirmation email to user if requested
    if (sendConfirmation) {
      await sendConfirmationEmail(fromEmail, fromName, isAdmissionForm);
    }
  } catch (error) {
    console.error('Error in sendEmail:', error);
    throw error;
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
  console.log('Sending email to admin:', {
    to,
    subject,
    message,
    fromName,
    fromEmail,
    replyTo: replyTo || fromEmail
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
    
    console.log('Email sent successfully:', response.status, response.text);
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
  console.log('Sending confirmation email to user:', {
    to: toEmail,
    subject: isAdmissionForm ? 
      'Thank you for your application to Darul Quran Abdulla Academy' : 
      'Thank you for contacting Darul Quran Abdulla Academy'
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
      // These fields will be used by the EmailJS template
      academy_name: 'Darul Quran Abdulla Academy',
      academy_email: 'darulquranind@gmail.com',
      academy_phone: '+919526552211'
    };
    
    // Send confirmation email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      isAdmissionForm ? ADMISSION_TEMPLATE_ID : CONTACT_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Confirmation email sent successfully:', response.status, response.text);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
}
