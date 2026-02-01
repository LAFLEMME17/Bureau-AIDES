import { ArrowRight, Target, Users, TrendingUp, Award, Sparkles } from 'lucide-react';
import { PageType } from '../App';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import homepageimg from '../assets/homepage.png';
import proginsti from '../assets/proginsti.jpg';
import idk from '../assets/idk.jpg';
import certif from '../assets/formation_certif.jpg';

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

export function HomePage({ setCurrentPage }: HomePageProps) {
  const services = [
    {
      title: 'Assistance technique',
      description: 'Expertise technique spécialisée et conseil en ingénierie de projets.',
      icon: Users,
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Accompagnement de projets',
      description: 'Gestion, suivi-évaluation et pilotage stratégique de programmes.',
      icon: TrendingUp,
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      title: 'Formation & conseil',
      description: 'Renforcement des compétences et coaching pour les équipes.',
      icon: Award,
      gradient: 'from-emerald-500 to-green-500',
    },
  ];

  const featuredProjects = [
    { title: 'Programme institutionnel régional', category: 'Accompagnement de projets', image: proginsti },
    { title: 'Développement communautaire', category: 'Assistance technique', image: idk },
    { title: 'Formation certifiante', category: 'Formation', image: certif },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homepageimg}
            alt="Hero"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-blue-950/98 to-blue-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-950/50"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-blue-100 mb-8 hover:bg-white/15 transition-all group">
              <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span className="text-sm">Organisation d'appui au développement</span>
            </div>
            <h1 className="text-white mb-8 leading-tight animate-fadeIn">
              Accompagner le développement,
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-teal-300 bg-clip-text text-transparent">
                soutenir l'impact
              </span>
            </h1>
            <p className="text-xl text-blue-50/90 mb-12 max-w-3xl leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Le Bureau AIDES met son expertise au service des organisations et institutions pour des projets
              de développement durables, avec une approche professionnelle, humaine et orientée résultats.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => setCurrentPage('services')}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white text-blue-900 px-10 py-5 rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-3 shadow-2xl hover:shadow-cyan-500/20 hover:scale-105">
                  <span className="font-medium">Découvrir nos services</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="group relative"
              >
                <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all hover:scale-105 shadow-xl">
                  <span className="font-medium">Nous contacter</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1 h-2 bg-white/60 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Présentation courte */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Qui sommes-nous ?</span>
            </div>
            <h2 className="text-blue-900 mb-8 max-w-4xl mx-auto leading-tight">
              Une organisation dédiée à l'excellence et à l'impact
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-4xl mx-auto">
              Le Bureau AIDES est une organisation spécialisée dans l'appui au développement. Nous accompagnons
              institutions, ONG et programmes à fort impact social avec expertise, rigueur et engagement.
              Notre approche combine méthodologie rigoureuse et dimension humaine pour des résultats
              durables et mesurables.
            </p>
            <div>
              <button
                onClick={() => setCurrentPage('about')}
                className="group inline-flex items-center gap-2 text-blue-900 hover:gap-4 transition-all text-lg mx-auto"
              >
                <span className="relative">
                  En savoir plus sur le Bureau AIDES
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-900 to-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu des services - SECTION CENTRÉE */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-white shadow-sm border border-blue-100 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Nos expertises</span>
            </div>
            <h2 className="text-blue-900 mb-6">Nos domaines d'intervention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des services complets et sur mesure pour accompagner vos ambitions
            </p>
            {/* Séparateur centré */}
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
          </div>

          {/* SERVICES CENTRÉS */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                    <div className="relative bg-white p-8 rounded-3xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 cursor-pointer hover:-translate-y-2 h-full flex flex-col items-center">
                      {/* Icône centrée */}
                      <div className="relative mb-8">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                        <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl mx-auto`}>
                          <Icon className="text-white" size={36} />
                        </div>
                      </div>
                      {/* Titre centré */}
                      <h3 className="text-blue-900 mb-4 group-hover:text-blue-700 transition-colors text-xl font-bold">
                        {service.title}
                      </h3>
                      {/* Description centrée */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      {/* Séparateur */}
                      <div className="w-full border-t border-gray-100 mt-4 pt-6">
                        <a 
                          href="#" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm mx-auto"
                        >
                          En savoir plus
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bouton centré */}
          <div className="text-center">
            <button
              onClick={() => setCurrentPage('services')}
              className="group relative inline-flex items-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-900/30 transition-all hover:scale-105 shadow-xl flex items-center gap-2">
                <span className="font-medium">Voir tous nos services</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Projets clés */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Nos réalisations</span>
            </div>
            <h2 className="text-blue-900 mb-6">Projets en lumière</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations concrètes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 cursor-pointer hover:-translate-y-3"
              >
                <div className="relative h-80 overflow-hidden rounded-3xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/70 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/95 backdrop-blur-sm text-blue-900 px-5 py-2 rounded-full text-sm shadow-lg">
                      {project.category}
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-white mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">{project.title}</h3>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <span className="text-sm text-blue-200">Découvrir le projet</span>
                      <ArrowRight size={16} className="text-blue-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('projects')}
              className="group inline-flex items-center gap-3 text-blue-900 hover:gap-4 transition-all border-2 border-blue-900 px-10 py-5 rounded-full hover:bg-blue-900 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 mx-auto"
            >
              <span className="font-medium">Voir tous nos projets</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Call to action final */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-8">Prêt à démarrer votre projet ?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Échangeons sur vos besoins et explorons ensemble comment nous pouvons vous accompagner
              vers le succès de vos initiatives de développement.
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="group relative inline-block mx-auto"
            >
              <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white text-blue-900 px-12 py-5 rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105">
                <span className="font-medium">Contactez-nous</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}