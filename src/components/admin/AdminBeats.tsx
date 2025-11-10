import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus } from 'lucide-react';

interface Beat {
  id: string;
  title: string;
  bpm: number;
  key: string;
  price: number;
  audio_url: string | null;
  purchase_url: string | null;
}

const AdminBeats = () => {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [bpm, setBpm] = useState('');
  const [key, setKey] = useState('');
  const [price, setPrice] = useState('');
  const [audioUrl, setAudioUrl] = useState('');
  const [purchaseUrl, setPurchaseUrl] = useState('');
  const { toast } = useToast();

  const fetchBeats = async () => {
    const { data, error } = await supabase
      .from('beats')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setBeats(data || []);
    }
  };

  useEffect(() => {
    fetchBeats();
  }, []);

  const handleAdd = async () => {
    if (!title || !bpm || !key || !price) {
      toast({ title: 'Error', description: 'Title, BPM, Key, and Price are required', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from('beats')
      .insert({
        title,
        bpm: parseInt(bpm),
        key,
        price: parseFloat(price),
        audio_url: audioUrl || null,
        purchase_url: purchaseUrl || null,
      });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Beat added successfully' });
      setTitle('');
      setBpm('');
      setKey('');
      setPrice('');
      setAudioUrl('');
      setPurchaseUrl('');
      fetchBeats();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('beats').delete().eq('id', id);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Beat deleted successfully' });
      fetchBeats();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add Beat</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="beatTitle">Title</Label>
            <Input
              id="beatTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="bpm">BPM</Label>
            <Input
              id="bpm"
              type="number"
              value={bpm}
              onChange={(e) => setBpm(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="key">Key</Label>
            <Input
              id="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="e.g., C Minor"
            />
          </div>
          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="audioUrl">Audio URL (Optional)</Label>
            <Input
              id="audioUrl"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="purchaseUrl">Purchase URL (Optional)</Label>
            <Input
              id="purchaseUrl"
              value={purchaseUrl}
              onChange={(e) => setPurchaseUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>
        <Button onClick={handleAdd} disabled={loading} className="mt-4">
          <Plus className="mr-2 h-4 w-4" />
          Add Beat
        </Button>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {beats.map((beat) => (
          <Card key={beat.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{beat.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {beat.bpm} BPM • {beat.key}
                </p>
                <p className="text-lg font-bold text-primary">${beat.price}</p>
                {beat.audio_url && (
                  <a
                    href={beat.audio_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline block"
                  >
                    Listen
                  </a>
                )}
                {beat.purchase_url && (
                  <a
                    href={beat.purchase_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline block"
                  >
                    Purchase Link
                  </a>
                )}
              </div>
              <Button
                onClick={() => handleDelete(beat.id)}
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

export default AdminBeats;
