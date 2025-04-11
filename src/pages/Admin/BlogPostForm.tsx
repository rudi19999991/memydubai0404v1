import React, { useState } from 'react';
import { supabase } from '@/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const BlogPostForm = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [readTime, setReadTime] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let imageUrl = '';

    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, imageFile);

      if (uploadError) {
        console.error('Image upload failed:', uploadError);
        setUploading(false);
        return;
      }

      const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
      imageUrl = data.publicUrl;
    }

    const { error: insertError } = await supabase.from('blog_posts').insert([
      {
        title,
        excerpt,
        content,
        category,
        readTime,
        featured,
        imageUrl,
        date: new Date().toISOString().split('T')[0],
      },
    ]);

    if (insertError) {
      console.error('Error inserting blog post:', insertError);
    } else {
      navigate('/blog');
    }

    setUploading(false);
  };

  return (
    <div className="luxury-container pt-20 pb-12">
      <h1 className="text-3xl font-bold mb-6">{translate('Create New Blog Post')}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label={translate('Title')}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          label={translate('Excerpt')}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        />
        <Textarea
          label={translate('Content')}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Input
          label={translate('Category')}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Input
          label={translate('Read Time')}
          value={readTime}
          onChange={(e) => setReadTime(e.target.value)}
          required
        />
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <span>{translate('Featured')}</span>
          </label>
        </div>
        <Input
          label={translate('Image')}
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
        />
        <Button type="submit" disabled={uploading}>
          {uploading ? translate('Uploading...') : translate('Publish')}
        </Button>
      </form>
    </div>
  );
};

export default BlogPostForm;
