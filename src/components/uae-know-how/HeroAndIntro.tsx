
import React from "react";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroAndIntro = () => {
  const { translate } = useLanguage();

  return (
    <>
      <HeroSection
        title={translate("UAE Know How")}
        subtitle={translate("Discover the premier freehold areas and communities in Dubai and Ras Al Khaimah")}
        backgroundImage="https://prca.mena.global/wp-content/uploads/2022/06/AIP-banner-2-_-dubai-skyline.jpg"
        showCta={false}
      />
      
      <section className="section-padding bg-white">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-3">{translate("Understanding Freehold Property in the UAE")}</h2>
            <div className="gold-separator mx-auto mb-6" />
            <p className="text-gray-600">
              {translate("Since 2002, the UAE has allowed foreign nationals to purchase property on a freehold basis in designated areas. This means foreign investors can buy, sell, lease, or rent their properties without restriction, opening the door to one of the world's most dynamic real estate markets.")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAndIntro;
