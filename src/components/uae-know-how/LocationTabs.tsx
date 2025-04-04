
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DubaiLocations from "./DubaiLocations";
import RAKLocations from "./RAKLocations";

const LocationTabs = () => {
  const { translate } = useLanguage();
  
  return (
    <div className="luxury-container">
      <Tabs defaultValue="dubai" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="dubai">{translate("Dubai")}</TabsTrigger>
          <TabsTrigger value="rak">{translate("Ras Al Khaimah")}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dubai" className="space-y-8">
          <DubaiLocations />
        </TabsContent>
        
        <TabsContent value="rak" className="space-y-8">
          <RAKLocations />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LocationTabs;
