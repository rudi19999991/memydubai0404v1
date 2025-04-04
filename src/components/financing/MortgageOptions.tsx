
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building, Landmark, UserPlus } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MortgageOptionsProps {
  type: "resident" | "non-resident";
}

const MortgageOptions: React.FC<MortgageOptionsProps> = ({ type }) => {
  const { translate } = useLanguage();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">{translate("Mortgage Options")}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white p-5 rounded-md">
          <div className="flex items-start">
            <div className="mt-1 mr-4 bg-luxury-navy/10 p-2 rounded-full">
              <Landmark className="w-5 h-5 text-luxury-navy" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                {translate(type === "resident" ? "Loan to Value (LTV)" : "Lower LTV for Non-Residents")}
              </h4>
              <p className="text-gray-600 text-sm">
                {type === "resident" 
                  ? translate("Up to 80% LTV for UAE residents, depending on property value and your financial profile.")
                  : translate("Non-residents can typically secure up to 65-70% LTV financing on Dubai properties.")}
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-white p-5 rounded-md">
          <div className="flex items-start">
            <div className="mt-1 mr-4 bg-luxury-navy/10 p-2 rounded-full">
              <Building className="w-5 h-5 text-luxury-navy" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                {translate("Interest Rates")}
              </h4>
              <p className="text-gray-600 text-sm">
                {type === "resident" 
                  ? translate("Rates from 3.99% for residents, with both fixed and variable options available.")
                  : translate("Interest rates typically start from 4.49% for non-residents, with fixed periods of 1-5 years.")}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">{translate("Loan Requirements")}</h3>
        
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="font-semibold mb-3 flex items-center">
            <UserPlus className="mr-2 h-5 w-5 text-luxury-navy" />
            {translate("Documentation Required")}
          </h4>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>{translate("Valid passport and visa (for UAE residents)")}</li>
            <li>{translate("Bank statements for the last 6 months")}</li>
            <li>{translate("Proof of income or employment verification")}</li>
            <li>{translate("Credit report/history from your home country")}</li>
            {type === "non-resident" && (
              <>
                <li>{translate("Reference letter from your bank")}</li>
                <li>{translate("Investment/asset declarations may be required")}</li>
              </>
            )}
            <li>{translate("Property details and pre-approval from the developer")}</li>
          </ul>
          
          <h4 className="font-semibold mt-6 mb-3">
            {translate("Eligibility Criteria")}
          </h4>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>{translate("Age: 21-65 years (at loan maturity)")}</li>
            <li>{translate("Minimum income: AED 15,000/month (or equivalent)")}</li>
            <li>{translate("Clean credit history")}</li>
            <li>{translate("Property must be approved by the bank")}</li>
            {type === "non-resident" && (
              <li>{translate("Some nationalities may have additional requirements")}</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MortgageOptions;
