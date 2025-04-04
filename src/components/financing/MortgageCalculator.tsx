
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";

const MortgageCalculator = () => {
  const { toast } = useToast();
  const { translate } = useLanguage();
  const { formatPrice } = useCurrency();
  const [propertyPrice, setPropertyPrice] = useState<number>(1500000);
  const [downPayment, setDownPayment] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(20);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const handleCalculate = () => {
    // Calculate loan amount
    const loanAmount = propertyPrice * (1 - downPayment / 100);
    
    // Convert annual interest rate to monthly and decimal
    const monthlyInterestRate = interestRate / 100 / 12;
    
    // Calculate number of payments
    const numberOfPayments = loanTerm * 12;
    
    // Calculate monthly payment using the mortgage formula
    const monthlyPaymentValue = loanAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    setMonthlyPayment(monthlyPaymentValue);
    
    toast({
      title: translate("Mortgage Calculation Complete"),
      description: `${translate("Your estimated monthly payment is")} ${formatPrice(monthlyPaymentValue)}`,
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">{translate("Mortgage Calculator")}</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="property-price" className="block text-sm font-medium text-gray-700">
            {translate("Property Price (AED)")}
          </label>
          <input
            type="number"
            id="property-price"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
            placeholder="1,500,000"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
          />
        </div>
        
        <div>
          <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">
            {translate("Down Payment (%)")}
          </label>
          <input
            type="number"
            id="down-payment"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
            placeholder="25"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            min="0"
            max="100"
          />
        </div>
        
        <div>
          <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700">
            {translate("Interest Rate (%)")}
          </label>
          <input
            type="number"
            id="interest-rate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
            placeholder="4.5"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            min="0"
            step="0.1"
          />
        </div>
        
        <div>
          <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700">
            {translate("Loan Term (Years)")}
          </label>
          <input
            type="number"
            id="loan-term"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-luxury-gold focus:ring-luxury-gold sm:text-sm"
            placeholder="20"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            min="1"
            max="30"
          />
        </div>
        
        <Button className="w-full bg-luxury-navy hover:bg-luxury-navy/90" onClick={handleCalculate}>
          {translate("Calculate Monthly Payment")}
        </Button>
        
        {monthlyPayment !== null && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-medium mb-2">{translate("Estimated Monthly Payment")}</h3>
            <p className="text-2xl font-bold text-luxury-gold">
              {formatPrice(monthlyPayment)}
            </p>
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <p>{translate("Total Loan Amount")}: {formatPrice(propertyPrice * (1 - downPayment / 100))}</p>
              <p>{translate("Total Interest")}: {formatPrice((monthlyPayment * loanTerm * 12) - (propertyPrice * (1 - downPayment / 100)))}</p>
              <p>{translate("Total Payment")}: {formatPrice(monthlyPayment * loanTerm * 12)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
