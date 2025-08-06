import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mendeteksi scroll
  const toggleVisibility = () => {
    // Jika posisi scroll lebih dari 300px, tampilkan tombol
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk melakukan scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Membuat scroll menjadi halus
    });
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen dimuat
    window.addEventListener('scroll', toggleVisibility);

    // Hapus event listener saat komponen dilepas untuk mencegah memory leak
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#074c11] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Scroll to top"
        >
          {/* Ikon panah ke atas */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;