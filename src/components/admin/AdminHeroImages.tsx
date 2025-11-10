import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Upload } from 'lucide-react';

interface HeroImage {
  id: string;
  image_url: string;
  alt_text: string | null;
  display_order: number;
  is_active: boolean;
}

const AdminHeroImages = () => {
  const [images, setImages] = useState<HeroImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [altText, setAltText] = useState('');
  const { toast } = useToast();

  const fetchImages = async () => {
    const { data, error } = await supabase
      .from('hero_images')
      .select('*')
      .order('display_order');
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setImages(data || []);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!file) {
      toast({ title: 'Error', description: 'Please select a file', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('hero-images')
      .upload(filePath, file);

    if (uploadError) {
      toast({ title: 'Error', description: uploadError.message, variant: 'destructive' });
      setLoading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('hero-images')
      .getPublicUrl(filePath);

    const { error: insertError } = await supabase
      .from('hero_images')
      .insert({
        image_url: publicUrl,
        alt_text: altText || null,
        display_order: images.length,
      });

    if (insertError) {
      toast({ title: 'Error', description: insertError.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Image uploaded successfully' });
      setFile(null);
      setAltText('');
      fetchImages();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    const { error } = await supabase.from('hero_images').delete().eq('id', id);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Image deleted successfully' });
      fetchImages();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Upload Hero Image</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="heroImage">Image File</Label>
            <Input
              id="heroImage"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
          <div>
            <Label htmlFor="altText">Alt Text (Optional)</Label>
            <Input
              id="altText"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Description of the image"
            />
          </div>
          <Button onClick={handleUpload} disabled={loading}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Card key={image.id} className="p-4">
            <img
              src={image.image_url}
              alt={image.alt_text || 'Hero image'}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <p className="text-sm text-muted-foreground mb-2">
              {image.alt_text || 'No alt text'}
            </p>
            <Button
              onClick={() => handleDelete(image.id, image.image_url)}
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

export default AdminHeroImages;
