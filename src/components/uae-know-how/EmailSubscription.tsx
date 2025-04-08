import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, CheckCircle2, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { TARGET_EMAIL, EMAILJS_CONFIG, EMAIL_TEMPLATES } from "@/config/email";

const EmailSubscription = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log("EmailJS initialized in UAE Know-How with:", EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consentGiven) {
      toast({
        title: translate("Consent Required"),
        description: translate("Please agree to our terms and privacy policy before subscribing."),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Sending email with service ID in UAE Know-How:", EMAILJS_CONFIG.SERVICE_ID);
      // Send email notification to company about new subscriber
      const templateParams = {
        from_name: "UAE Know-How Newsletter Subscription",
        from_email: email,
        to_name: "Me & My Dubai Team", // Added recipient name
        to_email: TARGET_EMAIL, // Make sure this is not empty
        subject: "New UAE Know-How Newsletter Subscription",
        message: `New subscriber with email: ${email} from the UAE Know-How page.`,
        subscription_date: new Date().toISOString(),
      };
      
      console.log("UAE Know-How template params:", templateParams);
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_NEWSLETTER,
        templateParams
      );
      
      console.log("UAE Know-How email response:", response);
      
      if (response.status === 200) {
        // Send confirmation email to subscriber
        const confirmationParams = {
          to_name: "Valued Subscriber", // Generic name as we only have email
          to_email: email,
          from_name: "Me & My Dubai",
          from_email: TARGET_EMAIL, // Added sender email
          reply_to: TARGET_EMAIL,
          subject: EMAIL_TEMPLATES.newsletterConfirmation.subject,
          message: EMAIL_TEMPLATES.newsletterConfirmation.body,
        };
        
        console.log("UAE Know-How confirmation template params:", confirmationParams);
        
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_CONFIRMATION,
          confirmationParams
        );
        
        setIsSubscribed(true);
        setEmail("");
        setConsentGiven(false);
        
        toast({
          title: translate("Thanks for subscribing!"),
          description: translate("You'll receive our latest UAE market insights."),
        });
      } else {
        throw new Error("Failed to send subscription email");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: translate("Error"),
        description: translate("There was a problem with your subscription. Please try again."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // ... keep existing code (section with form rendering)
  );
};

export default EmailSubscription;
