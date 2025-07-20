import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RSS_FEED_URL = "https://api.rss2json.com/v1/api.json?rss_url=https://www.arabianbusiness.com/feed"; // Example feed

const Blog = () => {
  const { translate } = useLanguage();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(RSS_FEED_URL)
      .then(res => res.json())
      .then(data => {
        setPosts(data.items.slice(0, 6));
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load blog feed:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center">{translate("Latest Blog Posts")}</h1>
      <p className="text-center text-gray-500 mb-8">
        {translate("Stay updated with the latest news and insights.")}
      </p>

      {loading ? (
        <div className="text-center py-20">
          <LoaderCircle className="h-8 w-8 animate-spin mx-auto text-gray-400" />
          <p className="mt-4 text-gray-500">{translate("Loading blog posts...")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Card key={idx} className="overflow-hidden">
              <img
                src={post.thumbnail || "/placeholder.webp"}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg font-bold line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 line-clamp-3">
                {post.description.replace(/<[^>]+>/g, "")}
              </CardContent>
              <div className="p-4">
                <Link
                  to={"/external?url=" + encodeURIComponent(post.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-gold font-semibold hover:underline"
                >
                  {translate("Read more")}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
