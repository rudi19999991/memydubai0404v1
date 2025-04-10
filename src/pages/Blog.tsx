
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

const Blog = () => {
  const { translate } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Load blog posts from localStorage if available
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    if (storedPosts.length > 0) {
      setBlogPosts(storedPosts);
      
      // Find the most recent featured post, or just the most recent post
      const featured = storedPosts.find((post: BlogPost) => post.featured) || storedPosts[0];
      setFeaturedPost(featured);
    } else {
      // Sample blog posts if no stored posts
      const samplePosts: BlogPost[] = [
        {
          id: "blog-1",
          title: "Dubai Real Estate Market Update 2025",
          excerpt: "Explore the latest trends and developments in the Dubai real estate market.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc purus aliquam nisl, eget aliquam nunc nisl eu nisi.",
          date: "April 5, 2025",
          readTime: "5 min read",
          imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
          category: "Market Updates",
          featured: true
        },
        {
          id: "blog-2",
          title: "Top 5 Investment Areas in Dubai for 2025",
          excerpt: "Discover the most promising areas for property investment in Dubai.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc purus aliquam nisl, eget aliquam nunc nisl eu nisi.",
          date: "March 15, 2025",
          readTime: "8 min read",
          imageUrl: "https://images.unsplash.com/photo-1546412414-e1885e51cde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
          category: "Investment Insights",
          featured: false
        },
        {
          id: "blog-3",
          title: "Guide to Setting Up a Business in Dubai",
          excerpt: "Everything you need to know about establishing your business in Dubai.",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc purus aliquam nisl, eget aliquam nunc nisl eu nisi.",
          date: "February 28, 2025",
          readTime: "10 min read",
          imageUrl: "https://images.unsplash.com/photo-1582281171754-405cb2a75fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
          category: "Business Setup",
          featured: false
        }
      ];
      
      setBlogPosts(samplePosts);
      setFeaturedPost(samplePosts[0]);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-12">
        <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy/80 text-white py-16">
          <div className="luxury-container">
            <h1 className="text-4xl font-bold mb-4">{translate("MeMy Dubai Blog")}</h1>
            <p className="text-lg max-w-3xl">
              {translate("Insights, tips, and updates on Dubai real estate, business opportunities, and luxury lifestyle.")}
            </p>
          </div>
        </section>
        
        <div className="luxury-container py-12">
          {featuredPost && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{translate("Featured Article")}</h2>
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <img 
                    src={featuredPost.imageUrl} 
                    alt={featuredPost.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <Badge className="mb-3 w-fit bg-luxury-gold">
                    {translate(featuredPost.category)}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center mr-4">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button variant="default" className="w-fit bg-luxury-gold hover:bg-luxury-gold/90">
                    {translate("Read Article")}
                  </Button>
                </div>
              </div>
            </section>
          )}
          
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{translate("Latest Articles")}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-luxury-gold">
                        {translate(post.category)}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500 flex items-center">
                      <CalendarDays className="h-3.5 w-3.5 mr-1" /> {post.date}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                      {translate("Read More")}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;