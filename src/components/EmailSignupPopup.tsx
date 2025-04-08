import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, X, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import emailjs from '@emailjs/browser';
import { TARGET_EMAIL, EMAILJS_CONFIG, EMAIL_TEMPLATES } from "@/config/email";

const EmailSignupPopup = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log("EmailJS initialized with:", EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Show popup after a short delay when component mounts
  useEffect(() => {
    // Check if user has already seen popup (using localStorage)
    const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 5 seconds delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consentGiven) {
      toast({
        title: translate("Consent Required"),
        description: translate("Please agree to our terms before subscribing."),
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Sending email with service ID:", EMAILJS_CONFIG.SERVICE_ID);
      // Send email notification to company about new subscriber
      const templateParams = {
        from_name: "Website Newsletter Subscription",
        from_email: email,
        to_name: "Me & My Dubai Team", // Added recipient name
        to_email: TARGET_EMAIL, // Make sure this is not empty
        subject: "New Newsletter Subscription",
        message: `New subscriber with email: ${email}`,
        subscription_date: new Date().toISOString(),
      };
      
      console.log("Newsletter template params:", templateParams);
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_NEWSLETTER,
        templateParams
      );
      
      console.log("Email response:", response);
      
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
        
        console.log("Confirmation template params:", confirmationParams);
        
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_CONFIRMATION,
          confirmationParams
        );
        
        setIsSuccess(true);
        localStorage.setItem("hasSeenEmailPopup", "true");
        
        toast({
          title: translate("Successfully Subscribed"),
          description: translate("Thank you for subscribing to our market updates."),
        });
        
        // Close popup after successful subscription (with delay to show success state)
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
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

  // Function to close popup and remember user choice
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenEmailPopup", "true");
  };

  return (
    // ... keep existing code (Dialog and form rendering)
  );
};

export default EmailSignupPopup;
