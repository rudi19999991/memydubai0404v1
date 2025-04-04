import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, CheckCircle2, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const EmailSubscription = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [showDataInfo, setShowDataInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setConsentGiven(false);

      toast({
        title: translate("Thanks for subscribing!"),
        description: translate("You'll receive our latest UAE market insights."),
      });

      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-white">
      <div className="luxury-container">
        <div className="bg-gradient-to-r from-luxury-navy to-[#0d3659] rounded-xl p-8 md:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white/10 p-5 rounded-full">
                <Mail className="h-12 w-12 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {translate("Subscribe to Updates")}
                </h3>
                <p className="text-gray-200 mb-6">
                  {translate("Get UAE market insights delivered to your inbox")}
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <Input
                      type="email"
                      placeholder={translate("Your Email")}
                      className="bg-white/20 text-white placeholder:text-gray-300 border-0 focus-visible:ring-2 focus-visible:ring-luxury-gold"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <div className="flex items-start space-x-2 mb-2">
                      <Checkbox 
                        id="consent" 
                        checked={consentGiven}
                        onCheckedChange={(checked) => setConsentGiven(checked === true)}
                        className="data-[state=checked]:bg-luxury-gold data-[state=checked]:border-luxury-gold"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="consent"
                          className="text-sm text-gray-200 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {translate("I agree to receive marketing emails and understand I can unsubscribe at any time.")}
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center mb-2">
                      <Button 
                        type="button" 
                        variant="link" 
                        className="p-0 h-auto text-xs text-gray-300 underline hover:text-luxury-gold"
                        onClick={() => setShowDataInfo(!showDataInfo)}
                      >
                        <Shield className="h-3 w-3 mr-1" />
                        {translate("GDPR Compliance")}
                      </Button>
                    </div>
                    
                    {showDataInfo && (
                      <div className="bg-white/10 p-4 rounded-md mb-3 text-xs text-gray-200">
                        <p className="mb-2">
                          {translate("We collect and process your personal data in accordance with applicable data protection laws, including GDPR and CCPA.")}
                        </p>
                        <p>
                          {translate("Your data is securely stored and will be retained only for as long as necessary for the purposes it was collected.")}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        type="submit" 
                        className="bg-luxury-gold hover:bg-luxury-gold/90 text-white"
                        disabled={isSubmitting || !consentGiven}
                      >
                        {isSubmitting ? "..." : translate("Subscribe")}
                      </Button>
                    </div>
                    
                    <div className="flex items-center mt-2 text-xs text-gray-300">
                      <Lock className="h-3 w-3 mr-1" />
                      <span>
                        {translate("By subscribing, you agree to our")} 
                        <Link to="/terms" className="underline ml-1 hover:text-luxury-gold">
                          {translate("Terms of Service")}
                        </Link> {translate("and")} 
                        <Link to="/privacy-policy" className="underline ml-1 hover:text-luxury-gold">
                          {translate("Privacy Policy")}
                        </Link>
                      </span>
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="h-5 w-5 text-luxury-gold" />
                    <span>{translate("Thanks for subscribing!")}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;