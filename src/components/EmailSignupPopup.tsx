import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, EMAIL_TEMPLATES } from "@/config/email";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EmailSignupPopup = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Initialize EmailJS once on mount
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup");
    if (!hasSeenPopup) {
      setTimeout(() => {
        setShowPopup(true);
      }, 3000); // 3-second delay
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consentGiven) {
      toast.error("Please agree to receive emails.");
      return;
    }

    if (!email) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const templateParams = {
        to_email: email,
        subject: "New Email Subscription",
        message: "Thank you for subscribing!",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_NEWSLETTER,
        templateParams
      );

      const confirmationParams = {
        to_email: email,
        subject: EMAIL_TEMPLATES.newsletterConfirmation.subject,
        message: EMAIL_TEMPLATES.newsletterConfirmation.body,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID_CONFIRMATION,
        confirmationParams
      );

      localStorage.setItem("hasSeenEmailPopup", "true");
      setShowPopup(false);
      toast.success("Subscribed successfully! Check your email 📧");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenEmailPopup", "true");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-6 shadow-xl rounded-2xl max-w-sm w-full z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Stay Updated!</h3>
        <button onClick={handleClose} className="text-gray-500 hover:text-black">
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="consent"
            checked={consentGiven}
            onChange={(e) => setConsentGiven(e.target.checked)}
            className="w-4 h-4"
          />
          <Label htmlFor="consent" className="text-sm">
            I agree to receive updates via email.
          </Label>
        </div>

        <Button
          type="submit"
          disabled={!consentGiven || !email}
          className="w-full"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default EmailSignupPopup;
