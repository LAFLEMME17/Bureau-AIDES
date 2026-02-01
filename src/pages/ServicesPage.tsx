import { Building2, Wrench, FolderKanban, GraduationCap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PageType } from '../App';

interface ServicesPageProps {
  setCurrentPage: (page: PageType) => void;
}

export function ServicesPage({ setCurrentPage }: ServicesPageProps) {
  const services = [
   
    {
      icon: Wrench,
      title: 'Assistance technique',
      description: 'Expertise technique spécialisée et conseil pour vos projets de développement.',
      gradient: 'from-cyan-500 to-teal-500',
      details: [
        'Conseil technique sectoriel spécialisé',
        'Études de faisabilité et diagnostics',
        'Ingénierie de projets et programmes',
        'Appui à la conception et formulation de projets',
        'Analyse et évaluation d\'impact',
      ],
    },
    {
      icon: FolderKanban,
      title: 'Accompagnement de projets',
      description: 'Gestion et pilotage de vos programmes pour un impact optimal et mesurable.',
      gradient: 'from-teal-500 to-emerald-500',
      details: [
        'Gestion de projet et coordination',
        'Suivi-évaluation et monitoring',
        'Planification opérationnelle et budgétaire',
        'Gestion des parties prenantes',
        'Reporting et capitalisation',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Formation & conseil',
      description: 'Développement des compétences et accompagnement stratégique de vos équipes.',
      gradient: 'from-emerald-500 to-green-500',
      details: [
        'Programmes de formation certifiante',
        'Ateliers thématiques et renforcement de capacités',
        'Coaching individuel et d\'équipe',
        'Conseil stratégique et aide à la décision',
        'Transfert de compétences et mentorat',
      ],
    },
  ];

  const reasons = [
    {
      title: 'Expertise multisectorielle',
      description: 'Une équipe aux compétences variées couvrant tous les aspects du développement.',
      icon: '🎯',
    },
    {
      title: 'Approche sur mesure',
      description: 'Des solutions adaptées à vos besoins spécifiques et votre contexte.',
      icon: '🔧',
    },
    {
      title: 'Méthodologie éprouvée',
      description: 'Des processus rigoureux basés sur les meilleures pratiques internationales.',
      icon: '📋',
    },
    {
      title: 'Engagement qualité',
      description: 'Un suivi rigoureux et des livrables de haute qualité pour chaque intervention.',
      icon: '✨',
    },
    {
      title: 'Résultats durables',
      description: 'Focus sur l\'impact à long terme et le renforcement des capacités locales.',
      icon: '🌱',
    },
    {
      title: 'Partenariat authentique',
      description: 'Une collaboration étroite et transparente avec nos clients et partenaires.',
      icon: '🤝',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        
        {/* Animated background */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-sm text-blue-100">Notre offre</span>
            </div>
            <h1 className="text-white mb-8 animate-fadeIn">Nos services</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Des solutions complètes et sur mesure pour accompagner vos projets de développement
              avec expertise, rigueur et engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Nos expertises</span>
            </div>
            <h2 className="text-blue-900 mb-8">Une offre complète pour vos besoins</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              AIDES propose une gamme de services intégrés couvrant l'ensemble du cycle de vie
              de vos projets et programmes. De la conception à l'évaluation, nous vous accompagnons
              à chaque étape avec une approche personnalisée et des outils performants.
            </p>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="group"
                >
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className={`p-14 relative z-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative mb-8">
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                          <div className={`relative w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <Icon className="text-white" size={44} />
                          </div>
                        </div>
                        <h3 className="text-blue-900 mb-5 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                          {service.description}
                        </p>
                        <div className="space-y-4">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-4 group/item">
                              <div className={`relative mt-1 flex-shrink-0`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-lg blur opacity-0 group-hover/item:opacity-40 transition-opacity`}></div>
                                <CheckCircle2 className="relative text-blue-900 group-hover/item:scale-110 transition-transform" size={22} />
                              </div>
                              <span className="text-gray-600 text-lg group-hover/item:text-gray-900 transition-colors">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={`relative bg-gradient-to-br ${service.gradient} p-14 flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="text-white text-center">
                          <Icon size={140} className="mx-auto mb-8 opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500" />
                          <div className="text-8xl opacity-10 group-hover:opacity-20 transition-opacity">{`0${index + 1}`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir AIDES */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Nos atouts</span>
            </div>
            <h2 className="text-blue-900 mb-6">Pourquoi choisir AIDES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre engagement : votre réussite et un impact durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-blue-50/50 p-10 rounded-3xl hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{reason.icon}</div>
                <h3 className="text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
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
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-8">Besoin d'un accompagnement sur mesure ?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Discutons de votre projet et explorons ensemble comment nos services peuvent
              vous aider à atteindre vos objectifs de développement.
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white text-blue-900 px-12 py-5 rounded-full hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/20 hover:scale-105 inline-flex items-center gap-3">
                <span className="font-medium">Contactez notre équipe</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
