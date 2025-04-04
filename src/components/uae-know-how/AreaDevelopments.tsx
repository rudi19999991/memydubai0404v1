
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Building, HomeIcon, Hotel, MapPin } from "lucide-react";

// Development data by area
const developmentData: Record<string, any> = {
  "dubai-marina": {
    title: "Dubai Marina",
    description: "Dubai Marina is an affluent residential neighborhood known for its skyscrapers and marina lifestyle.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Marina Towers",
        type: "Residential",
        developer: "Emaar Properties",
        icon: Building,
        description: "Luxury high-rise residential towers with marina views",
        units: "350+ apartments",
        priceRange: "AED 1.2M - 7M",
        completionDate: "2010",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565040850.jpg?k=7d778c20c727d390b5c744b63b35b758b29d4e395f8ba4950e0c9b0972f66065&o=&hp=1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"

      },
      {
        name: "Marina Promenade",
        type: "Mixed-use",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Waterfront apartments with retail spaces on the ground floor",
        units: "200+ apartments",
        priceRange: "AED 1.5M - 5M",
        completionDate: "2008",
        image: "https://cdn.prod.website-files.com/64bfc7ab1406f7a5ffd3e1ba/658934d548931d72c99ae666_655386cde7fecc9a14a7f943_the-marina-promenade%2520(3).webp?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Marina Heights",
        type: "Residential",
        developer: "DAMAC Properties",
        icon: Building,
        description: "Premium residences with full marina views",
        units: "280+ apartments",
        priceRange: "AED 1.3M - 6M",
        completionDate: "2009",
	image: "https://cdn.prod.website-files.com/64bfc7ab1406f7a5ffd3e1ba/658934dbdd7c62ee2c04605e_654cd14b192ec86d6e3cbfb9_marina-heights-04.webp?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Marina Quays",
        type: "Residential",
        developer: "Dubai Properties",
        icon: Building,
        description: "Waterfront apartments with direct marina access",
        units: "150+ apartments",
        priceRange: "AED 1.7M - 8M",
        completionDate: "2011",
	image: "https://marinadubai.ae/storage/uploads/complexes/22/file/1629118642_arhitektura7_auto_x2.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "palm-jumeirah": {
    title: "Palm Jumeirah",
    description: "Palm Jumeirah is a man-made island shaped like a palm tree and known for its luxury resorts and residences.",
    image: "https://www.idoxgroup.com/wp-content/uploads/Atlantis-the-Palm-banner-image.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Signature Villas",
        type: "Residential",
        developer: "Nakheel",
        icon: HomeIcon,
        description: "Beachfront signature villas with private beach access",
        units: "100+ villas",
        priceRange: "AED 15M - 70M",
        completionDate: "2007",
	image: "https://homes4life.ae/wp-content/uploads/338094b3f908fabee1cb8453422c7a62.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Marina Residences",
        type: "Residential",
        developer: "Nakheel",
        icon: Building,
        description: "Luxury apartments overlooking the marina",
        units: "200+ apartments",
        priceRange: "AED 3M - 12M",
        completionDate: "2009",
	image: "https://www.nakheelcommunities.com/images/nakheelcommunitieslibraries/communities/marina-residences.jpg?sfvrsn=d77479_1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Atlantis Residences",
        type: "Hotel & Residential",
        developer: "Kerzner International",
        icon: Hotel,
        description: "Premium branded residences attached to the Atlantis Hotel",
        units: "180+ apartments",
        priceRange: "AED 5M - 25M",
        completionDate: "2016",
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9AbBA40k502xpy9W9lT2YMd-8HTa4-rBLw&s?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "FIVE Palm Jumeirah",
        type: "Hotel & Residential",
        developer: "FIVE Holdings",
        icon: Hotel,
        description: "Luxury hotel with residential units",
        units: "250+ units",
        priceRange: "AED 2.5M - 15M",
        completionDate: "2017",
	image: "https://images.trvl-media.com/lodging/91000000/90960000/90959700/90959684/850f4eb9.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "downtown-dubai": {
    title: "Downtown Dubai",
    description: "Downtown Dubai is a central district known for the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
    image: "https://www.allsoppandallsopp.com/_next/image?url=https%3A%2F%2Fstrapiallsopp.s3.eu-west-1.amazonaws.com%2Fdowntown_d2982944b4.jpeg&w=3840&q=75",
    developments: [
      {
        name: "Burj Khalifa",
        type: "Mixed-use",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic skyscraper with residential, commercial, and hotel units",
        units: "900+ apartments",
        priceRange: "AED 2M - 30M",
        completionDate: "2010",
	image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/53/cf/88.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "The Address Downtown",
        type: "Hotel & Residential",
        developer: "Emaar Properties",
        icon: Hotel,
        description: "Luxury hotel and serviced residences in prime Downtown location",
        units: "200+ units",
        priceRange: "AED 2.5M - 15M",
        completionDate: "2008",
	image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/181840500.jpg?k=21c1941c4e9dbb6b721223b98ec7ae0359f6feab4937b892498fcdda295d05df&o=&hp=1?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Boulevard Point",
        type: "Residential",
        developer: "Emaar Properties",
        icon: Building,
        description: "Modern residential tower overlooking Dubai Fountain",
        units: "300+ apartments",
        priceRange: "AED 1.8M - 10M",
        completionDate: "2015",
	image: "https://res.cloudinary.com/keysplease/image/upload/c_fill,h_960,w_1440/v1/keyspleaseae/oihgc4qkzzdgrtfeio6c?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Opera Grand",
        type: "Residential",
        developer: "Emaar Properties",
        icon: Building,
        description: "Luxury residences next to Dubai Opera",
        units: "250+ apartments",
        priceRange: "AED 2.2M - 12M",
        completionDate: "2019",
	image: "https://i.1.creatium.io/64/51/64/6af1361e6db4ef15d98202f7cc174ff69f/0.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
"dubai-hills-estate": {
    title: "Dubai Hills Estate",
    description: "Downtown Dubai is a central district known for the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
    image: "https://d33om22pidobo4.cloudfront.net/blogs/covers/ezgif-5-975f4cc762-1jpg-164e4989-d9e0-498e-abe2-eb51435739e2jpgd1500x999-y-fwebpjpegd1500x999-y-fwebp.jpeg?d=1500x999&f=webp&w=3840&q=75",
    developments: [
      {
        name: "Villas",
        type: "Residencial",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic, community with world class facilities. Shopping, Sport and entertainment all in one community.",
        units: "200+ Villas",
        priceRange: "AED 5M - 100M",
        completionDate: "2010",
	image: "https://blog.sothebysrealty.ae/hs-fs/hubfs/kqx-jpg.jpeg?width=1600&height=1067&name=kqx-jpg.jpeg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
{
        name: "Apartments",
        type: "Residencial",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic, community with world class facilities. Shopping, Sport and entertainment all in one community.",
        units: "200+ Villas",
        priceRange: "AED 5M - 100M",
        completionDate: "2010",
	image: "https://blog.sothebysrealty.ae/hs-fs/hubfs/kqx-jpg.jpeg?width=1600&height=1067&name=kqx-jpg.jpeg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
"arabian-ranches": {
    title: "Arabian Ranches",
    description: "Downtown Dubai is a central district known for the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
    image: "https://d33om22pidobo4.cloudfront.net/blogs/covers/ezgif-5-975f4cc762-1jpg-164e4989-d9e0-498e-abe2-eb51435739e2jpgd1500x999-y-fwebpjpegd1500x999-y-fwebp.jpeg?d=1500x999&f=webp&w=3840&q=75",
    developments: [
      {
        name: "Mirador",
        type: "Residencial",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic, community with world class facilities. Shopping, Sport and entertainment all in one community.",
        units: "200+ Villas",
        priceRange: "AED 5M - 100M",
        completionDate: "2010",
	image: "https://blog.sothebysrealty.ae/hs-fs/hubfs/kqx-jpg.jpeg?width=1600&height=1067&name=kqx-jpg.jpeg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
"emirates-living": {
    title: "Emirates Living",
    description: "Downtown Dubai is a central district known for the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
    image: "https://d33om22pidobo4.cloudfront.net/blogs/covers/ezgif-5-975f4cc762-1jpg-164e4989-d9e0-498e-abe2-eb51435739e2jpgd1500x999-y-fwebpjpegd1500x999-y-fwebp.jpeg?d=1500x999&f=webp&w=3840&q=75",
    developments: [
      {
        name: "Springs",
        type: "Residencial",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic, community with world class facilities. Shopping, Sport and entertainment all in one community.",
        units: "200+ Villas",
        priceRange: "AED 5M - 100M",
        completionDate: "2010",
	image: "https://blog.sothebysrealty.ae/hs-fs/hubfs/kqx-jpg.jpeg?width=1600&height=1067&name=kqx-jpg.jpeg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
"jumeirah-lakes-towers": {
    title: "Jumeirah Lakes Towers (JLT)",
    description: "Downtown Dubai is a central district known for the Burj Khalifa, Dubai Mall, and Dubai Fountain.",
    image: "https://d33om22pidobo4.cloudfront.net/blogs/covers/ezgif-5-975f4cc762-1jpg-164e4989-d9e0-498e-abe2-eb51435739e2jpgd1500x999-y-fwebpjpegd1500x999-y-fwebp.jpeg?d=1500x999&f=webp&w=3840&q=75",
    developments: [
      {
        name: "Villas",
        type: "Residencial",
        developer: "Emaar Properties",
        icon: Building2,
        description: "Iconic, community with world class facilities. Shopping, Sport and entertainment all in one community.",
        units: "200+ Villas",
        priceRange: "AED 5M - 100M",
        completionDate: "2010",
	image: "https://blog.sothebysrealty.ae/hs-fs/hubfs/kqx-jpg.jpeg?width=1600&height=1067&name=kqx-jpg.jpeg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
"jumeirah-beach-residence": {
    title: "Jumeirah Beach Residence (JBR)",
    description: "JBR is a beachfront community with luxury apartments, retail outlets, and dining options.",
    image: "https://www.visitdubai.com/-/media/gathercontent/article/t/the-hot-list-families/media/the-hot-list-family-jbr-2.jpg?rev=766e486833d746a7b875ba5ef8115059&cx=0.5&cy=0.5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Sadaf Towers",
        type: "Residential",
        developer: "Dubai Properties",
        icon: Building,
        description: "Beachfront residential complex with direct beach access",
        units: "400+ apartments",
        priceRange: "AED 1.5M - 6M",
        completionDate: "2007",
	image: "https://www.constructionweekonline.com/cloud/2021/07/07/JBR_1_3.gif?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      },
      {
        name: "Al Fattan Towers",
        type: "Residential",
        developer: "Dubai Properties",
        icon: Building,
        description: "Beachfront residential complex with retail options",
        units: "350+ apartments",
        priceRange: "AED 2.4M - 5.5M",
        completionDate: "2007",
	image: "https://lvrealty.ae/wp-content/uploads/2022/06/666fbbb527e067cfcf9dcecc8cce697f3b90ea15_1579105209.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "al-marjan-island": {
    title: "Al Marjan Island",
    description: "Al Marjan Island is a man-made archipelago in Ras Al Khaimah offering waterfront living.",
    image: "https://images.unsplash.com/photo-1580223530027-c6a0d516b523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    developments: [
      {
        name: "Pacific by Select Group",
        type: "Residential",
        developer: "Select Group",
        icon: Building,
        description: "Luxury waterfront apartments with panoramic views",
        units: "200+ apartments",
        priceRange: "AED 800K - 3M",
        completionDate: "2016"
      },
      {
        name: "Gateway Residences",
        type: "Residential",
        developer: "RAK Properties",
        icon: Building,
        description: "Modern apartments with water views",
        units: "150+ apartments",
        priceRange: "AED 750K - 2.5M",
        completionDate: "2018"
      }
    ]
  }
};

const AreaDevelopments = () => {
  const { translate } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const areaData = developmentData[id || ""] || null;
  
  if (!areaData) {
    return (
      <div className="section-padding bg-white">
        <div className="luxury-container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{translate("Area Not Found")}</h2>
            <Button onClick={() => navigate("/uae-know-how")} className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {translate("Back to Areas")}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="section-padding bg-white">
      <div className="luxury-container">
        <Button 
          onClick={() => navigate("/uae-know-how")} 
          variant="outline" 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {translate("Back to Areas")}
        </Button>
        
        <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden">
          <img 
            src={areaData.image} 
            alt={areaData.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-overlay flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {translate(areaData.title)}
            </h1>
          </div>
        </div>
        
        <div className="mb-10">
          <p className="text-lg text-gray-700 mb-6">
            {translate(areaData.description)}
          </p>
          
          <h2 className="text-2xl font-bold mb-4">{translate("Key Developments")}</h2>
          <div className="gold-separator mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaData.developments.map((dev: any, index: number) => {
              const DevIcon = dev.icon || Building;
              
              return (
                <Card key={index} className="h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden rounded-t-lg">
                    <img 
                      src={dev.image || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80"} 
                      alt={dev.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="flex items-center text-white">
                          <DevIcon className="h-5 w-5 mr-2 text-luxury-gold" />
                          <h3 className="text-xl font-semibold truncate">{dev.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-lg flex justify-between items-center">
                      <span className="truncate">{dev.type}</span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-6 flex-grow">
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        {translate(dev.description)}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Type")}:</span>
                          <span className="text-gray-600">{dev.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Developer")}:</span>
                          <span className="text-gray-600">{dev.developer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Units")}:</span>
                          <span className="text-gray-600">{dev.units}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Price Range")}:</span>
                          <span className="text-gray-600">{dev.priceRange}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">{translate("Completion")}:</span>
                          <span className="text-gray-600">{dev.completionDate}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDevelopments;
