import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sparkles, TrendingUp } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: ' Mission BIT – RDC (PEJAB)',
      category: 'Assistance technique',
      description: 'Proposition technique et financière pour l’élaboration de curricula DACUM dans huit filières agricoles au Congo. Au cours de ce projet nous avions eu à créer des outils de formation adaptés pour les jeunes agro-entrepreneurs et à renforcer les capacités des encadreurs.',
      image: '/src/assets/mission_congo.jpg',
      results: ['8 chartes de compétences et 8 profils de compétences validés par métier.', '8 guides d\'apprentissage et supports technico-pédagogiques élaborés.', 'Renforcement des capacités des formateurs sur l\'utilisation des outils DACUM.'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Mission IWILI – Bénin',
      category: 'Conseil',
      description: 'Termes de référence pour finaliser un document de projet (ProDoc) selon les attentes de la DDC. Cette mission consistait à analyser les manquements, réviser le chronogramme et coordonner les révisions du ProDoc.',
      image: '/src/assets/iwili.jpg',
      results: ['Synthèse des observations et plan d\’action pour la révision du ProDoc', 'Chronogramme d’activités révisé et détaillé (hebdomadaire/mensuel).', 'Version finale du ProDoc et des annexes conforme aux standards.'],
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      title: ' Formation IFMA – Bénin',
      category: 'Formation',
      description: 'Formation des gestionnaires de l’IFMA aux Approches Orientées Changements (AOC). Au cours de cette formation les participants ont acquis des compétences pour intégrer la démarche AOC dans la gestion de leurs projets.',
      image: '/src/assets/ifma.jpg',
      results: ['10 gestionnaires formés et outillés sur la théorie du changement et les outils AOC.', 'Production de chemins de changement et d\'outils SEPO pour leurs projets.', 'Évaluation positive de la formation avec des recommandations pour un suivi et un accompagnement futur.'],
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Projet ProFinA-E2A – Bénin',
      category: 'Accompagnement',
      description: 'Proposition d\'un dispositif de microcrédits et microassurances pour artisans et agriculteurs. Ce projet visais à structurer un mécanisme de financement adapté et pérenne en partenariat avec des institutions financières et d\'assurance.',
      image: '/src/assets/profina.jpg',
      results: ['Convention de partenariat signée avec 4 Systèmes Financiers Décentralisés (SFD) pour couvrir 15 communes.', '211 artisans ont déjà bénéficié de crédits (équipement, scolaire, agricole) dans le cadre du dispositif pilote.', 'Plus de 10 900 artisans sensibilisés et 571 demandes de crédits enregistrées.'],
      gradient: 'from-blue-600 to-purple-500',
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
              <span className="text-sm text-blue-100">Nos réalisations</span>
            </div>
            <h1 className="text-white mb-8 animate-fadeIn">Nos projets & réalisations</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Découvrez nos actions concrètes et l'impact de nos interventions auprès de nos partenaires
              et bénéficiaires à travers différents secteurs et pays.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Notre impact</span>
            </div>
            <h2 className="text-blue-900 mb-8">Un impact mesurable et durable</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chaque projet est l'occasion de démontrer notre engagement envers l'excellence,
              notre capacité à générer des résultats concrets et notre contribution aux objectifs
              de développement durable. Voici quelques-unes de nos réalisations marquantes.
            </p>
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-3 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-blue-900/60 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <div className={`bg-white/95 backdrop-blur-sm text-blue-900 px-5 py-2 rounded-full text-sm shadow-lg font-medium`}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-1">{project.description}</p>
                    <div className="border-t border-gray-100 pt-6 space-y-3">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-gray-600 group/item">
                          <div className={`relative w-2 h-2 flex-shrink-0`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-full blur group-hover/item:blur-sm transition-all`}></div>
                            <div className={`relative w-2 h-2 bg-gradient-to-br ${project.gradient} rounded-full`}></div>
                          </div>
                          <span className="group-hover/item:text-gray-900 transition-colors">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '48px 48px'
              }}></div>
            </div>
            
            {/* Animated elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 p-16 lg:p-20 text-white">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-6">
                  <TrendingUp className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm text-blue-100">Bilan global</span>
                </div>
                <h2 className="text-white mb-6">Notre impact cumulé</h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Des chiffres qui témoignent de notre engagement et de l'ampleur de nos interventions
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { number: '50+', label: 'Projets réalisés', gradient: 'from-blue-500 to-cyan-500' },
                  { number: '50K+', label: 'Bénéficiaires directs', gradient: 'from-cyan-500 to-teal-500' },
                  { number: '25+', label: 'Organisations accompagnées', gradient: 'from-teal-500 to-emerald-500' },
                  { number: '5', label: 'Pays d\'intervention', gradient: 'from-emerald-500 to-green-500' },
                ].map((stat, idx) => (
                  <div key={idx} className="group text-center relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 hover:bg-white/15 hover:border-white/30 transition-all hover:scale-105">
                      <div className="text-6xl mb-4 drop-shadow-lg">{stat.number}</div>
                      <div className="text-blue-100 text-lg">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
