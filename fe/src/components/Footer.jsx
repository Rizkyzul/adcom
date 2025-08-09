import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaGithub,
} from 'react-icons/fa';
import  logo  from '../assets/logo3d.png'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
        {/* Logo & Address */}
        <div className="md:w-1/3 space-y-4 flex flex-col items-center md:items-start">
          <img
            src={logo} 
            alt="Android Dev Cirebon"
            className="w-48 rounded-2xl shadow-lg mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Jl. Perjuangan No.10B, Karyamulya, Kec. Kesambi,<br />
            Kota Cirebon, Jawa Barat 45135
          </p>
          <p className="text-sm text-gray-400 mt-2">© 2025 Android Developer Community</p>

          {/* Sosmed */}
          <div className="flex space-x-4 pt-4 text-2xl">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              <FaDribbble />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaBehance />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-lg">About Adcom</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="/#division" className="hover:underline">Division</a></li>
               <li><a href="/#project" className="hover:underline">project</a></li>
              <li><a href="/#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/#blog" className="hover:underline">Blog</a></li>
              <li><a href="/#faq" className="hover:underline">FAQ</a></li>
              <li><a href="/struktur-organisasi" className="hover:underline">Struktur Organisasi</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg">Mastering Tools</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="https://www.w3schools.com/js/" className="hover:underline" target='_blank' >Javascript</a></li>
              <li><a href="https://www.php.net/" className="hover:underline" target='_blank' >PHP</a></li>
              <li><a href="https://laravel.com/" target='_blank'  className="hover:underline">Laravel</a></li>
              <li><a href="https://www.w3schools.com/html/default.asp" target='_blank'  className="hover:underline">HTML</a></li>
              <li><a href="https://help.figma.com/hc/en-us/categories/360002051613-Get-started" target='_blank'  className="hover:underline">Figma</a></li>
              <li><a href="https://www.w3schools.com/css/default.asp" target='_blank'  className="hover:underline">CSS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-lg ">Company</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Github</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Behance</a></li>
              <li><a href="#" className="hover:underline">Dribbble</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
