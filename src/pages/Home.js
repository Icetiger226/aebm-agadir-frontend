import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, MessageSquare, MapPin, DollarSign, BookOpen, GraduationCap, Globe, Trophy } from 'lucide-react';

const Home = ({ onOpenAuthModal }) => {
  const [stats, setStats] = useState({ members: 0, events: 0, universities: 0, satisfaction: 0 });
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const targets = { members: 150, events: 45, universities: 8, satisfaction: 95 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        members: Math.floor(targets.members * progress),
        events: Math.floor(targets.events * progress),
        universities: Math.floor(targets.universities * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats(targets);
      }
    }, stepDuration);
  };

  const features = [
    { icon: Users, title: 'Espace Membre', desc: 'Créez votre profil, connectez-vous avec d\'autres étudiants burkinabè et accédez à l\'annuaire sécurisé.', link: '/register' },
    { icon: Calendar, title: 'Événements', desc: 'Restez informé des activités, inscrivez-vous aux événements et consultez l\'historique des activités passées.', link: '/events' },
    { icon: MessageSquare, title: 'Forum & Entraide', desc: 'Échangez avec la communauté, partagez des documents et trouvez de l\'aide pour vos études.', link: '/forum' },
    { icon: MapPin, title: 'Vie à Agadir', desc: 'Guide pratique, carte interactive et conseils pour les nouveaux arrivants à Agadir.', link: '/guide' },
    { icon: DollarSign, title: 'Trésorerie', desc: 'Payez vos cotisations en ligne et suivez vos contributions en toute transparence.', link: '/treasury' },
    { icon: BookOpen, title: 'Actualités', desc: 'Accédez aux dernières nouvelles, annonces officielles et communications du bureau.', link: '/news' },
  ];

  const upcomingEvents = [
    { icon: GraduationCap, date: '15 Novembre 2025', title: 'Journée d\'Intégration', desc: 'Accueil des nouveaux étudiants et présentation de l\'AEBM' },
    { icon: Globe, date: '20 Novembre 2025', title: 'Soirée Culturelle', desc: 'Célébration de la culture burkinabè avec repas traditionnel' },
    { icon: Trophy, date: '25 Novembre 2025', title: 'Tournoi Sportif', desc: 'Compétition amicale de football entre universités' },
  ];

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-yellow-500 to-green-600 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 drop-shadow-lg">
              Bienvenue à l'<span className="text-yellow-200">AEBM Agadir</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-4 sm:mb-6 font-medium px-4 drop-shadow-md">
              Association des Étudiants et Stagiaires Burkinabè au Maroc - Section Agadir
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 drop-shadow-sm">
              Une communauté unie pour faciliter l'intégration, l'entraide et la réussite de tous les étudiants burkinabè à Agadir.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4">
              <Link
                to="/register"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 rounded-lg font-semibold text-sm sm:text-base hover:bg-yellow-50 hover:text-red-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Rejoindre l'AEBM <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-lg font-semibold text-sm sm:text-base hover:bg-white/30 hover:border-white transition-all shadow-lg"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-10 sm:py-12 md:py-16 bg-white/80 backdrop-blur-sm border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.members}+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Membres Actifs</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.events}+</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Événements/an</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.universities}</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Universités</div>
            </div>
            <div className="text-center px-2">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">{stats.satisfaction}%</div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Nos Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Une plateforme complète pour répondre à tous vos besoins en tant qu'étudiant burkinabè à Agadir
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                    <Icon size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">{feature.desc}</p>
                  <div className="flex items-center text-red-600 font-medium text-sm group-hover:gap-3 transition-all">
                    En savoir plus <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-16 bg-white/60 backdrop-blur-sm border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/news" className="text-red-600 hover:text-red-700 font-medium text-sm md:text-base inline-flex items-center gap-2 mb-2">
              Accédez aux dernières nouvelles, annonces officielles et communications du bureau.
              <ArrowRight size={16} />
            </Link>
            <Link to="/news" className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center gap-1">
              En savoir plus <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 px-4 md:px-0">Événements à Venir</h2>
              <p className="text-gray-600 text-sm md:text-base px-4 md:px-0">Ne manquez aucun de nos prochains événements</p>
            </div>
            <Link
              to="/events"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm md:text-base"
            >
              Voir tout <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-red-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-red-600" />
                  </div>
                  <div className="text-sm text-red-600 font-semibold mb-2">{event.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{event.desc}</p>
                </div>
              );
            })}
          </div>
          
          <Link
            to="/events"
            className="md:hidden mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors w-full"
          >
            Voir tous les événements <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-50 via-white to-green-50 border-t border-gray-200/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Prêt à rejoindre notre communauté ?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            Inscrivez-vous dès maintenant et profitez de tous les avantages de l'AEBM Agadir
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
          >
            S'inscrire gratuitement <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
