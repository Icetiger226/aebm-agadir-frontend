import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Tag, Search, Filter } from 'lucide-react';

const Events = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous', icon: '🎯' },
    { id: 'culturel', label: 'Culturel', icon: '🎭' },
    { id: 'sportif', label: 'Sportif', icon: '⚽' },
    { id: 'academique', label: 'Académique', icon: '📚' },
    { id: 'social', label: 'Social', icon: '🤝' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Journée d\'Intégration des Nouveaux',
      description: 'Accueil officiel des nouveaux étudiants avec présentation de l\'association, visite guidée et activités de networking.',
      date: '2025-11-15',
      time: '14:00',
      location: 'Campus Université Ibn Zohr',
      category: 'social',
      attendees: 45,
      maxAttendees: 100,
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
      isRegistrationOpen: true
    },
    {
      id: 2,
      title: 'Soirée Culturelle Burkinabè',
      description: 'Une soirée exceptionnelle célébrant la richesse de notre culture avec musique traditionnelle, danse, et gastronomie burkinabè.',
      date: '2025-11-20',
      time: '19:00',
      location: 'Salle des Fêtes - Centre Ville',
      category: 'culturel',
      attendees: 78,
      maxAttendees: 150,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
      isRegistrationOpen: true
    },
    {
      id: 3,
      title: 'Tournoi de Football Inter-Universités',
      description: 'Compétition amicale de football réunissant les étudiants burkinabè des différentes universités d\'Agadir.',
      date: '2025-11-25',
      time: '10:00',
      location: 'Stade Municipal d\'Agadir',
      category: 'sportif',
      attendees: 32,
      maxAttendees: 50,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
      isRegistrationOpen: true
    },
    {
      id: 4,
      title: 'Séminaire: Réussir ses Examens',
      description: 'Atelier pratique avec des techniques de révision efficaces, gestion du stress et méthodes de mémorisation.',
      date: '2025-11-30',
      time: '15:00',
      location: 'Bibliothèque Universitaire',
      category: 'academique',
      attendees: 25,
      maxAttendees: 60,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      isRegistrationOpen: true
    },
    {
      id: 5,
      title: 'Assemblée Générale Annuelle',
      description: 'Réunion statutaire annuelle avec présentation du bilan, élections du nouveau bureau et discussions sur les projets futurs.',
      date: '2025-12-05',
      time: '16:00',
      location: 'Amphithéâtre A - Ibn Zohr',
      category: 'social',
      attendees: 15,
      maxAttendees: 200,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      isRegistrationOpen: true
    }
  ];

  const pastEvents = [
    {
      id: 6,
      title: 'Gala de Bienvenue 2024',
      description: 'Grande soirée d\'ouverture de l\'année académique avec spectacles, repas et animations.',
      date: '2024-10-15',
      location: 'Hôtel Kenzi Europa',
      category: 'culturel',
      attendees: 120,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      gallery: 45
    },
    {
      id: 7,
      title: 'Marathon Solidaire',
      description: 'Course caritative organisée pour collecter des fonds pour les étudiants burkinabè en difficulté.',
      date: '2024-09-20',
      location: 'Corniche d\'Agadir',
      category: 'sportif',
      attendees: 85,
      image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800',
      gallery: 32
    },
    {
      id: 8,
      title: 'Conférence: Entrepreneuriat au Maroc',
      description: 'Rencontre avec des entrepreneurs burkinabè installés au Maroc pour partager leurs expériences.',
      date: '2024-08-10',
      location: 'Technopole Agadir',
      category: 'academique',
      attendees: 55,
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
      gallery: 28
    }
  ];

  const getCategoryIcon = (categoryId) => {
    return categories.find(cat => cat.id === categoryId)?.icon || '🎯';
  };

  const getAttendancePercentage = (attendees, max) => {
    return Math.round((attendees / max) * 100);
  };

  const filteredUpcomingEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredPastEvents = pastEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayEvents = selectedTab === 'upcoming' ? filteredUpcomingEvents : filteredPastEvents;

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Événements</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90">Participez à nos activités et renforcez les liens communautaires</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center sm:justify-start py-3 sm:py-4 overflow-x-auto">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedTab('upcoming')}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-all whitespace-nowrap ${
                  selectedTab === 'upcoming'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                À venir ({upcomingEvents.length})
              </button>
              <button
                onClick={() => setSelectedTab('past')}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-all whitespace-nowrap ${
                  selectedTab === 'past'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Passés ({pastEvents.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white/70 backdrop-blur-sm border-b border-gray-200 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Rechercher un événement..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-8 sm:py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {displayEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="h-48 bg-gray-200 overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900 flex items-center gap-1">
                        {getCategoryIcon(event.category)}
                        {categories.find(cat => cat.id === event.category)?.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                        <Calendar size={16} className="text-red-600 flex-shrink-0" />
                        <span className="font-medium">
                          {new Date(event.date).toLocaleDateString('fr-FR', { 
                            weekday: 'long', 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      {event.time && (
                        <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                          <Clock size={16} className="text-red-600 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                        <MapPin size={16} className="text-red-600 flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Attendance Info */}
                    {selectedTab === 'upcoming' ? (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-2">
                            <Users size={16} />
                            {event.attendees} / {event.maxAttendees} inscrits
                          </span>
                          <span className="font-medium">
                            {getAttendancePercentage(event.attendees, event.maxAttendees)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-red-500 to-red-600 h-full rounded-full transition-all"
                            style={{ width: `${getAttendancePercentage(event.attendees, event.maxAttendees)}%` }}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <Users size={16} />
                          {event.attendees} participants • {event.gallery} photos
                        </span>
                      </div>
                    )}

                    {/* Action Button */}
                    {selectedTab === 'upcoming' && event.isRegistrationOpen ? (
                      <button className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all text-sm sm:text-base">
                        S'inscrire à l'événement
                      </button>
                    ) : selectedTab === 'past' ? (
                      <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all text-sm sm:text-base">
                        Voir la galerie photos
                      </button>
                    ) : (
                      <button className="w-full py-3 bg-gray-300 text-gray-600 rounded-lg font-medium cursor-not-allowed text-sm sm:text-base" disabled>
                        Inscriptions fermées
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun événement trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Calendar View CTA */}
      <section className="py-10 sm:py-12 bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Consultez le calendrier complet
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Visualisez tous nos événements dans un calendrier interactif
          </p>
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 hover:scale-105 transition-all shadow-lg text-sm sm:text-base">
            <Calendar size={18} className="sm:w-5 sm:h-5" />
            Voir le calendrier
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;
