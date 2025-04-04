
import React from "react";
import { Building, TrendingUp, CreditCard, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
      <div className="bg-luxury-navy/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        <div className="text-luxury-navy">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const { translate } = useLanguage();
  
  const features = [
    {
      icon: <Building size={32} />,
      title: translate("Premium Properties"),
      description:
        translate("Explore luxury ready properties and off-plan launches in Dubai's most prestigious locations."),
    },
    {
      icon: <TrendingUp size={32} />,
      title: translate("High ROI"),
      description:
        translate("Benefit from tax-free investments with returns of 6-10% annually in Dubai's thriving market."),
    },
    {
      icon: <CreditCard size={32} />,
      title: translate("Crypto Payments"),
      description:
        translate("Seamlessly purchase properties using cryptocurrency with our secure platform."),
    },
    {
      icon: <Briefcase size={32} />,
      title: translate("Company Setup"),
      description:
        translate("Establish your business in UAE's prominent freezones with 100% foreign ownership."),
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {translate("Why Invest in Dubai & RAK")}
          </h2>
          <div className="gold-separator mx-auto" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translate("Dubai and Ras Al Khaimah offer unparalleled investment opportunities with tax-free income, high rental yields, and strong appreciation potential.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
