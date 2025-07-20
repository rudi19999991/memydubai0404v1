import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { translate } = useLanguage();
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);

  useEffect(() => {
    const fetchRSSPosts = async () => {
      try {
        const sources = [
          'https://www.arabianbusiness.com/tag/dubai-real-estate/rss',
          'https://www.khaleejtimes.com/business/real-estate/rss',
          'https://www.thenationalnews.com/property/rss',
        ];

        const allPosts = await Promise.all(
          sources.map(async (url) => {
            const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
            const data = await response.json();
            return data.items || [];
          })
        );

        const merged = allPosts.flat().filter((item) =>
          /dubai|uae|property|real estate/i.test(item.title + item.description)
        );

        const sorted = merged.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        setBlogPosts(sorted);
        setFeaturedPost(sorted[0]);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      }
    };

    fetchRSSPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 pb-12">
        <section className="bg-gradient-to-b from-luxury-navy to-luxury-navy/80 text-white py-16">
          <div className="luxury-container">
            <h1 className="text-4xl font-bold mb-4">{translate('MeMy Dubai Blog')}</h1>
            <p className="text-lg max-w-3xl">
              {translate('Insights, tips, and updates on Dubai real estate, business opportunities, and luxury lifestyle.')}
            </p>
          </div>
        </section>

        <div className="luxury-container py-12">
          {featuredPost && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">{translate('Featured Article')}</h2>
              <div className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                  <img
                    src={featuredPost.thumbnail || featuredPost.enclosure?.link || '/placeholder.jpg'}
                    alt={featuredPost.title}
                    className="w-full h-96 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col justify-center">
                  <Badge className="mb-3 w-fit bg-luxury-gold">{translate('Real Estate')}</Badge>
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-4">{featuredPost.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center mr-4">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{new Date(featuredPost.pubDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <a href={featuredPost.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" className="w-fit bg-luxury-gold hover:bg-luxury-gold/90">
                      {translate('Read Article')}
                    </Button>
                  </a>
                </div>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold mb-6">{translate('Latest Articles')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <Card key={idx} className="overflow-hidden flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.thumbnail || post.enclosure?.link || '/placeholder.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-luxury-gold">{translate('Real Estate')}</Badge>
                      <div className="text-sm text-gray-500">
                        {new Date(post.pubDate).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-500 flex items-center">
                      <CalendarDays className="h-3.5 w-3.5 mr-1" /> {new Date(post.pubDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                        {translate('Read More')}
                      </Button>
                    </a>
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