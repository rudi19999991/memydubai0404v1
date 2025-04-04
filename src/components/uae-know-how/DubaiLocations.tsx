
import React from "react";
import { Building, Palmtree, Landmark, Home, Globe, Ship, Waves, Mountain } from "lucide-react";
import LocationCard from "./LocationCard";
import { useNavigate } from "react-router-dom";

const DubaiLocations = () => {
  const navigate = useNavigate();

  const handleViewDevelopments = (area: string) => {
    navigate(`/area/${area.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Building}
          title="Dubai Marina"
          imageUrl="https://www.dubai.it/en/wp-content/uploads/sites/142/dubai-marina-hd.jpg"
          description="Dubai Marina is a vibrant waterfront community known for its stunning skyscrapers, luxury apartments, and a lively promenade filled with dining and entertainment options. Residents enjoy panoramic views of the marina and easy access to the beach.​"
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 1,700 - 2,500/sqft"
          rentalYield="6-8%"
          established="2003"
          onViewDevelopments={() => handleViewDevelopments("Dubai Marina")}
        />
        
        <LocationCard 
          icon={Palmtree}
          title="Palm Jumeirah"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdsg5Y6Gl3nvunFZ7DJP3990WckCGtA-4fA&s"
          description="Palm Jumeirah is an iconic man-made island resembling a palm tree, offering exclusive beachfront villas, upscale apartments, and luxury hotels. It provides a prestigious lifestyle with private beaches and high-end amenities.​"
          propertyTypes="Villas, Apartments, Penthouses"
          averagePrice="AED 2,500 - 5,000/sqft"
          rentalYield="4-6%"
          established="2001"
          onViewDevelopments={() => handleViewDevelopments("Palm Jumeirah")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Landmark}
          title="Downtown Dubai"
          imageUrl="https://imagedelivery.net/cyTHrsLOsnLPkuSeNd2_9g/d2fc98c1-f3d0-4b85-5b0a-ad65370b7f00/public"
          description="Downtown Dubai is the city's bustling heart, home to landmarks like the Burj Khalifa and Dubai Mall. It features high-rise luxury apartments and is a hub for business, tourism, and entertainment.​"
          propertyTypes="Apartments, Penthouses"
          averagePrice="AED 2,000 - 3,500/sqft"
          rentalYield="5-7%"
          established="2006"
          onViewDevelopments={() => handleViewDevelopments("Downtown Dubai")}
        />
        
        <LocationCard 
          icon={Home}
          title="Dubai Hills Estate"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTryx7Q3PA0D1RiVs7NW7fSxVXsMqeOMQdOvg&s"
          description="Dubai Hills Estate is a master-planned community offering a mix of villas, townhouses, and apartments set around an 18-hole championship golf course. It boasts lush green spaces, parks, and the Dubai Hills Mall.​"
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 1,800 - 2,800/sqft"
          rentalYield="5-7%"
          established="2014"
          onViewDevelopments={() => handleViewDevelopments("Dubai Hills Estate")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Waves}
          title="Jumeirah Lakes Towers (JLT)"
          imageUrl="https://www.visitdubai.com/-/media/images/leisure/neighbourhood-pages/jumeirah-lakes-towers/media/jlt-1-media.jpg?rev=7e6b21d56ca740619f008c8317cc6329&cx=0.5&cy=0.5&cx=0.5&cy=0.5&cw=940&ch=620"
          description="JLT is a mixed-use development comprising high-rise towers around artificial lakes. It offers a balance between residential and commercial spaces, with a variety of dining and retail options.​"
          propertyTypes="Apartments, Offices"
          averagePrice="AED 1,400 - 2,200/sqft"
          rentalYield="6-8%"
          established="2007"
          onViewDevelopments={() => handleViewDevelopments("Jumeirah Beach Residence")}
        />
        
        <LocationCard 
          icon={Ship}
          title="Emirates Living"
          imageUrl="https://cdn.dxbproperties.ae/media/blog/cover_image/d1r8r-jdvd9.webp?width=1280&height=384&format=webp&quality=90"
          description="Emirates Living is a collection of villa communities, including The Springs, The Meadows, and Emirates Hills. Known for its serene environment, landscaped gardens, and family-friendly atmosphere.​"
          propertyTypes="Villas, Townhouses"
          averagePrice="AED 1,300 - 2,000/sqft"
          rentalYield="5-7%"
          established="2016"
          onViewDevelopments={() => handleViewDevelopments("Dubai Creek Harbour")}
        />
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Waves}
          title="Arabian Ranches"
          imageUrl="https://cdn.expatwoman.com/s3fs-public/ranchesresized2.jpg"
          description="Arabian Ranches is a premium villa community offering a suburban lifestyle with spacious homes, parks, and a golf course. It's popular among families seeking tranquility away from the city's hustle.​"
          propertyTypes="Villas, Townhouses"
          averagePrice="AED 1,900 - 2,400/sqft"
          rentalYield="6-8%"
          established="2007"
          onViewDevelopments={() => handleViewDevelopments("Jumeirah Beach Residence")}
        />
        
        <LocationCard 
          icon={Ship}
          title="Al Barari"
          imageUrl="https://ggfx-providentestate.s3.eu-west-2.amazonaws.com/i/Discover_Al_Barari_Exclusive_Ready_to_Move_In_Properties_for_Luxury_Buyers_edcaad36e6.jpg"
          description="Al Barari is a secluded, eco-friendly community known for its luxurious villas set amidst lush greenery, themed gardens, and waterways. It emphasizes sustainability and wellness.​"
          propertyTypes="Apartments, Villas, Townhouses"
          averagePrice="AED 1,850 - 3,800/sqft"
          rentalYield="5-7%"
          established="2016"
          onViewDevelopments={() => handleViewDevelopments("Dubai Creek Harbour")}
        />
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LocationCard 
          icon={Waves}
          title="Palm Jebel Ali"
          imageUrl="https://worldestate.homes/wp-content/uploads/2024/06/snimok-ekrana-2024-06-26-163906-min.png.webp"
          description="Palm Jebel Ali is a planned artificial archipelago intended to expand Dubai's coastline with luxury residences and resorts. Development progress has been intermittent, and current data is limited.​"
          propertyTypes="Apartments,Townhouses, Villas"
          averagePrice="AED 2,500 - 4,400/sqft"
          rentalYield="TBA%"
          established="2028"
          onViewDevelopments={() => handleViewDevelopments("Jumeirah Beach Residence")}
        />
        
        <LocationCard 
          icon={Ship}
          title="Dubai Creek Harbour"
          imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ca/d2/c2/exterior.jpg?w=500&h=-1&s=1"
          description="Dubai Creek Harbour is a waterfront community blending modern living with cultural heritage. It offers residential towers with views of the creek and skyline, aiming to be a future tourism hub.​"
          propertyTypes="Apartments, Penthouses, Townhouses"
          averagePrice="AED 1,300 - 2,000/sqft"
          rentalYield="5-7%"
          established="2016"
          onViewDevelopments={() => handleViewDevelopments("Dubai Creek Harbour")}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LocationCard 
          icon={Building}
          title="Business Bay"
          imageUrl="https://www.visitdubai.com/-/media/images/leisure/detail-pages/explore-dubai/1-3-dubai-neighbourhoods-t34/dubai-neighborhood-business-bay.jpg"
          description="Business Bay is a central business district featuring a mix of residential and commercial properties. Its strategic location near Downtown makes it a sought-after area for professionals.​"
          propertyTypes="Apartments, Office Spaces"
          averagePrice="AED 2,000 - 3,000/sqft"
          rentalYield="6-8%"
          established="2005"
          onViewDevelopments={() => handleViewDevelopments("Business Bay")}
        />
        
        <LocationCard 
          icon={Mountain}
          title="Dubai Land"
          imageUrl="https://topaddress.ae/wp-content/uploads/2022/01/dubailand-district.webp"
          description="Dubailand is a massive development encompassing various residential communities, entertainment zones, and theme parks. It offers diverse housing options catering to different budgets.​"
          propertyTypes="Villas, Townhouses, Apartments"
          averagePrice="AED 1,100 - 1,900/sqft"
          rentalYield="7-9%"
          established="2005"
          onViewDevelopments={() => handleViewDevelopments("Dubai Land")}
        />
      </div>
    </div>
  );
};

export default DubaiLocations;
