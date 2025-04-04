
import React from "react";
import { Link } from "react-router-dom";
import { PropertyProps } from "./PropertyCard";

interface RelatedPropertiesProps {
  currentProperty: PropertyProps;
  allProperties: PropertyProps[];
  count?: number;
}

const RelatedProperties: React.FC<RelatedPropertiesProps> = ({
  currentProperty,
  allProperties,
  count = 3,
}) => {
  // Filter properties to show only similar ones (same type or location)
  const relatedProperties = allProperties
    .filter(
      (property) =>
        property.id !== currentProperty.id &&
        (property.type === currentProperty.type ||
          property.location === currentProperty.location)
    )
    .slice(0, count);

  if (relatedProperties.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
      <div className="grid grid-cols-1 gap-4">
        {relatedProperties.map((property) => (
          <Link key={property.id} to={`/properties/${property.id}`}>
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h4 className="font-medium">{property.title}</h4>
                <p className="text-sm text-muted-foreground">{property.location}</p>
                <p className="text-luxury-gold font-medium mt-1">
                  AED {new Intl.NumberFormat("en-US").format(property.price)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProperties;
