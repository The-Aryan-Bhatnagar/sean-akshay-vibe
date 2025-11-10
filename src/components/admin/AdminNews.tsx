import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  published_date: string;
}

const AdminNews = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .order('published_date', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setArticles(data || []);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleAdd = async () => {
    if (!title || !content || !publishedDate) {
      toast({ title: 'Error', description: 'Title, content, and date are required', variant: 'destructive' });
      return;
    }

    setLoading(true);
    let imageUrl = null;

    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(fileName, file);

      if (uploadError) {
        toast({ title: 'Error', description: uploadError.message, variant: 'destructive' });
        setLoading(false);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('news-images')
        .getPublicUrl(fileName);
      
      imageUrl = publicUrl;
    }

    const { error } = await supabase
      .from('news_articles')
      .insert({
        title,
        content,
        image_url: imageUrl,
        published_date: publishedDate,
      });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Article added successfully' });
      setTitle('');
      setContent('');
      setPublishedDate('');
      setFile(null);
      fetchArticles();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('news_articles').delete().eq('id', id);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Article deleted successfully' });
      fetchArticles();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add News Article</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="articleTitle">Title</Label>
            <Input
              id="articleTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
            />
          </div>
          <div>
            <Label htmlFor="publishedDate">Published Date</Label>
            <Input
              id="publishedDate"
              type="date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="newsImage">Image (Optional)</Label>
            <Input
              id="newsImage"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <Button onClick={handleAdd} disabled={loading}>
            <Plus className="mr-2 h-4 w-4" />
            Add Article
          </Button>
        </div>
      </Card>

      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id} className="p-4">
            <div className="flex gap-4">
              {article.image_url && (
                <img
                  src={article.image_url}
                  alt={article.title}
                  className="w-32 h-32 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {new Date(article.published_date).toLocaleDateString()}
                </p>
                <p className="text-sm line-clamp-3">{article.content}</p>
              </div>
              <Button
                onClick={() => handleDelete(article.id)}
                variant="destructive"
                size="sm"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;
