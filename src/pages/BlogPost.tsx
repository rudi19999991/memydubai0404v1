import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarDays, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Supabase setup
const supabaseUrl = 'https://fskuckqbsbgkbuokjwbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Your full key here
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readtime: string;
  imageurl: string;
  category: string;
  featured: boolean;
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
      } else {
        setPost(data as BlogPost);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20 pb-12 luxury-container">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
          />
          <Badge className="mb-4 bg-luxury-gold">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <div className="flex items-center mr-4">
              <CalendarDays className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="prose max-w-none text-lg">
            {post.content}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
              <a href="/blog">← Back to Blog</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
