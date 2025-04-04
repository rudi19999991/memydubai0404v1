
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import PropertyCard, { PropertyProps } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import CurrencySelector from "@/components/CurrencySelector";
import EmailSignupPopup from "@/components/EmailSignupPopup";

const Index = () => {
  const { translate } = useLanguage();
  
  // Sample featured properties
  const featuredProperties: PropertyProps[] = [
    {
      id: "prop1",
      title: "Luxury Apartment in Dubai Marina",
      location: "Dubai Marina",
      price: 3300000,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 3,
      area: 1372,
      roi: 7.1,
      imageUrl: "https://pf-graph-images-production.s3.ap-southeast-1.amazonaws.com/ae/building/3051/45900f10d518f2d85e6167a3bfee2d6b/watermark.jpeg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop2",
      title: "Beachfront Villa on Palm Jumeirah",
      location: "Palm Jumeirah",
      price: 89000000,
      type: "Villa",
      bedrooms: 6,
      bathrooms: 7,
      area: 14690,
      roi: 5.8,
      imageUrl: "https://www.propertyfinder.ae/property/2323b4fe64df93fc57750fed7894c6fe/1312/894/MODE/530ca8/13629340-ae5fco.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop3",
      title: "Luxury Apartment next to Burj al Arab",
      location: "Umm Suqueim",
      price: 10800000,
      type: "Apartment",
      bedrooms: 4,
      bathrooms: 6,
      area: 3281,
      roi: 8.1,
      imageUrl: "https://www.propertyfinder.ae/property/727c1e06e0eca1d61be5252ae461efab/1312/894/MODE/60d370/13879752-40e65o.webp?ctr=ae?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "offplan",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <EmailSignupPopup />
      
      <main className="flex-grow">
        <HeroSection
          title= {translate("Luxury Property Investment in Dubai & Ras Al Khaimah")}
          subtitle= {translate("Secure your future with high-ROI properties and tax-free returns in the UAE's most prestigious locations.")}
          backgroundImage="https://assets.travelcenter.uk/images/flight-destinations/main-slider/Dubai/dubai-hero-des-2.webp"
        />

        <FeatureSection />
        
        {/* Featured Properties */}
        <section className="section-padding">
          <div className="luxury-container">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">{translate("Featured Properties")}</h2>
                <div className="gold-separator" />
              </div>
              <div className="flex items-center gap-4">
                <CurrencySelector />
                <Button asChild variant="ghost" className="hidden md:flex">
                  <Link to="/properties">
                    {translate("View All Properties")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-luxury-navy hover:bg-luxury-navy/90">
                <Link to="/properties">
                  {translate("Explore All Properties")} <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Investment Benefits */}
        <section className="section-padding bg-luxury-navy text-white">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {translate("Investment Benefits")}
              </h2>
              <div className="gold-separator mx-auto" />
              <p className="text-gray-300 max-w-3xl mx-auto">
                {translate("Dubai and Ras Al Khaimah offer exceptional advantages for property investors looking for strong returns and capital growth.")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{translate("Tax-Free Investment")}</h3>
                <p className="text-gray-300">
                  {translate("Enjoy 0% income tax, 0% capital gains tax, and 0% property tax on your UAE investments.")}
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{translate("High Rental Yields")}</h3>
                <p className="text-gray-300">
                  {translate("Dubai properties offer rental yields between 6-10%, significantly higher than global averages.")}
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{translate("Residency Visas")}</h3>
                <p className="text-gray-300">
                  {translate("Property investment can qualify you for UAE residence visas, offering global mobility.")}
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{translate("Secure Investment")}</h3>
                <p className="text-gray-300">
                  {translate("UAE's stable political environment and strong regulatory framework protect investor interests.")}
                </p>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{translate("Crypto-Friendly")}</h3>
                <p className="text-gray-300">
                  {translate("Purchase properties using cryptocurrencies like Bitcoin and Ethereum with ease.")}
                </p>
                <div className="mt-4">
                  <Button variant="link" className="text-luxury-gold p-0 h-auto" asChild>
                    <Link to="/crypto-buying">
                      {translate("Learn about crypto property buying")} <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-luxury-navy/40 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{translate("Strong Appreciation")}</h3>
                <p className="text-gray-300">
                  {translate("Dubai's property market consistently shows strong capital appreciation over time.")}
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                <Link to="/roi">
                  {translate("Learn More About ROI")} <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1609520505218-7421df70787f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.2,
            }}
          />
          <div className="luxury-container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {translate("Ready to Start Your Investment Journey?")}
              </h2>
              <p className="text-xl mb-8">
                {translate("Contact our experts for a personalized consultation on Dubai and RAK property investments.")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  <Link to="/contact">{translate("Book a Consultation")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/properties">{translate("Browse Properties")}</Link>
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

export default Index;
