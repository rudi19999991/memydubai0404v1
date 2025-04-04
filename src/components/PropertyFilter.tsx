
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";
import CurrencySelector from "./CurrencySelector";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface FilterProps {
  onFilter: (filters: FilterOptions) => void;
}

interface FilterOptions {
  priceRange: [number, number];
  location: string;
  propertyType: string;
  bedrooms: string;
  status: string;
  minRoi: number;
}

const PropertyFilter: React.FC<FilterProps> = ({ onFilter }) => {
  const { translate } = useLanguage();
  const { currentCurrency, convertPrice } = useCurrency();
  
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [500000, 250000000],
    location: "",
    propertyType: "",
    bedrooms: "",
    status: "",
    minRoi: 5,
  });

  const handlePriceChange = (value: number[]) => {
    setFilters({ ...filters, priceRange: [value[0], value[1]] });
  };

  const handleRoiChange = (value: number[]) => {
    setFilters({ ...filters, minRoi: value[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };

  const formatPrice = (value: number) => {
    if (currentCurrency.code === 'AED') {
      return `AED ${(value / 1000000).toFixed(1)}M`;
    }
    const converted = convertPrice(value);
    
    if (currentCurrency.code === 'BTC' || currentCurrency.code === 'ETH') {
      return `${currentCurrency.symbol} ${converted.toFixed(currentCurrency.decimals)}`;
    }
    
    return `${currentCurrency.symbol} ${(converted / 1000000).toFixed(1)}M`;
  };

  const FilterForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-base font-medium">
              {translate("Price Range")}
            </Label>
            <span className="text-sm text-muted-foreground">
              {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
            </span>
          </div>
          <Slider
            defaultValue={[500000, 10000000]}
            max={20000000}
            min={500000}
            step={100000}
            value={[filters.priceRange[0], filters.priceRange[1]]}
            onValueChange={handlePriceChange}
            className="my-4"
          />
        </div>

        {/* Location */}
        <div>
          <Label className="text-base font-medium mb-2 block">
            {translate("Location")}
          </Label>
          <Select
            value={filters.location}
            onValueChange={(value) => setFilters({ ...filters, location: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={translate("All Locations")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{translate("All Locations")}</SelectItem>
              <SelectItem value="dubai-marina">{translate("Dubai Marina")}</SelectItem>
              <SelectItem value="downtown-dubai">{translate("Downtown Dubai")}</SelectItem>
              <SelectItem value="palm-jumeirah">{translate("Palm Jumeirah")}</SelectItem>
              <SelectItem value="dubai-hills">{translate("Dubai Hills")}</SelectItem>
              <SelectItem value="rak">{translate("Ras Al Khaimah")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div>
          <Label className="text-base font-medium mb-2 block">
            {translate("Property Type")}
          </Label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={translate("All Types")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{translate("All Types")}</SelectItem>
              <SelectItem value="apartment">{translate("Apartment")}</SelectItem>
              <SelectItem value="villa">{translate("Villa")}</SelectItem>
              <SelectItem value="penthouse">{translate("Penthouse")}</SelectItem>
              <SelectItem value="townhouse">{translate("Townhouse")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div>
          <Label className="text-base font-medium mb-2 block">
            {translate("Bedrooms")}
          </Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) => setFilters({ ...filters, bedrooms: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={translate("Any")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">{translate("Any")}</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4+">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div>
          <Label className="text-base font-medium mb-2 block">
            {translate("Status")}
          </Label>
          <Select
            value={filters.status}
            onValueChange={(value) => setFilters({ ...filters, status: value })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={translate("All Properties")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{translate("All Properties")}</SelectItem>
              <SelectItem value="ready">{translate("Ready")}</SelectItem>
              <SelectItem value="offplan">{translate("Off-Plan")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Min ROI */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label className="text-base font-medium">
              {translate("Minimum ROI")}
            </Label>
            <span className="text-sm text-muted-foreground">
              {filters.minRoi}%
            </span>
          </div>
          <Slider
            defaultValue={[5]}
            max={15}
            min={0}
            step={0.5}
            value={[filters.minRoi]}
            onValueChange={handleRoiChange}
            className="my-4"
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-luxury-navy hover:bg-luxury-navy/90">
        {translate("Apply Filters")}
      </Button>
    </form>
  );

  return (
    <div className="w-full">
      {/* Desktop Filter */}
      <div className="hidden md:block bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold flex items-center">
            <Search className="mr-2 h-5 w-5 text-luxury-gold" />
            {translate("Find Your Ideal Investment")}
          </h3>
          <CurrencySelector variant="small" />
        </div>
        <FilterForm />
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Search className="mr-2 h-4 w-4" />
              {translate("Search Properties")}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh]">
            <SheetHeader>
              <SheetTitle>{translate("Property Search")}</SheetTitle>
              <SheetDescription>
                {translate("Adjust filters to find your perfect property")}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6">
              <FilterForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default PropertyFilter;
