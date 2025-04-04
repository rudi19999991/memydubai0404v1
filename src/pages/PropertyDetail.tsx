import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyProps } from "@/components/PropertyCard";
import { MapPin, Building, Bed, Bath, Home, Calendar, ArrowLeft, ArrowRight, Phone, Mail, Percent, ChevronLeft } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { useLanguage } from "@/contexts/LanguageContext";
import PropertyImageGrid from "@/components/PropertyImageGrid";


const propertyData: Record<string, PropertyProps>= {
  
"prop1": {
    id: "prop1",
    title: "Luxury Apartment in Dubai Marina",
    location: "Dubai Marina",
    price: 3300000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 3,
    area: 1372,
    roi: 7.1,
    imageUrl: "https://pf-graph-images-production.s3.ap-southeast-1.amazonaws.com/ae/building/3051/45900f10d518f2d85e6167a3bfee2d6b/watermark.jpeg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
  "prop2": {
    id: "prop2",
    title: "Beachfront Villa on Palm Jumeirah",
    location: "Palm Jumeirah",
    price: 89000000,
    type: "Villa",
    bedrooms: 6,
    bathrooms: 7,
    area: 14690,
    roi: 5.8,
    imageUrl: "https://www.propertyfinder.ae/property/2323b4fe64df93fc57750fed7894c6fe/1312/894/MODE/530ca8/13629340-ae5fco.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
  "prop3": {
    id: "prop3",
    title: "Off-Plan Apartment next to Burj al Arab",
    location: "Downtown Dubai",
    price: 10800000,
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 6,
    area: 3281,
    roi: 8.1,
    imageUrl: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "offplan",
  },
  "prop4": {
    id: "prop4",
    title: "Luxurious Apartment in JLT",
    location: "Jumeirah Lakes Towers",
    price: 2400000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 4,
    area: 1657,
    roi: 8.5,
    imageUrl: "https://www.propertyfinder.ae/property/86dff2e137991cb992d643eabaf4d1d4/1312/894/MODE/af6840/13350377-49143o.webp?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
  "prop5": {
    id: "prop5",
    title: "Off-Plan Villa in Dubai Hills",
    location: "Dubai Hills",
    price: 17600000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    area: 7100,
    roi: 7.8,
    imageUrl: "https://www.propertyfinder.ae/property/16f2c8d51bb3f484f36bce353d7aa257/1312/894/MODE/4eeef6/13739500-8d9d9o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "offplan",
  },
  "prop6": {
    id: "prop6",
    title: "Luxury Villa in Ras Al Khaimah",
    location: "Ras Al Khaimah",
    price: 10200000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: 13000,
    roi: 9,
    imageUrl: "https://www.propertyfinder.ae/property/34325c0627f97a68c9f845a5a671ce44/1312/894/MODE/0798f5/13669054-8e86do.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    status: "ready",
  },
};

const extendedPropertyData: Record<string, {

  description: string;
  features: string[];
  paymentPlan?: {
    downPayment: number;
    installments: {
      percentage: number;
      milestone: string;
    }[];
  };
  developer: string;
  completionDate?: string;
  nearbyPlaces: string[];
  propertyImages: string[];
}> = {
  "prop1": {
    description: "Experience luxury living in this beautifully designed apartment in Cayan Tower in Dubai Marina. With breathtaking views of the marina and the sea, this property offers an unparalleled lifestyle in one of Dubai's most sought-after neighborhoods. The apartment features high-end finishes, spacious living areas, and access to world-class amenities.",
    features: ["Floor-to-ceiling windows", "Smart home technology", "Private balcony", "Marble flooring", "Custom kitchen cabinets", "Walk-in closets", "Maid's room"],
    developer: "Cayan Properties",
    nearbyPlaces: ["Dubai Marina Mall", "JBR Beach", "The Walk", "Dubai Metro Station", "Marina Yacht Club"],
    propertyImages: [
      "https://www.propertyfinder.ae/property/bd398534426accb7627a99d9bc816f7a/1312/894/MODE/bb537d/13633134-0ae4do.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/5a325739c50b69fdd6758fcc84a6ca67/1312/894/MODE/352940/13633134-10d7co.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/9768558b5fb985788a78ec58d39f7b0f/1312/894/MODE/fde250/13633134-f79fdo.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
"https://www.propertyfinder.ae/property/9c22b84d2828f93b91eaae9838edd69f/1312/894/MODE/af110f/13633134-ab1d5o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop2": {
    description: "This magnificent beachfront villa on Palm Jumeirah offers an exclusive lifestyle with direct access to a private beach. The property features panoramic sea views, expansive living spaces, and the finest materials and craftsmanship throughout. Perfect for those seeking the ultimate luxury lifestyle in Dubai's most prestigious address.",
    features: ["Private beach access", "Infinity pool", "Home theater", "Smart home system", "Driver's room", "Private gym", "Wine cellar", "Landscaped garden"],
    developer: "Nakheel",
    nearbyPlaces: ["Atlantis The Palm", "The Pointe", "Palm West Beach", "Nakheel Mall", "One&Only The Palm"],
    propertyImages: [
      "https://www.propertyfinder.ae/property/62582ed2cbf0f1c8bcaa06888a8bad95/1312/894/MODE/665f16/13629340-8db5fo.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/54a30f2203c1498f63db720e6e8e912a/1312/894/MODE/7f54f9/13629340-fc498o.webp?ctr=ae?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/fcfec7e0413ea3c98b83ab71ffa1f88e/1312/894/MODE/3538a6/13629340-0d7ddo.webp?ctr=ae?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/6dd1d15e41b8dd094cc036c85a59d46a/1312/894/MODE/a5ce21/13629340-eb965o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/d2e37a256cbf884834fd7f5d38c2d354/1312/894/MODE/34b3a6/13629340-fe6e1o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop3": {
    description: "Invest in this off-plan apartment next to iconic Burj al Arab. With thoughtful design and premium finishes, this residence offers the perfect blend of comfort and convenience. Located within walking distance of major attractions and with exceptional facilities, this property presents an excellent investment opportunity.",
    features: ["Burj al Arab views", "Contemporary design", "Premium appliances", "Balcony", "Built-in wardrobes", "Floor-to-ceiling windows"],
    paymentPlan: {
      downPayment: 20,
      installments: [
        { percentage: 30, milestone: "Construction milestone (30%)" },
        { percentage: 30, milestone: "Construction milestone (60%)" },
        { percentage: 20, milestone: "Completion" }
      ]
    },
    developer: "Emaar Properties",
    completionDate: "Q4 2025",
    nearbyPlaces: ["Burj al Arab", "Madinat Jumeirah", "Mall of Emirates", "Jumeirah Beach", "Palm Jumeirah"],
    propertyImages: [
      "https://www.propertyfinder.ae/property/727c1e06e0eca1d61be5252ae461efab/1312/894/MODE/60d370/13879752-40e65o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/70111c2dc4f46444a7c9d466f96c305e/1312/894/MODE/995dfc/13879752-a1e83o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/e9bac423b604c7a1bc12c5b5ab2cf72e/1312/894/MODE/d1d721/13879752-ab9d9o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop4": {
    description: "This stunning apartment in JLT offers the ultimate in luxury living. With expansive living spaces, high ceilings, and panoramic views of Dubai's iconic skyline. Located in one of the best buildings in JLT, this apartment will always be in high demand. Exceptional finishes and attention to detail are evident throughout this exceptional property.",
    features: ["Panoramic city views", "Private balcony", "Built-in kitchen", "Italian marble flooring", "Double-height ceilings"],
    developer: "Nakheel Properties",
    nearbyPlaces: ["Dubai Marina Mall", "Dubai Marina", "Media City", "Tecom", "JBR"],
    propertyImages: [
      "https://www.propertyfinder.ae/property/86dff2e137991cb992d643eabaf4d1d4/1312/894/MODE/af6840/13350377-49143o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/b7cf89a9f906d9092a6aca9670afa2af/1312/894/MODE/7306a2/13350377-dc16do.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/1363386350492a08ecd8347cbc940a9b/1312/894/MODE/bb282c/13350377-61516o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop5": {
    description: "This off-plan villa in Dubai Hills offers the perfect blend of luxury and comfort in one of Dubai's most prestigious communities. With spacious interiors, premium finishes, and beautiful landscaped gardens, this property provides an exceptional living experience for families. The development boasts world-class amenities and is surrounded by lush greenery.",
    features: ["Private garden", "Swimming pool", "Smart home features", "Premium finishes", "Family living areas", "Guest suite", "Covered parking"],
    paymentPlan: {
      downPayment: 25,
      installments: [
        { percentage: 25, milestone: "Foundation completion" },
        { percentage: 25, milestone: "Structure completion" },
        { percentage: 25, milestone: "Handover" }
      ]
    },
    developer: "Emaar Properties",
    completionDate: "Q3 2025",
    nearbyPlaces: ["Dubai Hills Mall", "Dubai Hills Golf Club", "Dubai Hills Park", "International schools", "Healthcare facilities"],
    propertyImages: [
      "https://www.propertyfinder.ae/property/16f2c8d51bb3f484f36bce353d7aa257/1312/894/MODE/4eeef6/13739500-8d9d9o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/4140acb70edb9107007472a4b9907954/1312/894/MODE/0ba48d/13739500-f428do.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/287c2df799c7e8256f9217e8180592dd/1312/894/MODE/af6f5e/13739500-bf444o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  },
  "prop6": {
    description: "Discover tranquil luxury in this exquisite villa in Ras Al Khaimah. Set at the lagoon of Al Hamra Village with private beach access, this property offers a serene retreat with all the amenities of modern living. The spacious layout and premium finishes make this an ideal home for families seeking comfort and exclusivity.",
    features: ["Elevator", "Private pool", "Outdoor entertaining area", "High ceilings", "Modern design", "Landscaped garden", "BBQ area"],
    developer: "RAK Properties",
    nearbyPlaces: ["Al Hamra Mall", "Al Hamra Golf Club", "Waldorf Astoria", "RAK Beach", "Jebel Jais"],
    propertyImages: [
      "https://www.propertyfinder.ae/property/34325c0627f97a68c9f845a5a671ce44/1312/894/MODE/0798f5/13669054-8e86do.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/a16444de176ce1d35efacebeb153caee/1312/894/MODE/c60212/13669054-70831o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      "https://www.propertyfinder.ae/property/2b927389d3a3df7b3a3c27207a8e7e1f/1312/894/MODE/733e72/13669054-6e3c9o.webp?ctr=ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    ]
  }
};

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const property = id ? propertyData[id] : null;
  const extendedInfo = id ? extendedPropertyData[id] : null;
  const { formatPrice, currentCurrency } = useCurrency();
  const { translate } = useLanguage();
  
  if (!property || !extendedInfo) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="luxury-container py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">{translate("Property Not Found")}</h1>
            <p className="mb-8">{translate("The property you are looking for does not exist or has been removed.")}</p>
            <Button asChild>
              <Link to="/properties">
                <ChevronLeft className="mr-2 h-4 w-4" />
                {translate("Back to Properties")}
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="bg-gray-100 py-4">
          <div className="luxury-container">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/properties">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {translate("Back to Properties")}
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <Link to={`/properties/${Number(id?.replace('prop', '')) > 1 ? `prop${Number(id?.replace('prop', '')) - 1}` : 'prop6'}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {translate("Previous")}
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                >
                  <Link to={`/properties/${Number(id?.replace('prop', '')) < 6 ? `prop${Number(id?.replace('prop', '')) + 1}` : 'prop1'}`}>
                    {translate("Next")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <section className="luxury-container py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-3xl font-bold text-luxury-gold">
                {formatPrice(property.price)}
                <span className="text-xs ml-1 text-gray-500">
                  {currentCurrency.code !== "AED" && `(${currentCurrency.code})`}
                </span>
              </p>
              <Badge className={`${property.status === "ready" ? "bg-green-600" : "bg-luxury-gold"}`}>
                {property.status === "ready" ? translate("Ready to Move") : translate("Off-Plan")}
              </Badge>
            </div>
          </div>
        </section>
        
        <section className="luxury-container pb-12">
                    <PropertyImageGrid images={extendedInfo.propertyImages} title={property.title} />

        </section>
        
        <section className="luxury-container pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">{translate("Overview")}</TabsTrigger>
                  <TabsTrigger value="features">{translate("Features")}</TabsTrigger>
                  {property.status === "offplan" && (
                    <TabsTrigger value="payment">{translate("Payment Plan")}</TabsTrigger>
                  )}
                  {property.status === "ready" && (
                    <TabsTrigger value="roi">{translate("ROI Analysis")}</TabsTrigger>
                  )}
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 mb-6">
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Type")}</span>
                          <span className="font-medium flex items-center">
                            <Building className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.type}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Bedrooms")}</span>
                          <span className="font-medium flex items-center">
                            <Bed className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.bedrooms}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Bathrooms")}</span>
                          <span className="font-medium flex items-center">
                            <Bath className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.bathrooms}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Area")}</span>
                          <span className="font-medium flex items-center">
                            <Home className="h-4 w-4 mr-1 text-luxury-navy" />
                            {property.area} sqft
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("Developer")}</span>
                          <span className="font-medium">{extendedInfo.developer}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-muted-foreground text-sm">{translate("ROI")}</span>
                          <span className="font-medium flex items-center">
                            {property.roi}
			  <Percent className="h-4 w-4 mr-1 text-luxury-navy" />
                            
                          </span>
                        </div>
                        {extendedInfo.completionDate && (
                          <div className="flex flex-col">
                            <span className="text-muted-foreground text-sm">{translate("Completion")}</span>
                            <span className="font-medium flex items-center">
                              <Calendar className="h-4 w-4 mr-1 text-luxury-navy" />
                              {extendedInfo.completionDate}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">{translate("Description")}</h3>
                        <p className="text-muted-foreground">
                          {extendedInfo.description}
                        </p>
                        
                        <h3 className="text-lg font-medium pt-4">{translate("Nearby Places")}</h3>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {extendedInfo.nearbyPlaces.map((place, index) => (
                            <li key={index}>{place}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-medium mb-4">{translate("Key Features")}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {extendedInfo.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-luxury-gold mr-2"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {property.status === "offplan" && extendedInfo.paymentPlan && (
                  <TabsContent value="payment" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-4">{translate("Payment Plan")}</h3>
                        <div className="space-y-4">
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{translate("Down Payment")}</span>
                              <span className="text-luxury-gold font-bold">{extendedInfo.paymentPlan.downPayment}%</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {formatPrice(property.price * extendedInfo.paymentPlan.downPayment / 100)}
                            </p>
                          </div>
                          
                          {extendedInfo.paymentPlan.installments.map((installment, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{translate(installment.milestone)}</span>
                                <span className="text-luxury-gold font-bold">{installment.percentage}%</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">
                                {formatPrice(property.price * installment.percentage / 100)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
                
                {property.status === "ready" && (
                  <TabsContent value="roi" className="mt-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-4">{translate("Investment Analysis")}</h3>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <p className="text-sm text-muted-foreground">{translate("Annual ROI")}</p>
                              <p className="text-2xl font-bold text-luxury-gold">{property.roi}%</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <p className="text-sm text-muted-foreground">{translate("Est. Annual Income")}</p>
                              <p className="text-2xl font-bold text-luxury-navy">
                                {formatPrice(Math.round(property.price * property.roi / 100))}
                              </p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg text-center">
                              <p className="text-sm text-muted-foreground">{translate("Est. Monthly Rent")}</p>
                              <p className="text-2xl font-bold text-luxury-navy">
                                {formatPrice(Math.round(property.price * property.roi / 100 / 12))}
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">{translate("Yearly Service Charge")}</p>
                            <p className="text-xl font-bold text-luxury-navy mt-1">
                              {formatPrice(Math.round(property.price * 0.01))}
                            </p>
                          </div>
                          
                          <div className="bg-luxury-navy/10 p-4 rounded-lg">
                            <h4 className="font-medium mb-2">{translate("Investment Advantages")}</h4>
                            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                              <li>{translate("0% Property Tax")}</li>
                              <li>{translate("0% Income Tax on Rental Income")}</li>
                              <li>{translate("Strong Tenant Demand in")} {property.location}</li>
                              <li>{translate("High Capital Appreciation Potential")}</li>
                              <li>{translate("Eligible for Residence Visa")}</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                )}
              </Tabs>
            </div>
            
            <div>
              <Card className="bg-white shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">{translate("Schedule a Viewing")}</h3>
                  <div className="space-y-4">
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                      <Phone className="mr-2 h-4 w-4" />
                      {translate("Schedule Viewing")}
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      {translate("Request Information")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">{translate("Similar Properties")}</h3>
                <div className="space-y-4">
                  {Object.values(propertyData)
                    .filter(p => p.id !== property.id && p.type === property.type)
                    .slice(0, 2)
                    .map(p => (
                      <Link key={p.id} to={`/properties/${p.id}`}>
                        <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <img
                            src={p.imageUrl}
                            alt={p.title}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium line-clamp-1">{p.title}</h4>
                            <p className="text-sm text-muted-foreground">{p.location}</p>
                            <p className="text-luxury-gold font-medium">{formatPrice(p.price)}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-luxury-navy text-white py-12">
          <div className="luxury-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{translate("Ready to invest in Dubai real estate?")}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {translate("Our team of experts is ready to help you find the perfect property investment opportunity.")}
            </p>
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
              {translate("Book a Consultation")}
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
