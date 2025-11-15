import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Clock, User, Search, Plus, Pin, TrendingUp } from 'lucide-react';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Tous les sujets', icon: '💬', count: 45 },
    { id: 'etudes', label: 'Études', icon: '📚', count: 18 },
    { id: 'logement', label: 'Logement', icon: '🏠', count: 12 },
    { id: 'emploi', label: 'Emploi & Stage', icon: '💼', count: 8 },
    { id: 'transport', label: 'Transport', icon: '🚗', count: 5 },
    { id: 'general', label: 'Général', icon: '💡', count: 15 },
  ];

  const topics = [
    {
      id: 1,
      title: 'Besoin de conseils pour trouver un logement proche d\'Ibn Zohr',
      category: 'logement',
      author: 'Aminata K.',
      avatar: 'AK',
      timestamp: 'Il y a 2 heures',
      replies: 12,
      likes: 8,
      views: 145,
      isPinned: false,
      isTrending: true,
      lastReply: {
        author: 'Mohamed S.',
        time: 'Il y a 30 min'
      }
    },
    {
      id: 2,
      title: 'Partage: Notes de cours Génie Informatique L2',
      category: 'etudes',
      author: 'Abdoul R.',
      avatar: 'AR',
      timestamp: 'Il y a 5 heures',
      replies: 25,
      likes: 34,
      views: 289,
      isPinned: true,
      isTrending: false,
      lastReply: {
        author: 'Fatima B.',
        time: 'Il y a 1 heure'
      }
    },
    {
      id: 3,
      title: 'Recherche covoiturage Agadir-Marrakech ce weekend',
      category: 'transport',
      author: 'Ibrahim O.',
      avatar: 'IO',
      timestamp: 'Il y a 1 jour',
      replies: 5,
      likes: 3,
      views: 78,
      isPinned: false,
      isTrending: false,
      lastReply: {
        author: 'Salif T.',
        time: 'Il y a 4 heures'
      }
    },
    {
      id: 4,
      title: 'Stage disponible dans une entreprise IT à Agadir',
      category: 'emploi',
      author: 'Rasmata Z.',
      avatar: 'RZ',
      timestamp: 'Il y a 2 jours',
      replies: 18,
      likes: 22,
      views: 412,
      isPinned: false,
      isTrending: true,
      lastReply: {
        author: 'Boureima M.',
        time: 'Il y a 2 heures'
      }
    },
    {
      id: 5,
      title: 'Comment s\'inscrire à la bibliothèque universitaire?',
      category: 'etudes',
      author: 'Fatoumata D.',
      avatar: 'FD',
      timestamp: 'Il y a 3 jours',
      replies: 9,
      likes: 11,
      views: 167,
      isPinned: false,
      isTrending: false,
      lastReply: {
        author: 'Moussa K.',
        time: 'Il y a 1 jour'
      }
    },
    {
      id: 6,
      title: 'Organisation d\'un groupe de révision pour les examens',
      category: 'etudes',
      author: 'Zenabo S.',
      avatar: 'ZS',
      timestamp: 'Il y a 4 jours',
      replies: 31,
      likes: 28,
      views: 345,
      isPinned: true,
      isTrending: true,
      lastReply: {
        author: 'Alassane Y.',
        time: 'Il y a 3 heures'
      }
    }
  ];

  const getCategoryColor = (categoryId) => {
    const colorMap = {
      etudes: 'bg-blue-100 text-blue-800 border-blue-200',
      logement: 'bg-green-100 text-green-800 border-green-200',
      emploi: 'bg-purple-100 text-purple-800 border-purple-200',
      transport: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      general: 'bg-gray-100 text-gray-800 border-gray-200',
    };
    return colorMap[categoryId] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const pinnedTopics = filteredTopics.filter(t => t.isPinned);
  const regularTopics = filteredTopics.filter(t => !t.isPinned);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Forum Communautaire</h1>
          <p className="text-xl opacity-90">Échangez, partagez et trouvez de l'aide au sein de la communauté</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium">{category.label}</span>
                    </div>
                    <span className={`text-sm font-semibold ${
                      selectedCategory === category.id ? 'text-white' : 'text-gray-500'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* New Topic Button */}
              <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-bold hover:shadow-lg transition-all">
                <Plus size={20} />
                Nouveau sujet
              </button>
            </div>
          </div>

          {/* Main Content - Topics */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un sujet..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Pinned Topics */}
            {pinnedTopics.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Pin size={20} className="text-purple-600" />
                  Sujets épinglés
                </h3>
                <div className="space-y-3">
                  {pinnedTopics.map(topic => (
                    <div
                      key={topic.id}
                      className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(topic.category)}`}>
                              {categories.find(cat => cat.id === topic.category)?.icon}{' '}
                              {categories.find(cat => cat.id === topic.category)?.label}
                            </span>
                            {topic.isTrending && (
                              <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                                <TrendingUp size={12} />
                                Tendance
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <User size={14} />
                              {topic.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {topic.timestamp}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-gray-600">
                              <MessageCircle size={16} />
                              {topic.replies}
                            </span>
                            <span className="flex items-center gap-1 text-gray-600">
                              <ThumbsUp size={16} />
                              {topic.likes}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{topic.views} vues</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Topics */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-purple-600" />
                Discussions récentes
              </h3>
              <div className="space-y-3">
                {regularTopics.map(topic => (
                  <div
                    key={topic.id}
                    className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4 flex-1">
                        {/* Avatar */}
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {topic.avatar}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(topic.category)}`}>
                              {categories.find(cat => cat.id === topic.category)?.icon}{' '}
                              {categories.find(cat => cat.id === topic.category)?.label}
                            </span>
                            {topic.isTrending && (
                              <span className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                                <TrendingUp size={12} />
                                Tendance
                              </span>
                            )}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <User size={14} />
                              {topic.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {topic.timestamp}
                            </span>
                          </div>
                          {topic.lastReply && (
                            <div className="mt-2 text-xs text-gray-500">
                              Dernière réponse par <span className="font-medium">{topic.lastReply.author}</span> {topic.lastReply.time}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-col items-end gap-2 text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-gray-600">
                            <MessageCircle size={16} />
                            {topic.replies}
                          </span>
                          <span className="flex items-center gap-1 text-gray-600">
                            <ThumbsUp size={16} />
                            {topic.likes}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{topic.views} vues</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTopics.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun sujet trouvé</h3>
                  <p className="text-gray-600 mb-6">Essayez de modifier vos critères de recherche</p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors">
                    <Plus size={20} />
                    Créer le premier sujet
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <section className="bg-purple-50 py-12 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Règles du Forum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <h3 className="font-bold text-purple-600 mb-2">✅ À faire</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Respecter tous les membres</li>
                <li>• Poster dans la bonne catégorie</li>
                <li>• Aider les autres membres</li>
                <li>• Utiliser un langage approprié</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border-2 border-red-200">
              <h3 className="font-bold text-red-600 mb-2">❌ À éviter</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Contenu offensant ou discriminatoire</li>
                <li>• Spam ou publicité non autorisée</li>
                <li>• Partage d'informations personnelles</li>
                <li>• Hors-sujet répété</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forum;
