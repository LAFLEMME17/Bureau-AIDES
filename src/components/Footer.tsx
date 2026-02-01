import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { PageType } from '../App';
import logo from '../assets/logo_aides.png';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* À propos */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
  <img
    src={logo}
    alt="Logo AIDES"
    className="w-12.1 h-05 object-contain"
  />
</div>

            <p className="text-blue-100 leading-relaxed mb-8 max-w-md">
              Organisation d'appui au développement dédiée à l'accompagnement de projets,
              l'assistance technique et sociale pour un impact durable et mesurable.
            </p>
            <div className="flex space-x-3">
              {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group relative w-12 h-12 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                    <Icon size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 text-blue-100 text-lg">Navigation</h4>
            <nav className="space-y-3">
              {[
                { label: 'Accueil', page: 'home' as PageType },
                { label: 'À propos', page: 'about' as PageType },
                { label: 'Services', page: 'services' as PageType },
                { label: 'Projets', page: 'projects' as PageType },
                { label: 'Contact', page: 'contact' as PageType },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => navigateToPage(item.page)}
                  className="block text-blue-200 hover:text-white hover:translate-x-1 transition-all text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-blue-100 text-lg">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:contact@aides-dev.org"
                className="flex items-start space-x-3 text-blue-200 hover:text-white transition-all group"
              >
                <Mail size={20} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">bureauaides2011@gmail.com</span>
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center space-x-3 text-blue-200 hover:text-white transition-all group"
              >
                <Phone size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+229 01 69 672 941</span>
              </a>
              <div className="flex items-start space-x-3 text-blue-200">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <span>Cotonou, Benin</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
            <p>© {currentYear} AIDES. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}