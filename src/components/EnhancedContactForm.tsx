import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EnhancedContactFormProps {
  defaultInterest?: string;
}

const EnhancedContactForm: React.FC<EnhancedContactFormProps> = ({ defaultInterest }) => {
  const { translate } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedIn: defaultInterest || "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.interestedIn) {
      toast({
        title: translate("Form Incomplete"),
        description: translate("Please fill in all required fields."),
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    const formPayload = new FormData();
    formPayload.append("Title", formData.title);
    formPayload.append("First Name", formData.firstName);
    formPayload.append("Last Name", formData.lastName);
    formPayload.append("Email", formData.email);
    formPayload.append("Phone", formData.phone);
    formPayload.append("Interested In", formData.interestedIn);
    formPayload.append("Message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/meozoznb", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: translate("Thank You!"),
          description: translate("Your consultation request has been submitted. We'll contact you shortly."),
        });
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          interestedIn: "",
          message: "",
        });
      } else {
        toast({
          title: translate("Error"),
          description: translate("There was a problem submitting your request. Please try again."),
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: translate("Error"),
        description: translate("Submission failed. Please check your internet connection."),
        variant: "destructive"
      });
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="title">{translate("Title")}</Label>
          <Select
            value={formData.title}
            onValueChange={(value) => handleSelectChange("title", value)}
          >
            <SelectTrigger id="title" className="w-full">
              <SelectValue placeholder={translate("Select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr.">{translate("Mr.")}</SelectItem>
              <SelectItem value="Mrs.">{translate("Mrs.")}</SelectItem>
              <SelectItem value="Ms.">{translate("Ms.")}</SelectItem>
              <SelectItem value="Dr.">{translate("Dr.")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="firstName">{translate("First Name")} *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={translate("John")}
            required
          />
        </div>

        <div>
          <Label htmlFor="lastName">{translate("Last Name")} *</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={translate("Doe")}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">{translate("Email")} *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translate("john@example.com")}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">{translate("Phone Number")}</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={translate("+971 50 123 4567")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="interestedIn">{translate("Interested In")} *</Label>
        <Select
          value={formData.interestedIn}
          onValueChange={(value) => handleSelectChange("interestedIn", value)}
          required
        >
          <SelectTrigger id="interestedIn" className="w-full">
            <SelectValue placeholder={translate("Select your interest")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Property in Dubai">{translate("Property in Dubai")}</SelectItem>
            <SelectItem value="Property in Ras Al Khaimah">{translate("Property in Ras Al Khaimah")}</SelectItem>
            <SelectItem value="Company Setup">{translate("Company Setup")}</SelectItem>
            <SelectItem value="Legal Services">{translate("Legal Services")}</SelectItem>
            <SelectItem value="General Information">{translate("General Information")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">{translate("Message")}</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={translate("Tell us more about your requirements...")}
          rows={4}
        />
      </div>

      <div className="text-sm text-gray-500">
        {translate("Fields marked with * are required")}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-luxury-gold hover:bg-luxury-gold/90"
        disabled={isLoading}
      >
        {isLoading ? translate("Submitting...") : translate("Book Consultation")}
      </Button>
    </form>
  );
};

export default EnhancedContactForm;
