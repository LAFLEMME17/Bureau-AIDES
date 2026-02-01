import { Target, Eye, Heart, Users, Award, Globe, CheckCircle2, Zap } from 'lucide-react';
import expertiseImg from '../assets/expertise.jpg';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Accompagner les organisations et institutions dans leurs projets de développement en apportant expertise technique et soutien stratégique pour un impact durable et mesurable.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description: 'Être un partenaire de référence dans l\'appui au développement, reconnu pour notre professionnalisme, notre engagement et notre capacité à générer des résultats concrets et pérennes.',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Heart,
      title: 'Nos Valeurs',
      description: 'Excellence, intégrité, collaboration et innovation guident nos actions. Nous plaçons l\'humain au cœur de nos interventions pour un développement inclusif et équitable.',
      gradient: 'from-teal-500 to-emerald-500',
    },
  ];

  const stats = [
    { icon: Award, number: '14 ans', label: 'd\'expertise terrain', gradient: 'from-blue-600 to-cyan-500' },
    { icon: Users, number: '50+', label: 'projets accompagnés', gradient: 'from-cyan-500 to-teal-500' },
    { icon: Globe, number: '5', label: 'pays d\'intervention', gradient: 'from-teal-500 to-emerald-500' },
    { icon: Zap, number: '98%', label: 'de satisfaction client', gradient: 'from-emerald-500 to-green-500' },
  ];

  const methodology = [
    {
      number: '01',
      title: 'Diagnostic approfondi',
      description: 'Analyse complète de vos besoins, de votre contexte et de vos enjeux spécifiques.',
      color: 'blue',
    },
    {
      number: '02',
      title: 'Conception sur mesure',
      description: 'Élaboration d\'une stratégie d\'intervention adaptée à vos objectifs et contraintes.',
      color: 'cyan',
    },
    {
      number: '03',
      title: 'Mise en œuvre collaborative',
      description: 'Déploiement des actions en partenariat étroit avec vos équipes et parties prenantes.',
      color: 'teal',
    },
    {
      number: '04',
      title: 'Suivi & ajustement',
      description: 'Monitoring rigoureux, évaluation continue et adaptation pour garantir les résultats.',
      color: 'emerald',
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
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
              <span className="text-sm text-blue-100">Qui sommes-nous</span>
            </div>
            <h1 className="text-white mb-8 animate-fadeIn">À propos du Bureau AIDES</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Depuis plus de 14 ans, le Bureau AIDES accompagne les acteurs du développement avec
              professionnalisme, rigueur et engagement pour un impact durable.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation détaillée */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
                <span className="text-sm">Notre histoire</span>
              </div>
              <h2 className="text-blue-900 mb-8">Une expertise reconnue au service du développement</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Nous sommes une organisation d'appui au développement qui intervient auprès d'institutions,
                d'ONG et de programmes à fort impact social. Notre équipe multidisciplinaire combine
                expérience de terrain et expertise technique pour offrir des solutions adaptées aux
                défis complexes du développement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Nous croyons en une approche collaborative où l'écoute active, le transfert de
                compétences et l'accompagnement sur mesure sont au cœur de notre méthodologie.
                Chaque intervention est conçue pour renforcer durablement les capacités de nos
                partenaires et maximiser l'impact de leurs actions.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Notre engagement : des résultats mesurables, une approche éthique et une contribution
                concrète aux objectifs de développement durable.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
             <img
  src={expertiseImg}
  alt="Expertise AIDES"
  className="relative rounded-3xl shadow-2xl shadow-blue-900/20 group-hover:shadow-3xl transition-all duration-500"
/>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-40"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-white shadow-sm border border-blue-100 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Ce qui nous définit</span>
            </div>
            <h2 className="text-blue-900 mb-6">Nos fondamentaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce qui nous guide et nous inspire au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  <div className="relative bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full hover:-translate-y-2">
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="text-white" size={36} />
                      </div>
                    </div>
                    <h3 className="text-blue-900 mb-5 group-hover:text-blue-700 transition-colors">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Nos performances</span>
            </div>
            <h2 className="text-blue-900 mb-6">Notre impact en chiffres</h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets qui témoignent de notre engagement
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative text-center p-12 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-100 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 text-white">
                    <div className="flex justify-center mb-6">
                      <Icon size={52} className="drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="text-6xl mb-4 drop-shadow-lg">{stat.number}</div>
                    <div className="text-white/90 text-lg">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre approche / méthodologie */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block bg-white shadow-sm border border-blue-100 text-blue-900 px-5 py-2 rounded-full mb-6">
              <span className="text-sm">Notre processus</span>
            </div>
            <h2 className="text-blue-900 mb-6">Notre méthodologie</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée et éprouvée pour maximiser l'impact de chaque intervention
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {methodology.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="flex items-start gap-8">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-${step.color}-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className={`relative text-6xl bg-gradient-to-br from-${step.color}-100 to-${step.color}-50 text-${step.color}-900/20 rounded-2xl w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc crédibilité */}
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
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 p-16 lg:p-20 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-white mb-8">Une expertise reconnue</h2>
                <p className="text-xl text-blue-100 leading-relaxed mb-14">
                  Nous collaborons avec des partenaires de premier plan : institutions internationales,
                  agences de développement, ministères et organisations de la société civile. Notre
                  réputation s'appuie sur la qualité de nos interventions, notre déontologie et notre
                  capacité à générer des résultats durables.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {[
                    { emoji: '🏆', label: 'Excellence opérationnelle' },
                    { emoji: '🤝', label: 'Partenariats durables' },
                    { emoji: '📊', label: 'Résultats mesurables' },
                  ].map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all hover:scale-105">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
                        <div className="text-blue-100 text-lg">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
