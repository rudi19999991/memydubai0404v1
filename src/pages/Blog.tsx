
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  Clock, 
  ArrowRight, 
  PlayCircle, 
  Building, 
  Landmark, 
  TrendingUp,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  featured?: boolean;
  videoUrl?: string;
}

const Blog = () => {
  const { translate } = useLanguage();

  const blogPosts: BlogPost[] = [
    {
      id: "post1",
      title: "Dubai Real Estate Market Update Q2 2023",
      excerpt: "Explore the latest trends and insights from Dubai's booming real estate market in the second quarter of 2023.",
      date: "July 15, 2023",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      category: "Market Updates",
      featured: true
    },
    {
      id: "post2",
      title: "The Rise of Dubai Hills: Investment Opportunity",
      excerpt: "Dubai Hills is quickly becoming one of the city's most sought-after residential communities. Here's why investors are taking notice.",
      date: "June 28, 2023",
      readTime: "4 min read",
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      category: "Investment Insights"
    },
    {
      id: "post3",
      title: "Guide to Setting Up a Company in DIFC",
      excerpt: "Learn the step-by-step process for establishing your business in Dubai International Financial Centre, one of the world's leading financial hubs.",
      date: "June 15, 2023",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1582281171754-534e23d0f483?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      category: "Business Setup"
    },
    {
      id: "post4",
      title: "Cryptocurrency and Dubai Real Estate: What You Need to Know",
      excerpt: "As cryptocurrency adoption grows, Dubai developers are increasingly accepting digital currencies for property purchases. Here's what investors should understand.",
      date: "May 30, 2023",
      readTime: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
      category: "Crypto Investing",
      featured: true
    },
    {
      id: "post5",
      title: "Property Tour: Palm Jumeirah Signature Villas",
      excerpt: "Take a virtual tour of the exclusive Signature Villas on Palm Jumeirah, offering luxury waterfront living at its finest.",
      date: "May 18, 2023",
      readTime: "3 min read",
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      category: "Property Spotlight",
      videoUrl: "https://player.vimeo.com/external/517090081.sd.mp4?s=47a74bbf6eb93c94b6bbb5322cf41860238724b5&profile_id=164&oauth2_token_id=57447761"
    },
    {
      id: "post6",
      title: "New Mortgage Regulations for Foreign Investors",
      excerpt: "Recent changes to mortgage regulations are making it easier for foreign investors to finance properties in Dubai. We break down what this means for international buyers.",
      date: "May 5, 2023",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      category: "Financing",
      videoUrl: "https://player.vimeo.com/external/499006811.sd.mp4?s=d2ec7e5ee73a44ade1a8bd0ac9f0525c42942842&profile_id=164&oauth2_token_id=57447761"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const videoPosts = blogPosts.filter(post => post.videoUrl);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Function to get category icon
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Market Updates":
        return <TrendingUp className="h-4 w-4" />;
      case "Investment Insights":
        return <TrendingUp className="h-4 w-4" />;
      case "Business Setup":
        return <Building className="h-4 w-4" />;
      case "Crypto Investing":
        return <CreditCard className="h-4 w-4" />;
      case "Property Spotlight":
        return <Building className="h-4 w-4" />;
      case "Financing":
        return <Landmark className="h-4 w-4" />;
      default:
        return <Building className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Latest News & Property Insights")}
          subtitle={translate("Stay informed about Dubai real estate market, investment opportunities, and expert advice")}
          videoUrl="https://player.vimeo.com/external/498666058.sd.mp4?s=f4f8e6332aaa3cbe968e8d825a687192461225a2&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://assets.travelcenter.uk/images/flight-destinations/main-slider/Dubai/dubai-hero-tab-hor-3.webp"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">{translate("Featured Articles")}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <div key={post.id} className="group relative overflow-hidden rounded-xl shadow-md">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 text-white">
                        <Badge className="mb-3 self-start bg-luxury-gold text-white hover:bg-luxury-gold/90">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-luxury-gold transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-200 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-300">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-white hover:text-luxury-gold hover:bg-transparent"
                          >
                            {translate("Read More")}
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Video Updates */}
            {videoPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">{translate("Property Video Updates")}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoPosts.map((post) => (
                    <div key={post.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-luxury-gold/90 rounded-full p-3 transform transition-transform group-hover:scale-110">
                            <PlayCircle className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <Badge className="mb-3 bg-luxury-navy text-white hover:bg-luxury-navy/90">
                          {post.category}
                        </Badge>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-luxury-gold transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <Button variant="outline" size="sm" className="mt-2 w-full">
                          {translate("Watch Video")}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Latest Articles */}
            <div>
              <h2 className="text-2xl font-bold mb-8">{translate("Latest Articles")}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <div key={post.id} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-center mb-3">
                        <Badge className="flex items-center gap-1 bg-gray-100 text-gray-800 hover:bg-gray-200">
                          {getCategoryIcon(post.category)}
                          {post.category}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-luxury-navy hover:text-luxury-gold hover:bg-transparent p-0"
                        >
                          {translate("Read More")}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Related Services Section */}
            <div className="mt-20 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{translate("Explore Related Services")}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Building className="h-8 w-8 text-luxury-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">{translate("Premium Properties")}</h3>
                  <p className="text-gray-600 mb-4">
                    {translate("Discover our exclusive collection of luxury properties in Dubai's prime locations.")}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/properties">
                      {translate("Browse Properties")}
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <TrendingUp className="h-8 w-8 text-luxury-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">{translate("ROI Analysis")}</h3>
                  <p className="text-gray-600 mb-4">
                    {translate("Get detailed return on investment analysis for potential property investments.")}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/roi">
                      {translate("Calculate ROI")}
                    </Link>
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <CreditCard className="h-8 w-8 text-luxury-gold mb-4" />
                  <h3 className="text-lg font-bold mb-2">{translate("Cryptocurrency Purchases")}</h3>
                  <p className="text-gray-600 mb-4">
                    {translate("Learn how to buy Dubai properties using Bitcoin, Ethereum and other cryptocurrencies.")}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/crypto-buying">
                      {translate("Crypto Guide")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
