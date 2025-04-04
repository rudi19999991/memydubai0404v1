
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building, Award, HardHat } from "lucide-react";

const AdditionalFinancing = () => {
  const { translate } = useLanguage();

  // List of major developers
  const developers = [
    "Emaar Properties",
    "Dubai Holding",
    "Nakheel",
    "DAMAC Properties",
    "Meraas",
    "Sobha Realty",
    "Omniyat",
    "Azizi Developments",
    "Danube Properties",
    "Binghatti Developers",
    "RAK Properties",
    "Al Hamra",
    "Marjan"
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <HardHat className="mr-2 h-5 w-5 text-luxury-navy" />
          {translate("Major UAE Developers")}
        </h3>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 mb-4">
            {translate("Dubai and Ras Al Khaimah are home to some of the world's most prestigious property developers, each with their own signature styles and areas of expertise:")}
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">
            {developers.map((developer, index) => (
              <div key={index} className="flex items-center py-1">
                <Building className="h-4 w-4 mr-2 text-luxury-navy" />
                <span className="text-sm">{developer}</span>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            {translate("When purchasing from these developers, you can often access special payment plans and financing options.")}
          </p>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Award className="mr-2 h-5 w-5 text-luxury-navy" />
          {translate("Developer Payment Plans")}
        </h3>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{translate("Post-Handover Payment Plans")}</h4>
            <p className="text-gray-600 text-sm">
              {translate("Many developers offer 3-5 year payment plans after property handover, effectively providing a form of developer financing with typically no interest.")}
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{translate("Construction-Linked Payment Plans")}</h4>
            <p className="text-gray-600 text-sm">
              {translate("For off-plan properties, payments are often tied to construction milestones, letting you spread the cost throughout the build phase.")}
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{translate("DLD Fee Waivers")}</h4>
            <p className="text-gray-600 text-sm">
              {translate("Some developers offer to cover the Dubai Land Department registration fee (4%), effectively reducing your initial costs.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalFinancing;
