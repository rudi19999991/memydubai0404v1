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
    const hasSeen = localStorage.getItem("hasSeenEmailPopup");
    if (!hasSeen) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentGiven) {
      toast({ title: translate("Consent Required"), description: translate("Please agree before subscribing."), variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("[Debug] Getting reCAPTCHA token...");
      const token = await new Promise<string>((resolve, reject) => {
        if (window.grecaptcha && RECAPTCHA_SITE_KEY) {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "submit" })
              .then(resolve)
              .catch(err => { console.error("grecaptcha error:", err); reject(err); });
          });
        } else {
          console.error("grecaptcha not loaded or site key missing");
          reject("grecaptcha not ready");
        }
      });
      console.log("[Debug] Got token:", token);

      const formPayload = new FormData();
      formPayload.append("Email", email);
      formPayload.append("Source", "Newsletter Popup");
      formPayload.append("g-recaptcha-response", token);

      console.log("[Debug] Form data about to send:");
      for (let entry of formPayload.entries()) {
        console.log("  ", entry[0], ":", entry[1]);
      }

      const response = await fetch("https://formspree.io/f/xwpqpqjl", {
        method: "POST",
        body: formPayload,
        headers: { Accept: "application/json" },
      });

      console.log("[Debug] Formspree response status:", response.status);

      if (response.ok) {
        console.log("[Debug] Submission succeeded");
        localStorage.setItem("hasSeenEmailPopup", "true");
        setIsSuccess(true);
        toast({ title: translate("Subscribed"), description: translate("Thank you!"), });
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        const json = await response.json();
        console.error("[Debug] Submission failed JSON:", json);
        toast({ title: translate("Error"), description: json.error || "Check console for debug logs.", variant: "destructive" });
      }
    } catch (err) {
      console.error("[Debug] handleSubmit catch:", err);
      toast({ title: translate("Error"), description: "Submission failed—see console.", variant: "destructive" });
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
          <DialogDescription>{translate("Subscribe to receive the latest market trends and investment opportunities.")}</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* email + consent UI here */}
              <Button type="submit" className="bg-luxury-gold" disabled={isSubmitting}>
                {isSubmitting ? "..." : translate("Subscribe")} <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="py-4 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">{translate("Subscription Confirmed!")}</h3>
              <p className="text-gray-600 mb-4">{translate("Thank you for subscribing!")}</p>
              <Button onClick={handleClose} className="bg-luxury-gold">{translate("Continue")}</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailSignupPopup;
