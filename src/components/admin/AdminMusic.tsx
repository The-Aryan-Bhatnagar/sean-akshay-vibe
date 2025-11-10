import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus } from 'lucide-react';

interface MusicVideo {
  id: string;
  youtube_id: string;
  title: string;
  description: string | null;
  display_order: number;
}

const AdminMusic = () => {
  const [videos, setVideos] = useState<MusicVideo[]>([]);
  const [loading, setLoading] = useState(false);
  const [youtubeId, setYoutubeId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('music_videos')
      .select('*')
      .order('display_order');
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setVideos(data || []);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleAdd = async () => {
    if (!youtubeId || !title) {
      toast({ title: 'Error', description: 'YouTube ID and title are required', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from('music_videos')
      .insert({
        youtube_id: youtubeId,
        title,
        description: description || null,
        display_order: videos.length,
      });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Video added successfully' });
      setYoutubeId('');
      setTitle('');
      setDescription('');
      fetchVideos();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('music_videos').delete().eq('id', id);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Video deleted successfully' });
      fetchVideos();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add Music Video</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="youtubeId">YouTube Video ID</Label>
            <Input
              id="youtubeId"
              value={youtubeId}
              onChange={(e) => setYoutubeId(e.target.value)}
              placeholder="e.g., pBkWalmaDbE"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Extract from URL: youtube.com/watch?v=<strong>VIDEO_ID</strong>
            </p>
          </div>
          <div>
            <Label htmlFor="videoTitle">Title</Label>
            <Input
              id="videoTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="videoDescription">Description (Optional)</Label>
            <Textarea
              id="videoDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button onClick={handleAdd} disabled={loading}>
            <Plus className="mr-2 h-4 w-4" />
            Add Video
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <Card key={video.id} className="p-4">
            <div className="aspect-video mb-2">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtube_id}`}
                className="w-full h-full rounded"
                allowFullScreen
              />
            </div>
            <h3 className="font-semibold">{video.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{video.description}</p>
            <p className="text-xs text-muted-foreground mb-2">ID: {video.youtube_id}</p>
            <Button
              onClick={() => handleDelete(video.id)}
              variant="destructive"
              size="sm"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminMusic;
