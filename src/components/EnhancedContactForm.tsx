
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
  
  const handleSubmit = (e: React.FormEvent) => {
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
    
    // Simulate form submission
    console.log("Form data submitted:", formData);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: translate("Thank You!"),
        description: translate("Your consultation request has been submitted. We'll contact you shortly."),
      });
      
      // Reset form
      setFormData({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: "",
      });
    }, 1500);
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
              <SelectItem value="mr">{translate("Mr.")}</SelectItem>
              <SelectItem value="mrs">{translate("Mrs.")}</SelectItem>
              <SelectItem value="ms">{translate("Ms.")}</SelectItem>
              <SelectItem value="dr">{translate("Dr.")}</SelectItem>
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
            <SelectItem value="property-dubai">{translate("Property in Dubai")}</SelectItem>
            <SelectItem value="property-rak">{translate("Property in Ras Al Khaimah")}</SelectItem>
            <SelectItem value="company-setup">{translate("Company Setup")}</SelectItem>
            <SelectItem value="legal-services">{translate("Legal Services")}</SelectItem>
            <SelectItem value="general">{translate("General Information")}</SelectItem>
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
