import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const { translate } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem("cookie-consent");
    if (hasConsent === null) {
      // Only show banner if no consent has been given yet
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Show after 1 second
      return () => clearTimeout(timer);
    } else {
      setConsentGiven(hasConsent === "true");
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setConsentGiven(true);
    setIsVisible(false);
  };

  const rejectNonEssentialCookies = () => {
    localStorage.setItem("cookie-consent", "false");
    setConsentGiven(false);
    setIsVisible(false);
  };

  const closeConsent = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="luxury-container py-4 px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6 max-w-2xl">
            <h3 className="text-lg font-bold mb-2">{translate("Cookie Consent")}</h3>
            <p className="text-sm text-gray-600">
              {translate("This website uses cookies to enhance your browsing experience and provide personalized services.")}
              {" "}
              {translate("Learn more about how we use cookies in our")}{" "}
              <Link to="/cookie-policy" className="text-luxury-gold underline">
                {translate("Cookie Policy")}
              </Link>.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={closeConsent}
              className="flex items-center"
            >
              <X className="h-4 w-4 mr-1" /> {translate("Close")}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={rejectNonEssentialCookies}
            >
              {translate("Reject Non-Essential Cookies")}
            </Button>
            <Button 
              size="sm" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
              onClick={acceptAllCookies}
            >
              {translate("Accept All Cookies")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;