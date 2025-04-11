import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Supabase setup
const supabaseUrl = 'https://fskuckqbsbgkbuokjwbu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZza3Vja3Fic2Jna2J1b2tqd2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMTczNTEsImV4cCI6MjA1OTg5MzM1MX0.JArjCYN9VV1esI_PKAhCaemfZeqhIDBoAkWZRjd_jXk';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 🛡 Set your admin password here
const ADMIN_PASSWORD = 'letmein123'; // <--- You can change it to whatever you want

const Admin = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('');
  const [featured, setFeatured] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setUnlocked(true);
    } else {
      alert('Incorrect password.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from('blog_posts').insert([
      {
        title,
        excerpt,
        content,
        date,
        read_time: readTime,
        image_url: imageUrl,
        category,
        featured,
      }
    ]);

    if (error) {
      console.error(error);
      setError(error.message);
    } else {
      setSuccess(true);
      setError(null);
      setTitle('');
      setExcerpt('');
      setContent('');
      setDate('');
      setReadTime('');
      setImageUrl('');
      setCategory('');
      setFeatured(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20 pb-12 luxury-container">
        {!unlocked ? (
          <form onSubmit={handlePasswordSubmit} className="max-w-md mx-auto mt-20">
            <h1 className="text-3xl font-bold mb-6 text-center">Admin Login</h1>
            <Input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="mt-4 w-full bg-luxury-gold hover:bg-luxury-gold/90">
              Unlock
            </Button>
          </form>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-8">Admin Panel - Create Blog Post</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Input
                placeholder="Excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                required
              />
              <Textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="md:col-span-2"
                required
              />
              <Input
                placeholder="Publish Date (YYYY-MM-DD)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Input
                placeholder="Read Time (e.g., 5 min read)"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                required
              />
              <Input
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
              <Input
                placeholder="Category (e.g., Market Updates)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  id="featured"
                />
                <label htmlFor="featured" className="text-sm">Featured?</label>
              </div>

              <Button type="submit" className="md:col-span-2 bg-luxury-gold hover:bg-luxury-gold/90">
                Publish Post
              </Button>

              {success && (
                <p className="text-green-500 md:col-span-2 mt-4">✅ Post created successfully!</p>
              )}
              {error && (
                <p className="text-red-500 md:col-span-2 mt-4">❌ {error}</p>
              )}
            </form>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
