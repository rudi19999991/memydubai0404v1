
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define supported currencies
export type CurrencyCode = 'AED' | 'USD' | 'EUR' | 'RUB' | 'CNY' | 'BTC' | 'ETH';

interface CurrencyData {
  code: CurrencyCode;
  name: string;
  symbol: string;
  rate: number; // Conversion rate from AED
  decimals: number;
}

export const currencies: CurrencyData[] = [
  { code: 'AED', name: 'UAE Dirham', symbol: 'AED', rate: 1, decimals: 0 },
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 0.27, decimals: 0 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.25, decimals: 0 },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', rate: 25.07, decimals: 0 },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rate: 1.97, decimals: 0 },
  { code: 'BTC', name: 'Bitcoin', symbol: '₿', rate: 0.0000054, decimals: 6 },
  { code: 'ETH', name: 'Ethereum', symbol: 'Ξ', rate: 0.000083, decimals: 5 },
];

interface CurrencyContextType {
  currentCurrency: CurrencyData;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (priceInAED: number) => string;
  convertPrice: (priceInAED: number) => number;
}

export const CurrencyContext = createContext<CurrencyContextType>({
  currentCurrency: currencies[0],
  setCurrency: () => {},
  formatPrice: () => '',
  convertPrice: () => 0,
});

export const CurrencyProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyData>(currencies[0]);

  // Load preferred currency from localStorage on mount
  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferredCurrency');
    if (savedCurrency) {
      const matchedCurrency = currencies.find(c => c.code === savedCurrency);
      if (matchedCurrency) {
        setCurrentCurrency(matchedCurrency);
      }
    }
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    const currency = currencies.find(c => c.code === code);
    if (currency) {
      setCurrentCurrency(currency);
      localStorage.setItem('preferredCurrency', code);
    }
  };

  // Convert price from AED to current currency
  const convertPrice = (priceInAED: number): number => {
    return priceInAED * currentCurrency.rate;
  };

  // Format price in current currency with proper formatting
  const formatPrice = (priceInAED: number): string => {
    const convertedPrice = convertPrice(priceInAED);
    
    // Special formatting for crypto currencies
    if (currentCurrency.code === 'BTC' || currentCurrency.code === 'ETH') {
      return `${currentCurrency.symbol} ${convertedPrice.toFixed(currentCurrency.decimals)}`;
    }
    
    // Format other currencies with locale-specific formatting
    return `${currentCurrency.symbol} ${convertedPrice.toLocaleString('en-US', {
      maximumFractionDigits: currentCurrency.decimals,
      minimumFractionDigits: 0,
    })}`;
  };

  return (
    <CurrencyContext.Provider value={{ 
      currentCurrency, 
      setCurrency, 
      formatPrice,
      convertPrice
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook for using currency context
export const useCurrency = () => useContext(CurrencyContext);
