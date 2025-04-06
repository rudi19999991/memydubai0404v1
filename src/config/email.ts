// The target email where all contact form submissions and newsletter subscriptions will be sent
export const TARGET_EMAIL = "info@memydubai.com";

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_ezgyo6j", // Replace with your actual EmailJS Service ID
  TEMPLATE_ID: "template_q3ka9op", // Replace with your actual EmailJS Template ID
  TEMPLATE_ID_NEWSLETTER: "template_q3ka9op", // Template for newsletter subscriptions
  TEMPLATE_ID_CONFIRMATION: "template_6u4y5re", // Template for confirmation emails
  PUBLIC_KEY: "rORYyxd9CQA56h8_n", // Replace with your actual EmailJS Public Key
};

// Email content templates
export const EMAIL_TEMPLATES = {
  confirmation: {
    subject: "Thank you for contacting MeMyDubai",
    body: `Thank you for reaching out to MeMyDubai. We have received your message and our team will get back to you shortly.
    
Kind regards,
MeMyDubai Team`
  },
  newsletterConfirmation: {
    subject: "Welcome to MeMyDubai Newsletter",
    body: `Thank you for subscribing to our newsletter. You'll now receive the latest updates on Dubai's real estate market and investment opportunities.
    
Kind regards,
MeMyDubai Team`
  }
};