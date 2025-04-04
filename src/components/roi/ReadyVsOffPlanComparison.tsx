
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, AlertCircle, Clock, Home, Building, TrendingUp, Banknote } from "lucide-react";

const ReadyVsOffPlanComparison: React.FC = () => {
  const { translate } = useLanguage();
  const { formatPrice } = useCurrency();

  const comparisonData = [
    {
      category: translate("Initial Investment"),
      ready: {
        value: translate("Full payment or mortgage required upfront"),
        icon: <Banknote className="h-5 w-5 text-amber-600" />,
        positive: false
      },
      offplan: {
        value: translate("Lower initial deposit (20-30%)"),
        icon: <Banknote className="h-5 w-5 text-green-600" />,
        positive: true
      }
    },
    {
      category: translate("Payment Plan"),
      ready: {
        value: translate("Single payment or mortgage-based"),
        icon: <Clock className="h-5 w-5 text-amber-600" />,
        positive: false
      },
      offplan: {
        value: translate("Payment spread over construction period (2-5 years)"),
        icon: <Clock className="h-5 w-5 text-green-600" />,
        positive: true
      }
    },
    {
      category: translate("Immediate Income"),
      ready: {
        value: translate("Immediate rental income possible"),
        icon: <CheckCircle2 className="h-5 w-5 text-green-600" />,
        positive: true
      },
      offplan: {
        value: translate("No income until project completion"),
        icon: <XCircle className="h-5 w-5 text-red-500" />,
        positive: false
      }
    },
    {
      category: translate("Property Appreciation"),
      ready: {
        value: translate("Market value growth at standard rates"),
        icon: <TrendingUp className="h-5 w-5 text-amber-600" />,
        positive: false
      },
      offplan: {
        value: translate("Potential for higher appreciation upon completion"),
        icon: <TrendingUp className="h-5 w-5 text-green-600" />,
        positive: true
      }
    },
    {
      category: translate("Risk Level"),
      ready: {
        value: translate("Lower risk - property already exists"),
        icon: <AlertCircle className="h-5 w-5 text-green-600" />,
        positive: true
      },
      offplan: {
        value: translate("Higher risk - potential construction delays"),
        icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        positive: false
      }
    },
    {
      category: translate("Customization"),
      ready: {
        value: translate("Limited modification options"),
        icon: <Home className="h-5 w-5 text-amber-600" />,
        positive: false
      },
      offplan: {
        value: translate("More options for layouts and finishes"),
        icon: <Building className="h-5 w-5 text-green-600" />,
        positive: true
      }
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">{translate("Ready vs. Off-Plan: Investment Comparison")}</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            {translate("Compare the benefits and considerations of investing in ready properties versus off-plan developments")}
          </p>
          <div className="gold-separator mx-auto mt-4" />
        </div>

        <Card className="shadow-md">
          <CardHeader className="bg-luxury-navy text-white">
            <CardTitle className="text-xl">{translate("Investment Strategy Comparison")}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {translate("Category")}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {translate("Ready Property")}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      {translate("Off-Plan Property")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center">
                          {item.ready.icon}
                          <span className="ml-2">{item.ready.value}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center">
                          {item.offplan.icon}
                          <span className="ml-2">{item.offplan.value}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="shadow-md">
            <CardHeader className="bg-luxury-navy text-white">
              <CardTitle className="text-lg flex items-center">
                <Home className="mr-2 h-5 w-5" /> {translate("Ready Property Example")}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">{translate("Purchase Price")}:</p>
                  <p className="text-luxury-gold font-medium">{formatPrice(2000000)}</p>
                </div>
                <div>
                  <p className="font-semibold">{translate("Annual Rental Income")}:</p>
                  <p>{formatPrice(140000)} ({translate("7% yield")})</p>
                </div>
                <div>
                  <p className="font-semibold">{translate("Income Start")}:</p>
                  <p>{translate("Immediate")}</p>
                </div>
                <div>
                  <p className="font-semibold">{translate("5-Year Total Return")}:</p>
                  <p>{translate("Rental Income")}: {formatPrice(700000)}</p>
                  <p>{translate("Estimated Capital Appreciation")}: {formatPrice(500000)} (25%)</p>
                  <p className="font-bold mt-1">{translate("Total Return")}: {formatPrice(1200000)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader className="bg-luxury-navy text-white">
              <CardTitle className="text-lg flex items-center">
                <Building className="mr-2 h-5 w-5" /> {translate("Off-Plan Property Example")}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">{translate("Purchase Price")}:</p>
                  <p className="text-luxury-gold font-medium">{formatPrice(1800000)}</p>
                </div>
                <div>
                  <p className="font-semibold">{translate("Payment Structure")}:</p>
                  <p>{translate("20% Down Payment")}: {formatPrice(360000)}</p>
                  <p>{translate("80% Over 3 Years")}: {formatPrice(1440000)}</p>
                </div>
                <div>
                  <p className="font-semibold">{translate("Income Start")}:</p>
                  <p>{translate("After 3 years (completion)")}</p>
                </div>
                <div>
                  <p className="font-semibold">{translate("5-Year Total Return")}:</p>
                  <p>{translate("Rental Income")} (2 years): {formatPrice(280000)}</p>
                  <p>{translate("Estimated Capital Appreciation")}: {formatPrice(720000)} (40%)</p>
                  <p className="font-bold mt-1">{translate("Total Return")}: {formatPrice(1000000)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReadyVsOffPlanComparison;
