import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus } from 'lucide-react';

interface TourDate {
  id: string;
  date: string;
  city: string;
  country: string;
  venue: string;
  ticket_url: string | null;
}

const AdminTour = () => {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [venue, setVenue] = useState('');
  const [ticketUrl, setTicketUrl] = useState('');
  const { toast } = useToast();

  const fetchTourDates = async () => {
    const { data, error } = await supabase
      .from('tour_dates')
      .select('*')
      .order('date');
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      setTourDates(data || []);
    }
  };

  useEffect(() => {
    fetchTourDates();
  }, []);

  const handleAdd = async () => {
    if (!date || !city || !country || !venue) {
      toast({ title: 'Error', description: 'All fields except ticket URL are required', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from('tour_dates')
      .insert({
        date,
        city,
        country,
        venue,
        ticket_url: ticketUrl || null,
      });

    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Tour date added successfully' });
      setDate('');
      setCity('');
      setCountry('');
      setVenue('');
      setTicketUrl('');
      fetchTourDates();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('tour_dates').delete().eq('id', id);
    
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success', description: 'Tour date deleted successfully' });
      fetchTourDates();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Add Tour Date</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="venue">Venue</Label>
            <Input
              id="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="ticketUrl">Ticket URL (Optional)</Label>
            <Input
              id="ticketUrl"
              value={ticketUrl}
              onChange={(e) => setTicketUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>
        <Button onClick={handleAdd} disabled={loading} className="mt-4">
          <Plus className="mr-2 h-4 w-4" />
          Add Tour Date
        </Button>
      </Card>

      <div className="space-y-4">
        {tourDates.map((tour) => (
          <Card key={tour.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">
                  {new Date(tour.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h3>
                <p className="text-muted-foreground">
                  {tour.city}, {tour.country}
                </p>
                <p className="text-sm">{tour.venue}</p>
                {tour.ticket_url && (
                  <a
                    href={tour.ticket_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Tickets
                  </a>
                )}
              </div>
              <Button
                onClick={() => handleDelete(tour.id)}
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

export default AdminTour;
