import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Award, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Solidarité',
      description: 'Nous croyons en l\'entraide et le soutien mutuel entre membres de notre communauté.'
    },
    {
      icon: Heart,
      title: 'Fraternité',
      description: 'Nous cultivons un esprit de famille et d\'appartenance à notre belle nation burkinabè.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous encourageons la réussite académique et professionnelle de tous nos membres.'
    },
    {
      icon: Globe,
      title: 'Ouverture',
      description: 'Nous favorisons les échanges culturels et l\'intégration dans notre pays d\'accueil.'
    }
  ];

  const objectives = [
    'Faciliter l\'intégration des nouveaux étudiants et stagiaires burkinabè à Agadir',
    'Créer un réseau d\'entraide académique et professionnel',
    'Organiser des activités culturelles et sportives pour renforcer les liens',
    'Représenter et défendre les intérêts de la communauté burkinabè',
    'Maintenir le lien avec le Burkina Faso et promouvoir notre culture',
    'Faciliter les démarches administratives et l\'accès à l\'information'
  ];

  const history = [
    {
      year: '2010',
      title: 'Création',
      description: 'Fondation de l\'AEBM Agadir par un petit groupe d\'étudiants pionniers'
    },
    {
      year: '2015',
      title: 'Reconnaissance',
      description: 'Obtention du statut officiel d\'association auprès des autorités marocaines'
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Plus de 100 membres actifs et organisation de nombreux événements annuels'
    },
    {
      year: '2025',
      title: 'Digitalisation',
      description: 'Lancement de la plateforme pour moderniser notre organisation'
    }
  ];

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-green-700 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qui sommes-nous ?</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            L'Association des Étudiants et Stagiaires Burkinabè au Maroc - Section Agadir
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="text-red-600" size={36} />
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                L'AEBM Agadir a pour mission principale de rassembler, soutenir et accompagner tous les étudiants 
                et stagiaires burkinabè résidant à Agadir dans leur parcours académique et leur intégration au Maroc.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous œuvrons à créer un environnement solidaire où chaque membre peut s'épanouir, trouver de l'aide 
                et contribuer au rayonnement de notre communauté.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Rejoignez-nous
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
                <div className="text-gray-700 font-medium">Membres actifs</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">45+</div>
                <div className="text-gray-700 font-medium">Événements/an</div>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
                <div className="text-4xl font-bold text-yellow-600 mb-2">8</div>
                <div className="text-gray-700 font-medium">Universités</div>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Ans d'existence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident nos actions et renforcent notre communauté
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Objectifs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce que nous nous engageons à accomplir pour notre communauté
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-red-300 transition-all"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Histoire</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              15 ans d'engagement au service de la communauté burkinabè à Agadir
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {history.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Content */}
                  <div className="w-full md:w-5/12 mb-4 md:mb-0">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-red-200">
                      <div className="text-2xl font-bold text-red-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez la famille AEBM Agadir
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ensemble, nous sommes plus forts. Faites partie de notre communauté solidaire.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-4 bg-yellow-400 text-red-900 rounded-xl font-bold hover:bg-yellow-300 transition-colors shadow-xl"
            >
              Devenir membre
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
