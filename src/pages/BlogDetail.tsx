import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/supabaseClient';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const { id } = useParams();
  const { translate } = useLanguage();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const isExternal = id?.startsWith("ext-");

  useEffect(() => {
    if (!id) return;

    if (isExternal) {
      const externalUrl = id.replace("ext-", "").replace(/_/g, "/");
      window.location.href = `https://${externalUrl}`;
      return;
    }

    const fetchPost = async () => {
      const { data, error } = await supabase.from('blog_posts').select('*').eq('id', id).single();

      if (error) {
        console.error('Error fetching blog post:', error);
      } else {
        setPost(data);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-8 w-8 mb-4" />
        <p>{translate("Loading article...")}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl text-red-600">{translate("Article not found.")}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="luxury-container pt-20 pb-12">
        <article className="prose max-w-3xl mx-auto">
          <h1>{post.title}</h1>
          <p className="text-sm text-gray-500">{post.date} · {post.readTime}</p>
          {post.imageUrl && (
            <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg my-6" />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8">
            <Button onClick={() => window.history.back()} className="bg-luxury-gold">
              {translate("Back to Blog")}
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;