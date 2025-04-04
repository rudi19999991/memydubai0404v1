
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";

const RoiCalculator: React.FC = () => {
  const { translate } = useLanguage();
  const { formatPrice } = useCurrency();
  const [propertyPrice, setPropertyPrice] = useState<number>(1000000);
  const [rentalIncome, setRentalIncome] = useState<number>(80000);
  const [expenses, setExpenses] = useState<number>(10000);
  const [yearlyServiceCharge, setYearlyServiceCharge] = useState<number>(15000);
  const [insurance, setInsurance] = useState<number>(3000);
  const [results, setResults] = useState({
    annualReturn: 0,
    monthlyReturn: 0,
    roi: 0,
  });

  const calculateRoi = () => {
    const totalExpenses = expenses + yearlyServiceCharge + insurance;
    const netIncome = rentalIncome - totalExpenses;
    const roi = (netIncome / propertyPrice) * 100;
    
    setResults({
      annualReturn: netIncome,
      monthlyReturn: netIncome / 12,
      roi: roi,
    });
  };

  useEffect(() => {
    calculateRoi();
  }, [propertyPrice, rentalIncome, expenses, yearlyServiceCharge, insurance]);

  return (
    <Card className="w-full">
      <CardHeader className="bg-luxury-navy text-white rounded-t-lg">
        <CardTitle className="flex items-center text-2xl">
          <Calculator className="mr-2 h-6 w-6" /> {translate("ROI Calculator")}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="property-price">{translate("Property Price (AED)")}</Label>
            <Input
              id="property-price"
              type="number"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="rental-income">{translate("Annual Rental Income (AED)")}</Label>
            <Input
              id="rental-income"
              type="number"
              value={rentalIncome}
              onChange={(e) => setRentalIncome(Number(e.target.value))}
              className="mt-1"
            />
          </div>

          <div className="pt-2 border-t">
            <h4 className="text-base font-semibold mb-3">{translate("Annual Expenses")}</h4>
            
            <div className="space-y-3">
              <div>
                <Label htmlFor="yearly-service-charge">{translate("Yearly Service Charge (AED)")}</Label>
                <Input
                  id="yearly-service-charge"
                  type="number"
                  value={yearlyServiceCharge}
                  onChange={(e) => setYearlyServiceCharge(Number(e.target.value))}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {translate("Annual maintenance fee charged by the building management")}
                </p>
              </div>
              
              <div>
                <Label htmlFor="insurance">{translate("Property Insurance (AED)")}</Label>
                <Input
                  id="insurance"
                  type="number"
                  value={insurance}
                  onChange={(e) => setInsurance(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="expenses">{translate("Other Expenses (AED)")}</Label>
                <Input
                  id="expenses"
                  type="number"
                  value={expenses}
                  onChange={(e) => setExpenses(Number(e.target.value))}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {translate("Include management fees, maintenance costs, etc.")}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-luxury-gold" /> {translate("Investment Returns")}
            </h4>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">{translate("Annual Return")}</p>
                <p className="text-xl font-bold text-luxury-navy">
                  {formatPrice(results.annualReturn)}
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">{translate("Monthly Return")}</p>
                <p className="text-xl font-bold text-luxury-navy">
                  {formatPrice(Math.round(results.monthlyReturn))}
                </p>
              </div>
              
              <div className="bg-luxury-gold/10 p-4 rounded-lg text-center">
                <p className="text-sm text-luxury-gold/80 mb-1">{translate("Total ROI")}</p>
                <p className="text-xl font-bold text-luxury-gold">
                  {results.roi.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>

          <Button 
            onClick={calculateRoi} 
            className="w-full bg-luxury-navy hover:bg-luxury-navy/90 mt-2"
          >
            {translate("Recalculate ROI")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoiCalculator;
