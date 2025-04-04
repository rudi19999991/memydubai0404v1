import React from "react";
import { Ship, MapPin, Building, Home, Mountain, Hotel, Trophy, TrendingUp, DollarSign, Users, Briefcase } from "lucide-react";
import LocationCard from "./LocationCard";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const RAKLocations = () => {
  const navigate = useNavigate();
  const { translate } = useLanguage();

  const handleViewDevelopments = (area: string) => {
    navigate(`/area/${area.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="space-y-8">
      <div className="bg-luxury-navy/5 rounded-xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Hotel className="mr-2 h-6 w-6 text-luxury-navy" />
          {translate("Wynn Resort & Casino Development")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <img 
            src="https://preview.thenewsmarket.com/Previews/WYNN/StillAssets/1920x1080/642192.jpg" 
            alt="Wynn Resort Aerial View" 
            className="w-full h-52 object-cover rounded-lg"
          />
          <img 
            src="https://www.mepmiddleeast.com/cloud/2024/11/28/gVYWU2nBdc24MegZaGih-1024x576.webp" 
            alt="Wynn Resort Construction" 
            className="w-full h-52 object-cover rounded-lg"
          />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlq-moNye29vWMnJS6v9olpHcoT01_YDTfQ&sw" 
            alt="Al Marjan Island" 
            className="w-full h-52 object-cover rounded-lg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Trophy className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("World-Class Entertainment")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("Opening in 2026, RAK's $3.9 billion integrated resort will feature luxury hotels, high-end shopping, and the region's first gaming facilities.")}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <TrendingUp className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Investment Potential")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("Expected to attract over 1 million additional annual visitors, driving significant property value appreciation and rental demand.")}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Building className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Infrastructure Growth")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("Major infrastructure developments including expanded transport links and new lifestyle amenities are underway to support the resort.")}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <DollarSign className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Economic Impact")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("The Wynn project is expected to create over 4,000 permanent jobs and contribute significantly to RAK's GDP, creating a ripple effect throughout the economy.")}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Users className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Tourism Boost")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("The integrated resort is projected to increase tourism by 35% within the first year of opening, creating high demand for investment properties and rental accommodations.")}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <Briefcase className="h-6 w-6 text-luxury-gold mb-2" />
            <h3 className="font-semibold mb-2">{translate("Foreign Investment")}</h3>
            <p className="text-gray-600 text-sm">
              {translate("The project has already attracted over $500 million in foreign direct investment to the surrounding areas, with property values expecting to appreciate by 20-30% before completion.")}
            </p>
          </div>
        </div>
        
        <p className="text-gray-600">
          {translate("The Wynn Resort development is transforming RAK into a premier luxury destination, making it an excellent time to invest in the emirate's rapidly growing real estate market. Property investors who enter the market now, before the resort's 2026 opening, are positioned to benefit from significant capital appreciation and high rental returns as tourism and population surge in the coming years.")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Ship}
          title="Al Marjan Island"
          imageUrl="https://www.mepmiddleeast.com/cloud/2024/11/28/gVYWU2nBdc24MegZaGih-1024x576.webp"
          description="A man-made archipelago extending into the clear waters of the Arabian Gulf, offering waterfront living with stunning views."
          propertyTypes="Apartments, Villas, Hotel Residences"
          averagePrice="AED 800 - 1,400/sqft"
          rentalYield="8-10%"
          established="2007"
          hideViewButton={true}
          onViewDevelopments={() => {}}
        />
        
        <LocationCard 
          icon={MapPin}
          title="Al Hamra Village"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHD4WKgPWlyDoUeKkNP8Y4nAtbXNv1Za9ow&s"
          description="An integrated community featuring a championship golf course, marina, shopping mall, and various residential options."
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 750 - 1,200/sqft"
          rentalYield="7-9%"
          established="2003"
          hideViewButton={true}
          onViewDevelopments={() => {}}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Building}
          title="Mina Al Arab"
          imageUrl="https://visitrasalkhaimah.com/wp-content/uploads/2023/05/1-1.jpg"
          description="A beachfront community with a focus on nature and sustainability, featuring protected coastal wetlands, walking paths, and eco-friendly designs."
          propertyTypes="Apartments, Villas, Townhouses"
          averagePrice="AED 800 - 1,100/sqft"
          rentalYield="7-8%"
          established="2008"
          hideViewButton={true}
          onViewDevelopments={() => {}}
        />
        
        <LocationCard 
          icon={Home}
          title="Gateway Residences"
          imageUrl="https://i.ytimg.com/vi/3fOKu3kF0iI/maxresdefault.jpg"
          description="Modern residential towers in the heart of Ras Al Khaimah city, offering convenient urban living with good connectivity to Dubai."
          propertyTypes="Apartments"
          averagePrice="AED 650 - 950/sqft"
          rentalYield="8-10%"
          established="2012"
          hideViewButton={true}
          onViewDevelopments={() => {}}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard 
          icon={Mountain}
          title="Jebel Jais"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9PebPz_2QiXe0MRHOAw1_SIahSvVfIbGMQ&s"
          description="Luxury mountain residences near the UAE's highest peak, offering breathtaking views, cooler temperatures, and adventure activities nearby."
          propertyTypes="Villas, Chalets"
          averagePrice="AED 900 - 1,500/sqft"
          rentalYield="6-8%"
          established="2018"
          hideViewButton={true}
          onViewDevelopments={() => {}}
        />
        
        <LocationCard 
          icon={Hotel}
          title="Wynn Resort Area"
          imageUrl="https://preview.thenewsmarket.com/Previews/WYNN/StillAssets/1920x1080/642192.jpg"
          description="Exclusive properties surrounding the upcoming Wynn integrated resort and casino, expected to become a premier investment area for luxury properties and hotels."
          propertyTypes="Luxury Apartments, Hotel Residences"
          averagePrice="AED 1,200 - 2,000/sqft"
          rentalYield="9-12% (projected)"
          established="2023-2026"
          hideViewButton={true}
          onViewDevelopments={() => {}}
        />
      </div>
    </div>
  );
};

export default RAKLocations;
