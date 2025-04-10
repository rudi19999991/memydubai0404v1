import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { createClient } from '@supabase/supabase-js';

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

// Initialize Supabase client
const supabaseUrl = 'https://fskuckqbsbgkbuokjwbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3Vja3Fic2Jna2J1b2tqd2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMTczNTEsImV4cCI6MjA1OTg5MzM1MX0.JArjCYN9VV1esI_PKAhCaemfZeqhIDBoAkWZRjd_jXk';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Blog = () => {
  const { translate } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
        return;
      }

      if (posts) {
        setBlogPosts(posts as BlogPost[]);
        const featured = posts.find((post) => post.featured) || posts[0];
        setFeaturedPost(featured as BlogPost);
      }
    };

    fetchBlogPosts();
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
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button variant="default" className="w-fit bg-luxury-gold hover:bg-luxury-gold/90">
                      {translate("Read Article")}
                    </Button>
                  </Link>
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
                    <Link to={`/blog/${post.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                        {translate("Read More")}
                      </Button>
                    </Link>
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
