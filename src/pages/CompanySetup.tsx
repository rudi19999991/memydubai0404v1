
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

const CompanySetup = () => {
  const { translate } = useLanguage();  
// Freezone data
  const freezones = [
    {
      id: "dmcc",
      name: translate("Dubai Multi Commodities Centre (DMCC)"),
      description: translate("World's leading free zone and Dubai government authority for commodities trade and enterprise."),
      image: "https://dynasty-uae.com/wp-content/uploads/2023/10/pic-1.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      benefits: [
        translate("100% foreign ownership"),
        translate("0% corporate and personal income tax"),
        translate("100% repatriation of capital and profits"),
        translate("No currency restrictions"),
        translate("Property ownership options for businesses"),
        translate("Business-friendly environment with premium facilities"),
      ],
      setupFee: translate("Starting from AED 50,000"),
      annualFee: translate("Starting from AED 20,000"),
      visaAllocation: translate("Up to 6 visas for a standard office package"),
    },
    {
      id: "rakez",
      name: "Ras Al Khaimah Economic Zone (RAKEZ)",
      description: translate("A powerhouse business and industrial hub that offers customizable solutions to free zone and non-free zone businesses."),
      image: "https://media.licdn.com/dms/image/v2/D5612AQEWltGytcmOrQ/article-cover_image-shrink_720_1280/B56ZUh_0ILGQAI-/0/1740032132778?e=2147483647&v=beta&t=kpQBrqYRYpOj9LjVMGvXRwDoKeXx6mrSIBGawDoCJf8",
      benefits: [
        translate("100% foreign ownership"),
        translate("0% corporate and personal income tax for 50 years (renewable)"),
        translate("100% repatriation of capital and profits"),
        translate("Lower setup and operational costs compared to Dubai"),
        translate("Flexible visa options"),
        translate("Proximity to Dubai (45 minutes drive)"),
      ],
      setupFee: translate("Starting from AED 15,000"),
      annualFee: translate("Starting from AED 12,000"),
      visaAllocation: translate("Based on the size of your office space")
    },
    {
      id: "ifza",
      name: "International Free Zone Authority (IFZA)",
      description: translate("A dynamic free zone situated in Dubai offering premium company formation solutions."),
      image: "https://chooseuae.com/wp-content/uploads/5-min-138.jpg",
      benefits: [
        translate("100% foreign ownership"),
        translate("0% corporate and personal income tax"),
        translate("100% repatriation of capital and profits"),
        translate("Flexible office solutions"),
        translate("Competitive pricing packages"),
        translate("Strategic location with easy access to major highways")
      ],
      setupFee: translate("Starting from AED 25,000"),
      annualFee: translate("Starting from AED 15,000"),
      visaAllocation: translate("Up to 6 visas for a standard package")
    }
  ];

  // Company setup steps
  const setupSteps = [
    {
      title: translate("Initial Consultation"),
      description: translate("Understand your business needs, determine the appropriate jurisdiction and legal structure.")
    },
    {
      title: translate("Name Reservation"),
      description: translate("Reserve your company name after checking its availability and compliance with local regulations.")
    },
    {
      title: translate("Documentation Preparation"),
      description: translate("Prepare all required documents including application forms, business plan, and shareholder documents.")
    },
    {
      title: translate("License Application"),
      description: translate("Submit your application for business license to the relevant freezone authority.")
    },
    {
      title: translate("Office Space Selection"),
      description: translate("Choose your physical office, virtual office, or flexi-desk depending on your requirements.")
    },
    {
      title: translate("Immigration & Visa Processing"),
      description: translate("Once your license is approved, proceed with visa applications for shareholders and employees.")
    },
    {
      title: translate("Bank Account Setup"),
      description: translate("Open a corporate bank account for your new business entity with our banking partners.")
    },
    {
      title: translate("Tax & Compliance Registration"),
      description: translate("Register for VAT (if applicable) and ensure all regulatory compliance is in place.")
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={translate("UAE Freezone Company Setup")}
          subtitle={translate("Establish your business in the UAE's premier freezones with 100% foreign ownership, zero corporate tax, and full repatriation of profits.")}
              backgroundImage="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          showCta={false}

        />
        
        {/* Overview Section */}
        <section className="section-padding">
          <div className="luxury-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
	      {translate("Why Set Up a Company in UAE?")}              </h2>
              <div className="gold-separator mx-auto" />
              <p className="text-lg mt-6">
              {translate("Setting up a company in UAE's freezones provides investors with an ideal platform for property investment operations with significant advantages including tax benefits, strategic location, and straightforward company formation processes.")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-luxury-gold/30">
                <CardHeader className="bg-luxury-navy text-white">
                  <CardTitle className="text-xl">Tax Advantages</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("0% corporate tax guaranteed for 50 years")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("0% personal income tax")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("0% capital gains tax")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("No withholding taxes")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-luxury-gold/30">
                <CardHeader className="bg-luxury-navy text-white">
                  <CardTitle className="text-xl">{translate("Business Benefits")}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("100% foreign ownership permitted")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("100% repatriation of capital & profits")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("No currency restrictions")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("Streamlined business setup process")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border border-luxury-gold/30">
                <CardHeader className="bg-luxury-navy text-white">
                  <CardTitle className="text-xl">{translate("Property Advantages")}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("Purchase properties in company name")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("Easier asset management for multiple properties")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("Investor and residence visas for directors")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                      <span>{translate("Potential for better financing options")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Freezones Section */}
        <section className="section-padding bg-gray-50">
          <div className="luxury-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Premier UAE Freezones
              </h2>
              <div className="gold-separator mx-auto" />
              <p className="text-lg mt-6">
                             {translate("Explore the leading freezones in the UAE that offer optimal conditions for establishing your property investment business.")}
              </p>
            </div>
            
            <Tabs defaultValue="dmcc" className="w-full">
              <TabsList className="w-full flex justify-center mb-8">
                {freezones.map((freezone) => (
                  <TabsTrigger 
                    key={freezone.id} 
                    value={freezone.id}
                    className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-luxury-gold"
                  >
                    {freezone.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {freezones.map((freezone) => (
                <TabsContent key={freezone.id} value={freezone.id} className="animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div 
                      className="h-80 bg-cover bg-center rounded-lg shadow-lg" 
                      style={{ backgroundImage: `url(${freezone.image})` }}
                    ></div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold">{freezone.name}</h3>
                      <p className="text-gray-700">{freezone.description}</p>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-luxury-navy">Key Benefits</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {freezone.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-luxury-gold mr-2 shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                          <p className="text-sm text-gray-500">{translate("Setup Fee")}</p>
                          <p className="font-semibold">{freezone.setupFee}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{translate("Annual Fee")}</p>
                          <p className="font-semibold">{freezone.annualFee}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500">{translate("Visa Allocation")}</p>
                          <p className="font-semibold">{freezone.visaAllocation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Setup Process Section */}
        <section className="section-padding">
          <div className="luxury-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {translate("Company Setup Process")}
              </h2>
              <div className="gold-separator mx-auto" />
              <p className="text-lg mt-6">
               {translate("Our team of experts will guide you through each step of setting up your company in the UAE, making the process smooth and efficient.")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {setupSteps.slice(0, 4).map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-luxury-gold text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {setupSteps.slice(4).map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-luxury-gold text-white flex items-center justify-center text-xl font-bold">
                    {index + 5}
                  </div>
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(https://t4.ftcdn.net/jpg/05/54/46/89/360_F_554468927_iwU3VYIjsaeopAb0WPYxVf21TloEhTEj.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div className="luxury-container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {translate("Ready to Establish Your UAE Business?")}
              </h2>
              <p className="text-xl mb-8">
                {translate("Our experts will guide you through setting up your company in the most suitable freezone for your property investment needs.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  <Link to="/contact">{translate("Book a Free Consultation")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/roi">{translate("Learn About Investment ROI")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompanySetup;
