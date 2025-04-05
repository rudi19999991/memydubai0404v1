// The target email where all contact form submissions and newsletter subscriptions will be sent
export const TARGET_EMAIL = "info@memydubai.com";

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_ezgyo6j", // Your actual EmailJS Service ID
  TEMPLATE_ID: "template_contact", // Template ID for contact form
  TEMPLATE_ID_NEWSLETTER: “template_q3ka9op”, // Template ID for newsletter
  TEMPLATE_ID_CONFIRMATION: "template_6u4y5re", // Template ID for auto-confirmation
  PUBLIC_KEY: "rORYyxd9CQA56h8_n", // Your actual EmailJS Public Key
};

// Email content templates (for internal use if manually triggering custom email formats)
export const EMAIL_TEMPLATES = {
  confirmation: {
    subject: "Thank you for contacting Me & My Dubai",
    body: `Thank you for reaching out to Me & My Dubai. We have received your message and our team will get back to you shortly.

Kind regards,  
Me & My Dubai Team`
  },
  newsletterConfirmation: {
    subject: "Welcome to Me & My Dubai Newsletter",
    body: `Thank you for subscribing to our newsletter. You'll now receive the latest updates on Dubai's real estate market and investment opportunities.

Kind regards,  
Me & My Dubai Team`
  }
};
