
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import MortgageCalculator from "@/components/financing/MortgageCalculator";
import FinancingTabs from "@/components/financing/FinancingTabs";
import AdditionalFinancing from "@/components/financing/AdditionalFinancing";
import PartnersSection from "@/components/partners/PartnersSection";
import CurrencySelector from "@/components/CurrencySelector";

const Financing = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Property Financing Options")}
          subtitle={translate("Explore mortgage and financing options for your Dubai investment")}
          videoUrl="https://player.vimeo.com/external/371865381.sd.mp4?s=5229ddd1a93a2daeb3e1acc49187664b43d0bfd3&profile_id=139&oauth2_token_id=57447761"
          backgroundImage="https://lama.ae/wp-content/uploads/2022/01/banner.webp"
          showCta={false}
        />
        
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="luxury-container">
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-3xl font-bold mb-3">{translate("Financing Your Dubai Property")}</h2>
                <div className="gold-separator" />
              </div>
              <CurrencySelector variant="default" alignment="end" />
            </div>
            
            <p className="text-gray-600 mb-10 max-w-3xl">
              {translate("Discover comprehensive financing solutions for your Dubai property investment. Below are the available options for both UAE residents and international investors.")}
            </p>

            <div className="space-y-10">
              <FinancingTabs />
              <AdditionalFinancing />
            </div>
            
            <div className="mt-16">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-3">{translate("Mortgage Calculator")}</h2>
                <p className="text-gray-600">{translate("Plan your investment with our mortgage calculator")}</p>
                <div className="gold-separator mx-auto mt-4" />
              </div>
              <div className="max-w-2xl mx-auto">
                <MortgageCalculator />
              </div>
            </div>
          </div>
        </section>
        
        <PartnersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Financing;
