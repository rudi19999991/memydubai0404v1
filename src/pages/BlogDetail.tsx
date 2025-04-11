import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/supabaseClient';
import { CalendarDays, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { translate } = useLanguage();

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        console.error("Post not found or Supabase error:", error);
        return;
      }

      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center pt-20">Loading post...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 pb-12 luxury-container">
        <article className="max-w-4xl mx-auto">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8 shadow-md"
          />
          <Badge className="bg-luxury-gold mb-4">{translate(post.category)}</Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span className="mr-4">{post.date}</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <div
            className="prose max-w-none prose-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
