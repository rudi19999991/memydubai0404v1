
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PropertyFilter from "@/components/PropertyFilter";
import PropertyCard, { PropertyProps } from "@/components/PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";
import CurrencySelector from "@/components/CurrencySelector";

const Properties = () => {
  const { translate } = useLanguage();
  
  // Filter state
  const [activeFilters, setActiveFilters] = useState({
    priceRange: [500000, 100000000],
    location: "",
    propertyType: "",
    bedrooms: "",
    status: "",
    minRoi: 5,
  });

  // Sample properties data
  const allProperties: PropertyProps[] = [
    {
      id: "prop1",
      title: translate("Luxury Apartment in Dubai Marina"),
      location: "Dubai Marina",
      price: 3300000,
      type: translate("Apartment"),
      bedrooms: 2,
      bathrooms: 3,
      area: 1372,
      roi: 7.1,
      imageUrl: "https://pf-graph-images-production.s3.ap-southeast-1.amazonaws.com/ae/building/3051/45900f10d518f2d85e6167a3bfee2d6b/watermark.jpeg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop2",
      title: translate("Beachfront Villa on Palm Jumeirah"),
      location: "Palm Jumeirah",
      price: 89000000,
      type: translate("Villa"),
      bedrooms: 6,
      bathrooms: 7,
      area: 14690,
      roi: 5.8,
      imageUrl: "https://www.propertyfinder.ae/property/2323b4fe64df93fc57750fed7894c6fe/1312/894/MODE/530ca8/13629340-ae5fco.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop3",
      title: translate("Off-Plan Apartment next to Burj al Arab"),
      location: "Umm Suqueim",
      price: 10800000,
      type: translate("Apartment"),
      bedrooms: 4,
      bathrooms: 6,
      area: 3281,
      roi: 8.1,
      imageUrl: "https://www.propertyfinder.ae/property/727c1e06e0eca1d61be5252ae461efab/1312/894/MODE/60d370/13879752-40e65o.webp?ctr=ae?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "offplan",
    },
    {
      id: "prop4",
      title: translate("Luxurious Apartment in JLT"),
      location: "Jumeirah Lakes Towers",
      price: 2400000,
      type: translate("Apartment"),
      bedrooms: 2,
      bathrooms: 4,
      area: 1657,
      roi: 8.5,
      imageUrl: "https://www.propertyfinder.ae/property/86dff2e137991cb992d643eabaf4d1d4/1312/894/MODE/af6840/13350377-49143o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
    {
      id: "prop5",
      title: translate("Off-Plan Villa in Dubai Hills"),
      location: "Dubai Hills",
      price: 5500000,
      type: translate("Villa"),
      bedrooms: 4,
      bathrooms: 4.5,
      area: 3800,
      roi: 7.8,
      imageUrl: "https://www.propertyfinder.ae/property/16f2c8d51bb3f484f36bce353d7aa257/1312/894/MODE/4eeef6/13739500-8d9d9o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "offplan",
    },
    {
      id: "prop6",
      title: translate("Luxury Villa in Ras Al Khaimah"),
      location: "Ras Al Khaimah",
      price: 10200000,
      type: translate("Villa"),
      bedrooms: 5,
      bathrooms: 6,
      area: 13000,
      roi: 9,
      imageUrl: "https://www.propertyfinder.ae/property/34325c0627f97a68c9f845a5a671ce44/1312/894/MODE/0798f5/13669054-8e86do.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: "ready",
    },
  ];

  // Filter properties based on activeFilters
  const filteredProperties = allProperties.filter((property) => {
    const withinPriceRange =
      property.price >= activeFilters.priceRange[0] &&
      property.price <= activeFilters.priceRange[1];
      
    const matchesLocation = activeFilters.location
      ? activeFilters.location === "all" 
        ? true
        : property.location.toLowerCase().includes(activeFilters.location.toLowerCase())
      : true;
      
    const matchesType = activeFilters.propertyType
      ? activeFilters.propertyType === "all"
        ? true
        : property.type.toLowerCase() === activeFilters.propertyType.toLowerCase()
      : true;
      
    const matchesBedrooms = activeFilters.bedrooms
      ? activeFilters.bedrooms === "any"
        ? true
        : activeFilters.bedrooms === "4+"
          ? property.bedrooms >= 4
          : property.bedrooms === parseInt(activeFilters.bedrooms)
      : true;
      
    const matchesStatus = activeFilters.status
      ? activeFilters.status === "all"
        ? true
        : property.status === activeFilters.status
      : true;
      
    const matchesRoi = property.roi >= activeFilters.minRoi;
    
    return (
      withinPriceRange &&
      matchesLocation &&
      matchesType &&
      matchesBedrooms &&
      matchesStatus &&
      matchesRoi
    );
  });

  const handleFilter = (filters: any) => {
    setActiveFilters(filters);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Explore Our Properties")}
          subtitle={translate("Find your perfect investment")}
          videoUrl="https://player.vimeo.com/external/367892685.sd.mp4?s=a376c6a45d95db6143fc54c0d225565bcd684eba&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="flex justify-between items-center mb-6">
              <PropertyFilter onFilter={handleFilter} />
            </div>
            
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {filteredProperties.length} {translate("Properties Found")}
                </h2>
                <CurrencySelector />
              </div>
              
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{translate("No properties found")}</h3>
                  <p className="text-gray-600">
                    {translate("Try adjusting your filters")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
