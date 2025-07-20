import React, { useState } from 'react';
import { supabase } from '@/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

const BlogPostForm = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [readtime, setReadtime] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    let imageurl = '';

    // Upload image if selected
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
      imageurl = data?.publicUrl || '';
    }

    // Insert new blog post
    const { error: insertError } = await supabase.from('blog_posts').insert([
      {
        title,
        excerpt,
        content,
        category,
        readtime,
        featured,
        imageurl,
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
    <div className="luxury-container pt-20 pb-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{translate('Create New Blog Post')}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label>{translate('Title')}</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>{translate('Excerpt')}</Label>
          <Textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>{translate('Content')}</Label>
          <Textarea
            className="min-h-[200px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>{translate('Category')}</Label>
          <Input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>{translate('Read Time (e.g. 5 min read)')}</Label>
          <Input
            value={readtime}
            onChange={(e) => setReadtime(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center gap-3">
          <Switch
            checked={featured}
            onCheckedChange={setFeatured}
            id="featured"
          />
          <Label htmlFor="featured">{translate('Featured Post')}</Label>
        </div>

        <div>
          <Label>{translate('Cover Image')}</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>

        <Button
          type="submit"
          disabled={uploading}
          className="bg-luxury-gold hover:bg-luxury-gold/90"
        >
          {uploading ? translate('Uploading...') : translate('Publish')}
        </Button>
      </form>
    </div>
  );
};

export default BlogPostForm;
