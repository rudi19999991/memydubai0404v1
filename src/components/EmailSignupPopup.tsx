import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, ChevronRight, CheckCircle2 } from "lucide-react";
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

const EmailSignupPopup = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const RECAPTCHA_SITE_KEY = "6Lf5WIcrAAAAAOKSp3kPSYojFFPD47mZ757b4nZr";

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
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
      const token = await new Promise<string>((resolve, reject) => {
        if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
              .then(resolve)
              .catch(reject);
          });
        } else {
          reject("reCAPTCHA not loaded");
        }
      });

      const formPayload = new FormData();
      formPayload.append("Email", email);
      formPayload.append("Source", "Newsletter Popup");
      formPayload.append("g-recaptcha-response", token); // Required by Formspree

      const response = await fetch("https://formspree.io/f/xwpqpqjl", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        localStorage.setItem("hasSeenEmailPopup", "true");
        setIsSuccess(true);
        toast({
          title: translate("Successfully Subscribed"),
          description: translate("Thank you for subscribing to our market updates."),
        });
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        throw new Error(data?.error || "Formspree submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: translate("Error"),
        description: translate("There was a problem with your subscription. Please try again."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <label htmlFor="terms" className="text-xs text-gray-600 font-medium">
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
                <Button type="button" variant="outline" onClick={handleClose}>
                  {translate("Maybe Later")}
                </Button>
                <Button
                  type="submit"
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : translate("Subscribe")}
                  <ChevronRight className="ml-1 h-4 w-4" />
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
