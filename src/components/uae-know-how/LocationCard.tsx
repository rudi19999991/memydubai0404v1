import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocationCardProps {
  icon: LucideIcon;
  title: string;
  imageUrl: string;
  description: string;
  propertyTypes: string;
  averagePrice: string;
  rentalYield: string;
  established: string;
  hideViewButton?: boolean;
  onViewDevelopments: () => void;
}

const LocationCard = ({
  icon: Icon,
  title,
  imageUrl,
  description,
  propertyTypes,
  averagePrice,
  rentalYield,
  established,
  hideViewButton = false,
  onViewDevelopments,
}: LocationCardProps) => {
  const { translate } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="flex items-center mb-1">
              <Icon className="h-5 w-5 mr-2 text-luxury-gold" />
              <h3 className="text-xl font-bold">{translate(title)}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-gray-600 mb-4 line-clamp-30">
          {translate(description)}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">{translate("Property Types")}</p>
            <p className="font-medium">{translate(propertyTypes)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{translate("Average Price")}</p>
            <p className="font-medium">{averagePrice}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{translate("Rental Yield")}</p>
            <p className="font-medium text-green-600">{rentalYield}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{translate("Established")}</p>
            <p className="font-medium">{established}</p>
          </div>
        </div>

        {!hideViewButton && (
          <Button
            onClick={onViewDevelopments}
            className="w-full bg-luxury-navy hover:bg-luxury-navy/90"
          >
            {translate("View Developments")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default LocationCard;