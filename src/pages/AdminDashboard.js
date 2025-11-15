import React, { useState } from 'react';
import { 
  BarChart3, Users, Calendar, MessageSquare, DollarSign, FileText, 
  Settings, Plus, Edit2, Trash2, Eye, TrendingUp, AlertCircle,
  CheckCircle, Clock, Search
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalMembers: 150,
    newThisMonth: 12,
    activeCotisations: 145,
    pendingCotisations: 5,
    upcomingEvents: 4,
    forumTopics: 45,
    totalRevenue: 15000,
    monthlyRevenue: 1200
  };

  const recentMembers = [
    { id: 1, name: 'Aminata Ouedraogo', email: 'aminata@exemple.com', university: 'Ibn Zohr', joined: '2025-11-01', status: 'active' },
    { id: 2, name: 'Salif Diallo', email: 'salif@exemple.com', university: 'ENCG', joined: '2025-10-28', status: 'pending' },
    { id: 3, name: 'Mariam Sankara', email: 'mariam@exemple.com', university: 'ENSA', joined: '2025-10-25', status: 'active' },
  ];

  const pendingApprovals = [
    { id: 1, type: 'member', item: 'Nouvelle inscription - Boureima Zongo', date: '2025-11-05' },
    { id: 2, type: 'event', item: 'Proposition événement - Tournoi de basketball', date: '2025-11-04' },
    { id: 3, type: 'news', item: 'Article - Nouvelle collaboration université', date: '2025-11-03' },
  ];

  const recentActivities = [
    { id: 1, action: 'Nouveau membre inscrit', user: 'Aminata Ouedraogo', time: 'Il y a 2 heures', icon: Users, color: 'text-blue-600' },
    { id: 2, action: 'Événement publié', user: 'Admin', time: 'Il y a 5 heures', icon: Calendar, color: 'text-green-600' },
    { id: 3, action: 'Paiement reçu', user: 'Salif Diallo - 100 MAD', time: 'Il y a 1 jour', icon: DollarSign, color: 'text-emerald-600' },
    { id: 4, action: 'Article publié', user: 'Admin', time: 'Il y a 2 jours', icon: FileText, color: 'text-purple-600' },
  ];

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
    { id: 'members', label: 'Membres', icon: Users },
    { id: 'events', label: 'Événements', icon: Calendar },
    { id: 'news', label: 'Actualités', icon: FileText },
    { id: 'treasury', label: 'Trésorerie', icon: DollarSign },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Tableau de Bord Administrateur</h1>
              <p className="text-gray-300">Gestion complète de l'AEBM Agadir</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg">
                <p className="text-sm text-gray-300">Connecté en tant que</p>
                <p className="font-bold">Président AEBM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-red-600 border-b-4 border-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <Users className="text-blue-500" size={32} />
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.totalMembers}</p>
                <p className="text-sm text-gray-600">Membres totaux</p>
                <p className="text-xs text-green-600 mt-1">+{stats.newThisMonth} ce mois</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="text-green-500" size={32} />
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    {Math.round((stats.activeCotisations / stats.totalMembers) * 100)}%
                  </span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.activeCotisations}</p>
                <p className="text-sm text-gray-600">Cotisations à jour</p>
                <p className="text-xs text-orange-600 mt-1">{stats.pendingCotisations} en attente</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="text-purple-500" size={32} />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.upcomingEvents}</p>
                <p className="text-sm text-gray-600">Événements à venir</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="text-emerald-500" size={32} />
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Recettes totales (MAD)</p>
                <p className="text-xs text-green-600 mt-1">+{stats.monthlyRevenue} ce mois</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pending Approvals */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <AlertCircle className="text-orange-500" size={24} />
                    En attente d'approbation
                  </h2>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">
                    {pendingApprovals.length}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {pendingApprovals.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.item}</p>
                        <p className="text-sm text-gray-600">{item.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                          <CheckCircle size={18} />
                        </button>
                        <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="text-blue-500" size={24} />
                  Activité récente
                </h2>
                
                <div className="space-y-4">
                  {recentActivities.map(activity => {
                    const Icon = activity.icon;
                    return (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                          <Icon size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.user}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Recent Members */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Membres récents</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
                  <Plus size={18} />
                  Ajouter un membre
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Nom</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Université</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Inscription</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMembers.map(member => (
                      <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{member.name}</td>
                        <td className="py-3 px-4 text-gray-600 text-sm">{member.email}</td>
                        <td className="py-3 px-4 text-gray-600 text-sm">{member.university}</td>
                        <td className="py-3 px-4 text-gray-600 text-sm">
                          {new Date(member.joined).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            member.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {member.status === 'active' ? 'Actif' : 'En attente'}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Eye size={16} />
                            </button>
                            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                              <Edit2 size={16} />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestion des Membres</h2>
              <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors">
                <Plus size={20} />
                Nouveau membre
              </button>
            </div>
            
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un membre..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="text-center py-12 text-gray-500">
              <Users size={64} className="mx-auto mb-4 text-gray-300" />
              <p>Interface de gestion des membres détaillée</p>
              <p className="text-sm mt-2">Recherche, filtres, import/export, etc.</p>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestion des Événements</h2>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors">
                <Plus size={20} />
                Nouvel événement
              </button>
            </div>

            <div className="text-center py-12 text-gray-500">
              <Calendar size={64} className="mx-auto mb-4 text-gray-300" />
              <p>Interface de gestion des événements</p>
              <p className="text-sm mt-2">Création, modification, gestion des inscriptions</p>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestion des Actualités</h2>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">
                <Plus size={20} />
                Nouvelle actualité
              </button>
            </div>

            <div className="text-center py-12 text-gray-500">
              <FileText size={64} className="mx-auto mb-4 text-gray-300" />
              <p>Interface de gestion des actualités</p>
              <p className="text-sm mt-2">Rédaction, publication, catégorisation</p>
            </div>
          </div>
        )}

        {activeTab === 'treasury' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gestion de la Trésorerie</h2>

            <div className="text-center py-12 text-gray-500">
              <DollarSign size={64} className="mx-auto mb-4 text-gray-300" />
              <p>Interface de gestion de la trésorerie</p>
              <p className="text-sm mt-2">Suivi des cotisations, rapports financiers, exportations</p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Paramètres Système</h2>

            <div className="space-y-6">
              <div className="border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Informations générales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom de l'association</label>
                    <input
                      type="text"
                      defaultValue="AEBM Agadir"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email de contact</label>
                    <input
                      type="email"
                      defaultValue="contact@aebm-agadir.ma"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      defaultValue="+212 6XX XXX XXX"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Montant cotisation (MAD)</label>
                    <input
                      type="number"
                      defaultValue="100"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-gray-700">Notifications par email</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-red-600 rounded" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-700">Alertes nouveaux membres</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-red-600 rounded" />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-gray-700">Alertes paiements</span>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-red-600 rounded" />
                  </label>
                </div>
              </div>

              <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors">
                Sauvegarder les modifications
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
