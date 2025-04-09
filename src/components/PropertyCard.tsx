import React from "react";
import { Link } from "react-router-dom";
import { Building, Bed, Bath, MapPin, Home, Percent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";

export interface PropertyProps {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: string;
  roi: number;
  status: "ready" | "offplan";
  city?: string; // Added city property
}

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { formatPrice } = useCurrency();
  const { translate } = useLanguage();

  return (
    <Link to={`/properties/${property.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          className="w-full h-48 object-cover"
          src={property.imageUrl}
          alt={property.title}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{property.title}</h3>
          <div className="flex items-center text-gray-600 mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-luxury-gold">{formatPrice(property.price)}</span>
            </div>
            <div>
              <Badge className={`${property.status === "ready" ? "bg-green-600" : "bg-luxury-gold"}`}>
                {property.status === "ready" ? translate("Ready") : translate("Off-Plan")}
              </Badge>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 text-gray-500">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center">
              <Home className="h-4 w-4 mr-1" />
              <span>{property.area} sqft</span>
            </div>
            <div className="flex items-center">
              <span>{property.roi}%</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
