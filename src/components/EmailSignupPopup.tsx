import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
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
    const hasSeen = localStorage.getItem("hasSeenEmailPopup");
    if (!hasSeen) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentGiven) {
      toast({
        title: translate("Consent Required"),
        description: translate("Please agree before subscribing."),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (!window.grecaptcha || !RECAPTCHA_SITE_KEY) {
        throw new Error("reCAPTCHA not ready");
      }

      // Wait for grecaptcha to be ready
      await new Promise<void>((resolve) => {
        window.grecaptcha.ready(resolve);
      });

      // Execute grecaptcha and get token
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
        action: "submit",
      });

      const payload = {
        Email: email,
        Source: "Newsletter Popup",
        "g-recaptcha-response": token,
      };

      const response = await fetch("https://formspree.io/f/xwpqpqjl", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        localStorage.setItem("hasSeenEmailPopup", "true");
        setIsSuccess(true);
        toast({ title: translate("Subscribed"), description: translate("Thank you!") });
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        const json = await response.json();
        toast({
          title: translate("Error"),
          description: json.error || "Submission failed.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast({
        title: translate("Error"),
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Input
                type="email"
                placeholder={translate("Enter your email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex items-start space-x-2">
                <Checkbox
                  checked={consentGiven}
                  onCheckedChange={(val) => setConsentGiven(Boolean(val))}
                />
                <label className="text-sm">
                  {translate("I agree to receive updates and newsletters.")}
                </label>
              </div>
              <Button type="submit" className="bg-luxury-gold" disabled={isSubmitting}>
                {isSubmitting ? "..." : translate("Subscribe")}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="py-4 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{translate("Subscription Confirmed!")}</h3>
              <p className="text-gray-600 mb-4">{translate("Thank you for subscribing!")}</p>
              <Button onClick={() => setIsOpen(false)} className="bg-luxury-gold">
                {translate("Continue")}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailSignupPopup;
