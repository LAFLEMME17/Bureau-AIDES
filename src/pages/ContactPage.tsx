import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log('Formulaire soumis', formData);

  // 1️⃣ Vérifie que l'email est rempli
  if (!formData.email) {
    alert('Veuillez renseigner votre email pour recevoir la confirmation.');
    return;
  }

  const currentTime = new Date().toLocaleString(); // Pour afficher la date/heure dans le mail du bureau

  // 2️⃣ Envoi du mail au bureau
  emailjs.send(
    'service_k1u77rc',      // Service ID
    'template_n7qltki',     // Template bureau
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      subject: formData.subject,
      message: formData.message,
      time: currentTime,
    },
    '1Mip0QhLKzCAMLLY4'     // Public Key
  )
  .then((response) => {
    console.log('Mail envoyé au bureau !', response.status, response.text);

    // 3️⃣ Envoi du mail de confirmation à l’utilisateur
    return emailjs.send(
      'service_k1u77rc',      // Service ID
      'template_1iq8ugs',     // Template de confirmation utilisateur
      {
        email: formData.email,       // correspond à {{email}} dans ton template
        name: formData.name,         // correspond à {{name}}
        subject: formData.subject,   // correspond à {{subject}} si ajouté dans le template
        message: formData.message,   // correspond à {{message}} si ajouté dans le template
        organization: formData.organization, // correspond à {{organization}} si ajouté
        phone: formData.phone,       // correspond à {{phone}} si ajouté
      },
      '1Mip0QhLKzCAMLLY4'     // Public Key
    );
  })
  .then(() => {
    console.log('Mail de confirmation envoyé à l’utilisateur !');
    setIsSubmitted(true);

    // Réinitialisation du formulaire après 3 secondes
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  })
  .catch((error) => {
    console.error('Erreur lors de l’envoi des emails :', error);
    alert('Erreur lors de l’envoi du mail : ' + (error.text || error.message));
  });
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bureauaides2011@gmail.com',
      link: 'mailto:bureauaides2011@gmail.com',
      description: 'Pour toute demande d\'information',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 01 69 672 941',
      link: 'tel:+2290169672941',
      description: 'Du lundi au vendredi',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Agla en face du CEG Les Pylônes, Cotonou, Benin',
      link: null,
      description: 'Siège social',
      gradient: 'from-teal-500 to-emerald-500',
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
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
              <MessageCircle className="w-4 h-4 text-cyan-300" />
              <span className="text-sm text-blue-100">Parlons de votre projet</span>
            </div>
            <h1 className="text-white mb-8 animate-fadeIn">Contactez-nous</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Vous avez un projet, une question ou souhaitez en savoir plus sur nos services ?
              Notre équipe est à votre écoute pour échanger sur vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Colonne gauche */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
                  <span className="text-sm">Nos coordonnées</span>
                </div>
                <h2 className="text-blue-900 mb-6">Restons en contact</h2>
                <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                  Que vous soyez une institution, une ONG ou un programme de développement,
                  nous sommes disponibles pour discuter de votre projet et explorer comment
                  nous pouvons collaborer.
                </p>
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="group">
                        <div className="flex items-start space-x-5">
                          <div className="relative flex-shrink-0">
                            <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                            <div className={`relative w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                              <Icon className="text-white" size={28} />
                            </div>
                          </div>
                          <div>
                            <div className="text-blue-900 mb-1 font-medium">{info.title}</div>
                            {info.link ? (
                              <a href={info.link} className="text-gray-800 hover:text-blue-900 transition-colors mb-1 block text-lg group-hover:underline">
                                {info.value}
                              </a>
                            ) : (
                              <div className="text-gray-800 mb-1 text-lg">{info.value}</div>
                            )}
                            <div className="text-sm text-gray-500">{info.description}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Horaires */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-blue-50/50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                        <Clock className="text-white" size={26} />
                      </div>
                      <h3 className="text-blue-900">Horaires d'ouverture</h3>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex justify-between items-center">
                        <span>Lundi - Vendredi</span>
                        <span className="text-blue-900 font-medium">9h00 - 18h00</span>
                      </div>
                      <div className="border-t border-gray-200"></div>
                      <div className="flex justify-between items-center">
                        <span>Samedi - Dimanche</span>
                        <span className="text-gray-400">Fermé</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="lg:col-span-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative bg-white p-12 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all">
                  <div className="inline-block bg-blue-50 text-blue-900 px-5 py-2 rounded-full mb-6">
                    <span className="text-sm">Formulaire de contact</span>
                  </div>
                  <h3 className="text-blue-900 mb-3">Envoyez-nous un message</h3>
                  <p className="text-gray-600 mb-10 text-lg">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>

                  {isSubmitted ? (
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-5"></div>
                      <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-3xl p-12 text-center">
                        <div className="relative inline-block mb-6">
                          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                          <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-xl">
                            <CheckCircle2 className="text-white" size={40} />
                          </div>
                        </div>
                        <h4 className="text-emerald-900 mb-3 text-xl">Message envoyé avec succès !</h4>
                        <p className="text-emerald-700 text-lg">
                          Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-3 font-medium">Nom complet *</label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Votre nom"
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white hover:border-gray-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-3 font-medium">Email *</label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="votre.email@exemple.com"
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white hover:border-gray-300"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="organization" className="block text-gray-700 mb-3 font-medium">Organisation</label>
                          <input
                            type="text"
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            placeholder="Nom de votre organisation"
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white hover:border-gray-300"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 mb-3 font-medium">Téléphone</label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+XX X XX XX XX XX"
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white hover:border-gray-300"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-3 font-medium">Objet *</label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Objet de votre demande"
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white hover:border-gray-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-3 font-medium">Message *</label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Parlez-nous de votre projet..."
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50 hover:bg-white hover:border-gray-300"
                        />
                      </div>
                      <button type="submit" className="group relative w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-5 rounded-full hover:shadow-2xl hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-3 group-hover:scale-105">
                          <span className="font-medium text-lg">Envoyer le message</span>
                          <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </button>
                      <p className="text-sm text-gray-500 text-center">
                        En soumettant ce formulaire, vous acceptez que vos données soient utilisées
                        uniquement pour répondre à votre demande.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
