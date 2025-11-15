import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Toutes', color: 'gray' },
    { id: 'annonce', label: 'Annonces', color: 'blue' },
    { id: 'evenement', label: 'Événements', color: 'green' },
    { id: 'academique', label: 'Académique', color: 'purple' },
    { id: 'bureau', label: 'Bureau', color: 'red' },
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Assemblée Générale 2025 - Convocation Officielle',
      excerpt: 'Nous vous convions à l\'Assemblée Générale annuelle qui se tiendra le 15 novembre 2025. Votre présence est vivement souhaitée.',
      date: '2025-11-01',
      author: 'Bureau AEBM',
      category: 'annonce',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      isImportant: true
    },
    {
      id: 2,
      title: 'Nouveau Partenariat avec l\'Université Ibn Zohr',
      excerpt: 'L\'AEBM est fière d\'annoncer un nouveau partenariat stratégique avec l\'Université Ibn Zohr pour faciliter l\'accès aux ressources académiques.',
      date: '2025-10-28',
      author: 'Président',
      category: 'academique',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
      isImportant: true
    },
    {
      id: 3,
      title: 'Soirée Culturelle Burkinabè - Édition 2025',
      excerpt: 'Rejoignez-nous pour une soirée exceptionnelle célébrant la richesse de notre culture avec musique, danse et gastronomie traditionnelle.',
      date: '2025-10-25',
      author: 'Commission Culture',
      category: 'evenement',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
      isImportant: false
    },
    {
      id: 4,
      title: 'Guide des Examens - Session Automne 2025',
      excerpt: 'Retrouvez tous nos conseils et ressources pour bien préparer vos examens de la session d\'automne.',
      date: '2025-10-20',
      author: 'Secrétaire Général',
      category: 'academique',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
      isImportant: false
    },
    {
      id: 5,
      title: 'Compte-rendu de la Réunion du Bureau',
      excerpt: 'Résumé des décisions prises lors de la dernière réunion du bureau exécutif du 10 octobre 2025.',
      date: '2025-10-15',
      author: 'Secrétaire',
      category: 'bureau',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      isImportant: false
    },
    {
      id: 6,
      title: 'Ouverture des Inscriptions pour les Nouveaux Membres',
      excerpt: 'Les inscriptions pour l\'année académique 2025-2026 sont maintenant ouvertes. Bienvenue aux nouveaux étudiants !',
      date: '2025-10-10',
      author: 'Bureau AEBM',
      category: 'annonce',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
      isImportant: true
    }
  ];

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    const colorMap = {
      gray: 'bg-gray-100 text-gray-800',
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      red: 'bg-red-100 text-red-800',
    };
    return colorMap[category?.color || 'gray'];
  };

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const importantNews = filteredNews.filter(article => article.isImportant);
  const regularNews = filteredNews.filter(article => !article.isImportant);

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-xl opacity-90">Restez informé de toutes les nouvelles de l'AEBM Agadir</p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une actualité..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important News */}
          {importantNews.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-red-600 rounded"></span>
                Actualités Importantes
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {importantNews.map(article => (
                  <div
                    key={article.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-red-200 hover:shadow-2xl transition-all cursor-pointer"
                  >
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                          {categories.find(cat => cat.id === article.category)?.label}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User size={14} />
                          {article.author}
                        </div>
                        <button className="flex items-center gap-1 text-red-600 font-medium hover:gap-2 transition-all">
                          Lire plus <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular News */}
          {regularNews.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-gray-400 rounded"></span>
                Toutes les Actualités
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map(article => (
                  <div
                    key={article.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="h-40 bg-gray-200 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                          {categories.find(cat => cat.id === article.category)?.label}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(article.date).toLocaleDateString('fr-FR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <User size={12} />
                          {article.author}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucune actualité trouvée</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
