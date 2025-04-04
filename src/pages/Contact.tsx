import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter, Youtube, MessageCircle, Calendar, Building, InfoIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { translate } = useLanguage();
  const [activeTab, setActiveTab] = useState("consultation");
  
  // Check if there's a hash in the URL to set the initial tab
  React.useEffect(() => {
    if (window.location.hash === "#consultation") {
      setActiveTab("consultation");
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title={translate("Contact Us")}
          subtitle={translate("We're here to help you with your Dubai property investment journey. Get in touch with our experts today.")}
          videoUrl="https://player.vimeo.com/external/477941605.sd.mp4?s=3c99fe958315fa9fb3adac0af48e9bef53fe9905&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://www.gotripair.com/asset/images/main/Banner-7.png"
          showCta={false}
        />
        
        {/* Contact tabs section */}
        <section className="py-16 bg-gray-50" id="contact-section">
          <div className="luxury-container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">{translate("Get in Touch")}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {translate("We're available to answer your questions about property investment, company setup, and living in the UAE.")}
              </p>
              <div className="gold-separator mx-auto mt-4"></div>
            </div>
            
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="consultation" className="text-sm md:text-base">
                    <Calendar className="h-4 w-4 mr-2 hidden md:inline" />
                    {translate("Book Consultation")}
                  </TabsTrigger>
                  <TabsTrigger value="info" className="text-sm md:text-base">
                    <InfoIcon className="h-4 w-4 mr-2 hidden md:inline" />
                    {translate("Information")}
                  </TabsTrigger>
                  <TabsTrigger value="offices" className="text-sm md:text-base">
                    <Building className="h-4 w-4 mr-2 hidden md:inline" />
                    {translate("Our Offices")}
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="consultation" id="consultation">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 text-luxury-gold mb-4">
                        <Calendar className="h-6 w-6" />
                        <h2 className="text-2xl font-bold">{translate("Book a Consultation")}</h2>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {translate("Fill out the form below to schedule a personalized consultation with our property or investment experts.")}
                      </p>
                      
                      <EnhancedContactForm />
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-8">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4">{translate("Why Book a Consultation?")}</h3>
                        <ul className="space-y-4">
                          <li className="flex gap-3">
                            <Users className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold">{translate("Expert Guidance")}</p>
                              <p className="text-gray-600 text-sm">{translate("Our specialists provide personalized advice tailored to your investment goals and requirements.")}</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <MapPin className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold">{translate("Market Insights")}</p>
                              <p className="text-gray-600 text-sm">{translate("Gain access to exclusive market data and trends to make informed investment decisions.")}</p>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold">{translate("Personalized Property Selection")}</p>
                              <p className="text-gray-600 text-sm">{translate("We'll curate a selection of properties that match your specific criteria and investment objectives.")}</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4">{translate("What to Expect")}</h3>
                        <ol className="space-y-4 pl-6 list-decimal">
                          <li className="text-gray-700">{translate("Initial consultation (30-45 minutes)")}</li>
                          <li className="text-gray-700">{translate("Needs assessment and investment goal setting")}</li>
                          <li className="text-gray-700">{translate("Personalized property or service recommendations")}</li>
                          <li className="text-gray-700">{translate("Follow-up with tailored options and information")}</li>
                        </ol>
                        <p className="text-sm text-gray-500 mt-4">{translate("Consultations can be conducted virtually or in-person at one of our offices.")}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="info">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card className="lg:col-span-2">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">{translate("Contact Information")}</h3>
                      
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="bg-gray-100 rounded-full p-3">
                            <MapPin className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{translate("Office Address")}</h4>
                            <p className="text-gray-600">
                              Emirates Towers, Sh Zayed Road,<br />
                              Dubai, United Arab Emirates
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="bg-gray-100 rounded-full p-3">
                            <Phone className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{translate("Call Us")}</h4>
                            <p className="text-gray-600">
                              +49 15560 882539<br />
                              +971 4 434 3423
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <div className="bg-gray-100 rounded-full p-3">
                            <Mail className="h-6 w-6 text-luxury-gold" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{translate("Email Us")}</h4>
                            <p className="text-gray-600">
                              info@memydubai.com<br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">{translate("Connect With Us")}</h3>
                      
                      <div className="grid grid-cols-5 gap-4">
                        
                        <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors flex items-center justify-center">
                          <Instagram className="h-5 w-5" />
                        </a>
                        
                        <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors flex items-center justify-center">
                          <Youtube className="h-5 w-5" />
                        </a>
                        <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-luxury-gold hover:text-white transition-colors flex items-center justify-center">
                          <MessageCircle className="h-5 w-5" />
                        </a>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-semibold mb-2">{translate("Business Hours")}</h4>
                        <div className="text-gray-600 space-y-1">
                          <p>{translate("Daily: 9:00 AM - 10:00 PM")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="offices">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">{translate("Dubai Office")}</h3>
                      <p className="text-gray-600 mb-4">
                        Emirates Towers, Sheikh Zayed Road<br />
                        Dubai, United Arab Emirates
                      </p>
                      <div className="mb-4">
                        <p className="font-semibold">{translate("Contact")}:</p>
                        <p className="text-gray-600">+971 4 123 4567</p>
                      </div>
                      <Button variant="outline" className="w-full" onClick={() => window.open("https://maps.google.com/?q=Emirates+Towers", "_blank")}>
                        {translate("View on Map")}
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-4">{translate("Ras Al Khaimah Office")}</h3>
                      <p className="text-gray-600 mb-4">
                        Al Hamra Village,<br />
                        Ras Al Khaimah, United Arab Emirates
                      </p>
                      <div className="mb-4">
                        <p className="font-semibold">{translate("Contact")}:</p>
                        <p className="text-gray-600">+971 7 123 4567</p>
                      </div>
                      <Button variant="outline" className="w-full" onClick={() => window.open("https://maps.google.com/?q=Al+Hamra+Village+Ras+Al+Khaimah", "_blank")}>
                        {translate("View on Map")}
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="lg:col-span-1">
                    <CardContent className="pt-6 h-full">
                      <h3 className="text-xl font-bold mb-4">{translate("International Desk")}</h3>
                      <p className="text-gray-600 mb-4">
                        {translate("Our international team provides support in multiple languages for clients worldwide.")}
                      </p>
                      <div className="space-y-2 mb-4">
                        <p>
                          <span className="font-semibold">{translate("Languages: English, Arabic, Russian, German, Chinese, French, Portuguese")}</span> 
                        </p>
                        <p>
                          <span className="font-semibold">{translate("Email")}:</span> <a href="mailto:info@memydubai.com" className="text-blue-500 hover:underline">info@memydubai.com</a>

                        </p>
                        <p>
                          <span className="font-semibold">{translate("WhatsApp")}:</span>                               <a href="https://wa.me/4915560882539" className="text-blue-500 hover:underline">+49 15560 882539</a><br />

                        </p>
                      </div>
                      <Button 
                        className="w-full bg-luxury-gold hover:bg-luxury-gold/90 mt-auto" 
                        onClick={() => window.open("https://wa.me/4915560882539", "_blank")}
                      >
                        {translate("Book International Consultation")}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Map */}
                <div className="mt-8 rounded-xl overflow-hidden shadow-xl h-[400px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1867105621236!2d55.13459287596828!3d25.076993077812768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1697106781320!5m2!1sen!2sae" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;