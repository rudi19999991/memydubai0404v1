
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import BankLogo from "@/components/BankLogo";

interface BanksListProps {
  banks: string[];
  type: 'resident' | 'non-resident';
}

const BanksList: React.FC<BanksListProps> = ({ banks, type }) => {
  const { translate } = useLanguage();
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-semibold mb-4">
        {type === 'resident' 
          ? translate("Local Banks Offering Resident Mortgages") 
          : translate("Banks Offering Non-Resident Mortgages")}
      </h3>
      <div className={`grid grid-cols-1 ${type === 'resident' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
        {banks.map((bank) => (
          <div key={bank} className="bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center mb-3">
              <BankLogo bank={bank} className="mr-3" />
              <h4 className="font-medium">{bank}</h4>
            </div>
            <p className="text-sm text-gray-600">
              {type === 'resident'
                ? translate(`${bank} offers competitive mortgage rates for UAE residents with flexible terms and conditions.`)
                : translate(`${bank} provides specialized mortgage solutions for international investors.`)}
            </p>
          </div>
        ))}
      </div>
      
      {type === 'non-resident' && (
        <div className="mt-6 bg-luxury-navy/10 p-4 rounded">
          <h4 className="font-semibold mb-2">{translate("Documentation Required for Non-Residents")}</h4>
          <ul className="space-y-1 pl-6 list-disc text-gray-600 text-sm">
            <li>{translate("Passport copies and residence proof in home country")}</li>
            <li>{translate("6 months' bank statements")}</li>
            <li>{translate("Proof of income/employment (min. 2 years in current job)")}</li>
            <li>{translate("Credit report from home country (if available)")}</li>
            <li>{translate("Property details and sale agreement")}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BanksList;
