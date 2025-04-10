import React, { useState } from "react";
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
import { Upload, Plus, X, Check, BookText, CalendarDays, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogUpload = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    date: new Date().toISOString().split('T')[0],
    readTime: "5",
    category: "",
    featured: false,
  });
  
  const [thumbnailImage, setThumbnailImage] = useState<File | null>(null);
  const [thumbnailPreviewUrl, setThumbnailPreviewUrl] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Market Updates",
    "Investment Insights",
    "Business Setup",
    "Crypto Investing",
    "Property Spotlight",
    "Financing",
    "Dubai Lifestyle",
    "Legal Advice"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setThumbnailImage(file);
      setThumbnailPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const dateObj = new Date(formData.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    const newBlogPost = {
      id: `blog-${Date.now()}`,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      date: formattedDate,
      readTime: `${formData.readTime} min read`,
      imageUrl: thumbnailPreviewUrl || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      category: formData.category,
      featured: formData.featured
    };
    
    console.log("New blog post data:", newBlogPost);
    
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const updatedPosts = [...existingPosts, newBlogPost];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: translate("Blog Article Published"),
        description: translate("Your article has been published successfully and is now visible in the blog section."),
      });
      
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        date: new Date().toISOString().split('T')[0],
        readTime: "5",
        category: "",
        featured: false,
      });
      setThumbnailImage(null);
      setThumbnailPreviewUrl("");
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{translate("Blog Article Upload")}</h1>
        <p className="text-gray-600 mt-2">
          {translate("Create and publish a new blog article")}
        </p>
        <div className="gold-separator mx-auto mt-4" />
      </div>
      
      <div className="mb-8 flex gap-4">
        <Button 
          variant="outline"
          className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10"
          asChild
        >
          <Link to="/blog">
            {translate("View Blog")}
          </Link>
        </Button>
        
        <Button 
          variant="outline"
          className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy/10"
          asChild
        >
          <Link to="/admin/property-upload">
            {translate("Switch to Property Upload")}
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader className="bg-luxury-navy text-white">
          <CardTitle className="flex items-center">
            <BookText className="mr-2 h-5 w-5" /> {translate("New Article")}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">{translate("Article Title")}</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder={translate("Enter article title")}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="excerpt">{translate("Short Excerpt")}</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder={translate("A brief summary of the article (appears in listings)")}
                  rows={2}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category">{translate("Category")}</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder={translate("Select category")} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {translate(category)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="readTime">{translate("Read Time (minutes)")}</Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    type="number"
                    min="1"
                    max="60"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date">{translate("Publication Date")}</Label>
                  <div className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-gray-400" />
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 h-full pt-6">
                  <input
                    type="checkbox"
                    id="featured"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-luxury-gold focus:ring-luxury-gold"
                  />
                  <Label htmlFor="featured" className="cursor-pointer">
                    {translate("Featured Article")} 
                    <span className="text-sm text-gray-500 ml-1">
                      ({translate("Appears in the featured section")})
                    </span>
                  </Label>
                </div>
              </div>
              
              <div>
                <Label htmlFor="content">{translate("Article Content")}</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder={translate("Write your article content here...")}
                  rows={10}
                  required
                />
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <h3 className="text-lg font-semibold mb-4">{translate("Thumbnail Image")}</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-10 w-10 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    {translate("Drag and drop an image, or click to select")}
                  </p>
                  <Input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleThumbnailUpload}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2"
                    onClick={() => document.getElementById("thumbnail")?.click()}
                  >
                    {translate("Select Image")}
                  </Button>
                </div>
                
                {thumbnailPreviewUrl && (
                  <div className="relative">
                    <img
                      src={thumbnailPreviewUrl}
                      alt="Thumbnail preview"
                      className="h-48 w-full object-cover rounded-md"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8"
                      onClick={() => {
                        setThumbnailImage(null);
                        setThumbnailPreviewUrl("");
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
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
                  {translate("Publishing...")}
                </span>
              ) : (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" /> {translate("Publish Article")}
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogUpload;