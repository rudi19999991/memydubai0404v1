
import React from 'react';
import { useCurrency, currencies, CurrencyCode } from '@/contexts/CurrencyContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CreditCard, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CurrencySelectorProps {
  variant?: 'default' | 'small';
  alignment?: 'start' | 'end';
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ 
  variant = 'default',
  alignment = 'end'
}) => {
  const { currentCurrency, setCurrency } = useCurrency();
  const { translate } = useLanguage();

  const handleCurrencyChange = (code: CurrencyCode) => {
    setCurrency(code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size={variant === 'small' ? 'sm' : 'default'}
          className="flex items-center"
        >
          <CreditCard className="h-4 w-4 mr-2" />
          {currentCurrency.code}
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={alignment} className="w-40">
        {currencies.map((currency) => (
          <DropdownMenuItem
            key={currency.code}
            onClick={() => handleCurrencyChange(currency.code)}
            className={currentCurrency.code === currency.code ? "bg-muted" : ""}
          >
            <span className="mr-2">{currency.symbol}</span>
            <span className="flex-1">{currency.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencySelector;
