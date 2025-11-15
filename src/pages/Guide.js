import React, { useState } from 'react';
import { MapPin, Building2, GraduationCap, Bus, Home, Heart, Phone, FileText, Map, Search } from 'lucide-react';

const Guide = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'Tout', icon: Map },
    { id: 'universites', label: 'Universités', icon: GraduationCap },
    { id: 'logement', label: 'Logement', icon: Home },
    { id: 'transport', label: 'Transport', icon: Bus },
    { id: 'sante', label: 'Santé', icon: Heart },
    { id: 'administration', label: 'Administration', icon: FileText },
    { id: 'loisirs', label: 'Loisirs', icon: Building2 },
  ];

  const places = [
    {
      id: 1,
      name: 'Université Ibn Zohr',
      category: 'universites',
      address: 'Avenue Mohamed V, Agadir',
      phone: '+212 5288-22716',
      description: 'Principale université publique d\'Agadir avec plusieurs facultés',
      tips: 'Arriver tôt pour les inscriptions. La bibliothèque ferme à 18h.',
      coordinates: { lat: 30.4278, lng: -9.5981 }
    },
    {
      id: 2,
      name: 'ENCG Agadir',
      category: 'universites',
      address: 'Quartier Tilila, Agadir',
      phone: '+212 5288-25525',
      description: 'École Nationale de Commerce et de Gestion',
      tips: 'Excellente formation en commerce et gestion.',
      coordinates: { lat: 30.4156, lng: -9.5734 }
    },
    {
      id: 3,
      name: 'Résidence Universitaire',
      category: 'logement',
      address: 'Cité Universitaire, Agadir',
      phone: '+212 5288-23456',
      description: 'Résidences étudiantes à prix abordable',
      tips: 'Inscriptions en juillet-août. Places limitées, s\'inscrire tôt.',
      coordinates: { lat: 30.4203, lng: -9.5978 }
    },
    {
      id: 4,
      name: 'Quartier Founty - Locations',
      category: 'logement',
      address: 'Founty, Agadir',
      description: 'Zone populaire pour les étudiants avec nombreux appartements',
      tips: 'Prix moyen: 1500-2500 MAD/mois pour une chambre. Proche des universités.',
      coordinates: { lat: 30.4167, lng: -9.5833 }
    },
    {
      id: 5,
      name: 'Gare Routière Agadir',
      category: 'transport',
      address: 'Avenue des F.A.R, Agadir',
      phone: '+212 5288-24401',
      description: 'Principale gare routière pour voyages inter-villes',
      tips: 'Bus pour Casablanca, Marrakech, Essaouira. Réserver à l\'avance pendant les vacances.',
      coordinates: { lat: 30.4213, lng: -9.5932 }
    },
    {
      id: 6,
      name: 'Bus Urbains RATAG',
      category: 'transport',
      address: 'Plusieurs lignes dans Agadir',
      phone: '+212 5288-29000',
      description: 'Réseau de transport public urbain',
      tips: 'Tarif: 3.5 MAD/trajet. Ligne 5 et 22 desservent les universités.',
      coordinates: { lat: 30.4205, lng: -9.5982 }
    },
    {
      id: 7,
      name: 'Hôpital Hassan II',
      category: 'sante',
      address: 'Avenue Moulay Abdellah, Agadir',
      phone: '+212 5288-41739',
      description: 'Hôpital public principal d\'Agadir',
      tips: 'Urgences 24h/24. Amener carte d\'étudiant et carte RAMED si éligible.',
      coordinates: { lat: 30.4234, lng: -9.6012 }
    },
    {
      id: 8,
      name: 'Pharmacies de garde',
      category: 'sante',
      address: 'Plusieurs pharmacies en ville',
      phone: '160 (Info pharmacies de garde)',
      description: 'Service de pharmacies de garde 24h/24',
      tips: 'Composer le 160 pour connaître la pharmacie de garde la plus proche.',
      coordinates: { lat: 30.4202, lng: -9.5981 }
    },
    {
      id: 9,
      name: 'Consulat du Burkina Faso',
      category: 'administration',
      address: 'Casablanca (Consulat le plus proche)',
      phone: '+212 5222-98481',
      description: 'Services consulaires pour les ressortissants burkinabè',
      tips: 'Prendre RDV avant de vous déplacer. Possibilité de contact à distance.',
      coordinates: { lat: 33.5731, lng: -7.5898 }
    },
    {
      id: 10,
      name: 'Préfecture d\'Agadir',
      category: 'administration',
      address: 'Avenue Hassan II, Agadir',
      phone: '+212 5288-23000',
      description: 'Services administratifs et carte de séjour',
      tips: 'Pour renouvellement de carte de séjour. Y aller tôt le matin.',
      coordinates: { lat: 30.4278, lng: -9.5981 }
    },
    {
      id: 11,
      name: 'Marina d\'Agadir',
      category: 'loisirs',
      address: 'Port d\'Agadir',
      description: 'Zone de loisirs avec restaurants et cafés',
      tips: 'Idéal pour se détendre le weekend. Belle vue sur l\'océan.',
      coordinates: { lat: 30.4089, lng: -9.6289 }
    },
    {
      id: 12,
      name: 'Plage d\'Agadir',
      category: 'loisirs',
      address: 'Boulevard du 20 Août',
      description: 'Longue plage de sable fin de 10 km',
      tips: 'Accès gratuit. Parfait pour jogging matinal ou détente.',
      coordinates: { lat: 30.4167, lng: -9.6167 }
    }
  ];

  const quickTips = [
    {
      icon: '💰',
      title: 'Coût de la vie',
      tips: [
        'Budget mensuel étudiant: 1000-3500 MAD',
        'Repas restaurant: 25-40 MAD',
        'Transport mensuel: 100-200 MAD',
        'Internet/Mobile: 50-100 MAD'
      ]
    },
    {
      icon: '📱',
      title: 'Numéros utiles',
      tips: [
        'Police: 19',
        'Pompiers: 15',
        'SAMU: 141',
        'Renseignements: 160'
      ]
    },
    {
      icon: '🏦',
      title: 'Banques populaires',
      tips: [
        'Attijariwafa Bank',
        'BMCE Bank',
        'Banque Populaire',
        'CIH Bank'
      ]
    },
    {
      icon: '🍽️',
      title: 'Cuisine burkinabè',
      tips: [
        'Restaurants africains  (CHEZ EMMA, AKWABA DELICES...)',
        'Ingrédients au marché central',
        'Groupe WhatsApp pour plats à partager',
        'Cuisine collective possible'
      ]
    }
  ];

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Guide de Vie à Agadir</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-90">Toutes les informations pour faciliter votre intégration et votre quotidien</p>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-10 sm:py-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Informations Pratiques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {quickTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Directory */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Annuaire des Lieux Utiles</h2>
          
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un lieu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Places Grid */}
          {filteredPlaces.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map(place => {
                const CategoryIcon = categories.find(cat => cat.id === place.category)?.icon || MapPin;
                return (
                  <div
                    key={place.id}
                    className="bg-white rounded-xl shadow-md border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all p-4 sm:p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <CategoryIcon className="text-green-600" size={20} />
                      </div>
                      <span className="px-2 sm:px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                        {categories.find(cat => cat.id === place.category)?.label}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                    
                    {place.address && (
                      <div className="flex items-start gap-2 text-sm text-gray-600 mb-2">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{place.address}</span>
                      </div>
                    )}
                    
                    {place.phone && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3">
                        <Phone size={14} className="sm:w-4 sm:h-4" />
                        <a href={`tel:${place.phone}`} className="hover:text-green-600">
                          {place.phone}
                        </a>
                      </div>
                    )}
                    
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {place.description}
                    </p>
                    
                    {place.tips && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                        <p className="text-xs text-gray-700">
                          <strong className="text-yellow-800">💡 Conseil:</strong> {place.tips}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun lieu trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Map CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🗺️</div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Carte Interactive</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Visualisez tous ces lieux sur une carte interactive pour mieux vous orienter
          </p>
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-700 rounded-xl font-bold hover:bg-green-50 transition-all shadow-xl text-sm sm:text-base">
            <Map size={18} className="sm:w-5 sm:h-5" />
            Ouvrir la carte
          </button>
        </div>
      </section>

      {/* Newcomers Section */}
      <section className="py-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">
            🎓 Conseils pour les Nouveaux Arrivants
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-l-4 border-red-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">📝 Documents importants</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Préparez vos documents: passeport, attestation d'inscription, certificat de scolarité, 
                photos d'identité. Conservez des copies numériques et papier.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-l-4 border-green-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">🏠 Logement</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Contactez l'AEBM avant votre arrivée. Nous pouvons vous aider à trouver un logement 
                ou vous mettre en contact avec des membres qui cherchent des colocataires.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-l-4 border-yellow-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">💳 Banque et argent</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Ouvrez un compte bancaire local rapidement. Les principales banques sont présentes 
                près des universités. Prévoir environ 2000 MAD pour les premiers jours.
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md border-l-4 border-red-500">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">👥 Intégration</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Participez aux événements de l'AEBM dès votre arrivée. C'est le meilleur moyen 
                de rencontrer d'autres étudiants burkinabè et de créer votre réseau.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Besoin d'aide ou d'informations supplémentaires ?
          </h2>
          <p className="text-gray-600 mb-6">
            N'hésitez pas à contacter le bureau de l'AEBM ou à poser vos questions sur le forum
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm sm:text-base">
              Contacter le bureau
            </button>
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base">
              Poser une question sur le forum
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
