
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AreaDevelopments from "@/components/uae-know-how/AreaDevelopments";
import { useLanguage } from "@/contexts/LanguageContext";
import PropertyYearlyCosts from "@/components/uae-know-how/PropertyYearlyCosts";

const AreaDetail = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <AreaDevelopments />
        <PropertyYearlyCosts />
      </main>
      
      <Footer />
    </div>
  );
};

export default AreaDetail;
