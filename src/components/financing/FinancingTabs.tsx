
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import MortgageOptions from "./MortgageOptions";
import BanksList from "./BanksList";

const FinancingTabs = () => {
  const { translate } = useLanguage();

  // Lists of banks for resident and non-resident sections
  const residentBanks = [
    "Emirates NBD",
    "ADCB",
    "DIB",
    "Mashreq Bank",
    "RAKBANK",
    "HSBC"
  ];
  
  const nonResidentBanks = [
    "Emirates NBD",
    "ENBD - Islamic Banking",
    "Mashreq Bank",
    "ADCB"
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <Tabs defaultValue="resident" className="p-6">
        <TabsList className="grid grid-cols-2 mb-6 w-full">
          <TabsTrigger value="resident" className="text-base">{translate("UAE Residents")}</TabsTrigger>
          <TabsTrigger value="non-resident" className="text-base">{translate("Non-Residents")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="resident" className="space-y-6 pt-2">
          <MortgageOptions type="resident" />
          <BanksList banks={residentBanks} type="resident" />
        </TabsContent>
        
        <TabsContent value="non-resident" className="space-y-6 pt-2">
          <MortgageOptions type="non-resident" />
          <BanksList banks={nonResidentBanks} type="non-resident" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancingTabs;
