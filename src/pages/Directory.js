import React, { useState } from 'react';
import { Search, Mail, Phone, School, BookOpen, MapPin, Users, MessageCircle } from 'lucide-react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('all');
  const [selectedNiveau, setSelectedNiveau] = useState('all');

  const universities = ['Toutes', 'Université Ibn Zohr', 'ENCG Agadir', 'ENSA Agadir', 'ESTG Agadir', 'OFPPT'];
  const niveaux = ['Tous', 'L1', 'L2', 'L3', 'M1', 'M2', 'Doctorat'];

  const members = [
    {
      id: 1,
      firstName: 'Aminata',
      lastName: 'Ouedraogo',
      avatar: 'AO',
      university: 'Université Ibn Zohr',
      filiere: 'Génie Informatique',
      niveau: 'M1',
      ville: 'Agadir',
      showEmail: true,
      showPhone: false,
      email: 'aminata.o@exemple.com',
      bio: 'Passionnée par le développement web et l\'IA'
    },
    {
      id: 2,
      firstName: 'Abdoul',
      lastName: 'Kaboré',
      avatar: 'AK',
      university: 'ENCG Agadir',
      filiere: 'Marketing et Commerce',
      niveau: 'M2',
      ville: 'Agadir',
      showEmail: true,
      showPhone: true,
      email: 'abdoul.k@exemple.com',
      phone: '+212 6XX XXX XXX',
      bio: 'Intéressé par l\'entrepreneuriat'
    },
    {
      id: 3,
      firstName: 'Fatoumata',
      lastName: 'Traoré',
      avatar: 'FT',
      university: 'Université Ibn Zohr',
      filiere: 'Médecine',
      niveau: 'L3',
      ville: 'Agadir',
      showEmail: true,
      showPhone: false,
      email: 'fatoumata.t@exemple.com',
      bio: 'Future médecin, membre actif de l\'AEBM'
    },
    {
      id: 4,
      firstName: 'Ibrahim',
      lastName: 'Sawadogo',
      avatar: 'IS',
      university: 'ENSA Agadir',
      filiere: 'Génie Civil',
      niveau: 'L2',
      ville: 'Agadir',
      showEmail: false,
      showPhone: false,
      bio: 'Passionné par l\'architecture et la construction'
    },
    {
      id: 5,
      firstName: 'Rasmata',
      lastName: 'Compaoré',
      avatar: 'RC',
      university: 'ENCG Agadir',
      filiere: 'Finance',
      niveau: 'M1',
      ville: 'Agadir',
      showEmail: true,
      showPhone: true,
      email: 'rasmata.c@exemple.com',
      phone: '+212 6XX XXX XXX',
      bio: 'Trésorière AEBM Agadir 2024-2025'
    },
    {
      id: 6,
      firstName: 'Boureima',
      lastName: 'Zongo',
      avatar: 'BZ',
      university: 'Université Ibn Zohr',
      filiere: 'Droit',
      niveau: 'L3',
      ville: 'Agadir',
      showEmail: true,
      showPhone: false,
      email: 'boureima.z@exemple.com',
      bio: 'Étudiant en droit, membre du bureau'
    },
    {
      id: 7,
      firstName: 'Zenabo',
      lastName: 'Ouattara',
      avatar: 'ZO',
      university: 'ESTG Agadir',
      filiere: 'Gestion des Entreprises',
      niveau: 'L2',
      ville: 'Agadir',
      showEmail: true,
      showPhone: false,
      email: 'zenabo.o@exemple.com',
      bio: 'Aime organiser des événements'
    },
    {
      id: 8,
      firstName: 'Salif',
      lastName: 'Diallo',
      avatar: 'SD',
      university: 'OFPPT',
      filiere: 'Développement Digital',
      niveau: 'L2',
      ville: 'Agadir',
      showEmail: true,
      showPhone: true,
      email: 'salif.d@exemple.com',
      phone: '+212 6XX XXX XXX',
      bio: 'Développeur web full-stack en formation'
    },
    {
      id: 9,
      firstName: 'Mariam',
      lastName: 'Sankara',
      avatar: 'MS',
      university: 'Université Ibn Zohr',
      filiere: 'Biologie',
      niveau: 'M2',
      ville: 'Agadir',
      showEmail: true,
      showPhone: false,
      email: 'mariam.s@exemple.com',
      bio: 'Recherche en biotechnologie'
    },
    {
      id: 10,
      firstName: 'Moussa',
      lastName: 'Yameogo',
      avatar: 'MY',
      university: 'ENSA Agadir',
      filiere: 'Génie Électrique',
      niveau: 'L3',
      ville: 'Agadir',
      showEmail: false,
      showPhone: false,
      bio: 'Passionné par les énergies renouvelables'
    }
  ];

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.filiere.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesUniversity = selectedUniversity === 'all' || 
      selectedUniversity === 'Toutes' || 
      member.university === selectedUniversity;
    
    const matchesNiveau = selectedNiveau === 'all' || 
      selectedNiveau === 'Tous' || 
      member.niveau === selectedNiveau;
    
    return matchesSearch && matchesUniversity && matchesNiveau;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Users size={40} />
            <h1 className="text-4xl md:text-5xl font-bold">Annuaire des Membres</h1>
          </div>
          <p className="text-xl opacity-90">Connectez-vous avec la communauté AEBM Agadir</p>
          <div className="mt-6 flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-lg rounded-lg max-w-md">
            <Users size={20} />
            <span className="font-semibold">{members.length} membres actifs</span>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔒</div>
            <div>
              <h3 className="font-bold text-yellow-900 mb-1">Confidentialité respectée</h3>
              <p className="text-sm text-yellow-800">
                Les informations de contact (email, téléphone) ne sont affichées que si le membre a choisi de les rendre publiques. 
                Respectez la vie privée de chacun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Bar */}
            <div className="md:col-span-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher par nom, prénom ou filière..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* University Filter */}
            <div className="md:col-span-3">
              <div className="relative">
                <School className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedUniversity}
                  onChange={(e) => setSelectedUniversity(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
                >
                  {universities.map(uni => (
                    <option key={uni} value={uni === 'Toutes' ? 'all' : uni}>{uni}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Niveau Filter */}
            <div className="md:col-span-3">
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <select
                  value={selectedNiveau}
                  onChange={(e) => setSelectedNiveau(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
                >
                  {niveaux.map(niveau => (
                    <option key={niveau} value={niveau === 'Tous' ? 'all' : niveau}>{niveau}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            <strong>{filteredMembers.length}</strong> membre{filteredMembers.length > 1 ? 's' : ''} trouvé{filteredMembers.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map(member => (
                <div
                  key={member.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-2 border-gray-200 hover:border-indigo-300"
                >
                  {/* Avatar and Name */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        {member.firstName} {member.lastName}
                      </h3>
                      <p className="text-sm text-gray-600">{member.niveau}</p>
                    </div>
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <School size={16} className="mt-0.5 flex-shrink-0 text-indigo-600" />
                      <span className="line-clamp-2">{member.university}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <BookOpen size={16} className="mt-0.5 flex-shrink-0 text-indigo-600" />
                      <span className="line-clamp-2">{member.filiere}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin size={16} className="text-indigo-600" />
                      <span>{member.ville}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  {member.bio && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 italic">
                      "{member.bio}"
                    </p>
                  )}

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    {member.showEmail ? (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 hover:underline"
                      >
                        <Mail size={16} />
                        <span className="truncate">{member.email}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Mail size={16} />
                        <span className="italic">Email non public</span>
                      </div>
                    )}

                    {member.showPhone ? (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 hover:underline"
                      >
                        <Phone size={16} />
                        {member.phone}
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Phone size={16} />
                        <span className="italic">Téléphone non public</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    Envoyer un message
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun membre trouvé</h3>
              <p className="text-gray-600">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Statistiques de la communauté</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-indigo-50 rounded-xl">
              <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
              <div className="text-gray-700 font-medium">Membres</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-700 font-medium">Universités</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Filières</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Solidarité</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directory;
