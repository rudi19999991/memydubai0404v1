
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FactsAndFigures = () => {
  const { translate } = useLanguage();
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{translate("UAE Real Estate Facts & Figures")}</h2>
          <div className="gold-separator mx-auto mb-6" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translate("The UAE property market continues to demonstrate remarkable resilience and growth, making it a preferred destination for global investors.")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
            <h3 className="text-xl font-bold mb-3">{translate("Market Size")}</h3>
            <p className="text-gray-600 mb-4">
              {translate("The UAE real estate market was valued at approximately AED 240 billion in 2022, with Dubai accounting for over 60% of transactions.")}
            </p>
            <p className="text-sm text-gray-500">
              {translate("Source: Dubai Land Department, 2023")}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
            <h3 className="text-xl font-bold mb-3">{translate("Foreign Investment")}</h3>
            <p className="text-gray-600 mb-4">
              {translate("International investors from over 150 countries purchased property in Dubai in 2022, with Indians, British, and Chinese forming the top three demographics.")}
            </p>
            <p className="text-sm text-gray-500">
              {translate("Source: Dubai Land Department, 2023")}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
            <h3 className="text-xl font-bold mb-3">{translate("Capital Appreciation")}</h3>
            <p className="text-gray-600 mb-4">
              {translate("Average property values in Dubai have increased by 17% in 2022, with premium areas like Palm Jumeirah seeing up to 25% growth.")}
            </p>
            <p className="text-sm text-gray-500">
              {translate("Source: Property Monitor, 2023")}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
            <h3 className="text-xl font-bold mb-3">{translate("Rental Yields")}</h3>
            <p className="text-gray-600 mb-4">
              {translate("Dubai and Ras Al Khaimah offer some of the world's highest rental yields, averaging 6-8% annually, compared to 3-4% in most global cities.")}
            </p>
            <p className="text-sm text-gray-500">
              {translate("Source: Global Property Guide, 2023")}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
            <h3 className="text-xl font-bold mb-3">{translate("New Developments")}</h3>
            <p className="text-gray-600 mb-4">
              {translate("Over 50,000 new residential units are expected to be delivered in Dubai between 2023-2025, with significant development also underway in Ras Al Khaimah.")}
            </p>
            <p className="text-sm text-gray-500">
              {translate("Source: JLL MENA, 2023")}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-luxury-navy">
            <h3 className="text-xl font-bold mb-3">{translate("Tax Benefits")}</h3>
            <p className="text-gray-600 mb-4">
              {translate("The UAE offers 0% income tax, 0% capital gains tax, and minimal property registration fees (4% in Dubai, 2% in Ras Al Khaimah).")}
            </p>
            <p className="text-sm text-gray-500">
              {translate("Source: UAE Ministry of Finance, 2023")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsAndFigures;
