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

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
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
      // Send email notification to company about new subscriber
      const templateParams = {
        from_name: "Website Newsletter Subscription",
        from_email: email,
        subject: "New Newsletter Subscription",
        message: `New subscriber with email: ${email}`,
        to_email: TARGET_EMAIL,
        subscription_date: new Date().toISOString(),
      };
      
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_NEWSLETTER,
        templateParams
      );
      
      if (response.status === 200) {
        // Send confirmation email to subscriber
        const confirmationParams = {
          to_name: "Valued Subscriber", // Generic name as we only have email
          to_email: email,
          subject: EMAIL_TEMPLATES.newsletterConfirmation.subject,
          message: EMAIL_TEMPLATES.newsletterConfirmation.body,
          from_name: "Me & My Dubai",
          reply_to: TARGET_EMAIL,
        };
        
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Mail className="h-5 w-5 text-luxury-gold" />
            {translate("Dubai Market Insights")}
          </DialogTitle>
          <DialogDescription>
            {translate("Subscribe to receive the latest market trends and investment opportunities.")}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {translate("Email Address")}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="border-luxury-gold/30 focus-visible:ring-luxury-gold"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={consentGiven}
                  onCheckedChange={(checked) => setConsentGiven(checked === true)}
                  className="data-[state=checked]:bg-luxury-gold data-[state=checked]:border-luxury-gold"
                />
                <div className="grid gap-1 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-xs text-gray-600 font-medium"
                  >
                    {translate("I agree to receive email marketing communications and understand I can unsubscribe at any time.")}
                  </label>
                </div>
              </div>
              
              <div className="text-xs text-gray-500">
                {translate("By subscribing, you agree to our")} 
                <Link to="/privacy-policy" className="underline ml-1 hover:text-luxury-gold">
                  {translate("Privacy Policy")}
                </Link>.
              </div>
              
              <div className="flex items-center justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                >
                  {translate("Maybe Later")}
                </Button>
                <Button 
                  type="submit" 
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : translate("Subscribe")} <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </form>
          ) : (
            <div className="py-4 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{translate("Subscription Confirmed!")}</h3>
              <p className="text-gray-600 mb-4">
                {translate("Thank you for subscribing to our Dubai Market Insights newsletter.")}
              </p>
              <Button onClick={handleClose} className="bg-luxury-gold hover:bg-luxury-gold/90 text-white">
                {translate("Continue to Website")}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailSignupPopup;