import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/dummyProject';
import GalleryImage from './GalleryImage';

const GallerySection = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        // --- KODE UNTUK API ASLI (DIKOMENTARI DULU) ---
        // const response = await fetch('http://localhost:8080/api/v1/projects');
        // if (!response.ok) throw new Error('Gagal mengambil data galeri');
        // const result = await response.json();
  
        const result = await fetchProjects();
        
        // Ambil semua foto dari semua proyek, lalu potong untuk 9 foto pertama
        const allPhotos = result.data.flatMap(project => project.photos);
        setPhotos(allPhotos.slice(0, 9));
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  return (
    <section className="bg-white py-20" id='gallery'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-500 mt-2">Our Recent Projects Visualized</p>
        </div>

        {loading && <p className="text-center">Loading gallery...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photoUrl, index) => (
              <GalleryImage 
                key={index}
                imageUrl={photoUrl}
                altText={`Gallery image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;