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
      const token = await window.grecaptcha.execute("6Lf5WIcrAAAAAOKSp3kPSYojFFPD47mZ757b4nZr", { action: "submit" });

      const response = await fetch("https://formspree.io/f/xwpqpqjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          "g-recaptcha-response": token,
        }),
      });

      if (response.ok) {
        toast({
          title: translate("Message Sent!"),
          description: translate("Thank you for your inquiry. We'll get back to you soon."),
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
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
              <p className="text-gray-600">contact@memydubai.com</p>
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

        <div className="mt-6">
          <DataProtectionInfo />
        </div>
      </div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Form fields remain unchanged */}
            {/* ... */}
            <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold/90" disabled={isLoading}>
              {isLoading ? translate("Sending...") : translate("Send Message")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;