
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

const BlogPost = () => {
  const { translate } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load blog posts from localStorage
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    
    if (storedPosts.length > 0) {
      const foundPost = storedPosts.find((post: BlogPost) => post.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
    }
    
    setLoading(false);
  }, [id]);

  const handleBack = () => {
    navigate('/blog');
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 luxury-container">
          <div className="flex items-center justify-center h-64">
            <p>{translate("Loading...")}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 pb-12 luxury-container">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">{translate("Blog post not found")}</h2>
            <Button onClick={handleBack} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {translate("Back to Blog")}
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
      
      <main className="flex-grow pt-20 pb-12">
        <div className="luxury-container">
          <Button 
            variant="outline" 
            onClick={handleBack}
            className="mb-8 flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {translate("Back to Blog")}
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4 bg-luxury-gold">
                {translate(post.category)}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full aspect-video object-cover rounded-lg shadow-md mb-8"
              />
              
              <div className="prose max-w-none">
                <p className="text-xl font-medium mb-6">
                  {post.excerpt}
                </p>
                
                <div className="whitespace-pre-line">
                  {post.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
