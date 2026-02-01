import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PageType } from '../App';
import logo from '../assets/logo_aides.png';


interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Accueil', page: 'home' },
    { label: 'À propos', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Projets', page: 'projects' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-900/5' 
          : 'bg-white/98 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => navigateToPage('home')}
            className="flex items-center space-x-3 group relative"
          >
                        <img
              src={logo}
              alt="Site Logo"
              className="w-12 h-12 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateToPage(item.page)}
                className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg shadow-blue-900/30'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <button
            onClick={() => navigateToPage('contact')}
            className="hidden md:block relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-blue-900/30 hover:scale-105 transition-all">
              Nous contacter
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-xl transition-all"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateToPage(item.page)}
                className={`block w-full text-left py-4 px-5 rounded-xl transition-all mb-2 ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateToPage('contact')}
              className="mt-4 w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4 rounded-full hover:shadow-xl transition-all"
            >
              Nous contacter
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}