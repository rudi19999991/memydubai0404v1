
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Plus, X, Check, Building } from "lucide-react";

const PropertyUpload = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    roi: "",
    status: "ready",
  });
  
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddFeature = () => {
    if (newFeature.trim() && !features.includes(newFeature.trim())) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const handleRemoveFeature = (feature: string) => {
    setFeatures(features.filter(f => f !== feature));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages((prev) => [...prev, ...newImages]);
      
      const newImageUrls = newImages.map(file => URL.createObjectURL(file));
      setImagePreviewUrls((prev) => [...prev, ...newImageUrls]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    
    // Revoke the URL to prevent memory leaks
    URL.revokeObjectURL(imagePreviewUrls[index]);
    setImagePreviewUrls(imagePreviewUrls.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create a formatted property object that matches the PropertyProps structure
    const newProperty = {
      id: `prop${Date.now()}`, // Generate a unique ID
      title: formData.title,
      location: formData.location,
      price: parseFloat(formData.price),
      type: formData.type,
      bedrooms: parseInt(formData.bedrooms),
      bathrooms: parseFloat(formData.bathrooms),
      area: parseFloat(formData.area),
      roi: parseFloat(formData.roi),
      imageUrl: imagePreviewUrls.length > 0 ? imagePreviewUrls[0] : "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      status: formData.status,
      features: features,
      description: formData.description,
    };
    
    // In a real application, you would send this data to your backend/API
    console.log("New property data:", newProperty);
    
    // For demo purposes, we'll store it in localStorage
    const existingProperties = JSON.parse(localStorage.getItem('properties') || '[]');
    const updatedProperties = [...existingProperties, newProperty];
    localStorage.setItem('properties', JSON.stringify(updatedProperties));
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: translate("Property Uploaded Successfully"),
        description: translate("Your property listing has been added and is now visible in the properties section."),
      });
      
      // Reset form after successful submission
      setFormData({
        title: "",
        description: "",
        location: "",
        price: "",
        type: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        roi: "",
        status: "ready",
      });
      setFeatures([]);
      setImages([]);
      setImagePreviewUrls([]);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        <div className="luxury-container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">{translate("Property Upload")}</h1>
              <p className="text-gray-600 mt-2">
                {translate("Use this form to add new property listings to the website")}
              </p>
              <div className="gold-separator mx-auto mt-4" />
            </div>
            
            <Card>
              <CardHeader className="bg-luxury-navy text-white">
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" /> {translate("New Property Listing")}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Information */}
                    <div className="space-y-4 md:col-span-2">
                      <h3 className="text-lg font-semibold">{translate("Basic Information")}</h3>
                      
                      <div>
                        <Label htmlFor="title">{translate("Property Title")}</Label>
                        <Input
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          placeholder={translate("Luxury Apartment in Dubai Marina")}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="description">{translate("Description")}</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder={translate("Detailed description of the property...")}
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Location */}
                    <div>
                      <Label htmlFor="location">{translate("Location")}</Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) => handleSelectChange("location", value)}
                      >
                        <SelectTrigger id="location">
                          <SelectValue placeholder={translate("Select location")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dubai-marina">{translate("Dubai Marina")}</SelectItem>
                          <SelectItem value="downtown-dubai">{translate("Downtown Dubai")}</SelectItem>
                          <SelectItem value="palm-jumeirah">{translate("Palm Jumeirah")}</SelectItem>
                          <SelectItem value="dubai-hills">{translate("Dubai Hills")}</SelectItem>
                          <SelectItem value="rak">{translate("Ras Al Khaimah")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Price */}
                    <div>
                      <Label htmlFor="price">{translate("Price (AED)")}</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="1,500,000"
                        required
                      />
                    </div>
                    
                    {/* Property Type */}
                    <div>
                      <Label htmlFor="type">{translate("Property Type")}</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => handleSelectChange("type", value)}
                      >
                        <SelectTrigger id="type">
                          <SelectValue placeholder={translate("Select type")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apartment">{translate("Apartment")}</SelectItem>
                          <SelectItem value="villa">{translate("Villa")}</SelectItem>
                          <SelectItem value="penthouse">{translate("Penthouse")}</SelectItem>
                          <SelectItem value="townhouse">{translate("Townhouse")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Bedrooms */}
                    <div>
                      <Label htmlFor="bedrooms">{translate("Bedrooms")}</Label>
                      <Select
                        value={formData.bedrooms}
                        onValueChange={(value) => handleSelectChange("bedrooms", value)}
                      >
                        <SelectTrigger id="bedrooms">
                          <SelectValue placeholder={translate("Number of bedrooms")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Studio</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Bathrooms */}
                    <div>
                      <Label htmlFor="bathrooms">{translate("Bathrooms")}</Label>
                      <Select
                        value={formData.bathrooms}
                        onValueChange={(value) => handleSelectChange("bathrooms", value)}
                      >
                        <SelectTrigger id="bathrooms">
                          <SelectValue placeholder={translate("Number of bathrooms")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Area */}
                    <div>
                      <Label htmlFor="area">{translate("Area (sq ft)")}</Label>
                      <Input
                        id="area"
                        name="area"
                        type="number"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="1000"
                        required
                      />
                    </div>
                    
                    {/* ROI */}
                    <div>
                      <Label htmlFor="roi">{translate("Expected ROI (%)")}</Label>
                      <Input
                        id="roi"
                        name="roi"
                        type="number"
                        step="0.1"
                        value={formData.roi}
                        onChange={handleInputChange}
                        placeholder="7.5"
                        required
                      />
                    </div>
                    
                    {/* Status */}
                    <div>
                      <Label htmlFor="status">{translate("Status")}</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value) => handleSelectChange("status", value)}
                      >
                        <SelectTrigger id="status">
                          <SelectValue placeholder={translate("Property status")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ready">{translate("Ready")}</SelectItem>
                          <SelectItem value="offplan">{translate("Off-Plan")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-4">{translate("Property Features")}</h3>
                    
                    <div className="flex mb-2">
                      <Input
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        placeholder={translate("Add a feature (e.g., Swimming Pool)")}
                        className="mr-2"
                      />
                      <Button type="button" onClick={handleAddFeature} size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                          <span className="text-sm">{feature}</span>
                          <Button 
                            type="button" 
                            variant="ghost" 
                            size="sm" 
                            className="h-5 w-5 p-0 ml-1" 
                            onClick={() => handleRemoveFeature(feature)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                      {features.length === 0 && (
                        <p className="text-gray-500 text-sm italic">{translate("No features added yet")}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Images */}
                  <div className="pt-4 border-t">
                    <h3 className="text-lg font-semibold mb-4">{translate("Property Images")}</h3>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600">
                          {translate("Drag and drop images, or click to select files")}
                        </p>
                        <Input
                          id="images"
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-2"
                          onClick={() => document.getElementById("images")?.click()}
                        >
                          {translate("Select Files")}
                        </Button>
                      </div>
                      
                      {imagePreviewUrls.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          {imagePreviewUrls.map((url, index) => (
                            <div key={index} className="relative">
                              <img
                                src={url}
                                alt={`Property preview ${index + 1}`}
                                className="h-32 w-full object-cover rounded-md"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-1 right-1 h-6 w-6"
                                onClick={() => handleRemoveImage(index)}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-luxury-gold hover:bg-luxury-gold/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {translate("Uploading...")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Check className="mr-2 h-4 w-4" /> {translate("Upload Property")}
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyUpload;
