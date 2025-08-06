import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Pagination from './Pagination';
import { fetchPosts } from '../api/dummyBlog';

const getPostsPerPage = () => {
  const width = window.innerWidth;
  if (width >= 768 && width < 1024) {
    return 4; // md: tampilkan 4 post
  }
  return 3; // default: tampilkan 3 post
};

const BlogSection = ({ showTitle = true }) => {
  const [postsPerPage, setPostsPerPage] = useState(getPostsPerPage());
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil data post dari API (dummy atau real)
  useEffect(() => {
    const loadPostsData = async () => {
      try {
        const result = await fetchPosts();
        setAllPosts(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPostsData();
  }, []);

  // Update jumlah post per halaman saat window di-resize
  useEffect(() => {
    const handleResize = () => {
      setPostsPerPage(getPostsPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const currentPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        
        {/* 2. Tampilkan judul HANYA JIKA showTitle adalah true */}
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Blog</h2>
            <p className="text-gray-500 mt-2">Unleash Your Creative Journey</p>
          </div>
        )}

        {/* Sisa kode tetap sama */}
        <div>
          {loading && <p className="text-center">Loading posts...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <PostCard 
                  key={post.id}
                  slug={post.slug}
                  imageUrl={post.image} 
                  title={post.title}
                  category={post.category}
                />
              ))}
            </div>
          )}
        </div>
        
        {!loading && !error && totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default BlogSection;