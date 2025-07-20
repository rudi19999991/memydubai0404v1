import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, Check, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogUpload = () => {
  const { translate } = useLanguage();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    imageUrl: '',
    readTime: '',
    date: '',
    featured: false,
  });

  const [savedPosts, setSavedPosts] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    setSavedPosts(stored);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: `blog${Date.now()}`,
      ...formData,
    };
    const updated = [...savedPosts, newPost];
    localStorage.setItem('blogPosts', JSON.stringify(updated));
    setSavedPosts(updated);

    toast({
      title: translate('Blog Uploaded Successfully'),
      description: translate('Your blog post is now saved locally and visible on the blog page.'),
    });

    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      imageUrl: '',
      readTime: '',
      date: '',
      featured: false,
    });
  };

  return (
    <div className="mx-auto max-w-3xl py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">{translate('Upload Blog Post')}</h1>
        <p className="text-gray-600 mt-2">{translate('Manually add a blog post to your site.')}</p>
      </div>

      <Card>
        <CardHeader className="bg-luxury-navy text-white">
          <CardTitle className="flex items-center">
            <Newspaper className="mr-2 h-5 w-5" /> {translate('New Blog Post')}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">{translate('Title')}</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div>
              <Label htmlFor="excerpt">{translate('Excerpt')}</Label>
              <Textarea id="excerpt" name="excerpt" value={formData.excerpt} onChange={handleChange} rows={3} required />
            </div>

            <div>
              <Label htmlFor="content">{translate('Content')}</Label>
              <Textarea id="content" name="content" value={formData.content} onChange={handleChange} rows={8} required />
            </div>

            <div>
              <Label htmlFor="category">{translate('Category')}</Label>
              <Input id="category" name="category" value={formData.category} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="imageUrl">{translate('Image URL')}</Label>
              <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">{translate('Date')}</Label>
                <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="readTime">{translate('Read Time (min)')}</Label>
                <Input id="readTime" name="readTime" value={formData.readTime} onChange={handleChange} />
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} className="mr-2" />
              <Label htmlFor="featured">{translate('Mark as Featured')}</Label>
            </div>

            <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
              <Check className="mr-2 h-4 w-4" /> {translate('Upload Blog')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogUpload;