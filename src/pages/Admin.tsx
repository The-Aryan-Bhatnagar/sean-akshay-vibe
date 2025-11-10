import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdminHeroImages from '@/components/admin/AdminHeroImages';
import AdminGallery from '@/components/admin/AdminGallery';
import AdminMusic from '@/components/admin/AdminMusic';
import AdminTour from '@/components/admin/AdminTour';
import AdminBeats from '@/components/admin/AdminBeats';
import AdminNews from '@/components/admin/AdminNews';

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="hero">Hero Images</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="tour">Tour</TabsTrigger>
            <TabsTrigger value="beats">Beats</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <AdminHeroImages />
          </TabsContent>

          <TabsContent value="gallery">
            <AdminGallery />
          </TabsContent>

          <TabsContent value="music">
            <AdminMusic />
          </TabsContent>

          <TabsContent value="tour">
            <AdminTour />
          </TabsContent>

          <TabsContent value="beats">
            <AdminBeats />
          </TabsContent>

          <TabsContent value="news">
            <AdminNews />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
