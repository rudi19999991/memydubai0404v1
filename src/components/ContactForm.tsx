import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import DataProtectionInfo from "@/components/compliance/DataProtectionInfo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import emailjs from '@emailjs/browser';
import { TARGET_EMAIL, EMAILJS_CONFIG, EMAIL_TEMPLATES } from "@/config/email";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and privacy policy.",
  }),
});

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const { translate } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize React Hook Form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Prepare template parameters for main email to company
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone || "Not provided",
        subject: values.subject,
        message: values.message,
        to_email: TARGET_EMAIL,
        consent_timestamp: new Date().toISOString(),
      };
      
      // Send email to company using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      if (response.status === 200) {
        // Send confirmation email to the user
        const confirmationParams = {
          to_name: values.name,
          to_email: values.email,
          subject: EMAIL_TEMPLATES.confirmation.subject,
          message: EMAIL_TEMPLATES.confirmation.body,
          from_name: "MeMyDubai",
          reply_to: TARGET_EMAIL,
        };
        
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID_CONFIRMATION,
          confirmationParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
	toast({
          title: translate("Message Sent!"),
          description: translate("Thank you for your inquiry. We'll get back to you soon."),
        });
        
        // Reset form
        form.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: translate("Error"),
        description: translate("There was a problem sending your message. Please try again."),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">{translate("Contact Us")}</h3>
        <p className="text-gray-600 mb-6">
          {translate("Interested in investing in Dubai or Ras Al Khaimah properties? Fill out the form and our investment consultants will get back to you shortly.")}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
            <div>
              <h4 className="font-semibold">{translate("Location")}</h4>
              <p className="text-gray-600">{translate("Business Bay, Dubai, UAE")}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
            <div>
              <h4 className="font-semibold">{translate("Email")}</h4>
              <p className="text-gray-600">{TARGET_EMAIL}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-luxury-gold mt-1" />
            <div>
              <h4 className="font-semibold">{translate("Phone")}</h4>
              <p className="text-gray-600">+971 58 599 9458</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-semibold mb-2">{translate("Connect With Us")}</h4>
          <div className="flex space-x-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Phone className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Data Protection Info */}
        <div className="mt-6">
          <DataProtectionInfo />
        </div>
      </div>
      
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("Full Name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={translate("John Doe")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("Email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={translate("john@example.com")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("Phone")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={translate("+971 58 123 4567")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("Subject")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={translate("Investment Inquiry")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{translate("Message")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={translate("I'm interested in investing in Dubai properties...")}
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2 mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-luxury-gold data-[state=checked]:border-luxury-gold mt-1"
                    />
                  </FormControl>
                  <div className="grid gap-1.5 leading-none">
                    <FormLabel className="text-sm text-gray-600 font-medium leading-none">
                      {translate("I agree to receive communications and understand I can unsubscribe at any time.")}
                    </FormLabel>
                    <p className="text-xs text-gray-500">
                      {translate("By submitting, you agree to our")}{" "}
                      <Link to="/terms" className="text-luxury-gold underline hover:text-luxury-gold/80">
                        {translate("Terms of Service")}
                      </Link>{" "}
                      {translate("and")}{" "}
                      <Link to="/privacy-policy" className="text-luxury-gold underline hover:text-luxury-gold/80">
                        {translate("Privacy Policy")}
                      </Link>
                    </p>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-luxury-gold hover:bg-luxury-gold/90"
              disabled={isLoading}
            >
              {isLoading ? translate("Sending...") : translate("Send Message")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;