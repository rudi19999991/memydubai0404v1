import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import RoiCalculator from "@/components/RoiCalculator";
import PropertyYearlyCosts from "@/components/roi/PropertyYearlyCosts";
import ReadyVsOffPlanComparison from "@/components/roi/ReadyVsOffPlanComparison";
import DubaiMap from "@/components/roi/DubaiMap";

const ROI = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("ROI & Investment")}
          subtitle={translate("Calculate your investment returns in Dubai & RAK real estate")}
          backgroundImage="https://www.sterlinglexicon.com/hubfs/dubai%20skyline%20banner%202.jpg"
          videoUrl="https://player.vimeo.com/external/370467553.sd.mp4?s=41e133c5d8c62dcbea38c34da6255e8d202ba193&profile_id=139&oauth2_token_id=57447761"
          showCta={false}
        />
        
        <ReadyVsOffPlanComparison />
        
        <PropertyYearlyCosts />
        
        <section className="section-padding bg-white">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{translate("Calculate Your Investment Returns")}</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                {translate("Use our advanced calculator to analyze potential returns on your Dubai & RAK property investment")}
              </p>
              <div className="gold-separator mx-auto mt-4" />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <RoiCalculator />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ROI;
