
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Receipt, Ruler, Shield, Building } from "lucide-react";

const PropertyYearlyCosts = () => {
  const { translate } = useLanguage();
  const { formatPrice } = useCurrency();

  const costsData = [
    {
      icon: Building,
      title: "Service Charges",
      description: "Annual fees charged by building management for maintenance of common areas",
      rate: "15-60 AED per sq ft per year",
      example: 20000,
      notes: "Varies by building quality and amenities"
    },
    {
      icon: Shield,
      title: "Property Insurance",
      description: "Annual building insurance premium",
      rate: "0.1-0.3% of property value",
      example: 3000,
      notes: "Required for all properties"
    },
    {
      icon: Receipt,
      title: "DEWA Fees",
      description: "Dubai Electricity and Water Authority charges",
      rate: "Housing fee (5% of annual rent)",
      example: 5000,
      notes: "Charged monthly through utility bills"
    },
    {
      icon: Ruler,
      title: "Chiller Fees",
      description: "District cooling charges for air conditioning",
      rate: "Variable costs based on consumption",
      example: 12000,
      notes: "Applies to properties with central cooling systems"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">{translate("Property Yearly Costs")}</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            {translate("Understanding the annual costs of property ownership in the UAE is essential for making informed investment decisions.")}
          </p>
          <div className="gold-separator mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {costsData.map((cost, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader className="bg-luxury-navy/5 pb-3">
                <div className="flex items-center">
                  <cost.icon className="h-6 w-6 mr-3 text-luxury-gold" />
                  <CardTitle className="text-xl">{translate(cost.title)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">{translate(cost.description)}</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm">{translate("Rate")}:</p>
                    <p>{translate(cost.rate)}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm">{translate("Example Annual Cost")}:</p>
                    <p className="text-luxury-gold font-medium">{formatPrice(cost.example)}</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-sm">{translate("Notes")}:</p>
                    <p className="text-sm">{translate(cost.notes)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-10">
          <h3 className="text-xl font-bold mb-4">{translate("Additional Considerations")}</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>{translate("Property taxes in Dubai are among the lowest globally")}</li>
            <li>{translate("No annual property tax as commonly found in other countries")}</li>
            <li>{translate("One-time 4% property registration fee paid at purchase")}</li>
            <li>{translate("Rental income is currently tax-free in the UAE")}</li>
            <li>{translate("Budget 1-2% of property value for annual maintenance")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyYearlyCosts;
