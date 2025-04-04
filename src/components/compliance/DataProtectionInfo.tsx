import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Info, Lock, Eye } from "lucide-react";

const DataProtectionInfo = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <Shield className="h-5 w-5 text-luxury-gold mr-2" />
        <h3 className="text-lg font-bold">{translate("GDPR Compliance")}</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        {translate("We collect and process your personal data in accordance with applicable data protection laws, including GDPR and CCPA.")}
      </p>
      
      <div className="space-y-3">
        <div className="flex">
          <Info className="h-4 w-4 text-luxury-gold mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium">{translate("Your Rights")}</h4>
            <p className="text-xs text-gray-600">
              {translate("You have the right to access, rectify, delete, and port your personal data. You can also object to or restrict its processing.")}
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Lock className="h-4 w-4 text-luxury-gold mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium">{translate("Data Storage")}</h4>
            <p className="text-xs text-gray-600">
              {translate("Your data is securely stored and will be retained only for as long as necessary for the purposes it was collected.")}
            </p>
          </div>
        </div>
        
        <div className="flex">
          <Eye className="h-4 w-4 text-luxury-gold mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-medium">{translate("Your data, your control")}</h4>
            <p className="text-xs text-gray-600">
              {translate("To exercise your rights or for any questions regarding your personal data, please contact our Data Protection Officer at privacy@memydubai.com")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProtectionInfo;